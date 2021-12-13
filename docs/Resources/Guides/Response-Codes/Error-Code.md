---
tags: [carat, card-not-present, commerce-hub, error, response, response-codes, card-present, http]
---

# Error Response Codes

The error code indicates the reason why a transaction is rejected. Commerce Hub includes the value in the `code` along with the corresponding text in the `message` fields of the [HTTP error response](?path=docs/Resources/Guides/Response-Codes/HTTP.md).

<!--
type: tab
title: 1xx
-->

Codes starting with 1xx identifies an error in the submission data. This includes missing data, invalid data or format errors. Verify the data submitted and resend the request.

| Code| Message |
| ---- | ----- |
| 100 | Invalid or Missing Field Data |
| 102 | Missing or Invalid Payment Source |
| 103 | Missing or Invalid Card Number or Token |
| 105 | Invalid Amount or Currency |
| 106 | Amount or currency missing |
| 107 | Missing Required Field |
| 113 | Invalid Date or Time |
| 115 | Missing or Invalid Expiration Date |
| 129 | Missing Card Data In Request |
| 130 | Store Id Does Not Exist |
| 131 | Missing Referenced Transaction |
| 133 | The Order ID is Missing |
| 134 | Invalid Merchant Order ID |
| 135 | Invalid Merchant Invoice Number |
| 136 | Another Transaction With Same OrderId/Transaction Id Currently Being Processed |

<!--
type: tab
title: 2xx
-->

Codes starting with 2xx identifies an error in the configuration setup. This includes merchant and terminal setup, account setup. Check the setup or contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 200 | Invalid Account Setup |
| 200 | Invalid Account Setup |
| 202 | Invalid Terminal ID or Setup |
| 205 | Invalid Payment Source or Not Supported |
| 213 | Vault Not Enabled on Merchant Account |
| 215 | Credit Not Enabled on Merchant Account |
| 218 | Additional Auth Data for MCC Not Enabled on Merchant Account |
| 220 | Split Shipment Not Enabled on Merchant Account |
| 222 | Cashback Not Enabled on Merchant Account |
| 230 | Transaction origin not supported |
| 236 | Merchant Account or Location Not Active |
| 242 | Store Location 0 (zero) Not Allowed |
| 249 | TransArmor is not Supported |
| 258 | Invalid Account Data |
| 260 | Invalid MCC for Digital Wallet Operator |
| 261 | Invalid MCC for Airline |



<!--
type: tab
title: 3xx
-->

Codes starting with 3xx identifies an error related to [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md). Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 300 | Payment Source Error: General |
| 304 | Refund/Cancel Locked or Not Supported for Payment Source |
| 305 | Pre-Auth/Post-Auth Locked or Not Supported for Payment Source |
| 309 | Missing or Incorrect Wallet Type |
| 341 | Token Type "One Time" Not Allowed |
| 342 | Token Type Not Provided |
| 343 | Tokenization Database Problem |
| 344 | Tokenization Key Server Problem |
| 345 | Invalid Token Type |
| 347 | Payment Source Missing With Create Token True. |
| 361 | Debit Card Not Authenticated |
| 363 | 3-D Secure: Authentication Failed |
| 364 | 3-D Secure: PARes and CAVV/UCAF is Invalid |
| 366 | 3-D Secure Rejected Due to ECI Filters |
| 367 | 3-D Secure: Same AAV/CAVV |
| 368 | 3-D Secure: Same XID and ECI Combination |
| 369 | 3-D Secure IVR: Not Supported |
| 381 | 3-D Secure RESTful API Not Supported |
| 390 | Customer did Not Return from Third Party |
| 396 | Only Ecommerce Transactions Are Supported  |
| 396 | Only Ecommerce Transactions Are Supported  |
| 397 | Card function Not supported |

<!--
type: tab
title: 4xx
-->

Codes starting with 4xx identifies an error related to [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md). Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 423 | Invalid Amount |
| 427 | BIN Not Enabled |


<!--
type: tab
title: 5xx
-->

