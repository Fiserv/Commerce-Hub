# Stored Credentials

## Overview

Stored Credentials also known as Credentials on File, allows the merchant to initiate a transactions on behalf of customers (e.g. for subscription payments), using the [Payment Token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) created from the customer's card details.

---

## Technical Requirements

The following variables are required in the initial `PaymentToken` request and subsequent transactions.

#### Component : transactionDetails

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `authorizationTypeIndicator` | *string* | 11 | Type of authorization requested. **Valid Values:** INITIAL, REAUTH, DEFERRED, INCREMENTAL. |

#### Component : storedCredentials

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `initiator` | *string* | 11 | Indicates whether it is a merchant-initiated or explicitly consented to by card holder. **Valid Values:** *MERCHANT*, *CARD_HOLDER* |
| `scheduled` | *boolean* |  | Indicator if this is a scheduled transaction. |
| `schemeReferencedTransactionId` | *string* | 256 | The transaction ID received from the initial transaction. May be required if sequence is subsequent. |
| `sequence` | *string* | 10 | Indicates if the transaction is first or subsequent. **Valid Values:** *FIRST*, *SUBSEQUENT* |
| `networkOriginalAmount` | *number* | 999999999999999999.999 | Original transaction amount, required for Discover Card on File transactions. |
| `networkTransactionReference` | *string* | 64 | Allows linking of the transaction to the original or previous one in a subscription/card-on-file chain. |

## Payload Example

```json
{
   "amount":{
      "total": "12.04",
      "currency": "USD"
   },
   "paymentSource":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035",
         "securityCode": "123"
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "createToken": true,
      "tokenProvider": "RSA",
      "authorizationTypeIndicator": "INITIAL"
   },
   "storedCredentials":{
      "scheduled": true,
      "initiator": "CARD_HOLDER",
      "sequence": "FIRST",
      "schemeReferenceTransactionId": "54231235467"
   }
}
```

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Incremental Auth](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md)
- [Payment Token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)
- [Recurring Payment](?path=docs/Resources/Guides/Bill-Payments/Recurring-Installments.md)

---
