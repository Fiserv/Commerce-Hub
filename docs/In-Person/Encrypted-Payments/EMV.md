---
tags: [carat, commerce-hub, enterprise, emv, in-person, card-present, encrypted-payment]
---

# PaymentEMV

[EMV](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv) chip and PIN enhances the security of payment card transactions for payment terminals and automated teller machines through the use of a chip embedded in credit, debit, and prepaid cards. EMV-enabled chip payment cards are paired with additional layers of security such as encryption, tokenization and other authentication techniques making it difficult to replicate and reducing card payment fraud.

A third-party device encrypts the customer's payment source and sends the encryption data to the Commerce Hub integrated terminal or software.

<!-- theme: info -->
> EMV Fallback should be used when the device fails to read the EMV data, and can be submitted using the [track data](?path=docs/In-Person/Encrypted-Payments/Track.md) or [manual entry](?path=docs/In-Person/Encrypted-Payments/Manual.md).

---

### Request Variables

<!--
type: tab
titles: source,  encryptionData, JSON Example
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentEMV* for EMV transactions |
| `emvData` | *string* | N/A |  &#10004; | Contains a series of [Tag/Length/Value](?path=docs/In-Person/Encrypted-Payments/EMV-Tags.md) combination for chip card processing |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md)|
| `pinBlock` | *object* | N/A | | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md). Used in credit, [debit](?path=docs/Resources/Guides/Debit/PIN_Debit/PIN_Debit.md), gift card or EBT/WIC where a PIN is required. |

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptionType` | *string* | 256 |  &#10004; | Encryption type to be passed. Example (ON_GAURD) |
| `encryptionTarget` | *string* | 256 |  &#10004; |Target should be TRACK_2 |
| `encryptionBlock` | *string* | 2000 |  &#10004; | |
| `deviceType` | *string* | 256 |  &#10004; | Device type need to be sent for TDES and AES encrypted track data. Example (INGENICO) |
| `keyId` | *string* | | | Needs to be passed if track data is encrypted |

<!--
type: tab
-->

JSON string format for PaymentEMV:

```json
{
   "source":{
      "sourceType": "PaymentEMV",
      "emvData": "0249F3704833A12329F1002AB34",
      "encryptionData":{
         "encryptionType": "RSA",
         "encryptionTarget": "TRACK_2",
         "encryptionBlock": "",
         "deviceType": "INGENICO",
         "keyId": ""
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

##### Example of a charge payload request using PaymentEMV.

```json
{
   "amount":{
      "total": "12.04",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentEMV",
      "emvData": "0249F3704833A12329F1002AB34",
      "encryptionData":{
         "encryptionType": "RSA",
         "encryptionTarget": "TRACK_2",
         "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS....",
         "deviceType": "INGENICO",
         "keyId": "88000000022"
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   },
   "transactionInteraction":{
      "origin": "POS",
      "posEntryMode": "ICR_RELIABLE",
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
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "POS",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source":{
      "sourceType": "PaymentEMV",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
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
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "fiserv",
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
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [EMV Tags](?path=docs/In-Person/Encrypted-Payments/EMV-Tags.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)
- [Merchant Details](?path=docs/Resources/Master-Data/Merchant-Details.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Manual Entry](?path=docs/In-Person/Encrypted-Payments/Manual.md)
- [Track Data](?path=docs/In-Person/Encrypted-Payments/Track.md)

---
