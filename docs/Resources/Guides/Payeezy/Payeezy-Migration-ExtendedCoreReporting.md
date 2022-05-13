---

tags: [carat, commerce-hub, enterprise, reporting, card-not-present, payeezy, search-api, reporting-api]

---

# Reporting

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

<!--type: tab
titles: Reporting UI, Reporting APIs, Search APIs
-->

Reporting was previously accessed via the Payeezy Real-time Payment Manager (RPM) and will now be available through ClientLine Enterprise (CLX).  For more details, please see [Commerce Hub Administration / ClientLine Enterprise Training](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv) .

In RPM, there were five pre-defined reports (Activity, Declined, Fraudulent, Deposits - Closed Batches, Deposits - Pending Batches) available with the ability to adjust the date ranges; the new solution, CLX, is a highly flexible reporting engine that allows you to create many customizable reports. 

In General, many more data elements are available for reporting in the new CLX solution than were previously available in RPM.  

## Format and Functionality Overview

|Function| RPM | CLX|
| :--------: | :------------- | :---------- |
|Scope| Information organized by terminal/outlet/MID <br><br> Shows summary with drill down to each transaction level detail <br>  <br>| Site ID is the equivalent element to MID in Commerce Hub <br> <br>  Use the Reporting --> Generic Analysis to create summarized reporting. Results displayed have drill-down capabilities into the underlying transactions (via Reporting --> Search).|
|Filters| Limited to date range, up to six months at a time | All RPM filters plus the extended ability to filter on all additional Commerce Hub elements and a date range of up to 25 months or predefined ranges |
|Delivery|  Download CSV <br> Email report <br> <br> Print <br>| Download as CSV, Excel or JSON <br> Email one-time <br> Schedule a report to email <br> _No print functionality from UI_|
|Actions| Sale transactions allow for Refund and New Transaction|Sale transactions allow for Refund and Void|

<br>

## RPM Comparable Report Creation in CLX

To generate the comparable **RPM Activity** report in CLX, use the Reporting --> Generic Analysis menu item for a summarized report.  See Generic Analysis parameters in table below for information on inputs.  Drill-down capabilities to the transaction level are enabled on this report (via Reporting --> Search).  See Search parameters in table below.

To generate the comparable **RPM Declined** report in CLX, use the Reporting --> Decline Reasons menu item for a summarized report.  See Generic Analysis parameters in table below for information on inputs.  Drill-down capabilities to the transaction level are not enabled from this report.  Use the Reporting --> Decline Details Anlalysis menu item; same parameters as Search in table below.

To generate the comparable **RPM Fraudulent** report in CLX, there are two options:
- Use the Generic Analysis report for a summary view and select the Decline Reson filter to **??????????????**.  The same can be done using the Search menu item.
- Use the Decline Reasons report for a summary view and select the Decline Reson filter to **??????????????**. _Note: The Decline Details Analysis report does not allow for filtering on Decline Reason._

To generate the comparable **RPM Deposits - Closed Batches** report in CLX,

To generate the comparable **RPM Deposits - Pending Batches** report in CLX,

**Comparison of RPM Report Generation and Result Elements to CLX Reports**

*Note: many additional elements are available in the CLX reporting UI, the below is a comparison with what was available in RPM.*

