---
tags: [Data as a Service, Data Solutions, Returns Optimization, Returns Optimizer Service, Fraud, Security, API Reeference]
---

# Returns Optimization Service

Returns Optimization Service enables sharing of relevant data between like industry verticals by receiving a consumer return report. Merchants can leverage the data to make a more informed transaction decision in an attempt to reduce refunds.

The service will help merchants reduce returns in real-time at the time of purchase or return through targeted incentives for "High Returners" identified using Fiserv's data analytics.

---

## Request Variables

### Minimum Requirements

The following parameters are required to submit an Returns Optimization request: `source` and `merchantId`.

<!--
type: tab
titles: source, merchantDetails
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|-----|---|-----|-----|-----|
| `sourceType` | *string* |  | &#10004; | Supported source types: [PaymentToken](#ros-using-paymenttoken). |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Type| Maximum Length | Required | Description |
|-----|---|-----|-----|-----|
| `merchantId` | *string* | 16 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |

<!-- type: tab-end -->

---

## Response Variables

The following response variables can be utilized to make an informed decision on the likelyhood of a customer return.

<!--
type: tab
titles: transactionScoreResponse, myReturnScoreDetails, peerReturnScoreDetails
-->

The below table identifies the response parameters in the `transactionScoreResponse` object.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `invocationId` | *string* | N/A | Unique Identifier associated with the invocation response |
| `consumerType` | *string* | N/A | Indicator for NEW or EXISTING customer. myReturnScoreDetails and peerReturnScoreDetails will not be present for new customers. |
| `modelId` | *string* | N/A | Identifies the model version that was used to score this transaction request for a Return probability. |
| `myReturnScoreDetails` | *object* | N/A | Details associated with the returns score based on the merchants profile. |
| `peerReturnScoreDetails` | *object* | N/A | Details associated with the returns score based on the peer profile. |

<!--
type: tab
-->

The below table identifies the response parameters in the `myReturnScoreDetails` object.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `score` | *integer* | 3 | Normalized score of a return probability. 0 indicating a low returner and 100 indicating a high returner. |
| `returnProbabilityProfile` | *string* | 16 | Bucketed return probability profile, HIGH or LOW. |

<!--
type: tab
-->

The below table identifies the response parameters in the `peerReturnScoreDetails` object.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `averageReturnValue` | *number* | 19,3 | Average amount value returned (ARV) |
| `averageOrderValue` | *number* | 19,3 | Average amount value spent (AOV) |
| `percentSalesReturned` | *number* | 3 | % of sales returned (by Amount) |

<!-- type: tab-end -->

---

## PaymentToken Request

The merchant can initiate Returns Optimization request by passing the token details of the customer and using `PaymentToken` as a payment source.

### Additional Requirements

<!--
type: tab
titles: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|-----|---|-----|-----|-----|
|`sourceType` | *string* | 15 | &#10004; | Value *PaymentToken* is used for a Enhanced Data Request request using a token. |
|`tokenData` | *string* | 2048 | &#10004; | TransArmor token created from the payment source. |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/daas/v1/returnoptimizer`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a Returns Optimizer payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "1234560000000019"
  },
  "merchantDetails": {
    "merchantId": "1234567890123456"
  }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/enhanceddata)

<!--
type: tab
-->

##### Example of a Returns Optimizer response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "transactionScoreResponse": {
    "invocationId": "ad0760bf-2db5-4ba9-b294-0d2241ff58f8",
    "consumerType": "EXISTING",
    "modelId": "1.0.0",
    "myReturnScoreDetails": {
      "score": "100",
      "returnProbablilityRate": "HIGH"
    },
    "peerReturnScoreDetails": {
      "averageReturnValue": "45.53",
      "averageOrderValue": "275.25",
      "percentSalesReturned": "0.3"
    }
  },
  "processorResponseDetails": {
    "referenceNumber": "845366457890-TODO"
  }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/data-solutions/v1/returnoptimizer)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/DaaS/Enhanced-Data-Service.md)

---
