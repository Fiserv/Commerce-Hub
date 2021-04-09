---
tags: [carat, commerce-hub, google-pay, wallet]
---

# Google Pay

## Overview

Google Pay is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. 


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


Google Pay is available to cardholders in supported countries. Refer to Google's documentation to learn about [supported countries](https://support.google.com/pay/answer/9023773).

---

## Start Accepting Google Pay Transactions

Select an option below to see the integration steps

### Google Pay on the Web: RESTful API

If the merchant chooses to integrate Google Pay on their website using [Commerce Hub RESTful API's](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-REST.md), then the merchant would need to setup their own server for secure communication with Google Pay, which includes, define Google Pay API Version, request a payment token, define payment card networks & auth methods, describe allowed payment methods, add payment tag, determine readniness to pay, dd google pay button etc.

### Apple Pay on the Web: Hosted Payment Page

If the merchant integrates Google Pay on their website using [Commerce Hub Hosted Payment Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-HPP.md) then whenever the customers selects Google Pay as a payment method on merchant’s website, they will be redirected to the Commerce Hub secured hosted payment page from where the transaction will be securely processed and merchant will get the final status of the transaction.

### Google Pay Integration in App

The merchants who wants to [integrate Google Pay in their](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-App.md) App using Commerce Hub RESTful API’s need to enable the Apple Pay capabilities in Xcode. Merchant also need to define Google Pay API Version, request a payment token, define payment card networks, describe allowed payment methods, create PaymentClientsInstance, determine readniness to pay, create PaymentDataRequest, register event handler etc.

## See Also

- [API Explorer](url)
- [Google Pay App Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-App.md)
- [Google Pay Web Integration - RESTful API](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-REST.md)
- [Google Pay Web Integration - Hosted Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-HPP.md)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)