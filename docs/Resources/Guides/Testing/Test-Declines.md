---
tags: [carat, commerce-hub, declines, enterprise, testing]
---


# Test Declines



Decline response codes are issued based on errors received from the processing network or bank. Commerce Hub includes the value in the `hostResponseCode` along with the corresponding text in `hostResponseMessage` fields of the [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md).

Submitting the transaction with a specific dollar amount to get a specific decline response.

There are a number of ways to generate unsuccessful transactions from a test account.

### Simulate unapproved Bank Responses

Merchants can use the dollar amounts between 5000.00 - 5999.00 to trigger a variety of Bank Responses, where the desired response code is added to 5000.

### Simulate unsuccessful Ecommerce Responses

You can use the penny amounts to trigger a variety of eCommerce Responses, where the desired response code is added to 5000.00.

For example, to simulate a transaction that encountered the "Unable to Send Trans" error (code 42) during processing, use 5000.42 as the transaction amount.

Note: If both the dollar and penny amounts would trigger a simulated code (for example, 5200.42), the penny amount trigger will take precedence.


---

| Code| Message |
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
| C2 | CVV2 Declined |

---

## See Also


- [API Explorer](../api/?type=post&path=/payments/v1/capture)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Test Address and Security Code]
- [Test Declines] 
- [Test Errors]


---




