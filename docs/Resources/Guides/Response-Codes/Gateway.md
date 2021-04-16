---
tags: [carat, card-not-present, commerce-hub, error, response, response-code, card-present]
---

# Gateway Response Codes

## Overview

The Gateway Response code indicates the status of a transaction after Commerce Hub gateway processed the transaction. Commerce Hub includes the value in the `responseCode` along with the corresponding text in `responseMessage` fields of the [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md).

<!-- https://escmconfluence.1dc.com/display/CARAT/CARAT+Response+Codes+to+Nashville+Response+Codes+%28from+Spec+Version+2020-2%29+Mapping -->

---

## Commerce Hub Response Codes

<!--
type: tab
title: Invalid Data
-->

The following response codes indicate invalid data in the transaction. In these cases, the data should be changed before attempting to resend the transaction.

| Response Code | Description |
| ----- | -------------- |
| 07 | Terminal Restriction: Try again later |
| 22 | Invalid Credit Card Number |
| 25 | Invalid Expiry Date |
| 26 | Invalid Amount |
| 27 | Invalid Card Holder |
| 28 | Invalid Authorization No |
| 31 | Invalid Verification String |
| 32 | Invalid Transaction Code |
| 57 | Invalid Reference No |
| 58 | Invalid AVS String |
| 60 | Invalid Customer Reference Number |
| 63 | Invalid Duplicate |
| 64 | Invalid Refund |
| 68 | Restricted Card Number |
| 69 | Invalid Transaction Tag |
| 72 | Data within the transaction is incorrect |
| 88 | Invalid Correlation ID |
| 89 | Invalid Transarmor Token |
| 93 | Invalid authorization number entered on a pre-auth completion |
| 95 | Invalid Currency Requested |

<!--
type: tab
title: Merchant Configuration
-->

The following response codes indicate a problem with the merchant configuration at the financial institution. Please contact Account Representative for further investigation.

| Response Code | Description |
| ----- | -------------- |
| 11 | Invalid Sequence No |
| 12 | Message Timed-out at Host |
| 21 | BCE Function Error |
| 23 | Invalid Response from First Data |
| 30 | Invalid Date From Host |

<!--
type: tab
title: Commerce Hub Error
-->

The following response codes indicate a problem with the Commerce Hub host or an error in the merchant configuration. Please contact Account Representative for further investigation.


| Response Code | Description |
| ----- | -------------- |
| 10 | Invalid Transaction Description |
| 14 | Invalid Gateway ID |
| 15 | Invalid Transaction Number |
| 16 | Connection Inactive |
| 17 | Unmatched Transaction |
| 18 | Invalid Reversal Response |
| 19 | Unable to Send Socket Transaction |
| 20 | Unable to Write Transaction to File |
| 24 | Unable to Void Transaction |
| 37 | Payment Type Not Supported By Merchant |
| 40 | Unable to Connect |
| 41 | Unable to Send Logon |
| 42 | Unable to Send Trans |
| 43 | Invalid Logon |
| 52 | Terminal not Activated |
| 53 | Terminal/Gateway Mismatch |
| 54 | Invalid Processing Center |
| 55 | No Processors Available |
| 56 | Database Unavailable |
| 61 | Socket Error |
| 62 | Host not Ready |

<!--
type: tab
title: Miscellaneous
-->

The following response codes indicate the final state of a transaction. In the event of one of these codes being returned, please contact Account Representative for further investigation.

| Response Code | Description |
| ----- | -------------- |
| 08 | CVV2/CID/CVC2 Data not verified |
| 44 | Address not Verified |
| 70 | Transaction Placed in Queue |
| 73 | Transaction Received from Bank |
| 76 | Reversal Pending |
| 77 | Reversal Complete |
| 79 | Reversal Sent to Bank |

<!--
type: tab
title: Suspect Fraud
-->

The following response codes indicate the final state of a transaction due to custom Fraud Filters created by the Merchant.

| Response Code | Description |
| ----- | -------------- |
| F1 | Address check failed |
| F2 | Card/Check Number check failed |
| F3 | Country Check Failed |
| F4 | Customer Reference Check Failed |
| F5 | Email Address check failed |
| F6 | IP Address check failed |

<!--
type: tab
title: Velocity Control Restrictions
-->

The following response codes indicate that a certain threshold is exceeded within the Velocity Controls restrictions:

| Response Code | Description |
| ----- | -------------- |
| 33 | Merchant Volume Exceeded |
| 34 | Card Volume Exceeded |
| 35 | Maximum Sale Exceeded |
| 36 | Below Minimum Sale |
| 38 | IP Volume Exceeded |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Bank Response Code](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)
- [HTTP Response Code](?path=docs/Resources/Guides/Response-Codes/HTTP.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
---
