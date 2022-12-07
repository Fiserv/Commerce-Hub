---
tags: [Online, Card Not Present, Secure Data Capture, iFrame]
---

# Secure Data Capture - iFrame Integration Guide

## Step 1: Acquire Credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request is required to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the [iFrame request](#authentication) and `sessionId` required in the [charges or tokens request](#step-3-submit-request).


---

## Step 2: Configure iFrame

The following code snippets are required to create and initialize the SDK configuration for the iFrame.

### iFrame SDK

The iFrame JS script tag is required in the website by downloading or including the following code:

```php

<script id="commercehub" src="https://prod.api.fiservapps.com/ch/sdk/v1/commercehub-client-sdk.js"></script>

```

---

### Authentication Credentials

Authentication credentials are acquired at boarding and from the [security credentials request](?path=docs/Resources/API-Documents/Security/Credentials.md) in step 1.

<!-- theme: warning -->
> To mitigate the risk of [`clickjacking`](?path=docs/Resources/FAQs-Glossary/Glossary.md#clickjacking), accepted domains should be passed in the security credentials request. Commerce Hub will store this information and use it to generate the *Content-Security-Policy: frame-ancestors <http_source_list>* and *X-Frame-Options:<http_source> response headers*. 


```javascript

const authorization = 'ACCESS_TOKEN';
const apiKey = 'API_KEY'; 
const formConfig = {
   "merchantId": 'MERCHANT_ID',
   "publicKey": 'PUBLIC_KEY',
   "symmetricEncryptionAlgorithm": 'SYMMETRIC_ENCRYPTION_ALGORTIHM'
   };
   
```

### Payment Form

Add the global `commercehub` object which includes the iFrame JS form. The `commercehub` object name should match with the script tag id that loads the SDK.

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
        <script id="commercehub" src="https://cert.api.fiservapps.com/ch/js/commercehub-client-sdk.js"></script>
    </head>
    <body>
        <div id="payment-saq-a-form-div"></div>
        <script>
            const authorization = '50e56404-4595-41b0-a5e7-44b9e4e6569b';
            const apiKey = '1951fe5b30e34cdaad758b8874140872'; 
            const formConfig = {
                "merchantId": '100204342250',
                "publicKey": 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCUYMJPHx8HLM1hUGNr1WOteYFt+PC0RZTpSeOcMhyQreTcfSwNi75wRR0k+QvMk4u8fm8A/Vq7tRU+LRbSTiFuSDJqszQGybm1LWoDoYuTD3QkF8r3Ej1VkhR7nBB8jlK+tpbWsigF3PeWUmfVEIA/qfLKhNDpUY71lyw8pxZTfwIDAQAB=',
                "symmetricEncryptionAlgorithm": 'AES_GCM'
            };
            const form = new commercehub.Fiserv(formConfig, authorization, apiKey);
              form.loadPaymentForm("payment-saq-a-form-div")
                .then((next) => {
                })
                .catch((error) => {
                });
        </script>
    </body>
 
</html>
```
---

## Step 3: Submit Request

Submit a charge or tokenization request after a successful response which identifies the card data is captured in Commerce Hub. The request will use the payment `sourceType` of `PaymentSession` and the `sessionId` from the [credentials](#step-1-authentication) request. 

<!-- theme: info -->
>If a successful response is not received, best practice is to still submit the transaction. If an error occurs, the iFrame will need to be re-displayed so the customer can re-submit their payment information.


### Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

<!-- theme: success -->
>**POST** `/payments-vas/v1/tokens`


### Payload Example

<!-- theme: info -->
> Additional fields can be submitted as part of the request call. Additional fields can be found in the [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Charges Response, Tokens Response
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
    "merchantId": "123456789012345",
    "terminalId": "123456"
  }
}
```


<!--
type: tab
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
         "processor": "FISERV",
         "host": "NASHVILLE",
         "responseCode": "000",
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
-->

##### Example of a tokenization (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "TOKENIZE",
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
  "paymentTokens": [
    {
      "tokenData": "8519371934460009",
      "tokenSource": "TRANSARMOR",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    },
    {
      "tokenData": "8519371934460010",
      "tokenSource": "CHASE",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    }
  ],
  "paymentReceipt": {
    "approvedAmount": {
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
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "fiserv",
      "responseCode": "000000",
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
    "captureFlag": true,
    "merchantInvoiceNumber": "123456789012"
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
- [iFrame Event Listener](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
