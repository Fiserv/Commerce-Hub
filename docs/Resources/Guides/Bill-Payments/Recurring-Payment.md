---
tags: [Bill Payments, Recurring Bill Payments]
---

# Recurring Bill Payments

<!-- theme: danger -->
> We are enhancing Commerce Hub to support bill payments and the documents related to this feature will be released soon.

Reccuring transaction information is submitted in the `recurring` object as part of `additionalDataCommon`.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `frequency` | *string* | | Number of days between transactions |
| `expiry` | *string* | | When does the recurring transaction expire in YYYY-MM-DD format |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/DaaS/Enhanced-Data-Service.md)

---
