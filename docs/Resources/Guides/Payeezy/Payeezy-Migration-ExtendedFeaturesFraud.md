---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, address-verification, fraud, security-code, security-code-verification, velocity-controls]

---

# Fraud

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

Fraud Configuration settings were previously accessed and managed via the Payeezy Real-time Payment Manager (RPM) and will now be managed in Marketplace (MP) by Fiserv personnel.  These settings will also be available in a read-only view and for reporting purposes in [ClientLine Enterprise (CLX)](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv).  

<!--type: tab
titles: Fraud Settings, Velocity Controls, Address Verification Services (AVS) Filter, Security Code Verification (CVV2) Filter
-->

## Configuration

In Payeezy, fraud filters were set at the merchant level; in Commerce Hub, fraud filters are set at the MID (SiteId) level. 

In Payeezy RPM, a csv file containing positive and negative fraud filters could be uploaded to configure the merchant settings.  This functionality is not available in Marketplace.

In Payeezy RPM, fraud filters could be printed from the screen or downloaded into a csv file.  In CLX, the /rules/list/{clientID} and /rules/details/{rulesID} endpoints provide the information in JSON format.

In Payeezy RPM, you could search a transaction, click on the detail, and create a new fraud filter based on that transaction. This functionality is not available in CLX.

There is currently an unlimited number of values that can be set for each filter; however, a threshold will be determined and implemented at a future date. _Playbook will be updated with the specific number once it has been set._ 

**Additional Negative Filters are available for configuration in CLX:**

|RPM|MP|
|:-----|:-----|
|Bill to Address|Currently not supported|
|Country|Country Profiles|
|Credit Card Number|Add/change card numbers to block|
|Customer Reference|Customer Reference to block|
|Email Address/Domain|Domain Name to block <br> Email address/domain|
|IP Address| IP Addresses to block|
||Cardholder Name to block|
||BIN Block|

<!--
type: tab
-->

## API Structure

In Payeezy, Velocity Controls are applied to a completion or capture of a Pre-Auth; in Commerce Hub they are not. 

The Cumulative Amount Velocity Controls are checked against the totals of previously _**approved**_ transactions only (default).

---

## Configuration

Configuration in Marketplace will allow for the application of controls at a more granular level than Payeezy.  Controls can be assigned by transaction type (Purchase, Refund, etc.) or status (All vs. Approved).

In Payeezy, the currency was set at the terminal/outlet MID vs. each control. In Marketplace, currency is required to be selected for each control. 

---

## Reporting

A canned report for all transactions declined by any type of Fraud Control (including velocity controls) is available in Payeezy Real-time Payment Manager (RPM).  In ClientLine Enterprise (CLX), use the Data Solutions --> Fraud --> Manage menu item to generate a similar report. Select Reviews & Details in the Viewing drop-down list at the top to show all transactions declined due to fraud configurations (settings, velocity controls and filters).

<!--
type: tab
-->

## API Structure

In Payeezy,  Account Verification Services (AVS) Filters were applied to Pre-Auth and Purchase transactions; in Commerce Hub, they are applied to Pre-Auth, Purchase and Tagged Refund transactions.  The AVS Response Codes themselves have changed, but the application of filters remains the same.  See [Commerce Hub Address Verifications Services](?path=docs/Resources/Guides/Fraud/Address-Verification.md) documentation for more information.

In Payeezy, an AVS response code will not be returned for a transaction unless a filter is enabled; in Commerce Hub, a filter does not need to be enabled to get a response.

---

## Configuration

In Payeezy, the configuration was set to filter out / reject the transactions with that response code; in MP, the configuration drives which transactions are allowable (a list of acceptable codes vs. a filter).  One exception is that if no codes are configured they will all be considered acceptable.

**AVS Values have been normalized across cardbrands:**

|Payeezy RPM Value - Description|Marketplace Value|
|:--------------------------|:----------------|
|Y - Street Address, and 5 digit ZIP Code match|Address & Postal Match|
|A - Street Address matches, ZIP Code does not|Address Match, Postal Mismatch|
|B - International street address match, postal code not verified due to incompatible formats|Not Available|
|W - ZIP Code matches, Street Address does not|Address Mismatch, Postal Match|
|P - International postal code match, street address not verified due to incompatible format|Not Available|
|N - No Address or ZIP Code match|Address & Postal Mismatch|
|C - International street address and postal code not verified due to incompatible formats|Not Available|
|R - System unavailable, retry later|Unchecked Unavailable|
|G - Non-US Issuer does not participate|Not Available|
|U - Address information is unavailable for that account number, or the card issuer does not support AVS|Not Available|
|E - Not a mail or phone order|Not Available|
|S - Service not supported|Not Supported|
|2 - Cardholder name, billing address and postal code match|Name & Postal Match|
|3 - Cardholder name and billing postal code match|Name & Address Match|
|4 - Cardholder name and billing address match|Name Match|
|1 - Cardholder name matches|Name Mismatch, Address Match, Postal Match|
|5 - Cardholder name incorrect, billing address and postal code match|Name Mismatch, Address Match, Postal Match|
|6 - Cardholder name incorrect, billing postal code matches|Name Mismatch, PostalMatch|
|7 - Cardholder name incorrect, billing address matches|Name Mismatch, Address Match|
|8 - Cardholder name, billing address and postal code are all incorrect|Name, Address & Postal Mismatch|
|D - International street address and postal code match|Street Addresses & Postal Codes Match (International Only)|
|Q - Bill to address did not pass edit checks|Not Available|
|Z - 5 digit ZIP Code match only|Not Available|

---

## Reporting

A canned report for all transactions declined by any type of Fraud Control (including AVS Filters) is available in Payeezy Real-time Payment Manager (RPM).  In ClientLine Enterprise (CLX), use the Data Solutions --> Fraud --> Manage menu item to generate a similar report. Select Reviews & Details in the Viewing drop-down list at the top to show all transactions declined due to fraud configurations (settings, velocity controls and filters).

<!--
type: tab
-->

## API Structure

The CVV Response Codes have changed, but the application of filters remains the same. See [Commerce Hub Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md) documentation for more information.

In Payeezy, a CVV response code will not be returned for a transaction unless one of these filters is enabled; in Commerce Hub, a filter does not need to be enabled to get a response.

---

## Configuration

In Payeezy, the configuration was set to filter out / reject the transactions with that response code; in MP, the configuration drives which transactions are allowable (a list of acceptable codes vs. a filter).  One exception is that if no codes are configured they will all be considered acceptable.

**CVV values have been normalized in MP:**

|Payeezy RPM Value - Description|Marketplace Value|
|:--------------------------|:----------------|
|N - CVV2 Does not match|Did Not Match|
|P - Card expiration not provided or card does not have valid CVD code|Not Provided|
|S - Merchant indicated that CVV2 is not present on card|Unknown Issuer|
|U - Card issuer is not certified and/or has not provided visa encryption keys|Required Error|
|I - CVV2 code is invalid or empty|Server Error|

---

## Reporting

A canned report for all transactions declined by any type of Fraud Control (including CVV2 Filters) is available in Payeezy Real-time Payment Manager (RPM).  In ClientLine Enterprise (CLX), use the Data Solutions --> Fraud --> Manage menu item to generate a similar report. Select Reviews & Details in the Viewing drop-down list at the top to show all transactions declined due to fraud configurations (settings, velocity controls and filters).

<!-- type: tab-end -->

## See Also

- [Address and Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
