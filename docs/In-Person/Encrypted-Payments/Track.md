---
tags: [carat, commerce-hub, enterprise, track, in-person, card-present, encrypted-payment]
---

# PaymentTrack

<!-- 
also known as EMV Fallback (mention EMV fallback (EMV > Track > Manual) in EMV article and link here)

explain non-encrypted and encrypted track, outline the requirements to submit a PaymentTrack as non-ecnrypted and encrypted source, reference PaymentCard for example layout, need JSON, request, response.

encrypted: needs encryption data (similar EMV ISO/UMF) encryptionBlock, requirements and examples
non-encrypted: not recommended for security reasons sends that data in Track1Data and Track2Data, requirements and examples
-->

Payment Track can be used as [EMV Fallback](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv-fallback) and involves manually swiping the payment source into a payment terminal using magnetic stripe. This can be used when the payment terminal fails to obtain the card details from the card's chip.

A third-party device captures the customer's payment source unencrypted or encryptes the data and sends it to the Commerce Hub integrated terminal or software.


---

### Request Variables

<!--
type: tab
title: source
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentTrack* for Magnetic stripe transactions |
| `track1Data` | *string* | N/A | | Contains the unencrypted magnetic stripe track 1 data from a payment card |
| `track2Data` | *string* | N/A | |  Contains the unencrypted magnetic stripe track 2 data from a payment card |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md)|
| `pinBlock` | *object* | N/A | | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md) |

<!--
type: tab
title: encryptionData
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `encryptionType` | *string* | 256 |  &#10004; | Encryption type to be passed. Example (ON_GAURD) |
| `encryptionTarget` | *string* | 256 |  &#10004; |Target could be TRACK_1, TRACK_2, or BOTH |
| `encryptionBlock` | *string* | 2000 |  &#10004; | |
| `deviceType` | *string* | 256 |  &#10004; | Device type need to be sent for TDES and AES encrypted track data. Example (INGENICO) |


<!--
type: tab
title: JSON Example
-->

JSON string format for PaymentTrack:

```json
{
   "source":{
      "sourceType": "PaymentTrack",
      "encryptionData":{
         "encryptionType": "RSA",
         "encryptionTarget": "TRACK_2",
         "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
         "deviceType": "INGENICO",
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
title: Request
-->

##### Example of a charge payload request using PaymentTrack.

```json
{
   "amount":{
      "total": "12.04",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentTrack",
      "encryptionData":{
         "encryptionType": "RSA",
         "encryptionTarget": "TRACK_2",
         "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
         "deviceType": "INGENICO",
         "keyId": "88000000023"
      }
   },
   "transactionDetails":{
      "captureFlag": true
   }
    "transactionInteraction":{
      "origin": "POS",
      "posEntryMode": "MAG_STRIPE",
      "posConditionCode": "CARD_PRESENT",
      "terminalTimestamp": "2021-06-20T23:42:48Z"
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
title: Response
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [HTTP Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json
{
   "gatewayResponse": {
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-04-16T16:06:05Z",        
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source": {
      "sourceType": "PaymentTrack",
      "card": {
        "bin": "40055500",
        "last4": "0019",
        "scheme": "VISA",
        "expirationMonth": "02",
        "expirationYear": "2035"
      }
   },
   "paymentReceipt": {
      "approvedAmount": {
         "total": "12.04",
         "currency": "USD"
      },
      "processorResponseDetails": {
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "fiserv",
         "responseCode": "000000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021-04-16T16:06:05Z",
         "bankAssociationDetails": {
            "transactionTimestamp": "2021-04-16T16:06:05Z"
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
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)
- [Merchant Details](?path=docs/Resources/Master-Data/Merchant-Details.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Manual Entry](?path=docs/In-Person/Encrypted-Payments/Manual.md)
- [EMV Chip and PIN](?path=docs/In-Person/Encrypted-Payments/EMV.md)

---

