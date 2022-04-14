
# Multi-Use Public Key Management

The objective of a key management system is to achieve PCI DSS compliance for a banking institution. It involves implementing a crypto system that manages the secure creation, exchange, distribution, storage and use of cryptographic keys for protecting users’ or clients’ sensitive payment card data.


## Best Practices for Key Management

- 1. The merchant should initiate the new key request 2 days prior to the expiry of the previous key. The merchant shall start using the new key once it is successfully exchanged.
- 2. If merchant does not initiate the new key exchange as per the best practices, Commerce Hub should send three warning message via webhook to merchant on 47th, 44th and 41th hour before the key is getting expired on merchant side.
- 3. Merchant should set the limit on the transaction amount for SAF transactions.
- 4. Any transaction during the system interruption, if it exceeds the set limit should get rejected at merchant side.
- 5. If merchant approves the transaction with higher amount during system interruption and later when merchant plays SAF and the transaction gets rejected, it is merchant liability.

## Generate Key

Description.

Table of fields.

Payload examples.

## Revoke Key

Description.

Table of fields.

Payload examples.

## See Also
