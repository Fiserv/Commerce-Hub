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
| ------ | ---- | :----: | :------: | :-----: | -------- |
| `merchantDetails` | `taxId` | &#10004; | &#10004; | &#10004; | Tax ID in United States and Business Number _(BN)_ in Canada. |
| `orderData` | `orderDate` | &#10004; | &#10004; | &#10004; | Date that goods and services are ordered. YYYY-MM-DD format |
| `customer` | `merchantCustomerId` | &#10004; | &#10004; | &#10004; | Merchant's unique customer identifier |
| `billingAddress` | `address` | &#10004; | | | [Address](?path=docs/Resources/Master-Data/Address.md) connected to the customer's [payment method](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |
| `shipperAddress` | `address` | &#10004; | | | [Address](?path=docs/Resources/Master-Data/Address.md) where the merchant is shipping product **from** |
| `shippingAddress` | `address` | &#10004; | | | [Address](?path=docs/Resources/Master-Data/Address.md) where the merchant is shipping product **to** |
| `shippingAddress` | `firstName` | &#10004; | | | First name of contact where the merchant is shipping product to |
| `shippingAddress` | `lastName` | &#10004; | | | Last name of contact where the merchant is shipping product to |
| `shippingAddress` | `phone` | &#10004; | | | [Phone number](?path=docs/Resources/Master-Data/Address.md) of contact where the merchant is shipping product to |
| `shippingAddress` | `shipToEmail` | &#10004; | | | [Address](?path=docs/Resources/Master-Data/Address.md) where the merchant is shipping product to |

---

## Level III

Level III transactions require all Level II data in addition to the fields in the below table.

| Object | Field | Mastercard | Visa | Description |
| ------ | ---- | :------: | :-----: | -------- |
| `merchantDetails` | `taxId` | &#10004; | &#10004; | Tax ID in United States and Business Number _(BN)_ in Canada. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Commodity Codes](?path=docs/Resources/Guides/Level23/Commodity-Codes.md)
- [Level II/III Data](?path=docs/Resources/Guides/Level23/Level23.md)
- [Tax Types](?path=docs/Resources/Guides/Level23/Tax-Types.md)
- [Unit of Measurement](?path=docs/Resources/Guides/Level23/Unit-Measurement.md)

---
