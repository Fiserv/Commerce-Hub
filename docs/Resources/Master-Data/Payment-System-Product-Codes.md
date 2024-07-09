---
tags: [Fleet, Petroleum, Product Codes, Master Data, API Reference]
---

# Payment System Product Codes

Payment System Product Codes are standard classification codes for products and services used to detail what type of purchase is being made and used to identify purchase restrictions. This information is submitted as part of the transactions [item details](?path=docs/Resources/Master-Data/Order-Data.md#item-details). Commerce Hub uses the [Conexxus Public Standards](https://www.conexxus.org/public-standards) for Payment System Product Codes.

## Codes Groups

Any product listed below should be represented in request to Commerce Hub by the code assigned to it by Conexxus. For fuel purchases, a unique code must be sent for each type of fuel purchase.

- 000 - Unused
- 001-099 - Motor fuel
- 100-149 - Automotive product/service
- 150-174 - Aviation fuel
- 175-224 - Aviation product/service
- 225-249 - Marine fuel
- 250-299 - Marine product/service
- 300-399 - Other fuel
- 400-599 - Merchandise
- 600-799 - Reserved *(future use)*
- 800-809 - Debit surcharge
- 810-889 - Reserved *(proprietary use)*
- 890-894 - FSA/HRA product
- 895-899 - Reserved *(proprietary use)*
- 900-949 - Negative
- 950-999 - Administrative
- 1000+ - Commerce Hub *(proprietary use)*

---

## Commerce Hub Codes

The following are Commerce Hub proprietary codes used by specific merchants.

<!-- theme: info -->
> Please contact your account representative to see if you are required to pass any of these codes.
 
| Code | Description |
| ----- | ----- |
| 1000 | |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Order Data](?path=docs/Resources/Master-Data/Order-Data.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Fleet](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md)

---
