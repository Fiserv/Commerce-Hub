---
tags: [Payment Source]
---

# Payment Source Types

The variable `sourceType` is used to determine the source of the transaction. Depending on the source the required variables change. 

| sourceType | Description |
| ----- | ----- |
| [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) | **Payment Cards** are issued by financial institutions and banks to the customers. Customers use the card to pay online or in-person. *PaymentCard* is used to submit a manually entered credit or debit card, [private label card](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md) or gift card (Prepaid) transaction to our application. Commerce Hub requires all payment cards to be encrypted using [multi-use public key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).  |
| [PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md) | **EMV Cards** are issued by financial institutions and banks to the customers. Customers use the EMV card to pay in-person. *PaymentEMV* is used to submit a EMV chip and PIN transaction to our application. |
| [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md) | **Payment Cards** are issued by financial institutions and banks to the customers. Customers use the card to pay in-person. *PaymentTrack* is used to submit a track data transaction to our application. |
| [ApplePay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md) | **Apple Pay** is a mobile payment and digital wallet service by Apple Inc. that allows users to make payments in person, in iOS apps, and on the web using Safari. Supported on the iPhone, Apple Watch, iPad, and Mac. Used to submit Apple Pay transaction to our application. |
| [GooglePay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md) | **Google Pay** is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. Used to submit Google Pay transaction to our application. |
| SamsungPay | **Samsung Pay** is a digital wallet platform and online payment system developed by Samsung to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. Used to submit Samsung Pay transaction to our application. |
| [DecryptedWallet](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) | **Decrypted Wallet** is used by the merchant while sending the transaction to the Commerce Hub when they are using their own certificate to encrypt the data received from Apple Pay, Google Pay or Samsung Pay. |
| [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) | **Processor Token** is a created by submitting a token request using a payment source. **Network Token** is a created by submitting a request to the processing networks (Visa, Mastercard, AMEX, Discover) using a payment card. Both can be used to submit a PaymentToken transaction to our application. |
| [Payment3DS](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) | **3-D Secure** authentication provides an additional security layer for online card transactions. If the merchant account is enabled for 3-D Secure, all charge transactions initiated by their API will by default go through the 3-D Secure process. Also used to submit merchant managed 3-D Secure transaction to our application. |
| [PaymentSession](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md) | **Payment Session** is a nonce token obtained from a security credentials request. *PaymentSession* is used is used in iFrame and JavaScript Secure Data Capture integrations to submit a transaction to our application. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)

---
