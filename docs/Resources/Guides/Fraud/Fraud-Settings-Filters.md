---
tags: [Fraud, Card Not Present, Card Present, In-Person, Online]
---


# Fraud Filters

Fraud filters enable the merchants to configure filters to control the fraudulent transactions from different channels and across multiple payment methods. Each charge request will run through the configured [positive](#positive-filters) and [negative](#negative-filters) rules to determine whether the payment should be accepted or rejected.

The fraud filters configuration is flexible and completely customizable by the merchant and can be setup based on industry, product, sales or promotions, channel, customer details and store abilities.


---

## Setting Attributes

Fraud Filters are applied by [transaction controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) inside of Marketplace. Filters are applied by attributes and their respective value.

### Add Attributes

Type the attribute in the applicable search box and click the green plus button. Once all attributes are added, click the Save button at the bottom of the page. 

### Delete Attributes

Type the attribute in the applicable search box, select it and click the red minus button. Once all desired attributes are deleted, click the Save button at the bottom of the page. 

---

## Positive Filters

Positive filters are used to configure a whitelist and allow the transaction to process based on specific criteria.

<!-- theme: info -->
> Positive filters will override negative filters

| Filter | Variable | Attribute Criteria  |
| ----- | ------ | ----- |
| Card # to unblock | `cardData` | No dashes or spaces |
| Customer Reference(s) | `customerId` | Not case sensitive |

---

## Negative Filters

Negative filters are used to configure a blacklist and block the transaction based on specific criteria.

- **Lockout Time:** Lockout time fraud filter help merchant to configure how long any automatically blocked transaction will continue to be blocked from same card. The cardholder can then attempt approval again when the lock out time has expired.
- **Risk Setting:** Risk Settings (Fraud Score Threshold), fraud filter enablea a merchant to setup the transaction fraud analysis acceptable score range. The range is 1-1000, with the default being 500.

<!---
- **Change Country profile for VT:**
-->

| Filter | Variable | Attribute Criteria | 
| ----- | ------ | ----- |
| Billing Address | | Not case sensitive |
| Cardholder Name to block | |  |
| Add/change card numbers to block | `cardData` | No dashes or spaces  |
| Country Profiles |  | |
| Credit BIN Block | `cardData` | 6-11 digit BIN. Will override the negative and positive card number lists. |
| Customer Reference to block |  | |
| Debit BIN Block | `cardData`  | 6-11 digit BIN. Will override the negative and positive card number lists. |
| Domain Name to block | `ecomURL` |  |
| Email address/domain |  | |
| IP Addresses to block |  | |

<!---
| Change Country profile for VT | | |
-->
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
