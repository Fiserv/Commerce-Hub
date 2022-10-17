---
tags: [API Reference, Master Data, Transaction Origin and Entry Modes, Transaction Interaction]
---

# Transaction Interaction

The `transactionInteraction` object contains the data indicating where the transaction is acquired and the capabilities of the website, software, app, or terminal.

<!--
type: tab
titles: transactionInteraction, JSON Example
-->

The below table identifies the parameters in the `transactionInteraction` object. 

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `origin` | *string* | 4 | The [origin](#transaction-origin) of the transaction. |
| `eciIndicator` | *string* | 36 | [Electronic Commerce Indicator (ECI)](#electronic-commerce-indicator). Required on all online, mobile, and digital E-Commerce transactions.|
| `posEntryMode` | *string* | 22 | An identifier used to indicate how the account number was [entered](#pos-entry-mode) on the transaction.|
| `posConditionCode` | *string* | 26 | An identifier used to indicate the transaction [condition](#pos-condition-code) at the Point-of-Sale *(POS)*. |
| `responseCode` | *string* | N/A | Response code returned by network/issuer used in subsequent transactions. |
| `posData` | *string* | N/A | POS data returned by network/issuer used in subsequent transactions. |
| `mobileInteraction` | *string* | 12 | Identifies if the mobile interaction was _PHONE_ or _QR_CODE_|
| `cardholderAuthenticationMethod` | *string* | 32 | Identifies how the cardholder was authenticated/verified. ***Valid Values:** NOT_AUTHENTICATED, PIN, ELECTRONIC_SIGNATURE, MANUAL_SIGNATURE, OTHER_MANUAL_VERIFICATION, UNKNOWN (Default), OTHER_SYSTEMATIC_VERIFICATION* |
| `authorizationCharacteristicsIndicator` | *string* | 23 | Response code used for [qualification](#authorization-characteristics-indicator) used in subsequent transactions | 
| `cardholderAuthenticationEntity` | *string* | 32 | Identifies what entity authenticated the cardholder. ***Valid Values:** UNSPECIFIED, NOT_AUTHORIZED, ICC_OFFLINE_PIN, CARD_ACCEPTANCE_DEVICE, AUTHORZED_AGENT_ONLINE_PIN, MERCHANT_VERIFIED_SIGNATURE, OTHER* |
| `cardHolderAuthenticationRisk` | *string* | 25 | Identifies the Security Risk from the Card Holder Authentication. ***Valid Values:** NO_RISK, SUSPECTED_FRAUD, IDENTITY_VERIFIED, ECOM_DIGITAL_SIGNATURE* |
| `terminalTimestamp` | *string* | N/A | Terminal timestamp in ISO 8601 format YYYY-MM-DDThh:mm:ssZ |
| `serviceCode` | *string* | 3 | If this field is returned in an authorization response it must be provided in subsequent capture transactions |
| `applicationExpiryDate` | *string* | N/A | Captured from the EMV chip data. YYYY-MM-DD format. |
| `hostPosEntryMode` | *string* | 50 | POS entry mode from the response. |
| `hostPosConditionCode` | *string* | 50 | POS condition code from the response. |
| `motoType` | *string* | N/A | Defines if the MOTO `origin` is _MAIL_ or _PHONE_ |
| `additionalPosInformation` | *object* | N/A | Additional [information](?path=docs/Resources/Master-Data/Additional-POS-Info.md) about the POS functions |
| `network` | *object* | N/A | Card [network](?path=docs/Resources/Master-Data/Network-Details.md) information |

<!--
type: tab
-->

JSON string format for `transactionInteraction`:

```json
{
  "transactionInteraction": {
    "origin": "MOTO",
    "eciIndicator": "SECURE_ECOM",
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_MOTO",
    "responseCode": "string",
    "posData": "string",
    "mobileInteraction": "PHONE_NUMBER",
    "cardholderAuthenticationMethod": "ELECTRONIC_SIGNATURE",
    "cardholderAuthenticationEntity": "CARD_ACCEPTANCE_DEVICE",
    "authorizationCharacteristicsIndicator": "CARD_NOT_PRESENT",
    "cardHolderAuthenticationRisk": "IDENTITY_VERIFIED",
    "terminalTimestamp": "2016-04-16T16:06:05Z",
    "serviceCode": "string",
    "applicationExpiryDate": "2021-09-03",
    "hostPosEntryMode": "MANUAL",
    "hostPosConditionCode": "CARD_NOT_PRESENT_ECOM",
    "motoType": "MAIL",
    "additionalPosInformation": {},
    "network": {}
  }
}
```

<!--type: tab-end -->

---

#### Transaction Origin

The below table identifies the valid values of `origin`.

| Value | Description |
|-------|-------------|
| *ECOM* | Card not present email or internet |
| *MOTO* | Mail order or telephone order |
| *POS* | Card Present retail face to face |

---

#### POS Entry Mode

POS entry mode value identifies how account number was entered on the transaction.  The below table identifies the valid values of `posEntryMode`.

| Value | Description |
|-------|-------------|
| *UNSPECIFIED* | Default |
| *MANUAL* | Key Entered |
| *BARCODE* | Barcode Scan |
| *OCR* | Optical Character Reader |
| *ICR_RELIABLE* | Integrated Circuit Read (CVV data Reliable) |
| *ICR_UNRELIABLE* | Integrated Circuit Read (CVV data unreliable) |
| *CONTACTLESS* | Contactless Integrated Circuit Read (Reliable) |
| *CONTACTLESS_MOBILE* | Contactless Mobile Commerce or Discover InApp |
| *CONTACTLESS_MAG_STRIPE* | Contactless Magnetic Stripe Read |
| *AMEX_WALLET* | Amex Digital Wallet |
| *MASTERCARD_REMOTE_CHIP* | Mastercard remote chip entry |
| *CREDENTIAL_ON_FILE* | Credential on File |
| *EMV_FALLBACK* | EMV fallback to manual entry |
| *EMV_FALLBACK_MAG* | EMV fallback to Magnetic Strip entry |
| *EMV_SWITCHED* | EMV Transaction switched from Contactless to Contact entry |
| *MAG_STRIPE* | Magnetic Stripe - Track Read | 

---

#### POS Condition Code

The below table identifies the valid values of `posConditionCode`.

| Value | Description |
|-------|-------------|
| *CARD_PRESENT* | **Cardholder Present - Card Present:** Designates a transaction where the cardholder was present at a merchant location. |
| *CARD_PRESENT_UNSPECIFIED* | **Cardholder Present - Unspecified:** Designates a transaction where the cardholder was present at a merchant location but the method is unspecified.|
| *CARD_PRESENT_UNATTENDED* | **Cardholder Present - Unattended Device:** Designates a transaction where the cardholder was present at a merchant location and processed through an unattended device *(e.g. kiosk, gas pump)*. |
| *CARD_PRESENT_FRAUD* | **Cardholder Present - Suspect Fraud:** Designates a transaction where the cardholder was present at a merchant location, but the merchant suspects fraud. |
| *CARD_PRESENT_MAG_NOT_READ* | **Cardholder Present - Magnetic Stripe Could Not Be Read:** Designates a transaction where the cardholder was present at a merchant location but the MAG Stripe could not be read *(i.e. manual transaction)*. |
| *CARD_PRESENT_IDENTIFIED* | **Cardholder Present - Identity Verified:** Designates a transaction where the cardholder was present at a merchant location and their identity was verified. |
| *CARD_NOT_PRESENT_RECURRING* | **Cardholder Not Present – Recurring:** Designates a transaction that represents an arrangement between a cardholder and the merchant where transactions are going to occur on a periodic basis. |
| *CARD_NOT_PRESENT_INSTALLMENT* | **Cardholder Not Present – Installment:** Designates a group of transactions that originated from a single purchase where the merchant agrees to bill the cardholder in installments. |
| *CARD_NOT_PRESENT_DEFERRED* | **Cardholder Not Present – Deferred:** Designates a transaction that represents an order with a delayed payment for a specified amount of time. |
| *CARD_NOT_PRESENT_F2F* | **Cardholder Present - Card Not Present - Face 2 Face.** Designates a transaction where the cardholder was present at a merchant location but did not have a card to swipe *(i.e. manual transaction)*. |
| *CARD_NOT_PRESENT_MOTO* | **Cardholder Not Present - Mail Order/Telephone Order:** Designates a transaction where the cardholder is not present at a merchant location and consummates the sale via the phone or through the mail. The transaction is not for recurring services or product and does not include sales that are processed via an installment plan. |
| *CARD_NOT_PRESENT_ECOM* | **Cardholder Not Present - E-commerce.** Designates a transaction initiated from the merchant's website, email, or app. Specific E-commerce type is identified in the `eciIndicator`. |

---

#### Terminal Entry Capability

The below table identifies the valid values of `terminalEntryCapability`.

| Value | Description |
|-------|-------------|
| _UNSPECIFIED_ | Default |
| _ECOMMERCE_ | E-commerce no terminal used |
| _MAG_STRIPE_ONLY_ | Track read only |
| _MAG_STRIPE_MANUAL_ | Track read or manual key |
| _MAG_STRIPE_MANUAL_CHIP_ | Track read, manual key or chip |
| _BARCODE_ | Barcode scan |
| _CONTACTLESS_ | Contactless integrated circuit read |
| _OCR_ | Opitcal character reader |
| _CHIP_ONLY_ | Chip only |
| _CHIP_MAG_STRIPE_ | Chip with track fallback |
| _MANUAL_ONLY_ | Manual key only |
| _CONTACTLESS_MAG_STRIPE_ | Contactless or track read |
| _HYBRID_ | Hybrid entry mode |

---

#### Electronic Commerce Indicator

<!-- theme: warning -->
> ECI is required on all online, mobile, and digital E-Commerce transactions.

The below table identifies the valid values of `eciIndicator`.

| Value | Description |
|-------|-------------|
| *SECURE_ECOM* | **Secure Electronic Transaction:** Designates a transaction between a cardholder and a merchant consummated via E-commerce where the transaction was successfully authenticated and includes the management of a cardholder certificate. |
| *NON_AUTH_ECOM* | **Non-Authenticated Electronic Commerce Transaction:** Designates a transaction consummated via E-commerce that attempted to authenticate the cardholder.  Utilized for transactions in the event of: A non-participating Issuer, a non-participating cardholder of a participating Issuer, or a participating Issuer, but the authentication server is not available. |
| *CHANNEL_ENCRYPTED* | **Channel Encrypted Transaction:** Designates a transaction between a cardholder and a merchant consummated via E-commerce where the transaction includes the use of transaction encryption such as SSL/TLS, but authentication was not performed. The cardholder payment data was protected with a form of Internet security, such as SSL/TLS, but authentication was not performed. |
| *NON_SECURE_ECOM* | **Non-Secure Electronic Commerce Transaction:** Designates a transaction between a cardholder and a merchant consummated via E-commerce where the transaction does not include the use of any transaction encryption such as SSL/TLS, no authentication performed, no management of a cardholder certificate. |
| *AMEX_PAYMENT_TOKEN* | **American Express Payment Token:** Designates a secure transaction between a cardholder and a merchant via E-commerce where AMEX Payment Token data is present. |

---

#### Authorization Characteristics Indicator

Response code used for qualification and used in subsequent transactions. The below table identifies the valid values of `authorizationCharacteristicsIndicator`.

| Value | Description |
|-------|-------------|
| *CARD_NOT_PRESENT* |  Card not present transaction (preferred customer only e.g. Lodging or Auto Rental) |
| *INCREMENT* | Incremental Authorization | 
| *REQUEST_PARTICIPATION* |  Transaction requests participation |
| *CARD_NOT_PRESENT_NO_AVS* |  Card not present, AVS not required |
 
---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Additional POS Information](?path=docs/Resources/Master-Data/Additional-POS-Info.md)

--- 
