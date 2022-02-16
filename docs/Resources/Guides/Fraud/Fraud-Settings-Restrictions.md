---
tags: [carat, commerce-hub, enterprise, authorizations, card-not-present, fraud, transaction-restrictions]
---


# Transaction Restrictions

The Transaction Restriction settings can be enabled for duplicate transaction detection and restricting refund transactions.

Filters are applied by transaction controls inside of Marketplace. Transaction Restrictions are applied per card brand and their respective response value.

In the Transaction Restriction tab under the Fraud Settings, the settings can be enabled for Duplicate Restrictions.

## Duplicate Status

Duplicate Restrictions are used to enable or disable duplicate transactions. Enable on Commercehub allows duplicate checking and will reject duplicate transactions once the specified configuration have been met. The merchant as the option to have duplicate checking calculated (Query) from "Approved Only" transactions (default) or "All Transactions."

## Lockout Time 

Lockout Time is the time frame configured for duplicates to be locked out when detected and rejected. 

## Timeframe

Timeframe is the time frame configured for duplicates to be detected and rejected. For example, a five minute time frame would detect duplicate transactions made within the last five minutes (of when a transaction is processed).

## Transaction Count 

Transaction Count is the set amount of transactions that are processed for duplicates that will be detected and rejected.

## Transaction Status

Transaction Status is the status that is displayed for the transaction restrictions. All transactions displays the status of the transactions. Approved displays all of the transactions that have been approved. 

## Transaction Type

Transaction types can be sorted by:

All: All of the restricted transactions
Cancel: All of the cancelled transactions
Capture: All of the captured transactions
Charge: All of the charged transactions
Credit: All of the credit transactions

---

Duplicate Status

Duplicate Status is used to enable or disable duplicate checking. Default is “Unrestricted,” which performs no checks. “Deny All” enables duplicate checking and will reject duplicate transactions once the specified configuration have been met. The merchant as the option to have duplicate checking calculated (Query) from "Approved Only" transactions (default) or "All Transactions."

A duplicate is defined as transactions with the same:

Transaction Type
Credit Card Number
Amount


Maximum Duplicates

“Maximum Duplications” is the amount of duplicate transactions that are allowed within the specified time frame before the feature will reject subsequent duplicate transactions.

Refund Status

“Refund Status” is used to enable or disable refund volume checking. Default is “Unrestricted,” which performs no checks. “Volume” enables the feature and will prevent Refunds once the specified configuration has been met.

Once the “Volume” option is selected, the "Maximum Refund Count" and the "Maximum Refund Amount" interact with each other. Once one of the limitations have been met, no more refund transactions will be allowed.

For example, if the "Maximum Refund Count" was set to 5 and the "Maximum Refund Amount" to $500, the first limit reached within the last 24 hours will block any other refunds. If you had one refund of $500, you could no longer do any other refunds, and if you had 6 refunds of $50 each, the 6th would not pass, even if the $500 limit had not been reached yet.



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
