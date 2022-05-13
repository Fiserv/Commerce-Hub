---

tags: [carat, commerce-hub, enterprise, transaction-types, api-reference, card-not-present, payeezy]

---

# API Differences

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

>If you are using the **/api.globalgatewaye4.firstdata.com** URL, then you are transacting through the **Payeezy Gateway Direct (PGW)** platform.

>If you are using the /api.payeezy.com URL, then you are transacting through the Developer API platform.

See tabs below for information pertaining to the platform you are transacting on.

<!--type: tab
titles: Payeezy Gateway Direct, Developer API
-->

## Transaction Types and Endpoints

In Payeezy Gateway Direct (PGW), there was a single endpoint (/api.globalgatewaye4.firstdata.com/transaction/v32 or all previous versions) for all transactions; in Commerce Hub there are multiple endpoints based on the type of transaction being executed:

| PGW Transaction Type | Commerce Hub Endpoint | Commerce Hub <br> Additional Info |
| -------- | ------------- | :--------------: |
|00 = Purchase | /payments/v1/charges with captureFlag = "true" | [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)|
|01 = Pre-Authorization  | /payments/v1/charges with captureFlag = "false”  | [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)|
|03 = Forced Post   | NOT YET SUPPORTED  | 
|04 = Open Refund   | NOT YET SUPPORTED  | 
|05 = Pre-Authorization Only   | NO LONGER SUPPORTED* | [Account Verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) |
|13 = Open Void   | NOT YET SUPPORTED  | 
|32 = Tagged Pre-Authorization Completion   | /payments/v1/charges/{transactionId}/capture | [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)| 
|33 = Tagged Void   | /payments/v1/charges/{transactionId}/cancel | [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)| 
|33 = Tagged Refund   | /payments/v1/charges/{transactionId}/refund  | [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)|

*Use the new [Account Verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) functionality in Commerce Hub to perform the same action as a pre-authorization only in Payeezy.

---

## Request and Response - Formats and Elements

In Payeezy, three different formats were supported: SOAP XML, REST XML and REST JSON; in Commerce Hub only REST JSON format is available. 

In Payeezy, many elements from the request are mirrored on the response, however, in Commerce Hub the request elements will only be sent back on the response if they were changed during processing.

The API messages for Commerce Hub require different elements than the Payeezy messages required.  For example; Source Type and Currency are now required elements – see [Commerce Hub Required Elements](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalRequired.md) documentation.

The element names, types and enumerations have changed - see [Element Level Mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalAPI.md) documentation.

Not only have the non-approved (Declined or Error) transaction response codes changed, but the resolution of error codes has changed as well. See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more details.

The bank Customer Transaction Record (CTR) is no longer available as a single element in the response. The independent values are available in Commerce Hub and by using this [element level mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalCTR.md), the CTR can be created by combining the needed elements.  

Additionally, the CTR was previously available in multiple languages (EN, FR, ES) based on the terminal setting or the language element in the API request; at this time, Commerce Hub will send back English language only responses.

<!--
type: tab
-->

## Transaction Types and Endpoints

In Developer API, there was a single endpoint (/api.payeezy.com/v1/transactions) for all transactions; in Commerce Hub there are multiple endpoints based on the type of transaction being done:

| Transaction Type | Commerce Hub Endpoint | Commerce Hub <br> Additional Info |
| -------- | ------------- | :----------: |
|purchase | /payments/v1/charges with captureFlag = "true" | [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)|
|authorize (zero dollar) | NO LONGER SUPPORTED* | [Account Verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) |
|authorize (non zero dollar) | /payments/v1/charges with captureFlag = "false”  | [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)|
|forced_post   | NOT YET SUPPORTED  | 
|capture   | /payments/v1/charges/{transactionId}/capture  | [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)|
|void   | /payments/v1/charges/{transactionId}/cancel  | [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)|
|refund (open)  | NOT YET SUPPORTED  | |
|refund (tagged) | /payments/v1/charges/{transactionId}/refund   | [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)|

*Use the new [Account Verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) functionality in Commerce Hub to perform the same action as a pre-authorization only in Payeezy.

## Request and Response - Formats and Elements

In Payeezy, many elements from the request are mirrored on the response, however, in Commerce Hub the request elements will only be sent back on the response if they were changed during processing.

The API messages for Commerce Hub require different elements than the Payeezy messages required.  For example; Source Type and Currency are now required elements – see [Commerce Hub Required Elements](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalRequired.md) documentation.

The element names, types and enumerations have changed - see [Element Level Mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalAPI.md) documentation.

Not only have the non-approved (Declined or Error) transaction response codes changed, but the resolution of error codes has changed as well. See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more details.

The bank Customer Transaction Record (CTR) is no longer available as a single element in the response. The independent values are available in Commerce Hub and by using this [element level mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalCTR.md), the CTR can be created by combining the needed elements. 

Additionally, the CTR was previously available in multiple languages (EN, FR, ES) based on the terminal setting or the language element in the API request; at this time, Commerce Hub will send back English language only responses.

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)




---
