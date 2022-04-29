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

In RPM, there were five pre-defined reports available with the ability to adjust the date ranges; the new solution, CLX, is a highly flexible reporting engine that allows you to create many customizable reports. 

In General, many more data elements are available for reporting in the new CLX solution than were previously available in RPM.  

**Format and Functionality Overview**

|Function| RPM | CLX|
| :--------: | :------------- | :---------- |
|Scope| Information organizaed by terminal/outlet/MID <br> <br> Shows summary with drill down to each transaction level detail <br> <br> <br>| No MID grouping <br> <br>No summary/rolled up view – queries result in all transactions that meet the criteria.  The Generic Analysis (vs. Search) will allow for grouping, but currently the drill down capability to individual transactions that make up the result isn’t enabled.|
|Filters| Limited to date range, up to six months at a time | All RPM filters plus the extended ability to filter on all elements and a date range of up to **????**|
|Delivery|  Download CSV <br> Email report <br> <br> Print <br>| Download as CSV, Excel or JSON <br> Email one-time <br> Schedule a report to email <br> _No print functionality from UI_|
|Actions| Sale transactions allow for Refund and New Transaction|Sale transactions allow for Refund and Void|

<br>

**Report Result Element Comparison**

*Note: many additional elements are available in the CLX reporting UI, the below is a comparison with what was available in RPM.*

|RPM Element             |CLX Element  |
|:------------------------------------------|:---------------------------------|
|Sub-total: Terminal             |   No Sub-total/summary |
|Sub-total: Card (brand)         |   No Sub-total/summary|
|Sub-total: Transaction Type     |    No Sub-total/summary|
|Sub-total: Quantity             |    No Sub-total/summary|
|Sub-total: Currency             |   No Sub-total/summary|
|Sub-total: Amount               |   No Sub-total/summary |
|Txn Detail: Actions             |  Actions|
|Txn Detail: Card Holder         |   Customer Name |
|Txn Detail: Card (brand)        |   Network – always “unknown"|
|Txn Detail: Amount              |   Amount  |
|Txn Detail: Card Number         |   Account #  |
|Txn Detail: Expiry              |  Card Expiry Date  |
|Txn Detail: Transaction Type    |  Transaction   Type – sometimes “unknown”  |
|Txn Detail: Status              | Approval Status – sometimes “unknown”; appears to be often when   the response is an error (vs. a decline)    |
|Txn Detail: Time (Datetime)     |  Txn Date & Time  |
|Txn Detail: Auth                |  Auth Code          |
|Txn Detail: Ref Num             | Merchant Invoice Number  
|Txn Detail: Cust. Ref Num       | Merchant Order ID     |
|Txn Detail: User ID*             | Not Available      |

*User ID, which indicated whether the transaction was processed via API (with the GatewayID) or via Virtual Terminal (with the User ID) will not be available in CLX reporting.

<!--
type: tab
-->

Payeezy parameters are sent in the url and results are sent back in the CSV format with a limit of 10k rows; a mechanism is in place to allow for additional calls to return additional rows.  Commerce Hub is an API request and response (not csv) with no limit on records returned.

Payeezy utilizes Authentication per user, not terminal or merchant based; a user that is associated with more than one merchant or mid can specify the mid or terminal in the request; Commerce Hub authentication is by merchant.

In Payeezy, the reporting API was one endpoint and used a report_type parameter to select the information returned; in Commerce Hub, there is an endpoint for each report being requested.

| Payeezy Reporting API Report Type| Commerce Hub Endpoint | Commerce Hub Additional Information|
| :-------- | :------------- | :---------- |
|vt_activity| /v1/authorization/search |[Authorizations](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/authorization/search)|
|vt_deposits_closed |Not Available | For users with more than one merchant or mid|
|vt_deposits_pending|Not Available | For users with more than one merchant or mid|
|vt_declined |/v1/authorization/search and filter approvalCodes = "Declined"|[Authorizations](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/authorization/search)|

**Request and Response Elements Detailed Comparison**

<!--type: tab
titles: vt_activity, Rvt_deposits_closed, vt_deposits_pending, vt_declined
-->

<!--type: tab
titles: Request Element Detailed Comparison, Response ELement Detailed Comparison
-->

