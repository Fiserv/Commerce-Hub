---
tags: [Payment Card, Payment Sources, Online, Digital, Mobile, Card Not Present]
---

# Submitting Multi-Use Public Key transactions with PaymentCard

A payment card is used to submit a credit card, [debit card](?path=docs/Resources/Guides/Debit/Debit.md), [private label card](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md), or [gift card](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) _(Prepaid or Stored Value)_ transaction to our application. The `sourceType` _PaymentCard_ is used to submit a transaction to our application.

<!-- theme: info -->
> The below requirements are used for [online, digital and mobile requests](?path=docs/Getting-Started/Getting-Started-Online.md) manual entry transactions from a website or application. See [encrypted manual entry](?path=docs/In-Person/Encrypted-Payments/Manual.md) for [in-person](?path=docs/Getting-Started/Getting-Started-InPerson.md) requests from a device or terminal.

<!--
type: tab
titles: source, card
-->

<!-- theme: danger -->
> Commerce Hub requires all payment cards to be encrypted using [multi-use public key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md). Plain card data is only supported in our sandbox environment for [simulation purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Simulator-Scripts.md).

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Description |
| ----- | :------: | :-----: | ----- |
| `sourceType` | _string_ | 15 | Use _PaymentCard_ for card transactions |
| `card` | _object_ | N/A | Contains the payment card details |

<!--
type: tab
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type | Length | Description |
| ----- | :------: | :-----: | ----- |
| `cardData` | _string_ | 15  | Credit card number |
| `expirationMonth` | _string_ | 2 | 2-digit card expiration month |
| `expirationYear` | _string_ | 4 | 4-digit card expiration year |

<!-- theme: info -->
> Refer to the [card object](?path=docs/Resources/Master-Data/Card.md) for additional fields.

<!-- type: tab-end -->

---

## Submit an encrypted PaymentCard request

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) using a _PaymentCard_ encrypted with [multi-use public key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md). The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000023"
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
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
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
    "captureFlag": true
  }
}
```

<!-- type: tab-end -->

---

### Parameters

#### Request variables

<!--
type: tab
titles: source, encryptionData
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Description |
| ----- | :------: | :-----: | ----- |
| `sourceType` | _string_ | 15 |  Use _PaymentCard_ for card transactions |
| `encryptionData` | _object_ | N/A | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Description |
| ----- | :------: | :-----: | ----- |
| `encryptionType` | _string_ | 256 |  Encryption type should be _RSA_ |
| `encryptionTarget` | _string_ | 256 | Target should be _MANUAL_ |
| `encryptionBlock` | _string_ | 2000 | This field contains the card data provided in encrypted form. |
| `encryptionBlockFields` | _string_ | 256 | Encryption block field descriptors to facilitate decryption when using public keys. Each field should be recorded in the form of the object.field_name:byte_count, example: _card.expirationMonth:2_ |
| `keyId` | _string_ | 64 | Provided encryption key required for decryption of data that is encrypted |

<!-- type: tab-end -->

---

## See also

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Encryption Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Multi-Use Public Key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Supported Card Types](?path=docs/Resources/Master-Data/Card-Type.md)

---
