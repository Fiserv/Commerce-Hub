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

- [Apple Pay Integration on Web](Apple-Pay-Web.md)

- [Apple Pay Integration in App](Apple-Pay-App.md)