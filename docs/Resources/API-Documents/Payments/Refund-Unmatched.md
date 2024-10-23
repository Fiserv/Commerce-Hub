---
tags: [Full Refund, Payments, Partial Refund, Refund, API Reference]
---

# Process an unmatched tagged reversal using the Refunds API

An unmatched tagged refund allows a merchant to issue a refund to a payment source other than the one used in the original transaction. The refund is associated with the original [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) by using the Commerce Hub transaction identifier or [merchant transaction identifier](?path=docs/Resources/Guides/BYOID.md). This allows the merchant to maintain the linking of the transaction information in Commerce Hub when issuing a refund or store credit.

<!-- theme: warning -->
> Before issuing an unmatched tagged refund, a normal [tagged refund](?path=docs/Resources/API-Documents/Payments/Refund-Tagged.md) should be performed. Once declined due to being an invalid or closed account, an unmatched tagged refund can be attempted. If an unmatched tagged refund is not associated with a prior tagged refund attempt, Commerce Hub will reject the transaction.

<!-- theme: danger -->
> Refund API requests can be initiated against a [transaction](?path=docs/Resources/API-Documents/Payments/Charges.md) only if it is already been [captured](?path=docs/Resources/API-Documents/Payments/Capture.md), otherwise submit a [void request](?path=docs/Resources/API-Documents/Payments/Cancel.md).

**Refund types:**

Refunds can be initiated for the full amount or a partial amount of the original authorization.

- **Partial:** A request submitted with the `amount` object for a partial `total`.
- **Full:** Can be submitted without the `amount` object to refund the full `total`, or submitted with the `amount` object for the full `total`.

---

## Submit an unmatched Refunds API request

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful unmatched Refunds API request using `referenceTransactionId`. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/refunds).

<!-- theme: success -->
> **POST** `/payments/v1/refunds`

```json
{
  "referenceTransactionDetails": {
    "referenceTransactionId": "84356531348"
  },
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
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

Example of an unmatched Refunds API *(201: Created)* response.

<!-- theme: info -->
> See [response handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "REFUND",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
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
    "merchantName": "Merchant Name",
    "merchantAddress": "123 Peach Ave",
    "merchantCity": "Atlanta",
    "merchantStateOrProvince": "GA",
    "merchantPostalCode": "12345",
    "merchantCountry": "US",
    "merchantURL": "https://www.somedomain.com",
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
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request Variables

A refund request is initiated by sending the `referenceTransactionDetails`, `source` in the payload and may contain the `amount` object based on the refund type.

<!-- theme: danger -->
> All [online refunds](?path=docs/Resources/API-Documents/Payments/Refund-Auth-Capture.md) not submitted with `captureFlag` *true* require a subsequent Refunds API capture request to complete the settlement of the authorized refund.

<!-- 
type: tab
titles: referenceTransactionDetails, source, amount, merchantDetails
-->

The below table identifies the available parameters in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request. 

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction. |
| `referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |

<!--
type: tab
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `amount` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `total` | *number* |  | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | ISO 3 digit [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `merchantId` | *string* | 1024 | A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md)|

<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Custom Identifiers](?path=docs/Resources/Guides/BYOID.md)
- [Refund Requests](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
