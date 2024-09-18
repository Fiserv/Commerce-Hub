---
tags: [Online, Card Not Present, Checkout]
---

# Checkout: How it works

Commerce Hub Checkout offers customizable [Hosted Fields](#hosted-fields), [Hosted Forms](#hosted-forms), [Hosted Pages](#hosted-pages), and [APIs](#apis) to meet your branding needs and maximize conversion. Checkout empowers your business to securely accept payments online and via mobile devices, reducing development time and PCI compliance scope while supporting widely used payment methods.

**Integration Options:**

- **Hosted Fields:** Place anywhere on your checkout form for maximum design flexibility.
- **Hosted Forms:** Embed within your page for quicker integration and faster time to market.
- **Hosted Pages:** Redirect customers with minimal coding needed.
- **APIs:** Use for maximum flexibility and brand identity.

**Key Features:**

- **Customization:** Tailor Hosted Fields, Forms, and Pages to your brand.
- **Security:** Enhance security with built-in features and reduce PCI compliance scope.
- **Efficiency:** Decrease development time and maximize checkout conversion.

Hosted form and hosted page components leverage Commerce Hub’s Checkout configuration tool, providing a powerful and flexible way to customize your Checkout experience, share it with stakeholders for feedback, and optimize conversion rates.

---

## PCI DSS compliance information

The PCI DSS [Self-Assessment Questionnaires](?path=docs/Resources/FAQs-Glossary/Glossary.md#self-assessment-questionnaire) (SAQs) are self-validation tools intended to assist merchants in evaluating their compliance with the PCI DSS. For more information visit the [PCI Security Standard](https://www.pcisecuritystandards.org/) website.

- **SAQ A:** applies to merchants that have fully outsourced all cardholder data functions to Commerce Hub, with no electronic storage, processing, or transmission of any customer data on their systems.
- **SAQ A-EP:** applies to merchants who partially outsource payment processing to Commerce Hub. The merchant typically has a website that hosts a checkout process and sends the customer data to Commerce Hub at a point of payment.
- **SAQ D:** applies to merchants who capture the payment source details and save the data in their database. The merchant typically has a website that hosts a checkout process and encrypts the customer data before sending it to Commerce Hub for authorization.

---

## Hosted Fields

[Checkout Hosted Fields](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields.md) allow you to embed individual components within a web or mobile application. These components can be placed anywhere on your checkout page, offering complete design and user experience flexibility. They support a wide range of fields, data elements, and payment methods.

Using Hosted Fields provides maximum design flexibility while minimizing PCI compliance scope. Merchants can qualify for SAQ-A, meaning they fully outsource the handling of all cardholder data to Commerce Hub, with no electronic storage, processing, or transmission of customer data on their systems.

---

## Hosted Forms

Checkout Hosted Forms allow you to embed a complete form within a web or mobile application. These forms can be configured with any available hosted fields components, offering a wide range of data collection and payment options. By hosting these components together, you can place a single form on your checkout page, simplifying and speeding up your integration. Hosted Forms provide a high degree of design flexibility using a hosted checkout configuration tool.

They also minimize PCI compliance scope, with merchants qualifying for SAQ-A. This means all cardholder data functions are fully outsourced to Commerce Hub, with no electronic storage, processing, or transmission of customer data on the merchant’s systems.

---

## Hosted Pages

Checkout Hosted Pages offer a brandable hosted checkout page that you can redirect your customers to when they need to checkout using web or mobile devices. These pages can be configured with any available hosted fields components, providing a wide range of data collection and payment options. By hosting these components together, you can place a fully hosted page on your checkout page, simplifying and speeding up your integration. Hosted Pages provide the least effort for integration and offer a high degree of design flexibility using a hosted checkout configuration tool.

They also minimize PCI compliance scope, with merchants qualifying for SAQ-A. This means all cardholder data functions are fully outsourced to Commerce Hub, with no electronic storage, processing, or transmission of customer data on the merchant’s systems.

---

## APIs

[Checkout APIs](?path=docs/Online-Mobile-Digital/Checkout/API/API-Only.md) provide maximum flexibility and brand identity for your checkout pages. However, they require additional development effort and increase PCI compliance and data collection scope compared to other options. APIs allow merchants to securely manage and encrypt payment data on their website or customer’s mobile device using Commerce Hub’s Capture API1.

Commerce Hub’s APIs can be accessed as client-server APIs, browser-to-server APIs, or server-to-server APIs. Merchants using client-server or browser-to-server APIs can qualify for SAQ A-EP PCI compliance scope, while those using server-to-server APIs can qualify for SAQ-D PCI compliance scope.

---
