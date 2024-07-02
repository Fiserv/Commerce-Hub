---
tags: [Online, Card Not Present, Secure Data Capture, Multi-Use Public Key]
---

# Multi-Use Public Key Encryption

Multi-Use Public Key Encryption uses an RSA *(Rivest Shamir Adleman)* encryption method that allows secure integration and transmission of customer data, from the use of a static asymmetric multi-use public key *(MUPK)*. This provides a merchant the ability to capture the payment source details and encrypt the details before sending it to Commerce Hub for authorization.

##### Benefits

- **Security:** RSA cryptography has a secure algorithm that safeguards data transmission.
- **Public Key Cryptography:** Commerce Hub uses a public key cryptography algorithm for security and uses two different keys to encrypt and decrypt data.
- **Key Exchange:** It is possible to exchange secret keys without actually sending the private key over the network, allowing the encryption and safe transmission of secure customer data without sending decryption keys beforehand.

---

## Integration Methods

Build an integration using a Multi-Use Public Key.

<!-- type: row -->

<!-- type: card
title: Key Management
description: Commerce Hub's key management system is needed to achieve PCI DSS compliance by implementing a crypto system that manages the secure creation, exchange, distribution, storage and use of cryptographic keys, to protect a customer's sensitive payment card data.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md
-->

<!-- type: card
title: Encrypt Payment Data
description: The merchant uses multi-use public key for the asymmetric PaymentCard, PaymentEMV, or PaymentTrack encryption of the card data where the merchant can store and send the data to Commerce Hub at a later time.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md
-->

<!-- type: row-end -->

---
