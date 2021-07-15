---
tags: [carat, commerce-hub, enterprise, split-shipment, vault]
---


# Split Shipment

A split shipment is an ability to [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) an authorization for the full order amount by performing a capture for each item shipped.

Situations in which this could be implemented include:

- Shipment of goods will be split, the cardholder can be charged for each individual shipment.
- Occurs when the goods url are not available for shipment at the time of the consumer’s purchase.

<!-- theme: info -->
> If the customer cancels or refunds their order before the last shipment, the `finalShipment` indicator is required to be sent during the [refund](?path=docs/Resources/API-Documents/Payments/Refund.md) or [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) request.

<!-- theme: warning -->
> If the authorization timeframe has expired, a [reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md) is required.

---

## Request Variables

<!--
type: tab
title: splitShipment
-->

The below table identifies the required parameters in the `splitShipment` object.

|Variable |  Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `totalCount` | *integer* | 99 | Required in the capture transaction indicating how many shipments the transaction is devided into. Can be sent in pre-authorization or the first capture.|
| `finalShipment` | *boolean* |  | Used to identify the final capture (*TRUE* or *FALSE*).|

<!--
type: tab
title: JSON Example
-->

JSON string format for `splitShipment`:

```json
{
   "splitShipment":{
      "totalCount":5,
      "finalShipment":true
   }
}
```

<!-- type: tab-end -->

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request using `splitShipment`.

```json
{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "transactionDetails":{
      "captureFlag":true,
      "createToken": true
   },
   "transactionDetails":{
      "splitShipment":{
       "totalCount":5,
       "finalShipment":true
      }
   }  
}
```

<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

```json
{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "10",
         "expirationYear": "2030"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
         "currency": "USD"
      },
      "merchantName": "Merchant Name",
      "merchantAddress": "123 Peach Ave",
      "merchantCity": "Atlanta",
      "merchantStateOrProvince": "GA",
      "merchantPostalCode": "12345",
      "merchantCountry": "US",
      "merchantURL": "https://www.somedomain.com"
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "fiserv",
         "responseCode": "000000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021-06-20T23:42:48Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2021-06-20T23:42:48Z"
         }
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "createToken": true,
      "splitShipment":{
         "totalCount": 5,
         "finalShipment": true
      }
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)

---
