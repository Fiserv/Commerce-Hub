---
tags: [Gift Card, Loyalty, Redemption, Payments]
---

# Redemption

Redeeming a gift card involves using it to buy merchandise from a physical store, an online store, or a retail location. When redeeming a gift card use the [payment request APIs](?path=docs/Resources/API-Documents/Payments/Payments.md) for charges, refunds and cancels along with the conditional request variables below.

---

## Request Variables

<!--
type: tab
titles: card, transactionInteraction, merchantDetails, additionalDataCommon 
-->

The below table identifies the required parameters in the `card` object has part of the `source` object

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `category` | _string_ | 25 | Defines the card type as GIFT |
| `subCategory` | _string_ | 25 | Identifies the gift card provider. _**Valid Values:** GIFT_SOLUTIONS_ |

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
| `merchantId` | _string_ | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | _string_ | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

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
| `transactionPostDate` | _string_ | 16 | Used to override a transaction post date in reporting |

<!-- type: tab-end -->

---

## Response Variables

<!--
type: tab
titles: balances
-->

The below table identifies the parameters in the `balances` array in the `paymentReceipt` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `beginningBalance` | _number_ | 16,3 | Account beginning balance |
| `endingBalance` | _number_ | 16,3 | Account ending balance
| `currency` | _string_ | 17 | ISO 3 Currency Format |

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a charge payload request.

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
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "124",
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS"
    }
  },
  "transactionDetails": {
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
      "transactionPostDate": "2016-04-16"
    }
  }
}
```

<!--
type: tab
-->

Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE_FINAL",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01367cb34bb35b472c953dec4e7d368727",
      "transactionTimestamp": "2022-08-22T19:22:52.518232Z",
      "apiTraceId": "b34bb35b472c953dec4e7d36872",
      "clientRequestId": "367cb34bb35b472c953dec",
      "transactionId": "b34bb35b472c953dec4e7d36872"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "02",
      "expirationYear": "2035",
      "bin": "999895",
      "last4": "0190",
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 13.5,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "localTimestamp": "2016-04-16T16:06:05Z",
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5548",
      "referenceNumber": "5548",
      "processor": "FISERV",
      "host": "GIFT_SOLUTIONS",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "Completed OK"
    },
    "balances": [
      {
        "beginingBalance": 16.00,
        "endingBalance": 2.50,
        "currency": "USD"
      },
    ]
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Gift Solutions](?path=docs/Resources/Guides/Payment-Sources/Gift/Gift-Solutions.md)
  
---