|RPM Element             |CLX Element  |
|:------------------------------------------|:---------------------------------|
|Sub-total: Terminal             |   Generic Analysis (_Select Group by_): Terminal ID |
|Sub-total: Card (brand)         |   Generic Analysis (_Select Group by_): Card Brand |
|Sub-total: Transaction Type     |   Generic Analysis (_Select Group by and on Result Filter_): Type|
|Sub-total: Quantity             |   Generic Analysis (_Results_): # of Txns|
|Sub-total: Currency             |   Generic Analysis (_Select Group by and on Result Filter_): Auth Currency|
|Sub-total: Amount               |   Generic Analysis (_Results_): Amount |
|Sub-total                       |  Generic Analysis: Toggle Sub Total button |
|Txn Detail: Actions             |  Search: Actions|
|Txn Detail: Card Holder         |   Search: Customer Name |
|Txn Detail: Card (brand)        |   Search: Network – always “unknown"|
|Txn Detail: Amount              |   Search: Amount  |
|Txn Detail: Card Number         |   Search: Account #  |
|Txn Detail: Expiry              |  Search: Card Expiry Date  |
|Txn Detail: Transaction Type    |  Search: Transaction   Type – sometimes “unknown”  |
|Txn Detail: Status              | Search: Approval Status – sometimes “unknown”; appears to be often when   the response is an error (vs. a decline)    |
|Txn Detail: Time (Datetime)     |  Search: Txn Date & Time  |
|Txn Detail: Auth                |  Search: Auth Code          |
|Txn Detail: Ref Num             | Search: Merchant Invoice Number  
|Txn Detail: Cust. Ref Num       | Search: Merchant Order ID     |
|Txn Detail: User ID*             | Not Available - *User ID, which indicated whether the transaction was processed via API (with the GatewayID) or via Virtual Terminal (with the User ID) will not be available in CLX reporting.   |

<!--
type: tab
-->

