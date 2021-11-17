---
tags: [carat, commerce-hub, daas, data-as-a-service, data-solutions, enterprise, returns-optimization, returns-optimizer-service, fraud, security, api-reference]
---

# Returns Optimizatoin Service

Returns Optimization Service (EDS) enables sharing of relevant data between like industry merchants to compare cardholder's likelyhood to return a product. Merchants can leverage the data to make a more informed authorization decision in an attempt to reduce refunds.

---

## Request Variables

### Minimum Requirements

The following parameters are required to submit an EDS request: `source` and `merchantId`.

<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|-----|---|-----|-----|-----|
| `sourceType` | *string* |  | &#10004; | Supported sourceTypes: [PaymentToken](#ros-using-paymenttoken). |

<!--
type: tab
title: merchantDetails
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
title: transactionScoreResponse
-->

The below table identifies the response parameters in the `transactionScoreResponse` object.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `merchantId` | *string* | 16 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `alternateMerchantId` | *string* | 16 | An Alternate ID assigned to a merchant based on a Value Added Service. |

<!--
type: tab
title: myReturnScoreDetails
-->

The below table identifies the response parameters in the `myReturnScoreDetails` object.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `merchantId` | *string* | 16 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `alternateMerchantId` | *string* | 16 | An Alternate ID assigned to a merchant based on a Value Added Service. |

<!--
type: tab
title: peerReturnScoreDetails
-->

The below table identifies the response parameters in the `peerReturnScoreDetails` object.

| Variable | Type| Maximum Length | Description |
|-----|---|-----|-----|
| `merchantId` | *string* | 16 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `alternateMerchantId` | *string* | 16 | An Alternate ID assigned to a merchant based on a Value Added Service. |

<!-- type: tab-end -->

---

## ROS using PaymentToken

The merchant can initiate ROS request transaction by passing the token details of the customer and using `PaymentToken` as a payment source.

### Additional Requirements

<!--
type: tab
title: source
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
title: Request
-->

##### Example of an EDS payload request.

```json
{
   "amount": {
      "total": "12.04",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentToken",
      "tokenData": "1234560000000019"
   },
   "transactionDetails": {
      "merchantOrderId": "123456789012",
      "deviceFingerPrint": [
         {
            "dataStatic": {
               "deviceId": "00:1B:44:11:3A:B7"
            },
            "dataDynamic": {
               "latitude": "13.0827 N",
               "longitude": "80.2707 E",
               "ipAddress": "172.27.37.221"
            }
         }
      ]
   },
   "customer": {
      "email": "customer@somedomain.com",
      "phone": [
         {
            "countryCode": "1",
            "phoneNumber": "123-123-1234",
            "type": "MOBILE"
         }
      ]
   },
   "splitTender": {
      "splitTenderMethod": [
         {
            "type": "CREDIT_CARD",
            "count": "1",
            "amount":{
               "total": "7.04"
            }
         },
         {
            "type": "GIFT_CARD",
            "count": "1",
            "amount": {
               "total": "5.00"
            }
         }
      ]
   },
   "shippingAddress": {
      "firstName": "Jane",
      "lastName": "Doe",
      "address": {
         "street": "Main Street",
         "houseNumberOrName": "123",
         "recipientNameOrAddress": "Accounting Department",
         "city": "Sandy Springs",
         "stateOrProvince": "GA",
         "postalCode": "30303",
         "country": "US"
      }
   },
   "merchantDetails": {
      "merchantId": "1234567890123456",
      "alternateMerchantId": "1234567890123456"
   }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/enhanceddata)

<!--
type: tab
title: Response
-->

##### Example of an EDS response.

<!-- theme: info -->
> See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json
{
   "gatewayResponse": {
      "transactionProcessingDetails": {
         "transactionTime": "2021-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "processorResponseDetails":{
      "referenceNumber": "845366457890-TODO"
   }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/enhanceddata)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)

---