---

tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]

---

# Reporting

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

## General

- Reporting was previously accessed via the Payeezy Real-time Payment Manager (RPM) and will now be available from Client Line Enterprise.  For more details please see <link to CLX documentation/training>.
- In Payeezy there were five pre-defined reports available with the ability to adjust data ranges; the new solution,  Client Line Enterprise, is highly Configurable reporting engine.
- In Payeezy the reports had grouping/sub-totals by Terminal, Card Brand and Transaction Type, in the Client Line Enterprise the search does not have grouping/sub-totals but return a list of all transactions that meet the criteria; the generic analysis function supports grouping but does not have drill-down capability to the transaction.
- The Actions available for a transaction from the reporting screens in Payeezy Gateway differ from those available in Client Line Enterprise; for example a Purchase includes Refund and Void in Client Line Enterprise and Refund and New Transaction in Payeezy Gateway.  
- Finally, in Payeezy Gateway the Search could be displayed in multiple languages (EN, FR, ES) based on the terminal setting; at this time Client Line Enterprise is available in English language only.

<!--type: tab
titles: UI Reporting, Reporting APIs, Search APIs
-->

## Reporting UI

In General, many more data elements are available for reporting in the new Client Line Enterprise solution than were previously available in Payeezy Gateway reporting.  The following exceptions exist where the data was available in Payeezy Reports, but is not available or is conditionally available in Client Line Enterprise:
- Network (formerly known as Card Brand)
- Transaction Type is available, but will be displayed as “unknown” in some cases
- Approval Status is available, but “unknown” when the response was an error
- User Id, which indicated whether the transaction was processed via API (with the GatewayID) or via Virtual Terminal (with the User ID) will not be available in Client Line reporting

<!--
type: tab
-->

## Reporting APIs

<!--
type: tab
-->

## Search APIs

Transaction/search to /v1/chub/search = Provides a list of authorization transactions (pre-settle) and their attributes based on optional filter criteria.

-	Payeezy parameters are sent in the url and results are sent back in the CSV format with a limit of 10k rows; a mechanism is in place to allow for additional calls to return additional rows.  Commerce Hub is an API request and response (not csv) with no limit on records returned.
-	Payeezy utilizes Authentication per user, not terminal or merchant based; a user that is associated with more than one merchant or mid can specify the mid or terminal in the request; Commerce Hub authentication is by merchant.
-	Commerce Hub search Provides a list of authorization transactions pre-settlement (does not include settlement records). 
-	The Payeezy search allows filtering based on criteria related to cardholder name, reference numbers, transaction tags and card numbers; Commerce Hub does not allow searching on those elements.  Commerce Hub allows filtering on payment method, network, type, currency and auth code in addition to first 6 and last 4 of the card number.   

**Request Elements Detailed Comparison**

| Payeezy Gateway Direct Element| Commerce Hub Element | Notes|
| :--------: | :-------------: | ---------- |
|account |Not Available | For users with more than one merchant or mid|
|merchant |Not Available | For users with more than one merchant or mid|
|terminal |Not Available | For users with more than one merchant or mid|
|start_date  |fromDate | | 
|end_date  |toDate | | 
|search_field   |Not Available  | The Payeezy field to search for: cardholder, refno, custref, tag, cardno|
|search  |Not Available  | The value to search for in the search field designated above|
| |limit | |
|  |fields | |
|status  |filters.approvalCodes | |
|amount_from, amount_to  |Not Available | Filter based on amount range |
|Inactive_merchants |Not Available | Flag to include inactive merchant transactions in search |
| |filters.paymentMethods | |
| |filters.networks | |
| |filters.types | |
| |filters.currency | |
| |filters.authCode | |
| |filters.first6 | |
| |filters.last4 | |
|offset  | | An integer determining the offset from where the rows should be fetched.  |



**Response Elements Detailed Comparison**

| Payeezy Gateway Direct Element| In Commerce Hub Response (Y/N) |
| :--------: | :-------------: | 
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
