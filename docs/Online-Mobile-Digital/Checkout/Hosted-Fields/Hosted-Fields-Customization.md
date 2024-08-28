---
tags: [Online, Card Not Present, Checkout, Hosted Fields, iFrame]
---

# Checkout: Hosted Fields customization

Commerce Hub supports customization of iFrame elements to match the merchant's website for a seamless payment and checkout experience. The merchant can override the elements of the iFrame including [CSS](#custom-css-styling), [font](#custom-fonts), and field configuration for [supported card brands](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-PaymentCard.md), [gift cards](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Gift.md) and [checks *(ACH)*](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-PaymentCheck.md).

**Major features:**

- Support for different variations on card fields *(i.e. dropdown or text input)*
- Support for CSS stylesheet injection into the iFrames
- Support for applying custom fonts to the iFrame input fields
- Support for custom placeholder or dropdown option text enabling easier internationalization
- Support for brand identification as well as restricting the allowed brands for payment
- Support for automatic field validation
- Support for masking of card number and security code
- Support for auto-formatting of card number and card expiry

---

## Custom CSS styling

The stylesheet can be configured to be dynamically setup for each field iFrame by passing the CSS in JSON format. The JSON-formatted stylesheet is validated for safety against a whitelist and only the portions that fail this validation are dropped without affecting the rest of the stylesheet or overall form rendering.

<!-- theme: info -->
> Most standard CSS properties as well as some vendor-specific properties are included in the whitelist.

The `id` and `name` attributes of each rendered input or select element inside the iFrames will be assigned to the field identifier.

<!-- theme: info -->
> Custom [font configuration](#custom-fonts) must be submitted in a specific format for security reasons.

Example of payment form CSS customization in `createPaymentForm`.

```json
{
  "css": {
    "input, select": {
      "font-size": "16px",
      "color": "#00a9e0",
      "font-family": "testing-testing"
    },
    ":focus": {
      "color": "#00a9e0"
    },
    ".validCssClass": {
      "color": "#43B02A"
    },
    ".invalidCssClass": {
      "color": "#C01324"
    },
    "@media screen and (max-width: 700px)": {
      "input": {
        "font-size": "18px"
      }
    },
    "input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0 50px white inset"
    },
    "input:focus:-webkit-autofill": {
      "-webkit-text-fill-color": "#00a9e0"
    },
    "input.valid:-webkit-autofill": {
      "-webkit-text-fill-color": "#43B02A"
    },
    "input.invalid:-webkit-autofill": {
      "-webkit-text-fill-color": "#C01324"
    },
    "input::placeholder": {
      "color": "#aaa"
    },
    "nameOnCard": {
      "font-size": "15px"
    }
  }
}
```

---

## Custom fonts

Custom fonts can optionally be provide and used in the field iFrames. The `font` configuration object allows you to configure the custom font's details. This is particularly useful for maintaining brand consistency.

If the `font` configuration object is provided, all sub-fields must be provided and pass validations or the custom font is ignored. Fonts are not automatically applied and must be referenced from the configured [CSS](#custom-css-styling) via the `font-family` CSS property.

<!-- theme: info -->
> If the `font-family` of the configured font matches a font already on the user's device, the local font is given preference over the configured one to minimize potential risk to users.

<!--
type: tab
titles: JSON Example, Variables
-->

Example of payment form font customization in `createPaymentForm`.

```json
{
  "font": {
    "data": "<BASE_64_OF_FONT_FILE_GOES_HERE_WITHOUT_BRACKETS>",
    "family": "testing-testing",
    "format": "font/woff",
    "integrity": "<BASE_64_SHA256_OF_DATA_FIELD_VALUE_GOES_HERE_WITHOUT_BRACKETS>"
  }
}
```

<!--
type: tab
-->

| Field | Description |
| ----- | ----------- |
| `data` | The base64 encoded SHA256 of this value must match the `integrity` field. |
| `family` | The `font-family` property value for use in configured [CSS](#custom-css-styling) styles  |
| `format` | Font MIME type. ***Valid Values:** font/otf, font/ttf, font/woff, font/woff2* |
| `integrity` | Compared against a dynamically computed value of the data provided in the `data` field; if there isn't a match the custom font is ignored |

<!-- type: tab-end -->

---

## See Also

- [Create an iFrame Request](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Request.md)
- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [iFrame Event Handling](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md)
- [iFrame Methods](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Methods.md)

---
