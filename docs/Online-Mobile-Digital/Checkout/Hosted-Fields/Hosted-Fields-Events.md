---
tags: [Online, Card Not Present, Checkout, Hosted Fields, iFrame]
---

# Checkout - Hosted Fields Event Handling

Commerce Hub supports external interaction with the iFrame solution which allows the payment form to listen hooks for card form state change events and react accordingly in real-time, and explicitly submit the payment form from an external stimulus such as a button click on the merchants site.

---

## Event Hooks

Commerce Hub Hosted Fields solution supports the following event hooks.

| Value | Description |
| ----- | ----- |
| `onCardBrandChange` | Invoked when a card brand has been identified or the card brand is no longer identified. Will be called even when the brand identifier is not in the `supportedCardBrands` list |
| `onLostFocus` | Invoked when a field loses focus |
| `onFocus` | Invoked when a field gains focus |
| `onFieldValidityChange` | Invoked when the validation state of a field has changed |
| `onFormValid` | Invoked when all configured required fields have passed validation and submission is possible |
| `onFormNoLongerValid` | Invoked when the form was valid and ready for submission but now is no longer because one or more fields is failing validation |

<!--
type: tab
titles: Variables, JSON Example
-->

| Field | Description |
| ----- | ----- |
| `cardBrand` | Null if a card brand is no longer identified but previously was, otherwise the brand identifier for the [brand identified](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md#card-brands) |
| `field` | the string identifier for the [field](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md#supported-fields) |
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

```javascript
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

## Error Handling

The Checkout iFrame solution uses a promise to relay back errors to the code via a rejected promise so it can be caught via the `.catch` method of the returned Promise.

The errors that can be caught via `promise.catch` and include a `toString()` method for debugging. The details of each case as well as the structure of the accompanying error object are below.

#### Form Instantiation Errors

| Scenario | name | message | errors | toString() |
| ---- | ---- | ------- | ------ | ---------- |
| Browser Not Supported | GeneralError | BROWSER_NOT_SUPPORTED | N/A | Returns a string representation of the error |
| Configuration Failed Validation Unable to Render | ValidationError | BAD_FORM_CONFIG | An array containing a human-readable breakdown of each issue | Returns a string representation of the error |
| Form Rendering Failed Due To Timeout (10+ seconds) | GeneralError | FORM_RENDER_TIMEOUT | N/A | Returns a string representation of the error |

#### Form Submission Errors

| Case | name | message | errors | response | toString() |
| ---- | ---- | ------- | ------ | -------- | ---------- |
| Validation Browser-side Failure | ValidationError | BAD_SUBMIT_CONFIG | A string array containing a human-readable breakdown of each issue | N/A | Returns a string representation of the error |
| HTTP Error from the API | HttpError | The HTTP status code and text as a string | N/A |A JavaScript object containing the following fields `statusCode`: the HTTP status code and `statusText`: the HTTP status text `body`: a JavaScript object for the API error response body | Returns a string representation of the error |
| Form Validation Fails | ValidationError | BAD_FORM_DATA | A string array containing the names of the fields that failed validation | N/A | Returns a string representation of the error |
| No iFrame Fields are Enabled | GeneralError | NO_FIELDS_ENABLED | N/A | N/A | Returns a string representation of the error |
| Other Errors | The name of the causing error or GeneralError by default | The message from the causing error | N/A | N/A | Returns a string representation of the error |

---

## See Also

- [Create an iFrame Request](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Request.md)
- [Customize iFrame Payment Form](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md)
- [iFrame Methods](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Methods.md)
- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)

---
