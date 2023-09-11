---
tags: [3-D-Secure, Online, Web, Mobile, Initilization]
---

# 3-D Device Capture 

Submit a request after a successful response which identifies the card and device data was captured in Commerce Hub. The request will use the payment sourceType of PaymentSession/PaymentCard/PaymentToken and the sessionId from the credentials request. 

## Secure Initilazation








### Requirements

<!--
type: tab
titles: source, merchantId, terminalID 
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |
| `merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | *string* | N/A | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "{{cardNumberDevFrictionless}}",
      "expirationMonth": "{{expiryMonthDevFrictionless}}",
      "expirationYear": "{{expiryYearDevFrictionless}}",
      "securityCode": "{{cvvDevFrictionless}}"
    }
  },
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "1234560000019"
{
    "source":,
    "merchantDetails": {
        "merchantId": "c9a1aff7-f9ac-49ed-99f5-a6597f51c839"
    },
    "transactionDetails": {
        "authentication3DS": true
    },
    "transactionProcessingDetails": {
        "apiTraceId": "9583b457-7f91-4b12-a18f-a665ad81e9d3",
        "clientRequestId": "21bcab35-ddc0-4489-81e6-441a6a8f2d42",
        "transactionId": "4fc3d3d2-af1f-48d0-8775-e8e2279ab38a"
    }
} 

```
