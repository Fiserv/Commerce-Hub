---
tags: [carat, commerce-hub, enterprise, integration-methods, restful-api, hosted-payment-page, in-app, web, online, google-pay, wallet, mobile, getting-started]
---

# Google Pay

Google Pay is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. 

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

<!-- theme: danger -->
> We are enhancing Commerce Hub to Google Pay integration using RESTful API. The documents related to the features will be released soon.


<!--- 
**Begin integration with [Google Pay on the Web: RESTful API](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-REST.md).**
--->

---

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

<!-- theme: danger -->
> We are enhancing Commerce Hub to Google Pay integration using hosted payment page. The documents related to the features will be released soon.

<!---
**Begin integration with [Google Pay on the Web: Hosted Payment Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-HPP.md).**
--->

---

### Google Pay Integration in App

Commerce Hub's RESTful API integration allows the merchant to create a custom App integration with Google Pay. The merchant will present the payment processing form on their App and submit the transaction to Commerce Hub.

#### Transaction Flow

1. Customer selects checkout from the merchant's App.
2. Customer then presented with the merchant's payment form.
3. The App calls the Google Pay framework to obtain the encrypted wallet data.
4. Merchant's App submits the encrypted Google Pay payload to Commerce Hub.
5. Commerce Hub attempts to process the transaction and sends the response to the merchant's App.

<!-- theme: danger -->
> We are enhancing Commerce Hub to Google Pay in app integration. The documents related to the features will be released soon.

<!---
**Begin integration with [Google Pay Integration In-App](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-App.md).**
-->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)

---
