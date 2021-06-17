---
tags: [carat, commerce-hub, enterprise, card-not-present, card-present, credit, api-reference, authorization, sale, pre-auth]
---


# Credit

## Overview
A Credit or Open Credit is a refund to a card without an original authorization on the Commerce Hub APIs. Use credit payload to perform a partial or full credit without a `transactionID` or `orderID`.

<!-- theme: danger -->
>**Note:** This should only be performed if a prior authorization was performed on a different API, merchant account, or device; otherwise utilize [refund](?path=docs/Resources/API-Documents/Payments/Refund.md).

---

## Minimum Requirements

#### Component: amount

| Variable    |  Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Sub component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Master-Data/Currency-Code.md).|

#### Component: source

| Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment source type. **Valid Values:** PaymentCard[source type](?path=docs/Guides/Payment-Sources/Source-Type.md) or [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md). |

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

---

## Payload Examples

<!--
type: tab
title: Request
-->

##### Example of a credit payload request.

```json
{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "expirationMonth":"02",
         "expirationYear":"2035",
         "securityCode":"123",
         "securityCodeIndicator":"PROVIDED"
      }
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/credits)

<!--
type: tab
title: Response
-->

##### Example of a credit (201: Created) response.

<!-- theme: info -->
> See [HTTP Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.
```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"credit",
      "transactionState":"credited",
      "transactionOrigin":"ecom"
   },
   "transactionProcessingDetails":{
      "transactionDate":"2021-04-16",
      "transactionTime":"2021-04-16T16:06:05Z",
      "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId":"838916029301"
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "bin":"400555",
         "last4":"0019",
         "brand":"VISA",
         "expirationMonth":"02",
         "expirationYear":"2035"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total":"1.00",
         "currency":"USD"
      },
      "processorResponseDetails":null,
      "approvalStatus":"APPROVED",
      "approvalCode":"OK7118",
      "referenceNumber":"845366457890-TODO",
      "schemeTransactionID":"019078743804756",
      "processor":"fiserv",
      "responseCode":"00",
      "responseMessage":"APPROVAL",
      "hostResponseCode":"54022",
      "hostResponseMessage":"Approved",
      "localTimestamp":"2021-04-16T16:06:05Z",
      "bankAssociationDetails":{
         "associationResponseCode":"000",
         "transactionTimestamp":"2021-04-16T16:06:05Z",
         "transactionReferenceInformation":null
      }
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/credit)
- [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)

---