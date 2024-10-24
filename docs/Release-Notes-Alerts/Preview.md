---
tags: [Getting Started, Release Notes, Update, Patch, Enhancement, Preview]
---

# Preview release notes

Commerce Hub provides a preview of our upcoming feature releases in Developer Studio. These features may not be functional until the certification release date. When these features are released to production they will be announced in our [Release Notes](?path=docs/Release-Notes-Alerts/Release-Notes.md).

<!-- theme: info -->
> The upcoming features and updates can be viewed in the documentation by changing the dropdown from **Active** to **Preview** in the left navigation when viewing an article or API.

**Release types:**

- **Feature:** New feature release.
- **Update:** Existing feature update or enhancement.

---

## December 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** October 22nd 2024
- **Production:** November 6th 2024

| Details | Type |
| ----- | ----- |
| Version 1.24.12: New objects added/updated to support new and updated features. | Update |
| Support for [Fraud Scoring](?path=docs/Resources/Guides/Fraud/Fraud-Scoring.md) using the Risk Assessment API | Feature |

---

## November 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** October 7th 2024
- **Production:** October 16th 2024

| Details | Type |
| ----- | ----- |
| Version 1.24.11: New objects added/updated to support new and updated features. | Update |
| [POS Decision Table for Cloud BIN Service](?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Guide.md) implemented. Information Lookup API enhanced to support Cloud BIN information | Feature |
| Added `walletType` to the `source` object to support [*DecryptedWallet*](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) and future use cases. | Update |
| PaymentEMV documentation updated to support Contactless payments. No API model changes. | Update |

---

## October 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** September 10th 2024
- **Production:** September 18th 2024

| Details | Type |
| ----- | ----- |
| Version 1.24.10: refactored for renaming `PAR` to `paymentAccountReference` in `processorResponseDetails` to meet OpenAPI specification requirements. New objects added/updated to support new and updated features. | Update |
| Support for card metadata to be returned in [Refunds API response](?path=docs/Resources/API-Documents/Payments/Refund.md) if enabled | Update |
| [Client Certificate API](?path=docs/Resources/API-Documents/Device-Management/Client-Certificate-Upload.md) to support encrypted PAN when configured for [Authorization Optimization](?path=docs/Resources/Guides/Authorizations/Auth-Optimization.md) | Feature |
| Support for [Paze digital wallet transaction](?path=docs/Resources/Guides/Payment-Sources/Paze/Paze.md) through Commerce Hub Checkout SDK. | Feature |
| New [Whitelist API](?path=docs/Resources/API-Documents/Security/Whitelist.md) to add domains for Commerce Hub Checkout SDK. | Feature |
| Support for *PaymentCheck* with [Data Capture API](?path=docs/Online-Mobile-Digital/Checkout/API/API-Only.md). | Update |
| [Checkout v3.1.9 release](?path=docs/Online-Mobile-Digital/Checkout/Checkout-Version-Release.md), enhancements and support for Firefox | Update |

---

## September 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** August 22nd 2024
- **Production:** September 6th 2024

| Details | Type |
| ----- | ----- |
| Version 1.24.09: added `taxId` and `vatRegistrationNumber` to `merchantDetails` for level 2/3 transaction support. | Update |
| Secure Data Capture rebranded to [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md), iFrame v2 rebranded to Hosted Fields | Update |
| [Checkout v3.1.7 release](?path=docs/Online-Mobile-Digital/Checkout/Checkout-Version-Release.md), enhancements and support for ACH *PaymentCheck* transactions | Feature |

---

## August 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** July 17th 2024
- **Production:** July 23rd 2024

| Details | Type |
| ----- | ----- |
| Version 1.24.08: refactored Authorization Optimization models, added models to support Fleet transactions | Update |
| Update [API endpoint URLs](?path=docs/Resources/API-Documents/Use-Our-APIs.md) to support new authentication credentials | Update |
| [Authorization Optimization](?path=docs/Resources/Guides/Authorizations/Auth-Optimization.md) response updated to support tokens | Update |
| Support [Multi-Use Public Key RSA encryption](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) for PaymentEMV and PaymentTrack | Update |
| Certification for [Ingenico Axium](?path=docs/In-Person/Semi-Integrated/ingenico.md) semi-integrated devices | Feature |
| Support [Fleet Card and Check transactions](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md) | Feature |

---

## July 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** June 20th 2024
- **Production:** June 26th 2024

