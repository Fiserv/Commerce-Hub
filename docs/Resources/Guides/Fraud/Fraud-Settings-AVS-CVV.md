---
tags: [carat, commerce-hub, enterprise, card-not-present, fraud, address-and-security-code-filters, fraud-filters]
---

# Address and Security Code Filters

The address and security code filters provide a merchant the ability to enable various transaction filters using the [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification. Commerce Hub will reject and automatically reverse the submitted transaction if the conditions for any of these filters are met.

<!-- theme: info -->
>Not all banks return a response when cardholder verification data is sent and a filter will not cover this situation.

---

## Filter Settings

Filters are applied by [transaction controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) inside of Marketplace. Filters are applied per card brand and their respective response value.

### Examples

##### Address and Postal Code

<!-- theme: Example -->
>To reject all Visa transactions where the `streetMatch` and `postalCodeMatch` are *NO_MATCH* or `avsCode` is *"A"*, select the Address Match and Postal Mismatch (A) checkbox.

##### Cardholder Name

<!-- theme: Example -->
>To reject all AMEX transactions where the `cardholderNameresponse` is *"E"* where the name is incorrect but the billing address matches, select the Name Mismatch, Address Match and Postal Match (E) checkbox.

##### Security Code

<!-- theme: Example -->
>To reject all Mastercard transactions where the `securityCodeMatch` is *NO_MATCH* or `securityCodeResponse` is *"N"*, select the CVV No Match (N) checkbox.

### AVS Filters

| AVS Filters | Variable | 
| ----- | ------ | 
| AVS Visa | `avsvisa` | 
| AVS MasterCard | `avsmastercard` | 
| AVS Amex | `avsamex` |  
| AVS Discover | `avsdiscover` | 

### AVS Visa Features

| AVS Filters | Variable | 
| ----- | ------ | 
| Address Not Verified (U) | |
| Address Match and 5or9 Digit Postal Match for US Only (Y)	| 
| Address Match Postal Incompatible Format (B)	| |
| Address Match and Postal Mismatch (A)	| |
| Address Mismatch and Postal Match (Z)	| |
| Address and Postal Incompatible Format (C ) | |
| Address and Postal Match UK Only (F) | |
| Address Mismatch and Postal Mismatch (N)	| |
| Issuer No Support Not Verified International (G) | |
| Not Supported (S)	 | |
| Not Verified (I)	| |
| Postal Match and Address Incompatible Format (P)	| |
| Retry System Unavailable (R )	 | |
| Street Addresses Postal Codes Match for International Only (M)	| |
| Street Address Postal Code Match for International Only (D) | |

### CVV Filters

| CVV Filters | Variable | 
| ----- | ------ | 
| CVV Visa | `cvvvisa` | 
| CVV MasterCard | `cvvmastercard` | 
| CVV Amex | `cvvamex` |  
| CVV Discover | `cvvdiscover` | 

### CVV Visa Features

| CVV Filters | Variable | 
| ----- | ------ | 
| CVV2 CVC2 CID Match (M)	| |
| CVV Not Processed (P)	| |
| CVV No Match (N)	| |
| CVV Required Error (S) | |	
| Server Response Error (X)	| |
| Unknown Issuer (U) | |


---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

<!---
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
-->


---
