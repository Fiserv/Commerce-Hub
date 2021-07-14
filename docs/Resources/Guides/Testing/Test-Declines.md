---
tags: [carat, commerce-hub, declines, enterprise, testing]
---


# Test Decline Response

A decline response can be triggered when testing a Commerce Hub integration in the sandbox environment by entering a specific `total` in the `amount` object. The dollar amounts between 5001.00 - 5999.00 to trigger a decline, where the desired [response code](?path=docs/Resources/Guides/Response-Codes/Response-Codes.md) is the last 3 digits.

<!-- theme: example -->
>To receive a response of 006 Declined, submit 5006.00 as the total. 

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request.

```json
{
   "amount":{
      "total": "5006.00",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "transactionDetails":{
      "captureFlag": true
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [HTTP Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "DECLINED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTime": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "paymentReceipt": {
    "merchantName": "Merchant Name",
    "merchantAddress": "123 Peach Ave",
    "merchantCity": "Atlanta",
    "merchantStateOrProvince": "GA",
    "merchantPostalCode": "12345",
    "merchantCountry": "US",
    "merchantURL": "https://www.somedomain.com"
    },
    "processorResponseDetails": {
      "approvalStatus": "DECLINED",
      "schemeTransactionId": "0225MCC625628",
      "processor": "fiserv",
      "responseCode": "006",
      "responseMessage": "DECLINED",
      "hostResponseCode": "51",
      "hostResponseMessage": "Declined",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "merchantInvoiceNumber": "123456789012"
  }
}
```

<!-- type: tab-end -->

---

## See Also


- [API Explorer](../api/?type=post&path=/payments/v1/capture)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Test Address and Security Code]
- [Response Code](?path=docs/Resources/Guides/Response-Codes/Response-Codes.md) 
- [Test Errors]


---




