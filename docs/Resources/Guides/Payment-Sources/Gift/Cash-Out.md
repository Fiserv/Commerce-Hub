---
tags: [Gift Card, Payment Card, Payment Source, Loyalty, Cash-Out]
---

# Gift Card Cash-Out

A cash-out request allows a merchant to remove the consumer funds from the gift card. A cash-out is initiated by sending the `target` and `additionalDataCommon` object in the Request with relevant transaction types.

## Request Variables

Description

<!--
type: tab
titles: target, transactionDetails, transactionInteraction, merchantDetails, additionalDataCommon 
-->

The below table identifies the available parameters in `target` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `expirationMonth` | *string* | N/A | 2-digit expiration month |
| `expirationYear` | *string* | N/A | 4-digit expiration year |
| `category`| *string* | 25 | Describes the card category |
| `subCategory`| *string* | 25 | Provides the subcategory for the <code>category</code> field to identify the card type. |

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `merchantTransactionID` | *string* | 5 | Designates if the transaction should be captured (*true* for Sale and *false* for Pre-Auth)|
| `merchantOrderID`| *string* | 128 | Merchant order ID (aka customer reference number or purchase order (PO) number).
| `operationType` | *string* | 50 | Identifies the tranaction type as cash-out value |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionInteraction` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `terminalTimestamp` | *string* | N/A | Terminal timestamp in ISO 8601 format YYYY-MM-DDThh:mm:ssZ'

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!--
type: tab
-->

The below table identifies the required parameters in the `additionalDataCommon` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `securityCodeType` | *string* | 32 |  Type of security code requested when activating a card (e.g. Digital Gift card).
| `fundingProvider` | *string* | 32 |  Identifies who provided the funds.|
| `transactionPosDate` | *string* | 16 | 'Used to override a transaction post date in reporting.

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/gift-cards`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

#### Example of payload request

```json
{
  "target": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "8900000005675979",
      "expirationMonth": "01",
      "expirationYear": "3025",
      "securityCode": "64675611"
    }
  },
  "transactionDetails": {
    "merchantTransactionId": "1fe23bcafbb145c7b30342983e",
    "merchantOrderId": "1fe23bcafbb145c7b30093c4645e4d34e",
    "operationType": "CASH_OUT"
  },
  "transactionInteraction": {
    "terminalTimestamp": "2023-06-16T10:11:24.186Z"
  },
  "merchantDetails": {
    "merchantId": "10000900POD2205",
    "terminalId": "10000001",
    "promotionCode": "149474"
  },
  "additionalDataCommon": {
    "additionalData": {
      "fundingProvider": "CUSTOMER",
      "transactionPostDate": "2023-07-06"
    }
  }
}

```

<!--
type: tab
-->

#### Example of payload response

```json
{
  "gatewayResponse": {
    "transactionType": "GIFT_CARDS",
    "transactionState": "CASHED_OUT",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01d6cfde5c05a2d5e4b53e53e56239c3ff",
      "transactionTimestamp": "2023-07-06T06:35:07.90893Z",
      "apiTraceId": "9a48abbeb9e04bcba8ad21ac552869ab",
      "clientRequestId": "2350369",
      "transactionId": "9a48abbeb9e04bcba8ad21ac552869ab"
    }
  },
  "paymentReceipt": {
    "balances": [
      {
        "beginningBalance": 2,
        "endingBalance": 0,
        "currency": "USD"
      }
    ],
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "677704",
      "processor": "FISERV",
      "host": "VALUELINK",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "Completed OK",
      "localTimestamp": "2023-07-06T06:35:07Z"
    }
  },
  "target": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "8900000005675979",
      "expirationMonth": "01",
      "expirationYear": "3025"
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Gift Solution](?path=docs/Resources/Guides/Payment-Sources/Gift/Gift-Solutions.md)
  