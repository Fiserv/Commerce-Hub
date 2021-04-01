# Card

## Overview

The `card` component is an array which is used for all card types, including debit, credit, prepaid (gift), HSA, EBT, etc. and is a sub component of `source` for a [PaymentCard](../Guides-Info/Payment-Source/Source-Type.md) and [PrepaidCard](../Guides-Info/Payment-Source/Gift-Card.md).

The card component consists of following fields

#### Component: card

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `cardData` | *string* |  | Credit Card Number or Encrypted Data. |
| `nameOnCard` | *string* |  | Cardholder name. |
| `expirationMonth` | *string* |  | 2-digit card expiration month. |
| `expirationyear` | *string* |  | 4-digit card expiration year. |
| `securityCode` | *string* |  | A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC), verification code (V-code or V code), or signature panel code (SPC). |
| `securityCodeIndicator` | *string* |  | Indicates how the security code is passed. Valid Values are |

#### Valid Values: securityCodeIndicator

| Value | Description |
| ----- | --------- |
| NOT_SUPPORTED (Default) | Not Supported |
| PROVIDED | Security code provided in the transaction request |
| VALUE_ILLEGIBLE | Illegible value of security code |
| NOT_AVAILABLE | Security code not available |

---

## See Also

- [API Explorer](url)
- [Source Type](../Guides/Payment-Sources/Source-Type.md)

---