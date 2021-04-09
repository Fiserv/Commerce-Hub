---
tags: [carat, commerce-hub, apple-pay, wallet,]
---

# Apple Pay

## Overview
Our API allows developers to quickly enable secure and convenient payments in their payment applications. The API handles all of the tokenization needed to protect customers’ transactions.

**User Action:** The Buyer taps the Apple Pay button in the app or on the website, selects the payment card and uses the Touch-ID to complete the transaction.
1. The Merchant App communicates with the merchant server and creates a transaction ID.
2. The Merchant App obtains the encrypted transaction payload (The tokenized card data "DPAN", Cryptogram, and transaction details) from Apple's Pass Kit Framework.
3. The Merchant App sends the encrypted transaction payload to processor API using the Apple Pay SDK.
4. Processor API decrypts the encrypted transaction payload and processes the transaction.
5. Processor API responds back to the Merchant App (through the SDK) with either an approval or decline.

Apple Pay is available to cardholders at participating banks in supported countries. Refer to Apple’s [participating banks](https://support.apple.com/en-us/HT204916) documentation to learn about supported banks and countries.

---

## Start Accepting Apple Pay Transactions

Select an option below to see the integration steps

### Apple Pay on the Web: RESTful API

If the merchant chooses to integrate Apple Pay on their website using [Commerce Hub RESTful API's](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-Web-REST.md), then the merchant would need to setup their own server for secure communication with Apple Pay, which includes, creating a merchant identifier, creating a processing certificate, registering the merchant and creating a merchant identity certificate.

### Apple Pay on the Web: Hosted Payment Page

If the merchant integrates Apple Pay on their website using [Commerce Hub Hosted Payment Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-Web-HPP.md) then whenever the customers selects Apple Pay as a payment method on merchant’s website, they will be redirected to the Commerce Hub secured hosted payment page from where the transaction will be securely processed and merchant will get the final status of the transaction.

### Apple Pay Integration in App

The merchants who wants to [integrate Apple Pay in their](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-App.md) App using Commerce Hub RESTful API’s need to enable the Apple Pay capabilities in Xcode. Merchant also need to register a merchant ID and create a Payment Processing certificate, which is a cryptographic key that is used to securely send payment data to your server.

---

## See Also

- [API Explorer](url)
- [Apple Pay App Integration](Apple-Pay-App.md)
- [Apple Pay Web Integration](Apple-Pay-Web.md)
- [Google Pay](../Google-Pay/Google-Pay.md)