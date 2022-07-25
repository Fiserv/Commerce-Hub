---
tags: [Card Not Present, Card Present, Forced Post, Payments, API Documents, API Reference, Authorization, Sale, Pre Auth]
---

# Forced Post

<!-- theme: danger -->
> Due to higher instances of fraud, it is highly recommended that the forced post be limited to certain personnel. An administrator in the Virtual Terminal can manage forced Post.

A forced post is used when an issuer (bank) provides a referral also known as call response or for off-line processing. The merchant will contact the voice authorization center to receive an `approvalCode` to submit manually via an API call or [Virtual Terminal](?path=docs/Resources/Guides/Enterprise-Portal/Virtual-Terminal.md).

- If the merchant website is down, make an attempt to process the transaction in the Virtual Terminal before calling the voice authorization center.
- If the voice authorization center was not called and the merchant wants to process the transaction later, a [deferred authorization](?path=docs/Resources/Guides/Authorizations/Deferred-Auth.md) will need to be submitted.

<!-- theme: warning -->
>It is recommended to only call the voice authorization center when the [issuer requests](?path=docs/Resources/Guides/Response-Codes/Response-Code.md) the merchant to do so. Using the voice authorization center to process an off-line transaction can lead to a false approval and a chargeback.

---

## Minimum Requirements

The [example](#payload-example) below contains the mandatory fields required for a successful charge request. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charge).

<!--theme:info-->
> A charge request can be utilized to request a [payment token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) by using `createToken` in the payload.

<!--
type: tab
titles: amount, source, transactionDetails
-->

The below table identifies the required parameters in the `amount` object.

|Variable |  Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`captureFlag` | *string* | 5 | Designates if the transaction should be captured (*true* for Sale and *false* for Pre-Auth) |
|`approvalCode`|  *string* | 6 | Approval code obtained from calling the Voice Authorization Center |

<!-- type: tab-end -->

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/forcedpost`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a forced post payload request.

```json
{
   "amount": {
      "total":  12.04,
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
      "captureFlag": true,
      "approvalCode": "OK5882"
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    } 
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/forcedpost)

<!--
type: tab
-->

##### Example of a forced post (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
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
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
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
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "FISERV",
         "host": "NASHVILLE",
         "responseCode": "000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021-06-20T23:42:48Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2021-06-20T23:42:48Z"
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

- [API Explorer](../api/?type=post&path=/payments/v1/forcedpost)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)

---
