---
tags: [carat, commerce-hub, enterprise, master-data, card-details]
---


# Card Data

Card is a required object in `source` for all card payment types including; debit, credit, prepaid (gift), HSA, and WIC/EBT. 

<!--
type: tab
title: card
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `cardData` | *string* | 256 | Credit Card Number or Encrypted Data |
| `nameOnCard` | *string* | 256 | Cardholder name |
| `expirationMonth` | *string* | 2 | 2-digit card expiration month |
| `expirationyear` | *string* | 4 | 4-digit card expiration year |
| `securityCode` | *string* | 4 | A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC), verification code (V-code or V code), or signature panel code (SPC). |
| `securityCodeIndicator` | *string* | 15 | Indicates how the [security code](#security-code-indicator) is passed|
| `bin` | *String* | 8 | Bank Identification Number (BIN), the initial set of four to six numbers of the Primary Account Number (PAN). The BIN identifies the issuer and Level 2/3 qualifications. |
| `last4` | *String* | 4 | Last four digits of the Primary Account Number (PAN) |


<!--
type: tab
title: JSON Example
-->

JSON string format for `card`:

```json
{
   "card":{
      "cardData": "4005550000000019",
      "nameOnCard": "Jane Smith",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "111",
      "securityCodeIndicator": "PROVIDED",
      "bin": "400555",
      "last4": "0019"
   }
}
```

<!-- type: tab-end -->

---

#### Security Code Indicator

The below table identifies the valid values of `securityCodeIndicator`.

| Value | Description |
| ----- | --------- |
| *NOT_SUPPORTED* | Not supported (Default) |
| *PROVIDED* | Security code provided in the transaction request |
| *VALUE_ILLEGIBLE* | Security code value missing or illegible |
| *NOT_AVAILABLE* | Security code not available. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---