---
tags: [Level 2 Card, Level 3 Card, Mastercard, Visa, American Express, Discover, Purchase Card, Commercial Card, Business Card]
---

# Level II and III Brand Requirements

Card brands require specific data fields for [Level II and III](?path=docs/Resources/Guides/Level23/Level23.md) transactions. Commerce Hub supports Level II and III data for Visa and MasterCard, and supports Level II data for American Express.

<!-- theme: warning -->
> Failure to submit required fields when submitting a [Level II](#level-ii) or [Level III](level-iii) transaction could result in a possible reject, reversal during settlement, or higher fees (billback).

---

## Level II

Level II transactions require the fields in the below table based on card brand.

| Card Brand | Level II Data Field | Description | Criteria for the Field|
| -------- | :--: | ----- | ----- |
| **MasterCard** | `totalTaxAmount` | This is the amount of the sales tax charged for the purchase | A valid sales tax amount must be between 0.1% and 30%. |
| **Visa** | `totalTaxAmount` | This is the amount of the sales tax charged for the purchase | A valid sales tax amount must be between 0.1% and 22%. |
| **American Express** | `totalTaxAmount` |This is the amount of the sales tax charged for the purchase | A valid sales tax amouht is any amount greater than zero. |
| **American Express** | `shippingAddress` | [Shipping address](?path=docs/Resources/Master-Data/Address.md#shipping-address) includes name, customer number, address, city, state, zip, country, email and phone | All fields must be either blank or filled in. |
| **Visa, MasterCard, American Express** | `merchantOrderId` | Alphanumeric reference number that the cardholder supplies as part of [transaction details](?path=docs/Resources/Master-Data/Transaction-Details.md) | Cannot be blank |

---

## Level III

Level III transactions require all Level II data in addition to the fields in the below table.

| Card Brand | Level III Data Field | Description | Criteria for the Field|
| -------- | :--: | ----- | ----- | 
| **Visa** | `totalDiscountAmount` | The total discount amount applied to the transaction | Must not be all zeros if a discount amount exists and the last two digits are implied decimal places. Must not be all zeros if discount amount does not exist. |
| **Visa** | `dutyAmount` | The total duty amount applied to a transaction | Must not be all zeros if discount amount does not exist. |
| **Visa** | `commodityCode` | [Commodity codes](path=?docs/Resources/Guides/Level23/Commodity-Codes.md) are used by corporate purchasing organizations to segment and manage their total spend across diverse product lines | Must not be all spaces or zeroes. |
| **Visa** | `freightAmount` | The total freight amount applied to a transaction | Must not be all spaces or zeroes. |
| **Visa, MasterCard** | `description` | A specific description of the item purchased | Must not be all spaces or zeroes. |
| **Visa, MasterCard** | `productCode` | Product code is typically the supplier's unique product identifier | Must not be all spaces or zeroes. |
| **Visa, MasterCard** | `quantity` | The number of products for this line item included in the transaction | Must not be all spaces or zeroes. |
| **Visa, MasterCard** | `unitCost `| Used to determine the cost of the measurable unit | Must not be all spaces or zeroes. The last four digits are implied decimal place. |
| **Visa, MasterCard**| `unitOfMeasurement` | The metric used for understanding quantity (i.e. a box of 12 pencils may be called a dozen or box) | Must not be all spaces or zeroes. |
| **Visa, MasterCard** | `lineItemTotal`| The calculation of the unit cost multiplied by the quantity and less the discount per line) | Must not be all spaces or zeroes. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Commodity Codes](?path=docs/Resources/Guides/Level23/Commodity-Codes.md)
- [Level II/III Data](?path=docs/Resources/Guides/Level23/Level23.md)
- [Tax Types](?path=docs/Resources/Guides/Level23/Tax-Types.md)
- [Unit of Measurement](?path=docs/Resources/Guides/Level23/Unit-Measurement.md)

---
