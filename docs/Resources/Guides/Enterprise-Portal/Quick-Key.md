---
tags: [Batch Upload, Card Not Present, CSV Format, Virtual Terminal, Online]
---

# Quick Key

Quick key is a feature in the Virtual Termial that allows batch upload of transactions using a Comma Seperated Value (CSV) file.

<!-- theme: info -->
> A Quick Key upload file supports 250 transaction records.

---

## CSV Format

| Column | Value | Length |
| ----- | ----- | ----- |
| 01 | Merchant invoice number also known as reference number. | 20 |
| 02 | Merchant order ID also known as customer reference number or purchase order number (PO Number). | 20 |
| 03 | Merchant transaction ID also known as transaction reference ID. | 30 |
| 04 | Cardholder's first and last name. | 30 |
| 05 | Transaction type. **Valid Values:** CHARGES, CAPTURE, FORCED, REFUND, CREDIT, CANCEL. | 7 |
| 06 | Capture flag, true = sale and false = pre-auth. | 5 |
| 07 | Transaction ID used for REFUND, CANCEL, CAPTURE. | 7 |
| 08 | Card number. | 19 |
| 09 | Transaction amount. | 21 |
| 10 | Card expiration date. | 6 |
| 11 | Authorization number obtained from the Voice Authorization Center for a FORCED. | 7 |
| 12 | Recurring type indicator. **Valid Values:** SINGLE, RECURRING, DEFERRED, SCHEDULED. | 9 |
| 13 | Billing house number or name. | 256 |
| 14 | Billing street address. | 256 |
| 15 | Billing city. | 256 |
| 16 | Billing state/province. | 256 | 
| 17 | Postal code. | 10 |

## Examples

#### Pre-authorization

`MIN1234567890,MOI001234758,MTI1234567,John Doe,CHARGES,false,,4012000033330026,10.00,0126,,,2900,Westside Pkwy,Atlanta,GA,30004`

#### Sale

`MIN1234567890,MOI001234758,MTI1234567,Jane Doe,CHARGES,true,,4012000033330026,10.00,0126,,,2900,Westside Pkwy,Atlanta,GA,30004`

---

## See Also

- [Enterprise Portal](?path=docs/Resources/Guides/Enterprise-Portal/Enterprise-Portal.md)
- [Virtual Terminal](?path=docs/Resources/Guides/Enterprise-Portal/Virtual-Terminal.md)

---
