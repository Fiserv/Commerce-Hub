---
tags: [carat, commerce-hub, enterprise, fraud, card-not-present, fraud-filters]
---


# Fraud Filters

Fraud filters enable the merchants to configure filters to control the fraudulent transactions from different channels and across multiple payment methods. Each charge request will run through the configured [positive](#positive-filters) and [negative](#negative-filters) rules to determine whether the payment should be accepted or rejected.

The fraud filters configuration is flexible and completely customizable by the merchant and can be setup based on industry, product, sales or promotions, channel, customer details and store abilities.

<!-- theme: danger -->
> We are enhancing Commerce Hub to include Fraud Filter support and the documents related to the features will be released soon.

---

## Positive Filters

Positive filters are used to configure a whitelist and allow the transaction to process based on specific criteria.

<!-- theme: info -->
> Positive filters will override negative filters

| Filter | Variable | Case Sensitive |
| ----- | ------ | ----- |
| Card Number | `cardData` | N/A |
| Customer Reference | `customerId` | NO |

---

## Negative Filters

Negative filters are used to configure a blacklist and block the transaction based on specific criteria.

| Filter | Variable | Case Sensitive |
| ----- | ------ | ----- |
| Billing Address | `billingAddress` | NO |
| Cardholder Name to block | `cardholdernametoblock` |  |
| Add/change card numbers to block | `addchangecardnumberstoblock` |  |
| Country Profiles | `countryprofiles` | NO |
| Credit BIN Block | `creditbinblock` |  |
| Customer Reference to block | `customerreferencetoblock` | |
| Debit BIN Block | `debitbinblock` | N/A |
| Domain Name to block | `domainnametoblock` |  |
| Email address/domain | `emailaddressdomain` | |
| IP Addresses to block | `ipaddressestoblock` | |
| Lockout Time | `lockouttime` | |
| Risk Setting | `risksetting` | |
| Change Country profile for VT | |


---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
