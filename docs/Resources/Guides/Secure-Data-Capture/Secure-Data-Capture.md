# Secure Data Capture

Commerce Hub offers online integration methods for E-commerce merchants that require SAQ A and SAQ A-EP compliance.

The PCI DSS [Self-Assessment Questionnaires](?path=docs/Resources/FAQs-Glossary/Glossary.md#self-assessment-questionnaire) (SAQs) are self-validation tools intended to assist merchants in evaluating their compliance with the PCI DSS. For more information visit [PCI Security Standard](https://www.pcisecuritystandards.org/) website.

- **SAQ A:** applies to the merchants that have fully outsourced all cardholder data functions to Commerce Hub, with no electronic storage, processing, or transmission of any cardholder data on their systems.

- **SAQ A-EP:** applies to the merchants who partially outsource payment processing to Commerce Hub. The merchant typically has a website that hosts a checkout process and sends the cardholder data to Commerce Hub at a point of payment.

---

## SAQ A Integrations

### Hosted Payment Page

Allows a merchant to redirect their customer to a secure Commerce Hub Hosted Payment Page to process a transaction. The Commerce Hub Hosted Payment Page manages the customer interactions that are required in the checkout process based on payment method, or authentication mechanisms (3-D Secure).

Using Commerce Hub's secure hosted pages can reduce the burden of compliance with the Data Security Standard of the Payment Card Industry (PCI DSS).

<!-- theme: info -->
>A merchant can lessen the PCI DSS load by using Hosted Payment Pages, and still make use of our extended capabilities using our RESTful APIs to access features where no direct consumer interaction is required and no sensitive data been processed.

**Begin integration with Commerce Hub's [Hosted Payment Pages](?path=docs/Online-Mobile-Digital/Hosted-Payment-Page/Hosted-Payment-Page.md).**

### Payment URL

Allows a merchant to request an invoice via the Commerce Hub RESTful APIs, and send a Payment URL to their customer. The customer accesses the URL received, and taken to a Commerce Hub hosted payment page to complete the payment.

**Begin integration with Commerce Hub's [Payment URLs](?path=docs/Online-Mobile-Digital/Payment-URL/Payment-URL.md).**

---

## SAQ A-EP Integrations

### RESTful APIs

Allows the merchants to build their own UI and manage customer transactions within their own website, software, or terminal using Commerce Hub's RESTful APIs.

<!-- theme: warning -->
> The merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

**Begin integration with Commerce Hub's [RESTful APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md).**

### Payment.js

Allows a merchant an easy and secure way to embed a payment form into a website. Payment.js makes it simple to [tokenize](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

Payment.js accomplishes this by injecting an iframe into a parent form where customers can enter their data. The merchant can customize the form fields.

**Begin integration with Commerce Hub's [Payment.js](?path=docs/Online-Mobile-Digital/Payment-JS/Payment-JS.md).**

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Hosted Payment Page Integration](?path=docs/Online-Mobile-Digital/Hosted-Payment-Page/Hosted-Payment-Page.md)
- [Payment JS Integration](?path=docs/Online-Mobile-Digital/Payment-JS/Payment-JS.md)
- [Payment URL Integration](?path=docs/Online-Mobile-Digital/Payment-URL/Payment-URL.md)
- [RESTful API Integration](?path=docs/Resources/API-Documents/Use-Our-APIs.md)

---
