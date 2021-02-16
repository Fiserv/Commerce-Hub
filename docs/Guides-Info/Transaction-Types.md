---
tags: [carat, commerce-hub, card-not-present, card-present, hash, primary-transactions, secondary-transactions]
---

## Transaction Types

The Commerce Hub API allows a merchant to create, inquire, and finalize payment transactions. Our API has two transaction types, primary and secondary.

### Primary Transactions

Primary transactions are typical [sale](../Transactions/Charges.md) transactions and [pre-authorizations](../Transactions/Charges.md) and are used to execute a customer payment or pre-authorization transaction without reference to a prior transaction.

### Secondary Transactions

Secondary Transactions can be used to initiate [refund](../Transactions/Refund.md) transaction, [void](../Transactions/Cancel.md) a transaction or [complete a pre-authorization](../Transactions/Capture.md) using a reference to a prior transaction.

Secondary Transaction reference value can be either:

- `transactionID` : Transaction identifier returned in the transactionProcessingDetails of the gatewayResponse for each charge. Capture, void, refund or inquiry can be initiated by using the `transactionID` of the previous primary transaction as a reference.

  **Sample Endpoint :** `/payments/v1/charges/{transactionId}/capture`
  </br>

- `orderID`: Order identifier returned in the gatewayResponse for each charge. Capture, void, refund or inquiry can be initiated by using the `orderID` of the previous primary transaction as a reference.

  **Sample Endpoint :** `/payments/v1/charges/orders/{orderId}/capture`



<!--


https://docs.fiserv.com/docs/payments/docs/2.%20Payment%20APIs/2.1.%20Taking%20Payments/ii.%20Taking%20Customer%20Payments/1.%20The-Payments-API.md
+
https://docs.fiserv.com/docs/payments/docs/2.%20Payment%20APIs/2.1.%20Taking%20Payments/viii.Using%20orderId/Using-orderId.md


>