# iFrame JS Customization

The beginning of an awesome article...

### Languages

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


