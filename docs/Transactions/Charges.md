---
tags: [carat, commerce-hub, card-not-present, card-present, capture, settle, charges]
---

# Charges

## Overview

Charges can be initiated in two ways; either as Sale or Pre-Auth and is defined with the `captureFlag` sent in the request.

- *true* : the transaction will be considered as sale, where the customer will be charged with the transaction amount.

- *false* : the request will be considered a pre-auth request, where the funds on the customer's account will be reserved and a [capture](Capture.md) will be required to withdrawal the funds from the customer.

#### Charge Types

- [**Auth-Only:**](../FAQs-Glossary/Glossary.md#Authorization) Inniated by a merchant to [verify](Verification.md) a customer's account, also known as a $0 auth.
- [**Pre-Auth:**](../FAQs-Glossary/Glossary.md#Pre-Auth) An authorization where the amount approved by the customer is placed on hold to be captured later.
- [**Sale:**](../FAQs-Glossary/Glossary.md#Sale) An authorization where the amount approved by the customer is placed on hold and will be settled at the end of the day.

---

## Minimum Requirements

#### Component: amount

|Variable    |  Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Sub component](../Master-Data/Amount-Components.md) values must add up to total amount. Expected format 0.00. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](../Master-Data/Currency-Code.md).|

#### Component: paymentSource

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](../Master-Data/Source-Type.md). |
|`cardData`| *string* | 19 | Encrypted or unencrypted card data (e.g. PAN, EMV, Track, etc.). | 
|`expirationMonth`| *string* | 2 | 2-digit card expiration date month. |
|`expirationYear`| *string* | 4 | 4-digit card expiration date year. |
|`securityCode` | *string* | 3| The card [security code](../FAQs-Glossary/Glossary.md#security-code).|

#### Component: transactionDetails

|Variable | Data Type| Maximum Length | Description/Values |
|---------|----------|----------------|---------|
|`captureFlag` | *string* | 5 | Designates if the transaction should be captured (*true* for Sale and *false* for Pre-Auth)|

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

##### Example of a Charge Payload Request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard",
    "cardData": "4005550000000019",
    "expirationMonth": "02",
    "expirationYear": "2035",
    "securityCode": "123"
  },
  "transactionDetails": {
    "captureFlag": true
  }
}
```
<!--
type: tab
title: Response
-->

##### Example of a Charge (201: Created) Response.

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
  "paymentSource": "PaymentCard",
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











