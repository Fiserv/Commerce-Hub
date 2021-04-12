# Stored Credentials

## Overview

Stored Credentials also known as Credentials on File, allows the merchant to initiate a transactions on behalf of customers (e.g. for subscription payments), using the [Payment Token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) created from the customer's card details.

---

## Technical Requirements

The following variables are required in the initial `PaymentToken` request and subsequent transactions.

#### Component : transactionDetails

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `authorizationTypeIndicator` | *string* |  | Type of authorization requested. **Valid Values:** INITIAL, REAUTH, DEFERRED, INCREMENTAL. |

#### Component : storedCredentials

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `scheduled` | *boolean* |  | Indicator if this is a scheduled transaction. |
| `initiator` | *string* |  | Indicates whether it is a merchant-initiated or explicitly consented to by card holder. **Valid Values:** *MERCHANT*, *CARD_HOLDER* |
| `sequence` | *string* |  | Indicates if the transaction is first or subsequent. **Valid Values:** *FIRST*, *SUBSEQUENT* |
| `schemeReferencedTransactionId` | *string* |  | The transaction ID received from the initial transaction. May be required if sequence is subsequent. |

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
      "captureFlag": false,
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

- [API Explorer](url)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Incremental Auth](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md)
- [Payment Token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)
- [Recurring Payment](?path=docs/Resources/Guides/Bill-Payments/Recurring-Installments.md)
