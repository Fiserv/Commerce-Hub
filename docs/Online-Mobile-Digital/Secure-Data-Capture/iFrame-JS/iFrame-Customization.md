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

## Styling

The iFrame styling enhances the config object to include a structured CSS style object that is transformed into CSS text and integrated into the head element of the iframe DOM as a style tag. 

The following code snippet shows a sample configuration and how it can be used to target individual elements:

```java

const fiservConfig = {
  css: {
    styles: {
      base: {
        body: {
          "font-style": "italic",
          p: {
            "background-color": "whitesmoke",
            "padding": "10px",
            "border": "lightgray dashed 2px",
            "font-style": "normal",
            "font-family": "Courier New",
            "font-size": "12px",
            ":hover": {
              "background-color": "lightgray",
              "border": "darkgray dashed 2px"
            }
          }
        },
        form: {
          input: {
            margin: "0 0 10px 0",
            "box-shadow": "3px 3px lightgray",
            "::placeholder": {
              "color": "lightgray",
              "font-style": "italic",
              "font-size": "12px"
            },
            ":disabled": {
              "border": "solid red 2px"
            },
            ":focus": {
              "::placeholder": {
                "color": "orange"
              }
            },
            ":-webkit-autofill": {
              "box-shadow": "5px 5px darkorange"
            },
            ".sbutton": {
              "border-right": "solid 15px purple"
            },
            ":nth-of-type(2)": {
              "border-right": "solid 15px pink"
            },
            ".sinput.slname": {
              "border-right": "solid 15px magenta"
            }
          },
          "input[type=submit]": {
            "margin": "10px 0 0 0 "
          }
        }
      },
      media: [
        {
          query:
            "@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)",
          form: {
            input: {
              "box-shadow": "3px 3px cyan"
            }
          }
        },
        {
          query:
            "@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2)",
          form: {
            input: {
              "box-shadow": "3px 3px gold"
            }
          }
        }
      ]
    }
  }
};

```

The fiservConfig.css.styles object allows the developer to target specific elements and define properties without having to duplicate query selectors. Consider the following example

```css

styles: {
 base: {
  form: {
    input: {
      margin: "0 0 10px 0",
      "box-shadow": "3px 3px lightgray",
      ":focus": {
        "::placeholder": {
           color: "orange"
        }
      }
    }
  }
}
```
---

## See Also

- [iFrame Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md)
- [iFrame Request Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
