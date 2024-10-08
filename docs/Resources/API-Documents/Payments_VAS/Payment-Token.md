---
tags: [Stored Credentials, Token, Tokenization, API Reference]
---

# Tokenization

[Tokenization](?path=docs/Resources/FAQs-Glossary/Glossary.md#tokenization) is a process of replacing sensitive data with non-sensitive equivalent, referred to as a token. A merchant can either submit a request to tokenize a [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) as part of a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) or [card capture](?path=docs/Online-Mobile-Digital/Checkout/API/API-Only.md) request, or can tokenize the the payment source only by sending a request to the [tokens endpoint](../api/?type=post&path=/payments-vas/v1/tokens).

- **Customer Authorized:** Customer authorizes storage of their payment data in a website, app or software as a payment token for subsequent or bill pay transactions.
  - Requires the use of [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) _(Credentials on File)_ in the requests.
- **Merchant Stored:** Merchant requires a token to be stored in their software or terminal for subsequent transaction and batching.

---

## Tokenization Methods

Commerce Hub supports the following Tokenization requests.

<!-- type: row -->

<!-- type: card
title: TransAmor Token
description: Merchants can replace sensitive payment information, such as credit card numbers, with a non-sensitive TransArmor Token issued by Commerce Hub. 
link: ?path=docs/Resources/Guides/Payment-Sources/Tokenization/TransAmor.md
-->

<!-- type: card
title: Network Token
description: Enhances payment security by substituting sensitive cardholder data with unique, context-specific tokens issued by the card networks, minimizing fraud risk and data exposure.
link: ?path=docs/Resources/Guides/Payment-Sources/Tokenization/Network-Token.md
-->

<!-- type: card
title: Secure Vault
description: Provides a protected space for storing sensitive data, like payment and customer information, ensuring its confidentiality and security against unauthorized access or breaches.
link: 
-->

<!-- type: card
title: Partner Token 
description: The partner tokens request allows a merchant to submit Commerce Hub's TransAmor PaymentToken and receive a third-party partner token.
link: ?path=docs/Resources/API-Documents/Payments_VAS/Get-Proccesor-Token.md
-->

<!-- type: row-end -->

---
