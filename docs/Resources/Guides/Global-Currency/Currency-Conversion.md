---
tags: [Currency Conversion, Dynamic Currency Conversion, Global Currency]
---

# Dynamic Currency Conversion

Commerce Hub's Dynamic Currency Conversion _(DCC)_ service is a payment solution that allows international customers to pay in either their credit card currency if [supported](?path=docs/Resources/Master-Data/Currency-Code.md) or the base currency of the merchant. The DCC service authorizes and settles transactions in major global currencies while still being funded in the merchant's base currency. Both the customer and merchant will know precisely the amount of the sale in both currencies.

<!-- theme: info -->
> All currencies which are prohibited by the [Office of Foreign Assets Control _(OFAC)_](?path=https://ofac.treasury.gov/sanctions-programs-and-country-information) are not supported for DCC transactions.

---

## Requests

Build a Commerce Hub integration to manage currency conversion.

<!-- type: row -->

<!-- type: card
title: Rate Request by Issuer
description: Submit a DCC request for a payment instrument to receive the currency and rate based on the issuer's BIN.
link: ?path=docs/Resources/Guides/Global-Currency/DCC-BIN-Rate-Request.md
-->

<!-- type: card
title: Rate Request by Currency
description: Submit a DCC request for a specific currency rate based on the `currencyCode`.
link: docs/Resources/Guides/Global-Currency/DCC-Currency-Rate-Request.md
-->

<!-- type: card
title: Charges Request
description: Submit a charges request using the requested rate information.
link: docs/Resources/Guides/Global-Currency/DCC-Charge-Request.md
-->

<!-- type: row-end -->

---
