---
tags: [Gift Card, Payment Card, Payment Source, Loyalty, Reload]
---

# Gift Card Reload

A Reload transaction allows a merchant to add value to an already activated account in Commerce Hub. A Reload is initiated by sending the `amount`, `target` and `additionalDataCommon` object in the Request with relevant transaction types.

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
| `merchantTransactionID` | *string* | 5 | Designates if the transaction should be captured (*true* for Sale and *false* for Pre-Auth)|
| `merchantOrderID`| *string* | 128 | Merchant order ID (aka customer reference number or purchase order (PO) number).
| `operationType` | *string* | 50 | Identifies the tranaction type as RELOAD value |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionInteraction` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `terminalTimestamp` | *string* | N/A | Terminal timestamp in ISO 8601 format YYYY-MM-DDThh:mm:ssZ' |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!--
type: tab
-->

The below table identifies the required parameters in the `additionalDataCommon` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `fundingProvider` | _string_ | 32 |  Identifies who provided the funds, CUSTOMER, MERCHANT or UNSPECIFIED |
| `transactionPosDate` | *string* | 16 | 'Used to override a transaction post date in reporting. |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/gift-cards`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

#### Example of payload request

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
    "terminalId": "10000001",
    "merchantId": "10000900POD2205"
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

#### Example of payload response

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
    "balances": [
      {
        "beginningBalance": 10,
        "endingBalance": 20,
        "currency": "USD"
      }
    ],
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
    }
  },
  "target": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "8900000005675979",
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

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Gift Solutions](?path=docs/Resources/Guides/Payment-Sources/Gift/Gift-Solutions.md)