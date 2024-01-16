---
tags: [Gift Card, Payment Card, Payment Source, Loyalty, Cash-Out]
---

# Gift Card Cash-Out

A cash-out request allows a merchant to remove the customer's funds from a gift card. A cash-out is initiated by sending the `target` and `operationType`: *CASH_OUT* in `transactionDetails` as part of the request.

---

## Request Variables

<!--
type: tab
titles: target, transactionDetails, transactionInteraction, merchantDetails, additionalDataCommon 
-->

The below table identifies the parameters in the `target` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | _string_ | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are _PaymentSession_, _PaymentCard_, or _PaymentToken_ |

The below table identifies the conditional parameters in `card` object.

|Variable | Type | Maximum Length | Description|
|---------|----------|----------------|---------|
| `category`| _string_ | 25 | Defines the card type as GIFT |
| `subCategory`| _string_ | 25 | Identifies the gift card provider |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `operationType` | _string_ | 50 | Defines the request type as CASH_OUT |

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
| `merchantId` | _string_ | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction |
| `terminalId` | _string_ | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway |

<!--
type: tab
-->

The below table identifies the required parameters in the `additionalDataCommon` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `fundingProvider` | _string_ | 32 |  Identifies who provided the funds, CUSTOMER, MERCHANT or UNSPECIFIED |
| `transactionPosDate` | _string_ | 16 | Used to override a transaction post date in reporting |

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

## Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/gift-cards`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a gift card cash-out payload request.

```json
{
  "target": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "6161563015224583",
      "expirationMonth": "01",
      "expirationYear": "3025",
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS"
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
    "terminalId": "10000001"
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

Example of a gift card cash-out (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
      "host": "GIFT_SOLUTIONS",
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

- [API Explorer](../api/?type=post&payments-vas/v1/accounts/gift-cards)
- [Gift Card Services](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Redemption Request](?path=docs/Resources/Guides/Payment-Sources/Gift/Redemption.md)

---
