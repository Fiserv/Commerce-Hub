---
tags: [carat, commerce-hub, enterprise, online, card-not-present, secure-payment-form, payment-js, tokenization]
---

# Create an iFrame JS Request

## Step 1: Authentication

An authentication request is required to recive an AccessToken. This will be your authorization and API Key used when creating an iFrame JS request.  

1. A RESTful API [credentials](?path=docs/Resources/API-Documents/Payments_VAS/Credentials.md) request is made to obtain the authorization.
2. The client `accessToken`, `sessionId`, and `publicKey` will be part of credentials response.
3. Create the [authorization](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the iFrame request.


---

## Step 2: Configuration


### iFrame SDK

The iFrame JS script tag is required in the website by downloading or including the following code:

```php

<script id="commercehub" src="..{commercehub-domain}../js/commercehub-client-sdk.js"></script>

```

---

### Authentication

The following script is required to submit the authentication of the iFrame JS:

```javascript

const authorization = 'CLIENT_AUTHORIZATION';
const apiKey = 'CLIENT_API_KEY';
const formConfig = {
  "merchantId": 'MERCHANT_ID',
  "publicKey": 'PUBLIC_KEY'
};

```

---

### Payment Form

Add the global `commercehub` object which includes the iFrame JS form:

```javascript

const form = new commercehub.Fiserv(formConfig, authorization, apiKey);

```

Configure the `loadPaymentForm` and pass the merchant defined `div id` matching  the HTML container. Once the page is loaded the form will render in the container.

```html

<div id="payment-saq-a-form-div"></div>

```
 
```javascript

form.loadPaymentForm("payment-saq-a-form-div");

```

A successful card capture in the iFrame JS will be handled by `.then()` in the `loadPaymentForm` and is responsible for contacting the merchant's backend/server.
 

```javascript

.then((next) => { });

```

Errors in iFrame JS should be handled in the `.catch()` of the  `loadPaymentForm`. 

```javascript

.catch((error) => { });

```
---

### Payment Form Example 


```php
<html>
    <head>
        <meta charset="utf-8">
        <script id="commercehub" src="https://test.api.fiservapps.com/ch/js/commercehub-client-sdk.js"></script>
    </head>
    <body>
        <div id="payment-saq-a-form-div"></div>
        <script>
            const authorization = 'CLIENT_AUTHORIZATION'; // merchant call to ../security/credentials to receive this
            const apiKey = 'CLIENT_API_KEY'; // merchant receives this during on-boarding process
 
            const formConfig = {
                "merchantId": 'MERCHANT_ID', // merchant receives this during on-boarding process
                "publicKey": 'PUBLIC_KEY' // merchant call to ../security/credentials to receive this
            };
            const form = new commercehub.Fiserv(formConfig, authorization, apiKey);
            form.loadPaymentForm("payment-saq-a-form-div")
            .then((next) => {
                /* Merchant must call their own backend which will in turn call either the /charges or /tokens endpoints */
            })
            .catch((error) => {
                /* This catch is hit when there's a problem capturing the card details on submit
                the merchant can choose the failure behaviour at this point, redirect to a failure page, retry, etc */
            });
        </script>
    </body>
 
</html>
```
---

## Step 4: Submit Payment Request

Submit a charge or tokenization request with the payment `sourceType` of `PaymentSession` and the `sessionId` from the [authorization](#step-1-authentication) request. 

### Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

<!-- theme: success -->
>**POST** `/payments/v1/tokens`


### Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request.

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
    "captureFlag": true,
    "accountVerification": false,
    "merchantTransactionId": "RKTransID-768086381518"
  },
  "merchantDetails": {
    "merchantId": "123456789012345"
  }
}
```


<!--
type: tab
title: Charges Response
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [HTTP Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json

{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   }, 
   "source":{
      "sourceType": "PaymentSession",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "10",
         "expirationYear": "2030"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
         "currency": "USD"
      },
      "merchantName": "Merchant Name",
      "merchantAddress": "123 Peach Ave",
      "merchantCity": "Atlanta",
      "merchantStateOrProvince": "GA",
      "merchantPostalCode": "12345",
      "merchantCountry": "US",
      "merchantURL": "https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "fiserv",
         "responseCode": "000000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021-06-20T23:42:48Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2021-06-20T23:42:48Z"
         }
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   }
}
```

<!--
type: tab
title: Tokens Response
-->

##### Example of a tokenization (201: Created) response.

```json
{
   "gatewayResponse":{
      "transactionType": "TOKENIZE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source":{
      "sourceType": "PaymentToken",
      "tokenSource": "TRANSARMOR",
      "tokenData": "8519371934460009",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "10",
         "expirationYear": "2030"
      }
   },
   "processorResponseDetails":{
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "fiserv",
      "responseCode": "000000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
   }
}
```

<!-- type: tab-end -->

---

## See Also

- Customize iFrame Payment Form
- Payment JS Integration
