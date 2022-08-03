---
tags: [Getting Started, Release Notes, Update, Enhancement]
---

# Release Notes

Commerce Hub is continually being improved with new features, security enhancements, and performance improvements. These release notes list the updates for each release with the most recent update shown first.

#### Release Types

- **Feature:** New feature was released
- **Update:** Existing feature was updated or enhanced

---

## August 2022

- **Certification:** August 11th 2022
- **Production:** August 17th 2022

| Details | Type |
| ----- | ----- |
| [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md&branch=preview) updated to support referenced transaction identifiers | Update |
| [Regional Debit](?path=docs/Resources/Guides/Debit/Regional-Debit.md&branch=preview) support added for Canada on Nashville | Feature |
| Secure Data Capture [iFrame solution](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md&branch=preview) updated to support event handling and advanced CSS styling | Update |
| [Fraud settings](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md&branch=preview) updated in Marketplace to support positive/negative filtering and transaction restrictions | Update |
| [Partial authorization](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md&branch=preview) support added for card present transactions on Chase | Update |
| Miscellaneous updates and enhancements to Commerce Hub core functions | Update |

---

## July 2022

- **Certification:** July 19th 2022
- **Production:** July 22nd 2022

| Details | Type |
| ----- | ----- |
| New [refunds](?path=docs/Resources/API-Documents/Payments/Refund.md&branch=preview) endpoint to support referenced transaction identifiers | Feature |
| [PIN](?path=docs/Resources/Master-Data/Pin-Block.md&branch=preview) support for credit and debit cards on Chase | Update |
| [Partial authorization](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md&branch=preview) changed `partialApproval` indicator to boolean for Nashville | Update |
| Merchant managed [3D-Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md&branch=preview) payment source support added | Feature |
| [Custom Identifier](?path=docs/Resources/Guides/BYOID.md&branch=preview) support for Merchant Identifiers (MID/TID) on Chase | Update |

---

## June 2022

- **Certification:** June 16th 2022
- **Production:** June 23rd 2022

| Details | Type |
| ----- | ----- |
| New [cancels](?path=docs/Resources/API-Documents/Payments/Cancel.md&branch=preview) endpoint to support referenced transaction identifiers | Feature |
| [Inquiry](?path=docs/Resources/API-Documents/Payments/Inquiry.md&branch=preview) updated to support referenced transaction identifiers and to require `merchantId` | Update |
| [BIN lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md&branch=preview) with `cardDetails` are available from account information lookup and tokens requests | Feature |
| Transaction support for Canada credit (Visa, Mastercard) for postal code and currency | Update |
| [Reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md&branch=preview) support added for cancels and inquiry requests | Feature |
| [Encrypted manual entry](?path=docs/In-Person/Encrypted-Payments/Manual.md&branch=preview) transaction support | Feature |
| [Cashback](?path=docs/Resources/Master-Data/Amount-Components.md&branch=preview) supported for PIN debit and Discover cards | Feature |

---

## April 15th 2022

- **Certification:** April 15th 2022
- **Production:** April 22nd 2022

| Details | Type | 
| ----- | ----- |
| [Error response messages](?path=docs/Resources/Guides/Response-Codes/Error-Code.md&branch=preview) enhanced with additional codes | Update |
| [Directed routing](?path=docs/Resources/Guides/Directed-Routing.md&branch=preview) enhanced to support better identification of payment processor and platforms | Update |
| [Processor response](?path=docs/Resources/Master-Data/Processor-Response-Details.md&branch=preview) enhanced to support better identifiaction of payment processor and host | Update |
| Timeout error handling enhanced | Update |
| [Custom Identifier](?path=docs/Resources/Guides/BYOID.md&branch=preview) support for Merchant Identifiers (MID/TID) on Nashville | Feature |
| Increased maxLength of `merchantOrderId` and `merchantTransactionId` to 128 in [transaction details](?path=docs/Resources/Master-Data/Transaction-Details.md&branch=preview) | Update |
| Added support for processing card not present authorization and cancel transactions through Chase Salem [processor](?path=(?path=docs/Resources/Guides/Directed-Routing.md&branch=preview)). | Feature 

---

## Q1 2022

| Details | Type |
| ----- | ----- |
| [Debit network](?path=docs/Resources/Guides/Debit/Debit.md&branch=preview) routing support | Feature |
| [PIN](?path=docs/Resources/Master-Data/Pin-Block.md&branch=preview) support for credit and debit cards on Nashville | Feature |
| Generate CSR support for Apple Pay in Dev Studio | Feature |
| Added support for processing card present transactions through Chase Salem [processor](?path=(?path=docs/Resources/Guides/Directed-Routing.md&branch=preview)). | Feature |
| [Tokenization](?[ath=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md&branch=preview) will now return a token for all processors a client is enabled for. | Feature |
| [Partial authorization](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md&branch=preview) support added for card present transactions on Nashville | Feature |
| Ability to add a card present merchant store/location to marketplace. | Feature |
| Ability to add Clover devices to marketplace. | Feature |
| [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md&branch=preview) `sourceType` support added. | Feature |
| [Idempotency](?path=docs/Resources/Guides/Idempotency.md&branch=preview) will send the status of the original transaction back when using the same `Client-Request-Id`. | Feature |
| [Sandbox account creation](?path=docs/Resources/Guides/Dev-Studio/Account-Management.md&branch=preview) enabled for Stage Developer Studio environment | Feature |
| Ability to configure account settings and features added to marketplace. | Feature |
| [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md&branch=preview) added to support integration for SAQ-A and SAQ A-EP clients. | Feature |

---

## Archive
- [2021](?path=docs/Release-Notes-Alerts/RN-2021.md&branch=preview)

---
