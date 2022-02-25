# Secure Data Capture

Commerce Hub offers online integration methods for E-commerce merchants that require SAQ A and SAQ A-EP compliance.

The PCI DSS [Self-Assessment Questionnaires](?path=docs/Resources/FAQs-Glossary/Glossary.md#self-assessment-questionnaire) (SAQs) are self-validation tools intended to assist merchants in evaluating their compliance with the PCI DSS. For more information visit [PCI Security Standard](https://www.pcisecuritystandards.org/) website.

- **SAQ A:** applies to the merchants that have fully outsourced all cardholder data functions to Commerce Hub, with no electronic storage, processing, or transmission of any cardholder data on their systems.

- **SAQ A-EP:** applies to the merchants who partially outsource payment processing to Commerce Hub. The merchant typically has a website that hosts a checkout process and sends the cardholder data to Commerce Hub at a point of payment.
 
---

## SAQ A Integrations

<!-- type: row -->

<!-- type: card
title: Hosted Payment Page
description: Allows a merchant to redirect their customer to a secure Commerce Hub Hosted Payment Page to process a transaction.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Hosted-Payment-Page/Hosted-Payment-Page.md
-->

<!-- type: card
title: Payment URL
description: Allows a merchant to request an invoice via the Commerce Hub RESTful APIs, and send a Payment URL to their customer.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-URL/Payment-URL.md
-->

<!-- type: card
title: iFrame
description: Allows a merchant an easy and secure way to embed a payment form into a website.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md
-->

<!-- type row-end -->

---

## SAQ A-EP Integrations

### Direct Post Integration

Allows the merchants to build their own form to collect all payment information and submit a transaction using Commerce Hub's Hosted Payment Page.

**Begin integration with Commerce Hub's [Direct Post].**

### JavaScript Integration

Allows a merchant an easy and secure way to embed a payment form into a website. Commerce Hub JS makes it simple to submit the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

**Begin integration with [Commerce Hub JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md).**

### API Only Integration

Allows a merchant an easy and secure way to manage and encrypt the payment data on their website. Commerce Hub makes it simple to submit the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

**Begin integration with [API Only](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/API-Only.md).**

---

## See Also
- [Hosted Payment Page Integration](?path=docs/Online-Mobile-Digital/Hosted-Payment-Page/Hosted-Payment-Page.md)
- [iFrame Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md)
- [JS Integration](?path=docs/Online-Mobile-Digital/Payment-JS/Payment-JS.md)
- [Payment URL Integration](?path=docs/Online-Mobile-Digital/Payment-URL/Payment-URL.md)

---
