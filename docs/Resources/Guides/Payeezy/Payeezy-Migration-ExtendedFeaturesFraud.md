---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, address-verification, fraud, security-code, security-code-verification, velocity-controls]

---

# Fraud

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

<!--type: tab
titles: Fraud Settings, Velocity Controls, Address Verification Services (AVS) Filter, Security Code Verification (CVV2) Filter
-->

## Configuration

In Payeezy Real-time Payment Manager (RPM), a csv file containing positive and negative fraud filters could be uploaded to configure the MID.  This funcationality is not available in ClientLine Enterprise (CLX).

In Payeezy RPM, fraud filters could be printed from the screen or downloaded into a csv file.  In CLX, the /rules/list/{clientID} and /rules/details/{rulesID} endpoints provide the information in JSON format.

**Additional Negative Filters are available in CLX:**

|RPM|CLX|
|:-----|:-----|
|Bill to Address|Bill to Address|
|Country|Country Profiles|
|Credit Card Number|Add/change card numbers to block|
|Customer Reference|Customer Reference to block|
|Email Address/Domain|Domain Name to block <br> Email address/domain|
|IP Address| IP Addresses to block|
||Cardholder Name to block|
||Credit BIN Block|
||Debit BIN Block|
||Lockout Time|
||Risk Setting|


<!--
type: tab
-->

## API Structure

In Payeezy, Velocity Controls are applied to Tagged Pre-Auth Completion/Capture; in Commerce Hub they are not. 

In Payeezy, Velocity Controls are not applied to Tagged Refunds; in Commerce Hub they are.

The Cumulative Amount Velocity Controls are only checked against the totals of previously approved transactions.

## Configuration

Configuration in [ClientLine Enterprise (CLX)](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv) does not allow the application of Cumulative Amount controls to all transactions; they are applied to approved only.

In Payeezy, the currency was set at the terminal/outlet MID vs. each control. In CLX, currency is required to be selected for each control. 

## Reporting

A canned report for all transactions declined by any type of Fraud Control (including velocity controls) is available in Payeezy Real-time Payment Manager (RPM).  In ClientLine Enterprise (CLX), use the Data Solutions --> Fraud --> Manage menu item to generate a similar report. Select Reviews & Details in the Viewing drop-down list at the top to show all transactions declined due to fraud configurations (settings, velocity controls and filters).

<!--
type: tab
-->

## API Structure

In Payeezy Gateway,  Account Verification Services (AVS) Filters were applied to Pre-Auth and Purchase transactions; in Commerce Hub, they are applied to Pre-Auth, Purchase and Tagged Refund transactions.  The AVS Response Codes themselves have changed, but the application of filters remains the same.  See [Commerce Hub Address Verifications Services](?path=docs/Resources/Guides/Fraud/Address-Verification.md) documentation for more information.

In Payeezy Gateway, an AVS response code will not be returned for a transaction unless a filter is enabled; in Commerce Hub, a filter does not need to be enabled to get a response.

## Configuration

In Payeezy, the AVS Filters were applied across all card brands; in [ClientLine Enterprise (CLX)](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv), the AVS Filters are set for each of the four major card brands separately.

In Payeezy, the configuration was set to filter out / reject the transactions with that response code; in CLX, the configuration drives which transactions are allowable (a list of acceptable codes vs. a filter).  One exception is that if no codes are configured they will all be considered acceptable.

In RPM, you could search a transaction, click on the detail, andd create a new fraud filter based on that transaction. This funcationality is not available in CLX.

## Reporting

A canned report for all transactions declined by any type of Fraud Control (including AVS Filters) is available in Payeezy Real-time Payment Manager (RPM).  In ClientLine Enterprise (CLX), use the Data Solutions --> Fraud --> Manage menu item to generate a similar report. Select Reviews & Details in the Viewing drop-down list at the top to show all transactions declined due to fraud configurations (settings, velocity controls and filters).

<!--
type: tab
-->

## API Structure

No change in Filters.  The CVV Response Codes themselves have changed, but the application of filters remains the same. See [Commerce Hub Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md) documentation for more information.

In Payeezy Gateway, an CVV response code will not be returned for a transaction unless one of these filters is enabled; in Commerce Hub, a filter does not need to be enabled to get a response.

## Configuration

In Payeezy, the CVV Filters were applied across all card brands, in [ClientLine Enterprise (CLX)](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv), the CVV Filters are set for each of the 4 major card brands separately.

In Payeezy, the configuration was set to filter out / reject the transactions with that response code; in CLX, the configuration drives which transactions are allowable (a list of acceptable codes vs. a filter).  One exception is that if no codes are configured they will all be considered acceptable.

In RPM, you could search a transaction, click on the detail, andd create a new fraud filter based on that transaction. This funcationality is not available in CLX.

## Reporting

A canned report for all transactions declined by any type of Fraud Control (including CVV2 Filters) is available in Payeezy Real-time Payment Manager (RPM).  In ClientLine Enterprise (CLX), use the Data Solutions --> Fraud --> Manage menu item to generate a similar report. Select Reviews & Details in the Viewing drop-down list at the top to show all transactions declined due to fraud configurations (settings, velocity controls and filters).

<!-- type: tab-end -->

## See Also

- [Address and Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
