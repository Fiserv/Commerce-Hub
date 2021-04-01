# Payment.JS Integration

## Overview

During the form submission the client library, loaded into the parent window, sends one of the iframes a clientToken (for authentication with the service) and a RSA public key (asymmetric key pair). This iframe then collects the data hidden in the other iframes and encrypts the card number, expiration date, and cvv (the other fields are transferred without data layer encryption due to RSA message limits). This iframe then makes an API call to the Payment.js service for tokenization.

Assuming the customer is using a browser with modern cross-origin security controls, and these controls are not compromised by a browser defect, it will not be possible for non-Payment.js code to steal the data hidden in these iframes as the card number, expiration date, and cvv in particular never escape into the parent window in an unencrypted form.

When the tokenization request is sent out, only the already encrypted data will appear in the browser's network log.

<!-- theme:info -->
>The merchant's gateway credentials are never sent to the browser (encrypted or otherwise); The Payment.js client library utilizes a "clientToken" to associate the tokenization API call sent from the browser with credentials passed directly from merchant server to Payment.js server.

## Additional Security Settings

The following recommendations are to limit potential for fraudulent activity on your Payment.js page.

**Recommendations**

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](../../Guides-Info/Fraud/Fraud-Settings.md) for the business type or payment flow

## Next Steps

- [Sequence Flow](Sequence-Flow.md)