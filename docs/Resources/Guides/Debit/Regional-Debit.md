---
tags: [Card Present, In-Person, Debit, Regional]
---

# Regional Debit

<!-- theme: danger -->
> We are enhancing Commerce Hub to include support for Regional Debit transactions and the documents related to this feature will be released soon. Remove?

Regional (International) Debit Solutions from Commerce Hub provide anywhere, anytime payment convenience to your customers through comprehensive transaction processing and settlement services, card management and personalization services, and extensive implementation and support services.

Contact your account representative for more information on using regional (international) debit solutions. 

---
 
<!--
type: tab
titles: regionalDebit, JSON Example
-->

The below table identifies the parameters in the `regionalDebit` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `pinBlock` | *object* | N/A | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md). Used in credit, [debit](?path=docs/Resources/Guides/Debit/PIN_Debit/PIN_Debit.md), gift card or EBT/WIC where a PIN is required. |
| `region` | *string* |  | Region of Debit Origin - Canadian, German , etc |
| `debitTransactionCode` | *string* |  | Identifies the debit transaction |
| `debitMACValue` | *string* |  | To confirm that the key data elements of the transaction have not been tampered. MAC protection is required on all Canadian debit transactions. It is optional when processing U.S. debit/EBT transactions. |
| `encryptedKeyIndex` | *string* |  | Indicates the key index in use by PIN Pad, valid values are 1 through 9. Required in Canadian Debit requests. |
| `messageAuthenticationWorkingKey` | *string* |  | A message authentication code for a working key that uses a session key to detect both accidental and intentional modifications of the data.  |
| `messageAuthenticationWorkingKeyCheckDigits` | *string* |  | A message authentication code for a working key that uses a session key to check digits. |
| `messageEncryptionWorkingKey` | *string* |  | A message encryption working key is typically a random string of bits generated specicically to scramble and unscramble data.  |
| `debitPinPadSerialNumber` | *string* |  | Serial Number of the PIN device in use at the POS. Required for Canadian Debit requests. |
| `accountType` | *string* |  | CHECKING or SAVINGS |
| `transactionSequenceCounter` | *string* |  | Contains a unique sequence counter for this transaction from this point of sale. Required on all Canadian Debit EMV transaction requests. |

<!--
type: tab
-->

JSON string format for `regionalPin`:

```json
{
   "regionalPin":{
     "pinBlock":{
        "encryptedPin": "F5f36kA...",
        "keySerialNumber": "TRACK_2",
        "pinEncryptionWorkingKey": ""
     }
     "region": "",
     "debitTransactioCode": "",
     "debitMACValue": "",
     "encryptedKeyIndex": "",
     "messageAuthenticationWorkingKey": "",
     "messageAuthenticationWorkingKeyCheckDigits": "",
     "messageEncryptionWorkingKey": "",
     "debitPinPadSerialNumber": "",
     "accountType": "",
     "transactionSequenceCounter": ""
   }
}
```
##### Example of a regional debit payload request.

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
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "ICR_RELIABLE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2022-03-10T01:37:13Z",
    "additionalPosInformation": {
      "dataEntrySource": "MOBILE_TERMINAL",
      "posFeatures": {
        "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
        "terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP"
      }
    }
  },
    "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    },
  "additionalDataCommon": {
    "directedRouting": {
      "processors": [
        {
          "code": "NASHVILLE",
          "platform": "NORTH",
          "priority": "PRIMARY"
        }
      ]
    }
  }
}
```


<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Encrypted Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Pin Block](?path=docs/Resources/Master-Data/Pin-Block.md)

---
