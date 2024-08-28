---
tags: [Online, Card Not Present, Checkout, Hosted Fields, iFrame, PaymentCheck]
---

# Checkout: Accept a check payment with Hosted Fields

In order to accept a check *(ACH)* bank account payment with Hosted Fields, the [supported fields](#supported-check-fields) and [field configuration and placement](#field-configuration-schema-and-placement) are required in the [form configuration](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Request.md#step-3-create-payment-form).

---

## Supported check fields

The following table identifies the available fields for a check payment. No fields are required but at least one field must be configured.

| Field | Type | Description |
| ----- | ----- | ----- |
| `accountNumber` | numeric text field | The bank account number |
| `routingNumber` | numeric text field | The bank routing number |
| `idType` | dropdown | The type of user identification that will be provided for verification, driver license, SSN, or tax ID *(TIN)* |
| `idValue` | text field | The id number for the type selected |
| `driverLicenseState` | dropdown | The state/province if driver license is selected as `idType` |

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
    fields: {
      accountNumber: {
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
      routingNumber: {
        parentElementId: "element-id",
        placeholder: "placeholder text goes here",
        dynamicPlaceholderCharacter: "•",
        masking: {
          character: "•",
          mode: "NO_MASKING"
        },
      },
      idType: {
        parentElementId: "element-id",
      },
      idValue: {
        parentElementId: "element-id",
        placeholder: "ID Value",
        dynamicPlaceholderCharacter: "-",
      },
      driverLicenseState: {
        parentElementId: "element-id",
      }
    }
  }
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

| Valid Values | Description | accountNumber | routingNumber |
| ------------ | ----------- | :--------: | :----------: |
| *NO_MASKING* | Masking is fully disabled | &#10004; | &#10004; |
| *ALWAYS_MASK_ALL* | Digits entered will be masked in real time with most recently entered digit left unmasked until input loses focus | &#10004; | &#10004; |
| *ALWAYS_MASK_EXCEPT_TRAILING* | Real-time masking of input with trailing digits left unmasked | &#10004; |  &#10004;  |
| *BLUR_MASK_ALL* | Masking is applied when input loses focus; all digits masked | &#10004; | &#10004; |
| *BLUR_MASK_ALL_SHRINK* | Masking is applied when input loses focus; all digits masked; masked portion is shrunk down to `shrunkLength` with configured masking `character` | &#10004; |  &#10004; |
| *BLUR_MASK_EXCEPT_TRAILING* | Masks the input data when focus leaves that field *(AKA "blur" event)* with trailing digits left unmasked | &#10004; | &#10004; |
| *BLUR_MASK_EXCEPT_TRAILING_SHRINK* | Masks the input data when focus leaves that field (AKA "blur" event) with trailing digits left unmasked and the masked portion shrunk down to a configured number of characters. Number of trailing unmasked digits is determined by the identified brand configuration and defaults to 4 digits. | &#10004; |  &#10004; |

<!-- type: tab-end -->

---

## See also

- [Checkout SDK](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [Create a Hosted Fields integrations](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields.md)
- [Handle Hosted Fields events](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md)
- [Supported Hosted Fields methods](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Methods.md)
- [Hosted Fields HTML examples](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-HTML-Examples.md)

---
