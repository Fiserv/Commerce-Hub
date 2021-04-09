---
tags: [carat, commerce-hub, apple-pay, wallet,]
---

# Apple Pay

## Overview
Our API allows developers to quickly enable secure and convenient payments in their payment applications. The API handles all of the tokenization needed to protect customers’ transactions.

<!--
**User Action:** The Buyer taps the Apple Pay button in the app or on the website, selects the payment card and uses the Touch-ID to complete the transaction.
1. The Merchant App communicates with the merchant server and creates a transaction ID.
2. The Merchant App obtains the encrypted transaction payload (The tokenized card data "DPAN", Cryptogram, and transaction details) from Apple's Pass Kit Framework.
3. The Merchant App sends the encrypted transaction payload to processor API using the Apple Pay SDK.
4. Processor API decrypts the encrypted transaction payload and processes the transaction.
5. Processor API responds back to the Merchant App (through the SDK) with either an approval or decline.
-->

Apple Pay is available to cardholders at participating banks in supported countries. Refer to Apple’s [participating banks](https://support.apple.com/en-us/HT204916) documentation to learn about supported banks and countries.

---

## Start Accepting Apple Pay Transactions

Select an option below to see the integration steps

### [Apple Pay on the Web: RESTful API](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-Web-REST.md)

Commerce Hub's RESTful API integration allows the merchant to create a custom UI integration with Apple Pay. The merchant will host the payment processing on their server and has full control over the look and feel. 

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

#### Transaction Flow

1. Customer selects checkout from the merchant's website.
2. Customer is presented with the merchant's payment form.
3. Customer selects Apple Pay and is redirected to the Apple Pay payment form.
4. Customer completes the apple pay form and is redirected to the merchant's website.
5. Customer selects to complete the transaction.
6. Merchant submits the encrypted Apple Pay payload to Commerce Hub.
7. Commerce Hub attempts to process the transaction and sends the response to the merchant website.

### [Apple Pay on the Web: Hosted Payment Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-Web-HPP.md)

Commerce Hub's Hosted Payment Page integration removes the PCI Complaince requirement on the merchant server by handling the payment processing form on Commerce Hub's secure server. The merchant can customize the look and feel of the payment form.

#### Transaction Flow

1. Customer selects checkout from the merchant's website.
2. Customer is presented with the Commerce Hub's secure Hosted Payment Page.
3. Customer selects Apple Pay and is redirected to the Apple Pay payment form.
4. Customer completes the apple pay form and is redirected to the Hosted Payment Page.
5. Customer selects to complete the transaction.
6. Hosted Payment Page submits the encrypted Apple Pay payload to Commerce Hub.
7. Commerce Hub attempts to process the transaction and sends the response to the merchant website.

### [Apple Pay Integration in App](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-App.md)

Commerce Hub's RESTful API integration allows the merchant to create a custom App integration with Apple Pay. The merchant will present the payment processing form on their App and submit the transaction to Commerce Hub.

#### Transaction Flow

1. Customer selects checkout from the merchant's App.
2. Customer is presented with the merchant's payment form.
3. The App calls the Apple Pay framework to obtain the encrypted wallet data.
4. Merchant's App submits the encrypted Apple Pay payload to Commerce Hub.
5. Commerce Hub attempts to process the transaction and sends the response to the merchant's App.

---

## See Also

- [API Explorer](url)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)