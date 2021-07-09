---
tags: [carat, card-not-present, commerce-hub, error, response, response-codes, card-present, http]
---

# Error Response

The error code indicates the reason why a transaction is rejected. Commerce Hub includes the value in the `code` along with the corresponding text in the `message` fields of the [HTTP error response](?path=docs/Resources/Guides/Response-Codes/HTTP.md).

<!--
type: tab
title: 1xx
-->

Codes starting with 1xx identifies an error in the submission data. This includes missing data, invalid data or format errors. Verify the data submitted and resend the request.

| Code| Message |
| ---- | ----- |
| 100 | Invalid or Missing Field Data |
| 103 | Invalid or Missing Field Data |
| 106 | Missing or Invalid Card Number or Token |
| 107 | Invalid Amount or Currency |
| 113 | Invalid Amount or Currency |
| 115 | Invalid Amount or Currency |
| 129 | Invalid Amount or Currency |
| 130 | Missing Required Field |
| 134 | Store Id Does Not Exist |


<!--
type: tab
title: 2xx
-->

Codes starting with 2xx identifies an error in the configuration setup. This includes merchant and terminal setup, account setup. Check the setup or contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 205 | Invalid Account Setup |
| 213 | Invalid Terminal ID or Setup |
| 215 | Invalid Terminal ID or Setup |
| 218 | Invalid Terminal ID or Setup |


<!--
type: tab
title: 3xx
-->

Codes starting with 3xx identifies an error related to [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md). Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 309 | Invalid Payment Source or Not Supported |
| 341 | Invalid Payment Source or Not Supported |
| 342 | Invalid Payment Source or Not Supported |
| 343 | Invalid Payment Source or Not Supported |
| 344 | Invalid Payment Source or Not Supported |
| 345 | Invalid Payment Source or Not Supported |
| 347 | Split Shipment Not Enabled on Merchant Account |
| 361 | Cashback Not Enabled on Merchant Account |
| 363 | Transaction origin not supported |
| 364 | Merchant Account or Location Not Active |
| 366 | Invalid MCC for Digital Wallet Operator |
| 367 | Invalid MCC for Airline |
| 368 | Payment Source Error: General |
| 397 | Payment Source Error: General |


<!--
type: tab
title: 4xx
-->

Codes starting with 4xx identifies an error related to [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md). Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 423 | Refund/Cancel Locked or Not Supported for Payment Source |
| 427 | Pre-Auth/Post-Auth Locked or Not Supported for Payment Source |


<!--
type: tab
title: 5xx
-->

| Code| Message |
| ---- | ----- |
| 504 | Pre-Auth/Post-Auth Locked or Not Supported for Payment Source |
| 505 | Missing or Incorrect Wallet Type |
| 506 | Missing or Incorrect Wallet Type |
| 507 | Token Type "One Time" Not Allowed |
| 508 | Token Type Not Provided |
| 525 | Token Type Not Provided |
| 526 | Tokenization Database Problem |
| 529 | Tokenization Database Problem |


<!--
type: tab
title: 6xx
-->

| Code| Message |
| ---- | ----- |
| 604 | Tokenization Key Server Problem |
| 609 | Invalid Token Type |
| 610 | Invalid Token Type |
| 617 | Payment Source Missing With Create Token True. |
| 619 | Debit Card Not Authenticated |

<!--
type: tab
title: 7xx
-->

| Code| Message |
| ---- | ----- |
| 703 | 3-D Secure: Same AAV/CAVV |
| 704 | Missing or Invalid Birth Date for Financial Institutions |
| 736 | Reservation Authorization Already Captured |
| 741 | Convenience Fee Not Supported |
| 751 | Fraud Error : General |
| 755 | Security Code is Mandatory |
| 756 | Blocked: BIN |
| 757 | Blocked: Card Number |
| 763 | Blocked: Card Number |
| 766 | Blocked: Country |
| 767 | Blocked: Duplicate Transaction |
| 771 | Blocked: Host |



<!--
type: tab
title: 8xx
-->

| Code| Message |
| ---- | ----- |
| 800 | Blocked: IP or Class C Address |
| 814 | Velocity: Maximum Sale Exceeded |
| 815 | Velocity: Maximum Sale Exceeded |
| 817 | Velocity: Refund Limit Exceeded |
| 818 | Declined Fraud Detect Score |
| 819 | Declined: Fraud Detect Not Available |
| 820 | No Terminal Setup or Found |
| 823 | Terminal ID Not Unique |
| 824 | Terminal Denied |
| 827 | Technical Error: General |
| 840 | Internal Error |
| 849 | Internal Error |
| 850 | Internal Error |
| 865 | Internal Error |
| 866 | Internal Error |

<!-- type: tab-end -->


