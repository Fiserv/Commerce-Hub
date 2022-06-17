---
tags: [Card Not Present, Card Present, Hash, Primary Transactions, Secondary Transactions, Vault]
---

# Request Types

The Commerce Hub allows a merchant to create, inquire, and finalize payment transactions through our API. Commerce Hub seperates transactions into two transaction types; primary and secondary.

---

## Primary

Request initiated to the Commerce Hub API without a referenced transaction identifier.

<!-- type: row -->

<!-- type: card
title: Charges
description: A charge request is used to peform a sale or pre-authorization on a customer's account.
link: docs/Resources/API-Documents/Payments/Charges.md
-->

<!-- type: card
title: Verification
description: An account verification request is used to confirm that the customer's account is valid for a transaction, or perform an address and security code verification. Unlike a normal $0 auth this will not attempt an authorization on the account.
link: ?path=docs/Getting-Started/Getting-Started-Online.md
-->

<!-- type: card
title: Information Lookup
description: An information lookup request is used to obtain the card details of the cardholder such as issuer country, card function, card brand, and supported features for a PaymentCard or PaymentToken.
link: ?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md
-->

<!-- type: card
title: Tokenization
description: A tokenization request is used to replace sensitive data with non-sensitive equivalent, referred to as a token.
link: ?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md
-->

<!-- type: row-end -->

---

## Secondary

Request initiated to the Commerce Hub API with a referenced transaction identifier from a primary request.

<!-- type: row -->

<!-- type: card
title: Capture
description: A capture request allows a previous pre-authorized charge to be completed, also known as a post-authorization, and will settle (withdrawl) funds from the customer.
link: ?path=docs/Resources/API-Documents/Payments/Capture.md
-->

<!-- type: card
title: Reauthorization
description: A reauthorization request is used to issue a new authorization when the completion or fulfillment of the original order or service extends beyond the authorization validity limit set by networks.
link: ?path=docs/Resources/Guides/Authorizations/Re-Auth.md
-->

<!-- type: card
title: Incremental Authorization
description: An incremental authorization request is typically found in hotel and rental environments, where the consumer has agreed to pay for any service incurred during the duration of the contract.
link: ?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md
-->

<!-- type: row-end -->

<!-- type: row -->

<!-- type: card
title: Cancels
description: A cancel request is used when a customer cancels the order or if fraud is suspected, the merchant will need to release the original authorization by issuing a cancel (void) request.
link: ?path=docs/Resources/API-Documents/Payments/Cancel.md
-->

<!-- type: card
title: Refunds
description: A refund request is used if the customer returns product or requests to cancel the transaction after the batch has been settled. Refunds can be initiated for the full amount or a partial amount of the original authorization.
link: ?path=docs/Resources/API-Documents/Payments/Refund.md
-->

<!-- type: card
title: Inquiry
description: An inquiry request is used to retrieve the current state of any previous transaction.
link: ?path=ocs/Resources/API-Documents/Payments/Inquiry.md
-->

<!-- type: row-end -->

---
