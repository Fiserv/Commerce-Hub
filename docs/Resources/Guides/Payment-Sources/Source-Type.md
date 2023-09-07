---
tags: [Payment Source]
---

# Payment Source Types

The variable `sourceType` is used to determine the payment instrument of the transaction. Depending on the payment source the `sourceType` and request variables change. 

## Payment Cards

**Payment Cards** are issued by financial institutions and banks to the customers. Customers use the card to pay online or in-person. *PaymentCard* is used to submit a credit or debit card, [private label card](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md), gift card _(Prepaid or Stored Value)_ or [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) transaction to our application. Commerce Hub requires all payment cards to be encrypted using [multi-use public key _(MUPK)_](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).

Tabs for 

<!--
type: tab
titles: PaymentCard, PaymentCard Encrypted, PaymentEMV, PaymentTrack
-->

Unencrypted [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) is only supported in our sandbox environment for [testing purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Test-Scripts.md).

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    }
  }
}
```

<!--
type: tab
-->

PaymentCard is used when submitting manual entry online or in-person transactions to Commerce Hub using a [multi-use public key _(MUPK)_](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).

#### Multi-Use Public Key

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000023"
    }
  }
}
```

#### Terminal Encryption

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "deviceType": "INGENICO",
      "keyId": "88000000023"
    }
  }
}
```

<!--
type: tab
-->

[PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md) is used to submit a EMV chip and PIN transaction to our application.

```json
{
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS....",
      "deviceType": "INGENICO",
      "keyId": ""
    }
  }
}
```

<!--
type: tab
-->

Unencrypted [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md) is only supported in our sandbox environment for [testing purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Test-Scripts.md).

#### Unencrypted Track
```json
{
  "source": {
    "sourceType": "PaymentTrack",
    "track1Data": "B4000340099900505^John/Doe ^22251110000123000"
  }
}
```

#### Terminal Encryption

```json
{
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "deviceType": "INGENICO",
      "keyId": "88000000023"
    }
  }
}
```

<!-- type: tab-end -->

---

## Digital Wallets

description apple pay, google pay, samsung pay, paypal, etc.

tabs for ApplePay, GooglePay, DecryptedWallet


| [ApplePay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md) | **Apple Pay** is a mobile payment and digital wallet service by Apple Inc. that allows users to make payments in person, in iOS apps, and on the web using Safari. Supported on the iPhone, Apple Watch, iPad, and Mac. Used to submit Apple Pay transaction to our application. |
| [GooglePay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md) | **Google Pay** is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. Used to submit Google Pay transaction to our application. |
| [DecryptedWallet](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) | **Decrypted Wallet** is used by the merchant when they are using their own certificate to encrypt the data received from Apple Pay, Google Pay or Samsung Pay while sending the transaction to the Commerce Hub. |

----

## Secure Payments

Secure payments like tokens and payment sessions help reduce the risk of PCI data compromise by encrypting the payment source.

| [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) | **Processor Token** is a created by submitting a token request using a payment source. **Network Token** is a created by submitting a request to the processing networks _(Visa, Mastercard, AMEX or Discover)_ using a payment card. Both can be used to submit a PaymentToken transaction to our application. |
| [PaymentSession](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md) | **Payment Session** is a nonce token obtained from a security credentials request. *PaymentSession* is used in iFrame and JavaScript Secure Data Capture integrations to submit a transaction to our application. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)

---
