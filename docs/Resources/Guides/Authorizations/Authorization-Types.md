---
tags: [carat, commerce-hub, enterprise, subsequent-authorization-types]
---


# Subsequent Authorization Types

Subsequent authorization is typically a second authorization which is initaited in one of the cases below

- There was some issue in the previous authorization.
- There is a change in the final amount of the transaction.


The `authorizationTypeIndicator` in `transactionDetails` identifies the authorization type of the subsequent transactions. Valid Values are: *INCREMENTAL*, *RESUBMIT*, *DELAYED_CHARGE*, *REAUTH*, *NO_SHOW*, *TOP_UP*, *DEFERRED*.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Incremental Authorization](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)
<!---
- [Deferred Authorization](?path=docs/Resources/Guides/Authorizations/Deferred-Auth.md)
-->



