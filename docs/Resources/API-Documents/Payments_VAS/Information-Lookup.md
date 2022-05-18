---
tags: [Information Lookup, Account Lookup, Card Lookup, Token Lookup]
---

# Information Lookup

Information Lookup is used to verify card related information of the cardholder such as issuer country, card function and card brand associated with a card or token. The `cardDetails` are returned in the response.

- CPS (card processing requirements) - based on things like brand, function, type (commercial, non-corporate)
- Directed Routing - sending the request to a network based on card brand, function or type

<!--
type: tab
titles: cardDetails
-->

The below table identifies the parameters in the `cardDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `brand` | *string* | 256 | Card Brand |
| `brandProductId` | *string* | 256 | Category within the card brand |
| `cardFunction` | *string* | 256 | Identifies the type of card as CREDIT or DEBIT |
| `commercialCard` | *string* | 256 | Identifies if the card is a CORPORATE, COMMERCIAL or NON_CORPORATE card |
| `issuerCountry` | *string* | 256 | Card Issuer Country Two-letter [Country Code](?path=docs/Resources/Master-Data/Country-Code.md) |
| `issuerName` | *string* | 256 | Issuing bank name |

<!-- type: tab-end -->

---

## Information Lookup Using PaymentCard

The merchant can initiate information lookup transaction by passing the card details of the customer and using `PaymentCard` as a payment source.

### Minimum Requirements

<!--
type: tab
titles: source, card
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Value *PaymentCard* is used for a verification request using `cardData`. Refer to [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) for more details. |

<!--
type: tab
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `cardData` | *string* | 19 | Card number or encrypted data |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/information`

---


### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Account information lookup request using PaymentCard.

```json
{
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019"
      }
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/information)

<!--
type: tab
-->

##### Account information lookup response.

```json

{
  "gatewayResponse": {
    "transactionType": "INFORMATION",
    "transactionState": "SUCCESS",
    "transactionProcessingDetails": {
      "transactionTime": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "cardDetails": [
    {
      "brand": "VISA",
      "brandProductId": "VISA_BUSINESS",
      "cardFunction": "CREDIT",
      "commercialCard": "CORPORATE",
      "issuerCountry": "US",
      "issuerName": "First National Bank of Omaha"
    }
  ]
}
```

<!-- type: tab-end -->

---

## Information Lookup Using PaymentToken 

The merchant can initiate information lookup transaction by passing the card details of the customer and using `PaymentToken` as a payment source.

### Minimum Requirements

<!--
type: tab
titles: source
-->

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Value *PaymentToken* is used for a verification request using `tokenData`. Refer to [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) for more details. |
|`tokenData`| *string* | 19 | Token created for Card. |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/information`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Account information lookup request using PaymentToken.

```json
{
   "source":{
      "sourceType":"PaymentToken",
      "tokenData":"1234123412340019"
   }
}
```

<!--
type: tab
-->

##### Account information lookup response.

```json

{
  "gatewayResponse": {
    "transactionType": "INFORMATION",
    "transactionState": "SUCCESS",
    "transactionProcessingDetails": {
      "transactionTime": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "cardDetails": [
    {
      "brand": "VISA",
      "brandProductId": "VISA_BUSINESS",
      "cardFunction": "CREDIT",
      "commercialCard": "CORPORATE",
      "issuerCountry": "US",
      "issuerName": "First National Bank of Omaha"
    }
  ]
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Tokenization Request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---
