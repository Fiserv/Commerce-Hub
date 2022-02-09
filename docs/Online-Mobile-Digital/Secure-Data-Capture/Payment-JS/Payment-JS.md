---
tags: [carat, commerce-hub, enterprise, online, card-not-present, secure-payment-form, payment-js, tokenization]
---

# JS Integration

<!-- theme: danger -->
> We are enhancing Commerce Hub to include JS integration support and the documents related to the features will be released soon.

#### Transaction Flow

1. The cardholder navigates to checkout page of the merchant's website.
2. The merchant’s browser loads the Commerce Hub iFrame SDK.
3. The Commerce Hub SDK builds and renders on the merchant's website with a card form that allows the cardholder to initiate the payment session.
4. The cardholder's details are entered and stored against a sessionID within Commerce Hub on form submit.
5. Upon a successful card capture, the merchant's website will attempt to process the charges/tokens transaction via the merchants backend server.
6. Commerce Hub sends the transaction response to the merchant’s website.

**Begin integration with [Commerce Hub JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md).**

## Additional Security Settings

The following recommendations are to limit potential for fraudulent activity on your Commerce Hub JS integration.

**Recommendations**

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

## Next Steps

- Create a Payment Request
- Customize Payment Form
- Error Handling
