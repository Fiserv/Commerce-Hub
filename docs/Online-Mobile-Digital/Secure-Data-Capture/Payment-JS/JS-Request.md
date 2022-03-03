---
tags: [carat, commerce-hub, enterprise, online, card-not-present, secure-payment-form, payment-js, tokenization]
---

# Create a JavaScript Request

## Step 1: Authentication

A [credentials](?path=docs/Resources/API-Documents/Payments_VAS/Credentials.md) request is required to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the [JS request](#authentication) and `sessionId` required in the [charges or tokens request](#step-3-submit-request). 

---

## Step 2: Configuration

### JS SDK

The JS script tag is required in the website by downloading or including the following code:

```php

<script id="commercehub" src="..{commercehub-domain}../js/commercehub-client-sdk.js"></script>

```

---


### Authentication

The following script is required to submit the authentication of the JS:

```javascript

const authorization = 'NthfE86HpAYaxu3jm6cBJiY0JbYR'; // merchant call to ../security/credentials to receive this
const apiKey = 'gSAXZehdtSlhDGpumkVjlZZ4AXFBAfoK'; // merchant receives this during on-boarding process
 
const formConfig = {
  "merchantId": '100004000002050', // merchant receives this during on-boarding process
  "publicKey": 'TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFtbnBnQUpTellsWVNzNjZwUWc2S3hBdkN3NXk3dXNWRmlLODdRU2FSZzNOYzdodzlVVE5DWXh3L3UxME5MblA1RW1OblVWS2FKcWE4SHdnS1RibmxWNTRsZnhBMkV5OEt6dEtsYVBYMlh2QWw3bXVNVFNsMjZZdzd2ZU1pUUVPSExIL2RQaGQxUlo3UUwwcE1KeVIrbTYzMHhwVDRoakliZkJJV0VTNXRRa3lnSk5LQ2RXT0tQY2VkU2hLeUV5YzYraW1DNTk5VjdETUVrYXVqL2haWVhYOTlyQXJIV3NkYkRmZVpaWlNRcjVVK0lnWmEvdFJiTlA2MUFrKy9KVnFDby8wZ3BzNVJUOU9XV1hYUzYwYlVEby9nSCtweVcrRkpKdjBxYWFPT0IrWjFNN1dCQlBNeEdXZGpJT2VscjR6eGRUdXhHWlpxWG1ad1hTelQyaVZ1b3dJREFRQUI=', // merchant call to ../security/credentials to receive this
   "symmetricEncryptionAlgorithm": 'AES_GCM' // merchant call to ../security/credentials to receive this
    }
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

<div id="payment-saq-aep-form-div"></div>

```
 
```javascript

form.loadPaymentForm("payment-saq-aep-form-div");

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
        <script id="commercehub" src="..{commercehub-domain}../js/commercehub-client-sdk.js"></script>
    </head>
    <body>
        <div id="payment-saq-a-ep-form-div"></div>
        <script>
            // Merchant will make a call to their own server which will in turn call ../security/credentials end point for creating a
            // payment session, merchant will receive details in the response, e.g. CLIENT_ACCESS_TOKEN, PUBLIC_KEY, etc.
            const authorization = 'NthfE86HpAYaxu3jm6cBJiY0JbYR'; // merchant call to ../security/credentials to receive this
            const apiKey = 'gSAXZehdtSlhDGpumkVjlZZ4AXFBAfoK'; // merchant receives this during on-boarding process
 
            const formConfig = {
                "merchantId": '100004000002050', // merchant receives this during on-boarding process
                "publicKey": 'TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFtbnBnQUpTellsWVNzNjZwUWc2S3hBdkN3NXk3dXNWRmlLODdRU2FSZzNOYzdodzlVVE5DWXh3L3UxME5MblA1RW1OblVWS2FKcWE4SHdnS1RibmxWNTRsZnhBMkV5OEt6dEtsYVBYMlh2QWw3bXVNVFNsMjZZdzd2ZU1pUUVPSExIL2RQaGQxUlo3UUwwcE1KeVIrbTYzMHhwVDRoakliZkJJV0VTNXRRa3lnSk5LQ2RXT0tQY2VkU2hLeUV5YzYraW1DNTk5VjdETUVrYXVqL2haWVhYOTlyQXJIV3NkYkRmZVpaWlNRcjVVK0lnWmEvdFJiTlA2MUFrKy9KVnFDby8wZ3BzNVJUOU9XV1hYUzYwYlVEby9nSCtweVcrRkpKdjBxYWFPT0IrWjFNN1dCQlBNeEdXZGpJT2VscjR6eGRUdXhHWlpxWG1ad1hTelQyaVZ1b3dJREFRQUI=', // merchant call to ../security/credentials to receive this
                "symmetricEncryptionAlgorithm": 'AES_GCM' // merchant call to ../security/credentials to receive this
            };
            const form = new commercehub.FiservSaqAEp(formConfig, authorization, apiKey);
            form.loadPaymentForm("payment-saq-a-ep-form-div")
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

## Step 3: Submit Payment Request

Submit a charge or tokenization request with the payment `sourceType` of `PaymentSession` and the sessionID from the [authorization](#step-1-authentication) request. 

### Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

<!-- theme: success -->
>**POST** `/payments/v1/tokens`


### Payload Example

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
    "merchantId": "123456789012345"
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
-->

##### Example of a tokenization (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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

- [Customize iFrame Payment Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md)
- [Payment JS Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md)

