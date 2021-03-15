# Split Shipment

A split shipment is an ability to [capture](../Transactions/Capture.md) an authorization for the full order amount by performing a capture for each item shipped.

Situations in which this could be implemented include:

- Shipment of goods will be split, the cardholder can be charged for each individual shipment.
- Occurs when the goods are not available for shipment at the time of the consumer’s purchase.

<!-- theme: info -->
> ##### INFO
> If the customer cancels their order before the last shipment, the `finalShipment` indicator is required to be sent with the [refund](../Transactions/Refund.md) request.

<!-- theme: warning -->
> ##### WARNING
> If the authorization timeframe has expired, a [reauthorization](../Transactions/Re-Auth.md) is required.

## Technical Requirements

##### Component : splitShipment

|Variable    |  Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `totalCount` | *integer* |  | Required in the capture transaction indicating how many shipments the transaction is devided into. Can be sent in pre-authorization or the first capture.|
| `finalShipment` | *boolean* |  | Used to identify the final capture (*TRUE* or *FALSE*)|


## Payload Example

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

---

## See Also

- [API Explorer](url)