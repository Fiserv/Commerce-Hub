---
tags: [Currency Conversion, Dynamic Currency Conversion, Global Currency]
---

# Dynamic Currency Conversion

Commerce Hub's Dynamic Currency Conversion _(DCC)_ service is a payment solution that allows international customers to pay in 70+ [supported](?path=docs/Resources/Master-Data/Currency-Code.md) currencies for Visa and Mastercard or the base currency of the merchant. The DCC service authorizes and settles transactions in major global currencies while still being funded in the merchant's base currency.

<!-- theme: info -->
> All currencies which are prohibited by the [Office of Foreign Assets Control _(OFAC)_](?path=https://ofac.treasury.gov/sanctions-programs-and-country-information) are not supported for DCC transactions.

#### Merchant Benefits

- Earn additional income on foreign issued credit card transactions
- No additional setup costs or monthly fees
- Improve customer satisfaction and customer loyalty
- All transactions will be funded to the merchant in their local currency
- For each DCC transaction, cardholder incurs an international margin. Merchants earn a share of this margin, which can be used to help offset their processing costs

#### Cardholder Benefits

- Allows cardholders to make an informed choice about their online purchases based on exchange rate, Local currency price, Foreign Currency price and international margins thereby eradicating any unexpected pricing or foreign exchange conversions on receipt of their monthly statements
- Know exact price and ability to pay in familiar currency at the time of purchase, thereby providing an enhanced purchase experience

---

## Disclosure Requirements

The DCC rate is determined by submitting the [BIN of the card](?path=docs/Resources/Guides/Global-Currency/DCC-BIN-Rate-Request.md) to determine whether the card is eligible for conversion, or or a [merchant specified currency](?path=docs/Resources/Guides/Global-Currency/DCC-Currency-Rate-Request.md). If DCC eligible, disclosures are required to be presented to the cardholder to allow them to make an active choice to pay in their card's currency or the merchant's local currency (for US merchant, USD).

The disclosures required by the card schemes include:

- [Total amount](?path=docs/Resources/Master-Data/Amount-Components.md) of the goods or services _(including taxes)_ shown in the merchant's local currency
- [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) of the merchant's local currency
- Exchange rate used to determine the DCC transaction amount
- Any additional exchange rate mark-up over the wholesale or government-mandated rate
- Total amount of the offered DCC transaction in the cardholder's currency
- Currency code of the offered DCC transaction amount in cardholder currency

The card associations mandate rules for offering DCC to protect the cardholder and merchants. The fundamental principles of DCC are:

- **Cardholder Choice:** The DCC merchant must offer the cardholder a choice to transact in the merchant's local currency or in their card billing currency
- **Transparency & Disclosure:** For a cardholder to make an informed choice, merchants must disclose all charges associated with DCC. DCC disclosures must occur at the time the DCC offer is made and before the cardholder is asked to actively choose the transaction currency
- **Steering:** The merchant must not use any language or procedures that may cause the cardholder to choose DCC by default

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
