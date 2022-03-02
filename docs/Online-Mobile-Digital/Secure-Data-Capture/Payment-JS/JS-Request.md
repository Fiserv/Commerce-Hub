---
tags: [carat, commerce-hub, enterprise, online, card-not-present, secure-payment-form, payment-js, tokenization]
---

# Create a JS Payment Request

## Step 1: Authentication

An authentication request is required to recive an AccessToken. This will be your authorization and apiKey used when creating an iFrame JS request.

1. A RESTful API request is made from the merchant server to obtain the authorization.
2. The client access token, sessionID, and public key will be submitted as part of authentication response along with the iFrame JS script.

---


### RESTful API Request

#### Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/security/credentials`

### Payload Example

<!--
type: tab
titles: Request, Response
-->

The below table identifies the required parameters in the `SecurityCredentialsRequest` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|------|
| `publicKeyRequired` | *boolean* |  | &#10004; | If the signedCert is expired or invalid then merchant would send a request |
| `accessTokenRequired` | *boolean* |  | &#10004; | If the access token is expired then merchant would request for a new token |
| `accessTokenTimeToLive` | *string* | N/A| &#10004; | Time to live (expiration time) in milliseconds. 1800000 ms, max 30 minutes |
| `responseRedirectURL` | *string* | 4000 | &#10004; | Response URL redirect |


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
-->

The below table identifies the response parameters in the `SecurityCredentialsResponse` object.

| Variable | Type | Maximum Length | Description |
|---------|----------|--------|--------|
| `publicKey` | *string* | | Base64 encoded public key |
| `accessToken` | *string* |  | Access token created and sent back |
| `sessionId` | *string* |  | Used as an identifier for a session after a successful call to security/credentials endpoint or after a successful authentication request" |
| `accessTokenIssuedTime` | *string* |  | Token issue time in YYYY-MM-DDThh:mm:ssZ format. Example - 2016-04-16T16:06:05Z |
| `accessTokenTimeToLive` | *string* | | Access token expiry |
| `symmetricEncryptionAlgorithm` | *string* |  | AES 256/PKCS with padding |
| `asymmetricEncryptionAlgorithm` | *string* |  | RSA/ECB/PKCS1Padding. |

##### Example of a charge (201: Created) response.



<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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

---

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
---

### Error Handling

Errors in iFrame JS should be handled in the .catch() of the promise for loadPaymentForm. 

```javascript

.catch((error) => { });

```
---

## Step 3: Load the Payment Form

All the description of the code including authentication, error handling, languages, script.

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
---

## Step 4: Submit Payment Request

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

- Customize iFrame Payment Form
- Payment JS Integration

