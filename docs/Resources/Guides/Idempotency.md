---
tags: [carat, commerce-hub, idempotency, vault]
---


# Idempotency

A property of an operation that states that clients can make that same call repeatedly while producing the same result. For example, in the case of a timeout error, a merchant can retry the same API call multiple times; this guarantees that the transaction processes once. Our REST API uses the `Client-Request-Id` element to ensure idempotency on transaction requests.

---

## Senarios for Idempotency

When the below scenarios occur, the merchant can initiate a idempotency on the transaction request;

- The merchant did not receive the response for the request within a set timeout period
- The merchant receive a timeout response from the Commerce Hub gateway.

---

## Submit a Idempotency Request

The merchant can submit the API request using the same `Client-Request-Id` from the original request. The gateway will verify the status of the original request and if the transaction was successful, the gateway will send the response back; if unsuccessful, the gateway will resend the transaction for authorization.

<!-- theme : info -->
<!--- >The merchant can also verify the status of the transaction by initiating an [inquiry](?path=docs/Resources/API-Documents/Payments/Inquiry.md) request using `transactionId` or `orderId`.
--->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Inquiry Request](?path=docs/Resources/API-Documents/Payments/Inquiry.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)

---
