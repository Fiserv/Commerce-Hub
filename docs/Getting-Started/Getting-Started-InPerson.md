---
tags: [Getting Started, In-Person, Card Present, EMV, Debit, Point of Sale, Terminal]
---

# In-Person Payments

Commerce Hub supports in-person or card-present payment transactions where the customer physically presents the payment source while making a transaction at any merchant terminal. This type of transaction can include swiping a card with a magnetic strip, inserting or tapping a card with an [EMV chip](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv), or tapping a mobile device with the card loaded into a digital wallet.

---

## Integration Methods

Commerce Hub allows a merchant to build their UI and manage customer transactions within their software or terminal using Commerce Hub's RESTful APIs or SDKs.

<!-- type: row -->

<!-- type: card
title: Semi-Integrated
description: Semi-integrated solutions run on a combination of Commerce Hub and third-party hardware and software. Commerce Hub's semi-integration solutions allow your existing point-of-sale software to accept EMV-based, PCI-compliant transactions.
link: ?path=docs/In-Person/Integrations/Semi-Integrated.md
-->

<!-- type: card
title: Fully-Integrated
description: Commerce Hub's fully integrated payment system efficiently manages all the processes in a single integrated system. It has the payment application as a part of the core POS solution. The software handles every aspect of the transaction, from scanning and reading the bar code to processing the payments and managing inventory and replenishment.
link:
-->

<!-- type: card
title: Device Management
description: Commerce Hub's SDK allows integration with Apple's Tap to Pay on iPhone to accept contactless payments from an iPhone or a partner-enabled iOS app.
link: ?path=docs/Resources/API-Documents/Device-Management/Device-Management.md
-->

<!-- type: row-end -->

---

## Payment Methods

Commerce Hub allows a merchant to securely accept payments using Commerce Hub's RESTful APIs or SDKs.

<!-- type: row -->

<!-- type: card
title: Encrypted Payments
description: By leveraging the third-party EMV-enabled payments solution, the customer's payment transactions are encrypted via a multi-layered security approach. The terminal or software processes the transaction with a plug-and-play, semi-integrated solution and submits the RESTful request to Commerce Hub.
link: ?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md
-->

<!-- type: card
title: Tap to Pay
description: Commerce Hub's Terminal API SDKs allows integration with iOS and Android to accept contactless payments from a supported device or a partner-enabled app.
link: ?path=docs/In-Person/Integrations/Tap-to-Pay.md
-->

<!-- type: row-end -->

---
