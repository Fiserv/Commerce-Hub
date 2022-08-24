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

The default iFrame JS styling is based on the ADA guidelines (link to ADA guidelines) and enhances the config object to include a structured CSS style object that is transformed into CSS text and integrated into the head element of the iframe DOM as a style tag. Developers can override the default styling by providing a style definition as part of the `fiservConfig` object.

<!-- theme: warning -->
> Support for certain CSS properties/selectors have been restricted for security reasons.

Following are the two attributres of `configFiserv` object:

| Attributes | Description |
|------|-------|
| `base` | base styling for the iframe on all device sizes |
| `media` | device based styling rules that override the base styling rules when the current device matches the defined media query | 


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


### Standard Tags

The following list outlines the standard card form tags that do not change and should form the basis of core media queries:

- app-root
- app-card-form
- app-select-expiry
- app-card-number
- app-input-card (used for CVV and card holder)
- app-submit-button


### CSS Whitelist
The following list outlines the list CSS properties that are supported by the iframe:

```css

const CSS_PROPERTY_WHITELIST = Object.freeze({
  "-moz-appearance": true,
  "-moz-osx-font-smoothing": true,
  "-moz-tap-highlight-color": true,
  "-moz-transition": true,
  "-webkit-appearance": true,
  "-webkit-font-smoothing": true,
  "-webkit-tap-highlight-color": true,
  "-webkit-transition": true,
  "box-shadow": true,
  "-webkit-box-shadow": true,
  "-webkit-text-fill-color": true,
  "background-color": true,
  "appearance": true,
  "color": true,
  "margin": true,
  "border": true,
  "border-bottom": true,
  "border-left": true,
  "border-right": true,
  "border-top": true,
  "border-color": true,
  "border-style": true,
  "font-style": true,
  "font-family": true,
  "font-size": true,
  "font-weight": true,
  "padding": true
});

```
### Unsupported CSS

iFrame solution does not support `input[value='*']` query selector as it poses a security risk by letting the attackers inject css that calls a remote URL when the input matches a certain value. If the injected remote url is a unique URL per input value, the attacker can have full or partial access to the individual content. To prevent this, Commerce Hub implements a filter that bypasses this query selector that match a specific regex. 

To mitigate the risk of a CSS exfiltration attack, `[url\(.*\]` incorporates a CSS property value filter which blocks certain css values. 

---

## See Also

- [Create an iFrame Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md)
- [iFrame Event Listener](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
