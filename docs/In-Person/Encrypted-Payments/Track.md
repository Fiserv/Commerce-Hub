---
tags: [Track, In-Person, Card Present, Encrypted Payments, Payment Source, Device, Terminal]
---

# PaymentTrack

Payment Track can be used as [EMV Fallback](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv-fallback) and involves manually swiping the payment source into a payment device using a magnetic stripe _(magstripe)_. This can be used when the payment device fails to obtain the card details from the [card's chip](?path=docs/In-Person/Encrypted-Payments/EMV.md).

A device encrypts the customer's payment source and sends the encryption data to Commerce Hub. A merchant can also choose to decrypt the `cardData` and re-encrypt the data it using a [multi-use public key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) before sending it to Commerce Hub.

<!--
type: tab
titles: source
-->

<!-- theme: danger -->
> Commerce Hub requires all payment cards to be encrypted, it is not recommended to send unencrypted `track1Data` or `track2Data` for the payment transaction.

The below table identifies the parameters in the `source` object.

<!-- theme: info -->
> When the device has the ability to read both track 1 and track 2 data, track 2 data should be provided in the authorization request, except for Amex.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `sourceType` | _string_ | 15 |  &#10004; | Use Value _PaymentTrack_ for magnetic stripe transactions |
| `track1Data` | _string_ | N/A | | This field contains the information encoded from a valid track 1 magnetic stripe read, excluding the start sentinel, end sentinel, and Longitudinal Record Check _(LRC)_. It includes information such as the cardholder's name, primary account number _(PAN)_, expiration date and discretionary data. The entire track data must be forwarded intact |
| `track2Data` | _string_ | N/A | |  This field contains the information encoded from a valid track 2 magnetic stripe read. It includes information such as the primary account number _(PAN)_, expiration date and discretionary data. Entire Track Data must be forwarded intact _(excludes Start Sentinel, End Sentinel and Longitudinal Redundancy Check)_ |

<!-- type: tab-end -->

---

## PINless Transactions

Accept PINless and signature based _PaymentTrack_ payments.

<!-- theme: info -->
> For a credit card transactions in the United States, PIN is not normally required, however some banks may have PIN enabled and will decline the transaction if not included.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful PINless [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using _PaymentTrack_. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

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

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

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
### Parameters

#### Request Variables

<!-- theme: info -->
> Refer to the [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source,  encryptionData
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `sourceType` | _string_ | 15 |  &#10004; | Use Value _PaymentTrack_ for magnetic stripe transactions |
| `encryptionData` | _object_ | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md)|

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptionType` | _string_ | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed |
| `encryptionTarget` | _string_ | 256 |  &#10004; | Target can be TRACK_1, TRACK_2, or BOTH |
| `encryptionBlock` | _string_ | 2000 |  &#10004; | This field contains the track data provided in encrypted form |
| `deviceType` | _string_ | 256 |  &#10004; | [Device type](?path=docs/Resources/Master-Data/Encryption-Data.md#device-type) need to be sent for TDES and AES encrypted track data |
| `keyId` | _string_ | 64 | | Required if track data is encrypted |

<!-- type: tab-end -->

---

## PIN Based Transactions

Accept PIN based _PaymentTrack_ payments.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters-1) for a successful PIN based [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using _PaymentTrack_. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": "12.04",
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

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

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

### Paramters

#### Request Variables

<!-- theme: info -->
> Refer to the [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) for additional fields that may be required based on business needs and industry vertical.

<!--
type: tab
titles: source, encryptionData, pinBlock
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `sourceType` | _string_ | 15 |  &#10004; | Use Value _PaymentTrack_ for magentic stripe transactions |
| `encryptionData` | _object_ | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md)|
| `pinBlock` | _object_ | N/A | &#10004; | Contains the [encrypted PIN details](?path=docs/Resources/Master-Data/Pin-Block.md). Used in [debit](?path=docs/Resources/Guides/Debit/PIN_Debit.md), gift card or EBT/WIC where a PIN is required |

<!--
type: tab
-->

The below table identifies the parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptionType` | _string_ | 256 |  &#10004; | [Encryption type](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-type) to be passed |
| `encryptionTarget` | _string_ | 256 |  &#10004; | Target can be TRACK_1, TRACK_2, or BOTH |
| `encryptionBlock` | _string_ | 2000 |  &#10004; | This field contains the track data provided in encrypted form |
| `deviceType` | _string_ | 256 |  &#10004; | [Device type](?path=?path=docs/Resources/Master-Data/Encryption-Data.md#device-type) need to be sent for TDES and AES encrypted track data |
| `keyId` | _string_ | 64 | | Required if track data is encrypted |

<!--
type: tab
-->

The below table identifies the required parameters in the `pinBlock` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------------------ |---|
| `encryptedPin` | _string_ | 2000 |  &#10004; | This field contains the Encrypted PIN Block for Debit, EBT, Fleet or Credit transactions |
| `keySerialNumber` | _string_ | 256 |  &#10004; | This field is used to create the base PIN encryption key for DUKPT PIN Debit, EBT, Fleet and Credit Transactions |
| `pinEncryptionWorkingKey` | _string_ | 2000 |  &#10004; | Terminal PIN Encryption working key _(TKPE)_. A PIN Encryption Key is a used to protect PINs as they are transmitted |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Encryption Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Encrypted PIN Data](?path=docs/Resources/Master-Data/Pin-Block.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---
