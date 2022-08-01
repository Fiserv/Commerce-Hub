---
tags: [Online, Card Not Present, Secure Data Capture, iFrame]
---

# Secure Data Capture - iFrame Event Handling

Commerce Hub supports external interaction with the iFrame solution which allows merchants to listen for card form state change events and react accordingly, and explicitly submit the card form from an external stimulus such as a button click on the merchants site.

## Card Form State Changes

Listeningn to card form state changes allows notification of state changes from within the iFrame so that the website can respond accordingly. The Commerce Hub iFrame emits card form state events for the following card form lifecycle events:

- **Ready:** card form has been initialized and ready to receive card details
- **Blur:** card form element has lost focus
- **Submit:** card capture request has been submitted
- **Card Capture Success:** card capture request was successful
- **Card Capture Failed:** card capture request was unsuccessful

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

<!--theme caution-->
> As a best practice, we suggest checking the origin of the incoming event to ensure it is from a trusted source (https://api.fiservapp.com) as shown in the above code example. 

## Event Schema

The following table describes each for the fields in the even schema:

| Attribute| Description |
| ----- | ----- |
|	_type_ | The type of event being emitted. Best practices dictate that the parent page should check this attribute in addition to the origin when consuming events to prevent malicious scripts. See "Listening for Card Form State Change Events' above. _**Valid Value:** saq-card-form-state-change_ |
| _valid_	| A boolean flag _(true, false)_ indicating if the form (all fields) is in a valid state |
| _trigger_ |	A complex object indicating what triggered this event. _**Valid Value:** object_ |
| _trigger.type_ | A string indicating what [type of trigger](#trigger-type) initiated this event |
5	trigger.element	N/A	A string representing the source DOM element which trigger this event
6	trigger.window	saq-iframe | null	A string representing the document id of the window from which this event was trigger. This can be either the iframe window or the merchant site window or null.
7	fields	N/A	An array of field objects giving a more detailed breakdown of the individual field validation checks.
8	fields.card[*].valid	true | false	A boolean flag indicating if the form field is in a valid state
9	fields.card[*].length	0,1,2,3....N	An integer indicating the number of characters in the field data at the time the event was fired
Submitting the Card Form
Commerce Hub allows merchants to submit the SAQ-A card form using a stimulus, such as a button click, from the merchants own website. The Fiserv SDK exposes the submitCardForm() function that make it easy for merchants to explicitly submit the card form. The following code snippet shows how a merchant can use a card form reference to submit the card form when a button external to the iframe is clicked


#### Trigger Type
| Value | Description |
| ----- | ----- |
| _ready_ | card form was successfully initialised and is ready to receive cardholder data |
| _submit_ | card form was validated and core SAQ submit button was clicked. Please note that this event will not fire if a submit button is being used outside of the iFrame bounds. |
| _card-capture-success_ | card capture was successful |
| _card-capture-failed_ | card capture failed |
| _blur_ | a card form input lost focus after user input |

The following JSON is an example of a card for submit event

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

const form = new commercehub.Fiserv(formConfig, authorization, apiKey);
form.loadPaymentForm("payment-saq-a-form-div").then((next) => {}).catch((error) => {});
// on external button click
document.getElementById('external-submit-button').addEventListener('click', () => form.submitCardForm()) 
Please note: The card form 'submit' state change event will not be emitted from the card form when it has been explicitly submitted from an external command.
