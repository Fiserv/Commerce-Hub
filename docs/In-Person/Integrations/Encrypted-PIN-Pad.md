---
tags: [EMV, In-Person, Card Present, Encrypted Payments, Pin Pad, Manual Entry, Track Data]
---

# Encrypted Device Integration

A third-party device or PIN Pad is used to capture the payment source and is connected to the terminal or software that communicates with Commerce Hub. The device encrypts the customer's payment source and sends the encryption data to the terminal or software. The terminal or software initiates the [RESTful API transaction](?path=docs/Resources/API-Documents/Use-Our-APIs.md) with the encrypted payment source from the device.

The benefits of an encrypted device solution are:

- Reduced coding effort for the developer because the encryption handling is already implemented by the third-party vendor
- All forms of electronic payment are accepted
- Faster payments improve the customer experience
- Business security by enabling acceptance of chip and signature, and chip and PIN

## Encrypted Payment Types

Commerce Hub allows a merchant to send encrypted card data from their device to Commerce Hub's RESTful APIs.

<!-- type: row -->

<!-- type: card
title: EMV Chip
description: EMV chip enhances the security of payment card transactions for payment terminals and automated teller machines through the use of a chip embedded in credit, debit, and prepaid cards.
link: ?path=docs/In-Person/Encrypted-Payments/EMV.md
-->

<!-- type: card
title: Contactless
description: Near Field Communication (NFC) or contactless payment are transactions made by tapping either a contactless chip card or a payment-enabled device with a contactless-enabled terminal.
link: 
-->

<!-- type: card
title: Track Data
description: Payment Track can be used as EMV Fallback and involves manually swiping the payment source into a payment terminal using a magnetic stripe (magstripe).
link: ?path=docs/In-Person/Encrypted-Payments/Track.md
-->

<!-- type: card
title: Manual Entry
description: Encrypted manual key entry can be used as EMV Fallback and involves manually entering the payment source details in a payment terminal. 
link: ?path=docs/In-Person/Encrypted-Payments/Manual.md
-->

<!-- type: row-end -->

---
