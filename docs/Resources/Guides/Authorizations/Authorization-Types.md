---
tags: [Authorization]
---

# Subsequent Authorization Types

Subsequent authorization is typically a second authorization which is initaited in one of the cases below

- There was some issue in the previous authorization.
- There is a change in the final amount of the transaction.

### Authorization Type Indicator

The below table identifies the valid values of `authorizationTypeIndicator` to identify subsequent authorizations.

| Value | Description |
| ----- | ----- |
| *INITIAL* | [Initial authorization](?path=docs/Resources/API-Documents/Payments/Charges.md). |
| *REAUTH* | [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)|
| *DEFERRED* | [Deferred Auth](?path=docs/Resources/Guides/Authorizations/Deferred-Auth.md) |
| *INCREMENTAL* | [Incremental Auth](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md) |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authorization Optimization](?path=docs/Resources/Guides/Authorizations/Auth-Optimization.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)
- [Partial Authorization](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md)

<!---
- [Deferred Authorization](?path=docs/Resources/Guides/Authorizations/Deferred-Auth.md)
- [Incremental Authorization](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md)
-->

---
