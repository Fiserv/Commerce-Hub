# Merchant Details

## Overview

Used to pass the merchant data during the transaction to determine the merchant from where the transaction is originated. It contains data like, merchantid, storeid, mcc etc.

#### Component: merchantDetails

| Variable | Type | Length | Description/Values |
| -------- | -- |------------| ------------------ |
| `tokenType` | *string* |  | Specific Token Type is assigned to each merchant; uCom or TransArmor |
| `storeId` | *string* |  | An optional outlet ID for clients that support multiple stores in the same app. |
| `siteId` | *string* |  | The location ID or number used to identify the unique site and merchant. |
| `merchantId` | *string* |  | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer. |
| `alternateMerchantId` | *string* |  | An Alternate ID assigned to a merchant based on a Value Added Service (Prepaid Cards, TeleCheck, etc.). For additional information regarding the Alternate Merchant ID, please contact your Account Representative. |
| `promotionCode` | *string* |  | This field contains the Promotion Code. |
| `mcc` | *string* |  | [Merchant Category Code](?path=docs/Resources/Master-Data/Merchant-Category-Code.md) |

---

## See Also

- [API Explorer](url)
- [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Merchant Category Codes](?path=docs/Resources/Master-Data/Merchant-Category-Code.md)
- [Payment Facilitators](?path=docs/Resources/Guides/Industry-Verticals/Payment-Faciliator.md)
