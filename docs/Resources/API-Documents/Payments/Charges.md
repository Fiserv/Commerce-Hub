---
tags: [carat, commerce-hub, enterprise, card-not-present, card-present, charges, payments, api-reference, authorization, sale, pre-auth]
---

# Charges

Charges can be initiated in two ways; either as Sale or Pre-Auth and is defined with the `captureFlag` sent in the request.

- *true:* A sale transaction where the customer will be changed the total amount.
- *false:* A pre-auth transaction, where the customer's funds will be reserved and a [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) will be required to withdrawal the funds.

#### Charge Types

- [**Auth-Only:**](?path=docs/Resources/FAQs-Glossary/Glossary.md#authorization) A transaction where the merchant [verifies](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) a customer's account, also known as a $0 auth.
- [**Pre-Auth:**](?path=docs/Resources/FAQs-Glossary/Glossary.md#preauth) A transaction where the customer authorizes to have funds withdrawn from their account on a future date.
- [**Sale:**](?path=docs/Resources/FAQs-Glossary/Glossary.md#sale) A transaction where the customer authorizes to have funds withdrawn from their account at the end of the day.

---

## Minimum Requirements

The [example](#payload-example) below contains the mandatory fields required for a successful charge request. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charge).

<!--theme:info-->
> A charge request can be utilized to request a [payment token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) by using `createToken` in the payload.

<!--
type: tab
title: amount
-->

The below table identifies the required parameters in the `amount` object.

|Variable |  Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |

<!--
type: tab
title: transactionDetails
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`captureFlag` | *string* | 5 | Designates if the transaction should be captured (*true* for Sale and *false* for Pre-Auth)|

<!-- type: tab-end -->

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request.

```json
{
   "amount":{
      "total": "12.04",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "transactionDetails":{
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
   "gatewayResponse":{
      "transactionType":"CHARGE",
      "transactionState":"AUTHORIZED",
      "transactionOrigin":"SECURE_ECOM"
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "expirationMonth":"02",
         "expirationYear":"2035"
      }
   },
   "transactionProcessingDetails":{
      "orderId":"RKOrdID-525133851837",
      "apiTraceId":"362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId":"4345791",
      "transactionId":"84356531338"
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total":"12.04",
         "currency":"USD"
      }
   },
   "processorResponseDetails":{
      "approvalStatus":"APPROVED",
      "approvalCode":"OK5882",
      "schemeTransactionId":"0225MCC625628",
      "processor":"fiserv",
      "responseCode":"000000",
      "responseMessage":"APPROVAL",
      "hostResponseCode":"00",
      "hostResponseMessage":"APPROVAL",
      "localTimestamp":"2021.02.25 14:14:38 (CET)",
      "bankAssociationDetails":{
         "transactionTimestamp":"2021.02.25 14:14:38 (CET)"
      }
   },
   "transactionDetails":{
      "merchantTransactionId":"RKTransID-768086381518"
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Incremental Auth](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
