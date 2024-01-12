---
tags: [Online, Card Not Present, Secure Data Capture, iFrame]
---

# Secure Data Capture - iFrame v2 Integration Guide

## Step 1: Acquire Credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request is required to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the [iFrame request](#authentication) and `sessionId` required in the [charges or tokens request](#step-3-submit-request).

This request must be invoked as a server→API call for each form submission and should not be attempted directly from the browser.

<!-- theme: info -->
> When integrating with 3-D Secure `authentication3DS` _true_ in required in `transactionDetails`, for more information see the [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Secure-Data-Capture.md) integration article.

---

## Step 2: Configure iFrame

The iFrame JS script tag is required in the website by downloading or including the following code.

```php
<script src="https://commercehub-secure-data-capture.fiservapps.com/v2/saq-a.js"></script>
```

---

## Step 3: Create Payment Form

Instantiate the payment form within your JavaScript.

<!--
type: tab
titles: Variables, JavaScript
-->

The below table identifies the parameters used in `createPaymentForm`.

| Field | Required | Description |
| ----- | -------- | ----------- |
| `formPromise` | &#10004; | Promise will resolve to an instance of the payment form on success, or an error on failure |
| `environment` | &#10004; | Defines the Commerce Hub environment; **_PROD_** or **_CERT_** |
| `supportedCardBrands` | | Defines [supported card brands](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md), defaults to no restrictions |
| `fields` | &#10004; | Defines the [field configuration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#field-configuration) for the payment form |
| `validCssClass` | | CSS class will be assigned to a field's input element when they have passed validation |
| `invalidCssClass` | | CSS class will be assigned to a field's input element when they have failed validation and are in an invalid state |
| `font` | | Defines [custom fonts](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#fonts) for the payment form  |
| `css` | | Customized [CSS styling](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#css) for the payment form  |
| `hooks` | | Defines [event hook](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md) handling |

<!--
type: tab
-->

Example of JavaScript `createPaymentForm`.

```javascript
const formPromise = window.fiserv.commercehub.createPaymentForm({
    data: {
        environment: "CERT",
        supportedCardBrands: [],
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

<!-- type: tab-end -->

---

## Step 4: Form Submission

When ready to submit the form data for card capture, such as when the form data is all valid and the user clicks a submit button, you can programmatically trigger submission for the iFrame payment form fields via the `submit` [method](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Methods.md).

```javascript
const submissionPromise = paymentForm.submit({
    apiKey: "API_KEY";
    accessToken: "ACCESS_TOKEN",
    publicKey: "PUBLIC_KEY",
    keyId: "KEY_ID",
    merchantId: "MERCHANT_ID",
    terminalId: "TERMINAL_ID",
});
```

---

## Step 5: Submit an API Request

Submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request with the `sourceType` of `PaymentSession` and the `sessionID` from the [credentials](#step-1-acquire-credentials) request.

<!-- theme: info -->
> If a successful response is not received, best practice is to still submit the transaction. If an [error occurs](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md#error-handling), the iFrame will need to be re-displayed so the customer can re-submit their payment information.

### Charges Example

<!-- theme: info -->
> Additional fields can be submitted as part of the request call. Additional fields can be found in the [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

Example of a charges payload request.

```json
{
  "amount": {
    "total": "12.04",
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
    "terminalId": "123456"
  }
}
```

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
    "sourceType": "PaymentSession",
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
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Customize iFrame Payment Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md)
- [iFrame Event Handling](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md)
- [iFrame Methods](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Methods.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
