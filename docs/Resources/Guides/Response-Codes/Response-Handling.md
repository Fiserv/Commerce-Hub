---
tags: [carat, commerce-hub, enterprise, response-codes-and-messages, host, gateway, http]
---


# Response Code and Message Handling

Response codes identify the final status of the transaction from the Gateway, Host and/or Server (HTTP). The codes and messages are unique per transaction status which includes; approvals, declines and rejects. 

- **Host Response:** the response which is received by the processing [host](?path=docs/Resources/Guides/Response-Codes/Host-Response-Code.md) *(network or bank)*.

- **Gateway Response:** indicates the status in a [successful response](?path=docs/Resources/Guides/Response-Codes/Response-Code.md) or [error response](?path=docs/Resources/Guides/Response-Codes/Error.md) after Commerce Hub receives the transaction.

- **HTTP Response:** the 3 digit [HTTP response code](?path=docs/Resources/Guides/Response-Codes/HTTP.md) which Commerce Hub responds back to the API request.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Host Response Codes](?path=docs/Resources/Guides/Response-Codes/Host-Response-Code.md)
- [HTTP Response Codes](?path=docs/Resources/Guides/Response-Codes/HTTP.md)
- [Error Response Codes](?path=docs/Resources/Guides/Response-Codes/Error.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
- [Response Codes](?path=docs/Resources/Guides/Response-Codes/Response-Code.md)

---