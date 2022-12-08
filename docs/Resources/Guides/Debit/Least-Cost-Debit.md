---
tags: [Card Present, In-Person, Debit, Routing]
---

# Least Cost Debit Routing

Commerce Hub provides Least Cost Debit Routing capabilities in a single API interface, for both standard processing and optimized debit routing. When enabled for this service, debit transactions are sent in a standard [charges request](?path=docs/Resources/API-Documents/Payments/Charges.md) with no additional coding.

Commece Hub will recognize if the transaction is from a debit or credit card and the dDebit card transactions will be routed to the applicable platform. A BIN check will be performed and if enabled for optimized debit supported, will process the transaction. If the debit card is not supported, the transaction is forwarded to the the standard processing platform to continue with the transaction.

<!-- theme: info -->
> To utilize the Least Cost Routing service the merchant account will need to be boarded appropriately to obtain their credentials, and the credentials will need to be added to Commerce Hub boarding configuration. For more information, please contact your account representative.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Directed Routing](?path=docs/Resources/Guides/Directed-Routing.md)
- [Smart Routing](?path=docs/In-Person/Debit/Smart-Routing.md)
- [Transaction Capture Type](?path=docs/Resources/Guides/Settlement/Transaction-Capture-Type.md)

---
