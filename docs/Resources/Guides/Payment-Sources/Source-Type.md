---
tags: [Payment Source]
---

# Payment Source Types

The variable `sourceType` is used to determine the payment instrument of the transaction in the `source` object. Depending on the payment source the `sourceType` and request variables change.

## Payment Cards

A payment card is used to submit a credit or debit card, [private label card](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md), [gift card](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) _(Prepaid or Stored Value)_ or [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) transaction to our application. Commerce Hub requires all payment cards to be encrypted using [multi-use public key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).

<!--
type: tab
titles: PaymentCard, PaymentEMV, PaymentTrack
-->

[PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) is used when submitting manual entry online or in-person transactions to Commerce Hub using a [multi-use public key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).

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

#### Unencrypted

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

[PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md) is used to submit a EMV chip and PIN transaction to Commerce Hub using [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md) or a [multi-use public key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md).

#### Terminal Encryption

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

#### Multi-Use Public Key

```json
{
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_1",
      "encryptionBlock": "fjzH9it7ukbeP6Fa4jdqAO/gCRvCMC2qVG5q9PbFTKmjQfxv35rqp3Bq5EkVwh5SOj/eSEeM.....",
      "encryptionBlockFields": "track1Data:34",
      "keyId": "88000000022",
      "deviceType": "INGENICO"
    }
  }
}
```

<!--
type: tab
-->

[PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md) is used to submit a Track 1 or Track 2 and PIN transactions to Commerce Hub using [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md) or a [multi-use public key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md).

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

#### Multi-Use Public Key

```json
{
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS....",
      "encryptionBlockFields": "track2Data:34",
      "keyId": "88000000022",
      "deviceType": "INGENICO"
    }
  }
}
```

#### Unencrypted

Unencrypted [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md) is only supported in our sandbox environment for [testing purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Test-Scripts.md).

```json
{
  "source": {
    "sourceType": "PaymentTrack",
    "track1Data": "B4000340099900505^John/Doe ^22251110000123000"
  }
}
```
<!-- type: tab-end -->

---

## Digital Wallets

Wallet transactions originate from a digital wallet either from a website or on a device _(e.g. Apple/iOS, Google/Android, and Samsung)_. Merchants can submit this data as either an encrypted or a decrypted request.

<!--
type: tab
titles: ApplePay, GooglePay, DecryptedWallet
-->

[ApplePay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md) is a mobile payment and digital wallet service by Apple Inc. that allows users to make payments in-person, in iOS apps, and on the web. Supported on the iPhone, Apple Watch, iPad, and Mac.

```json
{
  "source": {
    "sourceType": "ApplePay",
    "data": "hbreWcQg980mUoUCfuCoripnHO210lvtizOFLV6PTw1DjooSwik778bH....",
    "header": {
      "applicationDataHash": "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2",
      "ephemeralPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEvR....",
      "publicKeyHash": "KRsyW0NauLpN8OwKr+yeu4jl6APbgW05/TYo5eGW0bQ=",
      "transactionId": "31323334353637"
    },
    "signature": "MIAGCSqGSIb3DQEHAqCAMIACAQExDzANBglghkgBZQMEAgEFADCABgkqhki.....",
    "version": "EC_v1",
    "applicationData": "VEVTVA==",
    "applePayMerchantId": "merchant.com.organizationname.unitname.commonname"
  }
}
```

<!--
type: tab
-->

[GooglePay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md) is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches.

```json
{
  "source": {
    "sourceType": "GooglePay",
    "data": "{\"encryptedMessage\":\"NZF5Vs2YaI/t25L/1+dp6tuUOvra9.....\",\"ephemeralPublicKey\":\"BAhnPIWrCXWv/45GFK0mNAtQj.....\\u003d\",\"tag\":\"liBzKfGcO+FclHg7XuqRJxR.....\"}",
    "signature": "MIAGCSqGSIb3DQEHAqCAMIACAQExDzAN...",
    "version": "ECv2",
    "intermediateSigningKey": {
      "signedKey": "{\"keyExpiration\":\"1542323393147\",\"keyValue\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/1+3HBVSbdv+j7NaArdgMyoSAM43yRy.....\\u003d\\u003d\"}",
      "signatures": [
        {
          "items": "MEYCIQCO2EIi48s8VTH+ilMEpoXLFfkxAwHjfPSCVED/QDSHmQIhALLJmrUlNAY8hDQRV/y1iKZGsWpeNmIP+z+tCQHQxP0v"
        }
      ]
    }
  }
}
```

<!--
type: tab
-->

[DecryptedWallet](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) is used by the merchant when they are using their own certificate to encrypt the data received from Apple Pay, Google Pay or Samsung Pay while sending the transaction to Commerce Hub.

```json
{
  "source": {
    "sourceType": "DecryptedWallet",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    },
    "cavv": "01ade6ae340005c681c3a1890418b53000020000",
    "xid": "13456789",
    "walletType": "APPLE_PAY"
  }
}
```

<!-- type: tab-end -->

---

## Secure Payments

Secure payment sources like `PaymentToken` and `PaymentSession` help reduce the risk of PCI data compromise by encrypting the payment source.

<!--
type: tab
titles: PaymentToken, PaymentSession
-->

A [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is a created by submitting a token request using a payment source to Commerce Hub or is a created by submitting a request to the processing networks _(Visa, Mastercard, AMEX or Discover)_ using a payment card. Both can be used to submit a `PaymentToken` transaction to Commerce Hub.

```json
{
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "1234567890120019",
    "PARId": "1234",
    "declineDuplicates": true,
    "tokenSource": "TRANSARMOR",
    "card": {
      "expirationMonth": "03",
      "expirationYear": "2035"
    }
  }
}
```

<!--
type: tab
-->

[PaymentSession](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md) is a nonce token obtained from a security credentials request. _PaymentSession_ is used in [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md) integrations to submit a transaction to our application.

```json
{
  "source": {
    "sourceType": "PaymentSession",
    "sessionId": "df8c33d2-af27-4a3a-b7a0-61d4edf09cad"
  }
}
```

<!-- type: tab-end -->

---

## Pay by Bank

Commerce Hub allows merchants to securely process payments directly from a customer's bank account. Commerce Hub supports multiple integration methods allowing merchants can accept one-time and recurring payments while providing additional flexibility and convenience for customers.

<!--
type: tab
titles: PaymentCheck
-->

[PaymentCheck](?path=docs/Resources/Guides/Payment-Sources/Pay-By-Bank/Payment-Check.md) is used to submit a Pay by Bank _(ACH)_ transactions to Commerce Hub.

```json
{
  "source": {
    "sourceType": "PaymentCheck",
    "check": {
      "routingNumber": "123456789",
      "accountNumber": "8456234852689"
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Multi-Use Public Key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)

---
