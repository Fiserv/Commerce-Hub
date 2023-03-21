---
tags: [Online, Card Not Present, Secure Data Capture, Multi-Use Public Key]
---

# Merchant Managed Encryption

Merchant Managed Encryption is a [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md) integration that includes the use of a static public key, where the merchant can capture the payment source details and encrypt the details before sending it to Commerce Hub for authorization.

#### Use Cases
- Can be used as the primary integration method which will fall under SAQ D compliance from PCI DSS.
- Can be used with other integration methods which fall under SAQ A and SAQ A-EP and uses the support of static public key during system interruption *(also known as [Store and Forward](?path=docs/Resources/FAQs-Glossary/Glossary.md#store-and-forward) or offline processing)*.
  - System interruption can be related to scheduled activity or can be due to any network/application failure. 
  - When using Merchant Managed Encryption, the merchant will change from SAQ A/SAQ A-EP to SAQ D for processing.

---

## Integration Methods

Build an integration using a Multi-Use Public Key.

<!-- type: row -->

<!-- type: card
title: Web: Key Management
description: Commerce Hub's key management system is needed to achieve PCI DSS compliance by implementing a crypto system that manages the secure creation, exchange, distribution, storage and use of cryptographic keys, to protect a customer's sensitive payment card data.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md
-->

<!-- type: card
title: Web: Encrypt Card Data
description: The merchant uses multi-use public key for the asymmeteric PaymentCard encryption of the card data where the merchant can store and send the data to Commerce Hub at a later time.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md
-->

<!-- type: card
title: Transaction Request
description: After the merchants captures the payment source details, the multi-use public key issued by the Commerce Hub can be used to encrypt the details and send it to Commerce Hub for authorization. 
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Request.md
-->

<!-- type: row-end -->

---
