---
tags: [API Reference, Fraud, Fraud Attributes, Risk Scoring]
---

# Fraud Attributes
 
A transaction can contain `fraudAttributes` to improve authorization rates and reduce fraud.

<!--
type: tab
titles: fraudAttributes, JSON Example
-->

The below table identifies the parameters in the `fraudAttributes` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `riskScore` | *string* | 3 | Merchant’s defined fraud risk score for this transaction 0-100; 100 being highest risk |
| `suspicious` | *boolean* | N/A | Has the merchant detected suspicious activity on card, account or device used for this transaction in prior 60 days |

<!--
type: tab
-->

JSON string format for `orderData`:

```json 
{
   "fraudAttributes": {
      "riskScore": 10,
      "suspicious": false,
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/DaaS/Enhanced-Data-Service.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
