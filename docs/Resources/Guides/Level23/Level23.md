---
tags: [carat, commerce-hub, enterprise, level-2-card, level-3-card, mastercard, visa, american-express, discover, purchase-card, commercial-card, business-card]
---

# Level II and III Data

<!-- theme: danger -->
> We are enhancing the Commerce Hub to include Level II and III purchase card support and the documents related to the features will be released soon.

Commerce Hub can pass Level II and III data (also knows as Enhanced Data) with business-to-business corporate and purchase card transactions. With a Level II and III data pass through solution, merchant's can meet card brand requirements, provide invoice-level transaction details and qualify for lower rates.

## Request Variables

Level II and III transactions require the `level23Data` object, and level III requires line item details in the `level23DataItems` object based on card brand [data requirements](?path=docs/Resources/Guides/Level23/Level23-Brand-Req.md).

<!--
type: tab
title: level23Data
-->


The below table identifies the parameters in the `level23Data` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`securityCode` | *string* | 3| The card security code |
|`securityCodeIndicator` | *string* | | Indicates how the security code is passed |

<!--
type: tab
title: level23DataItems
-->


The below table identifies the parameters in the `level23DataItems` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`securityCode` | *string* | 3| The card security code |
|`securityCodeIndicator` | *string* | | Indicates how the security code is passed |

<!--
type: tab
title: JSON Example
-->

JSON string format for `card`:

```json
{
   "card":{
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123",
      "securityCodeIndicator": "PROVIDED"
   }
}
```

<!-- type: tab-end -->



## Request Variables

<!--
type: tab
title: level23Data

The below table identifies the required parameters in the `amount` object.

|Variable | Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Sub component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|


-->
level23Data

<!--
type: tab
title: level23DataItems

The below table identifies the required parameters in the `amount` object.

|Variable | Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Sub component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

-->
level23DataItems

<!--
type: tab
title: JSON

The below table identifies the required parameters in the `amount` object.

|Variable | Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Sub component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

-->
Json

<!-- type: tab-end -->


## Payload Example 

<!--
type: tab
title: Request
-->

```json
{
  "source": {
      "sourceType": "level23",
  },
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123"
    },
    "channel": "ANDROID",
    "merchantIdentifier": "1234567890123456",
    "version": "3DS2",
    "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
    "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth### Payload Example

<!--
type: tab
title: Request
-->

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "customer": {
	  "locale": "ENGLISH",
   },
  "transactionDetails": {
    "captureFlag": "true",
	  "merchantInvoiceNumber": "123890",
    "merchantOrderId": "845366457890"
  },
  "transactionNotificationURL": "https://showmethepaymentresult.com",
  "expiration": "4102358400",
  "merchantIpAddress": "10.10.10.10",
  "authenticateTransaction": "TRUE",
  "dynamicDescriptor": {
	  "merchantName": "MyWebsite.com"
  }
}
```

<!--
type: tab
title: Response
-->

<!-- theme: info -->
> See [Error Responses](#error-responses) for additional status.

```json

{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301",
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16"
    }
  },
  "requestStatus": "SUCCESS",
  "paymentUrl": "https://api.fiservapps.com/ch/payment-vas/payment-url?storename=123456789&oid=R-96cdbaa4-c22e-4598-a2f1-c2b5fed79ef1&paymentUrlId=d3eb74fe-cf63-47e1-b89f-52ba0cc7965c",
  "paymentUrlId": "d3eb74fe-cf63-47e1-b89f-52ba0cc7965c"
}

```
<!-- type: tab-end -->

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request with `createToken`.

```json
{
   "amount":{
      "total": "1.00",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035",
      }
   },
   "transactionDetails":{
      "captureFlag": false,
      "createToken": true
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) tokenization response.

```json
{
   "gatewayResponse":{
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType": "token",
      "transactionState": "authorized",
      "transactionOrigin": "ecom",
      "transactionProcessingDetails":{
         "transactionDate": "2016-04-16",
         "transactionTime": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "nameOnCard": "Jane Smith",
         "expirationMonth": "05",
         "expirationYear": "2025",
         "bin": "400555",
         "last4": "0019",
         "scheme": "VISA"
      }
   },
   "paymentToken":{
      "tokenData": "1234123412340019",
      "PARId": "1234567895461303321654",
      "declineDuplicates": "FALSE",
      "tokenSource": "RSA"
   },
   "processorResponseDetails":{
      "approvalStatus": "APPROVED",
      "approvalCode": "OK3483",
      "referenceNumber": "845366457890-TODO",
      "schemeTransactionId": "019078743804756",
      "feeProgramIndicator": "string",
      "processor": "fiserv",
      "responseCode": "00",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "54022",
      "hostResponseMessage": "",
      "localTimestamp": "2016-04-16T16:06:05Z",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2016-04-16T16:06:05Z"
      }
   }
}
```
<!-- type: tab-end -->



## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
- [Commodity Codes](path?=docs/Resources/Guides/Level23/Commodity-Codes.md)
- [Tax Types](path?=docs/Resources/Guides/Level23/Tax-Types.md)


---

