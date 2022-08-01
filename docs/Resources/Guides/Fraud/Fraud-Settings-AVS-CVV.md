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
>To reject all Visa transactions where the `streetMatch` and `postalCodeMatch` are *NO_MATCH* or `avsCode` is *"A"*, select the Address Match and Postal Mismatch (A) checkbox.

##### Cardholder Name

<!-- theme: example -->
>To reject all AMEX transactions where the `cardholderNameresponse` is *"E"* where the name is incorrect but the billing address matches, select the Name Mismatch, Address Match and Postal Match (E) checkbox.

##### Security Code

<!-- theme: example -->
> To reject all Mastercard transactions where the `securityCodeMatch` is *NO_MATCH* or `securityCodeResponse` is *"N"*, select the CVV No Match (N) checkbox.

---

## AVS Filters

AVS filters allow you to reject transaction based on each card brand. 

---

<!--
type: tab
titles: Visa, Mastercard, AMEX, Discover
-->

#### Visa Filters

|  avsCode | streetMatch | postalCodeMatch | Description |
| ----- | ------ | ----- | ----- |
| U | NOT_CHECKED | NOT_CHECKED | Address Not Verified |
| Y | MATCHED	| MATCHED | Address Match and 5 or 9 Digit Postal Match for US Only |
| B | NOT_MATCHED| NOT_MATCHED | Address Match Postal Incompatible Format |
| A | MATCHED | NOT_MATCHED | Address Match and Postal Mismatch |
| Z | MISMATCH | MATCHED | Address Mismatch and Postal Match |
| C | INCOMPATIBLE | INCIMPATIBLE | Address and Postal Incompatible Format |
| F | MATCH | MATCH | Address and Postal Match UK Only |
| N | MISMATCH | MISMATCH | Address Mismatch and Postal Mismatch |
| G | NOT_SUPPORTED | NOT_VERIFIED | Issuer No Support Not Verified International |
| S | NOT_SUPPORTED | NOT_SUPPORTED | Not Supported |
| I | NOT_VERIFIED | NOT_VERIFIED | Not Verified |
| P | MATCH | INCOMPATIBLE | Postal Match and Address Incompatible Format |
| R | RETRY | RETRY | Retry System Unavailable |
| M | MATCH | MATCH | Street Addresses Postal Codes Match for International Only |
| D | MATCH | MATCH | Street Address Postal Code Match for International Only |

<!--
type: tab
-->

#### MasterCard Filters


|  avsCode | streetMatch | postalCodeMatch | Description |
| ----- | ------ | ----- | ----- |
| X | MATCH | MATCH | Address and 9 Digit ZIP Match | 
| Y | MATCH | MATCH | Address and 5-digit ZIP Match | 
| A | MATCH | MATCH | Address and 5-digit ZIP Match |
| W | MATCH | NOT_MATCHED | 9-digit ZIP Matches, Address Does Not Match |
| Z | MATCH | NOT_MATCHED | 5-digit ZIP Matches, Address Does Not Match | 
| N | NOT_MATCH | NOT_MATCHED | Address and ZIP Do Not Match | 
| U | UNAVAILABLE | UNAVAILABLE | Address Info is Unavailable | 
| R | UNAVAILABLE | UNAVAILABLE | Retry: System Unavailable or Timeout |
| E | INELIGIBLE | INELIGIBLE | Error: Transaction ineligible for address verification or edit error found in the message that prevents AVS from being performed | 
| S | NOT_SUPPORTED | NOT_SUPPORTED | Service Not Supported: Issuer does not support address verification | 

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

<!--
type: tab
-->

#### American Express Filters

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

<!--
type: tab
-->

#### Discover Filters

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

<!-- type: tab-end -->

---

## CVV Filters

CVV filters allow you to reject transaction based on each card brand. 

<!--
type: tab
titles: Visa, Mastercard, AMEX, Discover
-->

#### Visa Filters

| securityCodeResponse | securityCodeMatch | Description |
| ----- | ------ | ----- |
| M	| MATCHED | CVV2 CVC2 CID Match |
| CVV Not Processed (P)	| |
| CVV No Match (N)	| |
| CVV Required Error (S) | |	
| Server Response Error (X)	| |
| Unknown Issuer (U) | |

<!--
type: tab
-->

#### Mastercard Filters

| CVV Filters | Variable | 
| ----- | ------ | 
| CVV2 CVC2 CID Match (M)	| |
| CVV Not Processed (P)	| |
| CVV No Match (N)	| |
| CVV Required Error (S) | |	
| Server Response Error (X)	| |
| Unknown Issuer (U) | |

<!--
type: tab
-->

#### American Express Filters

| CVV Filters | Variable | 
| ----- | ------ | 
| CVV2 CVC2 CID Match (M)	| |
| CVV Not Processed (P)	| |
| CVV No Match (N)	| |
| CVV Required Error (S) | |	
| Server Response Error (X)	| |
| Unknown Issuer (U) | |

<!--
type: tab
-->

#### Discover Filters

| CVV Filters | Variable | 
| ----- | ------ | 
| CVV2 CVC2 CID Match (M)	| |
| CVV Not Processed (P)	| |
| CVV No Match (N)	| |
| CVV Required Error (S) | |	
| Server Response Error (X)	| |
| Unknown Issuer (U) | |

<!-- type: tab-end -->

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
