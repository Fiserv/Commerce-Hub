## Stored Credentials

The beginning of an awesome article...


| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `scheduled` | *boolean* |  | Indicator if this is a scheduled transaction. |
| `initiator` | *string* |  | Indicates whether it is a merchant-initiated or explicitly consented to by card holder.</br>Accepted Request Types:</br>*MERCHANT*</br>*CARD_HOLDER* |
| `sequence` | *string* |  | Indicates if the transaction is first or subsequent.</br>Accepted Request Types:</br>*FIRST*</br>*SUBSEQUENT* |
| `schemeReferencedTransactionId` | *string* |  | The transaction ID received from schemes for the initial transaction. May be required if sequence is subsequent. |