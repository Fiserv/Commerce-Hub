---
tags: [carat, commerce-hub, card-not-present, card-present, incremental-auth, authorization]
---

# Incremental Authorization

An incremental authorization is typically found in hotel and rental environments, where the consumer has agreed to pay for any service incurred during the duration of the contract, typically a hotel stay or car rental. 

<!-- theme: warning -->
> Not all MCCs support Incremental Authorization, please contact your account representative for more information.

---

## Minimum Requirements

The `transactionIndicatorType` of *INCREMENTAL* and `primaryTransactionId` from the original transaction must be sent in the subsequent authorization's `transactionDetails` for each incremental authorization performed.

<!--
type: tab
title: amount
-->

The below table identifies the required parameters in the `amount` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|------|
| `total` | *number* | 12 | &#10004; | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | &#10004; | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
title: transactionDetails
-->

The below table identifies the parameters in the `transactionDetails` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|------|
| `captureFlag` | *boolean* | 5 | | Designates if the transaction should be captured (*true* for Sale and *false* for Pre-Auth). |
| `primaryTransactionId` | *string* | N/A |&#10004; | The `transactionId` from the original transaction passed for a reauthorization.|
| `authorizationTypeIndicator` | *string* | N/A | &#10004; | Identifies the authorization type of subsequent transactions. **Value:** INCREMENTAL.|

<!--
type: tab
title: merchantDetails
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|-----|
|`merchantId` | *string* | 40 | &#10004; |  A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

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
      "total": "12.04",
      "currency": "USD"
   },
   "transactionDetails":{
      "primaryTransactionId": "84356532738",
      "transactionIndicatorType": "INCREMENTAL"
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
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
      "merchantURL": "https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "fiserv",
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
      "merchantInvoiceNumber": "123456789012"
   }
}
```

<!-- type: tab-end -->

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Subsequent Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---