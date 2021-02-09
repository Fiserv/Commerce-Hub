---
tags: [carat, commerce-hub, glossary]
---

## Glossary

### Authorization
Authorization is necessary to check whether a card holder's credit card holds sufficient funds and is approved to purchase from a merchant. An authorization request first emerges whenever a cardholder attempts to purchase a good or service through a debit or credit card.

### Dynamic Descriptors
A custom descriptor you configure and pass with each transaction via the API. Some processors only support soft dynamic descriptors, while others support both hard and soft dynamic descriptors.

### Hard Descriptors
The descriptor that shows up after a transaction has settled. As soon as the customer's bank has finalized the transaction status, the hard descriptor will be permanently displayed as the description of the charge on the customer’s statement. See also [Soft Descriptor](#Soft Descriptors)

### Pre-Auth

A pre-auth is a customer transaction where the merchant can validate a given amount is available on the customer payment method (physical card, digital wallet, etc.) and then also place a hold for that amount. This amount is held on the customer account (credit limit or bank balance), but not yet transferred to the merchant. Once the merchant initiates a [Capture](../Transactions/Capture.md) transaction, the held amount is then setled with the merchant batch.


### Sale
A sale is a customer transaction where the purchase amount is authorized and settled at the same time. If a sale is not voided [(Cancel)](../Transactions/Cancel.md) before batching, the merchant funding process begins for this charge. At this point,the merchant can still return funds [(Refund)](../Transactions/Refund.md) the customer.

<!-- theme: warning -->
> 
>🚧
>Settlement time is based on processing network, contact your account manager for more details.

### Soft Descriptors
The descriptor that shows up after a transaction has been authorized. As long as the charge is in a pending state, the soft descriptor will be displayed on the customer's statement.
