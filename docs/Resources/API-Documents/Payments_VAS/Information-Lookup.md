---
tags: [carat, commerce-hub, enterprise, information-lookup, account-lookup, card-lookup, token-lookup]
---

# Information Lookup

If the merchant wants to verify card related information of the cardholder such as issuer country, card function and card brand associated with a card or token, then the merchant can initiate the account information lookup request.

<!--
type: tab
title: cardDetails
-->

The `cardDetails` are returned in the account information lookup response. The below table identifies the required parameters in the `cardDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `brand` | *string* | 256 | Card Brand |
| `brandProductId` | *string* | 256 | Category within the card brand |
| `cardFunction` | *string* | 256 | Identifies the type of card as CREDIT or DEBIT |
| `commercialCard` | *string* | 256 | Identifies if the card is a CORPORATE, COMMERCIAL or NON_CORPORATE card |
| `issuerCountry` | *string* | 256 | Card Issuer Country Two-letter [Country Code](?path=docs/Resources/Master-Data/Country-Code.md) |
| `issuerName` | *string* | 256 | Issuing bank name |

<!-- type: tab-end -->

## Information Lookup using PaymentCard

The merchant can initiate information lookup transaction by passing the card details of the customer and using `PaymentCard` as a payment source.

### Minimum Requirements

<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Value *PaymentCard* is used for a verification request using `cardData`. Refer to [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) for more details. |

<!--
type: tab
title: card
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `cardData` | *string* | 19 | Card number or encrypted data |

<!-- type: tab-end -->

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/information`

---


### Payload Example

<!--
type: tab
title: Request
-->

##### Account information lookup request using PaymentCard.

```json
{
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019"
      }
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/information)

<!--
type: tab
title: Response
-->

##### Account information lookup response.

```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"token",
      "transactionState":"authorized",
      "transactionOrigin":"ecom",
      "transactionProcessingDetails":{
         "transactionDate":"2016-04-16",
         "transactionTime":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "cardDetails":{
      "brand":"VISA",
      "brandProductId":"VISA_BUSINESS",
      "cardFunction":"CREDIT",
      "commercialCard":"CORPORATE",
      "issuerCountry":"US",
      "issuerName":"First National Bank of Omaha"
   }
}
```
<!-- type: tab-end -->

---

## Information Lookup using PaymentToken 

The merchant can initiate information lookup transaction by passing the card details of the customer and using `PaymentToken` as a payment source.

### Minimum Requirements

#### source

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Value *PaymentToken* is used for a verification request using `tokenData`. Refer to [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) for more details. |
|`tokenData`| *string* | 19 | Token created for Card. |

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/information`

---

### Payload Example
<!--
type: tab
title: Request
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
title: Response
-->

##### Account information lookup response.

```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"token",
      "transactionState":"authorized",
      "transactionOrigin":"ecom",
      "transactionProcessingDetails":{
         "transactionDate":"2016-04-16",
         "transactionTime":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "CardDetails":{
      "brand":"VISA",
      "brandProductId":"VISA_BUSINESS",
      "cardFunction":"CREDIT",
      "commercialCard":"CORPORATE",
      "issuerCountry":"US",
      "issuerName":"First National Bank of Omaha"
   }
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
