---
tags: [Device Management, EMV, Encrypted Payments, CAPK, API Reference]
---

# EMV CAPK Data

EMV CAPK data is crucial for secure payment transactions. It ensures card and cardholder authenticity through Certification Authority Public Keys *(CAPK)*. EMV cards have issuer certificates signed by EMV authorities for validation. The EMV CAPK data is used for offline checks verifying the cryptographic keys on the device and EMV card.

As part of processing EMV transactions, various PIN and data authentication checks are performed offline. The checks use public-key cryptography *(asymmetric cryptography)*. The payment terminal and EMV card each have a pair of cryptographic keys. The terminals will check the digital signatures from the schemes against the ICC data at the time of transaction as part of an offline data authentication check. Card Schemes distribute the Public-Root Keys to be loaded into individual payment device terminals. Each payment integration is responsible for maintaining the CA Public Keys in support of the EMV Public Key Infrastructure.  

<!-- theme: info -->
> For more details on technical implementation of CAPK storage and withdrawal, please refer to latest version of [EMV Book 2 - Security and Key Management](https://www.emvco.com/specifications).

---

## CAPK Data Management

Build an integration to manage CAPK management.

<!-- type: row -->

<!-- type: card
title: CAPK Download
description: The process of securely acquiring and installing (CAPK) data onto payment terminals. 
link: ?path=docs/Resources/API-Documents/Device-Management/CAPK-Download.md
-->

<!-- type: card
title: CAPK Status
description: The process provides confirmation on whether they payment terminal has successfully retrieved and updated the (CAPK).
link: ?path=docs/Resources/API-Documents/Device-Management/CAPK-Status.md
-->

---
