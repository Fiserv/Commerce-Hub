---
tags: [Fraud Mitigation, Transaction Restrictions, Duplicate]
---

# Block fraudulent transactions enabling restrictions

The Transaction Restriction settings can be enabled to detect and reject duplicate transactions. Duplicate transaction can be blocked based on timeframe, number of transactions, and transaction type. Enabling Transaction Restrictions in Commerce Hub will reject duplicate transactions once the specified configuration has been met.

Transaction Restrictions are setup inside of Merchant Configuration and Boarding *(Marketplace in the [Commerce Control Center](https://www.commercecontrol.com))*. Filters are applied by attributes and their respective value.

---

## Blocked transaction response

Example of a [Charges API](?path=docs/Resources/API-Documents/Payments/Charges.md) *(400: Bad Request)* response due to a blocked duplicate transaction setting.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE_FINAL",
    "transactionState": "DECLINED",
    "transactionProcessingDetails": {
      "orderId": "CHG01cd337bd9d54741a79b666e0f5d9e0b49",
      "transactionTimestamp": "2022-10-11T12:33:44.195362Z",
      "apiTraceId": "6723f1a22c3d4205b8bac81ae58bcd24",
      "clientRequestId": "1705732",
      "transactionId": "6723f1a22c3d4205b8bac81ae58bcd24"
    }
  },
  "error": [
    {
      "type": "GATEWAY",
      "code": "600",
      "message": "Fraud Error: General",
      "additionalInfo": "Block Duplicate"
    }
  ]
}
```

---

## See also

- [Fraud Mitigation](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Positive/Negative Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)

<!---
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
-->

---
