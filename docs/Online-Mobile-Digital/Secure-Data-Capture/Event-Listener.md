
# Interacting with the iframe

Commerce Hub supports external interaction with the SAQ-A iframe which allows merchants to

- Listen for card form state change events and react accordingly
- Explicitly submit the card form from an external stimulus such as a button click on the merchants site

## Listening for Card Form State Changes

Merchants may decide that they would like to get notified of state changes from within the iframe so that they can respond accordingly on their website. The Commerce Hub SAQ-A iframe emits card form state events for the following card form lifecycle events

- Ready: Card form has been initialized and ready to receive card details
- Blur: Card form element has lost focus
- Submit: Card capture request has been submitted
- Card Capture Success: Card capture request was successful
- Card Capture Failed: Card capture request was unsuccessful

The following code snippet outlines how a merchant can listen for these events within their website.

```java

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

<!-- theme: warning -->
>As a best practice, we suggest checking the origin of the incoming event to ensure it is from a trusted source (https://api.fiservapp.com) as shown in the above code example. 

## Event Schema

The following JSON is an example of a card for submit event:

```json

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

The following table describes each for the fields in the above JSON sample:

| Attributes | Valid Values | Description |
| ---------- | -------------- | ---------------|
| type | saq-card-form-state-change	| The type of eveready | blur | submit | card-capture-success | card-capture-failednt being emitted. Best practices dictate that the parent page should check this attribute in addition to the origin when consuming events to prevent malicious scripts. See "Listening for Card Form State Change Events' above |
| valid | true or false	| A boolean flag indicating if the form (all fields) is in a valid state |
| triger | object	| A complex object indicating what triggered this event |
| valid | true or false	| A boolean flag indicating if the form (all fields) is in a valid state |
| triger.type | ready, blur, submit, card-capture-success, card-capture-failed	| A string indicating what type of trigger initiated this event * ready - card form was successfully initialised and is ready to receive cardholder data
- submit - card form was validated and core SAQ submit button was clicked. Please note that this event will not fire if a submit button is being used outside of the SAQ-A iframe bounds. See 'Submitting the card form' below.
- card-capture-success - card capture was successful
- card-capture-failed - card capture failed
- blur - a card form input lost focus after user input |
| valid | true or false	| A boolean flag indicating if the form (all fields) is in a valid state |


