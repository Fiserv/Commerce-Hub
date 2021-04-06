# Amount

## Overview

Amount is broken into two arrays, `amount` and `amountComponents`.

- `amount`: Used to support the request for payment.
- `amountComponents`: Used in transactions where additional amount fields such as tax, surcharge, fees are required as part of the request.

#### Component: amount

|Variable    |  Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Subcomponent](#component-amountComponents) values must add up to total amount. Expected format 0.00. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](../Master-Data/Currency-Code.md).|

#### Component: amountComponents

<!-- theme:info -->
> The `amountComponents` is the subcomponent of `additionalDataCommon`.

| Variable | Type | Length | Description/Values |
| --------- | --- | ------ | -------------- |
| `subTotal` | *number* | 12 | Subtotal amount. |
| `vatAmount` | *number* | 12 | This field represents the Level 2 VAT (Value Added Tax) or Alternate Tax amount applied at the order level. |
| `localTax` | *number* | 12 | Local sales tax amount included in a transaction. |
| `shippingAmount` | *number* | 12 | Shipping amount included in a transaction. |
| `surcharge` | *number* | 12 | Identifies the transaction’s surcharge amount as an extra fee, tax, or cost added to the already existent cost of a good or service. **Note:** Not all processors and acquirers allow surcharge fees. For more information, please contact your Account Representative. |
| `ITBISTaxAmount` | *number* | 12 | Tax on the Transfer of Industrialised Goods and Services (ITBIS) tax amount. |
| `convenienceFee` | *number* | 12 | Optional [convenience fee](../Guides/Convenience-Fees.md) for payments made through an alternative channel, rather than by cash, check, or ACH. **Note:** Not all processors and acquirers allow convenience fees. For more information, please contact your Account Representative. |

---

## See Also

- [API Explorer](url)
- [Currency Codes](Currency-Code.md)

---