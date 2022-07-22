---
tags: [Payment Faciliator]
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
  "amount"
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
  }
  "card": {
    "cardData": "4005550000000019",
    "expirationMonth": "02",
    "expirationYear": "2035"
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
  },
  "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
  }
}
```
<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.
```json
{
   "gatewayResponse":{
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionDate": "2021-04-16",
         "transactionTimestamp": "2021-04-16T16:06:05Z",
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
         "total": "12.04",
         "currency": "USD"
      },
      "merchantName": "Merchant Name",
      "merchantAddress": "123 Peach Ave",
      "merchantCity": "Atlanta",
      "merchantStateOrProvince": "GA",
      "merchantPostalCode": "12345",
      "merchantCountry": "US",
      "merchantURL": "https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK3483",
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
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)

---