Codes starting with 5xx identifies a [vertical](?path=docs/Resources/Guides/Industry-Verticals/Industry-Verticals.md) specific error. Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 502 | Missing or Invalid Auth Data for Financial Institutions |
| 504 | Missing or Invalid Last 4(Four) for Financial Institutions |
| 505 | Missing or Invalid Postal Code for Financial Institutions |
| 506 | Missing or Invalid Surname for Financial Institutions |
| 507 | Missing or Invalid Birth Date for Financial Institutions |
| 508 | Missing or Invalid Account Number for Financial Institutions |
| 525 | Reservation Authorization Expired |
| 526 | Reservation Authorization Already Captured |
| 529 | Convenience Fee Not Supported |


<!--
type: tab
title: 6xx
-->

Codes starting with 6xx identifies an error related to [fraud checks](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md). Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 600 | Fraud Error : General |
| 604 | Security Code is Mandatory |
| 609 | Blocked: BIN |
| 610 | Blocked: Card Number |
| 611 | Blocked: Country |
| 613 | Blocked: Duplicate Transaction |
| 615 | Blocked: Host |
| 616 | Blocked: IP or Class C Address |
| 617 | Blocked: Billing Name |
| 619 | Velocity: Merchant Volume Exceeded |
| 621 | Velocity: Maximum Sale Exceeded |
| 624 | Velocity: Refund Limit Exceeded |
| 628 | Declined Fraud Detect Score |
| 629 | Declined: Fraud Detect Not Available |
| 675 | No Terminal Setup or Found |
| 676 | Terminal ID Not Unique |
| 677 | Terminal Denied |


<!--
type: tab
title: 7xx
-->

Codes starting with 7xx identifies an error related to gateway communication. Check the error message and take appropriate action. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 700 | Technical Error: General |
| 702 | Communication Error |
| 703 | Internal Error |
| 704 | Transaction Timed Out |
| 724 | System Busy or Time Out, Please Retry |
| 736 | Payeezy Decryption Processing Error |
| 741 | Endpoint Temporarily Not Available |
| 751 | Database Error: General |
| 755 | Database Unavailable |
| 756 | Order/Transaction Too Old to Be Referenced |
| 757 | Order/Transaction Already Exists in Database |
| 763 | Referenced Payment Type Not Found |
| 766 | Duplicate Vault Entry |
| 767 | Vault Data Not Found |
| 771 | Vault ID Should Not be Present With Create Token |

<!--
type: tab
title: 8xx
-->

Codes starting with 8xx identifies an error related to the transaction information. Check the error message, correct the data and resend the request. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 800 | Transaction Error: General |
| 801 | Invalid Transaction ID or Not Found |
| 804 | Currency Mismatch |
| 805 | Payment Source Mismatch |
| 806 | Amount Total Mismatch |
| 807 | Amount Too Large, Enter Lesser Amount |
| 810 | Amount is Greater Than Refund/Void |
| 812 | Unable to Refund |
| 813 | Unable to Refund: Transaction Not Found |
| 814 | Unable to Refund: Transaction Older Than 12 Months |
| 815 | Unable to Refund: Transaction Older Than 12 Months |
| 817 | Refund Missing Final Shipment Indicator |
| 818 | Unable to Capture |
| 819 | Unable to Capture: No Pre-auth Found |
| 820 | Unable to Capture: Already Performed |
| 823 | Unable to Capture: Final Shipment Submitted |
| 824 | Unable to Capture: Split Shipment Information Missing |
| 825 | Unable to Capture: Prior Post-auth Was Not a Split Shipment |
| 827 | Unable to Cancel |
| 829 | Unable to Cancel: Transaction Settled |
| 831 | Unable to Cancel: No Transaction Found |
| 833 | Unable to Cancel: Transaction Not in Captured or Authorized Status |
| 839 | Maximum Transactions Per Order Exceeded |
| 840 | Maximum Recurring Transactions Per Order Exceeded |
| 844 | Reauthorization Not Allowed or Supported |
| 848 | Transaction Type Not Supported |
| 849 | Transaction State Declined |
| 850 | Currency or Amount Total Mismatch |
| 865 | 3S Secure With Recurring Not Allowed |
| 866 | Only 3D Secure as Non Recurring Transaction Allowed |
| 877 | Transaction Expired |

<!--
type: tab
title: 9xx
-->

Codes starting with 8xx identifies a general gateway error. Check the error message and take appropriate action. Contact your account respresentative for further assistance.

| Code| Message |
| ---- | ----- |
| 999 | Unable to Process Transaction. Please Contact Support Team. |


<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md)
- [Error Response](?path=docs/Resources/Guides/Response-Codes/Error-Response.md)

---
