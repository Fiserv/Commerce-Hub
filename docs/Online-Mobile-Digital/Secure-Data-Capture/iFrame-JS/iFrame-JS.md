---
tags: [carat, commerce-hub, enterprise, online, card-not-present, secure-payment-form, payment-js, tokenization]
---

# iFrame JS Integration

<!-- theme: danger -->
> We are enhancing Commerce Hub to include Payment.JS support and the documents related to the features will be released soon.


#### Transaction Flow

1. The cardholder navigates to checkout page of the merchant's website.
2. The merchant’s browser loads the Commerce Hub Javascript SDK.
3. The merchant's iFrame is rendered with the card form where the cardholder initiates the payment session.
4. The cardholder's details are stored against a sessionID in Commerce Hub.
5. The customer selects to complete the transaction using the sessionID. 
7. Commerce Hub attempts to process the transaction and sends the response to the merchant’s website.


**Begin integration with [iFrame JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md).**

---

## Additional Security Settings

The following recommendations are to limit potential for fraudulent activity on your Payment.js page. 

**Recommendations**

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

## See Also

- [Customize iFrame Payment Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md)
- [iFrame Request Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md)
- [Payment JS Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md)
