---
tags: [carat, commerce-hub, enterprise, order-details, order-data, master-data, item-details]
---

# Order Data

A transaction can contain `orderData` as part of the customer's purchase. This data can be used for merchant database tracking, improve authorization rates and reduce fraud.

<!--
type: tab
titles: orderData, JSON Example
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
| `goodsSoldCode` | *string* | N/A | Indicates a specific type of good is being purchased in an Amex or [EDS](?path=docs/Resources/API-Documents/Payments_VAS/Enhanced-Data-Service.md) transaction. It is used to help identify potentially fraudulent sales. **Valid Value:** *GIFT_CARD* |
| `giftcardCount`  | *integer* | 2 | Number of gift cards purchased during the transaction |
| `giftCardAmount` | *object* | N/A | Used for the [total and currency](?path=docs/Resources/Master-Data/Amount-Components.md) |

<!--
type: tab
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
            "value": 49.99
         },
         {
            "categoryName": "Gift Card",
            "itemCount": 2,
            "value": 100.00
         }
      ],
      "preOrder": true,
      "preOrderDate": "2020-11-20",
      "reOrder": false,
      "goodsSoldCode": "GIFT_CARD",
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

Item details is an array that identifies the category, item count, and value of the customer's purchase, where each group of values is defined by the category.

<!-- theme: example -->
> If customer purchased a pair of tennis shoes, a tennis racket, and tennis balls, the array will contain groups, see JSON example.

<!--
type: tab
titles: itemDetails, JSON Exaample
-->

The below table identifies the parameters in the `itemDetails` array.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `categoryName` | *string* | 8 | Merchant defined category of the item(s) sold |
| `itemCount` | *string* | 2 | The total item count for the category |
| `value` | *string* | 32 | The monetary value of the item(s) sold for the category |

<!--
type: tab
-->

JSON string format for `itemDetails`:

```json
{
   "itemDetails": [
      {
         "categoryName": "Apparel",
         "itemCount": 1,
         "value": 49.99
      },
      {
         "categoryName": "Sporting Goods",
         "itemCount": 2,
         "value": 59.98
      }
   ]
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/DaaS/Enhanced-Data-Service.md)

---
