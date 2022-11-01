---
tags: [API Reference, Item Details, Master Data, Order Data, Order Details]
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
| `goodsSoldCode` | *string* |  | Indicates a specific type of good is being purchased in an Amex, [EDS](?path=docs/Resources/API-Documents/Payments_VAS/Enhanced-Data-Service.md) or 3D-Secure transaction. It is used to help identify potentially fraudulent sales. **Valid Value:** *GIFT_CARD* |
| `giftcardCount`  | *integer* | 2 | Number of gift cards purchased during the transaction |
| `giftCardAmount` | *object* |  | Used for the [total and currency](?path=docs/Resources/Master-Data/Amount-Components.md) |

<!--
type: tab
-->

JSON string format for `orderData`:

```json
{
  "orderData": {
    "orderDate": "2020-11-20",
    "itemCount": 3,
    "itemDetails": [
      {
        "categoryName": "Toys",
        "itemCount": 1,
        "value": 49.99,
        "insuranceClaimNumber": "12345",
        "department": "1",
        "subDepartment": "3",
        "departmentClass": "12",
        "departmentSubClass": "123"
      },
      {
        "categoryName": "Gift Card",
        "itemCount": 2,
        "value": 100
      }
    ],
    "preOrder": true,
    "preOrderDate": "2020-11-20",
    "reOrder": false,
    "goodsSoldCode": "GIFT_CARD",
    "giftcardCount": 1,
    "giftCardAmount": {
      "total": 200,
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
| `insuranceClaimNumber` | *string* | 64 | The insurance claim number of the customer |
| `department` | *string* | 256 | Merchant defined code or department description for the product or service sold based on business or processing requirements |
| `subDepartment` | *string* | 256 | Merchant defined code or sub-department description for the product or service sold based on business or processing requirements |
| `departmentClass` | *string* | 256 | Merchant defined code or department class description for the product or service sold based on business or processing requirements |
| `departmentSubClass` | *string* | 256 | Merchant defined code or department sub-class description for the product or service sold based on business or processing requirements |

<!--
type: tab
-->

JSON string format for `itemDetails`:

```json
{
  "itemDetails": [
    {
      "categoryName": "Toys",
      "itemCount": 1,
      "value": 49.99,
      "insuranceClaimNumber": "12345",
      "department": "Toys and Games",
      "subDepartment": "Infant Toys",
      "departmentClass": "Educational Toys",
      "departmentSubClass": "Ages 2+"
    },
    {
      "categoryName": "Sporting Goods",
      "itemCount": 2,
      "value": 59.98
      "insuranceClaimNumber": "5438",
      "department": "1",
      "subDepartment": "3",
      "departmentClass": "11",
      "departmentSubClass": "13"
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
