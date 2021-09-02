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

Encrypted manual key entry, also known as EMV Fallback, involves manually entering the payment source details a payment terminal. This can be used when the payment terminal fails to obtain the card details from the card's chip or magnetic stripe. 

An EMV fallback transaction occur when an EMV-enabled payment card fails to complete the payment using EMV technology. In these instances, the merchant might “fall back” to processing the payment by manually entering the card details or swiping the magnetic stripe.

EMV fallback transactions only apply to card-present transactions where physical cards are presented by cardholders at payment terminals.

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
| `encryptionBlock` | *string* | 2000 |  &#10004; | |
| `deviceType` | *string* | 256 |  &#10004; | Device type need to be sent for TDES and AES encrypted track data. Example (INGENICO) |
| `securitykeyUpdateIndicator` | *boolean* | | &#10004; | Provided in response. POS is expected to download updated key, key cert |
| `keyId` | *string* | | | Needs to be passed if track data is encrypted |
| `encryptedKey` | *string* | | &#10004; | Identifier required for decryption |


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
      "encryptionType": "On-Guard",
      "encryptionTarget": "Track_2",
      "encryptionBlock": "",
      "deviceType": "INGENICO",
      "securitykeyUpdateIndicator": false,
      "keyId": ,
      "encryptedKey": "NdCmVw5..."
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
      "encryptionData": {
      "encryptionType": "On-Guard",
      "encryptionTarget": "Track_2",
      "encryptionBlock": "",
      "deviceType": "INGENICO",
      "securitykeyUpdateIndicator": false,
      "keyId": "",
      "encryptedKey": "NdCmVw5..."
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
      "encryptionData": {
        "encryptionType": "On-Guard",
        "encryptionTarget": "Track_2",
        "encryptionBlock": "",
        "deviceType": "INGENICO",
        "securitykeyUpdateIndicator": false,
        "keyId": "",
        "encryptedKey": "NdCmVw5..."
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
