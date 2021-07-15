---
tags: [carat, commerce-hub, enterprise, convenience-fees, mastercard, visa, american-express, discover, vault]
---


# Convenience Fees

Convenience fees are charges levied for the privilege of paying for a product or service using an alternative payment, or a payment method that is not standard for the merchant.

A merchant that charges a convenience fee must ensure that the fee is:

- Charged for a bona fide convenience in the form of an alternative payment channel outside the merchant's customary payment channels.
- The requirement for an alternative payment channel means that MOTO and e-commerce merchants whose payment channels are exclusively non face-to-face may not impose a convenience fee.
- Disclosed prior to the completion of the transaction and the cardholder is given the opportunity to cancel out the transaction.
- A flat percentage rate or a fixed amount, regardless of the value of the payment due.
- Applicable to all [payment sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) accepted in the alternative payment channel.
- Included as a part of the total amount of the transaction.

<!-- theme : warning -->
> A convenience fee is different than a [surcharge](?path=docs/Resources/FAQs-Glossary/Glossary.md#surcharge). A surcharge is the ability to charge extra just for the benefit of using a credit card while a convenience fee is for a specific use, such as taxes or tuitions, or payment through alternative channels, such as by phone or online.

---

## Policies and Usage

Every credit card provider has different rules on convenience fees. Below are the rules of some of the major credit card providers:

- **Mastercard:** Allows for convenience fees as long as they are for government, education, and tax-related payments.
- **Visa:** Allows for convenience fees only if the payment is through an alternative channel, such as by phone or online, and the business first notifies the consumer, and that the fee is a flat rate, not a percentage of the sale.
- **American Express:** Allows convenience fees on a variety of items as long as the fee imposed is on similar transactions.
- **Discover:** Allows convenience fees and should be treated with the same policy of other credit cards.

---

## Request Variables

The `convenienceFee` is part of the `amountComponents` and the `additionalDataCommon` array. See [amount components](?path=docs/Resources/Master-Data/Amount-Components.md) for more details.

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request using `convenienceFee`.

```json
{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "nameOnCard":"Jane Smith",
         "expirationMonth":"02",
         "expirationYear":"2035",
         "securityCode":"123",
         "securityCodeIndicator":"PROVIDED"
      }
   },
   "transactionDetails":{
      "captureFlag":true
   },
   "additionalDataCommon":{
      "amountComponents":{
         "convenienceFees":"1.00"
      }
   }
}
```
<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

```json
{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTime": "2021-06-20T23:42:48Z",
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
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
         "currency": "USD",
         "merchantName": "Merchant Name",
         "merchantAddress": "123 Peach Ave",
         "merchantCity": "Atlanta",
         "merchantStateOrProvince": "GA",
         "merchantPostalCode": "12345",
         "merchantCountry": "US",
         "merchantURL": "https://www.somedomain.com"
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
            "transactionTimestamp": "2021.02.25 14:14:38 (CET)"
         }
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   },
   "additionalDataCommon":{
      "amountComponents":{
         "convenienceFees": 1.00
      }
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Amount Components](?path=docs/Resources/Master-Data/Amount-Components.md)
- [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md)

---
