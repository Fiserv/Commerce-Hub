---
tags: [carat, commerce-hub, enterprise, testing, test-integration, test-cards, test-errors]
---


# Test Integration

Commerce Hub allows developers to integrate with the API to trigger responses and to ensure that they are handled accordingly. 

## Test Cards

Commerce Hub also supports testing and CVV codes. Live cards can be used in the sandbox environment. To process transactions, you can utilize the Commerce Hub test cards. No money will be charged, refunded or proessed in any way if you are utilizing a test account. 

### How to trigger error transactions

To trigger an error code, enter the desired error code as the transaction amount. The error codes are listed in the error codes section. 

Commerce Hub supports testing decline messages by submitting a trasaction with a specific dollar amount. For more information, see [Test Declines](?path=docs/Resources/Testing/Test-Declines.md).




Declines Codes (Use the spreadsheet, Look at Payeazy), 
Error Codes (Error Codes ), Address and Security Codes. 




### Basic test card numbers 

Genuine card information cannot be used in test mode. Instead, use any of the following test card numbers, a valid expiration date in the future, and any random CVC number, to create a successful payment. Each basic test card’s billing country is set to U.S. If you need to create test card payments using cards for other billing countries, use the international test cards.

<!-- theme: info -->
>Any future expiration date can be used for test cards.

| Number | Card Type |	CVC	| Date |
| -------- | :--: |
| 4242424242424242 |	Visa|	Any 3 digits |	Any future date
| 4000056655665556 |	Visa (debit)| Any 3 digits | 	Any future date |
| 5555555555554444 |	Mastercard |	Any 3 digits |	Any future date |
| 2223003122003222 |	Mastercard (2-series) |	Any 3 digits |	Any future date |
| 5200828282828210 |	Mastercard (debit) |	Any 3 digits |	Any future date |
| 5105105105105100 |	Mastercard (prepaid) |	Any 3 digits |	Any future date |
| 378282246310005 |	American Express | 	Any 4 digits |	Any future date |
| 371449635398431 |	American Express |	Any 4 digits |	Any future date |
| 6011111111111117 | Discover |	Any 3 digits |	Any future date |
| 6011000990139424 |	Discover |	Any 3 digits |	Any future date |
| 3056930009020004 |	Diners Club |	Any 3 digits |	Any future date |
| 36227206271667 |	Diners Club |	Any 3 digits |	Any future date |
| 3566002020360505 |	JCB |	Any 3 digits |	Any future date |
| 6200000000000005 |	UnionPay |	Any 3 digits |	Any future date |


Description of what commerce hub offers to allow a developer to test the intergration

Various test methods and a link to the article


> See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.



<!--
type: tab
title: Request
-->

##### Example of a Capture Payload Request.

```json
{
  "amount": {
    "total": "5000",
    "currency": "USD"
  },
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges/{transactionId}/capture)

<!--
type: tab
title: Response
-->

##### Example of a capture (200: Success) response.

<!-- theme: info -->

> See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "capture",
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
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard"
  },
  "transactionDetails": {
    "captureFlag": "TRUE",
    "accountVerification": "FALSE",
    "processingCode": "000000",
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO",
    "receiptEmail": "abc@gmail.com",
    "paymentDescription": ""
  },
  "transactionProcessingDetails": {
    "transactionDate": "2016-04-16",
    "transactionTime": "2016-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": "12.04",
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK3483",
      "referenceNumber": "845366457890-TODO",
      "schemeTransactionId": "019078743804756",
      "feeProgramIndicator": "",
      "processor": "fiserv",
      "responseCode": "00",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "54022",
      "hostResponseMessage": "",
      "localTimestamp": "2016-04-16T16:06:05Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2016-04-16T16:06:05Z"
      }
    }
  }
}
```

<!-- type: tab-end -->

## See Also


- [API Explorer]
- [Charge Request]
- [Test Address and Security Code]
- [Test Declines]
- [Test Errors]

