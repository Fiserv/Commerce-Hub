---
tags: [carat, commerce-hub, idempotency, vault]
---


# Idempotency

A property of an operation that states that clients can make that same call repeatedly while producing the same result. For example, in the case of a timeout error, a merchant can retry the same API call multiple times; this guarantees that the transaction processes once. Our REST API uses the `Client-Request-Id` element to ensure idempotency on transaction requests.

---

## Senarios for Idempotency

When the below scenarios occur, the merchant can initiate a idempotency on the transaction request;

- The merchant did not received the response for the request within a set timeout period
- The merchant received a timeout response from the Commerce Hub gateway.

---

## Submit a Idempotency Request

The merchant can submit the API request using the same `Client-Request-Id` from the original request. The gateway will verify the status of the original request and if the response received from the host, the gateway will send the response back to the merchant else, gateway will forward the request to host again for authorization.

<!-- theme : info -->
>The merchant can also verify the status of the transaction by initiating an [inquiry](?path=docs/Resources/API-Documents/Payments/Inquiry.md) request using `transactionId` or `orderId`.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Inquiry](?path=docs/Resources/API-Documents/Payments/Inquiry.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)

---
