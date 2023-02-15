---
tags: [Split Shipment, Card Not Present, Online]
---


# Split Shipment

A split shipment is an ability to capture a [pre-authorization](?path=docs/Resources/API-Documents/Payments/Charges.md) multiple times for the full order amount by performing a seperate capture request for each item shipped.

<!-- theme: warning -->
> If the authorization timeframe has expired, a [reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md) is required.

Situations in which this could be implemented include:

- Shipment of goods will be split, the customer can be charged for each individual shipment.
- Occurs when the goods are not available for shipment at the time of the consumer’s purchase.

<!-- theme: info -->
> If the customer cancels or refunds their order before the last shipment, the `finalShipment` indicator is required to be sent during the [refund](?path=docs/Resources/API-Documents/Payments/Refund.md) or [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) request.

<!--
type: tab
titles: splitShipment, JSON Example
-->

The below table identifies the required parameters in the `splitShipment` object.

| Variable |  Type| Maximum Length | Required | Description |
| ------- | ---- | ----- | -------- | --------- |
| `totalCount` | *integer* | 99 | &#10004; | Required in each transaction indicating how many shipments the order will be divided into. The original count can be exceeded as long as the `finalShipment` *true* indicator has not be submitted. The total count can be sent in the initial pre-authorization or the first capture. |
| `finalShipment` | *boolean* | N/A | &#10004; | Used to identify the final capture (*TRUE* or *FALSE*). |

<!--
type: tab
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

---

## Request Variables

The following variables are also required when submitting a capture request.

<!--
type: tab
titles: amount, referenceTransactionDetails, transactionDetails, merchantDetails
-->
 
The below table identifies the parameters in the `amount` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ----- | ------------------ |
| `total` | *number* | 18,3  | &#10004; | Amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | &#10004; | ISO 3 digit [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) |

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
| `splitShipment` | *object* | N/A | &#10004; | Object containing the split shipment details. |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Required|  Description |
| --------- | ---------- | -------- | --------- | ----- |
| `merchantId` | *string* | 40 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | *string* | N/A | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request using `splitShipment`.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": true,
    "splitShipment": {
      "totalCount": 5,
      "finalShipment": true
    }
  },
  "referenceTransactionDetails": {
    "referenceTransactionId": "31a12bba68a44e31b98d27ad37b6b5f4"
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```

<!--
type: tab
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "gatewayResponse":{
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType": "CAPTURE",
      "transactionState": "CAPTURED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
         "currency": "USD"
      },
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK3483",
         "authenticationResponseCode": "string",
         "referenceNumber": "845366457890-TODO",
         "schemeTransactionId": "019078743804756",
         "feeProgramIndicator": "123",
         "processor": "FISERV",
         "host": "NASHVILLE",
         "responseCode": "000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2016-04-16T16:06:05Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2016-04-16T16:06:05Z"
         }
      }
   },
   "transactionDetails":{
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

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)

---
