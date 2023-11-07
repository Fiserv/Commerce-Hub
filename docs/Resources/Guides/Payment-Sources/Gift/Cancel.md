---
tags: [Cancel, Void, Payments, API Reference]
---

# Gift Card Cancels

When a merchant needs to reverse *(void)* a prior [gift card request](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) *(activation, cash out, reload)*, a cancel operation needs to be sent to the gift cards endpoint.

---

## Request Variables

A cancel request is initiated by sending the `referenceTransactionDetails` in the payload along with `operationType`

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
| `referenceTransactionType` | *string* | 64 | Identifies the type of the referenced transaction. **Valid Values:** *CHARGES or REFUNDS* |

<!--
type: tab
-->

<!-- theme: info -->
> Some card brands require the reason for a cancelled transaction, it is recommended to always pass the `reversalReasonCode` in the request.

The below table identifies the recommended parameters in the `transactionDetails` object.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
|`reversalReasonCode` | *string* | 40 | [Reason](#reversal-reason-code) the merchant/customer requests for cancel (void). |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|-----|
|`merchantId` | *string* | 40 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | 1024 | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/gift-cards`

---

## Response Variables

<!--
type: tab
titles: target, balance
-->

The below table identifies the parameters in the `target` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are *PaymentSession*, *PaymentCard*, or *PaymentToken* |

The below table identifies the parameters in the `balances` object.

| Variable | Data Type | Maximum Length | Description |
|---------|----------|----------------|---------|
| `beginningBalance` | *number* | 16,3 | Account beginning balance |
| `endingBalance` | *number* | 16,3 | Account ending balance
| `currency` | *string* | 17 | ISO 3 Currency Format |

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
    "balance": [
      {
        "beginingBalance": "16.00",
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

- [API Explorer](../api/?type=post&path=/payments/v1/cancels)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Gift Card Services](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)
  
---
