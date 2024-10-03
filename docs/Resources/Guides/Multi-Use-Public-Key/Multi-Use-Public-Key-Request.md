---
tags: [Multi-Use Public Key, Encrypted Payments, Payment Card, Payment Sources, Online, Digital, Mobile, Card Not Present]
---

# Submitting multi-use public key transactions with PaymentCard

After the merchant captures the payment source details, the [multi-use public key *(MUPK)* issued](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md) by the Commerce Hub can be used to [encrypt the details](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md) and send it to Commerce Hub for authorization.

<!-- theme: info -->
> The below requirements are used for manual entry [online, digital and mobile transactions](?path=docs/Getting-Started/Getting-Started-Online.md) from a website or application. See [encrypted manual entry](?path=docs/In-Person/Encrypted-Payments/Manual.md) for [in-person](?path=docs/Getting-Started/Getting-Started-InPerson.md) requests from a device or terminal.

---

## Submit an encrypted PaymentCard request

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) using a *PaymentCard* encrypted with [*(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md). The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

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
| `sourceType` | *string* | 15 |  Use *PaymentCard* for card transactions |
| `encryptionData` | *object* | N/A | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Description |
| ----- | :------: | :-----: | ----- |
| `encryptionType` | *string* | 256 |  Encryption type should be *RSA* |
| `encryptionTarget` | *string* | 256 | Target should be *MANUAL* |
| `encryptionBlock` | *string* | 2000 | This field contains the card data provided in encrypted form. |
| `encryptionBlockFields` | *string* | 256 | Encryption block field descriptors to facilitate decryption when using public keys. Each field should be recorded in the form of the object.field_name:byte_count, example: *card.expirationMonth:2* |
| `keyId` | *string* | 64 | Provided encryption key required for decryption of data that is encrypted |

<!-- type: tab-end -->

---

## See also

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Encryption Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Multi-Use Public Key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Supported Card Types](?path=docs/Resources/Master-Data/Card-Type.md)

---
