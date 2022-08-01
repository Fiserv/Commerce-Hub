---
tags: [Card Not Present, Fraud, Fraud Settings]
---
 
# Fraud Settings

<!-- theme: danger --> 
> We are enhancing Commerce Hub to include additional fraud settings support and the documents related to the features will be released soon.

Commerce Hub implements various transaction and fraud controls that allows merchants to monitor potentially fraudulent transactions including [positive and negative filters], [velocity controls], and [transaction restrictions], that will automatically accept or reject transactions. Unlike [AVS and CVV filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md), these will block transactions before any authorization attempt is made.

---

## Setup Fraud Settings 

To setup Fraud Settings in Marketplace, complete the following steps:

#### Step 1: Access Marketplace

Marketplace is accessed through the [Business Track Enterprise Portal](https://www.businesstrack.com).

#### Step 2: Access Transaction Controls 

Select either the Card Not Present Accounts or Card Present Accounts tab. From the account records, select the account and click Transaction Controls. 

#### Step 3: Choose a Profile

Click the Assign Profile link and select the profile that you want to assign transaction controls or [create a new profile](?path=docs/Resources/Guides/Enterprise-Portal/Profiles.md) and click the Assign button.

<!-- theme: info -->
> You can also change the profile associated by clicking the name of the profile and assigning a different one. 

#### Step 4: Setup Fraud Settings

Select the Fraud Settings tab on the left side. Select the [Fraud Settings](#fraud-settings) from the list to enable/disable the functions and features. Enable the fraud settings by selecting Enable on Commercehub checkbox and enabling the features or filters.

#### Step 5: Save Settings
Click the Save button and click the Home icon to return to the main screen.

---

## Fraud Settings

Enable Commerce Hub's fraud filters to help reduce fraudulent transactions.

<!-- type: row -->

<!-- type: card
title: Address and Security Code
description: The address and security code filters provide a merchant the ability to enable various transaction filters using the address and security code verification.
link: ?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md
-->

<!-- type: card
title: Positive/Negative Filters
description: Positive filters are used to configure a whitelist and allow the transaction to process based on specific criteria. Negative filters are used to configure a blacklist and block the transaction based on specific criteria.
link: ?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md
-->

<!-- type: card
title: Transaction Restrictions
description: The Transaction Restriction settings can be enabled for duplicate transaction detection. Restrictions are applied by transaction controls inside of Marketplace.
link: ?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md
-->

<!-- type: card
title: Velocity Settings
description: Velocity Settings determine which transactions Commerce Hub allows to proceed to authorization. 
link: 
-->

<!-- type: row-end -->

---