| Payeezy Gateway Direct Element| Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |Not Available | For users with more than one merchant or mid|
|merchant |Not Available | For users with more than one merchant or mid|
|terminal |Not Available | For users with more than one merchant or mid|
|start_date  |fromDate | | 
|end_date  |toDate | | 
|report_type  |Not Available  | The Payeezy field to search for: cardholder, refno, custref, tag, cardno|
|group  |Not Available  | The value to search for in the search field designated above|
|inactive_merchants |Not Available | Flag to include inactive merchant transactions in search |
| |limit |The maximum number of records that will be returned |
|  |fields |Specify specific fields to be pulled back instead of the entire set (default behavior) |
| |filters.paymentMethods | |
| |filters.networks | |
| |filters.types | |
| |filters.siteIDs | |
| |filters.authCode | |
| |filters.first6 | |
| |filters.last4 | |
|offset  | | An integer determining the offset from where the rows should be fetched.  |

<!--
type: tab
-->

|RPM Element             |CLX Element  |
|:------------------------------------------|:---------------------------------|
|Sub-total: Terminal             |   No Sub-total/summary |
|Sub-total: Card (brand)         |   No Sub-total/summary|
|Sub-total: Transaction Type     |    No Sub-total/summary|
|Sub-total: Quantity             |    No Sub-total/summary|
|Sub-total: Currency             |   No Sub-total/summary|
|Sub-total: Amount               |   No Sub-total/summary |
|Txn Detail: Actions             |  Actions|
|Txn Detail: Card Holder         |   Customer Name |
|Txn Detail: Card (brand)        |   Network – always “unknown"|
|Txn Detail: Amount              |   Amount  |
|Txn Detail: Card Number         |   Account #  |
|Txn Detail: Expiry              |  Card Expiry Date  |
|Txn Detail: Transaction Type    |  Transaction   Type – sometimes “unknown”  |
|Txn Detail: Status              | Approval Status – sometimes “unknown”; appears to be often when   the response is an error (vs. a decline)    |
|Txn Detail: Time (Datetime)     |  Txn Date & Time  |
|Txn Detail: Auth                |  Auth Code          |
|Txn Detail: Ref Num             | Merchant Invoice Number  
|Txn Detail: Cust. Ref Num       | Merchant Order ID     |
|Txn Detail: User ID*             | Not Available      |

<!-- type: tab-end -->

<!--
type: tab
-->

<!--type: tab
titles: Request Element Detailed Comparison, Response ELement Detailed Comparison
-->

| Payeezy Gateway Direct Element| Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |Not Available | For users with more than one merchant or mid|

<!--
type: tab
-->

| Payeezy Gateway Direct Element| Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |Not Available | For users with more than one merchant or mid|

<!-- type: tab-end -->

<!--
type: tab
-->

<!--type: tab
titles: Request Element Detailed Comparison, Response ELement Detailed Comparison
-->

| Payeezy Gateway Direct Element| Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |Not Available | For users with more than one merchant or mid|

<!--
type: tab
-->

| Payeezy Gateway Direct Element| Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |Not Available | For users with more than one merchant or mid|

<!-- type: tab-end -->

<!--
type: tab
-->

<!--type: tab
titles: Request Element Detailed Comparison, Response ELement Detailed Comparison
-->

| Payeezy Gateway Direct Element| Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |Not Available | For users with more than one merchant or mid|
|merchant |Not Available | For users with more than one merchant or mid|
|terminal |Not Available | For users with more than one merchant or mid|
|start_date  |fromDate | | 
|end_date  |toDate | | 
|report_type  |Not Available  | The Payeezy field to search for: cardholder, refno, custref, tag, cardno|
|group  |Not Available  | The value to search for in the search field designated above|
|inactive_merchants |Not Available | Flag to include inactive merchant transactions in search |
| |limit |The maximum number of records that will be returned |
|  |fields |Specify specific fields to be pulled back instead of the entire set (default behavior) |
| |filters.paymentMethods | |
| |filters.networks | |
| |filters.types | |
| |filters.siteIDs | |
| |filters.authCode | |
| |filters.first6 | |
| |filters.last4 | |
|offset  | | An integer determining the offset from where the rows should be fetched.  |

<!--
type: tab
-->

