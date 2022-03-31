---
tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]
---
# Core Components
<!-- theme: danger -->
>  :memo: **Note:** The following documentation is for **Payeezy** migration clients only. See [Fiserv Developer Studio for Merchants](https://developer.fiserv.com/merchants) for Commerce Hub integration options.

## API Differences
### Transaction Types and Endpoints

>In Payeezy Gateway there was a single endpoint for all transactions; In Commerce Hub there are multiple endpoints:
<!--
type: tab

-->

| PGW Transaction Type | Commerce Hub Endpoint | 
| -------- | ------------- |
| 00 = Purchase | /payments/v1/charges with captureFlag = "true" | 
|01 = Pre-Authorization  | /payments/v1/charges captureFlag = "false”  | 
|03 = Forced Post   | NOT YET SUPPORTED  | 
|05 = Pre-Authorization Only   | NO LONGER SUPPORTED* | 
|13 = Open Void   | NOT YET SUPPORTED  | 
|32 = Tagged Pre-Authorization Completion   | /payments/v1/charges/{transactionId}/capture  | 
|33 = Tagged Void   | /payments/v1/charges/{transactionId}/cancel  | 
|33 = Tagged Refund   | /payments/v1/charges/{transactionId}/refund   | 

<!-- type: tab-end -->


### Formats, Contents and Elements

- In Payeezy Gateway three different formats were supported: SOAP XML, REST XML and REST JSON; in Commerce Hub only REST JSON format is used. 
- The API messages for Commerce Hub require different elements than the Payeezy messages required.  For example; Source Type and Currency are now required elements – see <link to specific dev portal documentation on required elements here>.
- The element names, types and enumerations have changed (see appendix A for an element level mapping between Payeezy Gateway and Commerce Hub).
- In Payeezy, most elements from the request are also sent back on the response, in Commerce Hub the request elements will only be sent back on the response if they could have changed during processing.
- Non-approved (Declined or Error) transaction responses have changed – see <link to specific dev portal documentation on http response codes, gateway response codes and host response codes> for more details on the new http response codes, gateway response codes and bank response codes for Commerce Hub.
- The bank Customer Transaction Record (CTR) is no longer available as a single element in the response, the independent values are available in separate elements (see Appendix A for more details).  Additionally, the CTR was previously available in multiple languages (EN, FR, ES) based on the terminal setting or the language element in the API request; at this time Commerce Hub will send back English language only responses.

---

## Configuration
- Configuration was previously accessed via the Payeezy Real-time Payment Manager (RPM) and will now be available from Marketplace.  For more details please see <link to Marketplace documentation/training>.
- Batch Settlement cutoff times can no longer be configured. 
- A new API Password, HMAC Key and other API relation authorization and authentication was available self-serve in Payeezy RPM Administration and cannot be performed in Marketplace; <need to know where a merchant can do this self-service to a comparative analysis of that system can be performed>. 
- There is more configuration available to a merchant admin in Marketplace for CommerceHub that was previously available to this role via Payeezy Gateway. 
- The ability to edit the terminal/MID address and create and edit users was available in Payeezy RPM Administration and cannot be performed in Marketplace <need to know where address edit self-serve and user creation and edit self-service is performed to do a comparative analysis of that system>. 
- Finally, in Payeezy Gateway the Administrative pages could be displayed in multiple languages (EN, FR, ES) based on the terminal setting; at this time Marketplace is available in English language only.

---

## Virtual Terminal

### General

- Virtual Terminal was previously accessed via the Payeezy Real-time Payment Manager (RPM) and will now be available from Client Line Enterprise.  For more details please see <link to Virtual Terminal CLX documentation/training>.
- In Payeezy Gateway the Virtual Terminal functionality allows for Forced Post and Open Voids to be processed via Virtual Terminal; in the Client Line Enterprise solution those transaction types are no longer supported via Virtual Terminal.  Additionally, the ability to create a copy of a prior Pre-Auth or Purchase via a “New Transaction” is no longer available.
- Finally, in Payeezy Gateway the Virtual Terminal could be displayed in multiple languages (EN, FR, ES) based on the terminal setting; at this time Client Line Enterprise Virtual terminal is available in English language only.

<!--
type: tab

-->

| PGW Transaction Type | In PGW | In CLX | Notes|
| -------- | ------------- | ---------- |----------|
|Purchase |In POS Screen | In Virtual Terminal|
|Pre-Authorization |In POS Screen | In Virtual Terminal|
|Forced Post |In POS Screen | Not Available|
|Open Void  |In POS Screen | Not Available| 
|Tagged Pre-Authorization Completion  |In POS Screen and Action in search or reports |In Search| 
|Tagged Void   |Action in search or reports  | In Search |
|Tagged Refund  |Action in search or reports  | In Search |
|New Transaction (Tagged Pre-Auth or Tagged Purchase)  |Action in search or reports  | Not Available | Transaction Type only available in VT, not API |
<!-- type: tab-end -->

### Element Level Differences

- In Client Line Virtual Terminal, the Currency is now required; it defaults to USD.  Alternatively in Payeezy Gateway, this value was pulled from the merchant’s configuration (not entered in the Virtual Terminal). 
- In Client Line Virtual Terminal, the Card brand is required; this detail was not previously needed in Payeezy Virtual Terminal.
- The Country information entered is now a free form text field (vs. previously a drop down).
- When processing secondary transactions (Completion/Capture, Void and Refund), the reference fields were previously editable in Payeezy Virtual Terminal and are no longer available in Client Line Enterprise VT.
---

## Reporting
### General
- Reporting was previously accessed via the Payeezy Real-time Payment Manager (RPM) and will now be available from Client Line Enterprise.  For more details please see <link to CLX documentation/training>.
- In Payeezy there were five pre-defined reports available with the ability to adjust data ranges; the new solution,  Client Line Enterprise, is highly Configurable reporting engine.
- In Payeezy the reports had grouping/sub-totals by Terminal, Card Brand and Transaction Type, in the Client Line Enterprise the search does not have grouping/sub-totals but return a list of all transactions that meet the criteria; the generic analysis function supports grouping but does not have drill-down capability to the transaction.
- The Actions available for a transaction from the reporting screens in Payeezy Gateway differ from those available in Client Line Enterprise; for example a Purchase includes Refund and Void in Client Line Enterprise and Refund and New Transaction in Payeezy Gateway.  
- Finally, in Payeezy Gateway the Search could be displayed in multiple languages (EN, FR, ES) based on the terminal setting; at this time Client Line Enterprise is available in English language only.

### Data Available in Reports UI

In General, many more data elements are available for reporting in the new Client Line Enterprise solution than were previously available in Payeezy Gateway reporting.  The following exceptions exist where the data was available in Payeezy Reports, but is not available or is conditionally available in Client Line Enterprise:
> - Network (formerly known as Card Brand)
> - Transaction Type is available, but will be displayed as “unknown” in some cases
> - Approval Status is available, but “unknown” when the response was an error
> - User Id, which indicated whether the transaction was processed via API (with the GatewayID) or via Virtual Terminal (with the User ID) will not be available in Client Line reporting

### Reporting APIs
---
## See Also

- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
