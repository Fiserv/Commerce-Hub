---
tags: [carat, commerce-hub, account-verification, card-verification, avs, cvv, security-code, address-verification]
---

# Account Verification

## Overview

The merchant can perform account verification transaction to confirm that the cardholder account is valid for a transaction. The merchant can initiate the verification request using a payment [card](#paymentcard-requirements) or [token](#paymenttoken-requirements).

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/verification`

---

## PaymentCard Requirements

#### Object: source

| Variable | Type | Maximum Length | Description/Values |
| --------- | ---------- | ---------------- | --------- |
| `sourceType` | *string* | 15 | Value *PaymentCard* used for verification request using card details. Refer Payment [source type](?path=docs/Guides/Payment-Sources/Source-Type.md) for more details. |
| `cardData` | *string* | 19 | Encrypted or unencrypted [card data](?path=docs/Resources/Master-Data/Card.md) (e.g. PAN, EMV, Track, etc.). |

<!--theme:info-->
> The merchant can also perform an [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and/or [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification with the request.

### Payload Example

<!--
type: tab
title: Request
-->

##### Account verification request using PaymentCard.

```json
{
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "nameOnCard":"Jane Smith",
         "expirationMonth":"02",
         "expirationYear":"2035"
      }
   }
}
```

<!--
type: tab
title: Response
-->

##### Account verification response.

```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"verification",
      "transactionState":"valid",
      "transactionOrigin":"ecom",
      "transactionProcessingDetails":{
         "transactionDate":"2016-04-16",
         "transactionTime":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "nameOnCard":"Jane Smith",
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019",
      }
   }
}
```
<!-- type: tab-end -->

---

## PaymentToken Requirements

#### Object: source

| Variable | Type | Maximum Length | Description/Values |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Value *PaymentToken* used for verification request using card details. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. |
|`tokenData`| *string* | 19 | Token created for Card. | 

### Payload Example

<!--
type: tab
title: Request
-->

##### Account verification request using PaymentToken.

```json
{
   "source":{
      "sourceType": "PaymentToken",
      "tokenData": "1234123412340019",
      "tokenSource": "TRANSARMOR",
      "card":{
         "nameOnCard": "Jane Smith",
         "expirationMonth": "05",
         "expirationYear": "2025",
         "bin": "400555",
         "last4": "0019"
      }
   }
}
```

<!--
type: tab
title: Response
-->

##### Account verification response

```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"verification",
      "transactionState":"valid",
      "transactionOrigin":"ecom",
      "transactionProcessingDetails":{
         "transactionDate":"2016-04-16",
         "transactionTime":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "source":{
      "sourceType":"PaymentToken",
      "card":{
         "nameOnCard":"Jane Smith",
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019",
         "scheme":"VISA"
      }
   },
   "paymentToken":{
      "tokenData":"1234123412340019",
      "PARId":"string",
      "declineDuplicates":"false",
      "tokenSource":"TRANSARMOR"
   }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
