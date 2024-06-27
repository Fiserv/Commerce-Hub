---
tags: [Debit, Routing, Network, Processor]
---

# Basic Routing

Commerce Hub offers Intelligent and Least Cost methods of transaction routing to enhance merchant processing, decrease decline rates, and reduce costs. When enabled for these services, transactions are sent in a standard [charges request](?path=docs/Resources/API-Documents/Payments/Charges.md) with no additional coding. This behavior can be overriden by using [Directed Routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md)

---

## Intelligent Routing

The Intelligent Routing feature offers merchants consuming multi-acquiring capability to set up criteria to route transactions to different processors based on their business need.

Currently Commerce Hub offers a subscription-based capability to route to different processors when more than one acquirer is set up in Merchant Configuration and Boarding. Commerce Hub also supports the option for merchants to subscribe to fallback routing to an alternate processor when the primary is unavailable.

<!-- theme: info -->
> Intelligent Routing can be opted as a service during onboarding. For more information, please contact your account representative.

---

## Least Cost Debit Routing

Commerce Hub provides Least Cost Debit Routing capabilities in a single API interface, for both standard processing and optimized debit routing.

Commece Hub will recognize if the transaction is from a debit or credit card, and the debit card transactions will be routed to the applicable platform. A BIN check will be performed and if enabled for optimized debit supported, will process the transaction. If the debit card is not supported, the transaction is forwarded to the the standard processing platform to continue with the transaction.

<!-- theme: info -->
> To utilize Least Cost Routing service the merchant account will need to be boarded appropriately in Merchant Configuration and Boarding. For more information, please contact your account representative.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Directed Routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)

---
