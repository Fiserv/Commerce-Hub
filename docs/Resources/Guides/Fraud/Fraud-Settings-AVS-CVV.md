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
| Address Match and 5 or 9 Digit Postal Match for US Only (Y)	| 
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

#### MasterCard Filters

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
