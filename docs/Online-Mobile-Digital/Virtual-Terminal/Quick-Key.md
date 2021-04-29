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
| 01 | Merchant invoice number *(reference number)*. | 20 |
| 02 | Merchant order ID *(customer reference or purchase order)*. | 20 |
| 03 | Merchant transaction ID *(transaction reference ID)*. | 30 |
| 04 | Cardholder's first and last name. | 30 |
| 05 | Transaction type *(CHARGES, FORCED, REFUND, CREDIT)*. | 7 |
| 06 | Capture flag *(true, false)*. | 5 |
| 07 | Card number. | 19 |
| 08 | Transaction amount. | |
| 09 | Card expiration date. | 6 |
| 10 | Authorization number obtained from the Voice Authorization Center for a FORCED. | 7 |
| 11 | Recurring indicator *(RECURRING, DEFERRED, SCHEDULED)*. | |
| 12 | Billing address *(house number, street, city, state/province)*. | |
| 13 | Postal code. | 9 |

## Examples

#### Pre-authorization

`MIN1234567890,MOI001234758,MTI1234567,John Doe,CHARGES,false,4012000033330026,10.00,0126,,,2900 Westside Pkwy GA,30004`

#### Sale

`MIN1234567890,MOI001234758,MTI1234567,Jane Doe,CHARGES,true,6011000990139424,10.00,0126,,,,2900 Westside Pkwy GA,30004`


## See Also
- [Virtual Terminal](?path=docs/Online-Mobile-Digital/Virtual-Terminal/Virtual-Terminal.md)