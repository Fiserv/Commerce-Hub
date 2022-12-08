---
tags: [EMV, In-Person, Card Present, Encrypted Payments, Payment Source]
---

# PaymentEMV

[EMV](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv) chip with signature or PIN enhances the security of payment card transactions for payment terminals and automated teller machines through the use of a chip embedded in credit, debit, and prepaid cards. EMV-enabled chip payment cards are paired with additional layers of security such as encryption, tokenization and other authentication techniques making it difficult to replicate and reducing card payment fraud.

A device encrypts the customer's payment source and sends the encryption data to Commerce Hub.

<!-- theme: info -->
> EMV Fallback should be used when the device fails to read the EMV data, and can be submitted using the [track data](?path=docs/In-Person/Encrypted-Payments/Track.md) or [manual entry](?path=docs/In-Person/Encrypted-Payments/Manual.md).

---

## PINless Transactions

Accept PINless and signature based EMV payment cards.


### Request Variables

<!-- theme: info -->
> Refer to the [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source,  encryptionData, JSON Example
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `sourceType` | *string* | 256 |  &#10004; | Use Value *PaymentEMV* for EMV transactions |
| `emvData` | *string* | N/A |  &#10004; | Contains a series of [Tag/Length/Value](?path=docs/In-Person/Encrypted-Payments/EMV-Tags.md) combination for chip card processing |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md)|

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptionType` | *string* | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed. Example (ON_GAURD) |
| `encryptionTarget` | *string* | 256 |  &#10004; |Target should be TRACK_2 |
| `encryptionBlock` | *string* | 2000 |  &#10004; | This field contains the track data or card number provided in encrypted form. |
| `deviceType` | *string* | 256 |  &#10004; | [Device type](?path=docs/Resources/Master-Data/Encryption-Data.md#device-type) need to be sent for TDES and AES encrypted track data. Example (INGENICO) |
| `keyId` | *string* | 64 | &#10004; | Encryption Key ID |

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
         "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS....",
         "deviceType": "INGENICO",
         "keyId": ""
      }
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

##### Example of a charge payload request using PaymentEMV.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS....",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    }
  },
  "transactionDetails": {
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
  "merchantDetails": {
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

```json{
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
      },
      "emvData": "8a0230309f36020073910a1be55403be070aa53030"
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
         },
         "additionalInfo":[
            {
               "name": "HOST_RAW_PROCESSOR_RESPONSE",
               "value": "AhAyOAHvv70O77+9AgIA77+9AAAAAAEAAAMUFRYgABcJATcTAxAAAQAxYmNhNWI5ZTMxZTIwMDE2MjYwMDAxNDg0NTQ5ACHvv70CMDDvv702AgBz77+9Chvvv71UA++/vQcK77+9MDAAMAAYMjJBUFBST1ZBTCAgICAgICAgAAg2NjA2MDAwNw=="
            }
         ]
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "transactionCaptureType": "hcs",
      "processingCode": "009000",
      "retrievalReferenceNumber": "1bca5b9e31e2"
   },
   "transactionInteraction":{
      "posEntryMode": "ICR_RELIABLE",
      "posConditionCode": "CARD_PRESENT",
      "terminalTimestamp": "2022-03-10T01:37:13Z",
      "additionalPosInformation":{
         "stan": "001709",
         "dataEntrySource": "MOBILE_TERMINAL",
         "posFeatures":{
            "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
            "terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP"
         }
      }
   },
   "additionalDataCommon":{
      
   },
   "networkDetails":{
      "network":{
         "network": "Visa"
      },
      "debitNetworkId": "060007"
   }
}
```

<!-- type: tab-end -->

---

## PIN Based Transactions

Accept PIN based EMV payment cards.

### Request Variables

<!-- theme: info -->
> Refer to the [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source, encryptionData, pinBlock, JSON Example
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentEMV* for EMV transactions |
| `emvData` | *string* | N/A |  &#10004; | Contains a series of [Tag/Length/Value](?path=docs/In-Person/Encrypted-Payments/EMV-Tags.md) combination for chip card processing |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md)|
| `pinBlock` | *object* | N/A | &#10004; | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md). Used in credit, [debit](?path=docs/Resources/Guides/Debit/PIN_Debit.md), gift card or EBT/WIC where a PIN is required. |

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptionType` | *string* | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed. Example (ON_GAURD) |
| `encryptionTarget` | *string* | 256 |  &#10004; |Target should be TRACK_2 |
| `encryptionBlock` | *string* | 2000 |  &#10004; | This field contains the track data or card number provided in encrypted form. |
| `deviceType` | *string* | 256 |  &#10004; | [Device type](?path=?path=docs/Resources/Master-Data/Encryption-Data.md#device-type) need to be sent for TDES and AES encrypted track data. Example (INGENICO) |
| `keyId` | *string* | 64 | &#10004; | Encryption Key ID |

