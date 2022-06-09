---
tags: [API Reference, Commerce Hub Response, Master Data]
---

# Commerce Hub Response

The Commerce Hub Response contains the response parameters for any successful or unsuccessful transaction.


## Gateway Response

Object containing the Commerce Hub response parameters.

<!--
type: tab
titles: gatewayResponse, JSON Example
-->

The below table identifies the parameters in the `gatewayResponse` object.

| Variable | Type | Maximum Length | Description |
| ----- | ----- | ----- | ----- |
| `transactionType` | *string* | 256 | Type of transaction submitted |
| `transactionState` | *string* | 256 | Final [state](#transaction-state) of the transaction |
| `transactionOrigin` | *string* | 4 | Transaction [origin](?path=docs/Resources/Master-Data/Transaction-Interaction.md#transaction-origins) |
| `transactionProcessingDetails` | *object* | N/A | Object containing the [transaction processing details](#transaction-processing-details) |

<!--
type: tab
-->

JSON string format for `gatewayResponse`:

```json
{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZE",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
         "transactionDate": "2016-04-16",
         "transactionTime": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   }
}
```

<!--type: tab-end -->

---

#### Transaction State

The below table identifies the valid values of `transactionState` in the gateway response.

| Value | Description |
|-------|-------------|
| *AUTHORIZED* | Transaction has been authorized |
| *CAPTURED* | Authorization has been captured |
| *CHECKED* | Applicable to account verification and information lookup |
| *DECLINED* | Transaction has been declined |
| *VOIDED* | Transaction has been voided |

<!-- COMPLETED_GET, INITIALIZED, PENDING, READY, TEMPLATE, SETTLED, WAITING -->

--- 

## Transaction Processing Details

Object contains the transaction processing details.

<!--
type: tab
titles: transactionProcessingDetails, JSON Example
-->

The below table identifies the parameters in the `transactionProcessingDetails` object.

| Variable | Type | Maximum Length | Description |
| ----- | ----- | ----- | ----- |
| `orderId` | *string* | 64 | Order identifier returned in the parameter orderId from a Charge trasaction. |
| `transactionDate` | *string* | 64 | Date the transaction occured |
| `transactionTimestamp` | *string* | 64 | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ |
| `apiTraceId` | *string* | 64 | Request identifier in API, can be used to request logs from the support team. |
| `clientRequestId` | *string* | 64 | Echoes back the value in the request header for tracking. |
| `transactionId` | *string* | 64 | Unique identifier for each transaction on the Gateway. This value will be populated for the secondary transaction from the path. |

<!--
type: tab
-->

JSON string format for `transactionProcessingDetails`:

```json
{
   "transactionProcessingDetails":{
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionDate": "2016-04-16'",
      "transactionTimestamp": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7'",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
   }
}
```

<!--type: tab-end -->

--- 

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)

---
