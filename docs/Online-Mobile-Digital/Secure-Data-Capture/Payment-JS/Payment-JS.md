---
tags: [Online, Card Not Present, Secure Data Capture, Payment JS]
---


# Seacure Data Capture - JS Solution

Commerce Hub JS allows E-commerce merchants to embed a JavaScript control within their application while still allowing merchants full control over design and card entry form of their website _(unlike Hosted Payment Page and [iFrame](docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) solutions)_. The JavaScript call sends payment information directly to Commerce Hub and returns a payment `sessionId`. The merchant website can then pass the `sessionId` in a charges/tokens request as the payment source.

### Benefits

Allows a merchant an easy and secure way to embed a payment form into a website while maintaining their look and feel. Commerce Hub JS makes it simple to submit the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

#### Transaction Flow

1. The customer navigates to checkout page of the merchant's website.
2. The merchant's website loads the Commerce Hub SDK.
3. The Commerce Hub SDK builds and renders a card form that allows the customer to initiate the payment session.
4. The customer's details are entered and stored against a sessionID within Commerce Hub on form submit.
5. Upon a successful card capture, the merchant's website will attempt to process the charges/tokens transaction via the merchant's backend server.
6. Commerce Hub sends the transaction response to the merchant's website.

---

## Integration

<!-- type: row -->

<!-- type: card
title: JS Integration Guide
description: Begin integration with Commerce Hub's JavaScript SDK solution.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Request.md
-->

<!-- type: card
title: JS Customization
description: Customize the language, theme, and font for Commerce Hub's JavaScript SDK solution.
link: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Customization.md
-->

<!-- type: row-end -->

---

## Additional Security Settings

The following steps are recommended to limit the potential for fraudulent activity on your Commerce Hub integration.

**Recommendations**

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

## See Also

- [Create a Payment Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Request.md)
- [Customize Payment Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Customization.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
