---
tags: [Online, Card Not Present, Secure Data Capture, iFrame]
---

# Secure Data Capture - iFrame v2 Customization

Commerce Hub supports customization of iFrame elements to match the merchant's website for a seamless payment and checkout experience. The merchant can override the elements of the iFrame including [CSS](#css), [font](#font), [supported card brands](#card-brands), and [field configuration](#field-configuration).

#### Major Features

- Support for different variations on card fields _(i.e. dropdown or text input)_
- Support for CSS stylesheet injection into the iFrames
- Support for applying custom fonts to the iFrame input fields
- Support for custom placeholder or dropdown option text enabling easier internationalization
- Support for brand identification as well as restricting the allowed brands for payment
- Support for automatic field validation
- Support for masking of card number and security code
- Support for auto-formatting of card number and card expiry

---

## CSS

The stylesheet can be configured to be dynamically setup for each field iFrame by passing the CSS in JSON format. The JSON-formatted stylesheet is validated for safety against a whitelist and only the portions that fail this validation are dropped without affecting the rest of the stylesheet or overall form rendering.

<!-- theme: info -->
> Most standard CSS properties as well as some vendor-specific properties are included in the whitelist.

The `id` and `name` attributes of each rendered input or select element inside the iFrames will be assigned to the [field identifier](#supported-fields).

<!-- theme: info -->
> Custom [font configuration](#font) must be submitted in a specific format for security reasons.

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

## Font

Custom fonts can optionally be provide and used in the field iFrames. The `font` configuration object allows you to configure the custom font's details. This is particularly useful for maintaining brand consistency.

If the `font` configuration object is provided, all sub-fields must be provided and pass validations or the custom font is ignored. Fonts are not automatically applied and must be referenced from the configured [CSS](#css) via the `font-family` CSS property.

<!-- theme: info -->
> If the `font-family` of the configured font matches a font already on the user's device, the local font is given preference over the configured one to minimize potential risk to users.

<!--
type: tab
titles: Variables, JSON Example
-->

| Field | Description |
| ----- | ----------- |
| `data` | The base64 encoded SHA256 of this value must match the `integrity` field. |
| `family` | The `font-family` property value for use in configured [CSS](#css) styles  |
| `format` | Font MIME type. _**Valid Values:** font/otf, font/ttf, font/woff, font/woff2_ |
| `integrity` | Compared against a dynamically computed value of the data provided in the `data` field; if there isn't a match the custom font is ignored |

<!--
type: tab
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

<!-- type: tab-end -->

---

## Supported Fields

The following table identifies the supported CSS fields.

<!-- theme: info -->
> No fields are required but at least one field must be configured.

| Field | Description |
| ----- | ----------- |
| `cardNumber` | The card number |
| `nameOnCard` | The full name of the cardholder as listed on their card. **Cannot** be used with `firstName` and `lastName` |
| `firstName` | The first name of the cardholder as listed on their card, requires `lastName` to be configured. **Cannot** be used with `nameOnCard` |
| `lastName` | The last name of the cardholder as listed on their card., requires `firstName` to be configured. **Cannot** be used with `nameOnCard` |
| `securityCode` | The card security code |
| `expiration` | Field that is auto-formatted for both the month and year portions of the card expiry in _MM/YY_ or _MM/YYYY_ format. **Cannot** be used with `expirationMonth` or `expirationYear` |
| `expirationMonth` | A dropdown field for the month portion of the card expiry. Requires `expirationYear`. **Cannot** be used with `expiration` |
| `expirationYear` | A dropdown field for the year portion of the card expiry, requires `expirationMonth` to be configured. **Cannot** be used alongside `expiration` |

---

## Field Configuration

Only a `parentElementId` is required, this is the id for the DOM element on the merchant's page where Commerce Hub will inject the iFrame for that field. If other field configuration properties fail validation, the portion of configuration that failed validation is ignored.

<!--
type: tab
titles: Variables, JSON Example
-->

| Field | Description |
| ----- | ----------- |
| `placeholder` | Placeholder text for the field |
| `dynamicPlaceholderCharacter` | Placeholder character for the field. Has no effect if `placeholder` isn't specified; must be one character in length  |
| `enableFormatting` | Controls if the card number should be auto-formatted with additional spaces while user types |
| `masking.character` | Controls card number masking and be one character in length |
| `masking.mode` | Controls [masking mode](#masking-mode) |
| `masking.shrunkLength` | Controls how many characters of the masking character will represent the masked portion of the input after shrinking is applied, must be a number |
| `optionLabels` | The text to display for each option in `expirationMonth` |

#### Masking Mode

| Valid Values | Description | cardNumber | securityCode |
| ------------ | ----------- | :--------: | :----------: |
| _NO_MASKING_ | Masking is fully disabled | &#10004; | &#10004; |
| _ALWAYS_MASK_EXCEPT_LAST_4_ | Each block of 4 digits entered will be masked in real time with final 4 left unmasked | &#10004; | |
| _ALWAYS_MASK_ALL_ | Digits entered will be masked in real time with most recently entered digit left unmasked until input loses focus | &#10004; | &#10004; |
| _BLUR_MASK_EXCEPT_LAST_4_ | Masking is applied when input loses focus; only last 4 digits left unmasked | &#10004; | |
| _BLUR_MASK_ALL_ | Masking is applied when input loses focus; all digits masked | &#10004; | &#10004; |
| _BLUR_MASK_EXCEPT_LAST_4_SHRINK_ | Masking is applied when input loses focus; only last 4 digits left unmasked; masked portion is shrunk down to `shrunkLength` with configured masking `character` | &#10004; | |
| _BLUR_MASK_ALL_SHRINK_ | Masking is applied when input loses focus; all digits masked; masked portion is shrunk down to `shrunkLength` with configured masking `character` | &#10004; | |

<!--
type: tab
-->

Example of payment form fields customization  in `createPaymentForm`.

```json
{
  "fields": {
    "cardNumber": {
      "parentElementId": "element-id-to-inject-iframe-inside-of-goes-here",
      "placeholder": "placeholder text goes here",
      "dynamicPlaceholderCharacter": "•",
      "enableFormatting": true,
      "masking": {
        "character": "•",
        "mode": "NO_MASKING",
        "shrunkLength": 4
      }
    },
    "nameOnCard": {
      "parentElementId": "element-id-to-inject-iframe-inside-of-goes-here",
      "placeholder": "Name On Card"
    },
    "firstName": {
      "parentElementId": "element-id-to-inject-iframe-inside-of-goes-here",
      "placeholder": "First Name"
    },
    "lastName": {
      "parentElementId": "element-id-to-inject-iframe-inside-of-goes-here",
      "placeholder": "Last Name"
    },
    "securityCode": {
      "parentElementId": "element-id-to-inject-iframe-inside-of-goes-here",
      "placeholder": "placeholder text goes here",
      "dynamicPlaceholderCharacter": "•",
      "masking": {
        "character": "•",
        "mode": "NO_MASKING"
      },
      "expiration": {
        "parentElementId": "element-id-to-inject-iframe-inside-of-goes-here",
        "placeholder": "MM / YY"
      },
      "expirationMonth": {
        "parentElementId": "element-id-to-inject-iframe-inside-of-goes-here",
        "placeholder": "Card Expiration Month",
        "optionLabels": [
          "01 - January",
          "02 - February",
          "03 - March",
          "04 - April",
          "05 - May",
          "06 - June",
          "07 - July",
          "08 - August",
          "09 - September",
          "10 - October",
          "11 - November",
          "12 - December"
        ]
      },
      "expirationYear": {
        "parentElementId": "element-id-to-inject-iframe-inside-of-goes-here",
        "placeholder": "Card Expiration Year"
      }
    }
  }
}
```

<!-- type: tab-end -->

---

## Supported Card Brands

Supported [card brands](?path=docs/Resources/Master-Data/Card-Type.md) are defined in `supportedCardBrands` field of the configuration object passed in `createPaymentForm`. The merchant can restrict the allowed brands to a subset of the supported card brands assigned to the configuration field as a string array of brand identifiers.

When the SDK has identified the card brand, or can no longer identify the card brand because of user input changes, the user-provided [event hook](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md#event-hooks) `onCardBrandChange` is called with this information.

<!-- theme: info -->
> `supportedCardBrands` is only for browser-side form validation and not all identifiable brands are supported by Commerce Hub _(CH)_ _(for example mir is not supported by Commerce Hub for processing but is supported by the SDK)_.

| Card Brand | CH Value | SDK Value |
| ----- | ----- | ----- |
| Visa | VISA | visa |
| Mastercard | MASTERCARD | mastercard |
| American Express | AMEX | american-express |
| Diners Club | DINERS | diners-club |
| Discover | DISCOVER | discover |
| JCB | JCB | jcb |
| Union Pay | UNION_PAY | unionpay |
| Maestro | MAESTRO | maeestro |
| Elo | N/A | elo |
| Mir  | N/A | mir |
| Hipercard | N/A | hiper |
| Hipercard | N/A | hipercard |

---

### Custom Card Brands

Custom card brands like [private label credit cards](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md) and [gift cards](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md), are defined in `customCardBrands`, which works alongside `supportedCardBrands` in the `createPaymentForm` configuration. It is used to extend the built-in brand configurations by providing additional configurations.

<!-- theme: warning -->
> The identifiers defined for these custom card brands need to be enabled via `supportedCardBrands` if that field is being used. If `supportedCardBrands` is not defined then all the built-in as well as custom brands will be permitted by form validations.

Custom card brands accepts a list of objects, each object entry support the following fields.

| Field | Required | Description |
| ----- | ----- | ----- |
| `id` | &#10004; | The brand identifier that can be referenced in `supportedCardBrands` as well as what would be sent to the `onCardBrandChange` merchant defined hook |
| `enableLuhnCheck` | | Determines whether validations for card numbers identified under this config should include a Luhn check. Boolean field, defaults to false |
| `patterns` | &#10004; | List containing elements that are either a number _(indicating a bin prefix)_ or a list containing two numbers _(indicating a bin range)_ used to identify the card numbers |
| `gaps` | | List of numbers indicating the indices of user input for the card number where a space should be inserted if card formatting is enabled. _**Example:** [4, 8, 12]_ |
| `lengths` | &#10004; | List of numbers indicating card lengths that are valid. _**Example:** [14, 16]_ |
| `securityCodeLength` | | Number field indicating number of digits for `securityCode`, defaults to 0 |

---

## See Also

- [Create an iFrame Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)
- [iFrame Event Handling](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md)
- [iFrame Methods](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Methods.md)

---
