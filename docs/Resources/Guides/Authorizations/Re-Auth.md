---
tags: [carat, commerce-hub, card-not-present, reauthorization, reauth, reauthorize, authorization]
---

# Reauthorize

A reauthorization with a [token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is required when a pending authorization has been released based on the card issuer's hold times. The most common reason for reauthorization is due to a pre-order or [split shipment](?path=docs/Resources/Guides/Split-Shipment.md).

<!-- theme: info -->
> See an account representative for more information on issuer hold times.

---

## Request Variables

<!--
type: tab
title: amount
-->

The below table identifies the required parameters in the `amount` object.

|Variable | Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Sub component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
title: transactionDetails
-->

The below table identifies the required parameters in the `transactionDetails` object.

|Variable | Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `captureFlag` | *boolean* | 5 | Total amount of the transaction. [Sub component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. Expected format 0.00. |
| `primaryTransactionId` | *string* | N/A | The `transactionId` from the original transaction passed for a reauthorization.|
| `authorizationTypeIndicator` | *string* | N/A | Identifies the authorization type of subsequent transactions. **Value:** REAUTH.|
 
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
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
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
    "approvedAmount": {
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
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "fiserv",
      "responseCode": "000000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
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

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md)
- [Subsequent Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---