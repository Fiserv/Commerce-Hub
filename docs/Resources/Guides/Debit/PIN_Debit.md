---
tags: [Card Present, In-Person, Debit, Pin Debit, EMV Debit, Track Debit, Pin]
---

# PIN Debit

A PIN [Debit](?path=docs/Resources/FAQs-Glossary/Glossary.md#debit) transaction is an electronic funds transfer from a customer's bank to a merchant's bank when the customer presents a bank-issued debit card and enters the [PIN](?path=docs/Resources/FAQs-Glossary/Glossary.md#pin) at the point of sale. Commerce Hub supports PIN debit transactions for charges, refunds and cancels.

<!-- theme: caution -->
> Merchants must be set up by their processor to accept PIN debit transactions and refunds. The merchant will also need a PIN capable PIN-pad or terminal.

---

## Integration Options

Build a Commerce Hub integration based on payment source to initiate a transaction.

<!-- type: row -->

<!-- type: card
title: EMV Request
description: EMV-enabled chip payment cards are paired with additional layers of security such as encryption, tokenization and other authentication techniques making it difficult to replicate and reducing card payment fraud.
link: ?path=docs/In-Person/Encrypted-Payments/EMV.md
-->

<!-- type: card
title: Track Request
description: Payment Track can be used as EMV Fallback and involves manually swiping the payment source into a payment terminal using magnetic stripe. This can be used when the payment terminal fails to obtain the card details from the card's chip.
link: ?path=docs/In-Person/Encrypted-Payments/Track.md
-->

<!-- type: card
title: Key Management
description: Key management involves creating, deleting, storing and distributing keys. Managing keys needs a number of requirements, for physical security and procedural aspects.
link:
-->

<!-- type: row-end -->

---

## Features 

Once your integration can accept payments, enhance your integration by adding more PIN Debit features and functionality.

<!-- theme: danger -->
> We are enhancing Commerce Hub to include additional PIN debit support and the documents related to the features will be released soon.

<!-- type: row -->

<!-- type: card
title: Balance Inquiry
description: Balance inquiry can be used to verify the funds remaining in the customer's debit account.
link: 
-->

<!-- type: card
title: Cash Back
description: The cashback feature allows shoppers get cash back from their account, either after a purchase or without a purchase. 
link: 
-->

<!-- type: card
title: Partial Approval
description: When an acquirer supports partial authorizations, a check is made to verify if the transaction amount depletes the available balance and requires another payment method to complete the transaction.
link:
-->

<!-- type: row-end -->

<!-- type: row -->

<!-- type: card
title: EBT
description: Electronic Benefit Transfer (EBT) payment cards allows the acceptance of government issued food and cash benefits.
link: 
-->

<!-- type: card
title: Debit Reversals
description: A debit reversal is a cancel or refund where the customer's funds are placed back into their account.
link: 
-->


<!-- type: card
title: Quasi-Cash
description: Quasi-Cash transaction includes merchandise and/or services provided by a merchant such as; traveler's checks, foreign currency, gambling transactions, etc.
link:
-->

<!-- type: row-end -->

---
---
