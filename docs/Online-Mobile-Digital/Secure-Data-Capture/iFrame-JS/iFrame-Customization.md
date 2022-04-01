---
tags: [carat, commerce-hub, enterprise, online, card-not-present, secure-payment-form, payment-js, tokenization]
---
# iFrame Customization

Commerce Hub supports customization of iFrame elements to match the merchant's website for a seamless payment and checkout experience. The merchant can override the elements of the iFrame including [language](#languages), and the [theme and font](#theme-and-font).

---

## Languages

iFrame is available for the English (United States/US) language in Commercehub SDK JS v1. The locale is captured automatically from the browser by the solution on page load.

The merchant can also provide your own translations by including a languages attribute as part of your form configuration object creation. 


The following example shows all the text labels that can be overridden for a particular language/locale:

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


## Theme and Font

For iFrame JS, the styling is set by default, based off of ADA guidelines. (Link to ADA guidelines)


#### Overriding Elements
The following elements can be overridden:

- **Primary Color Theme:** changes the main color, i.e. highlight color, font color, button color (when enabled). Hexadecimal only
- **Contrast Color Theme:** button font color. Hexadecimal only
- **Fields Font Family:** font used on the form. Supported fonts: NotoSans, NotoSerif, OpenSans, Roboto, RobotoMono
- **Button Font Size:** size of the text font on the button.
- **Input Text Font Size:** size of the rest of the text font.

``` php
<html>
    <head>
        <meta charset="utf-8">
        <script id="commercehub" src="https://cert.api.fiservapps.com/ch/js/commercehub-client-sdk.js"></script>
    </head>
    <body>
        <div id="payment-saq-a-form-div"></div>
        <script>
            const authorization = '50e56404-4595-41b0-a5e7-44b9e4e6569b';
            const apiKey = '1951fe5b30e34cdaad758b8874140872'; 
            const formConfig = {
                "merchantId": '100204342250',
                "publicKey": 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCUYMJPHx8HLM1hUGNr1WOteYFt+PC0RZTpSeOcMhyQreTcfSwNi75wRR0k+QvMk4u8fm8A/Vq7tRU+LRbSTiFuSDJqszQGybm1LWoDoYuTD3QkF8r3Ej1VkhR7nBB8jlK+tpbWsigF3PeWUmfVEIA/qfLKhNDpUY71lyw8pxZTfwIDAQAB=',
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

- [Payment JS Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md)
- [iFrame JS Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md)
- [iFrame Request Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md)
