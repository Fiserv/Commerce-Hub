---
tags: [Stored Credentials, Token, Tokenization, API Reference]
---

# Tokenization

**[Tokenization](?path=docs/Resources/FAQs-Glossary/Glossary.md#tokenization)** is a process of replacing sensitive data with non-sensitive equivalent, referred to as a token. A merchant can either submit a request to tokenize a [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) as part of a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md), or can tokenize the the payment source only by sending a request to the [tokens](#tokens-request) endpoint.

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
titles: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/tokens`

---

### Payload Example

<!--
type: tab
titles: Request, Response
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
  "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/tokens)

<!--
type: tab
-->

##### Example of a tokenization (201: Created) response.

```json
{
  "gatewayResponse": {
    "transactionType": "TOKENIZE",
    "transactionState": "AUTHORIZED",
    "transactionProcessingDetails": {
      "orderId": "CHG01737ff9a60441479682b45b6389ef87af",
      "transactionTimestamp": "2022-08-18T20:09:53.535715Z",
      "apiTraceId": "f5fcf5088f2b460fac797f0edc5a831b",
      "clientRequestId": "1243161",
      "transactionId": "f5fcf5088f2b460fac797f0edc5a831b"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2035",
      "bin": "4400555",
      "last4": "0019"
    }
  },
  "paymentTokens": [
    {
      "tokenData": "8407840515376672",
      "tokenSource": "TRANSARMOR",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    }
    {
      "tokenData": "1234840515376672",
      "tokenSource": "CHASE",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    }
  ]
}
```
<!-- type: tab-end -->

---

## PaymentToken Request

The merchant can use the saved tokenized data in order to initate a subsequent transaction request. 

---

### Requirements

<!--
type: tab
titles: amount, source, card
-->

The below table identifies the required parameters in the `amount` object.

|Variable |  Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

The below table identifies the required parameters in the `source` object.


| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|---|
| `sourceType` | *string* | 15 | &#10004; |Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md). |
| `tokenData` | *string* | 2048 | &#10004; |Token created from the payment source. |
| `PARId` | *string* | 256 | | Payment Account Reference ID for tokens. Ties transactions with multiple payment sources or tokens to a customer.|
| `declineDuplicates` | *boolean* | |  | Identifies if a duplicate create token should be rejected when one has already been created for the payment source. |
| `tokenSource` | *string* | | &#10004; |Source for the Token Provider (TSP). Valid Value: TRANSARMOR |
| `card` | *object* | | &#10004; | [Card](?path=docs/Resources/Master-Data/Card.md) subcomponent objects. |

<!--
type: tab
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|---|
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
titles: Request, Response
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
    "PARId": "1234",
    "declineDuplicates": true,
    "tokenSource": "TRANSARMOR",
    "card": {
      "expirationMonth": "03",
      "expirationYear": "2035"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

##### Example of a charge (200: Success) response.

```json
{
  "gatewayResponse": {
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "orderId": "RKOrdID-525133851837",
      "transactionId": "84356531338",
      "transactionTimestamp": "2021-06-20T23:42:48Z"
    },
    "transactionState": "AUTHORIZED",
    "transactionType": "CHARGE"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "currency": "USD",
      "total": "12.04"
    },
    "merchantAddress": "123 Peach Ave",
    "merchantCity": "Atlanta",
    "merchantCountry": "US",
    "merchantName": "Merchant Name",
    "merchantPostalCode": "12345",
    "merchantStateOrProvince": "GA",
    "merchantURL": "https://www.somedomain.com",
    "processorResponseDetails": {
      "approvalCode": "OK5882",
      "approvalStatus": "APPROVED",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      },
      "host": "NASHVILLE",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "processor": "FISERV",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "schemeTransactionId": "0225MCC625628"
    }
  },
  "source": {
    "card": {
      "bin": "40055500",
      "expirationMonth": "10",
      "expirationYear": "30",
      "last4": "0019",
      "scheme": "VISA"
    },
    "sourceType": "PaymentToken",
    "tokenData": "8519371934460009",
    "tokenSource": "TRANSARMOR"
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

- [API Explorer](../api/?type=post&path=/payments-vas/v1/tokens)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Account Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
