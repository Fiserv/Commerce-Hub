---
tags: [Online, Card Not Present, Secure Data Capture]
---

# Secure Data Capture

Commerce Hub offers online integration methods for E-commerce merchants that require SAQ A,  SAQ A-EP, and SAQ D compliance.

The PCI DSS [Self-Assessment Questionnaires](?path=docs/Resources/FAQs-Glossary/Glossary.md#self-assessment-questionnaire) (SAQs) are self-validation tools intended to assist merchants in evaluating their compliance with the PCI DSS. For more information visit the [PCI Security Standard](https://www.pcisecuritystandards.org/) website.

- **[SAQ A](#saq-a-integrations):** applies to merchants that have fully outsourced all cardholder data functions to Commerce Hub, with no electronic storage, processing, or transmission of any customer data on their systems.
- **[SAQ A-EP](#saq-a-ep-integrations):** applies to merchants who partially outsource payment processing to Commerce Hub. The merchant typically has a website that hosts a checkout process and sends the customer data to Commerce Hub at a point of payment.
- **[SAQ D](#saq-d-integrations):** applies to merchants who capture the payment source details and save the data in their database. The merchant typically has a website that hosts a checkout process and encrypts the customer data before sending it to Commerce Hub for authorization.

---

## Mobile Integrations

Commerce Hub's Secure Data Capture SAQ A and SAQ A-EP solutions are supported with mobile integrations with the following conditions;

- The merchant's API should provide access to the webapp via a native mobile browser or a WebView embedded within a native mobile app. See [Apple's iOS](https://developer.apple.com/documentation/webkit/wkwebview) or [Google's Android](https://developer.android.com/reference/android/webkit/WebView) documentation for additional details.
- Commerce Hub's iFrame and JS solutions are responsive and should natively re-render to the customer's device screen size.
- When integrating with native iOS or Android SDKs, Commerce Hub's API solutions should be used.

---

## SAQ A Integrations

<!-- type: row -->

<!-- type: card
title: iFrame
description: Allows a merchant an easy and secure way to embed a payment form into a website or customer's mobile device.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md
-->

<!-- type: card
title: Hosted Payment Page
description: Allows a merchant to redirect their customer to a secure Commerce Hub Hosted Payment Page to process a transaction.
link:
-->

<!-- type: card
title: Payment URL
description: Allows a merchant to request an invoice via the Commerce Hub RESTful APIs, and send a Payment URL to their customer.
link:
-->

<!-- type: row-end -->

---

## SAQ A-EP Integrations

<!-- type: row -->

<!-- type: card
title: JavaScript
description: Allows a merchant an easy and secure way to embed a payment form into a website or customer's mobile device.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md
-->

<!-- type: card
title: API Only
description: Allows a merchant an easy and secure way to manage and encrypt the payment data on their website or customer's mobile device using Commerce Hub's Card Capture API.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/API-Only.md
-->

<!-- type: card
title: Direct Post
description: Allows the merchants to build their own form to collect all payment information and submit a transaction using Commerce Hub's Hosted Payment Page.
link: 
-->

<!-- type: row-end -->

---

## SAQ D Integrations

<!-- type: row -->

<!-- type: card
title: API Direct
description: Integration that includes the use of a static public key, where the merchant can capture the payment source details and encrypt the details before sending it to Commerce Hub for authorization.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/API-Direct.md
-->

<!-- type: row-end -->

---
