---
tags: [Online, Card Not Present, Checkout, Hosted Fields, iFrame]
---

# Hosted Fields: Integration guide

<!-- theme: danger -->
> Commerce Hub's Checkout Hosted Fields solution requires the integrated domains to be whitelisted for the Content-Security-Policy in Merchant Configuration and Boarding. Please contact your account representative for more information.

## Step 1: Acquire credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request is required to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the [form submission](#step-4-form-submission) and `sessionId` required in the [charges or tokens request](#step-5-submit-an-api-request).

<!-- theme: danger -->
> This request must be invoked as a server API call for each form submission and should not be attempted directly from the browser.

<!-- theme: info -->
> A `sessionId` is a nonce token obtained from a security credentials request. It is used as the *PaymentSession* in [Checkout integrations](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) to submit a transaction to our application. The `sessionId` expires once it goes out to the processor or after 30 minutes of it's generation, whichever comes first.

---

## Step 2: Load SDK in browser

The following code snippet is an example HTML script tag for loading the SDK:

```html
<script src="https://commercehub-secure-data-capture.fiservapps.com/{version}/checkout.js"></script>
```

<!-- theme: warning -->
> It is recommended to use the latest [version](?path=docs/Online-Mobile-Digital/Checkout/Checkout-Version-Release.md) of Commerce Hub's Checkout SDK to ensure PCI and security compliance.

---

## Step 3: Create the payment form

Instantiate the payment form within your JavaScript.

<!-- theme: info -->
> Commerce Hub supports encrypting `securityCode` data only when processing a [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) payment instrument such as a [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or an encrypted [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md). This process enhances security and serves validation purposes.

<!--
type: tab
titles: JavaScript, Variables
-->

Example of JavaScript `createPaymentForm`.

```javascript
const formPromise = window.fiserv.components.paymentFields({
  data: {
    environment: "CERT",
    paymentMethod: "CREDIT_CARD",
    domain: "*.merchant.com",
    additionalFrameAncestor: "ancestorpage.merchant.com",
    supportedCardBrands: [],
    customCardBrands: [],
    fields: {},
    contextualCssClassNames: {
      valid: "validCssClass",
      invalid: "invalidCssClass",
    },
    font: {},
    css: {},
  },
  hooks: {},
});
```
<!--
type: tab
-->

The below table identifies the parameters used in `createPaymentForm`.

| Field | Required | Description |
| ----- | -------- | ----------- |
| `formPromise` | &#10004; | Promise will resolve to an instance of the payment form on success, or an error on failure |
| `environment` | &#10004; | Defines the Commerce Hub environment; ***PROD*** or ***CERT*** |
| `paymentMethod` | | Identifies if the payment method is a *CREDIT_CARD* *(credit and PINless debit)*, *GIFT* card, or *BANK_ACCOUNT* |
| `domain` | | Defaults to the hostname of the page the SDK is loaded into and is useful for referencing hostnames in the whitelist that use a wildcard |
| `additionalFrameAncestor` | | Indicates that the page the SDK is loaded into is itself an iFrame and what the parent page hostnames are so that each can be checked against the CDN whitelist and included in the resulting iFrame Content-Security-Policy value *(this is for supporting deeply nested iFrames scenario)*. **Note:** The entire path of the page hostnames, starting above the page that loaded the SDK, up to and including the root frame *(or page)* that displays in the browser URL needs to be included in this field where applicable. The expected data type of the field is a list of strings where each entry is a hostname (ports/path/protocol are not part of the hostname) |
| `fields` | &#10004; | Defines the field configuration for the payment form based on a [*CREDIT_CARD*](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-PaymentCard.md), [*BANK_ACCOUNT*](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-PaymentCheck.md) or [*GIFT*](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Gift.md) `paymentMethod` |
| `valid` | | CSS class will be assigned to a field's input element when they have passed validation |
| `invalid` | | CSS class will be assigned to a field's input element when they have failed validation and are in an invalid state |
| `font` | | Defines [custom fonts](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md#custom-fonts) for the payment form  |
| `css` | | Customized [CSS styling](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md#custom-css-styling) for the payment form  |
| `hooks` | | Defines [event hook](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md) handling |

<!-- type: tab-end -->

---

## Step 4: Submit the form

When ready to submit the form data for card capture, such as when the form data is all valid and the user clicks a submit button, you can programmatically trigger submission for the Checkout payment form fields via the `submit` [method](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Methods.md).

```javascript
const submissionPromise = paymentForm.submit({
  apiKey: "API_KEY";
  accessToken: "ACCESS_TOKEN",
  createToken: "false",
  publicKey: "PUBLIC_KEY",
  keyId: "KEY_ID",
  merchantId: "MERCHANT_ID",
  terminalId: "TERMINAL_ID",
});
```

---

## Step 5: Submit an API request

Submit a [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) or [Tokens API request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request with the `sourceType` of `PaymentSession` and the `sessionID` from the [credentials request](#step-1-acquire-credentials).

<!-- theme: info -->
> If a successful response is not received, best practice is to still submit the transaction. If an [error occurs](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md#error-handling), the Checkout will need to be re-displayed so the customer can re-submit their payment information.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum parameters for a successful Charges API request using a *PaymentSession*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

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

<!--
type: tab
-->

Example of a Charges API (201: Created) response.

<!-- theme: info -->
> See [response handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Checkout SDK](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [Customize the Hosted Fields form](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md)
- [Handle Hosted Fields events](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md)
- [Supported Hosted Fields methods](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Methods.md)
- [Hosted Fields HTML examples](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-HTML-Examples.md)
- [Version Release Notes](?path=docs/Online-Mobile-Digital/Checkout/Checkout-Version-Release.md)

---
