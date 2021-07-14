---
tags: [carat, commerce-hub, enterprise, testing, test-integration, test-cards, test-errors]
---

# Test Address and Security Code

In Commere Hub, a merchant can generate a test request and test response for the billing address, cardholder's name and security code by using the corresponding variables in the sandbox environment.

## Address Verification

A specific address to get a specific response. For the processor response the street name field, you must pass the value that you would like returned.



## Cardholder Name Verification

In the first name field, pass the number for desired response.


<!-- theme: info -->
> Cardholder name response is only valid on American Express (AMEX) transactions.

## Security Code Verification

To receive the specific response, you must pass a specific code from the table below.


## Payload Example

<!--
type: tab
title: Request
-->

##### Example of an address verification request.

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

##### Example of an address verification response.

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






## See Also



- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
- [Test Declines](?path=docs/Resources/Guides/Testing/Test-Declines.md)
- [Test Errors](?path=docs/Resources/Guides/Testing/Test-Errors.md)

