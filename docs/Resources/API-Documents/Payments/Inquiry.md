---
tags: [carat, commerce-hub, enterprise, inquiry, transaction-inquiry, transaction-status,api-reference,]
---

# Transaction Inquiry

To retrieve the current state of any previous [charge](?path=docs/Resources/API-Documents/Payments/Charges.md), an inquiry request can be submitted against the original `transactionId` or `orderId`.

---

## Minimum Requirement

Get transaction inquiry request can be initiated by sending the request to the appropriate endpoint by providing valid `transactionId` or `orderId` with no minimum field requirement. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/charges/{transactionId}/inquiry)

---

## Endpoints

Use the below endpoints based on the [transaction type](?path=docs/Resources/Guides/Transaction-Types.md).

<!-- theme: info -->
>**GET** `/payments/v1/charges/{transactionId}/inquiry`
>
>**GET** `/payments/v1/charges/orders/{orderId}/inquiry`

---

## Payload Example

<!--
type: tab
title: Response
-->

##### Example of an inquiry (201: Success) response.

<!-- theme: info -->


> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{
  "gatewayResponse": {
    "transactionType": "string",
    "transactionState": "string",
    "transactionOrigin": "string",
    "transactionProcessingDetails": {
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionTimestamp": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7'",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "transactionDetails": {
    "approvalCode": "string",
    "primaryTransactionId": "838916029301",
    "captureFlag": false,
    "transactionCaptureType": "TCS",
    "accountVerification": false,
    "partialApproval": "string",
    "processingCode": "000000",
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO",
    "merchantInvoiceNumber": "123890",
    "receiptEmail": "abc@gmail.com",
    "paymentDescription": "string",
    "cardVerificationAmount": 0.02,
    "partiallyApprovedTransactionAmount": 10.55,
    "splitTenderId": "12423434",
    "authorizationTypeIndicator": "REAUTH",
    "duplicateTransactionCheckingIndicator": true,
    "primaryTransactionType": "CHARGE_SALE",
    "vaultFundingSource": true,
    "deviceFingerprint": [
      {
        "provider": "InAuth",
        "dataCapture": {
          "rawData": "aaaaaXREUVZGRlFY...aMV",
          "dataEventId": "BB8E4E92...Fz1E063113",
          "captureTime": "2016-04-16T16:06:05Z"
        },
        "dataStatic": {
          "operatingSystem": "ANDROID",
          "operatingSystemVersion": "5.1.1 Lollipop",
          "model": "XYX-1",
          "type": "Moto G",
          "deviceId": "00:1B:44:11:3A:B7",
          "javaScriptEnabled": true,
          "javaEnabled": true,
          "userAgent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",
          "locale": "en-US"
        },
        "dataDynamic": {
          "latitude": "13.0827 N",
          "longitude": "80.2707 E",
          "ipAddress": "172.27.37.221",
          "captureTime": "2016-04-16T16:06:05Z",
          "address": {
            "street": "123 Main Street",
            "houseNumberOrName": "Apt 213",
            "recipientNameOrAddress": "ATTN: Accounting Dept",
            "city": "Sandy Springs",
            "stateOrProvince": "GA",
            "postalCode": "30303-0001",
            "country": "US",
            "addressHistory": "OVER_90_DAYS"
          }
        }
      }
    ],
    "splitShipment": {
      "totalCount": 5,
      "finalShipment": true
    },
    "reversalReasonCode": "VOID",
    "physicalGoodsIndicator": true,
    "authorizationSequence": "CANCEL_BEFORE_AUTHORIZATION",
    "createToken": false
  },
  "source": {
    "sourceType": "PaymentCard"
  },
  "transactionProcessingDetails": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionTimestamp": "2016-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7'",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  }
}
```

<!-- type: tab-end -->

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/inquiry)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
