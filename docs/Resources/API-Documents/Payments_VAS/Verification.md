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
      "transactionType": "VERIFICATION",
      "transactionState": "VERIFIED",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
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
         "transactionTimestamp": "2021-06-20T23:42:48Z",
         "avsSecurityCodeResponse":{
            "streetMatch": "MATCHED",
            "postalCodeMatch": "MATCHED",
            "securityCodeMatch": "MATCHED",
            "association":{
               "avsCode": "Y"
            }
         }
      }
   },
   "transactionDetails":{
      "merchantInvoiceNumber": "123456789012"
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
      "transactionType": "VERIFICATION",
      "transactionState": "VERIFIED",
      "transactionProcessingDetails":{
         "transactionTime": "2021-06-20T23:42:48Z",
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
         "expirationYear": "30"
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
      "localTimestamp": "2021.02.25 14:14:38 (CET)",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2021.02.25 14:14:38 (CET)",
         "avsSecurityCodeResponse":{
            "streetMatch": "EXACT_MATCH",
            "postalCodeMatch": "EXACT_MATCH",
            "securityCodeMatch": "MATCHED",
            "association":{
               "avsCode": "Y"
            }
         }
      }
   },
   "transactionDetails":{
      "merchantInvoiceNumber": "123456789012"
   }
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
