# Create an iFrame JS Request

The beginning of an awesome article...

## Step 1: Authentication

An authentication request is required to recive an AccessToken. This will be your authorization and apiKey used when creating an iFrame JS request.

1. A RESTful API request is made from the merchant server to obtain the authorization.
2. The client access token and public key will be submitted as part of the iFrame JS script.

### RESTful API Request

#### Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/security/credentials`

#### Payload Example 

<!--
type: tab
title: Request
-->

##### Example of an authentication payload request.

```json

{
  "publicKeyRequired": true,
  "accessTokenRequired": true,
  "accessTokenTimeToLive": "889",
  "responseRedirectURL": "https://www.somedomain.com"
}

```

<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [HTTP Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json

{
  "publicKey": "string",
  "accessToken": "string",
  "sessionId": "string",
  "accessTokenIssuedTime": "2016-04-16T16:06:05Z",
  "accessTokenTimeToLive": "string",
  "symmetricEncryptionAlgorithm": "string",
  "asymmetricEncryptionAlgorithm": "string"
}

```

<!-- type: tab-end -->

### Authentication Script

The following script is required to submit the authentication of the iFrame JS:

```javascript

const authorization = 'CLIENT_AUTHORIZATION'; // merchant call to ../security/credentials to receive this
const apiKey = 'CLIENT_API_KEY'; // merchant receives this during on-boarding process
 
const formConfig = {
  "merchantId": 'MERCHANT_ID', // merchant receives this during on-boarding process
  "publicKey": 'PUBLIC_KEY' // merchant call to ../security/credentials to receive this
}
```
---


## Step 2: Configuration

### iFrame JS Script

The iFrame JS script tag is required in the website by downloading or including the following code:

```php

<script id="commercehub" src="..{commercehub-domain}../js/commercehub-client-sdk.js"></script>

```
The following is the global `commercehub` object which includes the iFrame JS:

```javascript

const form = new commercehub.Fiserv({/* configuration object */}, authorization, apiKey);
form.loadPaymentForm("payment-saq-a-form-div");

```

### Error Handling

Errors in iFrame JS should be handled in the .catch() of the promise for loadPaymentForm. 

```javascript

.catch((error) => { });

```


## Step 3: Load the Payment Form

All the description of the code includeing authentication, error handling, languages, script.

```php
<html>
    <head>
        <meta charset="utf-8">
        <script id="commercehub" src="https://test.api.fiservapps.com/ch/js/commercehub-client-sdk.js"></script>
    </head>
    <body>
        <div id="payment-saq-a-form-div"></div>
        <script>
            // Merchant will make a call to their own server which will in turn call ../security/credentials end point for creating a
            // payment session, merchant will receive details in the response, e.g. CLIENT_ACCESS_TOKEN, PUBLIC_KEY, etc.
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

## Step 4: Submit Payment Request

Description
Submitting the Charges request with payment spourcetype: PaymentSession



### Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

<!-- theme: success -->
>**POST** `/payments/v1/tokens`

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request.

```json
{
   "amount":{
      "total": "12.04",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "transactionDetails":{
      "captureFlag": true
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
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
      "sourceType": "PaymentCard",
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

