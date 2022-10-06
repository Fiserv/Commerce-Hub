---
tags: [Card Not Present, Fraud, Velocity Controls]
---

# Velocity Controls

Velocity control settings determine which transactions Commerce Hub allows to proceed to authorization. A single transaction can be controlled by a minimum or maximum sale amount or number of transactions. Groups of transactions are evaluated by time period for the quantity or total dollar amount thresholds that, when exceeded  Commerce Hub will prevent all future transactions from processing. These controls allow a merchant to monitor and restrict transactions by IP address, account number, or amount.

Transaction Restrictions are setup inside of Merchant Configuration and Boarding _(Marketplace in the [ClientLine Enterprise Portal](https://www.businestrack.com))_. Filters are applied by attributes and their respective value.

---

## Response Example

```json
code goes here
```


---

## See Also

- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

<!---
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
-->


---
