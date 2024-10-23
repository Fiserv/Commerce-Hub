---
tags: [Online, Mobile, Digital, Card Not Present, Plugin, Extension, Adobe, Magento]
---

# Adobe Commerce customization guide

Commerce Hub manages the capture and input of sensitive payment data at checkout and allows the customization of the consumer's experience with a merchant's brand and provides customizable fields in the capture forms.

In the Adobe Commerce extension, there are three points of interaction for payments;

- **Customer Checkout Payment Form:** used during customer checkout
- **Admin Order Payment Form:** accessed from the merchant's admin interface
- **Tokenization Form:** accessed within the customer's account profile

Commerce Hub has provided three separate customization areas for each of these to provide management control.

<!-- theme: info -->
> All customization areas have the same configuration functions.

---

## Field customization

Field level customization uses [Commerce Hub's Checkout Hosted Fields solution](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md). For the Adobe extension, the complexity and nuances of field customization has been reduced by creating an easy-to-use interface.

### Supported fields

Each supported field's customization will differ. Each field has been configured with the options fit for it's purpose.

<!--
type: tab
titles: Card Number, Name on Card, Security Code, Expiration Month, Expiration Year
-->

| Customization | Details |
| ----- | ---- |
| Placeholder | Placeholder text for the field |
| Placeholder Character | Placeholder character for the field |
| Format Card Number | Controls if the card number should be auto-formatted with additional spaces while user types |
| Mask Card Number | Enables masking the card number while user types |
| Masking Character | Controls character for card number masking |
| Mask Mode | Controls the masking mode |
| Mask Length | Controls how many characters of the masking character will represent the masked portion of the input after shrinking is applied |

<!--
type: tab
-->

| Customization | Details |
| ----- | ---- |
| Placeholder | Placeholder text for the field |

<!--
type: tab
-->

| Customization | Details |
| ----- | ---- |
| Placeholder | Placeholder text for the field |
| Placeholder Character | Placeholder character for the field |
| Mask Security Code | Enables masking the card number while user types |
| Masking Character | Controls character for card number masking |
| Mask Mode | Controls how many characters of the masking character will represent the masked portion of the input after shrinking is applied |

<!--
type: tab
-->

| Customization | Details |
| ----- | ---- |
| Placeholder | Placeholder text for the field |
| Option Labels | The text to display for each option in the expiration month dropdown |

<!--
type: tab
-->

| Customization | Details |
| ----- | ---- |
| Placeholder | Placeholder text for the field |

<!-- type: tab-end -->

---

### CSS customization

The extension has a default CSS customization as an example of what can be configured, and merchants can implement custom CSS according to their brand requirements.

CSS values passed into the corresponding Form CSS fields will style inputs embedded within the Checkout Hosted Fields. To style surrounding DOM elements within the payment form template, override styles in the following stylesheets:

- **Customer Checkout Payment Form:** `ch-form.css`
- **Admin Order Payment Form:** `ch-form-admin.css`
- **Tokenization Form:** `ch-form-token.css`

---

## See Also

- [Adobe Commerce Installation Guide](?path=docs/Resources/Guides/Partners/Modules/Adobe-Installation.md)
- [Checkout Hosted Fields Customization](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md)

---
