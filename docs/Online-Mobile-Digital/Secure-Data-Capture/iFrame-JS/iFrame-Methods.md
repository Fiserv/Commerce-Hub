---
tags: [Online, Card Not Present, Secure Data Capture, iFrame]
---

# Secure Data Capture - iFrame v2 Methods

The available instance methods are listed in the table below.

| Method | Description | Details |
| ------ | ----------- | ------- |
| `submit(submitConfig)` | This method is for form submission | See [form submission](#form-submission) for details on the configuration schema. Returns a promise that resolves to the API response on success |
| `reset(field)` | This method is for resetting [individual fields][def] or all the fields to their initial state as though the form had just been rendered | **If the parameter is provided:** if the parameter is a valid field name for a configured field, that particular field's input data is cleared to the initial state and its validity is recalculated. **If the parameter is not provided:** all field data is cleared to their initial state and validity is recalculated. |
| `mask(field, isMasked)` | This method is for supporting a show/hide functionality for fields that support masking. If [masking configuration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#field-configuration) for the specified field is not present or is set to disabled this method has no effect | **Required Fields:** `field`: the name of the field as a string. `isMasked`: Boolean value for whether masking should be turned on for the field |
| `destroy()` | This method removes the injected iFrames from the DOM. | The payment form instance returned by `createPaymentForm` and used with this method can no longer be used _(a new instance would need to be created with the form re-rendered)_ |
| `behavior(field, mode)` | This method adjusts the behavior of fields as it pertains to receiving input or validating the input contained | **Required Fields:** `field`: the name of the field as a string, `mode`: the [desired behavior](#behavior-mode) of the field as a string |
| focus(field) | This method is for programmatically focusing a particular field |Denotes the field name that should be given focus |

## Behavior Mode

| Value | Description |
| ----- | ----------- |
| _REQUIRED (default)_ | The `field` will be treated as required |
| _OPTIONAL_ | The `field` will be treated as optional and will only be validated if data is provided |
| _DISABLED_ | The `field` will be disabled and treated by validation/submission logic as though it didn't exist |

---

## See Also

- [Create an iFrame Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md)
- [Customize iFrame Payment Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)
- [iFrame Event Handling](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Events.md)

---

[def]: ?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md#supported-fields
