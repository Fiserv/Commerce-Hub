---
tags: [Convenience Fees]
---

# Convenience Fees

<!-- theme: danger -->
> We are enhancing the Commerce Hub to include convenience fee support and the documents related to the features will be released soon.

Convenience fees are charges levied for the privilege of paying for a product or service using an alternative payment, or a payment method that is not standard for the merchant.

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

The `convenienceFee` is part of the `amountComponents` object in the `additionalDataCommon` object. See [amount components](?path=docs/Resources/Master-Data/Amount-Components.md) for more details.

---

## Payload Example

<!--
type: tab
titles: Request, Response
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
   },
   "merchantDetails":{
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
   "gatewayResponse":{
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType": "CHARGES",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionDate": "2016-04-16",
         "transactionTime": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "nameOnCard": "Jane Smith",
         "expirationMonth": "02",
         "expirationYear": "2035",
         "bin": "400555",
         "last4": "0019",
         "scheme": "VISA"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total": "12.04",
         "currency": "USD"
      },
      "processorResponseDetails":{
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
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2016-04-16T16:06:05Z"
         }
      }
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
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)

---
