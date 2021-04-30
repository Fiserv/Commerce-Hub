# Quick Key

## Overview

Quick key is a feature in the Commerce Hub Virtual Termial that allows batch upload of transactions using a Comma Seperated Value (CSV) file.


<!-- theme: danger -->
> We are enhancing Commerce Hub to include Fraud Detect support and the documents related to the features will be released soon.

- The Quick Key UI shall capable to upload a transaction file with the predefined format.
- An upload file action button shall be available for the CLX user.
- On click of Upload action a file selection window shall be displayed to the user to select the file.
- The Quick Key transaction upload file format shall be CSV.
- A Quick key transaction upload file template shall be available for merchant to download form the UI.
- One Quick Key transaction upload file shall have a minimum support for 250 transaction records. (info)Current maximum support of records in Payeezy VPOS - Quick Key.
- The maximum record count allowed in a Quick Key transaction upload file shall be based on the configuration at service config by merchant.
- Transaction record in upload file shall separate by carriage return character
- UI shall have an option to download the Quick Key Transaction file template.

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
| 12 | Recurring indicator. **Valid Values:** RECURRING, DEFERRED, SCHEDULED. | 9 |
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


## See Also
- [Virtual Terminal](?path=docs/Online-Mobile-Digital/Virtual-Terminal/Virtual-Terminal.md)