Commerce Hub offers a robust library of reporting APIs that includes Search (itemized data) and Summary level results.  For more details, please see [Commerce Hub Reporting](https://dev-developerstudio.fiserv.com/product/Reporting).

In the Payeezy Reporting API, parameters are sent in the url and results are sent back in XML format with a limit of 10k rows.  Commerce Hub has no limit on records returned.

Payeezy utilizes authentication per user. In Commerce Hub, authentication is by merchant.

In Payeezy, the reporting API was one endpoint and used a report_type parameter to select the information returned; in Commerce Hub, there are multiple available endpoints to retrive the information needed.

## Payeezy Reporting API Comparable Report in Commerce Hub

| Payeezy Reporting API Report Type| Commerce Hub Endpoint | Commerce Hub Additional Information|
| :-------- | :------------- | :---------- |
|Activity| /v1/authorization/search <br> /v1/authorization/summary |[Authorizations](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/authorization/search)|
|Closed Batches | | |
|Pending Batches| | |
|Declined |/v1/authorization/search  <br> /v1/authorization/summary <br> filter approvalCodes = "Declined"|[Authorizations](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/authorization/search)|

## Request and Response Elements Detailed Comparison

<!--type: tab
titles: Request Element Detailed Comparison, Response Element Detailed Comparison
-->

| Payeezy Gateway Direct Parameter | Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |filters.siteIDs | Also known as MID|
|merchant |Not Available | |
|start_date  |fromDate | | 
|end_date  |toDate | | 
|report_type  |Not Available  | |
|group  |summaryBy | When using Summary, specify the fields for the group by: <br> - Network <br> - PaymentMethod <br> - ApprovalCode <br> - Type <br> - MobileWallet <br> - SiteID <br> - TxnDay <br> - TxnWeek <br> - TxnMonth <br> - TxnQuarter <br> - TxnYear  |
|inactive_merchants |Not Available | |
| |limit |The maximum number of records that will be returned |
|  |fields | When using Search (transaction level), there is the capability to list specific fields to be returned instead of the entire set (default behavior) |
| |filters.approvalCodes | |
| |filters.paymentMethods | |
| |filters.networks | |
| |filters.types | Transaction Type ENUM |
| |filters.authCode | |
| |filters.first6 | |
| |filters.last4 | |
| |filters.dateType | |

<!--
type: tab
-->

*Note: many additional elements are available in the Reporting API, the below is a comparison with what was available in RPM.*

|Payeezy Reporting API Element     | In Commerce Hub Response? (Y/N)        |Commerce Hub Element  |
|:------------------------------------------|:---------------------------------:|:---------------------|
|Name        | Y|  customerName |
|Account Name| N| |
| Ref Num   | N| |
|Cust. Ref Num   | Y  | ordNo|
| Card Type         | Y     | network  |
| Status       | Y  | approvalCode   |
| Auth No          | Y    |  authCode  |
| Time   | Y |  transactionDate + transactionTime |
| Merchant Name  | N| |
| Terminal Name   | Y  |  terminalId  |
|Expiry           | Y     |  cardExpiryDate          |
| Gateway  | N| |
|Merchant Code| N| |
|Tag  | Y| trckrid |
|Amount  | Y|amount|
|Currency  | Y | currency|
|Card Number  | Y| accountNumber|
|Code  | Y| type|
|Refernce 3  | Y| mrchTranId|
|UserId| N| |
|Bank Response Code  | Y| assocRespCode _(comparable)_|
|ETG Response Code| N| |

<!-- type: tab-end -->

<!--
type: tab
-->

In Commerce Hub, the Endpoint [/v1/authorizations/search](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/authorization/search) will provide a list of authorization transactions (pre-settle) and their attributes based on optional filter criteria. For more details on the expanded capabilities, please see [Commerce Hub Reporting](https://dev-developerstudio.fiserv.com/product/Reporting).

In Payeezy, parameters are sent in the url and the results are sent back in the CSV format with a limit of 10k rows per response.  Commerce Hub is an API request and response with no limit on records returned.

Payeezy utilizes authentication per user. Commerce Hub authentication is by merchant.

The Payeezy search allows filtering based on criteria related to **???cardholder name**, reference numbers, transaction tags and full card numbers; Commerce Hub does not allow searching on those elements.  Commerce Hub allows filtering on payment method, networks, type, siteIDs and auth code in addition to first 6 and last 4 of the card number.   

Commerce Hub does provide a [summary search function](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/authorization/summary).

<!--type: tab
titles: Request Element Detailed Comparison, Response Element Detailed Comparison
-->

**Request Elements Detailed Comparison**

| Payeezy Gateway Direct Element| Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |filters.siteIDs | Also known as MID|
|merchant |Not Available | |
|terminal |Not Available | |
|start_date  |fromDate | | 
|end_date  |toDate | | 
|search_field   |Not Available  | |
|search  |Not Available  | |
|status  |filters.approvalCodes | |
|amount_from, amount_to  |Not Available |  |
|inactive_merchants |Not Available |  |
|offset| Not Avalaible | No longer neccessary|
| |limit |The maximum number of records that will be returned |
|  |fields | When using Search (transaction level), there is the capability to list specific fields to be returned instead of the entire set (default behavior) |
| |filters.approvalCodes | |
| |filters.paymentMethods | |
| |filters.networks | |
| |filters.types | Transaction Type ENUM |
| |filters.authCode | |
| |filters.first6 | |
| |filters.last4 | |

<!--
type: tab
-->

**Response Elements Detailed Comparison**

*Note: many additional elements are available in the Reporting API, the below is a comparison with what was available in RPM.*

|Payeezy Reporting API Element     | In Commerce Hub Response? (Y/N)        |Commerce Hub Element  |
|:------------------------------------------|:---------------------------------:|:---------------------|
|Name        | Y|  customerName |
|Account Name| N| |
| Ref Num   | N| |
|Cust. Ref Num   | Y  | ordNo|
| Card Type         | Y     | network  |
| Status       | Y  | approvalCode   |
| Auth No          | Y    |  authCode  |
| Time   | Y |  transactionDate + transactionTime |
| Merchant Name  | N| |
| Terminal Name   | Y  |  terminalId  |
|Expiry           | Y     |  cardExpiryDate          |
| Gateway  | N| |
|Merchant Code| N| |
|Tag  | Y| trckrid |
|Amount  | Y|amount|
|Currency  | Y | currency|
|Card Number  | Y| accountNumber|
|Code  | Y| type|
|Refernce 3  | Y| mrchTranId|
|UserId| N| |
|Bank Response Code  | Y| assocRespCode _(comparable)_|
|ETG Response Code| N| |


<!-- type: tab-end -->

<!-- type: tab-end -->

---

## See Also

- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)



---
