---
tags: [Payment Source]
---

# Payment Source Types

The variable `sourceType` is used to determine the payment instrument of the transaction in the `source` object. Depending on the payment source the `sourceType` and request variables change.

---

## Payment cards

A payment card is used to submit a credit card, [debit card](?path=docs/Resources/Guides/Debit/Debit.md), [private label card](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md), [gift card](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) *(prepaid or stored value)*, or [Fleet Card](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Card.md) transaction to our application. Commerce Hub requires all payment cards to be encrypted using [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).

<!--
type: tab
titles: PaymentCard, PaymentEMV, PaymentTrack
-->

[PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) is used when submitting manual entry online or in-person transactions to Commerce Hub using a [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).

***PaymentCard* using Multi-Use Public Key:**

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

***PaymentCard* using terminal encryption:**

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

**Unencrypted *PaymentCard*:**

<!-- theme: caution -->
> Unencrypted *PaymentCard* is only supported in our sandbox environment for [simulation purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Simulator-Scripts.md).

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

[PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md) is used to submit an EMV chip *(PIN and PINless)* and contactless transaction to Commerce Hub using [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md) or a [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md).

**PaymentEMV using terminal encryption:**

```json
{
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS.....",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    }
  }
}
```

**PaymentEMV using Multi-Use Public Key:**

```json
{
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0369F3704834A12329F1002AB25",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "fjzH9it7ukbeP6Fa4jdqAO/gCRvCMC2qVG5q9PbFTKmj.....",
      "encryptionBlockFields": "track1Data:34",
      "keyId": "78001000062",
      "deviceType": "INGENICO"
    }
  }
}
```

<!--
type: tab
-->

[PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md) is used to submit a Track 1 or Track 2 and PIN transactions to Commerce Hub using [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md) or a [multi-use public key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md).

**PaymentTrack using terminal encryption:**

```json
{
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    }
  }
}
```

**PaymentTrack using Multi-Use Public Key:**

```json
{
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=q4TmiL1SSZC8QyBpj/....",
      "encryptionBlockFields": "track2Data:36",
      "keyId": "78001000062",
      "deviceType": "INGENICO"
    }
  }
}
```

**Unencrypted PaymentTrack:**

<!-- theme: caution -->
> Unencrypted [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md) is only supported in our sandbox environment for [testing purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Simulator-Scripts.md).

```json
{
  "source": {
    "sourceType": "PaymentTrack",
    "track2Data": "4445222299990007=14125025432198712345"    
  }
}
```
<!-- type: tab-end -->

---

## Digital wallets

Wallet transactions originate from a digital wallet either from a website or on a device *(e.g. Apple/iOS, Google/Android, and Samsung)*. Merchants can submit this data as either an encrypted or a decrypted request.

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

[DecryptedWallet](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) is used by the merchant when they are using their own certificate to encrypt the data received from Apple Pay or Google Pay when sending the transaction to Commerce Hub.

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

## Secure payments

Secure payment sources like `PaymentToken` and `PaymentSession` help reduce the risk of PCI data compromise by encrypting the payment source.

<!--
type: tab
titles: PaymentToken, PaymentSession
-->

A [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is a created by submitting a token request using a payment source to Commerce Hub or is a created by submitting a request to the processing networks *(Visa, Mastercard, AMEX or Discover)* using a payment card. Both can be used to submit a transaction to Commerce Hub.

```json
{
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "1234567890120019",
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

PaymentSession is a nonce token obtained from a [Security Credentials API request](?path=docs/Resources/API-Documents/Security/Credentials.md). *PaymentSession* is used in [Checkout integrations](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) to submit a transaction to our application.

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

[PaymentCheck](?path=docs/Resources/Guides/Payment-Sources/Pay-By-Bank/Payment-Check.md) is used to submit a Pay by Bank *(ACH)* and [Fleet Check](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Check.md) transactions to Commerce Hub.

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

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Multi-Use Public Key *(MUPK)*](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Supported Card Types](?path=docs/Resources/Master-Data/Card-Type.md)

---
