---
tags: [carat, commerce-hub, card-not-present, getting-started, hosted-payment-page]
---

# Getting Started: Card Not Present Integrations

## Overview

The integration of merchant with Commerce Hub in order to process the Online Payments can be implemented with one of our APIs below.

## Payment APIs

Allows a merchants to build their own UI and manage customer transactions within their own website, software, or terminal using the Commerce Hub [RESTful APIs](https://docs.firstdata.com/org/Commerce-Hub/docs/api).

For more information, refer to the [constructing an API call](Use-Our-APIs.md) article for information on how to use our Commerce Hub RESTful API.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

---

## Hosted Payment Page

Allows a merchant to redirect their customer to a secure Commerce Hub Hosted Payment Page to process a transaction. The Commmerce Hub Hosted Payment Page manages the customer interactions that are required in the checkout process based on payment method, or authentication mechanisms (3-D Secure).

Using secure hosted pages can reduce the burden of compliance with the Data Security Standard of the Payment Card Industry (PCI DSS).

For more information, refer to the [constructing a Hosted Payment Page](url) article for information on how to use our Hosted Payment Page integration.

<!-- theme: info -->
>A merchant can lessen the PCI DSS load by using Hosted Payment Pages, and still make use of our extended capabilities using our RESTful APIs to access features where no direct consumer interaction is required and no sensitive data is being processed.

---

## Payment URL

Allows a merchant to request an invoice via the Commerce Hub RESTful APIs, and send a Payment URL to their customer. The customer accesses the URL received, and is taken to a Commerce Hub [Hosted Payment Page](#hosted-payment-page) to complete the payment.

For more information, refer to the [requesting a Payment URL](url) article for information on how to use our Payment URL for invoicing.

---

## Payment.js

Allows a merchant an easy and secure way to embed a payment form into a website. Payment.js makes it simple to [tokenize](../../Transactions/Payment-Token.md) the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

For more information, refer to the [constructing a Payment.js request](url) article for information on how to use our Payment.js secure integration.

---

## Next Steps

- Pay By Link
- Use your Own UI
- Integrate with our API
