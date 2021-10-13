---
tags: [carat, commerce-hub, enterprise, restful, apis, card present, online, mobile, digital-payments, card-not-present, getting-started, hosted-payment-page, virtual-terminal]
---

# Online/Mobile/Digital Payments

Commerce Hub offers multiple methods of accepting online, mobile, digital payments, and MOTO payments. A merchant can accept payments with cards, wallets, and other local payment methods from a website, mobile app, virtual terminal, or software.

<!-- theme: warning -->
> These transactions are at a higher risk for fraud, due to the inability to verify the account holder who is making the purchase. It is recommended to use [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) along with Commerce Hub's [Fraud Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) to help reduce potential fraudulent transactions.

---

## RESTful APIs

Allows the merchants to build their own UI and manage customer transactions within their own website, software, or terminal using Commerce Hub's RESTful APIs.

<!-- theme: warning -->
> The merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

<!-- theme: info -->
>A merchant can lessen the PCI DSS load by using a [Secure Data Capture integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md), and still make use of our extended capabilities using our RESTful APIs to access features where no direct consumer interaction is required and no sensitive data been processed.

**Begin integration with Commerce Hub's [RESTful APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md).**

---

## Hosted Payment Page

Allows a merchant to redirect their customer to a secure Commerce Hub Hosted Payment Page to process a transaction. The Commerce Hub Hosted Payment Page manages the customer interactions that are required in the checkout process based on payment method, or authentication mechanisms (3-D Secure).

Using Commerce Hub's secure hosted pages can reduce the burden of compliance with the Data Security Standard of the Payment Card Industry (PCI DSS).

**Begin integration with Commerce Hub's [Hosted Payment Pages](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Hosted-Payment-Page/Hosted-Payment-Page.md).**

---

## Payment URL

Allows a merchant to request an invoice via the Commerce Hub RESTful APIs, and send a Payment URL to their customer. The customer accesses the URL received, and are directed to a Commerce Hub [Hosted Payment Page](#hosted-payment-page) to complete the payment.

**Begin integration with Commerce Hub's [Payment URLs](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-URL/Payment-URL.md).**

---

## Payment and iFrame JS

Allows a merchant an easy and secure way to embed a payment form into a website. Payment JS makes it simple to [tokenize](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

**Begin integration with Commerce Hub's [Payment JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md).**
**Begin integration with Commerce Hub's [iFrame JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md).**

---

## Virtual Terminal

Commerce Hub's Virtual Terminal allows a merchant an easy way to process offline transactions, transaction corrections, setup fraud controls and provides enchanced reporting capabilities.

**Begin processing with Commerce Hub's [Virtual Terminal](?path=docs/Online-Mobile-Digital/Virtual-Terminal/Virtual-Terminal.md).**

---