---
tags: [carat, commerce-hub, enterprise, card-not-present, fraud, fraud-settings]
---

# Transaction Controls

<!-- theme: danger -->
> We are enhancing Commerce Hub to include additional fraud settings support and the documents related to the features will be released soon.

Commerce Hub implements various transaction and fraud controls that allows merchants to monitor potentially fraudulent transactions including [positive and negative filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md), [velocity controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md), and [transaction restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md), that will automatically accept or reject transactions. Unlike [AVS and CVV filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md), these will block transactions before any authorization attempt is made.

---

## Setup Transaction Controls

To setup Transaction Controls in Marketplace, complete the following steps:

### Step 1: Access Marketplace

Marketplace is accessed throught the Business Track Enterprise Portal.

### Step 2: Access Transaction Controls 

From the Profile Settings dropdown menu, click Transaction Controls. 

### Step 3: Choose a Profile

Click in the Profile Name box and select the profile that you want to assign transaction controls or [create a new profile](?path=docs/Resources/Guides/Enterprise-Portal/Profiles.md). 

### Step 4: Setup Transaction Controls

Using the tabs on the left side, setup the following transaction controls;

- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md): Filters to reject transaction based on address and security code responses.
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md): Positive and negative filters to approve or reject transactions.
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md): Enable duplicate transaction detection and restrict refunds.
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md): Reject transactions based on minimum and maximum limits. 


### Step 5: Save Settings
Click the Save button.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Account Profiles](?path=docs/Resources/Guides/Enterprise-Portal/Profiles.md)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
