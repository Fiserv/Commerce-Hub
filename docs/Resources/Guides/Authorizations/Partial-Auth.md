# Partial Authorizations

Commerce Hub supports partial authorizations (approvals), authorization reversals, and balance response in order to improve in-person debit and prepaid transactions.

- **Partial Approvals:** allows merchants to process [split-tender](path=?docs/Resources/Guides/Split-Tender.md) charges by allowing an authorization request where the transaction amount exceeds the funds available on the card. The merchant can then process an additional charge to obtain the remaining amount.

- **Balance Response:** the merchant can inquire to the account balance information, leading to fewer declines.

- **Authorization Reversal:** will release the customer's authorization when partial approvals are not completed, releasing the customer's hold for future purchases.

---



## Partial Auth Details
<!--
type: tab
title: partialAuthDetails
-->

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `interchangeComplianceIndicator` | *string* | N/A | A code to indicate that Mastercard interchange compliance data was provided for this transaction, and if any other special Mastercard authorization requirements were met. |
| `bankNetRefNumber` | *string* | N/A | A Mastercard generated identifier for each original authorization request. Reference number assigned by Mastercard to each authorization message.|
| `bankNetDate` | *string* | N/A | A Mastercard generated date for this transaction. MMDD format. |
| `cvcIndicator` | *string* | N/A | Indicates the CVC response data. |
| `partialAuthTransactionId` | *string* | N/A | Generated identifier unique for each original authorization request. |
| `validationCode` | *string* | N/A | A code calculated by Visa to ensure that the fields present in the authorization are also present in the clearing record. |
| `totalAuthAmount` | *string* | N/A | Total amount authorized. |
| `downgradeReason` | *string* | N/A | Downgrade reason as supplied by Visa. |
| `creditAuthType` | *string* | N/A | Indicates the type of authorization required. |
| `authScore` | *string* | N/A | The auth score returned for the transaction. |
 
<!--
type: tab
title: JSON Example
-->

```json
{
   "partialAuthDetails":{
      "interchangeComplianceIndicator": "A",
      "bankNetRefNumber": "12345678",
      "bankNetDate": "0310",
      "cvcIndicator": "Y",
      "partialAuthTransactionId": "string",
      "validationCode": "string",
      "totalAuthAmount": 1.00,
      "downgradeReason": "ACCOUNT_NUMBER_MISSING",
      "creditAuthType": "DISCOVER",
      "authScore": "string"
   }
}
```
<!-- type: tab-end -->



---


## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Debit](?path=docs/In-Person/Debit/Smart-Routing.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [In-Person](?path=docs/Getting-Started/Getting-Started-InPerson.md)
- [Network Details](?path=docs/Resources/Master-Data/Network-Details.md)
- [Prepaid](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)

---