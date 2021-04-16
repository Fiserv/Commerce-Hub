---
tags: [Source-Type, carat, commerce-hub]
---

# PaymentCard

Financial Institutions such as banks issue the **Payment Card** to the customers. Customers use the card to pay online or in person. The `sourceType` *PaymentCard* is used to submit a [card](../../Master-Data/Card-Type.md) transaction to our application.

---

### Minimum Requirements

#### Component : paymentSource

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Use Value *PaymentCard* for card transactions |

#### Component : Card

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `cardData` | *string* | 15 | Credit Card Number or Encrypted Data |
| `expirationMonth` | *string* | 2 | 2-digit card expiration month Example (05) |
| `expirationYear` | *string* | 4 | 4-digit card expiration year Example (2025) |
| `securityCode` | *string* |  | A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC), verification code (V-code or V code), or signature panel code (SPC). |

---

### Payload Example

<!--
type: tab
title: Request
-->

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123"
      }
   }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)

---
