---
tags: [API Reference, ACH, Check Details, Master Data]
---


# Check Data

Check is a required object in `source` for all check payment types.

<!--
type: tab
titles: check, JSON Example
-->

The below table identifies the parameters in the `check` object.

| Variable | Type | Length | Description |
| ----- | :-----: | :-----: | ----- |
| `nameOnCheck` | *string* | 50 | Check holder name |
| `checkData` | *string* | 45 | Identifying data for the check presented *(i.e check number)* |
| `routingNumber` | *string* | 45 | Routing number endorsed on the check |
| `accountNumber` | *string* | 45 | Account number endorsed on the check |
| `checkType` | *string* | 256 | Describes [check type](#check-type) |
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
      "nameOnCheck": "Jane Smith",
      "checkData": "3654803",
      "accountNumber": "144155167",
      "routingNumber": "121000248",
      "checkType": "PERSONAL",
      "accountType": "CHECKING"
    }
  }
}
```

<!-- type: tab-end -->

---

### Check Type

The below table identifies the valid values of `checkType`.

| Value | Description |
| ----- | ----- |
| *PERSONAL* | Used for individual financial transactions |
| *BUSINESS* | Used for company-related financial transactions |
| *COMDATA_CHECK* | Used for fleet transactions processing a Comdata ComCheck [PaymentCheck](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Check.md) |
| *COMDATA_EXPRESS* | Used for fleet transactions processing a Comdata Express Code [PaymentCheck](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Check.md) |
| *MONEY_CODE* | Used for fleet transactions processing a WEX Money Code [PaymentCheck](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Check.md) |

---

### Account Type

The below table identifies the valid values of `accountType`.

| Value | Description |
| ----- | ----- |
| *CHECKING* | For everyday transactions |
| *SAVINGS* | For long term savings and earning interest |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Fleet Payments](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md)
- [Pay By Bank](?path=docs/Resources/Guides/Payment-Sources/Pay-By-Bank.md)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
