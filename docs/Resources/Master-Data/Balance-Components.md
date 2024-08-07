---
tags: [API Reference, Balance, Master Data]
---


# Balance Details

Balance details provides the balances for all card payment types including; debit, credit, prepaid (gift), HSA, and WIC/EBT. The `balance` array is part of the `paymentReciept` object.

<!--
type: tab
titles: balance, JSON Example
-->

The below table identifies the parameters in the `balance` object.

| Variable | Type | Max Length | Description |
| -------- | -- | ------------ | -----|
| `beginngingBalance` | *number* | 18,3 | Credit card number |
| `endingBalance` | *number* | 18,3 | Account ending balance |
| `currency` | *string* | 3 | ISO 3 Currency Format |
| `blanceType` | *string* | 17 |  Indicates <a href="../docs?path=docs/Resources/Master-Data/Balance-Components.md#balance-type">type</a> of account balance represents. |


<!--
type: tab
-->

JSON string format for `card`:

```json
{
   "balance":{
      "beginningBalance": "13.50",
      "endingBalance": "13.50",
      "currency": "USD",
      "balanceType": "EBT_SNAP"
   } 
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Gift Solution](?path=docs/Resources/Guides/Payment-Sources/Gift/Gift-Solutions.md)

---
