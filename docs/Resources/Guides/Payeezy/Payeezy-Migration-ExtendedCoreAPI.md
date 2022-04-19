---
tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]
---

# API Differences

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

Blurb about API differences

Payeezy Gateway definition is blah, blah, blah

FAPI definition is blah, blah, blah

<!--type: tab
titles: Payeezy Gateway Direct, Developer
-->

## Transaction Types and Endpoints

In Payeezy Gateway there was a single endpoint (/api.globalgatewaye4.firstdata.com/transaction/v32) for all transactions; in Commerce Hub there are multiple endpoints based on the type of transaction being done:

| PGW Transaction Type | Commerce Hub Endpoint | Commerce Hub Additional Info |
| -------- | ------------- | -------------- |
|00 = Purchase | /payments/v1/charges with captureFlag = "true" | [Charges](?type=post&path=/payments/v1/charges) |
|01 = Pre-Authorization  | /payments/v1/charges with captureFlag = "false”  | 
|03 = Forced Post   | NOT YET SUPPORTED  | 
|05 = Pre-Authorization Only   | NO LONGER SUPPORTED* | 
|13 = Open Void   | NOT YET SUPPORTED  | 
|32 = Tagged Pre-Authorization Completion   | /payments/v1/charges/{transactionId}/capture  | 
|33 = Tagged Void   | /payments/v1/charges/{transactionId}/cancel  | 
|33 = Tagged Refund   | /payments/v1/charges/{transactionId}/refund   | 

---

## Request and Response - Formats and Elements

In Payeezy Gateway, three different formats were supported: SOAP XML, REST XML and REST JSON; in Commerce Hub only REST JSON format is used. 

In Payeezy, many elements from the request are mirrored on the response, however, in Commerce Hub the request elements will only be sent back on the response if they were changed during processing.

The API messages for Commerce Hub require different elements than the Payeezy messages required.  For example; Source Type and Currency are now required elements – see [Commerce Hub Required Elements](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalRequired.md) documentation.

The element names, types and enumerations have changed - see [Element Level Mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalAPI.md) documentation.

Non-approved (Declined or Error) transaction response codes have changed – see <link to specific dev portal documentation on http response codes, gateway response codes and host response codes> for more details on the new http response codes, gateway response codes and bank response codes for Commerce Hub.

The bank Customer Transaction Record (CTR) is no longer available as a single element in the response. The independent values are available in Commerce Hub and by using this [element level mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalCTR.md), the CTR can be created by combining the needed elements into a customized response element.  

Additionally, the CTR was previously available in multiple languages (EN, FR, ES) based on the terminal setting or the language element in the API request; at this time Commerce Hub will send back English language only responses.

<!--
type: tab
-->

## Transaction Types and Endpoints

In Developer API there was a single endpoint (/api.payeezy.com/v1/transactions) for all transactions; in Commerce Hub there are multiple endpoints based on the type of transaction being done:

| PAPI Transaction Type | Commerce Hub Endpoint | 
| -------- | ------------- |
| purchase | /payments/v1/charges with captureFlag = "true" | 
|authorize | /payments/v1/charges with captureFlag = "false”  | 
|forced_post   | NOT YET SUPPORTED  | 
|capture   | /payments/v1/charges/{transactionId}/capture  | 
|void   | /payments/v1/charges/{transactionId}/cancel  | 
|refund  | /payments/v1/charges/{transactionId}/refund   | 

## Request and Response - Formats and Elements

In Payeezy, many elements from the request are mirrored on the response, however, in Commerce Hub the request elements will only be sent back on the response if they were changed during processing.

The API messages for Commerce Hub require different elements than the Payeezy messages required.  For example; Source Type and Currency are now required elements – see [Commerce Hub Required Elements](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalRequired.md) documentation.

The element names, types and enumerations have changed - see [Element Level Mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalAPI.md) documentation.

Non-approved (Declined or Error) transaction responses have changed – see <link to specific dev portal documentation on http response codes, gateway response codes and host response codes> for more details on the new http response codes, gateway response codes and bank response codes for Commerce Hub.

The bank Customer Transaction Record (CTR) is no longer available as a single element in the response. The independent values are available in Commerce Hub and by using this [element level mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalCTR.md), the CTR can be created by combining the needed elements into a customized response element.  

Additionally, the CTR was previously available in multiple languages (EN, FR, ES) based on the terminal setting or the language element in the API request; at this time Commerce Hub will send back English language only responses.

<!-- type: tab-end -->

---

## See Also

- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
