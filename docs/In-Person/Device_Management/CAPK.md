---
tags: [Device Management, EMV, Encrypted Payments, CAPK, API Reference]
---

# EMV CAPK Data

EMV (Europay Mastercard Visa) CAPK (Certification Authority Public Key) data is crucial for secure payment transactions. It ensures card and cardholder authenticity through Certification Authority Public Keys. EMV cards have issuer certificates signed by EMV authorities for validation. Offline checks use cryptographic keys on terminals and cards. Commerce Hub offers a new CAPK data download endpoint. Refer to integration details in Download and Status articles.

<!-- theme: info -->
> For more details on technical implementation of CAPK storage and withdrawal, please refer to latest version of EMV Book 2 - Security and Key Management.

<https://www.emvco.com/specifications/>

---

## CAPK Request Types

Use the following request type to manage CAPK

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