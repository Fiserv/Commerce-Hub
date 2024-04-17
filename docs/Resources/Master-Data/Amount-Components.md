---
tags: [Amount, Amount Components, API Reference, Transaction Amount, Price Adjustment, Tax]
--- 

# Transaction Amounts

Transaction amount information is contained in the `amount` and `amountComponents` object.

- [**amount:**](#amount) Used to support the request for payment.
- [**amountComponents:**](#amount-components) Used in transactions where additional amount fields are required as part of the request.

<!-- theme: info -->
> Commerce Hub currently supports a maximum of 18 digits + 3 precisions _(decimal places)_, however different processing platforms may support more or less, see their spec doc for more details. Example the Nashville front-end processor currently only supports a max of 12 digits including precision based on the currency; e.g. 12 digits + 0 precision, 10 digits + 2 precisions, or 9 + 3 precisions.

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
| `total` | _number_ | 18,3 | Total amount of the transaction. [Subcomponent](#amount-components) values must add up to total amount. |
| `currency` | _string_ | 3 | The requested currency in [ISO-4217 3-character Alpha Code](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

JSON string format for `amount`:

```json
{
  "amount": {
    "total": 21.7,
    "currency": "USD"
  }
}
```

<!-- type: tab-end -->

---

## Amount Components

Used in transactions where additional amount fields such as [taxes](?path=docs/Resources/Master-Data/Tax-Types.md), [convenience fees](?path=docs/Resources/Guides/Convenience-Fees.md), cashback, tips, or [price adjustments](?path=docs/Resources/Master-Data/Price-Adjustments.md) are required as part of the request.

<!--
type: tab
titles: amountComponents, JSON Example
-->

The below table identifies the parameters in the `amountComponents` object.

| Variable | Type | Maximum Length | Description |
| --------- | --- | ------ | -------------- |
| `unitPrice` | _number_ | 18,3 | Identifies the price per unit of measure for the product sold. This should exclude any taxes or charges |
| `subTotal` | _number_ | 18,3 | The total amount before any other costs, discounts, fees, or taxes |
| `cashback` | _number_ | 18,3 | For Debit, EBTCash, or Credit: The amount of cash requested by the cardholder at the time of purchase |
| `tip` | _number_ | 18,3 | The portion of the transaction amount that represents the tip |
| `convenienceFee` | _number_ | 12 | Optional [convenience fee](?path=docs/Resources/Guides/Convenience-Fees.md) for payments made through an alternative channel, rather than by cash, check, or ACH. **Note:** Not all processors and acquirers allow convenience fees. For more information, please contact your Account Representative. |
| `surcharge` | _number_ | 18,3 | Identifies the transaction’s surcharge amount as an extra fee, tax, or cost added to the already existent cost of a good or service. Not applicable to Debit or Prepaid transactions. **Note:** Not all processors and acquirers allow surcharge fees. For more information, please contact your Account Representative. |
| `shippingRate` | _number_ | 3 | Shipping, delivery or freight rate percent |
| `shippingAmount` | _number_ | 18,3 | Total amount of shipping, delivery or freight charges applied. |
| `freightRate` | _number_ | 3 | Freight rate percent |
| `freightAmount` | _number_ | 18,3 | Freight amount applied |
| `priceAdjustments` | _array_ | N/A | Total [adjustment](?path=docs/Resources/Master-Data/Price-Adjustments.md) amounts and details applied to the purchase |
| `netAmount` | _number_ | 18,3 | The pre-tax cost of an item, minus any discounts or promotions |
| `taxAmounts` | _array_ | N/A | Total [tax](?path=docs/Resources/Master-Data/Tax-Types.md) amounts and details applied to the purchase |
| `grossAmount` | _number_ | 18,3 | The total cost of an item, including the unit price and any other costs, discounts, fees, or taxes |

<!--
type: tab
-->

JSON string format for `amountComponents`:

```json
{
  "amountComponents": {
    "unitPrice": 10,
    "subTotal": 10,
    "cashback": 2,
    "tip": 1.5,
    "convenienceFee": 1.5,
    "surcharge": 1.5,
    "shippingRate": 1.7,
    "shippingAmount": 5,
    "freightRate": 1.7,
    "freightAmount": 5,
    "priceAdjustments": [
      {
        "adjustmentType": "DISCOUNT",
        "adjustmentDescription": "Discount for loyalty",
        "adjustmentRate": 10,
        "adjustmentAmount": 1.5
      },
      {
        "adjustmentType": "COUPON",
        "adjustmentDescription": "10% Off Coupon",
        "adjustmentRate": 10,
        "adjustmentAmount": 1.5
      }
    ],
    "netAmount": 20,
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
    ],
    "grossAmount": 21.75
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Currency Codes](?path=docs/Resources/Master-Data/Currency-Code.md)
- [Level II/III](?path=docs/Resources/Guides/Level23/Level23.md)
- [Convenience Fee](?path=docs/Resources/Guides/Convenience-Fees.md)
- [Tax Details](?path=docs/Resources/Master-Data/Tax-Types.md)
- [Price Adjustments](?path=docs/Resources/Master-Data/Price-Adjustments.md)

---
