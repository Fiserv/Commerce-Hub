---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Secure Data Capture]
---

# 3-D Secure - Secure Data Capture Integration

Commerce Hub's Secure Data Capture is designed to work seemlessly with our 3-D Secure (3DS) authentication provider. This eliminates the need to manually integrate with the provider's API and increases PCI security. The [iFrame](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) or [Javascript SDK](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md) handles the data collection and storage to send to the 3DS provider.

## Step 1: Acquire Credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request with `authentication3DS` *true* in the `transactionDetails` object is required to inform Commerce Hub the transaction will require 3DS authentication.

The credential request is also needed to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the Secure Data Capture request and `sessionId` required in the subsequent request.


---

## Step 2: Configure iFrame or JS

Follow the confguration requirements depending on the Secure Data Capture integration type; [iFrame](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md#step-2-configuration) or [JavaScript](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Request.md#step-2-configuration).

The iFrame or JS form will capture the customer card and device information to be used in the 3DS authentication and used for the subsequent charges or tokenization transaction.

---

## Step 3: Submit Authentication Request

Submit a request after a successful response which identifies the card and device data was captured in Commerce Hub. The request will use the payment `sourceType` of `PaymentSession` and the `sessionId` from the [credentials](#step-1-acquire-credentials) request.

<!-- theme: info -->
>If a successful response is not received, best practice is to still submit the transaction. If an error occurs, the iFrame will need to be re-displayed so the customer can re-submit their payment information.

<!--- 
Based on the merchant's API design requirements the order of submitting a request to Commerce Hub can change.

- **Authentication before Charges, Tokenization, or Verification:** By submitting to the authentication endpoint Commerce Hub will route to the 3DS provider to have the customer perform authentication and possible challenge before submitting the `PaymentSession` for a subsequent request.
- **Tokenization before Authentication:** If the transaction processing is not going to occur realtime it is recommended to perform a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request with the `PaymentSession` to obtain a `PaymentToken` that can be used in a subsequent authentication request.
- **Account Verification before Authentication:** Submitting to the [account verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) endpoint allows a merchant to perform [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and/or [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification prior to submitting an authentication request.

-->

### Endpoint

<!-- theme: success -->
>**POST** `/3ds/v1/authentication`


### Payload Example

<!-- theme: info -->
> Additional fields can be submitted as part of the request call. Additional fields can be found in the [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Success Response, Challenge Response
-->

##### Example of an authentication payload request.

```json
{

}
```


<!--
type: tab
-->

##### Example of an authentication (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{

}
```

<!--
type: tab
-->

##### Example of an authentication challenge (201: Created) response.

<!-- theme: warning -->
> When a challenge response is recieved, a verification request is required before submitting a subsequent transaction.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{

}
```

<!-- type: tab-end -->

---

## Step 4: Submit Transaction Request

After authentication has been completed with the 3DS provider, submit a charges, tokenization, or verification request using the same `sessionId` and the [3DS response data].

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
  },
  "additionalData3DS": {
  
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
   },
  "additionalData3DS": {
  
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
  },
  "additionalData3DS": {
  
  },
}
```

<!-- type: tab-end -->


---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)

---

