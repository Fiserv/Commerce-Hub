---
tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]
---

# API Differences

<!-- theme: danger -->
>  :memo: **Note:** The following documentation is for **Payeezy** migration clients only. See [Fiserv Developer Studio for Merchants](https://developer.fiserv.com/merchants) for Commerce Hub integration options.

## Transaction Types and Endpoints

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
---

## Formats, Contents and Elements

- In Payeezy Gateway three different formats were supported: SOAP XML, REST XML and REST JSON; in Commerce Hub only REST JSON format is used. 
- The API messages for Commerce Hub require different elements than the Payeezy messages required.  For example; Source Type and Currency are now required elements – see <link to specific dev portal documentation on required elements here>.
- The element names, types and enumerations have changed (see appendix A for an element level mapping between Payeezy Gateway and Commerce Hub).
- In Payeezy, most elements from the request are also sent back on the response, in Commerce Hub the request elements will only be sent back on the response if they could have changed during processing.
- Non-approved (Declined or Error) transaction responses have changed – see <link to specific dev portal documentation on http response codes, gateway response codes and host response codes> for more details on the new http response codes, gateway response codes and bank response codes for Commerce Hub.
- The bank Customer Transaction Record (CTR) is no longer available as a single element in the response, the independent values are available in separate elements (see Appendix A for more details).  Additionally, the CTR was previously available in multiple languages (EN, FR, ES) based on the terminal setting or the language element in the API request; at this time Commerce Hub will send back English language only responses.

---

## See Also

- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
