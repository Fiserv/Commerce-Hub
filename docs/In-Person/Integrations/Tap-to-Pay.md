---
tags: [In-Person, Card Present, Encrypted Payments, Tap to Pay, Mobile, Wallet, Contactless]
---

# Mobile SDK integrations

Commerce Hub offers a robust Mobile SDK to seamlessly integrate payment processing into your Android or iOS application. Get started quickly and enhance your app's functionality with Commerce Hub's Mobile SDK.

**Our SDK provides:**

- **Easy integration:** Simplify the process of connecting with our APIs.
- **Comprehensive documentation:** Access detailed guides and examples.
- **Secure transactions:** Ensure safe and reliable payment processing.
- **Support for multiple payment methods:** Accept various payment options effortlessly.

---

## Supported features and payment methods

Integrations with our Mobile SDK has some limitations compared to a direct API with the supported features, payment methods, entry modes, and cardholder verification methods.

| Function | Android | iOS |
| ----- | :-----: | :-----: |
| Payments | &#10004; | &#10004; |
| Offline payments | &#10060; | &#10060; |
| Refunds | &#10004; | &#10004; |
| Transaction inquiry | &#10004; | &#10004; |
| Contactless | &#10004; | &#10004; |
| PIN | &#10060; | &#10004; |
| Signature | &#10060; | &#10060; |

---

## Tap to Pay overview

Tap to Pay Services are offered using Commerce Hub's Terminal API SDKs for both Android and iOS. Tap to Pay allows merchants to accept contactless payments using a supported device or a partner-enabled app. Tap to Pay allows the merchant's app to accept payments from contactless credit or debit cards, digital wallets, smartwatches, and smartphones. No additional hardware is required to accept contactless payments through Tap to Pay, so merchants can accept payments from anywhere. Tap to Pay is offered using Commerce Hub's Terminal API SDKs for both Android and iOS.

**Key benefits:**

Tap to Pay allows merchants to accept contactless payments using a supported device or a partner-enabled app. Tap to Pay allows the merchant's app to accept payments from contactless credit or debit cards, digital wallets, smartwatches, and smartphones. No additional hardware is required to accept contactless payments through Tap to Pay, so merchants can accept payments from anywhere.

**How it Works:**

1. The merchant initiates a transaction from their devices app.
2. The customer taps their contactless payment instrument on the device.
3. The merchant's app submits the payload to Commerce Hub's Terminal API SDK.
4. Commerce Hub's SDK sends the payment information for processing.
5. Commerce Hub attempts to process the transaction and sends the response to the merchant's app.

---

## Integration methods

Select the appropriate Terminal API SDK to quickly begin integration with Commerce Hub and accept transactions.

<!-- type: row -->

<!-- type: card
title: Tap to Pay on Android
description: Integrate your POS app with the Commerce Hub's Terminal SDK for Android to make Tap to Pay on Android transactions.
link: ?path=docs/In-Person/Integrations/Terminal-API/Android-TTP.md
-->

<!-- type: card
title: Tap to Pay on iPhone
description: Integrate your POS app with the Commerce Hub's Terminal API SDK for iOS to make Tap to Pay on iPhone transactions.
link: ?path=docs/In-Person/Integrations/Terminal-API/iPhone-TTP.md
-->

<!-- type: row-end -->

---
