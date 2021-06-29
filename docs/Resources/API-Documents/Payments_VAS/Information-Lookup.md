---
tags: [carat, commerce-hub, enterprise, information-lookup, account-lookup, card-lookup,]
---

# Information Lookup

If the merchant wants to verify card related information of the cardholder such as issuer country, card function and card brand associated with a card or token, then the merchant can initiate the account information lookup request.

---

####  Response Component: cardDetails

The `cardDetails` are returned in the account information lookup response. The below table identifies the required parameters in the `cardDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `brand` | *string* |  | Card Brand |
| `brandProductId` | *string* |  | Category within the card brand |
| `cardFunction` | *string* |  | Identifies the type of card as CREDIT or DEBIT |
| `commercialCard` | *string* |  | Identifies if the card is a CORPORATE, COMMERCIAL or NON_CORPORATE card |
| `issuerCountry` | *string* |  | Card Issuer Country Two-letter [Country Code](?path=docs/Resources/Master-Data/Country-Code.md) |
| `issuerName` | *string* |  | Issuing bank name |

## Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/information`

---

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
|`sourceType` | *string* | 15 | Value *PaymentCard* is used for a verification request using `cardData`. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. |

<!--
type: tab
title: card
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `cardData` | *string* | 19 | Card number or encrypted data |

<!-- type: tab-end -->


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
|`sourceType` | *string* | 15 | Value *PaymentToken* is used for a verification request using `tokenData`. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. |
|`tokenData`| *string* | 19 | Token created for Card. | 

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
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---