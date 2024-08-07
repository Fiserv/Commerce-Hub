---
tags: [Online, Card Not Present, Checkout, Hosted Fields, iFrame]
---

# Checkout - Hosted Fields Supported Methods

The available instance methods are listed in the table below.

| Method | Description | Details |
| ------ | ----------- | ------- |
| `submit(submitConfig)` | This method is for form submission | See [form submission](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Request.md#step-4-form-submission) for details on the configuration schema. Returns a promise that resolves to the API response on success |
| `reset(field)` | This method is for resetting [individual fields][?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md#supported-fields] or all the fields to their initial state as though the form had just been rendered | **If the parameter is provided:** if the parameter is a valid field name for a configured field, that particular field's input data is cleared to the initial state and its validity is recalculated. **If the parameter is not provided:** all field data is cleared to their initial state and validity is recalculated. |
| `mask(field, isMasked)` | This method is for supporting a show/hide functionality for fields that support masking. If [masking configuration](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md#field-configuration) for the specified field is not present or is set to disabled this method has no effect | **Required Fields:** `field`: the name of the field as a string. `isMasked`: Boolean value for whether masking should be turned on for the field |
| `destroy()` | This method removes the injected iFrames from the DOM. | The payment form instance returned by `createPaymentForm` and used with this method can no longer be used *(a new instance would need to be created with the form re-rendered)* |
| `focus(field)` | This method is for programmatically focusing a particular field | Denotes the field name that should be given focus |
| `toString()` | This method is for debugging/merchant-inspection purposes and serializes the form state and configuration for logging |  |
| `populate` | This method accepts a JavaScript object where the keys are [field ids](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md#supported-fields) *(example: `cardNumber`, `securityCode`, etc)* and the values are what should be inserted *(or selected in the case of dropdowns)* for those fields. | `expiration` - value should be set to how it should appear to the user, this means if the `format` is set to *"MM_YY"* and the delimiter is set to *" / "*, then the value here would be *"01 / 25"*, `expirationMonth` - expected format is a string in *MM* format *(example: 01 for January)*, `expirationYear` - expected format is a string in *YYYY* format *(example: 2025)*  |
| `configure` | This method accepts a JavaScript object specifying the [configuration](#field-configuration) change to make |  |

---

## Field Configuration

Field configuration can be defined using the below schema in JavaScript.

<!--
type: tab
titles: JavaScript, Variables
-->

```javascript
paymentFields.configure({
    field: "securityCode",
    mode: "DISABLED",
    placeholder: {
        updateType: "TEXT",
        value: "I AM A PLACEHOLDER"
    }
});
```

<!--
type: tab
-->

| Field | Required  |Description |
| ----- | ----------- | ----- |
| `field` | &#10004; | Id of the field that should be modified |
| `mode` | | Change the behavior of the field |
| `placeholder` | | Required if changing the placeholder of the field |
| `placeholder::updateType` | | Defines the placeholder type |
| `placeholder::value` | | The update value with requirements varying by `updateType` |

---

##### Behavior Mode

| Value | Description |
| ----- | ----------- |
| *REQUIRED (default)* | The `field` will be treated as required |
| *OPTIONAL* | The `field` will be treated as optional and will only be validated if data is provided |
| *DISABLED* | The `field` will be disabled and treated by validation/submission logic as though it didn't exist |

##### Placeholder Type

| Value | Description |
| ----- | ----- |
| *TEXT* | The `value` field will contain the placeholder text |
| *USE_DEFAULT* | Use the default field configuration for the placeholder; do not provide the `value` field |
| *DYNAMIC_CHARACTER* | For fields that support a `dynamicPlaceholderCharacter`, a single character string is expected in the `value` field |

<!-- type: tab-end -->

---

## See Also

- [Create an iFrame Request](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Request.md)
- [Customize iFrame Payment Form](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Customization.md)
- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [iFrame Event Handling](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Events.md)

---
