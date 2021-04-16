---
tags: [carat, commerce-hub, payment-token, tokenization]
---


# Payment Token

## Overview

**[Tokenization](../../FAQs-Glossary/Glossary.md#tokenization)** is a process of replacing sensitive data with non-sensitive equivalent, referred to as a token. Merchant either can submit a request to tokenize a payment card as part of a [charge1](#chargerequest) by using `createToken`, or can tokenize the card separately by sending a request to the [tokens](#tokenrequest) endpoints.

<!-- theme: info -->
> Merchants utilizing multiple tokenization services `tokenProvider` is required.

---

## Charge Request

#### Required Field

- `createToken`: *boolean* : *true*

<!-- theme: warning -->
> For merchants using multiple tokenization services, `tokenProvider` is a required field.

### Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request with `createToken`.

```json
{
   "amount":{
      "total":"1.00",
      "currency":"USD"
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "expirationMonth":"02",
         "expirationYear":"2035",
         "securityCode":"123"
      }
   },
   "transactionDetails":{
      "captureFlag":false,
      "createToken":true,
      "tokenProvider":"RSA"
   }
}
```
<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) tokenization response.

```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"token",
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
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "nameOnCard":"Jane Smith",
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019",
         "scheme":"VISA"
      }
   },
   "paymentToken":{
      "tokenData":"1234123412340019",
      "PARId":"1234567895461303321654",
      "declineDuplicates":"FALSE",
      "tokenSource":"RSA"
   },
   "processorResponseDetails":{
      "approvalStatus":"APPROVED",
      "approvalCode":"OK3483",
      "referenceNumber":"845366457890-TODO",
      "schemeTransactionId":"019078743804756",
      "feeProgramIndicator":"string",
      "processor":"fiserv",
      "responseCode":"00",
      "responseMessage":"APPROVAL",
      "hostResponseCode":"54022",
      "hostResponseMessage":"",
      "localTimestamp":"2016-04-16T16:06:05Z",
      "bankAssociationDetails":{
         "associationResponseCode":"000",
         "transactionTimestamp":"2016-04-16T16:06:05Z"
      }
   }
}
```
<!-- type: tab-end -->

---

## Token Request

#### Required Field

<!-- theme: warning -->
> For merchants using multiple tokenization services, `tokenProvider` is a required field.

### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/tokens`

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of a token only payload request.

```json
{
  "amount": {
    "total": "0.02",
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
    "captureFlag": false
    "tokenProvider": "RSA"
  }
}
```
<!--
type: tab
title: Response
-->

##### Example of a tokenization (201: Created) response.

```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"token",
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
   "paymentSource":{
      "sourceType":"PaymentCard",
      "tokenData":"1234123412340019",
      "PARId":"string",
      "declineDuplicates":"FALSE",
      "tokenSource":"string",
      "card":{
         "nameOnCard":"Jane Smith",
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019",
         "scheme":"VISA"
      }
   },
   "processorResponseDetails":{
      "approvalStatus":"APPROVED",
      "approvalCode":"OK3483",
      "referenceNumber":"845366457890-TODO",
      "schemeTransactionId":"019078743804756",
      "feeProgramIndicator":"string",
      "processor":"fiserv",
      "responseCode":"00",
      "responseMessage":"APPROVAL",
      "hostResponseCode":"54022",
      "hostResponseMessage":"",
      "localTimestamp":"2016-04-16T16:06:05Z",
      "bankAssociationDetails":{
         "associationResponseCode":"000",
         "transactionTimestamp":"2016-04-16T16:06:05Z"
      }
   }
}
```
<!-- type: tab-end -->

## Submit a Charge

### Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of a Charge Payload Request with tokenization.

```json
{
  "amount": {
    "total": "1.00",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentToken",
    "tokenData": "1234567890120019",
    "expirationMonth": "02",
    "expirationYear": "2035",
    "securityCode": "123"
  },
  "transactionDetails": {
    "captureFlag": true
  },
}
```
<!--
type: tab
title: Response
-->

##### Example of a Charge Payload Response with tokenization.

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
  "paymentSource": "PaymentToken",
  "card": {
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

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md)

---
