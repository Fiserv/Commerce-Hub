## Merchant Details

Used to pass the merchant data during the transaction to determine the merchant from where the transaction is originated. It contains data like, merchantid, storeid, mcc etc.


| Variable | Type | Length | Description/Values |
| -------- | -- |------------| ------------------ |
| `tokenType` | *string* |  | Specific Token Type is assigned to each merchant; uCom or TransArmor |
| `storeId` | *string* |  | An optional outlet ID for clients that support multiple stores in the same app. |
| `siteId` | *string* |  | The location ID or number used to identify the unique site and merchant. |
| `merchantId` | *string* |  | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer. |
| `alternateMerchantId` | *string* |  | An Alternate ID assigned to a merchant based on a Value Added Service (Prepaid Cards, TeleCheck, etc.). For additional information regarding the Alternate Merchant ID, please contact your Account Representative. |
| `promotionCode` | *string* |  | This field contains the Promotion Code. |
| `mcc` | *string* |  | [Merchant Category Code](Merchant-Category-Code.md) |


---

### See Also

- Dynamic Descriptors
- Payment Facilitators