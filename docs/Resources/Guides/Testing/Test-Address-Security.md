---
tags: [carat, commerce-hub, enterprise, testing, test-integration, test-cards, test-errors]
---

# Test Address and Security Code

In Commere Hub, a merchant can generate a test request and test response for the billing address, cardholder's name and security code by using the corresponding variables in the sandbox environment.

## Address Verification

### Street

A specific address is needed to get a specific response. For the processor response the street name field, you must pass the value that you would like returned in the NO_MATCHED field.

<!-- theme: info -->
>If any of the address fields are not available or not applicable, they may be omitted. If available, the last 5 or 9 digits, without embedded spaces, should be the zip code (ex. "12345-6789" becomes "123456789"). Numbers are not spelled out. (“First Street” becomes “1ST Street”, “Second” becomes “2ND”, etc).


| Address | Value | Descrption | 
| ----- | ---- | ------------|
| 11111 | *EXACT_MATCHED* | Data exactly matches with issuer system |
|22222| *MATCHED* | Data matches with issuer system with some mismatch |
|33333| *NOT_MATCHED* | Data does not match with issuer system |
| 44444 |*NOT_CHECKED* | Street address or postal code verification not done |
|55555 |*NO_INPUT_DATA* | Street address or postal code mot present in the input |


### Postal Code

A specific postal code is needed to generate a specific response. For the postal code, you must pass the value that you would like returned. 


| Postal Code  | Value | Descrption | 
| ----- | ---- | ------------|
| 11111-1111 | *EXACT_MATCHED* | Data exactly matches with issuer system |
|22222-2222| *MATCHED* | Data matches with issuer system with some mismatch |
|33333-3333| *NOT_MATCHED* | Data does not match with issuer system |
| 44444-4444 |*NOT_CHECKED* | Street address or postal code verification not done |
|55555-5555 |*NO_INPUT_DATA* | Street address or postal code mot present in the input |

## Cardholder Name Verification

In the first name field, pass the number for desired response.

<!-- theme: info -->
> Cardholder name response is only valid on American Express (AMEX) transactions.

## Security Code Verification

To receive the specific response, you must pass a specific 3 or 4 digit (AMEX) security code from the table below.
<!-- 
Will our system automatically submit the void on the test card or will the merchant have to manually void the transaction?
Is our certification testing scripts using sandbox test scenarios or network E2E testing scripts?
Will we support 3-D secure?
Can we simulate payments in another country?
Zip Code



 --> 

| 3-digit | 4-digit | Response | Description |
| ---- | ----- | ----------|-----|
| 111 | 1111 | MATCHED | Data matches with issuer system | 
| 999 | 9999 | NOT_MATCHED | Data does not match with issuer system |
| 888 | 8888 | NOT_PROCESSED | Security code verification not done |
| 222 | 2222 | NOT_PRESENT | Security code not present in the input |
| 333 | 3333 | NOT_CERTIFIED| Issuer not certified to verify sercurity code |
| 444 | 4444 | NOT_CHECKED | Security code not checked |
|  |  | NONE | No security code provided |


---

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
         "expirationYear": "2035",
         "securityCode": "111",
         "securityCodeIndicator": "PROVIDED"
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
      "transactionType": "CHARGE",
      "transactionState": "APPROVED",
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
            "securityCodeMatch": "MATCH",
            "association":{
               "securityCodeResponse": "M"
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

