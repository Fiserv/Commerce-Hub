---
tags: [Online, Card Not Present, Checkout]
---

# Checkout Solutions

Commerce Hub offers [online, digital and mobile integration](?path=docs/Getting-Started/Getting-Started-Online.md) with our Checkout Solutions that provide the ability for merchants to offer a customized checkout. Our Checkout Solutions can be customized to meet the business branding requirements and ensure a consistent user experience, while maximizing the checkout conversion and keeping customer data secure.  Commerce Hub's Checkout solution provides for a range of solutions that provide design flexibility, ease of integration and the collection of secure data elements *(PCI and PII)*, with the ability to meet your PCI DSS compliance tolerance needs.

For more information about the Checkout Solutions and PCI DSS compliance, see the [Checkout: How it works](?path=docs/Online-Mobile-Digital/Checkout/Checkout-How-It-Works.md) article.

<!-- theme: caution -->
> To ensure PCI and security compliance, it is recommended to always use the latest version of Commerce Hub's SDK. Review the [Checkout version release notes](?path=docs/Online-Mobile-Digital/Checkout/Checkout-Version-Release.md) for additional details on version updates.

---

## Custom integrations

Begin a custom integration with Commerce Hub’s Checkout using our SDK components or APIs to customize the look and feel of your payment form.

<!-- type: row -->

<!-- type: card
title: APIs
description: Allows a merchant an easy and secure way to manage and encrypt the payment data on their website or customer's mobile device and send it to Commerce Hub's Capture API.
link: ?path=docs/Online-Mobile-Digital/Checkout/API/API-Only.md
-->

<!-- type: card
title: Hosted Fields
description: Allows a merchant an easy and secure way to embed a payment form into a website or customer's mobile device.
link: ?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields.md
-->

<!-- type: card
title: Paze
description: Add Paze to your payment options for secure and efficient transactions.
link: ?path=docs/Resources/Guides/Payment-Sources/Paze/Paze.md
-->

<!-- type: row-end -->

---

## Pre-built integrations

Use a pre-built Commerce Hub Checkout integration with our configuration tool to build a payment form. This form can be injected into your website or app, or loaded in a new window.

<!-- type: row -->

<!-- type: card
title: Hosted Pages
description: Allows a merchant to redirect their customer to a secure Commerce Hub Hosted Page to process a transaction.
link:
-->

<!-- type: card
title: Hosted Forms
description: Allows a merchant an easy and secure way to configure a payment form to be embedded into a website or customer's mobile device.
link:
-->

<!-- type: row-end -->

---

## Mobile integrations information

Commerce Hub's Checkout solutions are supported for mobile integrations through WebViews that can be served with a mobile device or through secure APIs that can be offered as client to server APIs from a native mobile application, as browser to server APIs from a HTML5 or REACT application or from as Server to Server APIs from a web or mobile app server.

Merchant's and developers that use a WebView for their mobile apps can qualify for SAQ A PCI compliance scope. Merchants that use a client to server or browser to server API can qualify for SAQ A-EP PCI compliance scope. And merchants that use server to server APIs can qualify for SAQ-D PCI compliance scope.

Mobile integrations are supported with the following conditions:

- The merchant's API should provide access to the web app via a native mobile browser or a WebView embedded within a native mobile app. See [Apple's iOS](https://developer.apple.com/documentation/webkit/wkwebview) or [Google's Android](https://developer.android.com/reference/android/webkit/WebView) documentation for additional details.
- Commerce Hub's Checkout solutions are responsive and should natively re-render to the customer's device screen size.
- When integrating with native iOS or Android SDKs, [Commerce Hub's API solutions](?path=docs/Resources/API-Documents/Use-Our-APIs.md) should be used.

---
