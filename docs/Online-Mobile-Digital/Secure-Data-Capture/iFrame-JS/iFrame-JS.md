---
tags: [Online, Card Not Present, Secure Data Capture, iFrame]
---

# Secure Data Capture - iFrame v2 Solution

Commerce Hub's iFrame allows E-commerce merchants to create payment data via a payment `sessionId`. Cardholder data is submitted during the iFrame request and is only saved in Commerce Hub. The process is completed solely via iFrames, thereby allowing merchants to offload payment processing of card data to Commerce Hub. The merchant website can then pass the `sessionId` in a charges/tokens request as the payment source.

Secure Data Capture v2 iFrame SDK works by injecting individual iFrames for each payment field *(card number, security code, etc.)* allowing them to be composed with other elements to create richer and more customizable UI components. This allows full customization on the merchant's page and hosting as little as possible within the iFrame itself. The iFrames are injected into parent elements on the webpage which can be configured individually per field. The creation and manipulation of these iFrames is all handled via the SDK from your JavaScript code.

### Benefits

Allows a merchant an easy and secure way to embed a payment form into a website. Commerce Hub iFrame integration makes it simple to submit the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

### Transaction Flow

1. The customer navigates to checkout page of the merchant's website.
2. The customer's browser loads the Commerce Hub iFrame SDK.
3. The Commerce Hub SDK builds and renders an iFrame with a card form that allows the customer to initiate the payment session.
4. The customer's details are entered and stored against a sessionID within Commerce Hub on form submit.
5. Upon a successful card capture, the merchant's website will attempt to process the charges/tokens transaction via the merchant's backend server.
6. Commerce Hub sends the transaction response to the merchant's website.

---

## Integration

<!-- type: row -->

<!-- type: card
title: iFrame Integration Guide
description: Begin integration with Commerce Hub's iFrame solution.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md
-->

<!-- type: card
title: iFrame Customization
description: Customize the language and CSS for Commerce Hub's iFrame solution.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md
-->

<!-- type: card
title: iFrame Event Handling
description: Support external interactions of the card form for Commerce Hub's iFrame solution.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md
-->

<!-- type: card
title: iFrame Methods
description: Methods used to acquire an instance of the payment form.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Methods.md
-->

<!-- type: row-end -->

---

### Additional Security Settings

The following security settings are recommended to limit the potential for fraudulent activity on your Commerce Hub integration.

### Recommendations

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

### Browser Support

Only modern browsers are supported, legacy browsers pose additional security concerns as they do not receive security patches *(this includes IE11)*. Additionally, arrow functions, promise, and `window.crypto.subtle` *(SubtleCrypto API)* JavaScript functions must all be supported. Arrow functions are required in order to exclude less-secure browsers from being supported.

---
