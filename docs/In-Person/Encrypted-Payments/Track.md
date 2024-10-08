---
tags: [Track, In-Person, Card Present, Encrypted Payments, Payment Source, Device, Terminal]
---

# Submitting in-person swipe transactions with PaymentTrack

Payment Track can be used as [EMV Fallback](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv-fallback) and involves manually swiping the payment source into a payment device using a magnetic stripe *(magstripe)*. This can be used when the payment device fails to obtain the card details from the [card's chip](?path=docs/In-Person/Encrypted-Payments/EMV.md).

A device encrypts the customer's payment source and sends the encryption data to Commerce Hub. A merchant can also choose to decrypt the `cardData` and re-encrypt the data it using a [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) before sending it to Commerce Hub. The `sourceType` *PaymentTrack* is used to submit a transaction to our application.

<!--
type: tab
titles: source
-->

<!-- theme: danger -->
> Commerce Hub requires all payment cards to be encrypted, it is not recommended to send unencrypted `track1Data` or `track2Data` for the payment transaction. Plain track data is only supported in our sandbox environment for [simulation purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Simulator-Scripts.md).

The below table identifies the parameters in the `source` object.

<!-- theme: info -->
> When the device has the ability to read both Track 1 and Track 2 data, Track 2 data should be provided in the authorization request, except for Amex.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentTrack* for magnetic stripe transactions |
| `track1Data` | *string* | N/A | | This field contains the information encoded from a valid Track 1 magnetic stripe read, excluding the start sentinel, end sentinel, and Longitudinal Record Check *(LRC)*. It includes information such as the cardholder's name, primary account number *(PAN)*, expiration date and discretionary data. The entire track data must be forwarded intact |
| `track2Data` | *string* | N/A | |  This field contains the information encoded from a valid Track 2 magnetic stripe read. It includes information such as the primary account number *(PAN)*, expiration date and discretionary data. Entire Track Data must be forwarded intact *(excludes Start Sentinel, End Sentinel and Longitudinal Redundancy Check)* |

<!-- type: tab-end -->

---

## Submit a PINless transaction

Accept PINless and signature based *PaymentTrack* payments.

<!-- theme: info -->
> For a credit card transactions in the United States, PIN is not normally required, however some banks may have PIN enabled and will decline the transaction if not included.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#pinless-parameters) for a successful PINless [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using *PaymentTrack*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "ON_GUARD",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "4614507291879694=078443325742854",
      "keyId": "FFFF109700000E4000340114",
      "deviceType": "INGENICO"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2022-03-10T01:37:13Z",
    "additionalPosInformation": {
      "dataEntrySource": "MOBILE_TERMINAL",
      "posFeatures": {
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

Example of a charge (201: Created) response.

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
    "sourceType": "PaymentTrack",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "401777",
      "last4": "5556",
      "scheme": "Visa"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "processorResponseDetails": {
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
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2022-03-10T01:37:13Z",
    "additionalPosInformation": {
      "stan": "001709",
      "dataEntrySource": "MOBILE_TERMINAL",
      "posFeatures": {
        "terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP"
      }
    }
  }
}
```

<!-- type: tab-end -->

---

### PINless parameters

#### PINless request variables

<!-- theme: info -->
> Refer to the [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source,  encryptionData
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentTrack* for magnetic stripe transactions |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md)|

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptionType` | *string* | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed |
| `encryptionTarget` | *string* | 256 |  &#10004; | Target can be TRACK_1, TRACK_2, or BOTH |
| `encryptionBlock` | *string* | 2000 |  &#10004; | This field contains the track data provided in encrypted form |
| `deviceType` | *string* | 256 |  &#10004; | [Device type](?path=docs/Resources/Master-Data/Encryption-Data.md#device-type) need to be sent for TDES and AES encrypted track data |
| `keyId` | *string* | 64 | | Required if track data is encrypted |

<!-- type: tab-end -->

---

## Submit a PIN-based transaction

Accept PIN based *PaymentTrack* payments.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#pin-based-parameters) for a successful PIN-based [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using *PaymentTrack*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "4614507291879694=078443325742854",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    },
    "pinBlock": {
      "encryptedPin": "0FF7A610CC84CE40",
      "keySerialNumber": "FFFF3D3D3D00232002C9"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MAG_STRIPE",
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

Example of a charge (201: Created) response.

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
    "sourceType": "PaymentTrack",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "401777",
      "last4": "5556",
      "scheme": "Visa"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
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
  },
  "transactionInteraction": {
    "posEntryMode": "MAG_STRIPE",
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

### PIN-based parameters

#### PIN-based request variables

<!-- theme: info -->
> Refer to the [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source, encryptionData, pinBlock
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentTrack* for magnetic stripe transactions |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md)|
| `pinBlock` | *object* | N/A | &#10004; | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md). Used in [debit](?path=docs/Resources/Guides/Debit/PIN_Debit.md), gift card or EBT/WIC where a PIN is required |

<!--
type: tab
-->

The below table identifies the parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptionType` | *string* | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed |
| `encryptionTarget` | *string* | 256 |  &#10004; | Target can be TRACK_1, TRACK_2, or BOTH |
| `encryptionBlock` | *string* | 2000 |  &#10004; | This field contains the track data provided in encrypted form |
| `deviceType` | *string* | 256 |  &#10004; | [Device type](?path=?path=docs/Resources/Master-Data/Encryption-Data.md#device-type) need to be sent for TDES and AES encrypted track data |
| `keyId` | *string* | 64 | | Required if track data is encrypted |

<!--
type: tab
-->

The below table identifies the required parameters in the `pinBlock` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptedPin` | *string* | 2000 |  &#10004; | This field contains the Encrypted PIN Block for Debit, EBT, Fleet or Credit transactions |
| `keySerialNumber` | *string* | 256 |  &#10004; | This field is used to create the base PIN encryption key for DUKPT PIN Debit, EBT, Fleet and Credit Transactions |
| `pinEncryptionWorkingKey` | *string* | 2000 |  &#10004; | Terminal PIN Encryption working key *(TKPE)*. A PIN Encryption Key is a used to protect PINs as they are transmitted |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Encryption Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Encrypted PIN Data](?path=docs/Resources/Master-Data/Pin-Block.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---
