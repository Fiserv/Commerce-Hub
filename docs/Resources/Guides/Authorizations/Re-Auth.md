---
tags: [carat, commerce-hub, card-not-present, reauthorization, reauth, reauthorize, authorization]
---

# Reauthorize


A merchant initiates a new reauthorization when the completion or fulfillment of the original order or service extends beyond the authorization validity limit set by networks.

A reauthorization with a [token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is required when a pending authorization has been released based on the card issuer's hold times. The most common reason for reauthorization is due to a pre-order or [split shipment](?path=docs/Resources/Guides/Split-Shipment.md). These authorizations are handled by one of the following methods:

- **Merchant Managed:** The merchant submits the transaction with the required field and it is processed by the network.
- **Commerce Hub Managed:** The merchant submits a standard transaction which is processed by Commerce Hub.


### There are two common reauthorization scenarios:

- Split or delayed shipments at eCommerce retailers. A split shipment occurs when not all the goods ordered are available for shipment at the time of purchase. If the fulfillment of the goods takes place after the authorization validity limit set by networks, eCommerce merchants perform a 
reauthorization (separate authorization) to ensure that consumer funds are available.

- Extended stay hotels, car rentals, and cruise lines. A reauthorization is used for stays, voyages, and/or rentals that extend beyond the authorization validity period set by networks.
Reasons for using this.

### The following are the reauthorization options: 

- Option 1 - Commerce Hub sequence initiation configuration - Authorization first, then cancel original transaction.

- Option 2 - Commerce Hub sequence initiation configuration -  Cancel original authorization first, then Authorize.

- Option 3 - Allow merchants transaction initiation sequence. Commerce Hub configuration will be set to Authorization only. (Not a priority to configure one value).

**Note**: 

- Merchant may send authorization after sending cancel

- Merchant may send cancel after sending authorization

- Merchant may not at all send cancel after sending authorization resulting in double authorization.

## Use cases or scenarios for Reauthorization 

There are 3 scenario which will triggered reauthorization on behalf of merchant:

### Validity Period

### Will we support this?

Validity period of original authorization has expired
Original auth is missing CPS qualified data
Different transaction amount in either authorization or settlement 

Validity period of original authorization has expired - Each card brand (Visa, MasterCard, Amex, Discover) has their authorization validity period, if original authorization goes beyond that validity period or days then gateway has to initiates new authorization on behalf of merchant for that  particular transaction. 

For instance - If merchant sends original authorization for Visa card today, and after 15 days merchant submits the deposit / settlement in batch file, then it wont be able to find matching data in podb for original authorization because Visa has 7 days of validity period and after 7 days Podb does not store Visa transactions. Therefore in this case it will collect transaction data from deposit file and initiate reauthorization.

### Original Authorization

Original authorization is missing CPS qualification data  - Each card brand has their own CPS qualification data, this qualification data is mandatory for authorization and settlement. For eg - If the transaction is still valid from authorization validity perspective and original auth is missing CPS qualification data, then gateway will need to initiate reauthorization for that particular transaction otherwise merchant will have to pay down grade fees. For Visa, CPS data is Trans id, For MC - Bank Reference no, Amex - Amex Trans id. 

Different transaction amount in either authorization or settlement - There are two instances (1) Merchant can send settlement amount less than original authorization amount or (2) Merchant can send deposit higher than authorization amount. - In both of these cases Compass will initiate reauthorization to get exact amount or fresh data.

### Additional Use Cases FAQ's

What happens if a reauthorization fails in above mention used cases?

Most of the time, a merchant will receive decline code for that particular transaction while doing deposit. There are some merchants which would like to proceed with a "Forced Deposit", in which there is data field even though reauthorization is failed they will have to settled/deposit the transaction.
 
How does reauthorization works if merchant is processing across different external platforms? 

In that case, a merchant is responsible for sending additional data fields such as authcode, approval code, and auth date to Compass.
In this case, we will not find auth code, auth data in podb as original auth did not happen in Compass, it will initiate for reauthorization and merchant will have to pay downgrade fees.

### Split Shipment 

For Split shipment transactions, merchant will need to provide additional data stating that this is Split shipment transaction. In split shipment transactions, the amount might be broken into several ways. 

For this type of transactions Compass will not do a reauthorization, it will wait on merchant (which can be ecommerce merchant) providing data that product has been ship and then this transaction will go directly towards settlement. The data is stored for more number days in podb for this type of transactions.

### Extend Validity Period 

There are some exceptional merchants where card association/brands have extended their validity period for that specific merchant. If Visa has 7 days of original auth validity period, for Apple that is extended to 30 days. 


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