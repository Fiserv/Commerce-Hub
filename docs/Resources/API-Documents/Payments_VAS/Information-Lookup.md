---
tags: [Account Information, Card Details, Card Metadata, BIN]
---

# Retrieve card metadata with the Information Lookup API

The Information Lookup *(BIN Lookup)* API is used to obtain `cardDetails` *(also known as [card metadata](?path=docs/Resources/Master-Data/Card-Details.md))* of the cardholder. This includes information such as issuer country, card function, card brand, and supported features for a [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md), [PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md), [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md), or [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md).

The `cardDetails` can be used for:

- **Card processing requirements:** Based on brand, function, and type *([commercial](?path=docs/Resources/Guides/Level23/Level23.md), non-corporate)*.
- **[Directed routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md):** Sending the request to a network based on card brand, function, or type.
- **[POS processing requirements](?path=docs/Resources/API-Documents/Device-Management/Decision-Table.md):** Allowing a point-of-sale *(POS)* application to take preemptive actions on accounts being presented for transactions.

---

## Choose your integration method

Commerce Hub enables account information lookup using either the Global BIN, Cloud BIN, or both, depending on business requirements.

<!-- type: row -->

<!-- type: card
title: Global BIN Lookup
description: Obtain metadata of cards found in the Global BIN file.
link: ?path=docs/Resources/API-Documents/Payments_VAS/Global-BIN-Lookup.md
-->

<!-- type: card
title: Cloud BIN Lookup
description: Obtain metadata in the clear or leading digits of a card.
link: ?path=docs/Resources/API-Documents/Payments_VAS/Cloud-BIN-Lookup.md
-->

<!-- type: row-end -->

---
