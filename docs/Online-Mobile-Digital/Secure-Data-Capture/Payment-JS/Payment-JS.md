---
tags: [Online, Card Not Present, Secure Data Capture, Payment JS]
---


# Secure Data Capture - JavaScript v2 Solution

Commerce Hub JavaScript _(JS)_ solution provides E-commerce merchants an API client that handles the encryption of customer data within their application while still allowing merchants full control over design and payment form of their website _(unlike Hosted Payment Page and [iFrame](docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) solutions)_. The JavaScript call sends the customer's payment information directly from the end-user's browser, thereby allowing merchants to offload payment processing of secure data to Commerce Hub. The merchant website can then pass the `sessionId` in a charges/tokens request as the payment source.


### Benefits

Allows a merchant an easy and secure way to integrate with Commerce Hub through an API client, while maintaining their look and feel. Commerce Hub JS makes it simple to submit the payment information without collecting, processing, or being able to view those details in their untokenized form, lowering the PCI compliance requirements.

#### Transaction Flow

1. The customer navigates to checkout page of the merchant's website.
2. The merchant's website loads the Commerce Hub SDK.
3. The merchant's website builds and renders a form that allows the customer to initiate the payment session.
4. The merchant sends a credentials request to their backend server to start a user session via Commerce Hub. This will return the security credentials as well as the `sessionId` the payment details will be associated with.
5. The SDK encrypts the customer data and initiates the capture request using the obtained security credentials.
6. Upon a successful capture, the merchant's website will attempt to process the charges/tokens transaction via the merchant's backend server using the `sessionId`.
7. Commerce Hub sends the transaction response to the merchant's website.

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

The following security settings are recommended to limit the potential for fraudulent activity on your Commerce Hub integration.

### Recommendations

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---
