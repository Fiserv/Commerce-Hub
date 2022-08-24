---
tags: [Online, Card Not Present, Secure Data Capture, iFrame]
---

# Secure Data Capture - iFrame Event Listener

Commerce Hub supports external interaction with the iFrame solution which allows merchants to listen for card form state change events and react accordingly, and explicitly submit the card form from an external stimulus such as a button click on the merchants site.

## Card Form State Changes

Listening to card form state changes allows notification of state changes from within the iFrame so that the website can respond accordingly. The Commerce Hub iFrame emits card form state events for the following card form lifecycle events:

- **Ready:** card form has been initialized and is ready to receive card details
- **Blur:** card form element has lost focus
- **Submit:** card capture request has been submitted
- **Card Capture Success:** card capture request was successful
- **Card Capture Failed:** card capture request was unsuccessful

<!--theme caution-->
> It is recommended to check the origin of the incoming event to ensure it is from a trusted source _(https://api.fiservapp.com)_ as shown in the code example. 

### Code Example

The following code snippet outlines how to listen for these events within the website.

```javascript
window.addEventListener('message', function(event) {    
  var trustedOrigins = ["https://api.fiservapps.com"]    
  var trustedEventTypes = ["saq-card-form-state-change"]    
  if(trustedOrigins.includes(event.origin) && event.data && trustedEventTypes.includes(event.data.type)) {      
    console.log("Processing trusted event ", event.data);    
  } else {      
    console.log("Ignoring unknown/unsafe message origin or type", event);}
  }, 
false); 
```

---

## Event Schema

The following table describes each for the fields in the even schema:

| Attribute| Description |
| ----- | ----- |
|	_type_ | The type of event being emitted. Best practices dictate that the parent page should check this attribute in addition to the origin when consuming events to prevent malicious usage. _**Valid Value:** saq-card-form-state-change_ |
| _valid_	| A boolean flag _(true, false)_ indicating if the form (all fields) is in a valid state |
| _trigger.type_ | A string indicating what [type of trigger](#trigger-type) initiated this event |
|	_trigger.element_ |A string representing the source DOM element which trigger this event |
|	_trigger.window_	|	A string representing the document id of the window from which this event was trigger. This can be either the iframe window or the merchant site window _(saq-iframe)_ or null. |
|	_fields_	| An array of field objects giving a more detailed breakdown of the individual field validation checks |
| _fields.card[*].valid_	| A boolean flag _(true, false)_ indicating if the form field is in a valid state |
|	_fields.card[*].length_ | An integer indicating the number of characters in the field data at the time the event was fired
| _fields.card[*].error_	| A string description of the field error if the field is in an invalid state |


#### Trigger Type

| Value | Description |
| ----- | ----- |
| _ready_ | card form was successfully initialized and is ready to receive cardholder data |
| _submit_ | card form was validated and core SAQ submit button was clicked. Please note that this event will not fire if a submit button is being used outside of the iFrame bounds. |
| _card-capture-success_ | card capture was successful |
| _card-capture-failed_ | card capture failed |
| _blur_ | a card form input lost focus after user input |

### Code Example

The following JSON is an example of a card form submit event:

```JSON
{
    "type": "saq-card-form-state-change",
    "valid": false,
    "trigger": {
        "type": "submit",
        "element": "saq-card-form",
        "window": "saqa-iframe"
    },
    "fields": {
        "card": {
            "cardNumber": {
                "valid": true,
                "length": 14
            },
            "cardHolder": {
                "valid": true,
                "length": 14
            },
            "cardExpiryDate": {
                "valid": true,
                "length": 4
            },
            "cardSecurityCode": {
                "valid": false,
                "error": "Security code or CVC is incomplete",
                "length": 1
            }
        }
    }
}

```

---

## Submitting the Card Form

Commerce Hub allows the submission of the card form using a stimulus, such as a button click, from the merchant's own website. The SDK exposes the `submitCardForm()` function that makes it easy to explicitly submit the card form. The following code snippet shows how to use a card form reference to submit the form when a button external to the iFrame is clicked.

<!--theme info-->
> The card form `submit` state change event will not be emitted from the card form when it has been explicitly submitted from an external command.

### Code Example

```javascript
const form = new commercehub.Fiserv(formConfig, authorization, apiKey);
form.loadPaymentForm("payment-saq-a-form-div").then((next) => {}).catch((error) => {});
// on external button click
document.getElementById('external-submit-button').addEventListener('click', () => form.submitCardForm()) 

```

---

## See Also

- [Create an iFrame Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md)
- [Customize iFrame Payment Form](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Customization.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
