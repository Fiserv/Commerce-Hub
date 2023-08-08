---
tags: [Amount, Amount Components, API Reference, Transaction Amount, Price Adjustment, Tax]
--- 

# Transaction Amount

Transaction amount information is contained in the `amount` and `amountComponents` object.

- [**amount:**](#amount) Used to support the request for payment.
- [**amountComponents:**](#amount-components) Used in transactions where additional amount fields are required as part of the request.
- [**priceAdjustment:**](#price-adjustment) Used to identifies the type of price adjustment being applied.
- [**taxAmount:**](#tax-amount) Used to identifies the type of tax being applied

---

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

---

## Amount Components

Used in transactions where additional amount fields such as taxes, [surcharge fee](?path=docs/Resources/FAQs-Glossary/Glossary.md#surcharge-fees), or [convenience fee](?path=docs/Resources/Guides/Convenience-Fees.md) are required as part of the request.

<!--
type: tab
titles: amountComponents, JSON Example
-->

The below table identifies the parameters in the `amountComponents` object.

| Variable | Type | Maximum Length | Description |
| --------- | --- | ------ | -------------- |
| `unitPrice` | *number* | 18,3 | Identifies the price per unit of measure for the product sold. This should exclude any taxes or charges |
| `subTotal` | *number* | 18,3 | The total amount before any other costs, discounts, fees, or taxes |
| `shippingAmount` | *number* | 18,3 | Total amount of shipping, delivery or freight charges applied |
| `shippingRate` | *number* | 100 | Shipping, delivery or freight rate percent. |
| `cashback` | *number* | 18,3 | For Debit, EBTCash, or Credit: The amount of cash requested by the cardholder at the time of purchase. |
| `tip` | *number* | 18,3 | The portion of the transaction amount that represents the tip |
| `surcharge` | *number* | 12 | Identifies the transaction surcharge amount as an extra fee, tax, or cost added to the already existent cost of a good or service. Note: Not all processors and acquirers allow surcharge fees. For more information, please contact your account representative. |
| `ITBISTaxAmount` | *number* | 12 | Tax amount on the Transfer of Industrialised Goods and Services (ITBIS) |
| `convenienceFee` | *number* | 18,3 | Optional [convenience fee](?path=docs/Resources/Guides/Convenience-Fees.md) for payments made through an alternative channel, rather than by cash, check, or ACH. **Note:** Not all processors and acquirers allow convenience fees. For more information, please contact your Account Representative. |
| `freightAmount` | *number* | 18,3 | Freight amount applied |
| `freightRate` | *number* | 100 | Freight rate percent |
| `priceAdjustments` | *type* | N/A | Identifies the type of price adjustment being applied. |
| `netAmount` | *number* | 18,3 | The pre-tax cost of an item, minus any discounts or promotions. |
| `taxAmounts` | *array* | N/A | Total amounts for taxes applied to the purchase |
| `grossAmount`| *number* | 18,3 | The total cost of an item, including the unit price and any other costs, discounts, fees, or taxes. | 

<!--
type: tab
-->

JSON string format for `amountComponents`:

```json
{
   "amountComponents":{
      "unitPrice": 10.00,
      "subTotal": 1.50,
      "convenienceFee": 1.00,
      "cashback": 1.50,
      "tip": 1.50,
      "shippingAmount": 5.00,
      "shippingRate": 1,
      "surcharge": 1.50,
      "freightAmount": 5.00,
      "freightRate": 1,
      "netAmount": 40,
      "grossAmount": 100.50
   }
}
``` 
 
<!-- type: tab-end -->

---

### Price Adjustment 

Used to present the transaction amount and transaction currency for particular transaction.

<!--
type: tab
titles: priceAdjustment, JSON Example
-->

The below table identifies the parameters in the `priceAdjustment` object.

| Variable | Type | Maximum Length | Description |
| --------- | --- | ------ | -------------- |
| `adjustmentDescription` | *string* | N/A | Identifies the adjustments 
| `adjustmentRate` | *number* | 100 | Rate percent being applied |
| `adjustmentAmount` | *number* | 18,3 | Amount being applied |

#### Adjustment Type

The below table contains the valid values for `adjustmentType` parameter.

| Value |
|---------|
| COUPON |
| CREDIT |
| DISCOUNT |
| FEES |
| PROMOTION |

<!--
type: tab
-->

JSON string format for `priceAdjustment`:

```json
{
   "priceAdjustment":{
      "adjustmentDescription": "This is a discoun",
      "adjustmentRate": 10,
      "adjustmentAmount": 2
   }
}
```

<!-- type: tab-end -->

---

### Tax Amounts

Used to present the transaction amount and transaction currency for particular transaction.

<!--
type: tab
titles: taxAmounts, JSON Example
-->

The below table identifies the parameters in the `taxAmounts` object.

|Variable |Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `taxType` | *string* |  | Identifies the [type](#tax-type) of tax being applied |
| `taxRate` | *number* | 100 | Tax rate percent being applied |
| `taxAmount` | *number* | 18,3 | Tax amount being applied |
| `taxExempt` | *boolean* | N/A | Designates if the specified tax type is tax exempt. Tax Exempt _(true)_ or Not Tax Exempt _(false)_ |

#### Tax Type

The below table contains the valid values for `taxType` parameter.

| Value | Description |
|---------|----------|
| UNKNOWN | State sales tax |
| ALTERNATE_TAX | Alternate tax |
| CITY | City sales tax |
| DUTY | Duty tax |
| ENERGY | Energy Tax |
| FEDERAL | Federal/National Sales Tax |
| GST | Goods and Services Tax |
| HST | Harmonized Sales Tax |
| ITBIS | Industrialized Goods and Services Transfer Tax |
| LOCAL | Local Sales Tax |
| MUNICIPAL | Municipal Sales Tax |
| NOT_SUPPORTED |
| OCCUPANCY | Occupancy Tax |
| OTHER | Other Tax |
| PST | Provincial Sales Tax |
| QST | Quebec Sales Tax |
| ROOM | Room Tax |
| STATE | State Sales Tax |
| VAT | Value Added Tax |

<!--
type: tab
-->

JSON string format for `taxAmounts`:

```json
{
  "taxAmounts": {
    "taxType": "STATE",
    "taxRate": 10,
    "taxAmount": 2,
    "taxExempt": true
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
