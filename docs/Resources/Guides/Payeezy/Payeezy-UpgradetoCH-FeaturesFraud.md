---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, address-verification, fraud, security-code, security-code-verification, velocity-controls]

---

# Fraud

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

Fraud Configuration settings were previously accessed and managed via the Payeezy Real-time Payment Manager (RPM) and will now be managed by Fiserv personnel.  These settings will also be available in a read-only view and for reporting purposes in [ClientLine Enterprise (CLX)](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv). 

System level fraud controls are regulated and managed by the Fiserv Fraud Team.

<!--type: tab
titles: Fraud Filters, Velocity Controls, Address Verification Services (AVS) Filter, Security Code Verification (CVV2) Filter
-->

## Configuration

In Payeezy, fraud filters were set at the merchant level; in Commerce Hub, fraud filters are set at the MID (SiteId) level. 

In Payeezy RPM, a csv file containing positive and negative fraud filters could be uploaded to configure the merchant settings.  This functionality is not available in CLX.

In Payeezy RPM, fraud filters could be printed from the screen or downloaded into a csv file.  In CLX, the /rules/list/{clientID} and /rules/details/{rulesID} endpoints provide the information in JSON format.

In Payeezy RPM, you could search a transaction, click on the detail, and create a new fraud filter based on that transaction. This functionality is not available in CLX.

There is currently an unlimited number of values that can be set for each filter; however, a threshold will be determined and implemented at a future date. _Playbook will be updated with the specific number once it has been set._ 

**Negative Filters available for configuration in CLX:**

|RPM|CLX|
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

In Payeezy, Velocity Controls are applied to a completion or capture of a Pre-Auth; in Commerce Hub, they are not. 

The Cumulative Amount Velocity Controls are checked against the totals of previously _**approved**_ transactions only (default).

---

## Configuration

Configuration in CLX will allow for the application of controls at a more granular level than Payeezy.  Controls can be assigned by transaction type (Purchase, Refund, etc.) or status (All vs. Approved).

In Payeezy, the currency was set at the terminal/outlet MID versus each control. In CLX, currency is required to be selected for each control. 

---

## Reporting

A canned report for all transactions declined by any type of Fraud Control (including velocity controls) is available in Payeezy Real-time Payment Manager (RPM).  In ClientLine Enterprise (CLX), use the Data Solutions --> Fraud --> Manage menu item to generate a similar report. Select Reviews & Details in the Viewing drop-down list at the top to show all transactions declined due to fraud configurations (settings, velocity controls and filters).

<!--
type: tab
-->

## API Structure

In Payeezy,  Account Verification Services (AVS) Filters were applied to Pre-Auth and Purchase transactions; in Commerce Hub, they are applied to Pre-Auth, Purchase and Tagged Refund transactions.  

In Commerce Hub, the AVS Response Codes have changed, but the application of filters remains the same.  See [Commerce Hub Address Verifications Services](?path=docs/Resources/Guides/Fraud/Address-Verification.md) documentation for more information.

---

## Configuration

AVS must be enabled in CLX in order to receive a response code.

In CLX, if no codes are configured, they will all be considered acceptable.

**AVS Values have been normalized across cardbrands:**

|Payeezy RPM Value - Description|CLX Value|
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

In Commerce Hub, the CVV Response Codes have changed, but the application of filters remains the same. See [Commerce Hub Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md) documentation for more information.

If CVV is enabled, but the element is not included in the request API, a response code will be returned.

---

## Configuration

In Payeezy, CVV configuration was at the terminal level and enabled by selecting terminal type of Mail Order/Telephone Order (CVV2) or E-Commerce Transaction (CVV2); in CLX, CVV must be enabled and is set at the MID level.

In CLX, if no codes are configured, they will all be considered acceptable.

**CVV values have been normalized in CLX:**

|Payeezy RPM Value - Description|CLX Value|
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

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [Address and Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
