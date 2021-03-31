# Convenience Fees

## Overview

Convenience fees are charges levied for the privilege of paying for a product or service using an alternative payment, or a payment method that is not standard for the merchant.

A merchant that charges a convenience fee must ensure that the fee is:

- Charged for a bona fide convenience in the form of an alternative payment channel outside the merchant's customary payment channels.
- The requirement for an alternative payment channel means that MOTO and e-commerce merchants whose payment channels are exclusively non face-to-face may not impose a convenience fee.
- Disclosed prior to the completion of the transaction and the cardholder is given the opportunity to cancel out the transaction.
- A flat percentage rate or a fixed amount, regardless of the value of the payment due.
- Applicable to all [payment sources](../Payment-Source/Source-Type.md) accepted in the alternative payment channel.
- Included as a part of the total amount of the transaction.

<!-- theme : warning -->
> A convenience fee is different than a [surcharge](../../FAQs-Glossary/Glossary.md#surcharge). A surcharge is the ability to charge extra just for the benefit of using a credit card while a convenience fee is for a specific use, such as taxes or tuitions, or payment through alternative channels, such as by phone or online.

---

## Policies on Convenience Fees

Every credit card provider has different rules on convenience fees. Below are the rules of some of the major credit card providers:

- **Mastercard:** Allows for convenience fees as long as they are for government, education, and tax-related payments.
- **Visa:** Allows for convenience fees only if the payment is through an alternative channel, such a by phone or online, and the business first notifies the consumer, and that the fee is a flat rate, not a percentage of the sale.
- **American Express:** Allows convenience fees on a variety of items as long as the fee imposed is on similar transactions.
- **Discover:** Allows convenience fees and should be treated with the same policy of other credit cards.

---

## Minimum Requirement

The `convenienceFee` is part of the `amountComponents` and the `additionalDataCommon` array. See [amount components](../../Master-Data/Amount-Components.md) for more details.

---

## Payload Example


<!--
type: tab
title: Request
-->

##### Example of a Charge Payload Request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
  }
  "card": {
    "cardData": "4005550000000019",
    "expirationMonth": "02",
    "expirationYear": "2035",
    "securityCode": "123"
    "securityCodeIndicator": "PROVIDED"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "additionalDataCommon"{
    "amountComponents"{
      "convenienceFees": "1.00"
    }
  }
}
```
<!--
type: tab
title: Response
-->

##### Example of a Charge (201: Created) Response.

<!-- theme: info -->
> See [Error Responses](url) for additional examples.
```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
    "transactionState": "authorized",
    "transactionOrigin": "ecom"
  },
  "transactionProcessingDetails": {
    "transactionDate": "2021-04-16",
    "transactionTime": "2021-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "source": "PaymentCard",
  "card": {
    "bin": "400555",
    "last4": "0019",
    "brand": "VISA",
    "expirationMonth": "02",
    "expirationYear": "2035"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": "1.00",
      "currency": "USD"
    },
    "processorResponseDetails": null,
    "approvalStatus": "APPROVED",
    "approvalCode": "OK7118",
    "referenceNumber": "845366457890-TODO",
    "schemeTransactionID": "019078743804756",
    "processor": "fiserv",
    "responseCode": "00",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "54022",
    "hostResponseMessage": "Approved",
    "localTimestamp": "2021-04-16T16:06:05Z",
    "bankAssociationDetails": {
      "associationResponseCode": "000",
      "transactionTimestamp": "2021-04-16T16:06:05Z",
      "transactionReferenceInformation": null,
      "avsSecurityCodeResponse": {
        "streetMatch": "EXACT_MATCH",
        "postalCodeMatch": "EXACT_MATCH",
        "securityCodeMatch": "MATCHED",
        "association": {
          "avsCode": "Z",
          "securityCodeResponse": "S",
          "cardHolderNameResponse": "M"
        }
      }
    }
  },
  "additionalDataCommon"{
    "amountComponents"{
      "convenienceFees": "1.00"
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](url)
- [Amount Components](../../Master-Data/Amount-Components.md)
- [Charges](../../Transactions/Charges.md)

