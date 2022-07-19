# Merchant Managed Secure Data Capture

<!-- theme: danger -->
> We are enhancing Commerce Hub to include API Only integration support and the documents related to the features will be released soon.

Commerce Hub allows E-commerce merchants to manage the design and form of their website (unlike [Hosted Payment Page](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Hosted-Payment-Page/Hosted-Payment-Page.md) and [iFrame](docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) solutions). The merchant handles encrypting the data from the form and makes a direct API call with the payment information directly to Commerce Hub to receive a payment nonce `sessionId` (one-time use token). The merchant website can then pass the `sessionId` in a charges/tokens request as the payment source.

### Benefits

Allows a merchant an easy and secure way to manage and encrypt the payment data on their website. Commerce Hub makes it simple to submit the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

### Request Types

- **credentials:** responsible for creating a payment session.
- **card-capture:** responsible for capturing encrypted card details.
- **charges:** responsible for decrypting captured card details and then charging based on a payment session.
- **tokens:** responsible for decrypting captured card details and then generating a token based on a payment session.

---

## Step 1: Security Credentials 

A [credentials](?path=docs/Resources/API-Documents/Payments_VAS/Credentials.md) request is required to obtain the client `asymmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, 'keyId', and `publicKey`. These will be used to create the [`encryption data`](#step-2-encryption) required in the offline payment request and `sessionId` required in the [charges or tokens request](#step-4-submit-request).

---

## Step 2: Encryption

The card data is encypted using Base64 RSA Multi-Use Public Key. Once [`encryption`](?path+docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md) the `encryptionBlock` and `encyptionBlockFields` are used in the card capture request. 

---

## Step 3: Submit Card Capture Request

The encrypted data is securely submitted to Commerce Hub, using API-key is validated, where it persisted and linked to the `sessionId` generated in step 1. 

### Minimum Requirements

<!--
type: tab
titles: source, encryptionData, JSON Example
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | --------| ---------- |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentCard* for card transactions |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `encryptionType` | *string* | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed. Example (ON_GAURD) |
| `encryptionTarget` | *string* | 256 |  &#10004; |Target should be MANUAL |
| `encryptionBlock` | *string* | 2000 |  &#10004; | This field contains the track data or card number provided in encrypted form. |
| `encryptionBlockFields` | *string* | 256 |  &#10004; | Encryption block field descriptors to facilitate decryption when using public keys. Each field should be recorded in the form of the object.field_name:byte_count, for example: card.expirationMonth:2. |
| `keyId` | *string* | 64 | &#10004; | Encryption Key ID |


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

##### Example of a card capture (204: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

since we only send a HTTP 204 back, verify the merchant will not recieve any gatewayresponse elements, if no JSON is returned then update 148 example to state Commerce Hub will return an HTTP 204: Success on a successful card capture response.

```
<!-- theme: info -->
>If a successful response is not received, best practice is to still submit the transaction.

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


## See Also
- [Secure Data Capture]
- API Explorer
- Encryption
- Security Credentials
