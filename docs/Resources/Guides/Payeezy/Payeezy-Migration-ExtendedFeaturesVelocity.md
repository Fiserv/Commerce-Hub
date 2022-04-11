---
tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]

---

# Velocity Controls

<!-- theme: danger -->
>  :warning: **Warning:** The following documentation is for **Payeezy** migration clients only. See [Fiserv Developer Studio for Merchants](https://developer.fiserv.com/merchants) for Commerce Hub integration options.

<!--type: tab
titles: API, Configuration, Virtual Terminal, Reporting
-->

- In Commerce Hub, the Velocity controls are not applied to Tagged Pre-Auth Completion/Capture (Transaction Type 32); whereas they were applied to this transaction type in Payeezy.
- In Commerce Hub, the Velocity controls are applied to Tagged Refunds (Transaction Type 34); whereas they were not applied to this transaiction type in Payeezy.
- The Cumulative Amount Velocity Controls are only checked against the totals of previously approved transactions.

<!--
type: tab
-->

- Configuration not available in Marketplace to apply Cumulative Amount controls to “All” transactions (vs. approved).
- For $ based controls, Marketplace/Commerce Hub requires a currency to be selected for each control.  In Payeezy the Currency was set at the terminal/outlet MID (vs. each control).

<!--
type: tab
-->

Same as API (above)

<!--
type: tab
-->

A canned report for all transactions declined by any type of Fraud Control (including Velocity Controls) is available in Payeezy Gateway.  In Client Line Enterprise, the merchant can configure a report that queries for all relevant response codes associated with a decline due to fraud filter.

<!-- type: tab-end -->


---
## See Also

- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
