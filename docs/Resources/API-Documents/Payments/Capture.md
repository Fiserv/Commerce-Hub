---
tags: [carat, commerce-hub, enterprise, card-not-present, card-present, capture, settle, payments, post-auth, completion, api-reference,]
---

# Capture

Use this payload to capture a previous pre-authorized [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md) to the original `transactionId`<!-- or `orderId`-->, also known as a post-authorization. This will settle (withdrawl) funds from the customer.

<!-- theme: warning -->
> Issuers have different hold times for pre-authorizations. If the authorization has been released it is recommended to process a [reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md).

#### Capture Types

- **Automatic Capture:** A charge is automatically captured when a [Sale](?path=docs/Resources/FAQs-Glossary/Glossary.md#sale) <!--or [Deferred Payment](?path=docs/Resources/Guides/Bill-Payments/Deferred-Payment.md)--> request is made.
- **Manual Capture:** A manual capture can be processed for the full amount or a partial amount.
  - **Full:** A full capture request will settle the full amount of the held funds. This amount can be for more than the amount for certain industries (e.g., tips).
  - **Partial:** A partial capture request is used when the full pre-auth amount is not needed or when submitting a [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md). When the full amount is not captured, then the remaining balance is released to the customer (e.g., the price of a pre-order item decreases before shipping).

---

## Minimum Requirements

The [example](#payload-example) below contains the mandatory fields required for a successful capture request. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/capture).

<!--
type: tab
titles: amount, merchantDetails
-->

The below table identifies the required parameters in the `amount` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `total` | *number* | 18,3  | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | ISO 3 digit [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---

## Endpoint
Use the below endpoint based on the [transaction type](?path=docs/Resources/Guides/Transaction-Types.md).
<!-- theme: success -->
>**POST** `/payments/v1/charges/{transactionId}/capture`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a Capture Payload Request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "merchantDetails":{
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges/{transactionId}/capture)

<!--
type: tab
-->

##### Example of a capture (201: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "gatewayResponse":{
      "transactionType": "CAPTURE",
      "transactionState": "CAPTURED",
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
      "merchantURL": "https://www.somedomain.com",
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
      "merchantInvoiceNumber": "123456789012"
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/capture)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)
- [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md)

---
