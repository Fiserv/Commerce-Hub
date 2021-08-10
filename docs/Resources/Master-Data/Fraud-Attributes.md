---
tags: [carat, commerce-hub, enterprise, fraud, fraud-attributes, risk-scoring]
---

# Fraud Attributes

<!-- theme: danger -->
> We are enhancing Commerce Hub to supportfraud attributes. The documents related to the features will be released soon.

A transaction can contain `fraudAttributes` to improve authorization rates and reduce fraud.

---

<!---
type: tab
title: fraudAttributes
--->

<!---
The below table identifies the parameters in the `fraudAttributes` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `riskScore` | *string* | 3 | Merchant’s defined fraud risk score for this transaction 0-100; 100 being highest risk |
| `suspicious` | *boolean* | N/A | Has the merchant detected suspicious activity on card, account or device used for this transaction in prior 60 days |
--->

<!---
type: tab
title: JSON Example 
--->

<!---
JSON string format for `orderData`:

```json
{
   "fraudAttributes": {
      "riskScore": 10,
      "suspicious": false,
   }
}
```

--->

<!--- type: tab-end --->



## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/Payments_VAS/Enhanced-Data-Service.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
