---
tags: [carat, commerce-hub, card-not-present, card-present, hash, primary-transactions, secondary-transactions]
---

## Taking Payments

The /payments API allows to create, inquire about, and finalize payment transactions. Our Payments API has two main uses - 

### Primary Transactions

Primary transactions are typical [sale](../Transactions/Charges.md) transactions and [pre-authorisations](../Transactions/Charges.md) and are used to execute a customer payment or pre-authorisation transaction without reference to a prior transaction.

### Secondary Transactions

Secondary Transactions can be used to initiate [refund](../Transactions/Refund.md) transaction, [void](../Transactions/Cancel.md) a transaction or [complete a pre-authorisation](../Transactions/Capture.md) using reference to a prior transaction.

Secondary Transaction reference value can be either

- `transactionID` : Gateway transaction identifier returned in the parameter gatewayTransactionId from a charge transaction. Capture, Void or Refund can be initiated by using the `transactionID` of the previous primary transaction as a reference

**Sample Endpoint :** `/payments/v1/charges/{transactionId}/capture`

- `orderID`: Gateway transaction identifier returned in the parameter gatewayOrderId from a charge transaction. Capture, Void or Refund can be initiated by using the `orderID` of the previous primary transaction as a reference.

**Sample Endpoint :** `/payments/v1/charges/orders/{orderId}/capture`



<!--


https://docs.fiserv.com/docs/payments/docs/2.%20Payment%20APIs/2.1.%20Taking%20Payments/ii.%20Taking%20Customer%20Payments/1.%20The-Payments-API.md
+
https://docs.fiserv.com/docs/payments/docs/2.%20Payment%20APIs/2.1.%20Taking%20Payments/viii.Using%20orderId/Using-orderId.md


>