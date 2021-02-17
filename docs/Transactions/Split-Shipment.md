## Split Shipment

Split shipment is an ability to complete an authorization for the full order amount and perform multiple tagged Completions for the amount of each item shipped.

Situations in which this could be implemented include:

- Shipment of goods will be split, the cardholder can be charged for each individual shipment
- Ordered Items are not available at time of original authorisation and will be shipped seven days or more after the original authorisation

### Technical Requirements

##### Component : splitshipment

|Variable    |  Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `totalCount` | *integer* |  | Shall be present in the capture transaction indicating how many shipments the transaction is devided into. Can be sent in pre-authorization or the first capture.|
| `finalShipment` | *boolean* |  | Used to identify the final capture (*TRUE* or *FALSE*)|


### Payload Example

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "splitShipment": {
    "totalCount": 5
    "finalShipment": true
  }
}
```