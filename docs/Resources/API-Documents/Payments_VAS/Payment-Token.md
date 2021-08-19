---
tags: [carat, commerce-hub, enterprise, customer-authorized, merchant-stored, tokens-request, payment-token, tokenization, api-reference,]
---

# Tokenization

**[Tokenization](../../FAQs-Glossary/Glossary.md#tokenization)** is a process of replacing sensitive data with non-sensitive equivalent, referred to as a token. A merchant can either submit a request to tokenize a [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) as part of a [charge](#chargerequest) by using `createToken`, or can tokenize the the payment source separately by sending a request to the [tokens](#tokenrequest) endpoint.

- **Customer Authorized:** Customer authorizes storage of their payment data in a website, app or software as a payment token for subsequent or bill pay transactions.
  - Requires the use of [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) (Credentials on File) in the requests.
- **Merchant Stored:** Merchant requires a token to be stored in their software or terminal for subsequent transaction and batching.

---

## Tokens Request

The merchant can initiate token request in order to generate a token for the payment source without authorization.

---

### Requirements

<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |

<!--
type: tab
title: transactionDetails
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`createToken` | *boolean* |  | Used to create a token on a charge transaction |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/tokens`

---

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of a token only payload request.

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    }
  },
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/tokens)

<!--
type: tab
title: Response
-->

##### Example of a tokenization (201: Created) response.

```json
{
   "gatewayResponse":{
      "transactionType": "TOKENIZE",
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
      "sourceType": "PaymentToken",
      "tokenSource": "TRANSARMOR",
      "tokenData": "8519371934460009",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "10",
         "expirationYear": "2030"
      }
   },
   "processorResponseDetails":{
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "fiserv",
      "responseCode": "000000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
   }
}
```
<!-- type: tab-end -->

---

## Tokenization with Charges Request

The merchant can initiate token request in order to generate a token for the payment source during the initial charge transaction. 

---

### Requirements

In additional to the minimum requirement for a charge request, `createToken` *true* needs to be sent in the `transactionDetails` object.

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

---

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

---

## PaymentToken Charges Request

The merchant can use the saved tokenized data in order to initate a charge request. 

---

### Requirements

<!--
type: tab
title: amount
-->

The below table identifies the required parameters in the `amount` object.

|Variable |  Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
title: paymentToken
-->

The below table identifies the required parameters in the `paymentToken` object.


| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|
| `sourceType` | *string* | 15 | &#10004; |Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md). |
| `tokenData` | *string* | 2048 | &#10004; |Token created from the payment source. |
| `PARId` | *string* | 256 | | Payment Account Reference ID for tokens. Ties transactions with multiple payment sources or tokens to a customer.|
| `declineDuplicates` | *boolean* | |  | Identifies if a duplicate create token should be rejected when one has already been created for the payment source. |
| `tokenSource` | *string* | | &#10004; |Source for the Token Provider (TSP). Valid Value: TRANSARMOR |
| `card` | *object* | | &#10004; |Contains card specific information. |
| `expirationMonth` | *string* | 2 | &#10004; |Card expiration month. |
| `expirationYear` | *string* | 4 | &#10004; |Card expiration year. |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

---

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request with PaymentToken.

```json
{
  "amount": {
    "total": "1.00",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "1234567890120019",
    "PARId": "",
    "declineDuplicates": true,
    "tokenSource": "TRANSARMOR"
    "card": {
      "expirationMonth": "03",
      "expirationYear": "30"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
title: Response
-->

##### Example of a charge (200: Success) response.

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
  "paymentSource": "PaymentToken",
  "card": {
    "last4": "0019",
    "brand": "VISA",
    "expirationMonth": "03",
    "expirationYear": "30"
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
        }
      }
    }
  }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/tokens)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---