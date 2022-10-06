---
tags: [Private Label, Payment Sources]
---


# Private Label

<!-- theme: danger -->
>We are enhancing Commerce Hub to support the Private Label and the documents related to the features will be released soon.

A private label credit card is a store-branded credit card that is intended for use at a specific store. Private label credit cards do not carry a credit card network logo such as Amex or Discover and generally are not accepted by other merchants.

- Private label credit cards (PLCC) is a type of credit card provided by merchants to their customers and is typically accepted only at the merchant locations. Merchants partner with PLCC issuers like Citi, Synchrony etc. to qualify customers and extend them a credit card account.
- PLCC allows merchants to boost customer sales, increase brand awareness and customer loyalty.
- Customer can use PLCC cards like any other credit card at merchant locations. Like a credit card, any balance that has not been paid in full will accrue interest on the account
- 
OVERVIEW DRAFT

- Fiserv supports processing payments of PLCC cards issued by Citi.
- When boarding merchant locations, CITI PLCC entitlement must be enabled for the location to accept PLCC cards. Please work with your AM/RM to turn on this entitlement.
- The following transaction types are supported
- Authorization only
- Authorization reversal
- Refund
- Merchant uses the same endpoints as regular credit card transactions, /payments/v1/charges, /payments/v1/cancel, /payments/v1/refund to submit PLCC transactions.
- Currently, only direct send settlement model is supported. Merchant must submit the settlement batch file directly to Citi. Please work with your AM/RM and Citi resources to complete this activity.
- Capture/Completion transactions are supported only through settlement file.
- Online refund transactions are open refunds. They do not have reference to capture/completion transactions that have been submitted by merchant in the settlement file directly to Citi.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
