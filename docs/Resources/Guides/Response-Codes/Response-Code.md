---
tags: [carat, card-not-present, commerce-hub, error, response, response-codes, card-present]
---

# Gateway Response Codes

The gateway response code indicates the status of a transaction after Commerce Hub receives the transaction. Commerce Hub includes the value in the `responseCode` along with the corresponding text in the `responseMessage` fields of the [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md).

<!-- https://escmconfluence.1dc.com/display/CARAT/CARAT+Response+Codes+to+Nashville+Response+Codes+%28from+Spec+Version+2020-2%29+Mapping - CARAT Mapping

https://support.payeezy.com/hc/en-us/articles/203730509-First-Data-Payeezy-Gateway-Bank-Response-Codes - Payeezy

https://support.payeezy.com/hc/en-us/articles/203730499-eCommerce-Response-Codes-ETG-Payeezy-Gateway-Transaction-Codes- - Payeezy Gateway

https://escmconfluence.1dc.com/display/ACCOR/IPG+response+codes - IPG Responses


commerce hub response code can come back in error responsecode or response code

if the txn doesnt get to the processor then it is a errr code (http 4xx) else it is a response code in (2xx).

-->

---

## Commerce Hub Response Codes

The below table identifies the valid values of `responseCode` along with `responseMessage`.

| Response Code | Description |
| ---------- | --------------- |
| 000 | Approved |
| 001 | Referral: Call Bank/Issuer |
| 006 | Declined |
| 007 | Declined: Do Not Honor |
| 009 | Declined: Duplicate Transaction |
| 012 | Declined: Security Code Failure |
| 022 | Excessive PIN Attempts |
| 023 | Invalid PIN |
| 026 | Invalid Card or Account Number |
| 028 | Account Blocked, Frozen or Restricted |
| 032 | Expired Card or Card Not Activated |
| 039 | Retry: Try Again Later |
| 041 | Service Not Allowed |
| 050 | Host Key Error |
| 105 | Invalid Amount or Currency |
| 201 | Invalid Merchant ID or Setup |
| 202 | Invalid Terminal ID or Setup |
| 245 | Invalid Transaction: Not Allowed |
| 360 | Exceeds Withdrawal Limit |
| 705 | System Error or Problem |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Host Response Code](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)
- [HTTP Response Code](?path=docs/Resources/Guides/Response-Codes/HTTP.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)

---
