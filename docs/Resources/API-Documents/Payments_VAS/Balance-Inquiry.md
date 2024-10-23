---
tags: [Gift Card, Payment Card, Payment Source, Loyalty, EBT, Balance Inquiry]
---

# Balance Inquiry

Balance inquiry is used to retrieve the current balance of any [gift card](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md).

<!--- or Electronic Benefits Transfer _(EBT)_ card. --->

---

## Request Variables

<!--
type: tab
titles: source, merchantDetails, additionalDataCommon 
-->

The below table identifies the parameters in the `source` object.

|Variable | Type | Max Length | Description|
|---------|----------|----------------|---------|
| `sourceType` | _string_ | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported is _PaymentCard_ |

The below table identifies the conditional parameters in `card` object.

|Variable | Type | Max Length | Description|
|---------|----------|----------------|---------|
| `category`| _string_ | 25 | Defines the card type as GIFT |
| `subCategory`| _string_ | 25 | Identifies the card provider |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type | Max Length | Description |
|---------|----------|----------------|---------|
| `merchantId` | _string_ | 1024 | A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | _string_ | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md)|

<!--
type: tab
-->

The below table identifies the parameters in the `additionalDataCommon` object.

| Variable | Data Type | Max Length | Description |
|---------|----------|----------------|---------|
| `additionalData` | _object_ | N/A |  Identifies additional data in the request. |

The below table identifies the conditional parameters in the `additionalData` object.

| Variable | Data Type | Max Length | Description |
|---------|----------|----------------|---------|
| `securityCodeType` | _string_ | 32 |  Type of security code requested when activating a digital gift card |

<!-- type: tab-end -->

---

## Response Variables

<!--
type: tab
titles: balances
-->

The below table identifies the parameters in the `balances` array in the `paymentReceipt` object.

| Variable | Data Type | Max Length | Description |
|---------|----------|----------------|---------|
| `beginningBalance` | _number_ | 16,3 | Account beginning balance |
| `endingBalance` | _number_ | 16,3 | Account ending balance |
| `currency` | _string_ | 17 | ISO 3 Currency Format |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/balance-inquiry`

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
      "securityCode": "1234",
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS"
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  },
  "additionalDataCommon": {
    "additionalData": {
      "securityCodeType": "EAN"
    }
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&payments-vas/v1/accounts/balance-inquiry)

<!--
type: tab
-->

Example of a balance inquiry (200: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
  "paymentReceipt": {
    "balances": [
      {
        "beginningBalance": "16.00",
        "endingBalance": "16.00",
        "currency": "USD"
      }
    ]
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Gift Card Services](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md)

---
