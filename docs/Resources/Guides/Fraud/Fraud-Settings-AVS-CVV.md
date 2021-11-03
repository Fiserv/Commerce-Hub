---
tags: [carat, commerce-hub, enterprise, card-not-present, fraud, address-and-security-code-filters, fraud-filters]
---


# Address and Security Code Filters

The address and security code filters provide a merchant the ability to enable various transaction filters using the [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification. Commerce Hub will reject and automatically reverse the submitted transaction if the conditions for any of these filters are met.

<!-- theme: danger -->
> We are enhancing Commerce Hub to include address and security code verification filters support and the documents related to the features will be released soon.

### Note: 

Not all banks return a response when cardholder verification data is sent and a filter will not cover this situation.

It’s up to the issuer as to whether or not the expiration date is checked. Some check and some don’t. 

Cardholder Name is another piece of data checked by the issuer. 
AVS responses can vary based on the issuer. This is why certain response codes state “not supported by issuer.”

Part 1-Steps to enable
Part 2- What are the fields

## Create a New Profile

To create a new profile in Marketplace, create the following steps:

1. Log in to Marketplace.
2. Click Board to create a new account.
3. Add the necessary credentials for the new account. 
4. The account is now created. 

## Marketplace Fields

### Service Configs

Service configs are the details that are required for a particular account.

### Fraud Settings

Settings for managing fraud for this account.

### Summary

### Assign Profiles

### How to enable Marketplace

To set up a filter, complete the following:

1. Log in to BusinessTrack and select Marketplace.
Create a profile and assign a profile to a merchant account  Link to the profile article.
2. Go to Administration.
3. Select Terminals.
4. Select the terminal (outlet) the filter will be set up on.
5. Select the "AVS Filters" tab.
6. Select the checkboxes of the responses for which you would like the filter to locally decline transaction.
7. Click Update.

### Example 1: 

To reject all transactions where the "No Address or ZIP Code match" in the response was returned, select the "No Address or ZIP Code match" checkbox.

### Example 2: 

To reject all transactions where the "No Address or ZIP Code match" and "System unavailable, retry later" responses are returned, select the "No Address or ZIP Code match" and "System unavailable, retry later" checkboxes.

For a list of AVS responses, click here.

Please note that not all banks return a response when cardholder verification data is sent and a filter will not cover this situation.

A few reminders:

It’s up to the issuer as to whether or not the expiration date is checked. Some check and some don’t. That’s really not up to Payeezy Gateway.
Cardholder Name is another piece of data checked by the issuer. It’s not up to Payeezy Gateway.
AVS responses can vary based on the issuer. This is why certain response codes state “not supported by issuer.”


Merchant administrators have the ability to set up a filter for CVD, CVV2, CVV when logged into First Data Payeezy Gateway Real-time Payment Manager (RPM).

1. Log in to Commerce Hub.
2. Go to Administration.
3. Select Terminals.
4. Select the terminal (outlet) the filter will be set up on
(Terminal Type must be equal to
"E-Commerce Transactions CVV2"
OR
"Mail Order/ Telephone Order CVV2")
5. Select the "CVV2 Filters" tab
From the CVV2 list, select the checkboxes of the responses for which you would like the filter to drop the transaction.
6. Click Update.

### Example 1: 

To reject all transactions where the "N" response was returned, select the "CVV2 Does Not Match" checkbox.

### Example 2: 

To reject all transactions where the "N" and "U" responses are returned, select the "CVV2 Does Not Match" and "Merchant indicated that CVV2 is not present on card" checkboxes.

For a list of CVD responses, click here.



---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---

