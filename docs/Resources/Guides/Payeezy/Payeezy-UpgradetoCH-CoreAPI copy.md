---

tags: [carat, commerce-hub, enterprise, transaction-types, api-reference, card-not-present, payeezy]

---

# API Differences

<!-- theme: danger -->
> The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.  
> :memo: **Note:** It is important to know the platform you are transacting on in order to review the most pertinent information for your upgrade to Commerce Hub.

If you are using the **/api.globalgatewaye4.firstdata.com** URL, then you are transacting through the **Payeezy Gateway Direct (PGW)** platform.

If you are using the **/api.payeezy.com** URL, then you are transacting through the **Developer API** platform.

See tabs below for information pertaining to the platform you are transacting on.

<!--type: tab
titles: Payeezy Gateway Direct, Developer API
-->

**Transaction Types and Endpoints:**

In Payeezy Gateway Direct (PGW), there was a single endpoint (/api.globalgatewaye4.firstdata.com/transaction/v32 or all previous versions) for all transactions; in Commerce Hub there are multiple endpoints based on the type of transaction being executed:

| PGW Transaction Type | Commerce Hub Endpoint | Commerce Hub Additional Info |
| -------- | ------------- | :--------------: |
|00 = Purchase | /payments/v1/charges `captureFlag` = "true" | [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)|
|01 = Pre-Authorization  | /payments/v1/charges `captureFlag` = "false”  | [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)|
|03 = Forced Post   | /payments/v1/charges `captureFlag` = "true" `transactionDetails.approvalCode` = value from authorization_num | [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md) |
|04 = Open Refund   | /payments/v1/refund | [Refund Request](?path=docs/Resources/API-Documents/Payments/refund.md) |
|05 = Pre-Authorization Only   | REPLACED by Account Verification* /payments-vas/v1/accounts/verification| [Account Verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) |
|13 = Open Void   | Will Not be Supported in Commerce Hub | |
|32 = Tagged Pre-Authorization Completion   | /payments/v1/charges `captureFlag` = "true" `referenceTransactionDetails` object in request | [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)|
|33 = Tagged Void   | /payments/v1/cancel `referenceTransactionDetails` object in request | [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)|
|34 = Tagged Refund   | /payments/v1/refund `referenceTransactionDetails` object in request | [Refund Request](?path=docs/Resources/API-Documents/Payments/refund.md) |

**Note:** Use the new [Account Verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) functionality in Commerce Hub to perform the same action as a pre-authorization only in Payeezy.

---

**Request and Response - Formats and Elements:**

In Payeezy, three different formats were supported: SOAP XML, REST XML and REST JSON; in Commerce Hub only REST JSON format is available.

In Payeezy, many elements from the request are mirrored on the response, however, in Commerce Hub the request elements will only be sent back on the response if they were changed during processing.

In Payeezy, Forced Post with digital wallet was allowed; in Commerce Hub, this scenario is not allowed.

In Payeezy, there is no validation on the auth_number element in a Foreced Post transaction; in Commerce Hub, this validation does occur and the transaction will not be processed if auth_number is invalid.

In Payeezy, Timeout Reversal is a merchant managed function; in Commerce Hub, this is a gateway managed feature.

The API messages for Commerce Hub require different elements than the Payeezy messages required.  For example; `sourceType` and `currency` are now required elements – see [Commerce Hub Required Elements](?path=docs/Resources/Guides/Payeezy/Payeezy-UpgradetoCH-TechnicalRequired.md) documentation.

The element names, types and enumerations have changed - see [Element Level Mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-UpgradetoCH-TechnicalAPI.md) documentation.

Not only have the non-approved (Declined or Error) transaction response codes changed, but the resolution of error codes has changed as well. See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more details.

The bank Customer Transaction Record (`CTR`) is no longer available as a single element in the response. The independent values are available in Commerce Hub and by using this [CTR mapping document](?path=docs/Resources/Guides/Payeezy/Payeezy-UpgradetoCH-TechnicalCTR.md), the `CTR` can be created by combining the needed elements.  

Additionally, the `CTR` was previously available in multiple languages (EN, FR, ES) based on the terminal setting or the language element in the API request; at this time, Commerce Hub will send back English language only `CTR` responses.

<!--
type: tab
-->

**Transaction Types and Endpoints:**

In Developer API, there was a single endpoint (/api.payeezy.com/v1/transactions) for all transactions; in Commerce Hub there are multiple endpoints based on the type of transaction being done:

| Transaction Type | Commerce Hub Endpoint | Commerce Hub

Additional Info |
| -------- | ------------- | :----------: |
|purchase | /payments/v1/charges

`captureFlag` = "true" | [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)|
|authorize (zero dollar) | REPLACED by Account Verification*

/payments-vas/v1/accounts/verification | [Account Verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) |
|authorize (non zero dollar) | /payments/v1/charges

`captureFlag` = "false”   | [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)|
|forced_post   | /payments/v1/charges

 `captureFlag` = "true"
 `transactionDetails.approvalCode` = value from authorization_num | [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md) |
|capture   | /payments/v1/charges

`captureFlag` = "true" `referenceTransactionDetails` object in request  | [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)|
|void   | /payments/v1/cancel

`referenceTransactionDetails` object in request | [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)|
|refund (open)  |  /payments/v1/refund | [Refund Request](?path=docs/Resources/API-Documents/Payments/refund.md) |
|refund (tagged) | /payments/v1/refund

`referenceTransactionDetails` object in request  | [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)|

*Use the new [Account Verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) functionality in Commerce Hub to perform the same action as a pre-authorization only in Payeezy.

---

**Request and Response - Formats and Elements:**

In Payeezy, many elements from the request are mirrored on the response, however, in Commerce Hub the request elements will only be sent back on the response if they were changed during processing.

The API messages for Commerce Hub require different elements than the Payeezy messages required.  For example; `sourceType` and `currency` are now required elements – see [Commerce Hub Required Elements](?path=docs/Resources/Guides/Payeezy/Payeezy-UpgradetoCH-TechnicalRequired.md) documentation.

In Payeezy, Forced Post with digital wallet was allowed; in Commerce Hub, this scenario is not allowed.

In Payeezy, there is no validation on the auth_number element in a Foreced Post transaction; in Commerce Hub, this validation does occur and the transaction will not be processed if auth_number is invalid.

In Payeezy, Timeout Reversal is a merchant managed function; in Commerce Hub, this is a gateway managed feature.

The element names, types and enumerations have changed - see [Element Level Mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-UpgradetoCH-TechnicalAPI.md) documentation.

Not only have the non-approved (Declined or Error) transaction response codes changed, but the resolution of error codes has changed as well. See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more details.

The bank Customer Transaction Record (`CTR`) is no longer available as a single element in the response. The independent values are available in Commerce Hub and by using this [CTR mapping document](?path=docs/Resources/Guides/Payeezy/Payeezy-UpgradetoCH-TechnicalCTR.md), the `CTR` can be created by combining the needed elements.

Additionally, the `CTR` was previously available in multiple languages (EN, FR, ES) based on the terminal setting or the language element in the API request; at this time, Commerce Hub will send back English language only `CTR` responses.

<!-- type: tab-end -->

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---