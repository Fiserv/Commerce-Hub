---
tags: [Online, Card Not Present, Secure Data Capture, Multi-Use Public Key, Payment Source]
---

# Multi-Use Public Key Request

After the merchants captures the payment source details, the multi-use public key issued by the Commerce Hub can be used to encrypt the details and send it to Commerce Hub for authorization.  
   
---

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

### Charges Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request using PaymentCard for Manual Entry.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
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
  },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "POS",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
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
      "total": "12.04",
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
    "captureFlag": true,
    "merchantInvoiceNumber": "123456789012"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Multi-Use Public Key Encryption](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md)
- [Multi-Use Public Key Management](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Encryption Data](?path=docs/Resources/Master-Data/Encryption-Data.md)

---
