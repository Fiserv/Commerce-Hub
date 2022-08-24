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

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/tokens)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Account Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
