---
tags: [Gift Card, Payment Card, Payment Source, Loyalty, EBT, Balance Inquiry]
---

# Gift Card and EBT Balance Inquiry

To retrieve the current state of any previous transaction, an inquiry request can be submitted against the Commerce Hub transaction identifier or merchant transaction identifier.

---

## Request Variables

Description

<!--
type: tab
titles: card, transactionDetails, transactionInteraction, merchantDetails, additionalDataCommon 
-->

The below table identifies the parameters in the `amount` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `cardData` | *string* | 256 | Card number or encrypted data |
| `expirationMonth` | *string* | N/A | 2-digit expiration month |
| `expirationYear` | *string* | N/A | 4-digit expiration year |
| `securityCode` | *string* | 8 | Add Description XXXXXXXXXXXXXXXXX |
| `category` | *string* | 25 | Describes the card category |
| `subCategory` | *string* | 25 | Provides the subcategory for the <code>category</code> field to identify the card type. |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `merchantTransactionID` | *string* | 128 | Merchant transaction ID (aka transaction reference ID). |
| `merchantOrderID` | *string* | 128 | Merchant order ID (aka customer reference number or purchase order (PO) number). |

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
|`terminalId` | *string* | N/A | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!--
type: tab
-->

The below table identifies the parameters in the `additionalDataCommon` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `additionalData` | *object* | N/A |  Identifies additional data in the request. |

The below table identifies the conditional parameters in the `additionalData` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `securityCodeType` | *string* | 32 |  Type of security code requested when activating a digital gift card |
| `transactionPostDate` | *string* | 16 | Used to override a transaction post date in reporting |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/balance-inquiry`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

### Example of payload request

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "9998955500000000190",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "category": "GIFT",
      "securityCode": "1234",
      "subCategory": "GIFT_SOLUTIONS"
    }
  },
  "transactionDetails": {
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890"
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

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&payments-vas/v1/accounts/balance-inquiry)

<!--
type: tab
-->

### Example of payload response

Description:

```json
{
  "gatewayResponse": {
    "transactionType": "BALANCE_INQUIRY",
    "transactionState": "CHECKED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG9653567a1234562c1234567c1234d785",
      "transactionTimestamp": "2016-04-16T16:06:05Z",
      "apiTraceId": "1234567a1234567b1234567c1234567d",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "1234567a1234567b1234567c1234567d"
    }
  },
  "processorResponseDetails": {
    "approvalStatus": "APPROVED",
    "approvalCode": "OK5548",
    "processor": "FISERV",
    "host": "GIFT_SOLUTIONS",
    "responseCode": "000",
    "responseMessage": "Approved",
    "hostResponseCode": "00",
    "hostResponseMessage": "Completed OK"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "448244",
      "last4": "6672",
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS"
    }
  },
  "balances": [
    {
      "beginingBalance": "16.00",
      "endingBalance": "16.00",
      "currency": "USD"
    }
  ]
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Gift Card Services](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md)
