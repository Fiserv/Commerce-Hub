---
tags: [carat, commerce-hub, card-not-present, card-present, hash, primary-transactions, secondary-transactions]
---

# Transaction Types

## Overview

The Commerce Hub API allows a merchant to create, inquire, and finalize payment transactions. Our API has two transaction types; primary and secondary.

### Primary Transactions

Primary transactions include; [charge](?path=docs/Resources/API-Documents/Payments/Charges.md), [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) and [information lookup](?path=docs/Resources/API-Documents/Payments/Information-Lookup.md) requests that are submitted without reference to a prior transaction.

### Secondary Transactions

Secondary Transactions include; [refund](?path=docs/Resources/API-Documents/Payments/Refund.md), [void](?path=docs/Resources/API-Documents/Payments/Cancel.md), [capture](?path=docs/Resources/API-Documents/Payments/Capture.md), and [inquiry](?path=ocs/Resources/API-Documents/Payments/Inquiry.md) using the `transactionId` or `orderId` from a prior request.

- 'transactionID`: Transaction identifier returned in the *transactionProcessingDetails* of the *gatewayResponse*.

<!-- theme: example -->
>**Example Endpoint:** `/payments/v1/charges/{transactionId}/capture`

- `orderID`: Order identifier returned in the *gatewayResponse*.

<!-- theme: example -->
>**Example Endpoint:** `/payments/v1/charges/orders/{orderId}/capture`

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)

---
