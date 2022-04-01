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
     "css": {
         "primaryColorTheme": "#2D2D2D",
         "contrastColorTheme": "#ffffff",
         "fieldsFontFamily": "ROBOTO",
         "buttonFontSize": "20px",
         "inputTextFontSize": "20px"
     }
 };
```
---

## See Also

- [Payment JS Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md)
- [iFrame JS Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md)
- [iFrame Request Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md)

---
