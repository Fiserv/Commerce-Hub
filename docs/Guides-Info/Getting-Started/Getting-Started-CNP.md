---
tags: [carat, commerce-hub, card-not-present, getting-started, hosted-payment-page]
---

# Online Payments Integration

The integration of merchant with Commerce Hub in order to process the Online Payments can be done in various ways as explained below.

## Payment APIs

Merchants may want to build their own UI and manage cardholder checkout within their own website, they may use commerce Hub [RESTful APIs](https://docs.firstdata.com/org/Commerce-Hub/docs/api).

<!-- theme: warning -->
>
> Merchants are required to have the relevant PCI Compliance capabilities to process and store card data.

## Hosted Payment Page

Commerce Hub Hosted Payment Page allows merchants to redirect their customer to our payment page when they are checking out.

Our Hosted Page then manages the customer redirections that are required in the checkout process of many payment methods, or the complex authentication mechanisms (3DSecure) card payments now require.

Using secure hosted pages can reduce the burden of compliance with the Data Security Standard of the Payment Card Industry (PCI DSS). If the merchant want to lighten the PCI DSS load, but still make use of our extended capabilities, they can still use our RESTful APIs to access features where no direct consumer interaction is required and no sensitive cardholder data is getting processed.

## Payment links 

Merchants can also request a Payment URL via commerce Hub REST APIs, then send that to their customer. The customer then clicks the the URL we sent , which takes them to Commerce Hub Hosted Payment Page to complete the payment.

## Payment.js

Use Payment.js to easily embed a payment form into a website.

Payment.js makes it simple to tokenize payment credentials for later transactions without collecting, processing, or otherwise being able to view those payment credentials in their untokenized form, thus lowering the PCI compliance requirements.