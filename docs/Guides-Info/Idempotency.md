# Idempotency

## Overview

A property of an operation that states that clients can make that same call repeatedly while producing the same result. For example, in the case of a timeout error, a merchant can retry the same API call multiple times; this guarantees that the transaction processes once. Our REST API uses the `Client-Request-Id` element to ensure idempotency on transaction requests.


## Senarios for Idempotency

When the below scenarios occur, the merchant can initiate a idempotency on the transaction request;

- The merchant did not received the response for the request within a set timeout period
- The merchant received a timeout response from the Commerce Hub gateway.

## Submit a Idempotency Request

Merchant can submit the API request using the same `Client-Request-Id` from the original request. The gateway will verify the current status of the original request and if the response is received from the host. The gateway will send the response back to the merchant else gateway will forward the request to host again for authorization.

-	**Perform an Inquiry on the `transactionId` or `orderId`:** Merchant can get the status of the transaction by initiating the [inquiry](../Transactions/Inquiry.md) transaction using `transactionId` as a reference. The Gateway in response will send the current status of the transaction and as per the response received back from gateway, merchant can take decision whether to re-submit the transaction using same `Client-Request-Id` or to initiate a seperate [charge](../Transactions/Charges.md) request using new `Client-Request-Id`.
