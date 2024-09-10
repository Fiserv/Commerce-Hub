---
tags: [Online, Card Not Present, Checkout, Hosted Fields, iFrame]
---

# Checkout: Hosted Fields

Commerce Hub's Hosted Fields solution provides an easy and secure way for E-commerce merchants to submit payment data via a payment `sessionId`. Customer data is submitted during the iFrame request and is only saved in Commerce Hub. The process is completed solely via iFrames, thereby allowing merchants to offload secure data processing, such as PCI and PII data, to Commerce Hub.

The merchant website can then pass the `sessionId` in a [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) or [Tokens API request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) using *PaymentSession* as the payment source.

**Key features:**

- **Integration:** Hosted fields can be placed anywhere on the checkout page.
- **Customization:** Full customization of design and user experience.
- **Secure data collection:** Collection of payment data and personally identifiable information *(PCI and PII data)*.
- **SDK integration:** Managed via the [Checkout SDK](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) from JavaScript code.

---

## How it works

Hosted Fields work by injecting individual iFrames for each payment field *(account number, security code, etc.)*. This allows them to be composed with other elements to create richer and more customizable UI components. The iFrames are injected into parent elements on the webpage, which can be configured individually per field. The creation and manipulation of these iFrames are all handled via the Checkout SDK from your JavaScript code.

---

## Interaction flow

1. The customer navigates to the checkout page of the merchant's website or mobile app.
2. The customer's browser loads the Commerce Hub Hosted Fields components based on the merchant's configuration.
3. The customer enters their information into the form fields and clicks a merchant hosted button to submit the form.
4. The merchant sends a credentials request to their backend server to start a user session via Commerce Hub. This will return the security credentials as well as the `sessionId` the payment details will be associated with.
5. The merchant's integration calls the SDK `submit` method to initiate the capture request using the obtained security credentials.
6. Upon a successful capture, the merchant's integration will attempt to process the API transaction via the merchant's backend server using the `sessionId`.
7. Commerce Hub sends the transaction response to the merchant's integration.

---

## Integrate with Hosted Fields

Begin an integration with Checkout Hosted Fields.

<!-- type: row -->

<!-- type: card
title: Integration guide
description: Begin integration with Commerce Hub's Hosted Forms Checkout solution.
link: ?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Request.md
-->

<!-- type: card
title: Customization
description: Customize the CSS and fonts of the payment form.
link: ?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md
-->

<!-- type: card
title: Event handling
description: Support external interactions of the payment form.
link: ?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md
-->

<!-- type: card
title: Methods
description: Methods used to acquire an instance of the payment form.
link: ?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Methods.md
-->

<!-- type: row-end -->

<!-- type: row -->

<!-- type: card
title: Accept card payments
description: Configure the form fields to accept credit and PINless debit cards.
link: ?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-PaymentCard.md
-->

<!-- type: card
title: Accept check payments
description: Configure the form fields to accept check (ACH) bank account payments.
link: ?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-PaymentCheck.md
-->

<!-- type: card
title: Accept gift card payments
description: Configure the form fields to accept gift cards.
link: ?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Gift.md
-->

<!-- type: card
title: HTML rendering examples
description: HTML examples of a payment form.
link: ?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-HTML-Examples.md
-->

<!-- type: row-end -->

---

### Additional Security Settings

The following security settings are recommended to limit the potential for fraudulent activity on your Commerce Hub integration.

- Enable Captcha as an available component
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

### Browser Support

Only modern browsers are supported, legacy browsers pose additional security concerns as they do not receive security patches *(this includes IE11)*. Additionally, arrow functions, promise, and `window.crypto.subtle` *(SubtleCrypto API)* JavaScript functions must all be supported. Arrow functions are required in order to exclude less-secure browsers from being supported.

---
