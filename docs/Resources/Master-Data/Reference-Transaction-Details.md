# Reference Transaction Details

Reference transaction details are used to reference the original transaction identifier in secondary requests; [capture](?path=docs/Resources/API-Documents/Payments/Capture.md), [refund](?path=docs/Resources/API-Documents/Payments/Refund.md), [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md), incremental auth, [re-auth](?path=docs/Resources/Guides/Authorizations/Re-Auth.md) or [inquiry](?path=docs/Resources/API-Documents/Payments/Inquiry.md).

<!-- 
type: tab
titles: referenceTransactionDetails, JSON Example
-->

The below table identifies the parameters in the `referenceTransactionDetails` object.

| Variable | Type| Maximum Length | Description|
|---------|-----------|----------------|---------|
| `referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction used for reference in a secondary transaction. |
| `referenceOrderId` | *string* | 128 | Commerce Hub generated `orderId` from the original transaction used for reference in a secondary transaction. |
| `referenceClientRequestId` | *string* | 128 | Merchant/client generated `clientRequestId` from the original transaction. Can only be used in a transaction inquiry request.' |
| `referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |
| `referenceMerchantOrderId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantOrderId` from the original transaction. |
| `referenceTransactionType` | *string* | 64 | Identifies the type of the referenced transaction. **Valid Values:** _CHARGES or REFUNDS_ |

<!--
type: tab
-->

JSON string format for `referenceTransactionDetails`:

```json
{
   "referenceTransactionDetails":{
      "referenceTransactionId": "838916029301",
      "referenceMerchantTransactionId": "1343678765",
      "referenceMerchantOrderId": "953729024",
      "referenceOrderId": "CHG014994a6b0729e4517858f74c6a41c8d61",
      "referenceClientRequestId": "2994454",
      "referenceTransactionType": "CHARGES"
}
```

<!--type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/cancel)
- [Custom Identifiers](?path=docs/Resources/Guides/BYOID.md)
- [Cancels Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Returns Request](?path=docs/Resources/API-Documents/Payments/Return.md)
- [Reauthorization Request](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)
- [Transaction Inquiry](?path=docs/Resources/API-Documents/Payments/Inquiry.md)

---
