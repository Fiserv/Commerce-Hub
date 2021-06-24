---
tags: [carat, commerce-hub, enterprise, amount, amount-components,transaction-amount, ]
---


# Transaction Amount

Transaction amount information is contained into two objects, `amount` and `amountComponents`.

- [**amount:**](#amount) Used to support the request for payment.
- [**amountComponents:**](#amountcomponents) Used in transactions where additional amount fields such as tax, surcharge, or fees are required as part of the request.

## Amount

Used to present the transaction amount and transaction currency for particular transaction.

<!--
type: tab
title: amount
-->

The below table identifies the required parameters in the `amount` object.

|Variable |Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `total` | *number* | 18,3 | Total amount of the transaction. [Subcomponent](#amountcomponents) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
title: JSON Example
-->

JSON string format for `amount`:

```json
{
   "amount":{
      "total": 12.00,
      "currency": "USD"
   }
}
```

<!-- type: tab-end -->

## Amount Components

Used in transactions where additional amount fields such as tax, surcharge, fees are required as part of the request.

<!--
type: tab
title: amountComponents
-->

The below table identifies the required parameters in the `amountComponents` object.

| Variable | Type | Length | Description |
| --------- | --- | ------ | -------------- |
| `subTotal` | *number* | 12 | Subtotal amount |
| `vatAmount` | *number* | 12 | This field represents the Level 2 VAT (Value Added Tax) or Alternate Tax amount applied at the order level. |
| `localTax` | *number* | 12 | Local sales tax amount included in a transaction |
| `shippingAmount` | *number* | 12 | Shipping amount included in a transaction |
| `surcharge` | *number* | 12 | Identifies the transaction’s surcharge amount as an extra fee, tax, or cost added to the already existent cost of a good or service. **Note:** Not all processors and acquirers allow surcharge fees. For more information, please contact your Account Representative. |
| `ITBISTaxAmount` | *number* | 12 | Tax on the Transfer of Industrialised Goods and Services (ITBIS) tax amount |
| `convenienceFee` | *number* | 12 | Optional [convenience fee](?path=docs/Resources/Guides/Convenience-Fees.md) for payments made through an alternative channel, rather than by cash, check, or ACH. **Note:** Not all processors and acquirers allow convenience fees. For more information, please contact your Account Representative. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `amountComponents`:

```json
{
   "amountComponents":{
      "subTotal": 12.00,
      "convenienceFee": 1.00,
      "ITBISTaxAmount": 0.50,
      "localTax": 1.00,
      "shippingAmount": 5.00,
      "surcharge": 1.20,
      "vatAmount": 1.00
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Currency Codes](?path=docs/Resources/Master-Data/Currency-Code.md)

---