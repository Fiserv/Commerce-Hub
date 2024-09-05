---
tags: [Stored Credentials, Token, Tokenization, API Reference]
---

# TransAmor Tokenization

TransAmor is a secure [tokenization service](?path=docs/Resources/FAQs-Glossary/Glossary.md#tokenization) that helps merchants protect sensitive payment data. Through TransAmor, merchants can replace sensitive payment information, such as credit card numbers, with non-sensitive equivalents known as tokens. Merchants can tokenize payment sources as part of various transactions, including a[Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md), a [Verification API request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) or a [Card Capture API request](?path=docs/Online-Mobile-Digital/Checkout/API/API-Only.md) request if enabled for TransArmor or by sending a separate request to the [tokens endpoint](#tokenization-request).

<!-- theme: info -->
> If available Commerce Hub will also return any third-party processor tokens.

- **Customer Authorized:** Customer authorizes storage of their payment data in a website, app or software as a payment token for subsequent or bill pay transactions.
  - Requires the use of [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) (Credentials on File) in the requests.
- **Merchant Stored:** Merchant requires a token to be stored in their software or terminal for subsequent transaction and batching.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry *(PCI)* Compliance capabilities to process and store card data.

---

## Tokenization Request

The merchant can initiate a tokens request in order to generate a TransArmor token for the payment source without authorization.

<!--
type: tab
titles: Request, Response
-->

<!-- theme: success -->
> **POST** `/payments-vas/v1/tokens`

The example below contains the minimum [parameters](#parameters) for a successful TransArmor tokenization request using *PaymentCard*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/tokens).

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/tokens)

<!--
type: tab
-->

Example of a tokenization (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
    },
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

### Parameters

#### Request Variables

<!-- theme: warning -->
> Account verification can be performed by submitting `accountVerification`: *true* in `transactionDetails`. If a multi-use token is required the [stored credential details](?path=docs/Resources/Guides/Stored-Credentials.md) must be submitted in the request.

<!--
type: tab
titles: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Max Length | Description|
|---------|----------|----------------|---------|
| `sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |

<!-- type: tab-end -->

---

## PaymentToken Request

The merchant can use the saved tokenized data in order to initiate a [subsequent transaction request](#see-also) using *PaymentToken* as the `sourceType`.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters-1) for a successful TransArmor token [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using *PaymentToken*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "1234567890120019",
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

Example of a charge (200: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
      "total": 12.04
    },
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
    "sourceType": "PaymentToken",
    "tokenData": "8519371934460009",
    "tokenSource": "TRANSARMOR",
    "card": {
      "bin": "40055500",
      "expirationMonth": "10",
      "expirationYear": "30",
      "last4": "0019",
      "scheme": "VISA"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  }
}
```
<!-- type: tab-end -->

---

### Parameters

#### Request Variables

<!-- theme: info -->
> It is recommended that the merchant captures the [encrypted CVV](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) if available from the customer for security and validation purposes.

<!--
type: tab
titles: source, card
-->

The below table identifies the parameters in the `source` object.

| Variable | Type| Max Length | Required | Description |
| ----- | :-----: | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | &#10004; |Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |
| `tokenData` | *string* | 2048 | &#10004; |Token created from the payment source. |
| `tokenSource` | *string* | | &#10004; | The token source is *TRANSARMOR* |
| `PARId` | *string* | 256 | | Payment Account Reference ID for tokens. Ties transactions with multiple payment sources or tokens to a customer |
| `declineDuplicates` | *boolean* | |  | Identifies if a duplicate create token should be rejected when one has already been created for the payment source |
| `card` | *object* | | &#10004; | [Card](?path=docs/Resources/Master-Data/Card.md) subcomponent objects |

<!--
type: tab
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type| Max Length | Required | Description |
| ----- | :-----: | :-----: | :-----: | ----- |
| `expirationMonth` | *string* | 2 | &#10004; | 2-digit card expiration month |
| `expirationYear` | *string* | 4 | &#10004; | 4-digit card expiration year |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/tokens)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Card Meta Data](?path=docs/Resources/Master-Data/Card-Details.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Account Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
