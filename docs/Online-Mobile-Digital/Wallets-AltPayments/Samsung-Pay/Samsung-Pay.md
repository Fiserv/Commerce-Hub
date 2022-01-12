---
tags: [carat, commerce-hub, enterprise, getting-started, samsung-pay, android, mobile, wallet]
---

# Samsung Pay

Samsung Pay is a digital wallet platform and online payment system developed by Samsung to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android OS on phones, tablets or watches. The app comes pre-installed in Samsung devices. Shoppers can add payment cards on their Samsung Pay app and then use the app to make online or in store payment.

<!-- theme: danger -->
> We are enhancing Commerce Hub to include Samsung Pay support and the documents related to the features will be released soon.

---

## Integration Methods

Select an option below to see the integration steps.

### Samsung Pay on the Web: RESTful API

Commerce Hub's RESTful API integration allows the merchant to create a custom UI integration with Samsung Pay. The merchants would need to setup their own server for secure communication with Samsung Pay. The merchant will host the payment processing on their server and has full control over the look and feel.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

#### Transaction Flow

1. Customer selects checkout from the merchant's website.
2. Customer then presented with the merchant's payment form.
3. Customer selects Samsung Pay and then redirected to the Samsung Pay payment form.
4. Customer completes the Samsung Pay form and then redirected to the merchant's website.
5. Customer selects to complete the transaction.
6. Merchant submits the encrypted Samsung Pay payload to Commerce Hub.
7. Commerce Hub attempts to process the transaction and sends the response to the merchant website.

**Begin integration with [Samsung Pay on the Web: RESTful API](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Samsung-Pay/Samsung-Pay-Web-REST.md).**

---

### Samsung Pay on the Web: Hosted Payment Page

Commerce Hub's Hosted Payment Page integration removes the PCI Complaince requirement on the merchant server by handling the payment processing form on Commerce Hub's secure server. The merchant can customize the look and feel of the payment form.

#### Transaction Flow

1. Customer selects checkout from the merchant's website.
2. Customer then presented with the Commerce Hub's secure Hosted Payment Page.
3. Customer selects Samsung Pay and then redirected to the Samsung Pay payment form.
4. Customer completes the Google Pay form and then redirected to the Hosted Payment Page.
5. Customer selects to complete the transaction.
6. Hosted Payment Page submits the encrypted Samsung Pay payload to Commerce Hub.
7. Commerce Hub attempts to process the transaction and sends the response to the merchant website.

**Begin integration with [Samsung Pay on the Web: Hosted Payment Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Samsung-Pay/Samsung-Pay-Web-HPP.md).**

---

### Samsung Pay Integration in App

Commerce Hub's RESTful API integration allows the merchant to create a custom App integration with Samsung Pay. The merchant will present the payment processing form on their App and submit the transaction to Commerce Hub.

#### Transaction Flow

1. Customer selects checkout from the merchant's App.
2. Customer then presented with the merchant's payment form.
3. The App calls the Samsung Pay framework to obtain the encrypted wallet data.
4. Merchant's App submits the encrypted Google Pay payload to Commerce Hub.
5. Commerce Hub attempts to process the transaction and sends the response to the merchant's App.

**Begin integration with [Samsung Pay Integration In-App](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Samsung-Pay/Samsung-Pay-App.md).**

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)

---
