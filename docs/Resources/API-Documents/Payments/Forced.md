---
tags: [Forced Post, Payments, API Reference, Authorization, Sale]
---

# Forced Post

<!-- theme: danger -->
> Due to higher instances of fraud, it is highly recommended that the forced post be limited to certain personnel. An administrator in the Virtual Terminal can manage forced Post.

A forced post is used when an issuer (bank) provides a referral also known as call response for off-line processing. The merchant will contact the voice authorization center to receive an `approvalCode` to submit manually via an API call or [Virtual Terminal](?path=docs/Resources/Guides/Enterprise-Portal/Virtual-Terminal.md).

- If the merchant website is down, make an attempt to process the transaction in the Virtual Terminal before calling the voice authorization center.
- If the voice authorization center was not called and the merchant wants to process the transaction later, a [deferred authorization](?path=docs/Resources/Guides/Authorizations/Deferred-Auth.md) will need to be submitted.

<!-- theme: warning -->
> It is recommended to only call the voice authorization center when the [issuer requests](?path=docs/Resources/Guides/Response-Codes/Response-Code.md) the merchant to do so. Using the voice authorization center to process an off-line transaction can lead to a false approval and a chargeback.

---

## Minimum Requirements

The [example](#payload-example) below contains the mandatory fields required for a successful forced post request. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charge).

<!--theme:info-->
> A forced post request can be utilized to request a [payment token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) by using `createToken` in the payload.

<!--
type: tab
titles: amount, source, transactionDetails, merchantDetails
-->

---

The below table identifies the required parameters in the `amount` object.

|Variable |  Type| Max Length | Description|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Max Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type| Max Length | Description |
|---------|----------|----------------|---------|
|`captureFlag` | *string* | 5 | Designates if the transaction should be captured, must be *true* for forced post |
|`approvalCode` | *string* | 6 | The approval code recieved from the voice authorization center |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Max Length | Description |
|---------|----------|----------------|---------|
| `merchantId` | *string* | 1024 | A unique ID used to identify the merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |

<!-- type: tab-end -->

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a forced post payload request.

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    }
  },
  "amount": {
    "total": 85,
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": true,
    "approvalCode": "OK7244"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/forcedpost)

<!--
type: tab
-->

Example of a forced post (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "gatewayResponse":{
      "transactionType":"CHARGE_FORCED_POST",
      "transactionState":"CAPTURED",
      "transactionOrigin":"ECOM",
      "transactionProcessingDetails":{
         "orderId":"CHG01e525472efa08b7d32a3da77b3b7f3a61",
         "transactionTimestamp":"2023-01-13T19:43:55.845836Z",
         "apiTraceId":"e243e65a21454fd0a67bb72a51ff2387",
         "clientRequestId":"5200213",
         "transactionId":"e243e65a21454fd0a67bb72a51ff2387"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total":85,
         "currency":"USD"
      },
      "processorResponseDetails":{
         "approvalStatus":"APPROVED",
         "processor":"fiserv",
         "responseCode":"000000",
         "responseMessage":"APPROVAL",
         "hostResponseCode":"00",
         "hostResponseMessage":"Authorised",
         "localTimestamp":"2023-01-13T19:43:57Z"
      }
   },
   "transactionDetails":{
      "primaryTransactionId":"a64109c752e14add80a597965bc1b72f",
      "captureFlag":true,
      "approvalCode":"OK7244"
      "authentication3DS":false
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
