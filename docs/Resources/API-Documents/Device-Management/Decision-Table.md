---
tags: [Device Management, Decision Table, API Reference, Device, Terminal, Point of Sale]
---

# POS Decision Tables

Commerce Hub's POS Decision Table adds the ability for POS devices to take preemptive actions on accounts being presented for transactions.

---

## Table APIs

The Cloud BIN Service can be used to take advantage of Commerce Hub's [tokenization service](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service for non-branded cards.

- Used to obtain card data in the clear *(unencrypted)* for non-branded cards like [gift](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md), loyalty and [private label *(PLCC)*](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md).

The Dynamic Decision Table is used to process [fleet](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md) and EBT transactions.

- [Fleet transactions](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md) require certain digits of track data to prompt for additional [customer](?path=docs/Resources/Master-Data/Customer-Details.md) and [vehicle](?path=docs/Resources/Master-Data/Vehicle-Details.md) information.
- EBT transactions require verification of the card type to determine what merchandise is applicable, or if cashback is allowed.

<!-- type: row -->

<!-- type: card
title: Cloud BIN Service
description: Configure non-branded cards to take preemptive actions before processing.
link: ?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Guide.md
-->

<!-- type: card
title: Dynamic Card Table
description: Determine requirements when processing fleet and EBT transactions.
link: 
-->

<!-- type: row-end -->

---
