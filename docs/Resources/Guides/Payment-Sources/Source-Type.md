---
tags: [carat, commerce-hub, enterprise, payment-source-types]
---

# Payment Source Types

The variable `sourceType` is used to determine the source of the transaction. Depending on the source the required variables change. 

| sourceType | Description |
| ----- | ----- |
| PaymentCard | **Payment Cards** are issued by financial institutions and banks to the customers. Customers use the card to pay online or in-person. *PaymentCard* is used to submit a [payment card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md), or gift card (Prepaid) transaction to our application. |
| PaymentEMV | **EMV Cards** are issued by financial institutions and banks to the customers. Customers use the EMV card to pay in-person. *PaymentEMV* is used to submit a [EMV chip and PIN]<!--(?path=docs/In-Person/Encrypted-Payments/EMV.md)--> transaction to our application. |
| PaymentTrack | **Payment Cards** are issued by financial institutions and banks to the customers. Customers use the card to pay in-person. *PaymentTrack* is used to submit a [track data]<!--(?path=docs/In-Person/Encrypted-Payments/Track.md)--> transaction to our application. |
| ApplePay | **Apple Pay** is a mobile payment and digital wallet service by Apple Inc. that allows users to make payments in person, in iOS apps, and on the web using Safari. Supported on the iPhone, Apple Watch, iPad, and Mac. Used to submit [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md) transaction to our application. |
| GooglePay | **Google Pay** is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. Used to submit [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md) transaction to our application. |
| SamsungPay | **Samsung Pay** is a digital wallet platform and online payment system developed by Samsung to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. Used to submit Samsung Pay transaction to our application. |
| DecryptedWallet | **Decrypted Wallet** is used by the merchant while sending the transaction to the Commerce Hub when they are using their own certificate to encrypt the data received from Apple Pay and Google Pay. |
| PaymentToken | **Payment Token** is a created by submitting a [token request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) using a payment card. Used to submit a [Network Token](?path=docs/Resources/Guides/Payment-Sources/Network-Token.md) or Payment Token transaction to our application. |
| Payment3DS | **3-D Secure** authentication provides an additional security layer for online card transactions. If the merchant account is enabled for 3-D Secure, all charge transactions initiated by their API will by default go through the 3-D Secure process. Used to submit [3-D Secure]<!--(?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)--> transaction to our application. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)

---