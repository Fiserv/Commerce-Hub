---
tags: [carat, card-not-present, commerce-hub, error, response, response-codes, card-present]
---

# Gateway Response Codes 

The gateway response code indicates the status of a transaction after Commerce Hub processes the transaction. Commerce Hub includes the response in `responseCode` along with the corresponding message in `responseMessage` fields of the [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md). 

The below table identifies the valid values of `responseCode` along with `responseMessage`.

| Response Code | Description |
| ---------- | --------------- |
| 000 | Approved |
| 002 | Pending Approval |
| 003 | Referral: Call For Voice Auth |
| 004 | Referral: Call Bank/Issuer |
| 005 | Referral: Call Acquirer |
| 006 | Declined |
| 007 | Declined: Do Not Honor |
| 008 | Declined: Insufficient Funds |
| 009 | Declined: Duplicate Transaction |
| 010 | Declined: Over Amount/Floor Limit |
| 011 | Declined: Over Transaction Limit |
| 012 | Declined: Security Code Failure |
| 013 | Declined: Hard - Do Not Try Again |
| 014 | Declined: Violation of Law 
| 015 | Declined: Negative Data |
| 016 | Declined: Per Cardholder Request |
| 017 | Lost or Stolen |
| 018 | Suspected Fraud |
| 019 | Suspected Chip Manipulation |
| 020 | Suspected Counterfeit Card
| 021 | PIN Required |
| 022 | Excessive Pin Attempts |
| 023 | Invalid PIN | 
| 024 | PIN Not Active |
| 025 | Account Not On File |
| 026 | Invalid Card or Account Number |
| 027 | Invalid Account Type |
| 028 | Account Blocked, Frozen or Restricted |
| 029 | Blocked OVerseas |
| 030 | Closed Account |
| 031 | New Card/Account Issued |
| 032 | Expired Card or Card Not Activated |
| 033 | Expiration Date Mismatch |
| 034 | Bill Payment or Recurring Not Supported |
| 035 | One Time Stop Bill Payment Requested |
| 036 | Stop Payment Requested for All Bill Payments |
| 037 | ACH Non-Participant
| 038 | Outstanding Auth: Funds on Hold |
| 039 | Retry: Try Again Later |
| 040 | Transaction Not Allowed |
| 041 | Service Not Allowed |
| 042 | Invalid DETOK |
| 043 | Approved Authorization, Honor with Identification |
| 044 | Approved Authorization, VIP Approval |
| 045 | Pickup Card |
| 046 | Declined: Bad Authoriation Number |
| 048 | Cardholder Authentication Required |
| 050 | Host Key Error |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md)
- [Error Codes](?path=docs/Resources/Guides/Response-Codes/Error-Code.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)

---
