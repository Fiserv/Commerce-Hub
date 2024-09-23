---
tags: [Merchant Identifier, Order Identifier, Merchant ID, Terminal ID, Transaction ID, Order ID, Custom Identifiers]
---

# Understanding and using custom identifiers in the API

Commerce Hub supports the ability for merchants to use their own [merchant identifiers](#using-merchant-identifiers) and [order and transaction identifiers](#using-order-and-transaction-identifiers). This allows a seamless integration into existing merchant APIs and databases.

---

## Using merchant identifiers

Merchant identifiers, known as Bring Your Own Account *(BYOA)* or Bring Your Own MID *(BYOM)*, allow a merchant to use their existing identifiers for a location in the `merchantId` and their terminal in the `terminalId` to submit transactions to Commerce Hub.

<!-- theme: info -->
> The merchant account will need to be boarded with the merchant specific identifiers. Please contact your account representative for more information.

<!--
type: tab
titles: merchantDetails, JSON Example
-->

The below table identifies the available parameters in the `merchantDetails` object.

<!-- theme: warning -->
> All boarded identifiers (MID and/or TID) are required in API requests.

| Variable | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `merchantId` | *string* | 1024 | A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a merchant custom identifier |
| `terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a merchant custom identifier |

<!--
type: tab
-->

JSON string format for `merchantDetails`:

```json
{
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```
<!--type: tab-end -->

---

## Using order and transaction identifiers

Order and transaction identifiers, known as Bring Your Own ID (BYOID), allow a merchant to use their existing `merchantTransactionID` or `merchantOrderId` to submit secondary transactions instead of using the Commerce Hub generated `transactionID` or `orderID`.

| Transaction Type | `merchantTransactionId` | `merchantOrderId` |
| ----- | :-----: | :-----: |
| [Capture API](?path=docs/Resources/API-Documents/Payments/Capture.md) | &#10004; | |
| [Refunds API](?path=docs/Resources/API-Documents/Payments/Refund.md) | &#10004; | |
| [Cancels API](?path=docs/Resources/API-Documents/Payments/Cancel.md) | &#10004; | |
| [Transaction Inquiry API](?path=docs/Resources/API-Documents/Payments/Inquiry.md) | &#10004; | &#10004; |
| Incremental authorization | &#10004; | |
| [Re-authorization](docs/?path=docs/Resources/Guides/Authorizations/Re-Auth.md) | &#10004; | |

<!-- 
type: tab
titles: transactionDetails, JSON Example
-->

The below table identifies the available parameters in the `transactionDetails` object.

| Variable | Type| Max Length | Description|
|---------|-----------|----------------|---------|
| `merchantTransactionId` | *string* | 128 | Unique merchant transaction ID *(aka transaction reference ID)* |
| `merchantOrderId` | *string* | 128 | Merchant order ID *(aka customer reference number or purchase order number)* |

<!--
type: tab
-->

JSON string format for `transactionDetails`:

```json
{
  "transactionDetails": {
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO"
  }
}
```

<!--type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Merchant Details](?path=docs/Resources/Master-Data/Merchant-Details.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)
- [Reference Transaction Details](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md)

---
