---
tags: [API Reference, Merchant Business Details, Master Data]
---

# Merchant Details

Used to pass merchant business data during the transaction and contains data like the merchant ID (MID), store ID, terminal ID (TID), etc.

<!--
type: tab
titles: merchantDetails, JSON Example
-->

The below table identifies the parameters in the `merchantDetails` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- |------------| ------- | ---- |
| `tokenType` | *string* | 64 | | Specific value to be passed to tokenization platform. e.g. AB01 for TransArmor |
| `storeId` | *string* |  | | An optional outlet ID for clients that support multiple stores in the same app. |
| `siteId` | *string* |  | | The location ID or number used to identify the unique site and merchant. |
| `merchantId` | *string* | 16 | &#10004; | A unique ID used to identify the Merchant. The merchant may use the value assigned by the acquirer, gateway, or their [own unique identifier](?path=docs/Resources/Guides/BYOID.md) when submitting a transaction. Can be used for merchants that support [dynamic descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md), or support multiple stores in the same app. |
| `terminalId` | *string* | 1024 | &#10004; | Identifies the specific device or point of entry where the transaction originated, can be assigned by the the gateway or [merchant specified](?path=docs/Resources/Guides/BYOID.md). |
| `alternateMerchantId` | *string* | 16 | | An Alternate ID assigned to a merchant based on a Value Added Service *(Prepaid Cards, TeleCheck, Enhanced Data Service, etc.)*. For additional information regarding the Alternate Merchant ID, please contact your account representative. |
| `promotionCode` | *string* |  | | This field contains the Promotion Code. |
| `terminalLaneNumber` | *string* | 16 |  | Terminal lane number |

 
<!--
type: tab
-->

JSON string format for `merchantDetails`:

```json
{
   "merchantDetails":{
      "tokenType": "TRANSARMOR",
      "storeId": "12345",
      "siteId": "CA123456",
      "terminalId": "12",
      "merchantId": "1234567890123456",
      "alternateMerchantId": "12345678",
      "promotionCode": "ABCD1234",
      "terminalLaneNumber": "001"
   }
}
```
<!--type: tab-end -->

--- 

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Dynamic Descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Merchant Category Codes](?path=docs/Resources/Master-Data/Merchant-Category-Code.md)
- [Payment Facilitators](?path=docs/Resources/Guides/Industry-Verticals/Payment-Faciliator.md)

---
