---
tags: [API Reference, Check Details, Master Data]
---


# Check Data

Check is a required object in `source` for all card payment types including; debit, credit, prepaid (gift), HSA, and WIC/EBT.

<!--
type: tab
titles: check, JSON Example
-->

The below table identifies the parameters in the `check` object.

| Variable | Type | Length | Description |
| -------- | ------- | ----------- |------|
| `routingNumber` | *string* | 45 | Routing number endorsed on the check |
| `accountNumber` | *string* | 45 | Account number endorsed on the check |
| `checkType` | *string* | 256 | Describes [check type](#check-type) |
| `checkData` | *string* | 45 | Identifying data for the check presented *(i.e check number)* |
| `accountType` | *string* | 45 | Describes [account type](#account-type)|

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

### Check Type

The below table identifies the valid values of `checkType`.

| Value | Description |
|-------|-------------|
| *PERSONAL* | Used for individual financial transactions |
| *BUSINESS* | Used for company-related financial transactions |

---

### Account Type

The below table identifies the valid values of `accountType`.

| Value | Description |
|-------|-------------|
| *CHECKING* | For everyday transactions |
| *SAVINGS* | For long term savings and earning interest |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
