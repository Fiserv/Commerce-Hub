---
tags: [carat, commerce-hub, enterprise, online, card-not-present, payeezy]
---
# Features
<!-- theme: danger -->
>  :memo: **Note:** The following documentation is for **Payeezy** migration clients only. See [Fiserv Developer Studio for Merchants](https://developer.fiserv.com/merchants) for Commerce Hub integration options.

## Velocity Controls
<!-- type: row -->
<!-- type: card
title: API
description: In Commerce Hub, the Velocity controls are not applied to Tagged Pre-Auth Completion/Capture (Transaction Type 32); whereas they were applied to this transaction type in Payeezy.
In Commerce Hub, the Velocity controls are applied to Tagged Refunds (Transaction Type 34); whereas they were not applied to this transaiction type in Payeezy.
The Cumulative Amount Velocity Controls are only checked against the totals of previously approved transactions.
-->
<!-- type: card
title: Configuration
description: Configuration not available in Marketplace to apply Cumulative Amount controls to “All” transactions (vs. approved).

For $ based controls, Marketplace/Commerce Hub requires a currency to be selected for each control.  In Payeezy the Currency was set at the terminal/outlet MID (vs. each control).
-->
<!-- type: row-end -->
<!-- type: row -->
<!-- type: card
title: Virtual Terminal
description: Same as API (above)
-->
<!-- type: card
title: Reporting
description: A canned report for all transactions declined by any type of Fraud Control (including Velocity Controls) is available in Payeezy Gateway.  In Client Line Enterprise, the merchant can configure a report that queries for all relevant response codes associated with a decline due to fraud filter.

-->
<!-- type: row-end -->
---
## AVS Filters
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
## CVV2 Filters
<!-- type: row -->
<!-- type: card
title: **API**
description: 
No change in Filters.  The CVV Response Codes themselves have changed, but the application of filters remains the same.

In Payeezy Gateway, an CVV response code will not be returned for a transaction unless one of these filters is enabled; in Commerce Hub a filter does not need to be enabled to get a response.
-->
<!-- type: card
title: Configuration
description: 
In Payeezy the CVV Filters were applied across all card brands, in Marketplace/Commerce Hub the AVS Filters are set for each of the 4 major card brands separately.

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
description: A canned report for all transactions declined by any type of Fraud Control (including CVV2 Filters) is available in Payeezy Gateway.  In Client Line Enterprise, the merchant can configure a report that queries for all relevant response codes associated with a decline due to fraud filter.

-->
<!-- type: row-end -->
---
## Soft Descriptors
<!-- type: row -->
<!-- type: card
title: **API**
description: 
One element (mvv_maid) is not available in Commerce Hub, no functional impact.

Commerce Hub allows Soft Descriptors for all merchants, in Payeezy the North Merchant Master configuration was used to determine if the elements would be accepted in the API.
-->
<!-- type: card
title: Configuration
description: 
To enable Soft Descriptors if Virtual Terminal, a self-service configuration was available in Payeezy (after the North Merchant Master configuration is set).  In Commerce Hub this is not available (see Virtual Terminal details).
-->
<!-- type: row-end -->
<!-- type: row -->
<!-- type: card
title: Virtual Terminal
description: In Payeezy, soft descriptors could be entered in Virtual Terminal for transactions where the configuration was enabled; in Commerce Hub / Client Line Enterprise Virtual Terminal Soft Descriptors cannot be entered.
-->
<!-- type: card
title: Reporting
description: No Change
-->
<!-- type: row-end -->
---
## Tokenization
---
## Encrypted Wallet
---
## Decrypted Wallet
---
## Account Verification
---
## Quick Keys
---
## See Also

- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
