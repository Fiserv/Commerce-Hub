---
tags: [Device Management, EMV, Encrypted Payments, CAPK, API Reference]
---

# EMV CAPK Data

EMV CAPK data is crucial for secure payment transactions. It ensures card and cardholder authenticity through Certification Authority Public Keys *(CAPK)*. EMV cards have issuer certificates signed by EMV authorities for validation. The EMV CAPK data is used for offline checks verifying the cryptographic keys on the device and EMV card.

<!-- theme: info -->
> For more details on technical implementation of CAPK storage and withdrawal, please refer to latest version of [EMV Book 2 - Security and Key Management](https://www.emvco.com/specifications).

---

## CAPK Data Management

Build an integration to manage CAPK management.

<!-- type: row -->

<!-- type: card
title: CAPK Download
description: EMV chip enhances the security of payment card transactions for payment terminals and automated teller machines through the use of a chip embedded in credit, debit, and prepaid cards.
link: ?path=docs/In-Person/Device_Management/CAPK-Download.md
-->

<!-- type: card
title: CAPK Status
description: Near Field Communication (NFC) or contactless payment are transactions made by tapping either a contactless chip card or a payment-enabled device with a contactless-enabled terminal.
link: ?path=docs/In-Person/Device_Management/CAPK-Status.md
-->