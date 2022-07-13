---
tags: [3-D-Secure, Visa Secure, Verified by Visa, Securecode, Protectbuy, Safekey]
---

# 3-D Secure

Commerce Hub supports [3-D Secure (3DS)](?path=docs/Resources/FAQs-Glossary/Glossary.md#3-d-secure) transactions from a either a merchant 3DS service or through Commerce Hub's 3DS Authentication service.

3-D Secure helps reduce fraudulent transactions and increases the transaction security for E-commerce transactions and has two available versions:

- **Version 1:** The customer is redirected to the issuer's website to provide additional authentication data (e.g. password or an SMS verification code).
- **Version 2:** The card issuer performs the authentication within the merchant's website or mobile app using passive, biometric, and two-factor authentication methods.

---

##Integration Methods

Build an integration that to accept a 3-D Secure payment.

<!-- type: row -->

<!-- type: card
title: Merchant Managed
description: Allows the 3DS authentication details that were completed by a third-party 3DS provider to be passed in the payment authorization transaction to Commerce Hub.
link: ?path=docs/Online-Mobile-Digital/3D-Secure/Merchant-Managed-3DS.md
-->

<!-- type: card
title: Commerce Hub Managed
description: Allows the integration directly with Commerce Hub to obtain the 3DS Authentication details and process the payment authorization transaction.
link: 
-->

<!-- type: row-end -->
