---
tags: [carat, card-not-present, commerce-hub, error, response, response-code, card-present]
---

# Host Response Codes

## Overview

Commerce Hub receives Host Response Codes from the processing network or bank. Commerce Hub includes the value in the `hostResponseCode` along with the corresponding text in `hostResponseMessage` fields of the [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md).

---

## Nashville Response Codes

<!-- https://docs.firstdata.com/org/gateway/node/473 -->

| Code| Message |
| ---- | ------------ |
| 00 | Transaction has been approved. |
| 01 | Refer to issuer |  
| 03 | Invalid merchant |
| 05 | The credit card being used for the transaction has been rejected by the issuer. |
| 12 | Invalid transaction |
| 13 | Invalid amount |
| 14 | Invalid card number |
| 25 | Invalid terminal |
| 28 | Please retry | 
| 51 | Declined |
| 54 | Wrong expiration/expired card |
| 55 | Incorrect PIN |
| 57 | Invalid txn for card |
| 60 | Declined |
| 61 | Exceeds withdrawal limit |
| 63 | Service not allowed |
| 69 | Host key error |
| 75 | PIN try exceeded |
| 89 | Invalid Terminal ID |
| 91 | System error |
| 94 | Duplicate transaction |
| C2 | CVV2 Declined |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Gateway Response Code](?path=docs/Resources/Guides/Response-Codes/Gateway.md)
- [HTTP Response Code](?path=docs/Resources/Guides/Response-Codes/HTTP.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)

---