---
tags: [Online, Card Not Present, Checkout, Hosted Fields, iFrame, PaymentCard, Gift Card]
---

# Hosted Fields: Form configuration for gift card payments

In order to accept a gift card payment with Hosted Fields, the [supported fields](#supported-gift-card-fields) and [field configuration and placement](#field-configuration-schema-and-placement) are required in the [form configuration](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Request.md#step-3-create-payment-form).

---

## Supported gift card fields

The following table identifies the available fields for a gift card payment. No fields are required but at least one field must be configured.

| Field | Type | Description |
| ----- | ----- | ----- |
| `cardNumber` | numeric text field | The card number |
| `securityCode` | numeric text field | The card security code |

---

## Field configuration schema and placement

Only a `parentElementId` is required, this is the id for the DOM element on the merchant's page where Commerce Hub will inject the iFrame for that field. If other field configuration properties fail validation, the portion of configuration that failed validation is ignored.

<!--
type: tab
titles: JavaScript Example, Variables
-->

Example of gift card fields configuration in `createPaymentForm`.

```javascript
window.fiserv.components.paymentFields({
  data: {
    paymentMethod: "GIFT",
    fields: {
      cardNumber: {
        parentElementId: "element-id",
        placeholder: "placeholder text goes here",
        dynamicPlaceholderCharacter: "•",
        enableFormatting: true,
        masking: {
          character: "•",
          mode: "NO_MASKING",
          shrunkLength: 4
        }
      },
      securityCode: {
        parentElementId: "element-id",
        placeholder: "placeholder text goes here",
        dynamicPlaceholderCharacter: "•",
        masking: {
          character: "•",
          mode: "NO_MASKING"
        },
      }
    }
  },
});
```

<!--
type: tab
-->

| Field | Description |
| ----- | ----------- |
| `parentElementId` | The element ID to inject the iFrame inside |
| `placeholder` | Placeholder text for the field |
| `dynamicPlaceholderCharacter` | Placeholder character for the field. Has no effect if `placeholder` isn't specified; must be one character in length  |
| `enableFormatting` | Controls if the card number should be auto-formatted with additional spaces while user types |
| `masking.character` | Controls card number masking and be one character in length |
| `masking.mode` | Controls the masking mode |
| `masking.shrunkLength` | Controls how many characters of the masking character will represent the masked portion of the input after shrinking is applied, must be a number |

**Masking Mode:**

| Valid Values | Description | `cardNumber` | `securityCode` |
| ------------ | ----------- | :--------: | :----------: |
| *NO_MASKING* | Masking is fully disabled | &#10004; | &#10004; |
| *ALWAYS_MASK_EXCEPT_LAST_4* | Each block of 4 digits entered will be masked in real time with final 4 left unmasked | &#10004; | |
| *ALWAYS_MASK_ALL* | Digits entered will be masked in real time with most recently entered digit left unmasked until input loses focus | &#10004; | &#10004; |
| *ALWAYS_MASK_EXCEPT_TRAILING* | Real-time masking of input with trailing digits left unmasked. Number of trailing unmasked digits is determined by the identified brand configuration and defaults to 4 digits. | &#10004; | |
| *BLUR_MASK_EXCEPT_LAST_4* | Masking is applied when input loses focus; only last 4 digits left unmasked | &#10004; | |
| *BLUR_MASK_ALL* | Masking is applied when input loses focus; all digits masked | &#10004; | &#10004; |
| *BLUR_MASK_EXCEPT_LAST_4_SHRINK* | Masking is applied when input loses focus; only last 4 digits left unmasked; masked portion is shrunk down to `shrunkLength` with configured masking `character` | &#10004; | |
| *BLUR_MASK_ALL_SHRINK* | Masking is applied when input loses focus; all digits masked; masked portion is shrunk down to `shrunkLength` with configured masking `character` | &#10004; | |
| *BLUR_MASK_EXCEPT_TRAILING* | Masks the input data when focus leaves that field *(AKA "blur" event)* with trailing digits left unmasked. Number of trailing unmasked digits is determined by the identified brand configuration and defaults to 4 digits. | &#10004; | |
| *BLUR_MASK_EXCEPT_TRAILING_SHRINK* | Masks the input data when focus leaves that field (AKA "blur" event) with trailing digits left unmasked and the masked portion shrunk down to a configured number of characters. Number of trailing unmasked digits is determined by the identified brand configuration and defaults to 4 digits. | &#10004; | |

<!-- type: tab-end -->

---

## See also

- [Checkout SDK](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [Create a Hosted Fields integrations](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields.md)
- [Customize the Hosted Fields form](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md)
- [Handle Hosted Fields events](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md)
- [Supported Hosted Fields methods](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Methods.md)
- [Hosted Fields HTML examples](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-HTML-Examples.md)

---
