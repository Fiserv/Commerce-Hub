# Account Verification

## Overview

Bank account verification is performed when the merchant wants to confirms that the cardholder account which is used for the transaction is a valid bank account. 

<!--theme:info-->
>**Note:** Merchant can also get Address Verification ([AVS check](../Guides-Info/Fraud/Address-Verification.md)) and Security Code ([CVV check](../Guides-Info/Fraud/Security-Code.md)) along with Account verification request.

---

## Minimum Requirement

#### Component: source

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](../Master-Data/Source-Type.md). |
|`cardData`| *string* | 19 | Encrypted or unencrypted card data (e.g. PAN, EMV, Track, etc.). | 
|`expirationMonth`| *string* | 2 | 2-digit card expiration date month. |
|`expirationYear`| *string* | 4 | 4-digit card expiration date year. |
|`securityCode` | *string* | 3| The card [security code](../FAQs-Glossary/Glossary.md#security-code).|

#### Component: billingAddress

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `firstName` | *string* |  | Customer first name. |
| `lastName` | *string* |  | Customer last name. |
| `address` | *component* |  | Billing [address](../../Master-Data/Address.md#address) details. |

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