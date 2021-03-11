# Account Verification

## Overview

Account verification is performed when the merchant wants to confirm that the cardholder account is valid for a transaction. 

<!--theme:info-->
> The merchant can also perform an [address](../Guides-Info/Fraud/Address-Verification.md)) and/or [security code](../Guides-Info/Fraud/Security-Code.md) verification with the request.

---

## Payment Card Requirement

#### Component: source

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](../Master-Data/Source-Type.md). |
|`cardData`| *string* | 19 | Encrypted or unencrypted card data (e.g. PAN, EMV, Track, etc.). | 
|`expirationMonth`| *string* | 2 | 2-digit card expiration date month. |
|`expirationYear`| *string* | 4 | 4-digit card expiration date year. |

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/verification`

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Account Verification Request

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123"
    }
  },
  
  "billingAddress": {
    "name": "Jane Smith",
    "address": {
      "street": "Main Street",
      "houseNumberOrName": "123",
      "city": "Sandy Springs",
      "stateOrProvince": "GA",
      "postalCode": "30303",
      "country": "US"
    }
  }
}

```
<!--
type: tab
title: Response
-->

##### Account Verification Response

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
  "paymentSource": {
    "sourceType": "PaymentCard",
    "tokenData": "1234123412340019",
    "PARId": "string",
    "declineDuplicates": "FALSE",
    "tokenSource": "string",
    "card": {
      "nameOnCard": "Jane Smith",
      "expirationMonth": "05",
      "expirationYear": "2025",
      "bin": "400555",
      "last4": "0019",
      "scheme": "VISA"
    }
  },
  "processorResponseDetails": {
    "approvalStatus": "APPROVED",
    "approvalCode": "OK3483",
    "referenceNumber": "845366457890-TODO",
    "schemeTransactionId": "019078743804756",
    "feeProgramIndicator": "string",
    "processor": "fiserv",
    "responseCode": "00",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "54022",
    "hostResponseMessage": "",
    "localTimestamp": "2016-04-16T16:06:05Z",
    "bankAssociationDetails": {
      "associationResponseCode": "000",
      "transactionTimestamp": "2016-04-16T16:06:05Z",
      "avsSecurityCodeResponse": {
        "streetMatch": "MATCH",
        "postalCodeMatch": "MATCH",
          "association": {
            "avsCode": "BOTH_MATCH",
            "cardHolderNameResponse": "NAME_MATCH",
          }
      }
    }
  },
}
```
<!-- type: tab-end -->