| Details | Type |
| ----- | ----- |
| Version 1.24.07: added new network token models | Update |
| Merchant managed [network tokens](?path=docs/Resources/Guides/Payment-Sources/Tokenization/Network-Request.md) passthrough support | Feature |
| [Partial cancels](?path=docs/Resources/API-Documents/Payments/Cancel.md) supported for terminal direct and gateway settlement on Nashville | Feature |
| [Tap to Pay on iPhone](?path=docs/In-Person/Integrations/Tap-to-Pay.md) updated to support PIN debit processing | Update |

---

## June 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** May 30th 2024
- **Production:** June 6th 2024

| Details | Type |
| ----- | ----- |
| Version 1.24.06: Reorganization of Payments-VAS groups for API Explorer and documentation | Update |
| [Partner tokens](?path=docs/Resources/API-Documents/Payments_VAS/Get-Proccesor-Token.md) response updated to make `cardDetails` an array | Update |
| Support for merchant managed 3rd-party [network tokens](?path=docs/Resources/Guides/Payment-Sources/Tokenization/Network-Token.md) | Feature |

---

## May 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** April 24th 2024
- **Production:** May 2nd 2024

| Details | Type |
| ----- | ----- |
| Support [Dynamic Currency Conversion *(DCC)*](?path=docs/Resources/Guides/Global-Currency/Currency-Conversion.md) rate requests for BIN lookup and currency lookup | Feature |
| Support [EMV Certification Authority Public Key *(CAPK)*](?path=docs/Resources/API-Documents/Device-Management/CAPK.md) download and status verification | Feature |
| [Tap to Pay on iPhone](?path=docs/In-Person/Integrations/Tap-to-Pay.md) updated to support unmatched and open refunds, inquiry and account link verification | Update |
| Support [ACH PaymentCheck](?path=docs/Resources/Guides/Payment-Sources/Pay-By-Bank/Payment-Check.md) as a payment source | Feature |
| Enhanced support [ECv2 for GooglePay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md) and support for Fiserv Google Payment Token  | Update |

---

## April 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** March 31st 2024
- **Production:** April 4th 2024

| Details | Type |
| ----- | ----- |
| Support [Get Partner Token](?path=docs/Resources/API-Documents/Payments_VAS/Get-Proccesor-Token.md) to convert TransArmor token to 3rd party processor token | Feature |
| Support [HD Supply](?path=docs/Resources/Guides/Payment-Sources/Private-Label/HDS.md) private label credit cards | Feature |
| Support Commerce Hub Managed [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) transactions | Feature |

---

## March 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** February 28th 2024
- **Production:** March 7th 2024

| Details | Type |
| ----- | ----- |
| Support [Global Acquiring](?path=docs/Resources/Guides/Global-Acquiring.md) for international merchant processing | Feature |
| Support [CVV only encryption](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) for Multi-Use Public Key *(MUPK)*| Update |
| Support [ChargeAfter](?path=docs/Resources/Guides/Payment-Sources/Private-Label/Charge-After.md) in-person transactions | Update |

---

## February 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** January 25th 2024
- **Production:** February 1st 2024

| Details | Type |
| ----- | ----- |
| Version 1.6: Refactored Merchant Managed [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) transactions | Update |
| Checkout [v2 iFrame solution](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields.md) | Feature |
| Support [Multi-Currency Pricing](?path=docs/Resources/Guides/Global-Currency/Multi-Currency.md) for international transactions | Feature |

---

## January 2024

Commerce Hub will target to update our environments on the following dates; however the dates and content is subject to change based on testing results.

- **Certification:** January 1st 2024
- **Production:** January 15th 2024

| Details | Type |
| ----- | ----- |
| Support [Gift Solutions (Gift Card)](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) operations, balance inquiry and transactions | Feature |
| Support [Payment Facilitators](?path=docs/Resources/Guides/Partners/PFAC/Payment-Faciliator.md) | Feature |
| Support [Level II/III](?path=docs/Resources/Guides/Level23/Level23.md) enhanced data | Feature |
| Support [ChargeAfter](?path=docs/Resources/Guides/Payment-Sources/Private-Label/Charge-After.md) Private Label Credit Cards | Feature |
| Version 1.6: Refactored [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md) models to support `paymentAmountType` as part of the for Mastercard recurring bill payment mandate | Update |

---

## See also

- [Release Notes](?path=docs/Release-Notes-Alerts/Release-Notes.md)

---

## Archive

- [2023](?path=docs/Release-Notes-Alerts/PRN-2023.md)
- [2022](?path=docs/Release-Notes-Alerts/PRN-2022.md)

---
