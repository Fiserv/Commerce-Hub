---
tags: [carat, commerce-hub, card-not-present, card-present, address-veriffication, fraud, AVS]
---

# Address Verification Services

## Overview

Commerce Hub supports [Address Verification Service (AVS)](?path=docs/Resources/FAQs-Glossary/Glossary.md#addressverificationservice) to verify the cardholder’s [billing address](?path=docs/Resources/Master-Data/Address.md#billingaddress) with the association bank. Address verification can be used as a [fraud prevention](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md) measure in card not present transaction.

---

## Requirements

For the transactions where address verification is required, the merchant's API is required to pass the billing information as part of the request.

#### Object: billingAddress

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `firstName` | *string* |  | Customer first name. |
| `lastName` | *string* |  | Customer last name. |
| `address` | *array* |  | [Billing address](?path=docs/Resources/Master-Data/Address.md#billingaddress) details. |

---

## Verification Request

### Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/verification`

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of an account verification request.

```json
{
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "billingAddress":{
      "firstName": "John",
      "lastName": "Doe",
      "address":{
         "houseNumberOrName": "112",
         "street": "Main St.",
         "city": "Atlanta",
         "stateOrProvince":"GA",
         "postalCode": "30301",
         "country": "US"
      }
   }
}

```
<!--
type: tab
title: Response
-->

##### Example of an account verification response.

```json
{
   "gatewayResponse":{
      "transactionType": "VERIFICATION",
      "transactionState": "CHECKED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
         "transactionDate": "2016-04-16",
         "transactionTime": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "nameOnCard": "Jane Smith",
         "expirationMonth": "05",
         "expirationYear": "2025",
         "bin": "400555",
         "last4": "0019"
      }
   },
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
      "localTimestamp": "2021.02.25 14:14:38 (EST)",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "transactionReferenceInformation": "string",
         "avsSecurityCodeResponse":{
            "streetMatch": "MATCH",
            "postalCodeMatch": "MATCH",
            "association":{
               "avsCode": "YY",
               "cardholderNameResponse": "1"
            }
         }
      }
   }
}
```
<!-- type: tab-end -->

---

## Verification With Charges Request

### Endpoint

<!-- theme: success -->
>**POST** `/payments/v1/charges`

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of an address verification during a charges request.

```json
{
   "transactionDetails":{
      "captureFlag": true
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
         "securityCode": "123"
      }
   },
   "billingAddress":{
      "firstName": "John",
      "lastName": "Doe",
      "address":{
         "houseNumberOrName": "112",
         "street": "Main St.",
         "city": "Atlanta",
         "stateOrProvince": "GA",
         "postalCode": "30301",
         "country": "US"
      }
   }
}
```

<!--
type: tab
title: Response
-->

##### Charges response containing AVS details.

```json
{
   "gatewayResponse":{
      "transactionType": "VERIFICATION",
      "transactionState": "CHECKED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
         "transactionDate": "2016-04-16",
         "transactionTime": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "nameOnCard": "Jane Smith",
         "expirationMonth": "05",
         "expirationYear": "2025",
         "bin": "400555",
         "last4": "0019"
      }
   },
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
      "localTimestamp": "2021.02.25 14:14:38 (EST)",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "transactionReferenceInformation": "string",
         "avsSecurityCodeResponse":{
            "streetMatch": "MATCH",
            "postalCodeMatch": "MATCH",
            "association":{
               "avsCode": "YY",
               "cardholderNameResponse": "1"
            }
         }
      }
   }
}
```
<!-- type: tab-end -->

---

## Response Values

The result of checking the cardholder’s postal code and address information provided against the Issuer’s system of record is termed as AVS Result code. The [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) contains the AVS response from the bank.

#### Object: avsCode

| Value | Description |
| ------- | ------- |
| *BOTH_MATCH* | Both Street and Zip Code Match. |
| *STREET_ONLY* | Street Address matches, ZIP Code does not. |
| *ZIP_ONLY* | ZIP Code matches, Street Address does not. |
| *5_DIGIT_ZIP_ONLY* | 5 digit ZIP Code match only. |
| *NO_MATCH* | No Address or ZIP Code match. |
| *UNAVAILABLE* | Address information is unavailable for that account number, or the card issuer does not support. |
| *NON_US* | Service Not supported, non-US Issuer does not participate. |
| *RETRY* | Issuer system unavailable, retry later. |
| *NOT_MOTO* | Not a mail or phone order. | 
| *NOT_SUPPORTED* | Service not supported. |
| *INTERNATIONAL_BOTH_MATCH* | International street address and postal code match. |
| *INTERNATIONAL_STREET_ONLY* |  International street address match, postal code not verified due to incompatible formats. |
| *INTERNATIONAL_POSTAL_ONLY* | International street address and postal code not verified due to incompatible formats. |
| *INTERNATIONAL_NO_MATCH* | International postal code match, street address not verified due to incompatible format. |


#### Object: cardHolderNameResponse

<!-- theme: info -->
> Cardholder name response is only valid on American Express (AMEX) transactions.

| Value | Description |
| ------- | ------- |
| *1* | Cardholder name matches. |
| *2* | Cardholder name, billing address, and postal code match. |
| *3* | Cardholder name and billing postal code match. |
| *4* | Cardholder name and billing address match. |
| *5* | Cardholder name incorrect, billing address and postal code match. |
| *6* | Cardholder name incorrect, billing postal code matches. |
| *7* | Cardholder name incorrect, billing address matches. |
| *8* | Cardholder name, billing address, and postal code are all incorrect. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/accounts/verification)
- [Address Component](?path=docs/Resources/Master-Data/Address.md)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
