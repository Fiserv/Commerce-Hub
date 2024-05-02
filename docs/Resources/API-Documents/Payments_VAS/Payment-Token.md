---
tags: [Stored Credentials, Token, Tokenization, API Reference]
---

# Tokenization

**[Tokenization](?path=docs/Resources/FAQs-Glossary/Glossary.md#tokenization)** is a process of replacing sensitive data with non-sensitive equivalent, referred to as a token. A merchant can either submit a request to tokenize a [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) as part of a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) or [card capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/API-Only.md) request, or can tokenize the the payment source only by sending a request to the [tokens](#tokens-request) endpoint.

- **Customer Authorized:** Customer authorizes storage of their payment data in a website, app or software as a payment token for subsequent or bill pay transactions.
  - Requires the use of [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) (Credentials on File) in the requests.
- **Merchant Stored:** Merchant requires a token to be stored in their software or terminal for subsequent transaction and batching.

---

## Tokenization Methods

Commerce hub supports the following Tokenization request.

<!-- type: row -->

<!-- type: card
title: Network
description: Submit an Activation Request for a Stored Value Card. The request can be for a Virtual Gift Card or Physical gift card. Merchant funded.
link: ?path=docs/Resources/Guides/Payment-Sources/Tokenization/Network-Token.md
-->

<!-- type: card
title: Secure Vault
description: Citibank offers multiple banking services which includes providing of private label and co branded credit cards for retailers.
link: 
-->

<!-- type: card
title: TransAmor 
description: ChargeAfter is a leading network for Buy Now Pay Later  *(BNPL)* consumer point-of-sale financing.
link: ?path=docs/Resources/Guides/Payment-Sources/Tokenization/TransAmor.md
-->

<!-- type: row-end -->

---
