---
tags: [carat, commerce-hub, declines, enterprise, testing]
---


# Test Decline Response

A decline response can be triggered when testing a Commerce Hub integration in the sandbox environment by entering a specific `total` in the `amount` object. The dollar amounts between 5001.00 - 5999.00 to trigger a specific decline response, where the desired response code is the last 3 digits.

---

| Amount| Message |
| ---- | ------------ |
| 00 | Transaction has been approved |
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

---

## See Also


- [API Explorer](../api/?type=post&path=/payments/v1/capture)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Test Address and Security Code]
- [Test Declines] 
- [Test Errors]


---




