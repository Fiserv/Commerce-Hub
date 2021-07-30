---
tags: [carat, commerce-hub, enterprise, level-2-card, level-3-card, mastercard, visa, american-express, discover, purchase-card, commercial-card, business-card]
---

# Level II and III Brand Requirements

Card brands require specific data fields for [level II and III](?path=docs/Resources/Guides/Level23/Level23.md) transactions. Commerce Hub supports Level II and III data for Visa and MasterCard, and supports Level II data for American Express.

Failure to submit required fields when submitting a [Level II](#level-ii) or [Level III](level-iii) transaction could result in a possible reject, reversal during settlement, or higher fees (billback).

---

## Level II

| Card Brand | Level II Data Field | Description | Criteria for the Field|
| -------- | :--: |
| **MasterCard **| `totalTaxAmount` | This is the amount of the sales tax charged for the purchase | A valid sales tax amount must be between 0.1% and 30%. |
| **Visa **| `totalTaxAmount` | This is the amount of the sales tax charged for the purchase | A valid sales tax amount must be between 0.1% and 22%. |
| **American Express** | `totalTaxAmount` |This is the amount of the sales tax charged for the purchase | A valid sales tax amouht is any amount greater than zero. |
| **American Express** | `shippingAddress` | [Shipping address](?path=docs/Resources/Master-Data/Address.md#shipping-address) includes name, customer number, address, city, state, zip, country, email and phone | All fields must be either blank or filled in. |
| **Visa, MasterCard, American Express** | `merchantOrderId` | Alphanumeric reference number that the cardholder supplies as part of [transaction details](?path=docs/Resources/Master-Data/Transaction-Details.md) | Cannot be blank |

---

## Level III


| Card Brand | Level III Data Field | Description | Criteria for the Field|
| -------- | :--: |
| **Visa** | Discount Amount | The total discount amount applied to the transaction | Must not be all zeros if a discount amount exists and the last two digits are implied decimal places. Must not be all zeros if discount amount does not exist. |
| **Visa** | Duty Amount | The total duty amount applied to a transaction | Must not be all zeros if discount amount does not exist. |
| **Visa** | Commodity Code |Commodity codes are used by corporate purchasing organizations to segment and manage their total spend across diverse product lines | Must not be all spaces or zeroes. |
|** Visa** | Freight Amount | The total freight amount applied to a transaction | Must not be all spaces or zeroes. |
| **Visa, MasterCard** | Description | A specific description of the item purchased | Must not be all spaces or zeroes. |
| **Visa, MasterCard ** | Product Code | Product code is typically the supplier's unique product identifier | Must not be all spaces or zeroes. |
| **Visa, MasterCard** | Quantity | The number of products for this line item included in the transaction | Must not be all spaces or zeroes. |
| **Visa, MasterCard** | Unit Cost | Used to determine the cost of the measurable unit | Must not be all spaces or zeroes. The last four digits are implied decimal place. |
| **Visa, MasterCard **| Units of Measure | The metric used for understanding quantity (i.e. a box of 12 pencils may be called a dozen or box) | Must not be all spaces or zeroes. |
| **Visa, MasterCard** | Line Item Total| The calculation of the unit cost multiplied by the quantity and less the discount per line) | Must not be all spaces or zeroes. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
- [Commodity Codes](path?=docs/Resources/Guides/Level23/Commodity-Codes.md)
- [Tax Types](path?=docs/Resources/Guides/Level23/Tax-Types.md)
---