---
tags: [Private Label, API Reference, Master Data]
---

# Private Label Data

The private label object contains additional fields that may be required for some [private label proccessors](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md).  

<!--
type: tab
titles: privateLabel, JSON Example
-->

The below table identifies the parameters in the `privateLabel` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `specialFinanceIndicator` | *string* | 16 | Indicates if special finance term and rate |
| `creditPlan`| *string* | 64 | Payment program assigned by the private label processor |
| `minimumSpendExemptIndicator`| *string* | 32 | Identifies if the customer is *EXEMPT* or *NOT_EXEMPT* from a minimum spend amount |

---

<!--
type: tab
-->

JSON string format for `privateLabel`:

```json
{
  "privateLabel": {
    "specialFinanceIndicator": "24/0",
    "creditPlan": "00100",
    "minimumSpendExemptIndicator": "EXEMPT"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Private Label](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md)

---
