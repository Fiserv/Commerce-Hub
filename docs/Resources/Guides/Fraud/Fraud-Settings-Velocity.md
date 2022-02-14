---
tags: [carat, commerce-hub, enterprise, authorizations, card-not-present, fraud, velocity-controls, velocity-settings]
---


# Velocity Controls

Velocity settings determine which transactions Commerce Hub allows to proceed to authorization. A single transaction can be controlled by a minimum or maximum sale amount. Groups of transactions can be evaluated by time period or total dollar amount thresholds that, when exceeded, Commerce Hub will prevent all future transactions from processing. These controls allow a merchant to monitor / restrict transaction flow by IP address, by card number, and amount right down to the hour, per transaction type.

## Settings

The following settings can be configured for Velocity Controls:

## Minimum Sale $  

Set this to determine the minimum dollar amount to allow for each transaction; when triggered, the transaction will receive a response – below minimum sale.

## Maximum $ of Transactions 

This allows you to set the maximum dollar amount, per transaction type, within a specified time period (up to 24 hours or up to 7 days) and whether to decline (transactions are not sent out for authorization) or not; when triggered, the transaction will receive a response  merchant volume exceeded.

<!-- theme: Caution -->
>This will limit the total amount you could process on the terminal during the designated period.

## Maximum # of Transactions 

This allows you to set the maximum number of transactions, per transaction type, within a specified time period (up to 24 hours or up to 7 days) and whether to decline (transactions are not sent out for authorization) or not; when triggered, the transaction will receive response that the merchant volume exceeded. 

<!-- theme: Caution -->
>This will limit the total transactions you could process on the terminal during the designated period.  

## Maximum $ Amount per Card/Check No. 

This allows you to set the maximum dollar amount allowed per card or check number*, per transaction type,  during a specified time period (up to 24 hours or up to 7 days) and whether to decline (transactions are not sent out for authorization) or not; when triggered, the transaction will receive a response of card volume exceeded.

## Maximum # Transactions per Card/Check No. 

This allows you to set the maximum number of transactions per card or check number*, per transaction type, during a specified time period (up to 24 hours or up to 7 days) and whether to decline (transactions are not sent out for authorization) or not; when triggered, the transaction will receive a response card volume exceeded.

## Maximum # Transactions per IP 

This allows you to set the maximum number of transactions allowed per individual IP address, per transaction type, during a specified time period (up to 24 hours or up to 7 days) and whether to decline or not.

## Maximum Sale $  

Set this to determine the maximum dollar amount to allow for each transaction; when triggered, the transaction will receive a response of maximum sale exceeded.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
