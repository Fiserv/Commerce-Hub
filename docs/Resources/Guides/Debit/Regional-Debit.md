---
tags: [Card Present, In-Person, Debit, Regional]
---

# Regional Debit

Regional (International) Debit Solutions from Commerce Hub provide anywhere, anytime payment convenience to your customers through comprehensive transaction processing and settlement services, card management and personalization services, and extensive implementation and support services.

<!-- theme: info -->
> Commerce Hub currently only supports regional debit for Canada. Contact your account representative for more information on using regional (international) debit solutions.

---
 
<!--
type: tab
titles: regionalDebit, JSON Example
-->

The below table identifies the parameters in the `regionalDebit` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `pinBlock` | *object* | N/A | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md). Used in credit, [debit](?path=docs/Resources/Guides/Debit/PIN_Debit/PIN_Debit.md), gift card or EBT/WIC where a PIN is required. |
| `debitMacValue` | *string* |  | To confirm that the key data elements of the transaction have not been tampered. MAC protection is required on all Canadian debit transactions. It is optional when processing U.S. debit/EBT transactions. |
| `macKeySerialNumber` | *string* | 256  | This field is used to create the base MAC encryption key for DUKPT PIN Debit, EBT, Fleet and Credit Transactions.  |
| `macWorkingKey` | *string* | 16  | A message authentication code for a working key that uses a session key to detect both accidental and intentional modifications of the data. |
| `macWorkingKeyCheckDigits` | *string* | 4  | A message authentication code for a working key that uses a session key to check digits. |
| `messageAuthenticationWorkingKey` | *string* |  | A message authentication code for a working key that uses a session key to detect both accidental and intentional modifications of the data.  |
| `messageAuthenticationWorkingKeyCheckDigits` | *string* |  | A message authentication code for a working key that uses a session key to check digits. |
| `messageEncryptionWorkingKey` | *string* |  | A message encryption working key is typically a random string of bits generated specicically to scramble and unscramble data.  |
| `accountType` | *string* |  | CHECKING or SAVINGS |


<!--
type: tab
-->

JSON string format for `regionalDebit`: 

```json
{
   "regionalDebit":{
     "pinBlock":{
        "encryptedPin": "F5f36kA...",
        "keySerialNumber": "TRACK_2",
        "pinEncryptionWorkingKey": ""
     }
     "debitMACValue": "7A773FA892CDAADC",  
     "macSerialNumber": "F876543210E000200019",
     "macWorkingKey": "FFFF",
     "macWorkingKeyCheckDigits": "",
     "messageAuthenticationWorkingKey": "",
     "messageAuthenticationWorkingKeyCheckDigits": "",
     "messageEncryptionWorkingKey": "",
     "accountType": "CHECKING"
   }
}
```

<!-- type: tab-end -->

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a regional debit payload request.

```json
{
    "amount": {
        "total": 42.80,
        "currency": "CAD"
    },
    "source": {
        "sourceType": "PaymentTrack",
        "encryptionData": {
            "encryptionType": "ON_GUARD",
            "encryptionTarget": "TRACK_2",
            "encryptionBlock": "9986536786560=18292034288863948535615",
            "keyId": "FFFF10970000000000F60114",
            "deviceType": "INGENICO"
        },
        "regionalDebit": {
            "debitMacValue": "7A773FA892CDAADC",  
            "macKeySerialNumber": "F876543210E000200019",
            "macWorkingKeyCheckDigits": "FFFF",
            "accountType": "CHECKING"
        }
    },
    "transactionDetails": {
        "captureFlag": true,
        "retrievalReferenceNumber": "000018486001" // REQUIRED FOR CANADA 
    },
    "transactionInteraction": {
        "origin": "POS",
        "posEntryMode": "MAG_STRIPE",
        "posConditionCode": "CARD_PRESENT",
        "additionalPosInformation": {
            "dataEntrySource": "MOBILE_TERMINAL",
            "stan": "486001", // REQUIRED FOR CANADA 
            "posFeatures": {
                "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
                "terminalEntryCapability": "MAG_STRIPE_ONLY"
            }
        }
    },
    "merchantDetails": {
        "merchantId": "123409000000442",
        "terminalId": "10000001"
    }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

##### Example of a refunds (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.
 

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Encrypted Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Pin Block](?path=docs/Resources/Master-Data/Pin-Block.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)
- [Transaction Interaction](?path=/docs/Resources/Master-Data/Transaction-Interaction.md)


---
