---
tags: [carat, commerce-hub, card-not-present, card-present, reauthorization, reauth, reauthorize, authorization]
---

# Reauthorize

## Overview

A reauthorization with a [token](Payment-Token.md) is required when a pending authorization has been released based on the card issuer's hold times. Unavailable product due to a pre-order or [split shipment](../Guides-Info/Split-Shipment.md) is the most common reason for a reauthorization.

<!-- theme: info -->
>See an account representative for more information on issuer hold times.

---

## Minimum Requirements

#### Component: amount

|Variable    |  Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Sub component](../Master-Data/Amount-Components.md) values must add up to total amount. Expected format 0.00. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](../Master-Data/Currency-Code.md).|

#### Component: transactionDetails

|Variable    |  Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `captureFlag` | *boolean* | 5 | Total amount of the transaction. [Sub component](../Master-Data/Amount-Components.md) values must add up to total amount. Expected format 0.00. |
| `primaryTransactionId` | *string* |  | The `transactionId` from the original transaction passed for a reauthorization.|
| `reauthorizationFlag` | *boolean* | 5 | Identifies the transaction as a reauthorization.|
| `authorizationTypeIndicator` | *string* |  | This tag indicates a transaction that occurs when a merchant captures transaction information while the connectivity is interrupted or unavailable. This tag must be sent in the authorization/purchase/refund transaction once the connectivity is restored.|

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

##### Example of a Reauthorization Payload Request.

```json

{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": false,
    "primaryTransactionId": "838916029300",
    "reauthorizationFlag": true,
    "authorizationTypeIndicator": "REAUTH"
  },
  "splitShipment": {
    "totalCount": 5
    "finalShipment": false
  }
}
```
<!--
type: tab
title: Response
-->

##### Example of a Reauthorization (201: Created) Response.

<!-- theme: info -->
> See [Error Responses](url) for additional examples.
```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
    "transactionState": "authorized",
    "transactionOrigin": "ecom"
  },
  "transactionProcessingDetails": {
    "transactionDate": "2021-04-16",
    "transactionTime": "2021-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "source": "PaymentCard",
  "card": {
    "bin": "400555",
    "last4": "0019",
    "brand": "VISA",
    "expirationMonth": "02",
    "expirationYear": "2035"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": "1.00",
      "currency": "USD"
    },
    "processorResponseDetails": null,
    "approvalStatus": "APPROVED",
    "approvalCode": "OK7118",
    "referenceNumber": "845366457890-TODO",
    "schemeTransactionID": "019078743804756",
    "processor": "fiserv",
    "responseCode": "00",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "54022",
    "hostResponseMessage": "Approved",
    "localTimestamp": "2021-04-16T16:06:05Z",
    "bankAssociationDetails": {
      "associationResponseCode": "000",
      "transactionTimestamp": "2021-04-16T16:06:05Z",
      "transactionReferenceInformation": null,
      "avsSecurityCodeResponse": {
        "streetMatch": "EXACT_MATCH",
        "postalCodeMatch": "EXACT_MATCH",
        "securityCodeMatch": "MATCHED",
        "association": {
          "avsCode": "Z",
          "securityCodeResponse": "S",
          "cardHolderNameResponse": "M"
        }
      }
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](url)
- [Capture](Capture.md)
- [Cancel](Cancel.md)
- [Incremental Auth](Incremental-Auth.md)
- [Refund](Refund.md)
- [Split Shipment](../Guides-Info/Split-Shipment.md)
- [Transaction Details](../Master-Data/Transaction-Details.md)