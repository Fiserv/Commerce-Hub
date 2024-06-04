---
tags: [Online, Card Not Present, Secure Data Capture, Payment JS]
---

# Secure Data Capture - JS Customization

The JavaScript or JS elements are set by default based on the ADA guidelines. Commerece Hub allows the merchant to customize the styling by setting a flag and apply their own styling. The merchant can override the elements of the JS including [language](#languages), and the [theme and font](#theme-and-font).

---

## Languages

Component/Hosted Fields is available for the English (United States/US) language in Commercehub SDK JS v1. The locale is captured automatically from the browser by the solution on page load. You can also provide your own translations by including a languages attribute as part of your form configuration object creation.

The following example shows all the text labels that can be overridden for a particular language/locale:

``` java
    "languages": [{
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
    }]

```

---


## Theme and Font

For iFrame JS, the styling is set by default, based off of [ADA guidelines](?path=https://www.ada.gov/2010ADAstandards_index.htm).


#### Overriding Elements
The following elements can be overridden:

- **form:** CSS class responsible for styling the "form" HTML element, where all the other elements are contained within.
- **input:** CSS class responsible for styling the "input" HTML element, where the user enters their card details.
- **label:** CSS class responsible for styling the "label" HTML element, where the descriptions/names above the input fields are shown.
- **button:** CSS class responsible for styling the "button" HTML element, only enabled once the input fields have valid entries.
- **container:** CSS class responsible for adding style to the HTML div's which contains the card form and button.
- **span:** CSS class responsible for adding style to the HTML div which contains the error messages for incorrect inputs.
- **divError:** CSS class responsible for adding style to the HTML div which contains the error messages for incorrect inputs.
- **inputWithValue:** CSS class responsible for styling the "input" HTML element, however, this is for the styling of entered values in those input fields.
- **labelError:** CSS class responsible for styling the "label" HTML element, however, this is for the styling for when errors occur.
- **materialTextfield:** CSS class responsible for adding style to the HTML nested div inside the button div..
- **inputError:** CSS class responsible for styling the "input" HTML element, where an error has occurred with entered values in the input fields.
- **spinner:** CSS class responsible for styling the "spinner" HTML div.
- **loadingContainer:** CSS class responsible for adding style to the HTML div's which contains the spinner.

``` java
    const classList = {
      "form": ["form-group"],
      "input": ["form-control"],
      "label": ["sr-only"],
      "button": ["btn", "btn-primary"],
      "container": ["container"],
      "span": ["sr-only"],
      "divError": ["form-group", "has-error"],
      "inputWithValue": ["form-control"],
      "labelError": ["sr-only", "has-error"],
      "materialTextfield": ["container-fluid"],
      "inputError": ["form-control", "has-error"],
      "spinner": ["sr-only"],
      "loadingContainer": ["container"]
    };

```
---

## See Also

- [JS Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md)
- [JS Request Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Request.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
