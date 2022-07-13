---
tags: [3-D-Secure, Visa Secure, Verified by Visa, Securecode, Protectbuy, Safekey]
---

# 3-D Secure

Commerce Hub supports [3-D Secure (3DS)](?path=docs/Resources/FAQs-Glossary/Glossary.md#3-d-secure) transactions from a either a merchant 3DS service or through Commerce Hub's 3DS Authentication service.

### How it Works

1. The customer selects checkout from the merchant's website and the merchant's payment form displays.
2. The customer enters their payment information and is redirected to the 3DS provider.
3. The customer completes the 3DS authentication form and returns to the merchant's website.
4. The merchant's website submits the 3DS payload to Commerce Hub.
5. Commerce Hub attempts to process the transaction and sends the response to the merchant's website.

3-D Secure helps reduce fraudulent transactions and increases the transaction security for E-commerce transactions and has two available versions:

- **Version 1:** The customer is redirected to the issuer's website to provide additional authentication data (e.g. password or an SMS verification code).
- **Version 2:** The card issuer performs the authentication within the merchant's website or mobile app using passive, biometric, and two-factor authentication methods.

---

## Integration Methods

Build an integration that to accept a 3-D Secure payment.

<!-- type: row -->

<!-- type: card
title: Merchant Managed
description: Allows the 3DS authentication details that were completed by a third-party provider to be passed in the payment authorization transaction to Commerce Hub.
link: ?path=docs/Online-Mobile-Digital/3D-Secure/Merchant-Managed-3DS.md
-->

<!-- type: card
title: Native
description: Allows the integration directly with Commerce Hub to obtain the 3DS authentication details and process the payment authorization transaction within the merchant's website or mobile app.
link: 
-->

<!-- type: card
title: Redirect
description: Allows the integration directly with Commerce Hub to obtain the 3DS authentication details and process the payment authorization transaction after the customer is redirected to the issuer's website..
link: 
-->

<!-- type: row-end -->
