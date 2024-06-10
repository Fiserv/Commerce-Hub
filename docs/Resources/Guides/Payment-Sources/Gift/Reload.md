---
tags: [Gift Card, Payment Card, Payment Source, Loyalty, Reload]
---

# Gift Card Reload

A reload request allows a funds to be added to an activated gift card account. A reload is initiated by sending an `amount`, `target` and `operationType`: *RELOAD* in `transactionDetails` as part of the request.

---

## Request Variables

<!--
type: tab
titles: amount, target, transactionDetails, transactionInteraction, merchantDetails, additionalDataCommon 
-->

The below table identifies the required parameters in the `amount` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

The below table identifies the parameters in the `target` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are *PaymentSession*, *PaymentCard*, or *PaymentToken* |

The below table identifies the conditional parameters in `card` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `expirationMonth` | *string* | N/A | 2-digit expiration month |
| `expirationYear` | *string* | N/A | 4-digit expiration year |
| `category`| *string* | 25 | Describes the card category |
| `subCategory`| *string* | 25 | Provides the subcategory for the `category` field to identify the card type. |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `operationType` | *string* | 50 | Identifies the transaction type as RELOAD value |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionInteraction` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `terminalTimestamp` | *string* | N/A | Terminal timestamp in ISO 8601 format YYYY-MM-DDThh:mm:ssZ |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
|`terminalId` | *string* | N/A | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `additionalDataCommon` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `fundingProvider` | *string* | 32 |  Identifies who provided the funds, CUSTOMER, MERCHANT or UNSPECIFIED |
| `transactionPosDate` | *string* | 16 | Used to override a transaction post date in reporting |

<!-- type: tab-end -->

---

## Response Variables

<!--
type: tab
titles: balances
-->

The below table identifies the parameters in the `balances` array in the `paymentReceipt` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `beginningBalance` | *number* | 16,3 | Account beginning balance |
| `endingBalance` | *number* | 16,3 | Account ending balance
| `currency` | *string* | 17 | ISO 3 Currency Format |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/gift-cards`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a gift card reload payload request.

```json
{
  "amount": {
    "total": 10,
    "currency": "USD"
  },
  "target": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "8900000005675979",
      "expirationMonth": "01",
      "expirationYear": "3025",
      "securityCode": "64675611",
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS"
    }
  },
  "transactionDetails": {
    "merchantOrderId": "merchantOrderId234325",
    "merchantTransactionId": "merchantTransactionId134232",
    "operationType": "RELOAD"
  },
  "transactionInteraction": {
    "terminalTimestamp": "2016-04-16T16:06:05Z"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  },
  "additionalDataCommon": {
    "additionalData": {
      "fundingProvider": "CUSTOMER",
      "transactionPostDate": "2023-07-06"
    }
  }
}

```

<!--
type: tab
-->

Example of a gift card reload (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "GIFT_CARDS",
    "transactionState": "RELOADED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG010e056b9b08973891b00cf63183c8dbb3",
      "transactionTimestamp": "2023-07-06T06:30:34.835919Z",
      "apiTraceId": "1dc36d358f274694ad806b708d61fb13",
      "clientRequestId": "4112548",
      "transactionId": "1dc36d358f274694ad806b708d61fb13"
    }
  },
  "paymentReceipt": {
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "771052",
      "processor": "FISERV",
      "host": "GIFT_SOLUTIONS",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "Completed OK",
      "localTimestamp": "2023-07-06T06:30:34Z"
    },
    "balances": [
      {
        "beginningBalance": 10,
        "endingBalance": 20,
        "currency": "USD"
      }
    ]
  },
  "target": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "01",
      "expirationYear": "3025",
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS"
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&payments-vas/v1/accounts/gift-cards)
- [Gift Card Services](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Redemption Request](?path=docs/Resources/Guides/Payment-Sources/Gift/Redemption.md)

---
