---
tags: [carat, commerce-hub, card-not-present, security-code, fraud, security-code-verification]
---


# Security Code

## Overview
**Security Code Check** - A service where cardholder is prompt to enter the 3-digit Card Verification Value(CVV) manually in order to get the card verify by the issuing system. Security code check is used as a Fraud Prevention measure for the transaction where card holder is not present.

#### Perform Security Check

For the transactions where security check id required, merchant needs to pass the appropriate values for securityCode and  securityCodeIndicator in card object.

---

## Minimum Requirement

#### Component: amount

<!--theme:info-->
>**Note:** amount component is needed for CVV check only if it is initiated with charge request. See [Payload](#charge-request-payload-example) examples for more details.

|Variable    |  Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Sub component](../../Master-Data/Amount-Components.md) values must add up to total amount. Expected format 0.00. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](../../Master-Data/Currency-Code.md).|


#### Component: Source

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](../Payment-Sources/Source-Type.md). |
|`cardData`| *string* | 19 | Encrypted or unencrypted card data (e.g. PAN, EMV, Track, etc.). | 
|`expirationMonth`| *string* | 2 | 2-digit card expiration date month. |
|`expirationYear`| *string* | 4 | 4-digit card expiration date year. |
|`securityCode` | *string* | 3| The card [security code](../../FAQs-Glossary/Glossary.md#security-code).|
|`securityCodeIndicator` | *string* | | Indicates how the security code is passed.|

---

## Charge Request Payload Example

<!-- theme: success -->
>##### Endpoint
>**POST** `/payments/v1/charges`


<!--
type: tab
title: Request
-->

##### Example of Security Check Using Charge Request

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123",
      "securityCodeIndicator": "PROVIDED"
    }
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

##### Charge Response having Security Check Response Fields

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
        "securityCodeMatch": "MATCH",
          "association": {
            "securityCodeResponse": "MATCH",
          }
      }
    }
  },
}
```
<!-- type: tab-end -->

## Verification Request Payload Example

<!-- theme: success -->
>##### Endpoint
>**POST** `/payments-vas/v1/accounts/verification`

<!--
type: tab
title: Request
-->

##### Example of Account Verification Request

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "cardData": "4005550000000019",
    "expirationMonth": "02",
    "expirationYear": "2035",
    "securityCode": "123",
    "securityCodeIndicator": "PROVIDED"
  },
}

```
<!--
type: tab
title: Response
-->

##### Example of a Account Verification Response

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
        "securityCodeMatch": "MATCH",
          "association": {
            "securityCodeResponse": "MATCH",
         }
      }
    }
  },
}
```
<!-- type: tab-end -->

## Security Check Result Codes

The result of checking the cardholder’s entered security code against the Issuer’s system of record is is received in the response. The object `avsSecurityCodeResponse` contains `securityCodeResponse` field which contains the result of the security code check. The Valid Values are

| Value | Description |
| ------- | ------- |
| MATCH | Security Code Value matched |
| NO_MATCH | Security Code Value not matched |
| NOT_PROVIDED | Security Code Value not provided |
| NOT_PROCESSED | Security Code check not processed |
| NO_PARTICIPANT | Issuer not participate in Security Check |
| UNKNOWN | Unknown |

---

## See Also


- [API Explorer](url)
- [Address](../../Master-Data/Address.md)
- [Charge](../../API-Documents/Payments/Charges.md)
- [Payment Card](../Payment-Sources/Source-Type.md)
- [Verification](../../API-Documents/Payments_VAS/Verification.md)

