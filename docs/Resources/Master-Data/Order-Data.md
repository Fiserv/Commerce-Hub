---
tags: [carat, commerce-hub, enterprise, order-details, order-data, master-data, item-details]
---

# Order Data

Order data contains parameters of the customers purchase. This data can be used for merchant database tracking, improve authorization rates and reduce fraud.

<!--
type: tab
title: orderData
-->

The below table identifies the parameters in the `orderData` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `orderDate` | *string* | 10 | Date that goods and services are ordered. YYYY-MM-DD format. |
| `itemCount` | *integer* | 2 | Total number of items included in the purchase |
| `itemDetails` | *array* | N/A | List of all [item details](#item-details) including categories along with amount and quantity |
| `preOrder` | *boolean* | N/A | Identifies if the purchase is a preorder |
| `preOrderDate` | *string* | 10 | Date that goods and services are preordered. YYYY-MM-DD format. |
| `reOrder` | *boolean* | N/A | Identifies if the purchase is a reorder |
| `giftCardPurchase` | *boolean* | N/A| Identifies if the order contains a gift card purchase |
| `giftcardCount`  | *integer* | 2 | Number of gift cards redeemed during the transaction |
| `giftCardAmount` | *object* | N/A | Used for the [total and currency](?path=docs/Resources/Master-Data/Amount-Components.md) |
| `total` | *number* | 18,3 | Total amount of the gift card |
| `currency` | *string* | 3 | The requested currency in [ISO 3 currency format](?path=docs/Resources/Master-Data/Currency-Code.md).|


<!--
type: tab
title: JSON Example 
-->

JSON string format for `orderData`:

```json
{
   "orderData": {
      "orderDate": "2020-11-20",
      "itemCount": 1,
      "itemDetails": [
         {
            "categoryName": "Toys",
            "itemCount": 1,
            "value": 10.03
         }
      ],
      "preOrder": true,
      "preOrderDate": "2020-11-20",
      "reOrder": true,
      "giftCardPurchase": true,
      "giftcardCount": 1,
      "giftCardAmount": {
         "total": 1,
         "currency": "USD"
      }
   }
}
```


<!-- type: tab-end -->

### Item Details

The below table identifies the parameters in the `itemDetails` array.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `categoryName` | *string* | 8 | Category of the item sold |
| `itemCount` | *string* | 2 | Item count |
| `value` | *string* | 32 | The monetary value of the item sold |


