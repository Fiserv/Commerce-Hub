---
tags: [Merchant Identifier, Order Identifier, Merchant ID, Terminal ID, Transaction ID, Order ID, Custom Identifiers]
---

# Custom Identifiers

Commerce Hub supports the ability for merchants to use their own [Merchant Identifiers](#merchant-identifiers) and [Order Identifiers](#order-identifiers). This allows a seamless integration into existing merchant APIs and databases.

---

## Merchant Identifiers

Merchant Identifiers, known as Bring Your Own Account (BYOA) or Bring Your Own MID (BYOM), allow a merchant to use their existing identifiers for a location in the `merchantId` and their terminal for `terminalId` to submit transactions to Commerce Hub.

<!-- theme: info -->
> The merchant account will need to be boarded with the merchant specific identifiers. Please contact your account representative for more information.

<!--
type: tab
titles: merchantDetails, JSON Example
-->

The below table identifies the available parameters in the `merchantDetails` object.

<!-- theme: warning -->
> All boarded identifiers (MID and/or TID) are required in API requests.

| Variable | Type | Max Length | Required | Description |
| -------- | -- |------------| ------- | ---- |
| `merchantId` | *string* | 1024 | &#10004; | A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | *string* | 1024 | &#10004; | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md)|

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

## Order Identifiers

<!-- theme: danger -->
> We are enhancing Commerce Hub to support Order Identifiers and the documents related to the features will be released soon.

Order Identifiers, known as Bring Your Own ID (BYOID), allow a merchant to use their existing `merchantTransactionID` or `merchantOrderID` to submit secondary transactions; [capture](?path=docs/Resources/API-Documents/Payments/Capture.md), [refund](?path=docs/Resources/API-Documents/Payments/Refund.md), [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md), incremental authorization, [re-auth](docs/?path=docs/Resources/Guides/Authorizations/Re-Auth.md), or [inquiry](?path=docs/Resources/API-Documents/Payments/Inquiry.md), instead of using the Commerce Hub generated `transactionID` or `orderID`.

<!-- 
type: tab
titles: transactionDetails, JSON Example
-->

The below table identifies the available parameters in the `transactionDetails` object.

| Variable | Type| Max Length | Description|
|---------|-----------|----------------|---------|
| `merchantTransactionId` | *string* | 128 | Unique merchant transaction ID (aka transaction reference ID). |
| `merchantOrderId` | *string* | 128 | Merchant order ID (aka customer reference number or purchase order number). |

<!--
type: tab
-->

JSON string format for `transactionDetails`:

```json
{
   "transactionDetails":{ 
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
