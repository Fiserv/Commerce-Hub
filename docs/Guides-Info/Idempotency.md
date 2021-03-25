# Idempotency

## Overview

A property of an operation that states that clients can make that same call repeatedly while producing the same result. For example, in the case of a timeout error, it is possible to safely retry sending the same API payment call multiple times with the guarantee that the payment detail will be charged only once. Our RESTful API's uses the `Client-Request-Id` element to ensure idempotency on transaction requests.

## Senarios for Idempotency

If any of the below scenario happens a merchant can initiate the idempotency on the transaction request.

- If the merchant did not received the response for the charge request it sent within a set timeout period.
- If the merchant received a timeout response from the gateway.

## Submit a Idempotency Request

The merchant can initiate the usig below ways

-	**Re-submit the same API request using the same `Client-Request-Id`:** Merchant can submit the [charge](../Transactions/Charges.md) request again using the same Client-Request-Id as that of original request to gateway, then gateway will check what is the current status of the original request and if the response is received from the host, gateway will send that response back to the merchant else gateway will forward the request to host again for authorization.

-	**Perform an Inquiry on the `transactionId` or `orderId`:** Merchant can get the status of the transaction by initiating the [inquiry](../Transactions/Inquiry.md) transaction using `transactionId` as a reference. The Gateway in response will send the current status of the transaction and as per the response received back from gateway, merchant can take decision whether to re-submit the transaction using same `Client-Request-Id` or to initiate a seperate [charge](../Transactions/Charges.md) request using new `Client-Request-Id`.
