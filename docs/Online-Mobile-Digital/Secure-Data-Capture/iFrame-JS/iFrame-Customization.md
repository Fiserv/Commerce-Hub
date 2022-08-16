---
tags: [Online, Card Not Present, Secure Data Capture, iFrame]
---

# Secure Data Capture - iFrame Customization

Commerce Hub supports customization of iFrame elements to match the merchant's website for a seamless payment and checkout experience. The merchant can override the elements of the iFrame including [language](#languages), and the [theme and font](#theme-and-font).

---

## Languages

iFrame is available for the English (United States/US) language in Commercehub SDK JS v1. The locale is captured automatically from the browser by the solution on page load. You can also provide your own translations by including a languages attribute as part of your form configuration object creation.

The following example shows all the text labels that can be overridden for a particular language/locale:

```java

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

## CSS Styling

The default iFrame styling is based on the ADA guidelines (link to ADA guidelines) and enhances the config object to include a structured CSS style object that is transformed into CSS text and integrated into the head element of the iframe DOM as a style tag. Developers can override the default styling by providing a style definition as part of the `fiservConfig` object.

<!-- theme: warning -->
> Support for certain CSS properties/selectors have been restricted for security reasons.

The following table outlines the attributes of the `fiservConfig.css.styleConfig` object:

| Attributes | Description |
|------|-------|
| `base` | base styling for the iframe on all device sizes |
| `media` | device specific styling rules that override the base styling rules when the current device matches the defined media query | 


The following code snippet shows a sample styling configuration:

```java

const fiservConfig = {
   "css": {
      "styles": {
         "base": {
            "app-root": {
               "font-style": "italic",
               "app-card-number": {
                  "background-color": "whitesmoke",
                  "font-style": "normal",
                  "font-family": "Courier New",
                  "font-size": "12px",
                  ":hover": {
                     "background-color": "lightgray",
                     "border": "darkgray dashed 2px"
                  }
               }
            },
            "app-card-form": {
               "app-input-card": {
                  "box-shadow": "3px 3px lightgray"
               }
            }
         },
         "media": {
            "@media only screen and (min-device-width: 768px) and (max-device-width: 1024px)": {
               "app-card-form": {
                  "app-input-card": {
                     "box-shadow": "3px 3px cyan"
                  }
               }
            },
            "@media only screen and (min-device-width: 320px) and (max-device-width: 480px)": {
               "app-card-form": {
                  "app-input-card": {
                     "box-shadow": "3px 3px gold"
                  }
               }
            }
         }
      }
   }
};

```

---

### Standard Tags

In order to achieve the desired branding, merchants will need to target specific elements within the HTML DOM and apply custom styles to those elements. Commerce Hub will maintain the current HTML structure, however between our releases, custom CSS query selectors may not work if targeting HTML elements are not coded correctly. 

- Use standard tags, ids or names when targeting HTML elements
- Don't target classes if it can be avoided
- With the exception of the standard tags, do not assume the HTML contents and structure will never change
- Keep query selectors short and concise, example: use `input[type='submit']` instead of `body form div input[type='submit']`

```css

-body
|-app-root
  |-app-card-form
    |-app-card-number form
    |-app-card-number
      |-Input element: id = cardNumber, name = ccNumber
    |-app-select-expiry
      |-Mat-select element (Month): id = cardExpiryMonth, name = ccExpMonth
      |-Mat-select element(Year): id = cardExpiryYear, name = ccExpYear
    |-app-input-card
      |-Input element: id = cardSecurityCode, name = ccSecurityCode    
      |-Input element: id = cardHolder, name = ccName
    |-app-submit-button
      |-Button element: id = submitButton name = btnSubmit 

```

---

### Supported Properties

The following block outlines the common element tags, identifiers, and names that Commerce Hub guarantees will not change between our minor releases.

- -moz-appearance
- -moz-osx-font-smoothing
- -moz-tap-highlight-color
- -moz-transition
- -webkit-appearance
- -webkit-font-smoothing
- -webkit-tap-highlight
- color
- -webkit-transition
- box-shadow
- -webkit-box-shadow
- -webkit-text-fill-color
- background-color
- appearance
- color
- margin
- border
- border-bottom
- border-left
- border-right
- border-top
- border-color
- border-style
- font-style
- font-family
- font-size
- font-weight
- padding

---

### Security Restrictions

Commerce Hub implements security restrictions that prevent attackers from injecting or performing exfiltration attacks in the iFrame solution.

- `input[value='*']` query selector: Poses a security risk by allowing attackers to inject css that calls a remote URL when the input matches a certain value. If the injected remote URL is a unique URL per input value, the attacker can have full or partial access to the individual content.  
- `[url\(.*\]` property: Mitigates the risk of a CSS exfiltration attack.

---

## See Also

- [Create an iFrame Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md)
- [iFrame Event Listener](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)
- [iFrame Event Listener](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md)

---
