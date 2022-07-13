---
tags: [Getting Started, Release Notes, Update, Patch, Enhancement]
---

# Release Notes

Commerce Hub is continually being improved with new features, security enhancements, and performance improvements. These release notes list the updates for each release with the most recent update shown first.

#### Release Types

- **Feature:** New feature was released
- **Update:** Existing feature was updated or enhanced

---

## July 15th 2022

| Details | Type | Environment | 
| ----- | ----- | ----- |
| New [refunds](?path=docs/Resources/API-Documents/Payments/Refund.md) endpoint to support referenced transaction identifiers | Feature | Cert |
| [PIN](?path=docs/Resources/Master-Data/Pin-Block.md) support for credit and debit cards on Chase | Update | Cert |
| [Partial authorization](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md) enhanced to remove deprecated fields `enhancedAuthorizationRequestIndicator` and `enhancedAuthorizationResponseIndicator` and changed `partialApproval` indicator to boolean | Update | Cert |
| Merchant managed [3D-Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) payment source support added | Feature | Cert |
| [Custom Identifier](?path=docs/Resources/Guides/BYOID.md) support for Merchant Identifiers (MID/TID) on Chase | Update | Cert |

---

## June 16th 2022

| Details | Type | Environment | 
| ----- | ----- | ----- |
| New [cancels](?path=docs/Resources/API-Documents/Payments/Cancel.md) endpoint to support referenced transaction identifiers | Feature | Cert |
| [Inquiry](?path=docs/Resources/API-Documents/Payments/Inquiry.md) updated to support referenced transaction identifiers and to require `merchantId` | Update | Cert |
| [BIN lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md) with `cardDetails` are available from account information lookup and tokens requests | Feature | Cert |
| Transaction support for Canada credit (Visa, Mastercard) for postal code and currency | Update | Cert |
| [Reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) support added for cancels and inquiry requests | Feature | Cert |
| [Encrypted manual entry](?path=docs/In-Person/Encrypted-Payments/Manual.md) transaction support | Feature | Cert |
| [Cashback](?path=docs/Resources/Master-Data/Amount-Components.md) supported for PIN debit and Discover cards | Feature | Cert |

---

## April 15th 2022

| Details | Type | Environment | 
| ----- | ----- | ----- |
| [Error response messages](?path=docs/Resources/Guides/Response-Codes/Error-Code.md) enhanced with additional codes | Update | Cert |
| [Directed routing](?path=docs/Resources/Guides/Directed-Routing.md) enhanced to support better identification of payment processor and platforms | Update | Cert |
| [Processor response](?path=docs/Resources/Master-Data/Processor-Response-Details.md) enhanced to support better identifiaction of payment processor and host | Update | Cert |
| Timeout error handling enhanced | Update | Cert |
| [Custom Identifier](?path=docs/Resources/Guides/BYOID.md) support for Merchant Identifiers (MID/TID) on Nashville | Feature | Cert |
| Increased maxLength of `merchantOrderId` and `merchantTransactionId` to 128 in [transaction details](?path=docs/Resources/Master-Data/Transaction-Details.md) | Update | Cert |
| Added support for processing card not present authorization and cancel transactions through Chase Salem [processor](?path=(?path=docs/Resources/Guides/Directed-Routing.md)). | Feature | Cert |

---

## Q1 2022

| Details | Type | Environment | 
| ----- | ----- | ----- |
| [Debit network](?path=docs/Resources/Guides/Debit/Debit.md) routing support | Feature | Cert |
| [PIN](?path=docs/Resources/Master-Data/Pin-Block.md) support for credit and debit cards on Nashville | Feature | Cert |
| Generate CSR support for Apple Pay in Dev Studio | Feature | Cert |
| Added support for processing card present transactions through Chase Salem [processor](?path=(?path=docs/Resources/Guides/Directed-Routing.md)). | Feature | Cert |
| [Tokenization](?[ath=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) will now return a token for all processors a client is enabled for. | Feature | Cert |
| [Partial authorization](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md) support added for card present transactions | Feature | Cert |
| Ability to add a card present merchant store/location to marketplace. | Feature | ? |
| Ability to add Clover devices to marketplace. | Feature | ? |
| [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md) `sourceType` support added. | Feature | Cert |
| [Idempotency](?path=docs/Resources/Guides/Idempotency.md) will send the status of the original transaction back when using the same `Client-Request-Id`. | Feature | Cert |
| [Sandbox account creation](?path=docs/Resources/Guides/Dev-Studio/Account-Management.md) enabled for Stage Developer Studio environment | Feature | Cert |
| Ability to configure account settings and features added to marketplace. | Feature | ? |
| [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md) added to support integration for SAQ-A and SAQ A-EP clients. | Feature | Cert |

---

## Archive
- [2021](?path=docs/Release-Notes-Alerts/RN-2021.md)

---
