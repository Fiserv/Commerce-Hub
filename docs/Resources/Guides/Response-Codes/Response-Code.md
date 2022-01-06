---
tags: [carat, card-not-present, commerce-hub, error, response, response-codes, card-present]
---

# Gateway Response Codes 

The gateway response code indicates the status of a transaction after Commerce Hub processes the transaction. Commerce Hub includes the response in `responseCode` along with the corresponding message in `responseMessage` fields of the [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md). 

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

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md)
- [Host Response Code](?path=docs/Resources/Guides/Response-Codes/Host-Response-Code.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)

---
