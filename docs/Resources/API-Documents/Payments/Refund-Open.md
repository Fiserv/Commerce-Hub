---
tags: [Credit, Open Refund, Payments, Refund, API Reference]
---

# Open Refund

An open refund (credit) is a refund to a card without a reference to the prior transaction.

<!-- theme: danger -->
> Open refund should only be performed without a reference to a prior transaction _(e.g. a different API, merchant account, or device)_, otherwise utilize [unmatched tagged refund](?path=docs/Resources/API-Documents/Payments/Refund-Unmatched.md).

<!-- theme: info -->
> Open refunds can only be performed once approved by Fiserv security & risk assessment team and enabled in Merchant Boarding and Configuration. Please contact your account representative for more information.

---

## Minimum Requirements

<!--
type: tab
titles: amount, source, merchantDetails
-->

The below table identifies the required parameters in the `amount` object.

| Variable |  Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |

<!-- type: tab-end -->

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|-----|
|`merchantId` | *string* | 40 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---

## Endpoint
<!-- theme: success -->
> **POST** `/payments/v1/refunds`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of an open refund payload request.

```json
{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "expirationMonth":"02",
         "expirationYear":"2035",
         "securityCode":"123",
         "securityCodeIndicator":"PROVIDED"
      }
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/refunds)

<!--
type: tab
-->

##### Example of am open refund (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "gatewayResponse":{
      "transactionType": "REFUND",
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
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "FISERV",
         "host": "NASHVILLE",
         "responseCode": "000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021-06-20T23:42:48Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2021-06-20T23:42:48Z"
         }
      }
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Custom Identifiers](?path=docsdocs/Resources/Guides/BYOID.md)
- [Refund Requests](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
