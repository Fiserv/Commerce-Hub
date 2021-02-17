## Stored Credentials

For recurring transactions if merchant is allowed to initiate a transactions on behalf of customers (e.g. for subscription payments), and have created a token for their card details, the API request type PaymentToken allows you to process the regular charges. 

### Technical Requirements

##### Component : storedCredentials

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `scheduled` | *boolean* |  | Indicator if this is a scheduled transaction. |
| `initiator` | *string* |  | Indicates whether it is a merchant-initiated or explicitly consented to by card holder.</br>Accepted Request Types:</br>*MERCHANT*</br>*CARD_HOLDER* |
| `sequence` | *string* |  | Indicates if the transaction is first or subsequent.</br>Accepted Request Types:</br>*FIRST*</br>*SUBSEQUENT* |
| `schemeReferencedTransactionId` | *string* |  | The transaction ID received from schemes for the initial transaction. May be required if sequence is subsequent. |