# Address Verification Services

## Overview

**Address Verification Services (AVS)** - A service in which the merchant verifies the cardholder’s [billing address](../../Master-Data/Address.md#billing-address). [AVS](../../FAQs-Glossary/Glossary.md#avs) is widely used Fraud Prevention measure for the transaction where the card holder is not present.

#### Perform AVS Check

The Merchant can get the cardholder's address verification done by either submitting the verification request or sending the billing address information in during a charge request.

---

## Minimum Requirement

#### Component: amount

<!--theme:info-->
> Amount component is needed for AVS check only if it is initiated with charge request. See [Payload](#charge-request-payload-example) examples for more details.

#### Component: billingAddress

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `firstName` | *string* |  | Customer first name. |
| `lastName` | *string* |  | Customer last name. |
| `address` | *component* |  | Billing [address](../../Master-Data/Address.md#address) details. |

---

## Charge Request Payload Example

<!-- theme: success -->
>##### Endpoint
>**POST** `/payments/v1/charges`

<!--
type: tab
title: Request
-->

##### Example of Address Verification Using Charge Request

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

##### Charge Response having AVS Response Fields

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

---

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
    "securityCode": "123"
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

---

## AVS Result Codes

The result of checking the cardholder’s postal code and address information provided against the Issuer’s system of record is termed as AVS Result code. The object `avsSecurityCodeResponse` contains both the response received by the association as well as response mapped by gateway.


<!--
type: tab
title: Gateway Response
-->

##### Component : avsSecurityCodeResponse

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `streetMatch` | *string* |  | Contains the Response of Street Matching. Valid Values are MATCH, NO_MATCH, NOT_PROVIDED |
| `postalCodeMatch` | *string* |  |Contains the Response of Postal Code Matching. Valid Values are MATCH, NO_MATCH, NOT_PROVIDED |

<!--
type: tab
title: Association Response
-->

##### AVS Result Code - association

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `avsCode` | *string* |  | Contains the Response of AVS Checking received from the association. The [Valid Values](#avscode-valid-values) are |
| `cardHolderNameResponse` | *string* |  |Contains the Response cardholder name matching. Only applicable for AMEX card type. The [Valid Values](#cardHolderNameResponse-valid-values) are|



#### avsCode Valid Values

| Value | Description |
| ------- | ------- |
| BOTH_MATCH | Both Street and Zip Code Match |
| STREET_ONLY | Street Address matches, ZIP Code does not |
| ZIP_ONLY | ZIP Code matches, Street Address does not |
| 5_DIGIT_ZIP_ONLY | 5 digit ZIP Code match only |
| NO_MATCH | No Address or ZIP Code match |
| UNAVAILABLE | Address information is unavailable for that account number, or the card issuer does not support |
| NON_US | Service Not supported, non-US Issuer does not participate |
| RETRY | Issuer system unavailable, retry later |
| NOT_MOTO | Not a mail or phone order | 
| NOT_SUPPORTED | Service not supported
| INTERNATIONAL_BOTH_MATCH | International street address and postal code match |
| INTERNATIONAL_STREET_ONLY |  International street address match, postal code not verified due to incompatible formats |
| INTERNATIONAL_POSTAL_ONLY | International street address and postal code not verified due to incompatible formats |
| INTERNATIONAL_NO_MATCH | International postal code match, street address not verified due to incompatible format |


#### cardHolderNameResponse Valid Values

| Value | Description |
| ------- | ------- |
| NAME_MATCH | Cardholder name matches |
| ALL_MATCH | Cardholder name, billing address, and postal code match |
| NAME_POSTAL_MATCH | Cardholder name and billing postal code match |
| NAME_ADDRESS_MATCH | Cardholder name and billing address match |
| ADDRESS_POSTAL_ONLY | Cardholder name incorrect, billing address and postal code match |
| POSTAL_ONLY | Cardholder name incorrect, billing postal code matches |
| ADDRESS_ONLY | Cardholder name incorrect, billing address matches |
| NO_MATCH | Cardholder name, billing address, and postal code are all incorrect |


<!-- type: tab-end -->
