# Card 

## Overview

Card is a required object in `source` for all card payment types including; debit, credit, prepaid (gift), HSA, and WIC/EBT. 

#### card

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `cardData` | *string* |  | Credit Card Number or Encrypted Data. |
| `nameOnCard` | *string* |  | Cardholder name. |
| `expirationMonth` | *string* |  | 2-digit card expiration month. |
| `expirationyear` | *string* |  | 4-digit card expiration year. |
| `securityCode` | *string* |  | A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC), verification code (V-code or V code), or signature panel code (SPC). |
| `securityCodeIndicator` | *string* |  | Indicates how the [security code](#security-code-indicator) is passed. |

---

### Security Code Indicator

| Value | Description |
| ----- | --------- |
| NOT_SUPPORTED | Not supported (Default). |
| PROVIDED | Security code provided in the transaction request. |
| VALUE_ILLEGIBLE | Security code value missing or illegible. |
| NOT_AVAILABLE | Security code not available. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---