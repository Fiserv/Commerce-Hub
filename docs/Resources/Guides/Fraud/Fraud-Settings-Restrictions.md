---
tags: [carat, commerce-hub, enterprise, authorizations, card-not-present, fraud, transaction-restrictions]
---


# Transaction Restrictions

The Transaction Restriction settings can be enabled for duplicate transaction detection<!-- and restricting refund transactions-->. Restrictions are applied by [transaction controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) inside of Marketplace. 

---

## Duplicate Restrictions

Duplicate Restrictions are used to reject duplicate transactions. Enabling on Commercehub allows duplicate checking and will reject duplicate transactions once the specified configuration has been met. The merchant has the option to have duplicate checking calculated from Approved or All transactions. Duplicate checking is based on the following settings; Lockout Time, Timeframe, Transaction Count, Transaction Status and Transaction Type.

### Lockout Time 

Lockout Time is the timeframe configured for transactions to be locked out when detected and rejected. 

### Timeframe

Timeframe is the timeframe configured for duplicates to be detected and rejected. 

<!--theme: example-->
>A five minute timeframe will detect duplicate transactions made within the last five minutes (of when a transaction is processed).

### Transaction Count 

Transaction Count is the set amount of transactions that are allowed for processing before duplicates are detected and rejected.

### Transaction Status

Transaction Status determines if approved or all transactions will be checked when determing a duplicate. 

### Transaction Type

Transactions can be rejected based on the type selected.

| Type | Description |
|---| ---- |
| All | All transactions will be checked for duplicates |
| Cancel | Only cancelled transactions will be checked for duplicates |
| Capture | Only captured transactions will be checked for duplicates |
| Charge | Only charges transactions will be checked for duplicates |
| Credit | Only credit transactions will be checked for duplicates |


---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
