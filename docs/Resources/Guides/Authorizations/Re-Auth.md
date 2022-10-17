---
tags: [Card Not Present, Reauthorization, Reauth, Reauthorize, Authorization]
---

# Reauthorize
 
A merchant initiates a new reauthorization when the completion or fulfillment of the original order or service extends beyond the authorization validity limit set by networks.

A reauthorization with a [token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is required when a pending authorization has been released based on the card issuer's hold times. The most common reason for reauthorization is due to a pre-order or [split shipment](?path=docs/Resources/Guides/Split-Shipment.md). These authorizations are handled by one of the following methods:

- **Merchant Managed:** The merchant submits the transaction with the required fields and a reauthorization is processed by Commerce Hub.
- **Commerce Hub Managed:** The merchant submits a subsequent transaction and Commerce Hub verifies the validity and reauthrorizes if required.

<!-- theme: danger -->
> We are enhancing Commerce Hub to support Commerce Hub managed reauthorizations and the documents related to the feature will be released soon. 

### Reauthorization Scenarios

- Split or delayed shipments at eCommerce retailers.
- Extended stay hotels, car rentals, and cruise lines.
- Validity period of original authorization has expired.
- Original auth is missing qualified data.
- Different transaction amount in either authorization or settlement. 

<!-- theme: info --> 
> See an account representative for more information on issuer hold times.
 
---

## Request Variables

The `transactionIndicatorType` and `authorizationSequence` in `transactionDetails` along with the `referenceTransactionId` or `referenceMerchantTransactionId` in `referenceTransactionDetails` from the original transaction must be sent in the subsequent reauthorization performed.

<!--
type: tab
titles: transactionDetails, referenceTransactionDetails, JSON Example
-->

The below table identifies the additional parameters in the `transactionDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `authorizationTypeIndicator` | *string* | N/A | Identifies the authorization type of subsequent transactions. **Value:** REAUTH.|
| `authorizationSequence` | *string* | 27 | Type of authorization sequence requested.|

#### Authorization Sequence

The below table identifies the valid values of type of `authorizationSequence`.

| Value | Description |
| ----- | ----- |
| *AUTHORIZATION_ONLY* | Only authorize the transaction |
| *AUTHORIZATION_BEFORE_CANCEL* | Authorize the transaction before canceling the original |
| *CANCEL_BEFORE_AUTHORIZATION* | Cancel the original transaction before submitting a new authorization |

<!--
type: tab
-->

The below table identifies the additional parameters in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request. 

| Variable | Data Type | Maximum Length |Description |
|---------|----------|----------------|---------|
|`referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction. |
|`referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |

<!--
type: tab
-->

JSON string format:
 
```json
{
   "transactionDetails":{
      "transactionIndicatorType": "REAUTH",
      "authorizationSequence": "AUTHORIZATION_ONLY"
   },
   "referenceTransactionDetails":{
      "referenceTransactionId": "84356531348"
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
titles: Request, Response
-->

##### Example of a reauthorization payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": false,
    "authorizationTypeIndicator": "REAUTH",
    "authorizationSequence": "AUTHORIZATION_ONLY"
  },
  "referenceTransactionDetails": {
      "referenceTransactionId": "84356531348"
  },
  "splitShipment": {
    "totalCount": 5,
    "finalShipment": false
  },
  "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
  }
}
```

<!--
type: tab
--> 

##### Example of a reauthorization (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
      "captureFlag": false
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Referenced Transaction Details](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md)
- [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md)
- [Subsequent Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
