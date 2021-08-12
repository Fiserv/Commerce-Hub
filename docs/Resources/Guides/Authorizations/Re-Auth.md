---
tags: [carat, commerce-hub, card-not-present, reauthorization, reauth, reauthorize, authorization]
---

# Reauthorize

<!-- theme: danger -->
> We are enhancing Commerce Hub to support reauthorization. The documents related to the feature will be released soon.

A reauthorization is a purchase made after an original purchase that can reflect a number of specific conditions. Common instances that require reauthorizations include delayed shipments, [split shipment](?path=docs/Resources/Guides/Split-Shipment.md), extended stays, and extended rentals. A reauthorization with a [token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is required when a pending authorization has been released based on the card issuer's hold times.

<!-- theme: info -->
<!---
> See an account representative for more information on issuer hold times.

---

## Request Variables
--->

<!--
type: tab
title: amount
-->

<!---
The below table identifies the required parameters in the `amount` object.

|Variable | Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Sub component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|
--->

<!---
type: tab
title: transactionDetails
--->

<!---
The below table identifies the required parameters in the `transactionDetails` object.

|Variable | Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `captureFlag` | *boolean* | 5 | Total amount of the transaction. [Sub component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. Expected format 0.00. |
| `primaryTransactionId` | *string* | N/A | The `transactionId` from the original transaction passed for a reauthorization.|
| `authorizationTypeIndicator` | *string* | N/A | Identifies the authorization type of subsequent transactions. **Value:** REAUTH.|
--->

<!---
type: tab
title: JSON Example
--->

<!---

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
--->

<!-- type: tab-end -->

<!---

---

## Endpoint
--->
<!-- theme: success -->
<!--- >**POST** `/payments/v1/charges`


---

## Payload Example
--->

<!---
type: tab
title: Request
--->

<!---

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
--->

<!---
type: tab
title: Response
--->

<!---
##### Example of a re-authorization (201: Created) response.
--->

<!-- theme: info -->
<!--- > See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.
```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
    "transactionState": "authorized",
    "transactionOrigin": "ecom"
  },
  "transactionProcessingDetails": {
    "transactionDate": "2021-04-16",
    "transactionTime": "2021-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "source": "PaymentCard",
  "card": {
    "bin": "400555",
    "last4": "0019",
    "brand": "VISA",
    "expirationMonth": "02",
    "expirationYear": "2035"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": "1.00",
      "currency": "USD"
    },
    "processorResponseDetails": null,
    "approvalStatus": "APPROVED",
    "approvalCode": "OK7118",
    "referenceNumber": "845366457890-TODO",
    "schemeTransactionID": "019078743804756",
    "processor": "fiserv",
    "responseCode": "00",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "54022",
    "hostResponseMessage": "Approved",
    "localTimestamp": "2021-04-16T16:06:05Z",
    "bankAssociationDetails": {
      "associationResponseCode": "000",
      "transactionTimestamp": "2021-04-16T16:06:05Z",
      "transactionReferenceInformation": null,
      "avsSecurityCodeResponse": {
        "streetMatch": "EXACT_MATCH",
        "postalCodeMatch": "EXACT_MATCH",
        "securityCodeMatch": "MATCHED",
        "association": {
          "avsCode": "Z",
          "securityCodeResponse": "S",
          "cardHolderNameResponse": "M"
        }
      }
    }
  }
}
```
--->

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