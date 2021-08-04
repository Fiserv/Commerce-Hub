---
tags: [carat, commerce-hub, account-verification, card-verification, avs, cvv, security-code, address-verification]
---

# Account Verification

The merchant can perform account verification transaction to confirm that the cardholder account is valid for a transaction. The merchant can initiate the verification request using a payment [card](#account-verification-using-paymentcard) or [token](#account-verification-using-paymenttoken).

<!--theme:info-->
> The merchant can also perform an [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and/or [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification with the request.

---

## Account Verification using PaymentCard

### Minimum Requirements

<!-- theme: warning -->
> Some cards do not allows $0 authorization, in which case `cardVerificationAmount` in the `transactionDetails` object will be required.

<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `sourceType` | *string* | 15 | Value *PaymentCard* is used for verification request using card details. Refer to [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) for more information. |
| `card` | *object* | N/A | Card details object |

<!--
type: tab
title: card
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `cardData` | *string* | 256 | Credit Card Number or Encrypted Data |
| `expirationMonth` | *string* | 2 | 2-digit card expiration month |
| `expirationyear` | *string* | 4 | 4-digit card expiration year |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/verification`

---

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
         "expirationMonth":"02",
         "expirationYear":"2035"
      }
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/verification)

<!--
type: tab
title: Response
-->

##### Account verification response.

```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"VERIFICATION",
      "transactionState":"VALID",
      "transactionOrigin":"ECOM",
      "transactionProcessingDetails":{
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
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019",
         "scheme":"VISA"
      }
   }
}
```

<!-- type: tab-end -->

---

## Account Verification using PaymentToken

### Minimum Requirements
<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
|`sourceType` | *string* | 15 | Value *PaymentToken* used for verification request using card details. Refer to [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) for more details. |
|`tokenData`| *string* | 19 | Token created for Card. |
| `card` | *object* | N/A | Card details object |

<!--
type: tab
title: card
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `expirationMonth` | *string* | 2 | 2-digit card expiration month |
| `expirationyear` | *string* | 4 | 4-digit card expiration year |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/verification`

---

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
      "card":{
         "expirationMonth": "05",
         "expirationYear": "2025",
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
      "transactionType":"VERIFICATION",
      "transactionState":"VALID",
      "transactionOrigin":"ECOM",
      "transactionProcessingDetails":{
         "transactionTime":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "source":{
      "sourceType":"PaymentToken",
      "card":{
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019",
         "scheme":"VISA"
      }
   },
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Tokenization Request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---
