---
tags: [carat, commerce-hub, enterprise, testing, test-integration, test-cards, test-errors]
---

# Test Address and Security Code

An [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification response can be triggered when testing a Commerce Hub integration in the sandbox environment by using the corresponding values in the request.

--- 

## Address Verification

### Street

To receive a specific `streetMatch` response, pass the specific `street` value from the table below.

| Street | Value | Descrption | 
| ----- | ---- | ------------|
| MATCHED | *MATCHED* | Data matches with issuer system with some mismatch |
| NOT_MATCHED | *NOT_MATCHED* | Data does not match with issuer system |
| NOT_CHECKED |*NOT_CHECKED* | Street address verification not done |
| |*NO_INPUT_DATA* | Street address not present in the input |
| Any Address | *NONE* | Street address not available (Default Response) |

---

### Postal Code

To receive a specific `postalCodeMatch` response, pass the specific `postalCode` value  from the table below.

| Postal Code  | Value | Descrption | 
| ----- | ---- | ------------|
| 11111 | *MATCHED* | Data matches with issuer system with some mismatch |
| 22222 | *NOT_MATCHED* | Data does not match with issuer system |
| 33333 | *NOT_CHECKED* | Postal code verification not done |
| | *NO_INPUT_DATA* | Postal code not present in the input |
| Any Postal Code | *NONE* | Postal code not available (Default Response) |

---

### Cardholder Name

To receive a specific `cardholderNameResponse` response, pass the specific value as the `firstName` from the table below.

<!-- theme: info -->
> Cardholder name response is only valid on American Express (AMEX) transactions.

| Value | Description |
| ------- | ------- |
| *1* | Cardholder name matches |
| *2* | Cardholder name, billing address, and postal code match |
| *3* | Cardholder name and billing postal code match |
| *4* | Cardholder name and billing address match |
| *5* | Cardholder name incorrect, billing address and postal code match |
| *6* | Cardholder name incorrect, billing postal code matches |
| *7* | Cardholder name incorrect, billing address matches |
| *8* | Cardholder name, billing address, and postal code are all incorrect |

---

## Security Code Verification

To receive a specific `securityCodeMatch` response, pass the specific 3 or 4 digit (AMEX) `securityCode` from the table below.

<!-- 
Will our system automatically submit the void on the test card or will the merchant have to manually void the transaction?
Is our certification testing scripts using sandbox test scenarios or network E2E testing scripts?
Will we support 3-D secure?
Can we simulate payments in another country?
Zip Code
 --> 

| 3-digit | 4-digit | Response | Description |
| ---- | ----- | ----------|-----|
| 111 | 1111 | *MATCHED* | Data matches with issuer system | 
| 999 | 9999 | *NOT_MATCHED* | Data does not match with issuer system |
| 888 | 8888 | *NOT_PROCESSED* | Security code verification not done |
| 222 | 2222 | *NOT_PRESENT* | Security code not present in the input |
| 333 | 3333 | *NOT_CERTIFIED*| Issuer not certified to verify sercurity code |
| 444 | 4444 | *NOT_CHECKED* | Security code not checked |
|  |  | *NONE* | No security code provided |


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
      "firstName": "1",
      "address":{
         "street": "MATCHED",
         "postalCode": "11111",
      }
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
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
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
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
      "localTimestamp": "2016-04-16T16:06:05Z",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "transactionReferenceInformation": "string",
         "avsSecurityCodeResponse":{
            "streetMatch": "MATCHED",
            "postalCodeMatch": "MATCHED",
            "securityCodeMatch": "MATCHED",
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
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Test Declines](?path=docs/Resources/Guides/Testing/Test-Declines.md)
- [Test Errors](?path=docs/Resources/Guides/Testing/Test-Errors.md)

---
