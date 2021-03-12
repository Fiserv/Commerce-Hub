# Stored Credentials

For recurring transactions if merchant is allowed to initiate a transactions on behalf of customers (e.g. for subscription payments), and have created a token for their card details, the API request type PaymentToken allows you to process the regular charges. 

## Technical Requirements

##### Component : storedCredentials

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `scheduled` | *boolean* |  | Indicator if this is a scheduled transaction. |
| `initiator` | *string* |  | Indicates whether it is a merchant-initiated or explicitly consented to by card holder.</br>Accepted Request Types:</br>*MERCHANT*</br>*CARD_HOLDER* |
| `sequence` | *string* |  | Indicates if the transaction is first or subsequent.</br>Accepted Request Types:</br>*FIRST*</br>*SUBSEQUENT* |
| `schemeReferencedTransactionId` | *string* |  | The transaction ID received from schemes for the initial transaction. May be required if sequence is subsequent. |

## Payload Example

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "storedCredentials": {
    "scheduled": true,
    "initiator": "merchant",
    "sequence": "first",
    "schemeReferenceTransactionId": "54231235467"
  }
}
```

---

## See Also

- [API Explorer](url)
- [Charge](../../Transactions/Charges.md)
- [Capture](../../Transactions/Capture.md)
