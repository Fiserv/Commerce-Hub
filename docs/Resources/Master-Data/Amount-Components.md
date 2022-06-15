---
tags: [Amount, Amount Components, API Reference, Transaction Amount]
--- 

# Transaction Amount

Transaction amount information is contained in the `amount` and `amountComponents` object.

- [**amount:**](#amount) Used to support the request for payment.
- [**amountComponents:**](#amount-components) Used in transactions where additional amount fields are required as part of the request.

## Amount

Used to present the transaction amount and transaction currency for particular transaction.

<!--
type: tab
titles: amount, JSON Example
-->

The below table identifies the parameters in the `amount` object.

|Variable |Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `total` | *number* | 18,3 | Total amount of the transaction. [Subcomponent](#amount-components) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO-4217 3-character Alpha Code](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

JSON string format for `amount`:

```json
{
   "amount":{
      "total": 21.70,
      "currency": "USD"
   }
}
```

<!-- type: tab-end -->

## Amount Components

Used in transactions where additional amount fields such as taxes, [surcharge fee](?path=docs/Resources/FAQs-Glossary/Glossary.md#surcharge-fees), or [convenience fee](?path=docs/Resources/Guides/Convenience-Fees.md) are required as part of the request.

<!--
type: tab
titles: amountComponents, JSON Example
-->

The below table identifies the parameters in the `amountComponents` object.

| Variable | Type | Maximum Length | Description |
| --------- | --- | ------ | -------------- |
| `subTotal` | *number* | 12 | Subtotal amount |
| `vatAmount` | *number* | 12 | This field represents the Level 2 VAT (Value Added Tax) or Alternate Tax amount applied at the order level. |
| `localTax` | *number* | 12 | Local sales tax amount included in a transaction |
| `shippingAmount` | *number* | 12 | Shipping amount included in a transaction |
| `cashback` | *number* | 12 | For Debit or Credit: The amount of cash requested by the cardholder at the time of purchase. Currently not supported on Visa, Mastercard, Amex, EBTCash or Signature Debit. |
| `tip` | *number* | 12 | The portion of the transaction amount that represents the tip. |
| `surcharge` | *number* | 12 | Identifies the transaction’s surcharge amount as an extra fee, tax, or cost added to the already existent cost of a good or service. Not applicable to Debit or Prepaid transactions. **Note:** Not all processors and acquirers allow surcharge fees. For more information, please contact your Account Representative. |
| `ITBISTaxAmount` | *number* | 12 | Tax amount on the Transfer of Industrialised Goods and Services (ITBIS) |
| `convenienceFee` | *number* | 12 | Optional [convenience fee](?path=docs/Resources/Guides/Convenience-Fees.md) for payments made through an alternative channel, rather than by cash, check, or ACH. **Note:** Not all processors and acquirers allow convenience fees. For more information, please contact your Account Representative. |

<!--
type: tab
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
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Currency Codes](?path=docs/Resources/Master-Data/Currency-Code.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Convenience Fee](?path=docs/Resources/Guides/Convenience-Fees.md)
 
---
