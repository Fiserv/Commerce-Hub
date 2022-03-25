

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
link: ?path=docs/Resources/FAQs-Glossary/Glossary.md
-->

<!-- type: card
title: Track Request
description: Payment Track can be used as EMV Fallback and involves manually swiping the payment source into a payment terminal using magnetic stripe. This can be used when the payment terminal fails to obtain the card details from the card's chip.
link: ?path=docs/In-Person/Encrypted-Payments/Track.md
-->

<!-- type: card
title: Key Management
description: 
link:
-->

<!-- type: row-end -->

---

## Features 

Once your integration can accept payments, enhance your integration by adding more PIN Debit features and functionality.

<!-- theme: warning -->
> We are enhancing Commerce Hub to include additional PIN debit support and the documents related to the features will be released soon.

<!-- type: row -->

<!-- type: card
title: Balance Inquiry
description: Balance inquiry can be used to know the funds remaining in the customer's debit account. Click to know how Commerce Hub supports the balance inquiry request for PIN debit transaction.
link: 
-->

<!-- type: card
title: Cash Back
description: The cashback feature allows shoppers get cash back in your account, either after a purchase or without a purchase. 
link: 
-->

<!-- type: card
title: Partial Approval
description: A partial approval validation or authorization is the ability to partially authorize a transaction if the customer does not have the funds to cover the entire cost on their debit card, prepaid card or gift card. The merchant can obtain the remainder of the purchase amount in another form of payment. 
This validation is used only for transactions where the acquirer supports partial authorisations, and only from certain MCCs such as automatic fuel dispensers and electronic cash registers. This validation checks if the transaction amount depletes the card's balance and requires another payment method to complete the transaction. The result is always valid, because this validation is only performed when the transaction meets the conditions.


link:
-->

<!-- type: row-end -->

<!-- type: row -->

<!-- type: card
title: EBT
description: Electronic Benefit Transfer payment cards allows the acceptance of electronic benefits........
link: 
-->

<!-- type: card
title: Debit Reversals (Merchant-Initiated and )
description: 
link: 
-->

<!-- type: card
title: Quasi-Cash
description: 
link:
-->

<!-- type: row-end -->
---
