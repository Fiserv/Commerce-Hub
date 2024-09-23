---
tags: [EMV, In-Person, Card Present, Encrypted Payments, Payment Source, Device, Terminal]
---

# Using PaymentEMV as a payment source

Transactions using [EMV](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv) can accept either [chip](#accepting-chip-payments) or [contactless](#accepting-contactless-payments) payment methods using an EMV enabled device that encrypts the customer's payment source and sends the encryption data to Commerce Hub. A merchant can also choose to decrypt the `cardData` and re-encrypt the data it using a [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) before sending it to Commerce Hub. The `sourceType` *PaymentEMV* is used to submit a transaction to our application.

EMV payments improve the customer's checkout experience and increases customer satisfaction while retaining the customer base. The merchant engages directly with their customers at the point-of-sale and provides a chip or contactless payment experience.

## Transaction initiation

EMV Fallback should be used when the device fails to read the EMV data, and can be submitted using the [track data](?path=docs/In-Person/Encrypted-Payments/Track.md) or [manual entry](?path=docs/In-Person/Encrypted-Payments/Manual.md).

- **Insert *(dip)* or tap:** An insert or tap must be attempted first for all EMV chip cards.
- **Swipe** – If a card is swiped, the Service Code must be interrogated to determine if the card contains a chip.
  - If the Service Code indicates a chip card, the swipe read data must be discarded and a prompt to insert or tap must be displayed. A card swipe is only allowed for EMV cards when in fallback.

---

## Accepting chip payments

EMV chip is a payment method where a customer inserts (dips) their card into an EMV-enabled reader. EMV transactions with signature or PIN enhances the security of payment card transactions for payment devices and automated teller machines through the use of a chip embedded in credit, debit, and [prepaid cards](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md). EMV-enabled chip payment cards are paired with additional layers of security such as encryption, tokenization and other authentication techniques making it difficult to replicate and reducing card payment fraud.

---

## Accepting contactless payments

Contactless is a payment method that allows the customer simply to tap their contactless-enabled payment device onto a contactless enabled reader. The chip and antenna in the payment device securely transmit payment details wirelessly to a contactless reader, either integrated within or connected to a merchant’s point-of-sale *(POS)* system. Similar chip and Near Field Communication *(NFC)* technology powers contactless payments made by mobile phones and other form factors.

<!-- theme: info -->
> To accept contactless payments, merchants must register with the appropriate brands when applicable. Please contact your account representative for more information.

---

## Submit a PINless transactions

<!-- theme: info -->
> For a credit card transactions in the United States, PIN is not normally required, however some banks may have PIN enabled and will decline the transaction if not included.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#pinless-parameters) for a successful PINless [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) request using *PaymentEMV*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
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
    "captureFlag": true
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
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!--
type: tab
-->

Example of a Charges API *(201: Created)* response.

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
         "total": 12.04,
         "currency": "USD"
      },
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

### PINless parameters

#### PINless request variables

<!-- theme: info -->
> Refer to [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source,  encryptionData
-->

<!-- theme: danger -->
> Commerce Hub does not accept PCI data Tag 5a `cardData` and Tag 57 `track2Data`* in the `emvData`.

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

<!-- type: tab-end -->

---

## Submit a PIN based transactions

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#pin-based-parameters) for a successful PIN based [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) using *PaymentEMV*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "4614507291879694=078443325742854",
      "deviceType": "INGENICO",
      "keyId": "FFFF109700000E4000340114"
    },
    "pinBlock": {
      "encryptedPin": "53511F325B7C89E3",
      "keySerialNumber": "FFFF3D3D3D00232002C9",
      "pinEncryptionWorkingKey": "7586325254178549....."
    }
  },
  "transactionDetails": {
    "captureFlag": true
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
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!--
type: tab
-->

Example of a Charges API *(201: Created)* response.

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
         "total": 12.04,
         "currency": "USD"
      },
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

### PIN based parameters

#### PIN based request variables

<!-- theme: info -->
> Refer to [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source, encryptionData, pinBlock
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

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [CAPK Data](?path=docs/Resources/API-Documents/Device_Management/CAPK.md)
- [EMV Tags](?path=docs/In-Person/Encrypted-Payments/EMV-Tags.md)
- [Encryption Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Encrypted PIN Data](?path=docs/Resources/Master-Data/Pin-Block.md)
- [Fiserv EMV Implementation Guide](https://developer.fiserv.com/product/DirectPlatformSpecifications/docs/?path=docs/EMV/EMVImplementationGuide.md&branch=main)
- [Payment Sources](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---
