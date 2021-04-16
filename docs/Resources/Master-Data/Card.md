# Card

## Overview

The `card` component is an array which is used for all card types, including debit, credit, prepaid (gift), HSA, EBT, etc. and is a sub-component of `source` for a [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) and [PrepaidCard](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md).

#### Component: card

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `cardData` | *string* |  | Credit Card Number or Encrypted Data. |
| `nameOnCard` | *string* |  | Cardholder name. |
| `expirationMonth` | *string* |  | 2-digit card expiration month. |
| `expirationyear` | *string* |  | 4-digit card expiration year. |
| `securityCode` | *string* |  | A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC), verification code (V-code or V code), or signature panel code (SPC). |
| `securityCodeIndicator` | *string* |  | Indicates how the [security code](#security-code-indicator) is passed. |


### Security Code Indicator

#### Object: securityCodeIndicator

| Value | Description |
| ----- | --------- |
| NOT_SUPPORTED (Default) | Not Supported |
| PROVIDED | Security code provided in the transaction request |
| VALUE_ILLEGIBLE | Illegible value of security code |
| NOT_AVAILABLE | Security code not available |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---