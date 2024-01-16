---
tags: [Amount, Discount, Fee, Promotion, Price Adjustment]
---

# Price Adjustment Details

The `priceAdjustments` array is used to define the type of adjustment, description, rate, and amount in the `amountComponents` object.

<!--
type: tab
titles: priceAdjustments, JSON Example
-->

The below table identifies the parameters in the `priceAdjustments` array.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `adjustmentType` | *string* |  | Identifies the [type of adjustment](#adjustment-type) being applied |
| `adjustmentDescription` | *string* | 3 | Description of the adjustment being applied |
| `adjustmentRate` | *number* | 3 | Rate percent being applied |
| `adjustmentAmount` | *number* | 18,3 | Adjustment amount being applied |

---

<!--
type: tab
-->

JSON string format for `priceAdjustments`:

```json
{
  "amountComponents": {
    "priceAdjustments": [
      {
        "adjustmentType": "DISCOUNT",
        "adjustmentDescription": "Discount for loyalty",
        "adjustmentRate": 10,
        "adjustmentAmount": 1.5
      },
      {
        "adjustmentType": "COUPON",
        "adjustmentDescription": "10% Off Coupon",
        "adjustmentRate": 10,
        "adjustmentAmount": 1.5
      }
    ]
  }
}
```

<!-- type: tab-end -->


---

## Adjustment Type

Use these values to populate the `adjustmentType` property.

| Value | Description |
| -------- | ------- |
| *DISCOUNT* | Discount provided to the customer |
| *PROMOTION* | Promotion being ran by merchant |
| *CREDIT* | Credit applied to purchase |
| *COUPON* | Coupon redeemed |
| *FEE* | Fee being charged to customer |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Level II/III](?path=docs/Resources/Guides/Level23/Level23.md)
- [Amount Components](?path=docs/Resources/Master-Data/Amount-Components.md)

---
