---
tags: [carat, commerce-hub, enterprise, integration-methods, restful-api, hosted-payment-page, in-app, web, online, google-pay, wallet, mobile, getting-started]
---

# Google Pay

## Overview

Google Pay is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. 

<!--
**User Action:** The buyer taps the "Google Pay" button, and then selects a payment method and shipping address.

#### If the purchase originates from a third-party site:

1. The merchant/client server issues a credential request with the Merchant ID and Processor Name as Commerce Hub to Google.
2. Google returns response with encrypted payment credentials signed with the Commerce Hub key to the merchant server.
3. The Merchant sends the encrypted payload to Commerce Hub.
4. Commerce Hub decrypts and validates the payload, and then processes the transaction and responds back to merchant with either an approval or decline response.


#### If the purchase originates from a Google site:

1. Google initiates a purchase request to the merchant after the consumer confirms order.
2. The merchant/client server issues a request with the Merchant ID and Processor Name as Commerce Hub to Google.
3. Google returns response with encrypted payment credentials signed with the Commerce Hub key to merchant server.
4. The merchant sends the encrypted payload to Commerce Hub.
5. Commerce Hub decrypts and validates the payload and process the transaction and respond back to merchant with either an approval or decline response.
-->

Google Pay is available to cardholders in supported countries. Refer to Google's documentation to learn about [supported countries](https://support.google.com/pay/answer/9023773).

---

## Integration Methods

Select an option below to see the integration steps.

### Google Pay on the Web: RESTful API

Commerce Hub's RESTful API integration allows the merchant to create a custom UI integration with Google Pay. The merchants would need to setup their own server for secure communication with Google Pay. The merchant will host the payment processing on their server and has full control over the look and feel.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

#### Transaction Flow

1. Customer selects checkout from the merchant's website.
2. Customer then presented with the merchant's payment form.
3. Customer selects Google Pay and then redirected to the Google Pay payment form.
4. Customer completes the google pay form and then redirected to the merchant's website.
5. Customer selects to complete the transaction.
6. Merchant submits the encrypted google Pay payload to Commerce Hub.
7. Commerce Hub attempts to process the transaction and sends the response to the merchant website.

**Begin integration with [Google Pay on the Web: RESTful API](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-REST.md).**

### Google Pay on the Web: Hosted Payment Page

Commerce Hub's Hosted Payment Page integration removes the PCI Complaince requirement on the merchant server by handling the payment processing form on Commerce Hub's secure server. The merchant can customize the look and feel of the payment form.

#### Transaction Flow

1. Customer selects checkout from the merchant's website.
2. Customer then presented with the Commerce Hub's secure Hosted Payment Page.
3. Customer selects Google Pay and then redirected to the Google Pay payment form.
4. Customer completes the Google pay form and then redirected to the Hosted Payment Page.
5. Customer selects to complete the transaction.
6. Hosted Payment Page submits the encrypted Google Pay payload to Commerce Hub.
7. Commerce Hub attempts to process the transaction and sends the response to the merchant website.

**Begin integration with [Google Pay on the Web: Hosted Payment Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-HPP.md).**

### Google Pay Integration in App

Commerce Hub's RESTful API integration allows the merchant to create a custom App integration with Google Pay. The merchant will present the payment processing form on their App and submit the transaction to Commerce Hub.

#### Transaction Flow

1. Customer selects checkout from the merchant's App.
2. Customer then presented with the merchant's payment form.
3. The App calls the Google Pay framework to obtain the encrypted wallet data.
4. Merchant's App submits the encrypted Google Pay payload to Commerce Hub.
5. Commerce Hub attempts to process the transaction and sends the response to the merchant's App.

**Begin integration with [Google Pay Integration In-App](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-App.md).**

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)