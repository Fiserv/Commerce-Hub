---
tags: [carat, commerce-hub, card-not-present, card-present, capture, settle, cancel, refund]
---

# Transaction Inquiry

## Overview

To retrieve the current state of any previous [Charge](Charges.md), an Inquiry request can be submitted against the original `transactionId` or `orderId`.

---

## Minimum Requirements

##### Component : amount

|Variable    |  Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Sub component values must add up to total amount. 0.00 expected format|
| `currency` | *string* | 3 | [ISO 3 Currency Format](../Master-Data/Currency-Code.md).|

<!-- theme: success -->
>##### Endpoints
>**POST** `/payments/v1/charges/{transactionId}/inquiry`
>- Use this endpoint to submit a Inquiry request by `transactionId`
>
>**POST** `/payments/v1/charges/orders/{orderId}/inquiry`
>- Use this endpoint to submit a Inquiry request by `orderId`

---

## Payload Examples

<!--
type: tab
title: Request
-->

##### Example of a Inquiry Payload Request.

```json
{
  "code"
  }
}
```

<!--
type: tab
title: Response
-->

##### Example of a Inquiry (200: Success) Response.

<!-- theme: info -->

> See [Error Responses](url) for additional examples.

```json
{
  "code"
      }
    }
  }
}
```

<!-- type: tab-end -->