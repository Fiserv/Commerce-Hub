---
tags: [carat, commerce-hub, enterprise, split-shipment, vault]
---


# Split Shipment

A split shipment is an ability to [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) an authorization for the full order amount by performing a capture for each item shipped.

Situations in which this could be implemented include:

- Shipment of goods will be split, the cardholder can be charged for each individual shipment.
- Occurs when the goods are not available for shipment at the time of the consumer’s purchase.

<!-- theme: info -->
> If the customer cancels or refunds their order before the last shipment, the `finalShipment` indicator is required to be sent during the [refund](?path=docs/Resources/API-Documents/Payments/Refund.md) or [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) request.

<!-- theme: warning -->
> If the authorization timeframe has expired, a [reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md) is required.

---

## Request Variables

<!--
type: tab
title: splitShipment
-->

The below table identifies the required parameters in the `splitShipment` object.

|Variable |  Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `totalCount` | *integer* | 99 | Required in the capture transaction indicating how many shipments the transaction is devided into. Can be sent in pre-authorization or the first capture.|
| `finalShipment` | *boolean* |  | Used to identify the final capture (*TRUE* or *FALSE*).|

<!--
type: tab
title: JSON Example
-->

JSON string format for `splitShipment`:

```json
{
   "splitShipment":{
      "totalCount":5,
      "finalShipment":true
   }
}
```

<!-- type: tab-end -->

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request using `splitShipment`.

```json
{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "transactionDetails":{
      "captureFlag":true,
      "createToken": true
   },
   "transactionDetails":{
      "splitShipment":{
       "totalCount":5,
       "finalShipment":true
      }
   }  
}
```

<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

```json
{
   "gatewayResponse":{
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
         "currency": "USD"
      },
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK3483",
         "authenticationResponseCode": "string",
         "referenceNumber": "845366457890-TODO",
         "schemeTransactionId": "019078743804756",
         "feeProgramIndicator": "123",
         "processor": "fiserv",
         "responseCode": "00000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2016-04-16T16:06:05Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2016-04-16T16:06:05Z"
         }
      }
   },
   "transactionDetails":{
      "splitShipment":{
       "totalCount": 5,
       "finalShipment": true
      }
   }  
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)

---
