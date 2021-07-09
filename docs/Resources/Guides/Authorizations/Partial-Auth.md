# Partial Authorizations

Commerce Hub supports partial authorizations (approvals), authorization reversals, and balance response in order to improve in-person debit and prepaid transactions.

- **Partial Approvals:** allows merchants to process [split-tender](path=?docs/Resources/Guides/Split-Tender.md) charges by allowing an authorization request where the transaction amount exceeds the funds available on the card. The merchant can then process an additional charge to obtain the remaining amount.

- **Balance Response:** the merchant can inquire to the account balance information, leading to fewer declines.

- **Authorization Reversal:** will release the customer's authorization when partial approvals are not completed, releasing the customer's hold for future purchases.

---

## Request Variables



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