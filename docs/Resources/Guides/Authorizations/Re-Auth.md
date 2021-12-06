---
tags: [carat, commerce-hub, card-not-present, reauthorization, reauth, reauthorize, authorization]
---

# Reauthorize

A merchant initiates a new reauthorization when the completion or fulfillment of the original order or service extends beyond the authorization validity limit set by networks.

A reauthorization with a [token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is required when a pending authorization has been released based on the card issuer's hold times. The most common reason for reauthorization is due to a pre-order or [split shipment](?path=docs/Resources/Guides/Split-Shipment.md). These authorizations are handled by one of the following methods:

- **Merchant Managed:** The merchant submits the transaction with the required fields and a reauthorization is processed by Commerce Hub.
- **Commerce Hub Managed:** The merchant submits a subsequent transaction and Commerce Hub verifies the validity and reauthrorizes if required.

<!-- theme: danger -->
> We are enhancing Commerce Hub to support Commerce Hub managed re-authorizations and the documents related to the feature will be released soon.

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

The `transactionIndicatorType` of *REAUTH* and `primaryTransactionId` from the original transaction must be sent in the subsequent authorization's `transactionDetails` for each incremental authorization performed.

<!--
type: tab
title: transactionDetails
-->

The below table identifies the additional parameters in the `transactionDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `primaryTransactionId` | *string* | 40 | The `transactionId` from the original transaction passed for a reauthorization.|
| `authorizationTypeIndicator` | *string* | N/A | Identifies the authorization type of subsequent transactions. **Value:** REAUTH.|
| `authorizationSequence` | *string* | 27 | Type of authorization sequence requested. **Valid Value:** AUTHORIZATION_ONLY (default), AUTHORIZATION_BEFORE_CANCEL, CANCEL_BEFORE_AUTHORIZATION.|

#### Authorization Sequence

The below table identifies the valid values of type of `authorizationSequence`.

| Value | Description |
| ----- | ----- |
| *AUTHORIZATION_ONLY* | Only authorize the transaction |
| *AUTHORIZATION_BEFORE_CANCEL* | Authorize the transaction before canceling the original |
| *CANCEL_BEFORE_AUTHORIZATION* | Cancel the original transaction before submitting a new authorization |

<!--
type: tab
title: JSON Example
-->

JSON string format:

```json
{
   "transactionDetails":{
      "primaryTransactionId": "84356532738",
      "transactionIndicatorType": "REAUTH",
      "authorizationSequence": "AUTHORIZATION_ONLY"
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

##### Example of a reauthorization payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": false,
    "primaryTransactionId": "838916029300",
    "authorizationTypeIndicator": "REAUTH",
    "authorizationSequence": "AUTHORIZATION_ONLY"
  },
  "splitShipment": {
    "totalCount": 5
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
title: Response
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
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md)
- [Subsequent Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---