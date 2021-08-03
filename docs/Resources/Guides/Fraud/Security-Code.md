---
tags: [carat, commerce-hub, card-not-present, enterprise, fraud, security-code, fraud, security-code-verification]
---


# Security Code

Commerce Hub supports [security code](?path=docs/Resources/FAQs-Glossary/Glossary.md#security-code) verification, a service where cardholder is prompted to enter the 3 or 4-digit security code to have it verified by the association bank. Security code verification can be used as a [fraud prevention](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md) measure in card not present transaction.

---

## Request Variables

For the transactions where security code verification is required, the merchant's API is required to pass `securityCode` and `securityCodeIndicator` as part of the card array.

<!--
type: tab
title: card
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`securityCode` | *string* | 3 | The card security code.|
|`securityCodeIndicator` | *string* | N/A | Indicates how the security code is passed. **Valid Values:** NOT_SUPPORTED (Default), PROVIDED, VALUE_ILLEGIBLE,  NOT_AVAILABLE.|

<!--
type: tab
title: JSON Example
-->

JSON string format for `card`:

```json
{
   "card":{
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123",
      "securityCodeIndicator": "PROVIDED"
   }
}
```

<!-- type: tab-end -->

---

## Security Code Verification Request

### Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/verification`

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of a security code verification request.

```json
{
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035",
         "securityCode": "123",
         "securityCodeIndicator": "PROVIDED"
      }
    }
}

```
<!--
type: tab
title: Response
-->

##### Example of a security code verification response.

```json
{
   "gatewayResponse":{
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType": "CHARGES",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "nameOnCard": "Jane Smith",
         "expirationMonth": "02",
         "expirationYear": "2035",
         "bin": "400555",
         "last4": "0019",
         "scheme": "VISA"
      }
   },
   "paymentReceipt":{
      "merchantName": "Merchant Name",
      "merchantAddress": "123 Peach Ave",
      "merchantCity": "Atlanta",
      "merchantStateOrProvince": "GA",
      "merchantPostalCode": "12345",
      "merchantCountry": "US",
      "merchantURL": "https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK3483",
         "authenticationResponseCode": "string",
         "referenceNumber": "845366457890-TODO",
         "schemeTransactionId": "019078743804756",
         "feeProgramIndicator": "123",
         "processor": "fiserv",
         "responseCode": "00000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2016-04-16T16:06:05Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2016-04-16T16:06:05Z",
            "transactionReferenceInformation": "string",
            "avsSecurityCodeResponse":{
               "securityCodeMatch": "MATCHED",
               "association":{
                 "securityCodeResponse": "M"
               }
            }
         }
      }
   }
}
```

<!-- type: tab-end -->

---

## Security Code Verification with Charges Request

### Endpoint

<!-- theme: success -->
>**POST** `/payments/v1/charges`

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of a security code verification during a charges request.

```json
{
   "transactionDetails":{
      "captureFlag":true
   },
   "amount":{
      "total": "12.04",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035",
         "securityCode": "123",
         "securityCodeIndicator": "PROVIDED"
      }
   }
}
```
<!--
type: tab
title: Response
-->

##### Charges response containing security code response details.

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
      "tokenData":"1234123412340019",
      "PARId":"string",
      "declineDuplicates":"FALSE",
      "tokenSource":"string",
      "card":{
         "nameOnCard":"Jane Smith",
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019"
      }
   },
   "processorResponseDetails":{
      "approvalStatus":"APPROVED",
      "approvalCode":"OK3483",
      "authenticationResponseCode":"string",
      "referenceNumber":"845366457890-TODO",
      "schemeTransactionId":"019078743804756",
      "feeProgramIndicator":"123",
      "processor":"fiserv",
      "responseCode":"00000",
      "responseMessage":"APPROVAL",
      "hostResponseCode":"00",
      "hostResponseMessage":"APPROVAL",
      "localTimestamp":"2021.02.25 14:14:38 (EST)",
      "bankAssociationDetails":{
         "associationResponseCode":"000",
         "transactionTimestamp":"2016-04-16T16:06:05Z",
         "avsSecurityCodeResponse":{
            "securityCodeMatch":"MATCH",
            "association":{
               "securityCodeResponse":"M"
            }
         }
      }
   }
}
```

<!-- type: tab-end -->

---

## AVS Security Code Response Values

The result of checking the cardholder’s entered security code with the issuer’s system returns an security code result. The [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) contains the `avsSecurityCodeResponse` object with `securityCodeMatch` value.

The below table identifies the valid values of `securityCodeMatch`.

| Value | Descrption |
| ---- | ------------|
| *M* | Card security code matched |
| *N* | Card security code does not matched |
| *P* | Not processed |
| *S* | Merchant has indicated that the card security code is not present on the card. |
| *U* | Issuer is not certified and/or not provides encryption keys. |
| *X* | No response from the credit card association was received. |
| | A blank code should indicate that no code was sent and that there was no indication that the code was present on the card. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Card Details](?path=docs/Resources/Master-Data/Card.md)
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Prepaid Gift Card](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md)
Fraud-Settings-Restrictions.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
