---
tags: [carat, commerce-hub, enterprise, payment-faciliator]
---

# Payment-Faciliator

## Overview

A payment facilitator is a merchant service provider that simplifies the merchant account enrollment process. Small merchants that don't have enough infrastructure to start accepting card payments, gets onboarded under payment facilitator as a sub-merchant. Payment facilitator have removed the friction in the application and onboarding process by simplifying it and tailoring it to the businesses they serve, enabling those businesses to begin accepting card payments more quickly.

---

## Requirements

For the transaction acquired at sub-merchant, the transaction request from payment facilitator should have the merchant information as in below format.

#### Component : subMerchant

| Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`id` | *string* | N/A | This field contains a sub-merchant ID used by Payment Facilitators. |
|`name` | *string* | N/A | This field contains the merchant name/product/service to be used in lieu of the Payment Facilitator name. |
|`street` | *string* | N/A | This field contains the merchant street address to be used in lieu of the Payment Facilitator. |
|`city` | *string* | N/A | This field contains the merchant city to be used in lieu of the Payment Facilitator. |
|`state` | *string* | N/A | This field contains the merchant state to be used in lieu of the Payment Facilitator. |
|`postal` | *string* | N/A | This field contains the merchant postal code to be used in lieu of the Payment Facilitator. |
|`country` | *string* | N/A | This field contains the merchant country to be used in lieu of the Payment Facilitator. |
|`taxid` | *string* | N/A | This field should contain the Tax ID collected by the merchant for this transaction. |

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Charge Payload Request with subMerchant details.

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
  "additionalDataCommon": {
    "subMerchant": {
      "id": "99998888",
      "name": "ABC Pharmacy",
      "street": "123 Main Street",
      "city": "Atlanta",
      "state": "GA",
      "postalCode": "30303-001",
      "country": "US",
      "taxId": "123456789"
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
> See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.
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
  "additionalDataCommon": {
    "subMerchant": {
      "id": "99998888",
      "name": "ABC Pharmacy",
      "street": "123 Main Street",
      "city": "Atlanta",
      "state": "GA",
      "postalCode": "30303-001",
      "country": "US",
      "taxId": "123456789"
    }
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
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)

---