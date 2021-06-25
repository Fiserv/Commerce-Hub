---
tags: [carat, commerce-hub, enterprise, paymentcard, payment-sources]
---


# PaymentCard

Financial Institutions such as banks issue the **Payment Card** to the customers. Customers use the card to pay online or in person. The `sourceType` *PaymentCard* is used to submit a [card](?path=docs/Resources/Master-Data/Card-Type.md) transaction to our application.

---

### Minimum Requirements

<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Description |
| -------- | -- | ------------ | ------------------ |
| `sourceType` | *string* | 15 | Use Value *PaymentCard* for card transactions |
| `card` | *object* | | Contains the payment card details |

<!--
type: tab
title: card
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type | Length | Description |
| -------- | -- | ------------ | ------------------ |
| `cardData` | *string* | 15 | Credit Card Number or Encrypted Data |
| `expirationMonth` | *string* | 2 | 2-digit card expiration month Example (05) |
| `expirationYear` | *string* | 4 | 4-digit card expiration year Example (2025) |

<!-- theme: info -->
> Refer to the [card](?path=docs/Resources/Master-Data/Card.md) object for additional fields.

<!--
type: tab
title: JSON Example
-->

JSON string format for PaymentCard:

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      }
   }
}
```

<!-- type: tab-end -->

---

### Charges Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request using PaymentCard.

```json
{
   "amount": {
      "total": "12.04",
      "currency": "USD"
   },
   "source": {
      "sourceType": "PaymentCard",
      "card": {
         "cardData": "4005550000000019",
         "expirationMonth": "02",
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
title: Response
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [HTTP Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json
{
   "gatewayResponse": {
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source": {
      "sourceType": "PaymentCard",
      "card": {
         "expirationMonth": "02",
         "expirationYear": "2035",
         "bin": "400555",
         "last4": "0019",
         "scheme": "VISA"
      }
   },
   "transactionProcessingDetails": {
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
   },
   "paymentReceipt": {
      "approvedAmount": {
         "total": "12.04",
         "currency":"USD"
      },
      "processorResponseDetails": {
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "fiserv",
         "responseCode": "000000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021.02.25 14:14:38 (CET)",
         "bankAssociationDetails": {
            "transactionTimestamp": "2021.02.25 14:14:38 (CET)"
         }
      }
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

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)

---