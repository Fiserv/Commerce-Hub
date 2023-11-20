---
tags: [Amount, Taxes]
---

# Tax Details

The `taxAmounts` array is used to define the tax type, rate, amount, and tax exemption status in the `amountComponents` object.

<!--
type: tab
titles: taxAmounts, JSON Example
-->

The below table identifies the parameters in the `taxAmounts` array.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `taxType` | *string* |  | Identifies the [type of tax](#tax-type) being applied |
| `taxRate` | *number* | 3 | Tax rate percent being applied |
| `taxAmount` | *number* | 18,3 | Tax amount being applied |
| `taxExempt` | *boolean* | N/A | Designates if the specified tax type is tax exempt. Tax Exempt *(true)* or Not Tax Exempt *(false)* |

---

<!--
type: tab
-->

JSON string format for `taxAmounts`:

```json
{
  "amountComponents": {
    "taxAmounts": [
      {
        "taxType": "STATE",
        "taxRate": 7.5,
        "taxAmount": 1.5,
        "taxExempt": false
      },
      {
        "taxType": "CITY",
        "taxRate": 1.6,
        "taxAmount": 0.25,
        "taxExempt": false
      }
    ]
  }
}
```

<!-- type: tab-end -->


---

## Tax Type

Use these values to populate the `taxType` property.

| Value | Description |
| -------- | ------- |
| *FEDERAL* | Federal/National sales tax |
| *STATE* | State sales tax |
| *QUEBEC* | Quebec sales tax *(excluding GST)* |
| *PROVINCE* | Provincial sales tax |
| *CITY* | City sales Tax |
| *LOCAL* | Local sales Tax |
| *MUNICIPAL* | Municipal sales Tax |
| *DUTY* | Customs Duty, tariff or tax  |
| *VAT* | Goods and services tax *(GST)*, Industrialized goods and services transfer tax *(ITBIS)*, or other Value-added Tax *(VAT)*  |
| *HST* | Harmonized sales tax *(replaces PST and GST based on provinces)* |
| *ROOM* | Room tax |
| *OCCUPANCY* | Occupancy tax |
| *ENERGY* | Energy tax |
| *ALTERNATE* | Alternate tax |
| *OTHER* | Other Tax |
| *UNKNOWN* | Unknown or no tax submitted |
| *NOT_SUPPORTED* | Not Supported |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Level II/III](?path=docs/Resources/Guides/Level23/Level23.md)
- [Amount Components](?path=docs/Resources/Master-Data/Amount-Components.md)

---
