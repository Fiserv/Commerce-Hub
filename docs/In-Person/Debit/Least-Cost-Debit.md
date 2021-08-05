---
tags: [carat, commerce-hub, enterprise, card-present, in-person, least-cost-debit-rounting, debit, debit-routing, paysecure]
---

# Least Cost Debit Routing

Commerce Hub has integrated with PaySecure in order to provide Least Cost Debit Routing capabilities in a single API interface, for both standard processing and optimized debit routing. When enabled for this service, debit transactions are sent in a standard [charges request](?path=docs/Resources/API-Documents/Payments/Charges.md) with no additional coding.

Commece Hub will recognize if the transaction is from a debit or credit card and the Debit card transactions will be routed to the PaySecure platform. PaySecure will perform a BIN check and if enabled for optimized debit supported, will process the transaction. If the debit card is not supported, the transaction is forwarded to the the standard processing platform to continue with the transaction.

<!-- theme: info -->
> To utilize this Least Cost Routing service you need to be boarded directly with PaySecure and obtain their credentials. These credentials then need to be added to Commerce Hub boarding configuration so to recognize the debit transactions are to be forwarded on. For more information please contact your account representative.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Smart Routing](?path=docs/In-Person/Debit/Smart-Routing.md)

---