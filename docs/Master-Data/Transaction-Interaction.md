## Transaction Interaction

The trasnaction request may contain the data regarding where the transaction is been acquired and what are the capabilities of the terminal.

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `origin` | *string* |  | The source of the transaction. [Available Values](#pos-entry-mode) |
| `posEntryMode` | *string* |  | An identifier used to indicate how the account number was entered on the transaction. [Available Values](#pos-entry-mode)|
| `posConditionCode` | *string* |  | An identifier used to indicate the transaction condition at the Point-of-Sale *(POS)*. [Available Values](#pos-condition-code)|
| `mobileInteraction` | *string* |  | Mobile method of interaction. [Available Values](#mobile-interaction)|

### Transaction Origin

The available values for `origin` are :

| Value | Description |
|-------|-------------|
| *ECOM* | Card Not Present email or internet. |
| *MOTO* | Mail order or telephone order. |
| *POS* | Card Present retail face to face. |

### POS Entry Mode

The available values for `posEntryMode` are :

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


### POS Condition Code

The available values for `posConditionCode` are :

| Value | Description |
|-------|-------------|
| *CARD_PRESENT* | Cardholder Present, Card Present |
| *CARD_PRESENT_UNSPECIFIED* | Cardholder Present, Unspecified |
| *CARD_PRESENT_UNATTENDED* | Cardholder Present, Unattended Device |
| *CARD_PRESENT_FRAUD* | Cardholder Present, Suspect Fraud |
| *CARD_PRESENT_MAG_NOT_READ* | Cardholder Present, Magnetic Stripe Could Not Be Read |
| *CARD_PRESENT_IDENTIFIED* | Cardholder Present, Identity Verified |
| *CARD_NOT_PRESENT_RECURRING* | Cardholder Not Present – Recurring |
| *CARD_NOT_PRESENT_F2F* | Cardholder Present, Card Not Present, Face 2 Face |
| *CARD_NOT_PRESENT_MOTO* | Cardholder Not Present, Mail Order/Telephone Order |
| *CARD_NOT_PRESENT_ECOM* | Cardholder Not Present, Ecommerce |

### Mobile Interaction

The available values for `mobileInteraction` are :

| Value | Description |
|-------|-------------|
| *PHONE_NUMBER* | Invoice received by phone number |
| *QR_CODE* | Invoice paid by scanning QR Code |