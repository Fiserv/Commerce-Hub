---
tags: [Online, Card Not Present, Secure Data Capture]
---

# Secure Data Capture - Card Capture API

Commerce Hub's Card Capture API allows E-commerce merchants to manage the design and card entry form of their website or mobile app _(unlike Hosted Payment Page and [iFrame](docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) solutions)_. The merchant handles encrypting the data from the form and makes a direct API call with the payment information directly to Commerce Hub to receive a payment `sessionId`. The merchant website can then pass the `sessionId` in a charges/tokens request as the payment source.

### Benefits

Allows a merchant an easy and secure way to manage and encrypt the payment data on their website. Commerce Hub makes it simple to submit the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

### Request Types

- **credentials:** responsible for creating a payment session.
- **card-capture:** responsible for capturing encrypted card details.
- **charges:** responsible for decrypting captured card details and then charging based on a payment session.
- **tokens:** responsible for decrypting captured card details and then generating a token based on a payment session.

### Mobile Integrations

Developers can choose to provide access to the webapp via native mobile browser or a WebView embedded within a native mobile app. See [Apple's iOS](https://developer.apple.com/documentation/webkit/wkwebview) or [Google's Android](https://developer.android.com/reference/android/webkit/WebView) documentation for addtional details.

---

## Step 1: Acquire Credentials 

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request is required to obtain the client `asymmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, `keyId`, and `publicKey`. These will be used to create the [encryption data](#step-2-encryption) required in the offline payment request and `sessionId` required in the [charges or tokens request](#step-4-submit-request).


---

## Step 2: Encrypt Card Data

The card data is encypted using Base64 RSA Multi-Use Public Key. Once [encryption](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md) is performed, the `encryptionBlock` and `encyptionBlockFields` are used in the card capture request. 

---

## Step 3: Submit Card Capture Request

The encrypted data is securely submitted to Commerce Hub using API-key validation, where it is persisted and linked to the `sessionId` generated in step 1. 

### Minimum Requirements

<!--
type: tab
titles: source, encryptionData, JSON Example
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | --------| ---------- |
| `sourceType` | *string* | 15 |  &#10004; | Use *PaymentCard* for card transactions |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `encryptionType` | *string* | 256 |  &#10004; | Encryption type is *RSA* when using MUPK. |
| `encryptionTarget` | *string* | 256 |  &#10004; | Target is *MANUAL* when a customer card details are manually entered into a terminal or device, or when a customer manually enters their card details online or in an app. |
| `encryptionBlock` | *string* | 2000 |  &#10004; | This field contains the card details in encrypted form. |
| `encryptionBlockFields` | *string* | 256 |  &#10004; | Encryption block field descriptors to facilitate decryption when using public keys. Each field should be recorded in the form of the object.field_name:byte_count, for example: card.expirationMonth:2. |
| `keyId` | *string* | 64 | &#10004; | Provided encryption key required for decryption of track data that is encrypted. |


<!--
type: tab
-->

JSON string format for PaymentCard:

```json
{
   "source":{
      "sourceType": "PaymentCard",
      "encryptionData":{
         "encryptionType": "RSA",
         "encryptionTarget": "MANUAL",
         "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
         "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
         "keyId": "88000000023"
      }
   }
}
```

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/card-capture`

---

### Card Capture Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a card capture payload request using PaymentCard for Secure Data Capture.

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/card-capture)

<!--
type: tab
-->

A successful card capture response will result in a HTTP 204 No Content, if a response is not received, best practice is to still submit the transaction.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

<!-- type: tab-end -->

---

## Step 4: Submit Request 

Submit a charge or tokenization request after a successful response which identifies the card data is captured in Commerce Hub. The request will use the payment `sourceType` of `PaymentSession` and the `sessionId` from the [credentials](#step-1-authentication) request. 


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

## Additional Security Settings

The following steps are recommended to limit the potential for fraudulent activity on your Commerce Hub integration.

**Recommendations**

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/card-capture)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Multi-Use Public Key Encryption](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
