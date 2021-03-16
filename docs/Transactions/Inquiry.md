---
tags: [carat, commerce-hub, card-not-present, card-present, capture, settle, cancel, refund]
---

# Transaction Inquiry

## Overview

To retrieve the current state of any previous [Charge](Charges.md), an Inquiry request can be submitted against the original `transactionId` or `orderId`.

---

## Minimum Requirements

TransactionIdParam:
      name: transactionId
      schema:
        type: string
      in: path
      required: true
      description: 'Gateway transaction identifier returned in the parameter transactionId from a charge transaction.'

    OrderIdParam:
      name: orderId
      schema:
        type: string
      in: path
      required: true
      description: 'Use this to perform secondary transaction, received from a primary auth or sale.'

##### Component : amount

|Variable    |  Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Sub component values must add up to total amount. 0.00 expected format|
| `currency` | *string* | 3 | [ISO 3 Currency Format](../Master-Data/Currency-Code.md).|

---

## Endpoints

Use the below endpoints based on the [transaction type](../Guides-Info/Transaction-Types.md).

<!-- theme: success -->
>**GET** `/payments/v1/charges/{transactionId}/inquiry`
>
>**GET** `/payments/v1/charges/orders/{orderId}/inquiry`

---

## Payload Examples

##### Example of a Inquiry (200: Success) Response.

<!-- theme: info -->

> See [Error Responses](url) for additional examples.

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
    "transactionState": "authorized",
    "transactionOrigin": "ecom",
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "transactionDetails": {
    "captureFlag": "TRUE",
    "accountVerification": "FALSE",
    "processingCode": "000000",
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO",
    "receiptEmail": "abc@gmail.com",
    "paymentDescription": "",
    "cardVerificationAmount": "0.02",
    "partiallyApprovedTransactionAmount": "0",
    "splitTenderId": "12423434",
    "deviceFingerprint": {
      "provider": "InAuth",
      "dataCapture": {
        "rawData": "aaaaaXREUVZGRlFY...aMV",
        "dataEventId": "BB8E4E92...Fz1E063113",
        "captureTime": "2016-04-16T16:06:05Z"
      },
      "dataStatic": {
        "operatingSystem": "Android",
        "operatingSystemVersion": "5.1.1 Lollipop",
        "model": "XYX-1",
        "type": "Moto G"
      },
      "dataDynamic": {
        "latitude": "13.0827 N",
        "longitude": "80.2707 E",
        "ipAddress": "170.165.02.26",
        "captureTime": "2016-04-16T16:06:05Z"
      }
    },
    "deferredAuthorizationIndicator": "3901"
  },
  "source": {
    "sourceType": "PaymentCard"
  },
  "transactionProcessingDetails": {
    "transactionDate": "2016-04-16",
    "transactionTime": "2016-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  }
}
```



