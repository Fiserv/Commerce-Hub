---
tags: [carat, commerce-hub, card-not-present, card-present, hash, primary-transactions, secondary-transactions]
---

# Transaction Types

## Overview

The Commerce Hub API allows a merchant to create, inquire, and finalize payment transactions. Our API has two transaction types; primary and secondary.

### Primary Transactions

Primary transactions include; [charge](../API-Documents/Payments/Charges.md), [verification](../API-Documents/Payments_VAS/Verification.md) and [information lookup](../API-Documents/Payments_VAS/Information-Lookup.md) requests that are submitted without reference to a prior transaction.

### Secondary Transactions

Secondary Transactions include; [refund](../API-Documents/Payments/Refund.md), [void](../API-Documents/Payments/Cancel.md), [capture](../API-Documents/Payments/Capture.md), and [inquiry](../API-Documents/Payments/Inquiry.md) using the `transactionId` or `orderId` from a prior request.

- 'transactionID`: Transaction identifier returned in the *transactionProcessingDetails* of the *gatewayResponse*.

<!-- theme: example -->
>**Example Endpoint:** `/payments/v1/charges/{transactionId}/capture`

- `orderID`: Order identifier returned in the *gatewayResponse*.

<!-- theme: example -->
>**Example Endpoint:** `/payments/v1/charges/orders/{orderId}/capture`

---

## See Also

- [API Explorer](url)