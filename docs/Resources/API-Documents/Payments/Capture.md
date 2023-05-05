---
tags: [Card Not Present, Card Present, Capture, Settle, Payments, Post Auth, Completion, API Reference]
---

# Capture

Capture allows a previous pre-authorized [charge](?path=docs/Resources/API-Documents/Payments/Charges.md) to be completed based on the original `transactionId` in the URI or a reference transaction identifier in the payload. The capture also known as a post-authorization, and will settle (withdrawl) funds from the customer.

<!-- theme: warning -->
> Issuers have different hold times for pre-authorizations. If the authorization has been released it is recommended to process a [reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md).

#### Capture Types

- **Automatic Capture:** A charge is automatically captured when a [Sale](?path=docs/Resources/FAQs-Glossary/Glossary.md#sale) request is made.
- **Manual Capture:** A manual capture can be processed for the full amount or a partial amount.
  - **Full:** A full capture request will settle the full amount of the held funds. This amount can be for more than the amount for certain industries (e.g., tips).
  - **Partial:** A partial capture request is used when the full pre-auth amount is not needed or when submitting a [split shipment](?path=docs/Resources/Guides/Split-Shipment.md) (e.g., the price of a pre-order item decreases before shipping). When the full amount is not captured, then the remaining balance is released to the customer if not a split shipment.

---

## Capture Using Referenced Identifier

A capture request is initiated by sending the `referenceTransactionDetails` in the payload along with the `captureFlag` *true* in `transactionDetails` and may contain the `amount` object based on the capture type.

---

### Request Variables

<!--
type: tab
titles: amount, referenceTransactionDetails, transactionDetails, merchantDetails
-->
 
The below table identifies the parameters in the `amount` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `total` | *number* | 18,3  | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | ISO 3 digit [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) |

 <!--
type: tab
-->
 
The below table identifies the available parameters in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request. 

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
|`referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction. |
|`referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type| Maximum Length |Required | Description |
|---------|----------|----------------|---------|---|
| `captureFlag` | *boolean* | 5 | &#10004; | Designates if the transaction should be captured. |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Required|  Description |
|---------|----------|----------------|---------|---|
|`merchantId` | *string* | 40 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---

### Endpoint

<!-- theme: success -->
>**POST** `/payments/v1/charges`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a Capture Payload Request.

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": true,
  },
  "merchantDetails": {
    "merchantId": "100009000000200",
    "terminalId": "00000001"
  },
  "referenceTransactionDetails": {
    "referenceTransactionId": "31a12bba68a44e31b98d27ad37b6b5f4"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges/)

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
   },
   "transactionDetails":{
      "captureFlag": true,
   }
}
```

<!-- type: tab-end -->

---

## Capture Using URI 

A capture request is initiated by sending the `transactionId` in the URI and may contain the `amount` object based on the capture type.

### Request Variables

A capture request is initiated by sending the `transactionId` in the request and may contain the `amount` object based on the capture type.

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

| Variable | Data Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|---|
|`merchantId` | *string* | 40 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---

## Endpoint

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

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges/{transactionId}/capture&branch=preview&version=1.2.0)

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
   },
   "transactionDetails":{
      "captureFlag": true,
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)
- [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md)
- [Reference Transaction Details](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
