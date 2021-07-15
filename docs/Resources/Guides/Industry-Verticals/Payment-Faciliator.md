---
tags: [carat, commerce-hub, enterprise, payment-faciliator]
---


# Payment Faciliator

A payment facilitator is a merchant service provider that simplifies the merchant account enrollment process. Small merchants that don't have enough infrastructure to start accepting card payments, gets onboarded under payment facilitator as a sub-merchant. Payment facilitator have removed the friction in the application and onboarding process by simplifying it and tailoring it to the businesses they serve, enabling those businesses to begin accepting card payments more quickly.

---

## Request Variables

For the transaction acquired at sub-merchant, the transaction request from payment facilitator should have the merchant information as in below format.

<!--
type: tab
title: subMerchant
-->

The below table identifies the required parameters in the `subMerchant` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`id` | *string* | N/A | This field contains a sub-merchant ID used by Payment Facilitators. |
|`name` | *string* | N/A | This field contains the merchant name/product/service to be used in lieu of the Payment Facilitator name. |
|`street` | *string* | N/A | This field contains the merchant street address to be used in lieu of the Payment Facilitator. |
|`city` | *string* | N/A | This field contains the merchant city to be used in lieu of the Payment Facilitator. |
|`state` | *string* | N/A | This field contains the merchant state to be used in lieu of the Payment Facilitator. |
|`postal` | *string* | N/A | This field contains the merchant postal code to be used in lieu of the Payment Facilitator. |
|`country` | *string* | N/A | This field contains the merchant country to be used in lieu of the Payment Facilitator. |
|`taxid` | *string* | N/A | This field should contain the Tax ID collected by the merchant for this transaction. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `subMerchant`:

```json
{
   "subMerchant":{
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
```

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Charge payload request with subMerchant details.

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
    "securityCode": "123",
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

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.
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
   "additionalDataCommon":{
      "subMerchant":{
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
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)

---