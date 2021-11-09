# iFrame JS Customization

The beginning of an awesome article...

## Languages

iFrame is available for the English (United States/US) language in Commercehub SDK JS v1. The locale is captured automatically from the browser by the solution on page load.

You can also provide your own translations by including a languages attribute as part of your form configuration object creation. The following example shows all the text labels that can be overridden for a particular language/locale:

```javascript

 "languages": [
                {
                  "language": "en-US",
                  "cardNumber": {
                      "label": "[MO] Card Number",
                      "errors": {
                         "required": "[MO] Enter a valid card number.",
                         "mask": "[MO] Your card number is incomplete.",
                         "invalid": "[MO] Enter a valid card number."
                      }
                  },
                  "cardHolder": {
                     "label": "[MO] Name on Card",
                     "errors": {
                        "required": "[MO] Enter a valid name."
                      }
                  },
                  "cardSecurityCode": {
                     "label": "[MO] CVC",
                     "errors": {
                        "required": "[MO] Enter a valid CVC.",
                        "mask": "[MO] Your CVC is incomplete."
                      }
                  },
                  "cardExpiryDate": {
                     "label": "[MO] Expiry Date",
                     "errors": {
                        "before": "[MO] Date must be in the future.",
                        "invalid": "[MO] Enter a valid date.",
                        "required": "[MO] Enter a valid date."
                      }
                  },
                 "payButton": {
                   "label": "[MO] PAY",
                   "loading": "[MO] PROCESSING"
                  }
                }
           ]

```

---

## CSS

For iFrame JS, the styling is set by default, based off of ADA guidelines. (Link to ADA guidelines)

#### Field Overrides
There are 5 fields that can be overridden:

- **Primary Color Theme:** changes the main color, i.e. highlight color, font color, button color (when enabled). Hexadecimal only
- **Contrast Color Theme:** button font color. Hexadecimal only
- **Fields Font Family:** font used on the form. Supported fonts: NotoSans, NotoSerif, OpenSans, Roboto, RobotoMono
- **Button Font Size:** size of the text font on the button.
- **Input Text Font Size:** size of the rest of the text font.

``` php
<html>
    <head>
        <meta charset="utf-8">
        <script id="commercehub" src="..{commercehub-domain}../js/commercehub-client-sdk.js"></script>
    </head>
    <body>
        <div id="payment-saq-a-form-div"></div>
        <script>
            // Merchant will make a call to their own server which will in turn call ../security/credentials end point for creating a
            // payment session, merchant will receive details in the response, e.g. CLIENT_ACCESS_TOKEN, PUBLIC_KEY, etc.
            const authorization = 'CLIENT_AUTHORIZATION'; // merchant call to ../security/credentials to receive this
            const apiKey = 'CLIENT_API_KEY'; // merchant receives this during on-boarding process
 
            const formConfig = {
                "merchantId": 'MERCHANT_ID', // merchant receives this during on-boarding process
                "publicKey": 'PUBLIC_KEY', // merchant call to ../security/credentials to receive this
                "css": {
                    "primaryColorTheme": "#2D2D2D",
                    "contrastColorTheme": "#ffffff",
                    "fieldsFontFamily": "ROBOTO",
                    "buttonFontSize": "20px",
                    "inputTextFontSize": "20px"
                }
            };
            const form = new commercehub.Fiserv(formConfig, authorization, apiKey);
            form.loadPaymentForm("payment-saq-a-form-div");
        </script>
    </body>
</html>

```
---

## See Also

- Payment JS Integration
- iFrame Request Form
