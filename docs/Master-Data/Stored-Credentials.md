## Stored Credentials

If you have set up an agreement with your customer to initiate recurring transactions on their behalf (e.g. for subscription payments) and have created a token for their card details, the API request type PaymentToken allows you to process the regular charges.


| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `scheduled` | *boolean* |  | Indicator if this is a scheduled transaction. |
| `initiator` | *string* |  | Indicates whether it is a merchant-initiated or explicitly consented to by card holder.</br>Accepted Request Types:</br>*MERCHANT*</br>*CARD_HOLDER* |
| `sequence` | *string* |  | Indicates if the transaction is first or subsequent.</br>Accepted Request Types:</br>*FIRST*</br>*SUBSEQUENT* |
| `schemeReferencedTransactionId` | *string* |  | The transaction ID received from schemes for the initial transaction. May be required if sequence is subsequent. |