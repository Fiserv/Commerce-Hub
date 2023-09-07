---
tags: [3-D-Secure, Online, Web, Mobile, Initilization]
---

# 3-D Secure Initilazation 

Submit a request after a successful response which identifies the card and device data was captured in Commerce Hub. The request will use the payment sourceType of PaymentSession/PaymentCard/PaymentToken and the sessionId from the credentials request. 





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

---
