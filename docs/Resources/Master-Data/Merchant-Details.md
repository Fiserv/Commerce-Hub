---
tags: [carat, commerce-hub, enterprise, merchant-business-details, master-data]
---

# Merchant Details

Used to pass merchant business data during the transaction and contains data like the merchant ID (MID), store ID, terminal ID (TID), MCC etc.

<!--
type: tab
title: merchantDetails
-->

The below table identifies the parameters in the `merchantDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- |------------| ------------------ |
| `tokenType` | *string* |  | Specific Token Type is assigned to each merchant. e.g. TRANSARMOR |
| `storeId` | *string* |  | An optional outlet ID for clients that support multiple stores in the same app. |
| `siteId` | *string* |  | The location ID or number used to identify the unique site and merchant. |
| `merchantId` | *string* | 16 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. Utilized for clients that support [dynamic descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md), or support multiple stores in the same app. |
| `terminalId` | *string* |  | Identifies the specific device or point of entry where the transaction originated. For example, pump number, lane number, terminal number, etc. |
| `alternateMerchantId` | *string* | 16 | An Alternate ID assigned to a merchant based on a Value Added Service (Prepaid Cards, TeleCheck, Enhanced Data Service, etc.). For additional information regarding the Alternate Merchant ID, please contact your account representative. |
| `promotionCode` | *string* |  | This field contains the Promotion Code. |
| `mcc` | *string* | 4 | [Merchant Category Code](?path=docs/Resources/Master-Data/Merchant-Category-Code.md) |

<!--
type: tab
title: JSON Example
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
      "mcc": "4457"
   }
}
```
<!--type: tab-end -->

---

## See Also

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Dynamic Descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Merchant Category Codes](?path=docs/Resources/Master-Data/Merchant-Category-Code.md)
- [Payment Facilitators](?path=docs/Resources/Guides/Industry-Verticals/Payment-Faciliator.md)

---
