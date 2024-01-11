---
tags: [Online, Card Not Present, Secure Data Capture, iFrame]
---

# Secure Data Capture - iFrame v2 Event Handling

Commerce Hub supports external interaction with the iFrame solution which allows the payment form to listen hooks for card form state change events and react accordingly in real-time, and explicitly submit the card form from an external stimulus such as a button click on the merchants site.

---

## Event Hooks

Commerce Hub iFrame solution supports the following event hooks.

| Value | Description |
| ----- | ----------- |
| `onCardBrandChange` | Invoked when a card brand has been identified or the card brand is no longer identified. Will be called even when the brand identifier is not in the `supportedCardBrands` list |
| `onLostFocus` | Invoked when a field loses focus
| `onFocus` | Invoked when a field gains focus |
| `onFieldValidityChange` | Invoked when the validation state of a field has changed |
| `onFormValid` | Invoked when all configured required fields have passed validation and submission is possible |
| `onFormNoLongerValid` |Invoked when the form was valid and ready for submission but now is no longer because one or more fields is failing validation |

<!--
type: tab
titles: Variables, JSON Example
-->

| Field | Description |
| ----- | ----------- |
| `cardBrand` | Null if a card brand is no longer identified but previously was, otherwise the brand identifier for the [brand identified](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#card-brands) |
| `field` | the string identifier for the [field](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#supported-fields) |
| `fieldState.field` | Same as defined `field` |
| `fieldState.isValid` | Is _true_ if validations for the field are fully satisfied, otherwise _false_ |
| `fieldState.isPotentiallyValid` | Is _true_ when `isValid` is _true_ or if the data is incomplete but has focus, or hasn't been entered yet |
| `fieldState.shouldShowError` | Is _true_ if an error should be shown to the user, it is usually the inverse of `isPotentiallyValid` but has better compatibility with IOS devices when a field loses focus |
| `fieldState.hasData` | Is _true_ if data has been selected or entered into the field |
| `formState.cardBrand` | Same as defined `cardBrand` |
| `formState.fields.fieldName` | An object containing the `fieldName` values as the keys and the corresponding `fieldState` for the values _(without the `field` sub-property)_  |
| `form` | A reference to the SDK payment form instance |

<!--
type: tab
-->

Example of payment form event hooks customization in `createPaymentForm`.

```json
{
  "hooks": {
    "onCardBrandChange": (cardBrand, formState, form) => {
    },
    "onLostFocus": (field, formState, form) => {
    },
    "onFocus": (field, formState, form) => {
    },
    "onFieldValidityChange": (fieldState, formState, form) => {
    },
    "onFormValid": (formState, form) => {
    },
    "onFormNoLongerValid": (formState, form) => {
    },
  }
}
```

<!-- type: tab-end -->

---

## Error Events

---

## See Also

- [Create an iFrame Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md)
- [Customize iFrame Payment Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