<!--
type: tab
-->

The below table identifies the required parameters in the `pinBlock` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptedPin` | *string* | 2000 |  &#10004; | This field contains the Encrypted PIN Block for Debit, EBT, Fleet or Credit transactions. |
| `keySerialNumber` | *string* | 256 |  &#10004; | This field is used to create the base PIN encryption key for DUKPT PIN Debit, EBT, Fleet and Credit Transactions. |
| `pinEncryptionWorkingKey` | *string* | 2000 |  &#10004; | Terminal PIN Encryption working key (TKPE). A PIN Encryption Key is a used to protect PINs as they are transmitted. |


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
         "encryptionBlock": "4614507291879694=078443325742854",
         "deviceType": "INGENICO",
         "keyId": "FFFF109700000E4000340114"
      },
      "pinBlock":{
         "encryptedPin": "53511F325B7C89E3",
         "keySerialNumber": "7964085138968549....",
         "pinEncryptionWorkingKey": "7586325254178549.....",
      }
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
         "encryptionBlock": "4614507291879694=078443325742854",
         "deviceType": "INGENICO",
         "keyId": "FFFF109700000E4000340114"
      },
      "pinBlock":{
         "encryptedPin": "53511F325B7C89E3",
         "keySerialNumber": "FFFF3D3D3D00232002C9",
         "pinEncryptionWorkingKey": "7586325254178549....."
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
      "terminalTimestamp": "2022-03-10T01:37:13Z",
      "additionalPosInformation":{
         "dataEntrySource": "MOBILE_TERMINAL",
         "posFeatures":{
            "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
            "terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP"
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
      },
      "emvData": "8a0230309f36020073910a1be55403be070aa53030"
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
         "additionalInfo": [
          {
            "name": "HOST_RAW_PROCESSOR_RESPONSE",
            "value": "AhAyOAHvv70O77+9AgIA77+9AAAAAAEAAAMUFRYgABcJATcTAxAAAQAxYmNhNWI5ZTMxZTIwMDE2MjYwMDAxNDg0NTQ5ACHvv70CMDDvv702AgBz77+9Chvvv71UA++/vQcK77+9MDAAMAAYMjJBUFBST1ZBTCAgICAgICAgAAg2NjA2MDAwNw=="
          }
         ]
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   },
  "transactionInteraction": {
    "posEntryMode": "ICR_RELIABLE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2022-03-10T01:37:13Z",
    "additionalPosInformation": {
      "stan": "001709",
      "dataEntrySource": "MOBILE_TERMINAL",
      "posFeatures": {
        "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
        "terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP"
      }
    }
  },
  "additionalDataCommon": {},
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "debitNetworkId": "060007"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md)
- [EMV Tags](?path=docs/In-Person/Encrypted-Payments/EMV-Tags.md)
- [Encryption Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Encrypted PIN Data](?path=docs/Resources/Master-Data/Pin-Block.md)
- [Manual Entry](?path=docs/In-Person/Encrypted-Payments/Manual.md)
- [Track Data](?path=docs/In-Person/Encrypted-Payments/Track.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---
