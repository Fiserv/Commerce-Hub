---
tags: [Payment Card, Payment Sources, Online, Digital, Mobile, Card Not Present]
---

# Using PaymentCard as a payment instrument

A payment card issued to a customer and is used to submit credit, debit, private label, gift *(prepaid or stored value)*, and Fleet card-based transactions to Commerce Hub. The `sourceType` *PaymentCard* is used to submit manual entry card data, while *PaymentEMV* or *PaymentTrack* is used to submit encrypted track data.

## PaymentCard API model

<!-- theme: danger -->
> Commerce Hub requires all payment cards to be encrypted using [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md). Plain card data is only supported in our sandbox environment for [simulation purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Simulator-Scripts.md).

<!--
type: tab
titles: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Description |
| ----- | :------: | :-----: | ----- |
| `sourceType` | *string* | 15 | Use *PaymentCard* for card transactions |
| `card` | *object* | N/A | Contains the payment [card details](?path=docs/Resources/Master-Data/Card.md) |
| `encryptionData` | *object* | N/A | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |

<!-- type: tab-end -->

---

## Encrypted PaymentCard integrations

Select an integration option to begin accepting `PaymentCard` transactions with Commerce Hub.

<!-- type: row -->

<!-- type: card
title: Multi-Use Public Key
description: Submit a Multi-Use Public Key transaction.
link: ?path=
-->

<!-- type: card
title: In-person manual entry
description: Submit an in-person manual key transaction.
-->

<!-- type: row-end -->

---

## PaymentCard types

Select an integration option to begin accepting the payment card type with Commerce Hub.

<!-- type: row -->

<!-- type: card
title: Debit Solutions
description: Accept PIN and PINless (signature) debit transactions.
link: ?path=docs/Resources/Guides/Debit/Debit.md
-->

<!-- type: card
title: EBT Card
description: Accept EBT transactions.
link: ?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md
-->

<!-- type: card
title: Fleet Card
description: Accept Fleet Card transactions.
link: ?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Card.md
-->

<!-- type: row-end -->

<!-- type: row -->

<!-- type: card
title: Gift Cards
description: Accept Gift Card transactions.
link: ?path=?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md
-->

<!-- type: card
title: Private Label Credit Card 
description: Accept PLCC transactions.
link: ?path=docs/Resources/Guides/Payment-Sources/Private-Label.md
-->

<!-- type: row-end -->

---

## Alternate in-person integrations

Select an integration option to begin accepting the encrypted payment cards with Commerce Hub.

<!-- type: row -->

<!-- type: card
title: EMV chip and contactless
description: Submit an in-person EMV chip or contactless transaction.
link: ?path=docs/In-Person/Encrypted-Payments/EMV.md
-->

<!-- type: card
title: Swiped cards
description: Submit an in-person swipe transaction.
link: ?path=docs/In-Person/Encrypted-Payments/Track.md
-->

<!-- type: row-end -->

---
