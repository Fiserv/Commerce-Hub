---
tags: [Convenience Fees, Amount]
---

# Convenience Fees

Convenience fees are charges levied for the privilege of paying for a product or service using an alternative payment, or a payment method that is not standard for the merchant. Convenience Fees facilitate this, passing the cost from the Merchant to consumer.

A merchant that charges a convenience fee must ensure that the fee is:

- Charged for a bona fide convenience in the form of an alternative payment channel outside the merchant's customary payment channels.
- The requirement for an alternative payment channel means that MOTO and e-commerce merchants whose payment channels are exclusively non face-to-face may not impose a convenience fee.
- Disclosed prior to the completion of the transaction and the cardholder is given the opportunity to cancel out the transaction.
- A flat percentage rate or a fixed amount, regardless of the value of the payment due.
- Applicable to all [payment sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) accepted in the alternative payment channel.
- Included as a part of the total amount of the transaction.

<!-- theme : warning -->
> A convenience fee is different than a [surcharge](?path=docs/Resources/FAQs-Glossary/Glossary.md#surcharge-fees). A surcharge is the ability to charge extra just for the benefit of using a credit card while a convenience fee is for a specific use, such as taxes or tuitions, or payment through alternative channels, such as by phone or online.

---

## Policies and Usage

Every credit card provider has different rules on convenience fees. Below are the rules of some of the major credit card providers:

- **Mastercard:** Allows for convenience fees as long as they are for government, education, and tax-related payments.
- **Visa:** Allows for convenience fees only if the payment is through an alternative channel, such as by phone or online, and the business first notifies the consumer, and that the fee is a flat rate, not a percentage of the sale.
- **American Express:** Allows convenience fees on a variety of items as long as the fee imposed is on similar transactions.
- **Discover:** Allows convenience fees and should be treated with the same policy of other credit cards.

---

## Request Variables 

<!--
type: tab
titles: amount, JSON Example, amountComponents, JSON Example
-->

The below table identifies the required parameters in the `amount` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 18,3 | The total amount of a transaction including `convenienceFees` and `subTotal` | 
| `currency` | *string* | 3 | The requested currency in [ISO-4217 3-character Alpha Code](?path=docs/Resources/Master-Data/Currency-Code.md) | 

<!--
type: tab
-->

JSON string format:

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  }
}
```

<!--
type: tab
-->

The below table identifies the required parameters in the `amountComponents` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `subTotal` | *string* | 32 | The total amount for the goods and services excluding `convenienceFees`| 
| `convenienceFees` | *string* | N/A | Convenience fees being charged to the customer | 

<!--
type: tab
-->

JSON string format:

```json
{
  "amountComponents": {
    "subTotal": 11.04,
    "convenienceFees": 1
  }
}
```

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request using `convenienceFee`.

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
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
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "amountComponents": {
    "subTotal": 11.02,
    "convenienceFees": 1.02
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```
<!--
type: tab
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "CHARGES",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "expirationMonth": "10",
      "expirationYear": "2030",
      "last4": "0019",
      "scheme": "VISA"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.02,
      "currency": "USD"
    },
    "amountComponents": {
      "subTotal": 11.02,
      "convenienceFees": 1.02
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK3483",
      "authenticationResponseCode": "string",
      "referenceNumber": "845366457890-TODO",
      "schemeTransactionId": "019078743804756",
      "feeProgramIndicator": "123",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2016-04-16T16:06:05Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2016-04-16T16:06:05Z"
      }
    }
  },
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "cardLevelResultCode": "C",
    "validationCode": "IV  ",
    "transactionIdentifier": "013234959794033"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Amount Components](?path=docs/Resources/Master-Data/Amount-Components.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)

---
