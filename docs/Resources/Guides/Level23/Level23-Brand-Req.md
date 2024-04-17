---
tags: [Level 2 Card, Level 3 Card, Mastercard, Visa, American Express, Discover, Purchase Card, Commercial Card, Business Card]
---

# Level II and III Brand Requirements

Card brands require specific data fields for [Level II and III](?path=docs/Resources/Guides/Level23/Level23.md) transactions. Commerce Hub supports Level II and III data for Visa and MasterCard, and supports Level II data for American Express.

<!-- theme: warning -->
> Failure to submit required fields when submitting a [Level II](#level-ii) or [Level III](#level-iii) transaction could result in a possible reject, reversal during settlement, or higher fees _(billback)_.

---

## Level II

Level II transactions require the fields in the below table based on card brand.

| Object | Field | Amex | Mastercard | Visa | Description |
| ------ | ------ | :------: | :-----: | :------: | ----- |
| `amountComponents::taxAmounts` | all | | &#10004; | &#10004; | Total [tax](?path=docs/Resources/Master-Data/Tax-Types.md) amounts and type applied to the purchase |
 | `billingAddress::address` | `postalCode` | &#10004; | | | [Address](?path=docs/Resources/Master-Data/Address.md) connected to the customer's [payment method](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |
| `merchantDetails` | `taxId` | &#10004; | &#10004; | &#10004; | Tax ID in United States and Business Number _(BN)_ in Canada. |
| `merchantDetails` | `vatRegistrationNumber` | | &#10004; | &#10004; | Merchant's VAT registration number |
| `orderData` | `orderDate` | &#10004; | &#10004; | &#10004; | Date that goods and services are ordered. YYYY-MM-DD format |
| `orderData` | `supplierVatRegistrationNumber` |  | &#10004; | &#10004;  | Supplier VAT registration number |
| `shipperAddress::address` | `postalCode` | &#10004; | | | [Address](?path=docs/Resources/Master-Data/Address.md) where the merchant is shipping product **from** |
| `shippingAddress` | all | &#10004; | | | [Address](?path=docs/Resources/Master-Data/Address.md) where the merchant is shipping product **to** |
| `transactionDetails` | `merchantOrderId` | &#10004; | &#10004; | &#10004; | Merchant order ID, customer reference number or purchase order number _(PO Number)_ |
| `transactionDetails` | `merchantInvoiceNumber` | | &#10004; | &#10004; | Merchant invoice number or reference number for transactions including VAT |

---

## Level III

Level III transactions require **all** Level II data in addition to the fields in the below table.

| Object | Field | Mastercard | Visa | Description |
| ------ | ------ | :-----: | :------: | -----|
| `amountComponants::priceAdjustments` | all | &#10004; | &#10004; | Total [discount](?path=docs/Resources/Master-Data/Price-Adjustments.md) amounts and details applied to the purchase |
| `amountComponants` | `freightAmount` | | &#10004; | Freight amount applied |
| `orderData` | `itemCount` | &#10004; | &#10004; | Total number of items included in the purchase |
| `orderData::itemDetails` | `itemNumber` | &#10004; | &#10004; | Identifies the line item number out of total items sold |
| `orderData::itemDetails` | `itemDescription` | &#10004; | &#10004; | Name or description of item |
| `orderData::itemDetails` | `commodityCode` | &#10004; | &#10004; | Identifies the [commodity code](?path=docs/Resources/Master-Data/Commodity-Codes.md) of the products sold |
| `orderData::itemDetails` | `productUPC` | &#10004; | &#10004; | Universal Product Code identifier used for retail products worldwide |
| `orderData::itemDetails` | `unitOfMeasurement` | &#10004; | &#10004; | Identifies the [type of measurement](?path=docs/Resources/Master-Data/Unit-Measurement.md) for the product sold |
| `orderData::itemDetails` | `quantity` |  &#10004; | &#10004; | Identifies the number of units of the product sold |
| `orderData::itemDetails::amountComponents` | `unitPrice` | | &#10004; | Identifies the price per unit of measure for the product sold. This should exclude any taxes or charges |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Commodity Codes](?path=docs/Resources/Guides/Level23/Commodity-Codes.md)
- [Level II/III Data](?path=docs/Resources/Guides/Level23/Level23.md)
- [Tax Types](?path=docs/Resources/Guides/Level23/Tax-Types.md)
- [Unit of Measurement](?path=docs/Resources/Guides/Level23/Unit-Measurement.md)

---
