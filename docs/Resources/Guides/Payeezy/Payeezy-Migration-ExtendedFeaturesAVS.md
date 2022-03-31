---
tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]
---
# AVS Filters
<!-- theme: danger -->
>  :memo: **Note:** The following documentation is for **Payeezy** migration clients only. See [Fiserv Developer Studio for Merchants](https://developer.fiserv.com/merchants) for Commerce Hub integration options.

<!-- type: row -->
<!-- type: card
title: **API**
description: 
In Payeezy Gateway AVS Filters were applied to Pre-Auth and Purchase transactions, in Commerce Hub they are applied to these and Tagged Refunds.  The AVS Response Codes themselves have changed, but the application of filters remains the same.

In Payeezy Gateway, an AVS response code will not be returned for a transaction unless one of these filters is enabled; in Commerce Hub a filter does not need to be enabled to get a response.
-->
<!-- type: card
title: Configuration
description: 
In Payeezy the AVS Filters were applied across all card brands, in Marketplace/Commerce Hub the AVS Filters are set for each of the 4 major card brands separately.

In Payeezy the configurate was set to filter out / reject the transactions with that response code; Marketplace/Commerce Hub the configuration drives which transactions are allowable (a list of acceptable codes vs. a filter).  One exception is that if no codes are configured they will all be considered acceptable.

-->
<!-- type: row-end -->
<!-- type: row -->
<!-- type: card
title: Virtual Terminal
description: Same as API (above)
-->
<!-- type: card
title: Reporting
description: A canned report for all transactions declined by any type of Fraud Control (including AVS Filters) is available in Payeezy Gateway.  In Client Line Enterprise, the merchant can configure a report that queries for all relevant response codes associated with a decline due to fraud filter.

-->
<!-- type: row-end -->
---

## See Also

- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
