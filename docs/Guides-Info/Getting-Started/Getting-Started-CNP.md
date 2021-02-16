---
tags: [carat, commerce-hub, card-not-present, getting-started, hosted-payment-page]
---

## Getting-Started-CNP

### Payment APIs

Merchants may want to build their own UI and manage cardholder checkout within their own website, they may use commerce Hub [RESTful APIs](https://docs.firstdata.com/org/Commerce-Hub/docs/api).

<!-- theme: warning -->
>
> For this, merchants need to have the relevant PCI Compliance capabilities to process raw card data

### Hosted Payment Page
Our Hosted Payment Page called 'Connect' allows you to redirect your customer to our payment page when they are checking out.

Our Hosted Page then manages the customer redirections that are required in the checkout process of many payment methods, or the complex authentication mechanisms (3DSecure) card payments now require.

Using secure hosted pages can reduce the burden of compliance with the Data Security Standard of the Payment Card Industry (PCI DSS). If you want to lighten the PCI DSS load, but still make use of our extended capabilities, you can still use our RESTful APIs to access features where no direct consumer interaction is required and no sensitive cardholder data is getting processed.

Additionally, if you want to remove the complexity of enabling authenticated payments via the 3DSecure API, we suggest you use the Connect solution for all sale transactions, then use the REST APIs for all other use cases.

### Payment links you can send to customers
You can also request a Payment URL via our REST APIs, then send that to your customer. You customer then clicks the link you've sent them, which takes them to our Hosted Payment Page to complete the payment.