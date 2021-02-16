## Taking Payments


The /payments API allows to create, inquire about, and finalize payment transactions.

Our Payments API has two main uses - 

### Primary Transactions :

Primary transactions are typical [sale](../Transactions/Charges.md) transactions and [pre-authorisations](../Transactions/Charges.md).

### Secondary Transactions :

Secondary Transactions can be used to initiate [refund](../Transactions/Refund.md) transaction, [void](../Transactions/Cancel.md) a transaction or [complete a pre-authorisation](../Transactions/Capture.md).

Secondary transactions can be initiated 

- **Using transactionID :** Capture, Void or Refund can be initiated by using the transactionID of the previous primary transaction as a reference.

- **Using orderID :** Capture, Void or Refund can be initiated by using the orderID of the previous primary transaction as a reference.







https://docs.fiserv.com/docs/payments/docs/2.%20Payment%20APIs/2.1.%20Taking%20Payments/ii.%20Taking%20Customer%20Payments/1.%20The-Payments-API.md
+
https://docs.fiserv.com/docs/payments/docs/2.%20Payment%20APIs/2.1.%20Taking%20Payments/viii.Using%20orderId/Using-orderId.md
