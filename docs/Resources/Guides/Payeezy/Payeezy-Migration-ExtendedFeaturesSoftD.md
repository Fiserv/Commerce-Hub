---

tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]

---

# Soft Descriptors

<!-- theme: danger -->
> The following documentation is for **Payeezy** migration clients only. See [Fiserv Developer Studio for Merchants](https://developer.fiserv.com/merchants) for Commerce Hub integration options.

<!--type: tab
titles: API, Configuration, Virtual Terminal, Reporting
-->

<One element (mvv_maid) is not available in Commerce Hub, no functional impact. removed because feature is not used>

Commerce Hub allows Soft Descriptors for all merchants, in Payeezy the North Merchant Master configuration was used to determine if the elements would be accepted in the API.

<!--
type: tab
-->

To enable Soft Descriptors if Virtual Terminal, a self-service configuration was available in Payeezy (after the North Merchant Master configuration is set).  In Commerce Hub this is not available (see Virtual Terminal details).

<!--
type: tab
-->

In Payeezy, soft descriptors could be entered in Virtual Terminal for transactions where the configuration was enabled; in Commerce Hub / Client Line Enterprise Virtual Terminal Soft Descriptors cannot be entered.

<!--
type: tab
-->

No Change

<!-- type: tab-end -->

---

## See Also

- [Soft Descriptors](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
