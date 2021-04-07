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

- [Google Pay Integration on Web](Google-Pay-Web.md)

- [Google Pay Integration in App](Google-Pay-App.md)

## See Also

- [API Explorer](url)
- [Google Pay App Integration](Google-Pay-App.md)
- [Google Pay Web Integration](Google-Pay-Web.md)
- [Apple Pay](../Apple-Pay/Apple-Pay.md)