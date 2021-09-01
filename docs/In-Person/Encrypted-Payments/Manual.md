---
tags: [carat, commerce-hub, enterprise, payment-card, manual-entry, in-person, card-present, encrypted-payment]
---

# Encrypted Manual Entry

<!-- 
also known as EMV Fallback (mention EMV fallback (EMV > Track > Manual) in EMV article and link here)

explain non-encrypted (link to PaymentCard on PaymentCard article) and encrypted manual , outline the requirements to submit a PaymentCard as encrypted source, reference PaymentCard for example layout, need JSON, request, response.


Add to PaymentCard mention encrypted and link back to this article
- terminal managed: encryptedBlock and keyID (this in the ISO/UMF spec) used in CP transactions (link to docs/In-Person/Encrypted-Payments/Manual.md)
- merchant managed: cardData and encryptedKey is merchant managed encryption used in CNP (put this example in PaymentCard (might not be supported yet will verify))

-->
---

### Minimum Requirements

<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentCard* for card transactions |
| `encryptionData` | *object* | N/A | &#10004; | Contains the encrypted payment details |

<!--
type: tab
title: encryptionData
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `encryptionType` | *string* | 256 |  &#10004; | Encryption type to be passed. Example (ON_GAURD) |
| `encryptionTarget` | *string* | 256 |  &#10004; |Target could be Track1, Track2, Both or Manual |
| `expirationYear` | *string* | 4 |  &#10004; |4-digit card expiration year Example (2025) |



<!--
type: tab
title: JSON Example
-->

JSON string format for PaymentCard:

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
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

##### Example of a charge payload request using PaymentCard.

```json
{
   "amount": {
      "total": "12.04",
      "currency": "USD"
   },
   "source": {
      "sourceType": "PaymentCard",
      "card": {
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "transactionDetails": {
      "captureFlag": true
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
      "sourceType": "PaymentCard",
      "card": {
         "expirationMonth": "02",
         "expirationYear": "2035",
         "bin": "400555",
         "last4": "0019",
         "scheme": "VISA"
      }
   },
   "paymentReceipt": {
      "approvedAmount": {
         "total": "12.04",
         "currency":"USD"
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
