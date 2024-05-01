---
tags: [API Reference, Check Details, Master Data]
---


# Check Data

Check is a required object in `source` for all card payment types including; debit, credit, prepaid (gift), HSA, and WIC/EBT.

<!--
type: tab
titles: check, JSON Example
-->

The below table identifies the required parameters in the `check` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ----------- |---|
| `routingNumber` | *string* | 45 | &#10004; | Routing number endorsed on the check |
| `accountNumber` | *string* | 45 | &#10004; | Account number endorsed on the check |
| `checkType` | *string* | 256 | &#10004; | Describes check type |
| `checkData` | *String* | 45 | &#10004; | Identifying data for the check presented (i.e check number). |
| `accountType` | *string* | 45 | &#10004; | Account number endorsed on the check |

<!--
type: tab
-->

JSON string format for `check`:

```json
{
  "source": {
    "sourceType": "PaymentCheck",
    "check": {
      "accountNumber": "144155167",
      "routingNumber": "121000248",
      "checkType": "Business",
      "checkData": "3654803",
      "accountType": "Savings"
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
