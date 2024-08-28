---
tags: [Payment Sources, Network Token, Paze, Alternate Payments, Wallet, Online]
---

# Paze Checkout: Integration guide

<!-- theme: info -->
> Commerce Hub's Paze solution requires the integrated domains to be [whitelisted](?path=docs/Resources/API-Documents/Security/Whitelist.md) for the Content-Security-Policy. Please contact your account representative for more information.

---

## Step 1: Acquire credentials

Send a [Credentials API request](?path=docs/Resources/API-Documents/Security/Credentials.md). There are two data elements in the response that are needed for a Paze integration:

- `sessionId`: this needs to be saved for the user session, this is the identifier that will be used later on to perform an authorization or sale against the card selected via the Paze UI
- `accessToken`: this needs to be provided to the SDK in the browser so that the browser can authenticate with our API

<!-- theme: danger -->
> This request must be invoked as a server API call for each form submission and should not be attempted directly from the browser.

---

## Step 2: Load SDK in browser

The following code snippet is an example HTML script tag for loading the SDK:

```html
<script src="https://commercehub-secure-data-capture.fiservapps.com/{version}/checkout.js"></script>
```

<!-- theme: warning -->
> It is recommended to use the latest [version](?path=docs/Online-Mobile-Digital/Checkout/Checkout-Version-Release.md) of Commerce Hub's Checkout SDK to ensure PCI and security compliance.

---

## Step 3: Initialize the SDK

The below code snippet shows how to initialize the Paze component. The return of this function is a Promise that will resolve to a JavaScript object that can be used to interact with Paze.

```javascript
const pazePromise = window.fiserv.components.paze({
  environment: "CERT",
  apiKey: "API_KEY",
  accessToken: "ACCESS_TOKEN",
  merchantId: "MERCHANT_ID",
  displayName: "My Site", // this will be displayed in the Paze UI
});
```

---

## Step 4: Launch the Paze UI

On invoking `selectPaymentMethod` the Checkout SDK sets up and hands over control to the third-party Paze SDK.

Checkout will first create an iFrame overlay then a pop-up will open *(new window)* where the Paze experience is located and proceeds through the following user steps:

1. User authentication via mobile phone one-time code *(via text)*
2. First-time setup if applicable
3. Card selection and confirmation *(on first-time it will ask for CVV)*

On confirmation of a card selection the pop-up window will display a loading widget and then close, the iFrame overlay will also close and control will be returned to the merchant experience.

<!--
type: tab
titles: Request, Response
-->

<!-- theme: info -->
> Subsequent calls can be made to allow changing to a different card selection through Paze.

```javascript
const selectionPromise = paze.selectPaymentMethod({
    customer: {
        email: "email@domain.com",
    },

    amount: {
        currency: "USD",
        total: "100.00",
    },
    ecom: {
        cartContainsGiftCard: true,
        orderForPickup: true,
        orderQuantity: "1",
        orderHighestCost: "100.00",
        shippingAddress: {
            name: "First and Last",
            street: "ADDRESS_LINE_1",
            houseNumberOrName: "ADDRESS_LINE_2",
            recipientNameOrAddress: "ADDRESS_LINE_3",
            city: "CITY",
            stateOrProvince: "STATE",
            postalCode: "POSTAL_CODE",
            country: "COUNTRY_CODE",
        }
    },
});
```
<!--
type: tab
-->

The `selectPaymentMethod` returns a Promise that on success resolves to a JavaScript object with the following schema:

<!-- theme: info -->
> Not all fields may be present.

```javascript
{
    customer: {
        firstName: "First",
        lastName: "Last",
        fullName: "First Last",
        email: "email@domain.com",
        phone: [{
            countryCode: "1",
            phoneNumber: "1231231234",
        }],
        locale: "en-US",
    },
    card: {
        last4: "1234",
        expiration: {
            month: "01",
            year: "2025",
        },
        descriptor: "Cashback Rewards",
        recognition
        type: "CREDIT",
        brand: "VISA",
        art: {
            uri: "<url for brand logo returned here>"
        },
    },
}
```

<!-- type: tab-end -->

---

## Step 5: Submit Paze payment method

The parameters object is expected to have the same fields as `selectPaymentMethod`, if nothing has changed since it was previously called then parameter is optional. The `submitPromise` in the example code will resolve to the card capture API.

```javascript
const submitPromise = paze.submit(params);
```

---

## Step 6: Submit an API request

Submit a [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) or [Tokens API request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) with the `sourceType` of *PaymentSession* and the `sessionID` from the [credentials](#step-1-acquire-credentials) request.

<!-- theme: info -->
> If a successful response is not received, best practice is to still submit the transaction. If an [error occurs](?path=docs/Resources/Guides/Payment-Sources/Paze/Paze-Error-Handling.md), the iFrame will need to be re-displayed so the customer can re-submit their payment information.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum parameters for a successful Paze [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) using a *PaymentSession*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentSession",
    "sessionId": "df8c33d2-af27-4a3a-b7a0-61d4edf09cad"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01a2756b6a27565d49f2c165ac340b5e7e",
      "transactionTimestamp": "2024-08-15T13:37:46.14276513Z",
      "apiTraceId": "fefd057a3a584269b5586fbb32271b98",
      "clientRequestId": "402b9cbd-c377-4c36-aad8-6794b45de1b7",
      "transactionId": "fefd057a3a584269b5586fbb32271b98",
      "apiKey": "wTAh9pz1M8UkR1MDnv1wSsyG00RlovZtvEkAKDzXsgTjU32X"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "008124",
      "referenceNumber": "6fbb32271b98",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "networkRouted": "VISA",
      "networkInternationalId": "0001",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
    }
  },
  "transactionDetails": {
    "captureFlag": true,
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM",
    "authorizationCharacteristicsIndicator": "W",
    "hostPosEntryMode": "010",
    "hostPosConditionCode": "59",
    "additionalPosInformation": {
      "stan": "003877",
      "posFeatures": {
        "pinAuthenticationCapability": "UNSPECIFIED",
        "terminalEntryCapability": "UNSPECIFIED"
      }
    }
  },
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "validationCode": "G331",
    "transactionIdentifier": "013004343636571"
  },
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "4895370018382363",
    "card": {
      "expirationMonth": "05",
      "expirationYear": "2032",
      "bin": "489537",
      "last4": "2363",
      "scheme": "VISA"
    }
  },
  "paymentTokens": [
    {
      "tokenData": "0724125326420026",
      "tokenSource": "TRANSARMOR",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    }
  ]
}
```

<!-- type: tab-end -->

---

## See Also

- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Domains Whitelist](?path=docs/Resources/API-Documents/Security/Whitelist.md)
- [Paze Error Handling](?path=docs/Resources/Guides/Payment-Sources/Paze/Paze-Error-Handling.md)
- [Checkout Solutions](?path=docs/Online-Mobile-Digital/Checkout/CHeckout.md)
- [Checkout Version Release Notes](?path=docs/Online-Mobile-Digital/Checkout/Checkout-Version-Release.md)

---
