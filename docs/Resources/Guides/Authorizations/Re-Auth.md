---
tags: [carat, commerce-hub, card-not-present, reauthorization, reauth, reauthorize, authorization]
---

# Reauthorize


A merchant initiates a reauthorization when the completion or fulfillment of the original order or service extends beyond the authorization validity limit set by networks.

A reauthorization with a [token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is required when a pending authorization has been released based on the card issuer's hold times. The most common reason for reauthorization is due to a pre-order or [split shipment](?path=docs/Resources/Guides/Split-Shipment.md). These authorizations are handled by one of the following methods:

- **Merchant Managed:** The merchant submits the transaction with the required field and it is processed by the network.
- **Commerce Hub Managed:** The merchant submits a standard transaction which is processed by Commerce Hub.


There are two common reauthorization scenarios:

- Split or delayed shipments at eCommerce retailers. A split shipment occurs when not all the goods ordered are available for shipment at the time of purchase. If the fulfillment of the goods takes place after the authorization validity limit set by networks, eCommerce merchants perform a 
reauthorization (separate authorization) to ensure that consumer funds are available.

- Extended stay hotels, car rentals, and cruise lines. A reauthorization is used for stays, voyages, and/or rentals that extend beyond the authorization validity period set by networks.
Reasons for using this.

The following are the reauthorization options: 

- Option 1 - Commerce Hub sequence initiation configuration - Authorization first, then cancel original transaction

- Option 2 - Commerce Hub sequence initiation configuration -  Cancel original authorization first, then Authorize.

- Option 3 - Allow merchants transaction initiation sequence. Commerce Hub configuration will be set to Authorization only. (Not a priority to configure one value)

Merchant may send authorization after sending cancel

Merchant may send cancel after sending authorization

Merchant may not at all send cancel after sending authorization resulting in double authorization.





<!-- theme: info -->
> See an account representative for more information on issuer hold times.

---



## Request Variables

<!--
type: tab
title: amount
-->

The below table identifies the required parameters in the `amount` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|------|
| `total` | *number* | 12 | &#10004; | Total amount of the transaction. [Sub component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | &#10004; | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
title: transactionDetails
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|------|
| `captureFlag` | *boolean* | 5 | | Total amount of the transaction. [Sub component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. Expected format 0.00. |
| `primaryTransactionId` | *string* | N/A |&#10004; | The `transactionId` from the original transaction passed for a reauthorization.|
| `authorizationTypeIndicator` | *string* | N/A | &#10004; | Identifies the authorization type of subsequent transactions. **Value:** REAUTH.|


 
<!--
type: tab
title: JSON Example
-->

JSON string format for re-authorization:

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": false,
    "primaryTransactionId": "838916029300",
    "authorizationTypeIndicator": "REAUTH"
  }
}
```


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

##### Example of a re-authorization payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": false,
    "primaryTransactionId": "838916029300",
    "authorizationTypeIndicator": "REAUTH"
  },
  "splitShipment": {
    "totalCount": 5
    "finalShipment": false
  }
}
```
<!--
type: tab
title: Response
-->

##### Example of a re-authorization (201: Created) response.

<!-- theme: info -->
> See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.
```json
{
   "gatewayResponse":{
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionDate": "2021-04-16",
         "transactionTimestamp": "2021-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "02",
         "expirationYear": "2035"
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
         "associationResponseCode": "000",
         "transactionTimestamp": "2021-04-16T16:06:05Z",
         "transactionReferenceInformation": null,
         "avsSecurityCodeResponse":{
            "streetMatch": "MATCHED",
            "postalCodeMatch": "MATCHED",
            "securityCodeMatch": "MATCHED",
            "association":{
               "avsCode": "Z",
               "securityCodeResponse": "S",
               "cardHolderNameResponse": "M"
            }
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
- [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md)
- [Subsequent Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---