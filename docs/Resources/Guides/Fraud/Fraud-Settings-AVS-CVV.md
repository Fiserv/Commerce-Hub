---
tags: [Address Verification, AVS, Security Code Verification, CVV, Fraud]
---

# Address and Security Code Filters

The address and security code filters provide a merchant the ability to enable various transaction filters using the [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification requests. Commerce Hub will reject and automatically reverse the submitted transaction if the conditions for any of these filters are met.

Filters are applied by inside of Merchant Configuration and Boarding _(Marketplace in the ClientLine Enterprise Portal)_. Filters are applied by attributes and the  respective response values.

<!-- theme: info -->
> Not all banks return a response when cardholder verification data is sent and a filter will not cover this situation.

---

## Response Example

```json
code goes here
```

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Fraud Settings](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md)
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

<!---
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
-->

---
