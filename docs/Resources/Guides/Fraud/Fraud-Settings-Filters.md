---
tags: [Fraud, Fraud Filters]
---


# Fraud Filters

Fraud filters enable the merchants to configure filters to control the fraudulent transactions from different channels and across multiple payment methods. Each request request will ran through the configured positive and negative filters to determine whether the payment should be accepted or rejected.

Fraud filters allow the merchant to [accept](#positive-filters) or [reject](#negative-filters) transactions based on card number, customer reference, IP address, billing information and more. The fraud filters configuration is flexible and completely customizable by the merchant and can be setup based on industry, product, promotions, channel, customer details and store abilities.

Positive and negative filters are setup inside of Merchant Configuration and Boarding _(Marketplace in the [ClientLine Enterprise Portal](https://www.businestrack.com)_. Filters are applied by attributes and their respective value.

---

### Positive Filters

Positive filters are used to configure a whitelist and allow the transaction to process based on specific criteria.

<!-- theme: info -->
> Positive filters will override negative filters

| Filter | Variable | Attribute Criteria  |
| ----- | ------ | ----- |
| Card # to unblock | `cardData` | No dashes or spaces |
| Customer Reference(s) | `customerId` | Not case sensitive |

---

### Negative Filters

Negative filters are used to configure a blacklist and block the transaction based on specific criteria.


| Filter | Variable | Attribute Criteria | 
| ----- | ------ | ----- |
| Add/change card numbers to block | `cardData` | No dashes or spaces  |
| Credit BIN Block | `cardData` | 6-11 digit BIN. Will override the negative and positive card number lists. |
| IP Addresses to block |  | |

<!---
| Billing Address | | Not case sensitive |
| Cardholder Name to block | |  |
| Country Profiles |  | |
| Customer Reference to block |  | |
| Debit BIN Block | `cardData`  | 6-11 digit BIN. Will override the negative and positive card number lists. |
| Domain Name to block | `ecomURL` |  |
| Email address/domain |  | |
| Change Country profile for VT | | |
-->

---

## Response Example

```json
code goes here
```

---

## See Also

- [Fraud Settings](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)

<!---
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
-->

---
