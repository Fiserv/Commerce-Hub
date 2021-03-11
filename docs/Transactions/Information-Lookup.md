# Account Information Lookup

## Overview

If the merchant wants to verify card related information of the cardholder such as issuer country, card function and card brand associated with a card or token, then the merchant can initiate the account information lookup request.

---

## Minimum Requirement

#### Component: source

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](../Master-Data/Source-Type.md). |
|`cardData`| *string* | 19 | Encrypted or unencrypted card data (e.g. PAN, EMV, Track, etc.). | 

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/information`

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Account Information lookup Request

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "cardData": "4005550000000019",
  }
}

```
<!--
type: tab
title: Response
-->

##### Account Information Lookup Response

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "token",
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
  
  "CardDetails": {
    "brand": "VISA",
    "brandProductId": "VISA_BUSINESS",
    "cardFunction": "CREDIT",
    "commercialCard": "CORPORATE",
    "issuerCountry": "US",
    "issuerName": "First National Bank of Omaha"
    
  },
}
```
<!-- type: tab-end -->
