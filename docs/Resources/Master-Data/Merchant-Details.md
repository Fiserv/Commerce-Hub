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

| Variable | Type | Max Length | Required | Description |
| -------- | -- |------------| ------- | ---- |
| `merchantId` | *string* | 1024 | &#10004; | A unique ID used to identify the Merchant. The merchant may use the value assigned by the acquirer, gateway, or their [own unique identifier](?path=docs/Resources/Guides/BYOID.md) when submitting a transaction |
| `terminalId` | *string* | 1024 | &#10004; | Identifies the specific device or point of entry where the transaction originated, can be assigned by the the gateway or [merchant specified](?path=docs/Resources/Guides/BYOID.md) |
| `terminalLaneNumber` | *string* | 16 | | Terminal lane number, register number, or pump number |
| `storeId` | *string* | 1024 | | An optional outlet ID for clients that support multiple stores in the same app |
| `siteTypeIndicator` | *string* | 64 | | This field identifies whether the site is COMMERCIAL or RETAIL |
| `promotionCode` | *string* | 1024 | | This field contains the promotion code |
| `tokenType` | *string* | 64 | | Specific token type requested by the merchant |

<!--
type: tab
-->

JSON string format for `merchantDetails`:

```json
{
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001",
    "terminalLaneNumber": "001",
    "storeId": "12345",
    "siteTypeIndicator": "RETAIL",
    "promotionCode": "ABCD1234",
    "tokenType": "TRANSARMOR"
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
