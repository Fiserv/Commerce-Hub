Commerce Hub offers a robust library of reporting APIs that includes Search (itemized data) and Summary level results.  For more details, please see [Commerce Hub Reporting](https://dev-developerstudio.fiserv.com/product/Reporting).

In the Payeezy Reporting API, parameters are sent in the url and results are sent back in XML format with a limit of 10k rows.  Commerce Hub has no limit on records returned.

Payeezy utilizes authentication per user. In Commerce Hub, authentication is by merchant.

In Payeezy, the reporting API was one endpoint and used a report_type parameter to select the information returned; in Commerce Hub, there are multiple available endpoints to retrive the information needed.

## Payeezy Reporting API Comparable Report in Commerce Hub

| Payeezy Reporting API Report Type| Commerce Hub Endpoint | Commerce Hub Additional Information|
| :-------- | :------------- | :---------- |
|Activity| /v1/chub/search <br> /v1/chub/summary |[Search](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/chub/search) <br> [Summary](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/chub/summary)|
|Closed Batches | Not Available* | |
|Pending Batches| Not Available* | |
|Declined |/v1/chub/search <br> /v1/chub/summary <br> filter approvalCodes = "Declined"|[Search](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/chub/search) <br> [Summary](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/chub/summary) <br> <br>|

_*Closed Batches and Pending Batches reporting is generated based off systemic Payeezy batch processing functionality and cannot be replicated in Commerce Hub.  Robust settlement reporting will be available._

## Request and Response Elements Detailed Comparison

<!--type: tab
titles: Request Element Detailed Comparison, Response Element Detailed Comparison
-->

| Payeezy Gateway Direct Parameter | Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |Not Available | |
|merchant |Not Available | |
|start_date  |fromDate | | 
|end_date  |toDate | | 
|report_type  |Not Available  | |
|group: <ul><li> terminal </li><li>user_name  </li></ul>   |summaryBy: <ul><li> Network </li><li> TxnType </li><li>  PaymentMethod</li><li>  TxnState </li><li> SourceType </li><li>  ApiKey </li><li>  TxnDay </li><li>  TxnWeek </li><li>  TxnMonth </li><li>  TxnQuarter </li><li>  TxnYear </li></ul> | Available in Summary |
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


<!--
type: tab
-->

*Note: many additional elements are available in the Reporting API, the below is a comparison with what was available in RPM.*

|Payeezy Reporting API Response Element     | In Commerce Hub Response? (Y/N)        |Commerce Hub Element  |
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

In Commerce Hub, the Endpoint [/v1/chub/search](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/chub/search) will provide a list of authorization transactions (pre-settle) and their attributes based on optional filter criteria. For more details on the expanded capabilities, please see [Commerce Hub Reporting](https://dev-developerstudio.fiserv.com/product/Reporting).

In Payeezy, parameters are sent in the url and the results are sent back in the CSV format with a limit of 10k rows per response.  Commerce Hub is an API request and response with no limit on records returned.

Payeezy utilizes authentication per user. Commerce Hub authentication is by merchant.

The Payeezy search allows filtering based on criteria related to cardholder name, reference numbers, transaction tags and full card numbers; Commerce Hub does not currently allow searching on those elements.  Commerce Hub allows filtering on payment method, networks, type, siteIDs and auth code in addition to first 6 and last 4 of the card number.   

Commerce Hub does provide a [summary search function](https://dev-developerstudio.fiserv.com/product/Reporting/api/?type=post&path=/v1/chub/summary).

<!--type: tab
titles: Request Element Detailed Comparison, Response Element Detailed Comparison
-->

**Request Elements Detailed Comparison**

| Payeezy Gateway Direct Element| Commerce Hub Element | Notes|
| :-------- | :------------- | :---------- |
|account |Not Available | |
|merchant |Not Available | |
|terminal |Not Available | |
|start_date  |fromDate | | 
|end_date  |toDate | | 
|search_field: <ul><li>cardholder</li><li> refno</li><li> custref</li><li> tag</li><li> cardno </li></ul>   |Not Available  | |
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

|Payeezy Search API Response Element     | In Commerce Hub Response? (Y/N)        |Commerce Hub Element  |
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
|Reference 3  | Y| mrchTranId|
|UserId| N| |
|Bank Response Code  | Y| assocRespCode _(comparable)_|
|ETG Response Code| N| |


<!-- type: tab-end -->

<!-- type: tab-end -->

---
