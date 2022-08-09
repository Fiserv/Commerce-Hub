---
tags: [Address Verification, AVS, Security Code Verification, CVV, Fraud Filters, Transaction Controls]
---

# Address and Security Code Filters

The address and security code filters provide a merchant the ability to enable various transaction filters using the [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification. Commerce Hub will reject and automatically reverse the submitted transaction if the conditions for any of these filters are met.

<!-- theme: info -->
> Not all banks return a response when cardholder verification data is sent and a filter will not cover this situation.

---

## Filter Settings

Filters are applied by [transaction controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) inside of Marketplace. Filters are applied per card brand and their respective response value.

### Examples

##### Address and Postal Code

<!-- theme: example -->
>To reject all transactions where the `streetMatch` and `postalCodeMatch` are *NOT_MATCHED* or `avsCode` is *"N"*, select the Address Mismatch and Postal Mismatch (N) checkbox.

<!-- theme: example -->
>To reject all transactions where the `streetMatch` is *MATCHED* and `postalCodeMatch` is *NOT_MATCHED* or `avsCode` is *"A"*, select the Address Match and Postal Mismatch (A) checkbox.

##### Cardholder Name

<!-- theme: example -->
>To reject all AMEX transactions where the `cardholderNameresponse` is *"E"* where the name is incorrect but the billing address matches, select the Name Mismatch, Address Match and Postal Match (E) checkbox.

##### Security Code

<!-- theme: example -->
> To reject all transactions where the `securityCodeMatch` is *NO_MATCH* or `securityCodeResponse` is *"N"*, select the CVV No Match (N) checkbox.

---

## AVS Decline Codes

AVS filters allow you to reject transaction based on the AVS response.

#### AVS Decline Codes Features

|  avsCode | streetMatch | postalCodeMatch | Description |
| ----- | ------ | ----- | ----- |
| Y | MATCHED | MATCHED | Address Match and Postal Match |
| A | MATCHED	| NOT_MATCHED | Address Match and Postal Mismatch |
| Z | NOT_ MATCHED | MATCHED | Address and Postal Match UK Only |
| F | MATCHED	| MATCHED | Address Match and 5 or 9 Digit Postal Match for US Only |
| N | NOT_MATCHED | NOT_MATCHED | Address Mismatch and Postal Mismatch |
| S | NOT_SUPPORTED	| NOT_SUPPORTED | AVS Check Not Supported |
| K | MATCHED | MATCHED | Name Match |
| O | MATCHED	| MATCHED | Name Match and Address Match |
| L | MATCHED | MATCHED | Name Match and Postal Match |
| M | MATCHED	| MATCHED | Name Match , Address Match and Postal Match |
| E | NOT_MATCHED	| MATCHED | Name Mismatch ,Address Match and Postal Match |
| W | NOT_MATCHED | NOT_MATCHED | Name Mismatch , Address Mismatch and Postal Mismatch |
| F | NOT_MATCHED	| MATCH | Name Mismatch and Address Match |
| D | NOT_MATCHED | MATCHED | Name Mismatch and Postal Match |
| U | NONE | NONE | Not Available |
| I | NO_INPUT_DATA | NO_INPUT_DATA | AVS Not Provided |
| M | MATCHED	| MATCHED | Street Addresses Postal Codes Match for International Only |
| D | MATCHED | MATCHED | Street Address Postal Code Match for International Only |
| R | NONE | NONE | System Unavailable  |

---

## CVV Filters

CVV filters allow you to reject transaction based on each card brand. 

|  securityCodeResponse | securitycodeMatch | Description |
| ----- | ------  | ----- |
| M | MATCHED | Data matches with issuer system | 
| P | NOT_MATCHED | Data does not match with issuer system | 
| N | NO_PROCESSED | Security code verification not done | 
| S | NOT_PRESENT | Security code not present in the input | 
| I | NOT_PROVIDED | NOT_PROVIDED | CVV Not Provided | 
| X | NOT_CERTIFIED | Issuer not certified to verify sercurity code | 
| U | NOT_CHECKED | Security code not checked | 
|   | NONE | No security code provided |


---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Fraud Settings](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md)
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

<!---
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
-->

---
