---
tags: [carat, commerce-hub, enterprise, card-not-present, mobile-wallets, encrypted-wallet, decrypted-wallet]
---

# Wallet Payments

## Overview

Commerce Hub allows integration with most popular mobile and digital wallet providers including; Apple Pay, Google Pay, Samsung Pay and PayPal.

---

### Mobile Wallets

Wallet transactions originate from a digital wallet either from a website or on a device (e.g. Apple/iOS, Google/Android, and Samsung). Merchants can submit this data as either an encrypted or a decrypted request. 

- **Encrypted Wallet:** The merchant will send the encrypted data along with their private key and Commerce Hub will decrypt the information for processing.
- **Decrypted Wallet:** The merchant will decrypt the wallet data before submitting to Commerce Hub for processing.


<!--
CyberSource offers merchants two options for processing Apple Pay transactions:
Merchant decryption
CyberSource decryption
Both options are available for mobile transactions and Web transactions.
The merchant decryption option enables you to decrypt the encrypted payment data from Apple to retrieve the payment network token, the expiry date, the cryptogram, and other payment data associated with the transaction. To use this option, first obtain a Certificate Signing Request (CSR) directly from Apple. You then submit the authorization request with the payment network tokenization data as in "Payment Network Tokenization."
The CyberSource decryption option enables you to simplify your payment processing by allowing CyberSource to decrypt the payment data for you during processing. To use this option:
-->

---

### Digital Wallets (eWallets)

<!-- theme: danger -->
> We are enhancing Commerce Hub to include support for digital wallets (eWallets) including PayPal and AmazonPay. The documents related to the features will be released soon. 

---

## Next Steps
- [API Explorer](url)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)

---