# Reference Transaction Details

Reference transaction details are used to reference the original transaction identifier in secondary request [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md), incremental auth, re-auth or inquiry.

<!-- 
type: tab
titles: referenceTransactionDetails, JSON Example
-->

The below table identifies the parameters in the `referenceTransactionDetails` object.

| Variable | Type| Maximum Length | Description|
|---------|-----------|----------------|---------|
|`referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction. |
|`referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |


<!--
type: tab
-->

JSON string format for `referenceTransactionDetails`:

```json
{
   "referenceTransactionDetails":{
      "referenceTransactionId": "84356531338",
      "referenceMerchantTransactionId": "838917739301"
}
```

<!--type: tab-end -->




---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/cancel)
- [Custom Identifiers](?path=docs/Resources/Guides/BYOID.md)
- [Cancel Request]
- [Transaction Inquiry]


---
