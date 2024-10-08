---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Getting Started]
---

# 3-D Secure

Commerce Hub supports [3-D Secure (3DS)](?path=docs/Resources/FAQs-Glossary/Glossary.md#3-d-secure) transactions from a either a merchant 3DS service or through Commerce Hub's 3DS authentication service. For additional information about 3-D Secure visit the [EMVCo](https://www.emvco.com/emv-technologies/3d-secure/) website.

3-D Secure  (3DS and EMV 3-D Secure) is a protocol designed to be an additional security layer for online credit and debit card transactions. The name refers to the "three domains" which interact using the protocol: the merchant/acquirer domain, the issuer domain, and the interoperability domain.

## How it Works

1. The customer selects checkout from the merchant's website and the merchant's payment form displays.
2. The customer enters their payment information and is redirected to the 3DS provider.
3. The customer completes the 3DS authentication form and returns to the merchant's website.
4. The merchant's website submits the 3DS payload to Commerce Hub.
5. Commerce Hub attempts to process the transaction and sends the response to the merchant's website.

3-D Secure helps reduce fraudulent transactions and increases the transaction security for E-commerce transactions by having the card issuer perform authentication within the merchant's website or mobile app using passive, biometric, and two-factor authentication methods.

---

## Integration Methods

Build an integration that to accept a 3-D Secure payment.

Commerce Hub supports 3DS request from merchants using one of the two options below;

- **Merchant Managed:** the merchant is directly integrated with a third-party system to perform 3DS authentication. The merchant will send the 3DS authentication data to Commerce Hub. Commerce Hub will pass this information to issuer during the transaction request.
- **Commerce Hub Managed:** the merchant will use one of Commerce Hub's 3DS solutions to perform 3DS authentication and transaction authorization.

<!-- type: row -->

<!-- type: card
title: Merchant Managed API
description: Allows the 3DS authentication details that were completed by a third-party provider to be passed in the payment authorization transaction to Commerce Hub.
link: ?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Merchant-Managed.md
-->

<!-- type: card
title: Commerce Hub Managed Checkout
description: Allows the integration directly with Commerce Hub's Checkout iFrame or JavaScript to capture the 3DS device data and payment details within the Commerce Hub iFrame or JavaScript SDK on the merchant's website.
link: ?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Secure-Data-Capture.md
-->

<!-- type: card
title: Commerce Hub Managed API
description: Allows the integration directly with Commerce Hub's API to obtain the 3DS authentication details and process the payment transaction within the merchant's website.
link: ?path=docs/Online-Mobile-Digital/3D-Secure/3DS-API-Only.md
-->

<!-- type: row-end -->
