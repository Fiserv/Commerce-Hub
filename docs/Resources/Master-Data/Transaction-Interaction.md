---
tags: [carat, commerce-hub, enterprise, master-data, transaction-origin-and-entry-modes, transaction-interaction]
---

# Transaction Interaction

The `transactionInteraction` object contains the data indicating where the transaction is acquired and the capabilities of the website, software, app, or terminal.

<!--
type: tab
title: transactionInteraction
-->

The below table identifies the required parameters in the `transactionInteraction` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `origin` | *string* |  | The [origin](#transaction-origin) of the transaction |
| `posEntryMode` | *string* |  | An identifier used to indicate how the account number was [entered](#pos-entry-mode) on the transaction.|
| `posConditionCode` | *string* |  | An identifier used to indicate the transaction [condition](#pos-condition-code) at the Point-of-Sale *(POS)*. |
| `mobileInteraction` | *string* |  | Mobile method of [interaction](#mobile-interaction)|
| `eciIndicator` | *string* |  | [Electronic Commerce Indicator (ECI)](#electronic-commerce-indicator)|

<!--
type: tab
title: JSON Example
-->

JSON string format for `transactionInteraction`:

```json
{
   "transactionInteraction":{
      "origin": "ECOM",
      "posEntryMode": "MANUAL",
      "posConditionCode": "CARD_NOT_PRESENT_ECOM",
      "mobileInteraction": "PHONE_NUMBER",
      "eciIndicator": "SECURE_ECOM"
   }
}

```

<!--type: tab-end -->

---

#### Transaction Origin

The below table identifies the valid values of the origin of the transaction.

| Value | Description |
|-------|-------------|
| *ECOM* | Card Not Present email or internet |
| *MOTO* | Mail order or telephone order |
| *POS* | Card Present retail face to face |

---

#### POS Entry Mode

The below table identifies the valid values of how account number was entered on the transaction.

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

The below table identifies the valid values of the transaction condition at the Point-of-Sale

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

#### Mobile Interaction

The below table identifies the valid values of mobile method of interaction.

| Value | Description |
|-------|-------------|
| *PHONE_NUMBER* | Invoice received by phone number |
| *QR_CODE* | Invoice paid by scanning QR Code |

---

#### Electronic Commerce Indicator

<!-- theme: warning -->
> ECI is required on all online, mobile, and digital E-Commerce transactions.

The below table identifies the valid values of ecommerce indicator.

| Value | Description |
|-------|-------------|
| *SECURE_ECOM* | **Secure Electronic Transaction:** Designates a transaction between a cardholder and a merchant consummated via E-commerce where the transaction was successfully authenticated and includes the management of a cardholder certificate. |
| *NON_AUTH_ECOM* | **Non-Authenticated Electronic Commerce Transaction:** Designates a transaction consummated via E-commerce that attempted to authenticate the cardholder.  Utilized for transactions in the event of: A non-participating Issuer, a non-participating cardholder of a participating Issuer, or a participating Issuer, but the authentication server is not available. |
| *CHANNEL_ENCRYPTED* | **Channel Encrypted Transaction:** Designates a transaction between a cardholder and a merchant consummated via E-commerce where the transaction includes the use of transaction encryption such as SSL/TLS, but authentication was not performed. The cardholder payment data was protected with a form of Internet security, such as SSL/TLS, but authentication was not performed. |
| *NON_SECURE_ECOM* | **Non-Secure Electronic Commerce Transaction:** Designates a transaction between a cardholder and a merchant consummated via E-commerce where the transaction does not include the use of any transaction encryption such as SSL/TLS, no authentication performed, no management of a cardholder certificate. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md)

---