|RPM Element             |CLX Element  |
|:------------------------------------------|:---------------------------------|
|Sub-total: Terminal             |   No Sub-total/summary |
|Sub-total: Card (brand)         |   No Sub-total/summary|
|Sub-total: Transaction Type     |    No Sub-total/summary|
|Sub-total: Quantity             |    No Sub-total/summary|
|Sub-total: Currency             |   No Sub-total/summary|
|Sub-total: Amount               |   No Sub-total/summary |
|Txn Detail: Actions             |  Actions|
|Txn Detail: Card Holder         |   Customer Name |
|Txn Detail: Card (brand)        |   Network – always “unknown"|
|Txn Detail: Amount              |   Amount  |
|Txn Detail: Card Number         |   Account #  |
|Txn Detail: Expiry              |  Card Expiry Date  |
|Txn Detail: Transaction Type    |  Transaction   Type – sometimes “unknown”  |
|Txn Detail: Status              | Approval Status – sometimes “unknown”; appears to be often when   the response is an error (vs. a decline)    |
|Txn Detail: Time (Datetime)     |  Txn Date & Time  |
|Txn Detail: Auth                |  Auth Code          |
|Txn Detail: Ref Num             | Merchant Invoice Number  
|Txn Detail: Cust. Ref Num       | Merchant Order ID     |
|Txn Detail: User ID*             | Not Available      |

<!-- type: tab-end -->

<!-- type: tab-end -->

<!--
type: tab
-->

In Commerce Hub, the Endpoint [/v1/authorizations/search](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/authorization/search) will provide a list of authorization transactions (pre-settle) and their attributes based on optional filter criteria.

In Payeezy, parameters are sent in the url and results are sent back in the CSV format with a limit of 10k rows per response.  Commerce Hub is an API request and response with no limit on records returned.

Payeezy utilizes Authentication per user; Commerce Hub authentication is by merchant.

The Payeezy search allows filtering based on criteria related to **???cardholder name**, reference numbers, transaction tags and full card numbers; Commerce Hub does not allow searching on those elements.  Commerce Hub allows filtering on payment method, networks, type, siteIDs and auth code in addition to first 6 and last 4 of the card number.   

Commerce Hub does provide a [summary search function](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/authorization/summary).

**Request Elements Detailed Comparison**

| Payeezy Gateway Direct Element| Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |Not Available | For users with more than one merchant or mid|
|merchant |Not Available | For users with more than one merchant or mid|
|terminal |Not Available | For users with more than one merchant or mid|
|start_date  |fromDate | | 
|end_date  |toDate | | 
|search_field   |Not Available  | The Payeezy field to search for: cardholder, refno, custref, tag, cardno|
|search  |Not Available  | The value to search for in the search field designated above|
|status  |filters.approvalCodes | |
|amount_from, amount_to  |Not Available | Filter based on amount range |
|inactive_merchants |Not Available | Flag to include inactive merchant transactions in search |
| |limit |The maximum number of records that will be returned |
|  |fields |Specify specific fields to be pulled back instead of the entire set (default behavior) |
| |filters.paymentMethods | |
| |filters.networks | |
| |filters.types | |
| |filters.siteIDs | |
| |filters.authCode | |
| |filters.first6 | |
| |filters.last4 | |
|offset  | | An integer determining the offset from where the rows should be fetched.  |



**Response Elements Detailed Comparison**

| Payeezy Gateway Direct Element| In Commerce Hub Response (Y/N) |
| :-------- | :------------- | 
|Tag - Transaction Tag (Unique identifier) |Y |
|Cardholder Name - the cardholder name |Y | 
|Card Number - Masked Card Number  |Y | 
|Expiry - Expiry Date on the Card  |Y | 
|Card Type - Card Type (VISA, AMEX, MASTERCARD ...)   |Y | 
|Amount - Transaction Amount   |Y  | 
|Code - Transaction Code/Type (Purchase, Tagged Refund, Pre-Auth etc)   |Y  | 
|Status - Status of the transaction (Approved, Declined, Error)  |Y | 
| Auth No - Transaction Authorization number |Y | 
|Time - Transaction Time (in the Terminal Time Zone)  |Y |
|Ref Num - Transaction Reference number   |Y | 
|Cust. Ref Num - Transaction Customer Reference  |Y | 
| Reference 3 - Transaction Reference 3 data|Y | 
|Account Name - Payeezy Gateway account name  |N| 
|Merchant Name - Merchant Name  |N | 
| Merchant Code - Merchant Code |Y |
| Terminal Name - Terminal Name|Y | 
| Gateway - Terminal Gateway ID|N | 
 
*Note: many additional elements are available in the CH response payload, the above is a comparison with what was available in Payeezy.*

<!-- type: tab-end -->

---

## See Also

- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
