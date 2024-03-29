---
tags: [API Reference, Item Details, Master Data, Order Data, Order Details]
---

# Order Data

A transaction can contain `orderData` as part of the customer's purchase. This data can be used for merchant database tracking, [level II/III transactions](?path=docs/Resources/Guides/Level23/Level23.md), improve authorization rates and reduce fraud.

<!--
type: tab
titles: orderData, JSON Example
-->

The below table identifies the parameters in the `orderData` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `orderDate` | *string* | 10 | Date that goods and services are ordered. YYYY-MM-DD format |
| `itemCount` | *integer* | 3 | Total number of items included in the purchase |
| `supplierVatRegistrationNumber` | *string* | 15 | Supplier VAT registration number |
| `itemDetails` | *array* | N/A | List of all [item details](#item-details) including categories along with amount and quantity |

<!---
| `preOrder` | *boolean* | N/A | Identifies if the purchase is a pre-order |
| `preOrderDate` | *string* | 10 | Date that goods and services are pre-ordered. YYYY-MM-DD format. |
| `reOrder` | *boolean* | N/A | Identifies if the purchase is a reorder |
| `goodsSoldCode` | *string* |  | Indicates a specific type of good is being purchased in an Amex, [EDS](?path=docs/Resources/API-Documents/Payments_VAS/Enhanced-Data-Service.md) or 3D-Secure transaction. It is used to help identify potentially fraudulent sales. |
| `giftCardCount`  | *integer* | 2 | Number of gift cards purchased during the transaction |
| `giftCardAmount` | *object* |  | Used for the [total and currency](?path=docs/Resources/Master-Data/Amount-Components.md) |
--->

<!--
type: tab
-->

JSON string format for `orderData`:

```json
{
  "orderData": {
    "orderDate": "2020-11-20",
    "supplierVatRegistrationNumber": "123456789",
    "itemCount": 1,
    "itemDetails": [
      {
        "itemNumber": 1,
        "itemDescription": "Kids Tablet",
        "commodityCode": "66996633252",
        "productUPC": "123456789012",
        "quantity": 1,
        "unitOfMeasurement": "MPR",
        "amountComponents": {
          "subTotal": 115,
          "freightAmount": 15,
          "grossAmount": 103,
          "unitPrice": 100,
          "netAmount": 100,
          "taxAmounts": [
            {
              "taxType": "LOCAL",
              "taxAmount": 3,
              "taxRate": 1,
              "taxExempt": false
            }
          ],
          "priceAdjustments": [
            {
              "adjustmentType": "DISCOUNT",
              "adjustmentRate": 5,
              "adjustmentAmount": 15
            }
          ]
        }
      }
    ]
  }
}
```

<!-- type: tab-end -->

## Item Details

Item details are an array that identifies the category, item count, and value of the customer's purchase, where each group of values is defined by the category.

<!-- theme: example -->
> If customer purchased a pair of tennis shoes, a tennis racket, and tennis balls, the array will contain groups, see JSON example.

<!--
type: tab
titles: itemDetails, JSON Example
-->

The below table identifies the parameters in the `itemDetails` array.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `commodityCode` | *string* | 256 | Identifies the [commodity code](?path=docs/Resources/Master-Data/Commodity-Codes.md) of the products sold |
| `itemDescription` | *string* | 1024 | Name or description of item |
| `productUPC` | *string* | 12 | Universal Product Code identifier used for retail products worldwide |
| `quantity` | *number* | 8 | Identifies the number of units of the product sold |
| `unitOfMeasurement` | *string* | | Identifies the [type of measurement](?path=docs/Resources/Master-Data/Unit-Measurement.md) for the product sold |
| `itemNumber` | *number* | 3 | Identifies the line item number out of total items sold |
| `amountComponents` | *object* | N/A | Identifies the [additional amounts](?path=docs/Resources/Master-Data/Amount-Components.md#amount-components) used in transactions where additional fields such as tax, shipping, discount or fees are required as part of the request |

<!---
| `insuranceClaimNumber` | *string* | 64 | The insurance claim number of the customer |
| `department` | *string* | 256 | Merchant defined code or department description for the product or service sold based on business or processing requirements |
| `subDepartment` | *string* | 256 | Merchant defined code or sub-department description for the product or service sold based on business or processing requirements |
| `departmentClass` | *string* | 256 | Merchant defined code or department class description for the product or service sold based on business or processing requirements |
| `departmentSubClass` | *string* | 256 | Merchant defined code or department sub-class description for the product or service sold based on business or processing requirements |
--->

<!--
type: tab
-->

JSON string format for `itemDetails`:

```json
{
  "itemDetails": [
    {
      "itemNumber": 1,
      "itemDescription": "Kids Tablet",
      "commodityCode": "66996633252",
      "productUPC": "123456789012",
      "quantity": 1,
      "unitOfMeasurement": "MPR",
      "amountComponents": {
        "subTotal": 115,
        "freightAmount": 15,
        "grossAmount": 103,
        "unitPrice": 100,
        "netAmount": 100,
        "taxAmounts": [
          {
            "taxType": "LOCAL",
            "taxAmount": 3,
            "taxRate": 1,
            "taxExempt": false
          }
        ],
        "priceAdjustments": [
          {
            "adjustmentType": "DISCOUNT",
            "adjustmentRate": 5,
            "adjustmentAmount": 15
          }
        ]
      }
    },
    {
      "itemNumber": 2,
      "itemDescription": "Running Shoes",
      "commodityCode": "124567895",
      "productUPC": "789456123025",
      "quantity": 1,
      "unitOfMeasurement": "MPR",
      "amountComponents": {
        "unitPrice": 100
      }
    }
  ]
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Level II/III](?path=docs/Resources/Guides/Level23/Level23.md)

---
