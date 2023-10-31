---
tags: [Gift Card, Payment Card, Payment Source, Loyalty, Activation]
---

# Rdemption

Description ; how gift card is redem using the same payment endpoints 

Add extra values request variables 

values need tobe called out

what are the optional feilds

link to payments landing page 

payload examples

see also

## Request Variables

<!--
type: tab
titles: amount, transactionDetails, transactionInteraction, merchantDetails, additionalDataCommon 
-->

The below table identifies the parameters in the `amount` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `total` | _number_ | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Maste`r-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | _string_ | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `operationType` | _string_ | 50 | Defines the request type as ACTIVATION |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionInteraction` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `terminalTimestamp` | _string_ | N/A | Terminal timestamp in ISO 8601 format YYYY-MM-DDThh:mm:ssZ |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | _string_ | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | _string_ | N/A | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!--
type: tab
-->

The below table identifies the parameters in the `additionalDataCommon` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `additionalData` | _object_ | N/A |  Idenitfies adtionatal data in the request. |

The below table identifies the conditional parameters in the `additionalData` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `securityCodeType` | _string_ | 32 |  Type of security code requested when activating a [digital gift card](#digital-gift-card) |
| `fundingProvider` | _string_ | 32 |  Identifies who provided the funds, CUSTOMER, MERCHANT or UNSPECIFIED |
| `transactionPostDate` | _string_ | 16 | Used to override a transaction post date in reporting |

<!-- type: tab-end -->

---

## Payload Example

```json
{
  "amount": {
    "total": 13.05,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "9998955500000000190",
      "expirationMonth": "02",              // Optional data field
      "expirationYear": "2035",              // Optional data field
      "securityCode": "124",      
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS"    
    }
  },
  "transactionDetails": {
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890",
    "captureFlag": true,
    "partialApproval": true
  },
  "transactionInteraction": {
    "terminalTimestamp": "2016-04-16T16:06:05Z"
  },
  "merchantDetails": {
    "terminalId": "123567",
    "merchantId": "123456789012345"
  },
  "additionalDataCommon": {
    "additionalData": {
      "securityCodeType": "EAN",
      "transactionPostDate": "2016-04-16"
    }    
  }
}

```
<!-- 
type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Gift Solution](?path=docs/Resources/Guides/Payment-Sources/Gift/Gift-Solutions.md)
  