---
tags: [Testing, Test Integration, Test Cards, Test Errors]
---

# Test Error Response

An error response can be triggered when testing a Commerce Hub integration in the sandbox environment by entering the desired [error code](?path=docs/Resources/Guides/Response-Codes/Error.md) in `requestedTestResponseCode` in the `additionalDataCommon` object.

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a charge payload request.

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "additionalDataCommon": {
    "additionalData": {
      "requestedTestResponseCode": "103"
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of a charge (400: Bad Request) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "errorResponse": {
      "gatewayResponse": {
         "transactionType": "CANCEL",
         "transactionState": "DECLINED",
         "transactionOrigin": "ECOM",
         "transactionProcessingDetails": {
            "orderId": "CH-aafaaf45-0cfb-4f4f-8ec0-301e40c14e34",
            "transactionTime": "2021-06-20T23:42:48Z",
            "apiTraceId": "5c059eee2388e191",
            "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
            "transactionId": "b2d883cdf3051598acb295f29a1e1582"
         }
      },
      "error":{
         "type": "GATEWAY",
         "code": "103",
         "field": "cardData",
         "message": "Missing or Invalid Card Number or Token"
      }
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Error Codes](?path=docs/Resources/Guides/Response-Codes/Error.md)
- [Test Address and Security Code](?path=docs/Resources/Guides/Testing/Test-Address-Security.md)
- [Test Cards](?path=docs/Resources/Guides/Testing/Test-Cards.md)
- [Test Declines](?path=docs/Resources/Guides/Testing/Test-Declines.md)
- [Test Fraud Settings](?path=docs/Resources/Guides/Testing/Test-Fraud.md)

---
