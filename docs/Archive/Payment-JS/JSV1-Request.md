---
tags: [Online, Card Not Present, Checkout, Payment JS]
---


# Checkout - JS v1 Integration Guide

<!-- theme: danger -->
> Version 1 of Commerce Hub's Checkout JS solution is being sunset in favor of [Version 2](?path=docs/Online-Mobile-Digital/Checkout/Payment-JS/JS-Request.md). We strongly recommend switching to the v2 solution.

## Step 1: Acquire Credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request is required to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the [JS request](#authentication) and `sessionId` required in the [charges or tokens request](#step-3-submit-request).

<!-- theme: info -->
> When integrating with 3-D Secure `authentication3DS` _true_ in required in `transactionDetails`, for more information see the [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Secure-Data-Capture.md) integration article.

---

## Step 2: Configure SDK

The following code snippets are required to create and initialize the SDK configuration for the JS.

### JS SDK

- **Cert:** https://cert.api.fiservapps.com/ch/js/v1/commercehub-client-sdk.js
- **Prod:** https://prod.api.fiservapps.com/ch/js/v1/commercehub-client-sdk.js

The JS script tag is required in the website by downloading or including the following code:

```php
<script id="commercehub" src="https://prod.api.fiservapps.com/ch/js/v1/commercehub-client-sdk.js"></script>
```

---

### Authentication Credentials

Authentication credentials are acquired at boarding and from the [security credentials request](?path=docs/Resources/API-Documents/Security/Credentials.md) in step 1.

```javascript
const authorization = 'ACCESS_TOKEN';
const apiKey = 'API_KEY';
const formConfig = {
    "merchantId": 'MERCHANT_ID',
    "publicKey": 'PUBLIC_KEY',
    "asymmetricEncryptionAlgorithm": 'ASYMETRIC_ENCRYPTION_ALGORITHM',
    "keyId": 'KEY_ID'
};
```

---


### Payment Form


The following is the global `commercehub` object which includes the JS:

```javascript
const form = new commercehub.FiservSaqAEp({/* configuration object */}, authorization, apiKey);
form.loadPaymentForm("payment-saq-a-ep-form-div");
```

Configure the `loadPaymentForm` and pass the merchant defined `div id` matching  the HTML container. Once the page is loaded the form will render in the container.

```html
<div id="payment-saq-a-ep-form-div"></div>
```
 
```javascript
form.loadPaymentForm("payment-saq-a-ep-form-div")
```

A successful card capture in the JS will be handled by `.then()` in the `loadPaymentForm` and is responsible for contacting the merchant's backend/server.
 

```javascript
.then((next) => { });
```

Errors in JS should be handled in the .catch() of the promise for loadPaymentForm.

```javascript
.catch((error) => { });
```

---

### Payment Form Example

```php
<html>
    <head>
        <meta charset="utf-8">
        <script id="commercehub" src="https://cert.api.fiservapps.com/ch/js/v1/commercehub-client-sdk.js"></script>
    </head>
    <body>
        <div id="payment-saq-a-ep-form-div"></div>
        <script>
            const authorization = '50e56404-4595-41b0-a5e7-44b9e4e6569b';
            const apiKey = '1951fe5b30e34cdaad758b8874140872';
            const formConfig = {
                "merchantId": '100008000003683',
                "publicKey": 'MIIBIjANBgkqhkiG9w0BAQEFA....',
                "symmetricEncryptionAlgorithm": 'AES_GCM',
                "asymmetricEncryptionAlgorithm": 'RSA',
                "keyId": 'cc33a193-92b9-4663-ad66-3ddfd8984ded'
            };
            const form = new commercehub.FiservSaqAEp(formConfig, authorization, apiKey);
            form.loadPaymentForm("payment-saq-a-ep-form-div")
                .then((next) => {})
                .catch((error) => {});
        </script>
    </body>
</html>
```

---

## Step 3: Submit a Request

Submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request with the `sourceType` of `PaymentSession` and the `sessionID` from the [authorization](#step-1-authentication) request.

### Payload Example

#### Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

<!--
type: tab
titles: Request, Response
-->

Example of a charge payload request.

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
- [Credentials Request](?path=docs/Resources/API-Documents/Payments_VAS/Credentials.md)
- [Customize JS Payment Form](?path=docs/Online-Mobile-Digital/Checkout/Payment-JS/JS-Customization.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Payment JS Integration](?path=docs/Online-Mobile-Digital/Checkout/Payment-JS/Payment-JS.md)
- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)

---
