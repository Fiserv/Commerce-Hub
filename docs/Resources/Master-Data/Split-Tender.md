---
tags: [carat, commerce-hub, enterprise, split-tender,]
---

# Split Tender

The transaction request initiated by merchant that contain multiple payment sources require the `splitTender` component.

<!--
type: tab
title: splitTender
-->

The below table identifies the required parameters in the `splitTender` object.

| Variable | Type| Maximum Length | Description|
|---------|-----------|----------------|---------|
| `splitTenderId` | *string* | 1024 | A partially-authorized transaction will generate a Split Tender ID. Subsequent transactions to complete the authorization should include the Split Tender ID so that all the transactions comprising that authorization can be linked. |
| `splitTenderMethod` | *array* | N/A | Identifies the additional forms of payment used as part of this order |

<!--
type: tab
title: splitTenderMethod
-->

The below table identifies the required parameters in the `splitTenderMethod` array.

| Variable | Type| Maximum Length | Description|
|---------|-----------|----------------|---------|
| `method` | *string* | 1024 | **Valid Values:** CREDIT_CARD, COUPON, GIFT_CARD, STORE_CREDIT, DEBIT_CARD, EBT_SNAP |

<!--
type: tab
title: JSON Example
-->

JSON string format for `splitTender`:

```json
{
   "splitTender": {
      "splitTenderId": "12423434",
      "splitTenderMethod": [
         {
            "type": "CREDIT_CARD",
            "count": 2,
            "amount": {
               "total": 1,
               "currency": "USD"
            }
         }
      ]
   }
}
```

<!--type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/Payments_VAS/Enhanced-Data-Service.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
