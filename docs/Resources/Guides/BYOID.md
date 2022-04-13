---
tags: [carat, commerce-hub, enterprise, merchant-identifier, order-identifier, merchant-id, terminal-id, mid, tid, transaction-id, order-id]
---

# Bring Your Own Identifier

Commerce Hub supports the ability for mercant's to use thier own Merchant Identifiers and Order Identifiers. This allows a seemless integration into existing merchant APIs and databases.

## Merchant Identifiers

Merchant Identifiers allow a merchant to use their existing identifier for a location in the `merchantId` and their terminal for `terminalId` to submit transactions to Commerce Hub.

<!-- theme: info -->
> The merchant account will need to be boarded with the merchant specific identifiers.

---

## Order Identifiers

<!-- theme: danger -->
> We are enhancing Commerce Hub to support Order Identifiers and the documents related to the features will be released soon.

Order Identifiers allow a merchant to use their existing `merchantTransactionID` or `merchantOrderID` to submit secondary transactions; refund, cancel, inquiry, instead of using the Commerce Hub generated `transactionID` or `orderID`.

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Merchant Details](?path=docs/Resources/Master-Data/Merchant-Details.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
