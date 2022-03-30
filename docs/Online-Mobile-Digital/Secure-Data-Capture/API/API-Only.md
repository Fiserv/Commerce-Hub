# Merchant Managed Secure Data Capture

<!-- theme: danger -->
> We are enhancing Commerce Hub to include API Only integration support and the documents related to the features will be released soon.

Commerce Hub allows E-commerce merchants to manage the design and form of their website (unlike [Hosted Payment Page](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Hosted-Payment-Page/Hosted-Payment-Page.md) and [iFrame](docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) solutions). The merchant handles encrypting the data from the form and makes a direct API call with the payment information directly to Commerce Hub to receive a payment nonce `sessionId` (one-time use token). The merchant website can then pass the `sessionId` in a charges/tokens request as the payment source.

### Benefits

Allows a merchant an easy and secure way to manage and encrypt the payment data on their website. Commerce Hub makes it simple to submit the payment credentials without collecting, processing, or being able to view those payment credentials in their untokenized form, lowering the PCI compliance requirements.

- security/credentials: responsible for creating a payment session.
- card-capture: responsible for capturing encrypted card details.
- charges: responsible for decrypting captured card details and then charging based on a payment session.
- tokens: responsible for decrypting captured card details and then generating a token based on a payment session.

---

## Additional Security Settings

The following recommendations are to limit potential for fraudulent activity on your Commerce Hub JS integration.

**Recommendations**

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

## See Also
- Secure Data Capture
