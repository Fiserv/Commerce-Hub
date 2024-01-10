---
tags: [Gift Card, Payment Card, Payment Source, Loyalty, Cancel, Void]
---

# Gift Card Cancels

When a merchant needs to reverse *(void)* a prior [gift card request](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) *(activation, cash out, reload)*, a cancel operation needs to be sent to the gift cards endpoint. A cancel is initiated by sending the `referenceTransactionDetails` and `operationType`: *CANCEL* in `transactionDetails` as part of the request.

---

## Request Variables

<!--
type: tab
titles: referenceTransactionDetails, transactionDetails, merchantDetails
-->

The below table identifies the available parameters in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
|`referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction. |
|`referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `operationType` | _string_ | 50 | Defines the request type as CANCEL |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `merchantId` | _string_ | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction |
| `terminalId` | _string_ | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/gift-cards`

---

## Response Variables

<!--
type: tab
titles: target, balances
-->

The below table identifies the parameters in the `target` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are *PaymentSession*, *PaymentCard*, or *PaymentToken* |

<!--
type: tab
-->

The below table identifies the parameters in the `balances` array in the `paymentReceipt` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `beginningBalance` | *number* | 16,3 | Account beginning balance |
| `endingBalance` | *number* | 16,3 | Account ending balance |
| `currency` | *string* | 3 | The base gift card and/or local currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a gift card cancel payload request.

```json

{
  "referenceTransactionDetails": {
    "referenceTransactionId": "732459239523050220556"
  },
  "transactionInteraction": {
    "terminalTimestamp": "2016-04-16T16:06:05Z"
  },
  "merchantDetails": {
    "terminalId": "123567",
    "merchantId": "123456789012345"
  },
  "transactionDetails": {
    "operationType": "CANCEL"
  },
  "additionalDataCommon": {
    "additionalData": {
      "transactionPostDate": "2016-04-16"
    }
  }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/gift-cards)

<!--
type: tab
-->

Example of a gift card cancel (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "GIFT_CARDS",
    "transactionState": "VOIDED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01367cb34bb35b472c953dec4e7d368727",
      "transactionTimestamp": "2022-08-22T19:22:52.518232Z",
      "apiTraceId": "b34bb35b472c953dec4e7d36872",
      "clientRequestId": "367cb34bb35b472c953dec",
      "transactionId": "b34bb35b472c953dec4e7d36872"
    }
  },
  "target": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "02",
      "expirationYear": "2035",
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS",
      "bin": "999895",
      "last4": "0190"
    }
  },
  "paymentReceipt": {
    "processorResponseDetails": {
      "localTimestamp": "2016-04-16T16:06:05Z",
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5548",
      "processor": "FISERV",
      "host": "GIFT_SOLUTIONS",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "Completed OK"
    },
    "balances": [
      {
        "beginingBalance": "1.00",
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

- [API Explorer](../api/?type=post&payments-vas/v1/accounts/gift-cards)
- [Gift Card Services](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Redemption Request](?path=docs/Resources/Guides/Payment-Sources/Gift/Redemption.md)
  
---
