---
tags: [Idempotency, Timeout]
---

# Idempotency

Commerce Hub supports an idempotency operation that allows the same API call to be submitted repeatedly while producing the same result. For example, in the case of a timeout error, a merchant can retry the same API call multiple times; this guarantees that the transaction processes once. Our APIs use the `Client-Request-Id` element to ensure idempotency on transaction requests.

The `Client-Request-Id` is a client-generated number that is unique for each request. It is used as nonce and validated against all `Client-Request-Ids` received by Commerce Hub within a predetermined time frame *(five minutes is the default)* to prevent replay attacks. Commerce Hub uses the timestamp of the request to validate against stale requests. Any request older than the specified duration is rejected.

---

## Scenarios for idempotency

When the below scenarios occur, the merchant can initiate a idempotency on the transaction request:

- The merchant did not received the response for the request within a set time-out period.
- The merchant received a timeout response from the Commerce Hub gateway.

---

## Submit an idempotency request

A merchant can submit an API request using the same `Client-Request-Id` from the original request. Commerce Hub will verify the status of the original request and if the original request received a response from the host will send the original response back to the merchant. If there was no response from the host, Commerce Hub will submit the request to host again for processing.

<!-- theme : info -->
>The merchant can also verify the status of the transaction by initiating a [Transaction Inquiry API request](?path=docs/Resources/API-Documents/Payments/Inquiry.md) using a [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md).

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Inquiry Request](?path=docs/Resources/API-Documents/Payments/Inquiry.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)

---
