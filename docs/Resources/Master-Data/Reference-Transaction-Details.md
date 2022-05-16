# Reference Transaction Details

Reference transaction details are used to reference the original transaction identifier in secondary request [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md), incemental auth or inquiry.
# Custom Identifiers

Commerce Hub supports the ability for mercant's to use thier own Merchant Identifiers and Order Identifiers. This allows a seemless integration into existing merchant APIs and databases.

---

## Merchant Identifiers

Merchant Identifiers allow a merchant to use their existing identifier for a location in the `merchantId` and their terminal for `terminalId` to submit transactions to Commerce Hub.

<!-- theme: info -->
> The merchant account will need to be boarded with the merchant specific identifiers.

<!--
type: tab
titles: merchantDetails, JSON Example
-->

The below table identifies the availble parameters in the `merchantDetails` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- |------------| ------- | ---- |
| `merchantId` | *string* | 16 | &#10004; | A unique ID used to identify the Merchant. |
| `terminalId` | *string* | 1024 | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the the gateway. |

<!--
type: tab
-->

JSON string format for `merchantDetails`:

```json
{
   "merchantDetails":{
      "tokenType": "TRANSARMOR",
      "storeId": "12345",
      "siteId": "CA123456",
      "terminalId": "12",
      "merchantId": "1234567890123456",
      "alternateMerchantId": "12345678",
      "promotionCode": "ABCD1234",
      "terminalLaneNumber": "001"
   }
}
```
<!--type: tab-end -->

---

## Order Identifiers

<!-- theme: danger -->
> We are enhancing Commerce Hub to support Order Identifiers and the documents related to the features will be released soon.

Order Identifiers allow a merchant to use their existing `merchantTransactionID` or `merchantOrderID` to submit secondary transactions; refund, [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md), incemental auth or inquiry, instead of using the Commerce Hub generated `transactionID` or `orderID`.

<!-- 
type: tab
titles: transactionDetails, JSON Example
-->

The below table identifies the avaiable parameters in the `transactionDetails` object.

| Variable | Type| Maximum Length | Description|
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

---
