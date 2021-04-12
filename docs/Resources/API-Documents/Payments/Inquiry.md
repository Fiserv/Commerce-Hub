---
tags: [carat, commerce-hub, card-not-present, card-present, capture, settle, cancel, refund]
---

# Transaction Inquiry

## Overview

To retrieve the current state of any previous [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md), an Inquiry request can be submitted against the original `transactionId` or `orderId`.

---

## Minimum Requirements

Get transaction inquiry request can be initiated by sending the request to the appopriate endpoint by providing valid `transactionId` or `orderId` with no minimum field requirement.

---

## Endpoints

Use the below endpoints based on the [transaction type](?path=docs/Resources/Guides/Transaction-Types.md).

<!-- theme: info -->
>**GET** `/payments/v1/charges/{transactionId}/inquiry`
>
>**GET** `/payments/v1/charges/orders/{orderId}/inquiry`

---

## Payload Examples

##### Example of a Inquiry (200: Success) Response.

<!-- theme: info -->

> See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"charge",
      "transactionState":"authorized",
      "transactionOrigin":"ecom",
      "transactionProcessingDetails":{
         "transactionDate":"2016-04-16",
         "transactionTime":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "transactionDetails":{
      "captureFlag":"TRUE",
      "accountVerification":"FALSE",
      "processingCode":"000000",
      "merchantTransactionId":"1343678765",
      "merchantOrderId":"845366457890-TODO",
      "receiptEmail":"abc@gmail.com",
      "paymentDescription":"",
      "cardVerificationAmount":"0.02",
      "partiallyApprovedTransactionAmount":"0",
      "splitTenderId":"12423434",
      "deviceFingerprint":{
         "provider":"InAuth",
         "dataCapture":{
            "rawData":"aaaaaXREUVZGRlFY...aMV",
            "dataEventId":"BB8E4E92...Fz1E063113",
            "captureTime":"2016-04-16T16:06:05Z"
         },
         "dataStatic":{
            "operatingSystem":"Android",
            "operatingSystemVersion":"5.1.1 Lollipop",
            "model":"XYX-1",
            "type":"Moto G"
         },
         "dataDynamic":{
            "latitude":"13.0827 N",
            "longitude":"80.2707 E",
            "ipAddress":"170.165.02.26",
            "captureTime":"2016-04-16T16:06:05Z"
         }
      },
      "deferredAuthorizationIndicator":"3901"
   },
   "source":{
      "sourceType":"PaymentCard"
   },
   "transactionProcessingDetails":{
      "transactionDate":"2016-04-16",
      "transactionTime":"2016-04-16T16:06:05Z",
      "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId":"838916029301"
   }
}
```

## See Also

- [API Explorer](url)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)


