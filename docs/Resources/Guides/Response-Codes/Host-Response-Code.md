---
tags: [Card Not Present, Error, Response, Responses Code, Card Present]
---

# Host Response Codes

Commerce Hub receives host response codes from the processing network or bank. Commerce Hub includes the response in `hostResponseCode` along with the corresponding message in `hostResponseMessage` fields of the [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md).

---

## Nashville Response Codes

The below table identifies the valid values of `hostResponseCode` along with `hostResponseMessage`.

| Response Code| Message |
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

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md)
- [Response Code](?path=docs/Resources/Guides/Response-Codes/Response-Code.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)

---
