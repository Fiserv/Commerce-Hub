---
tags: [Fraud Mitigation, Fraud Filters]
---


# Block fraudulent transactions by enabling filters

Fraud filters enable the merchants to configure filters to control the fraudulent transactions from different channels and across multiple payment methods. Each request request will ran through the configured positive and negative filters to determine whether the payment should be accepted or rejected.

Fraud filters allow the merchant to [accept](#positive-filters) or [reject](#negative-filters) transactions based on card number, customer reference, IP address, billing information and more. The fraud filters configuration is flexible and completely customizable by the merchant and can be setup based on industry, product, promotions, channel, customer details and store abilities.

Positive and negative filters are setup inside of Merchant Configuration and Boarding *(Marketplace in the [Commerce Control Center](https://www.commercecontrol.com))*. Filters are applied by attributes and their respective value.

---

## Positive filters

Positive filters are used to configure a whitelist and allow the transaction to process based on specific criteria.

<!-- theme: info -->
> Positive filters will override negative filters

| Filter | Variable | Attribute Criteria  |
| ----- | ------ | ----- |
| Card # to unblock | `source.card.cardData` | No dashes or spaces |
| Customer Reference(s) | `transactionDetails.merchantOrderId` | Not case sensitive |

---

## Negative filters

Negative filters are used to configure a blacklist and block the transaction based on specific criteria.

| Filter | Variable | Attribute Criteria |
| ----- | ------ | ----- |
| Add/change card numbers to block | `source.card.cardData` | No dashes or spaces  |
| BIN Block | `source.card.bin` | 6-11 digit BIN, acquired automatically by Commerce Hub from 'cardData`. Will override the negative and positive card number lists. |
| IP Addresses to block | `customer.ipAddress` |  |
| Billing Address | `billingAddress.address` | Not case sensitive |
| Country | `cardDetails.country`  | Acquired automatically from `cardData` by Commerce Hub |
| Customer Reference to block | `transactionDetails.merchantOrderId` | Not case sensitive |
| Domain Name to block | `additionalDataCommon.additionalData.ecomURL` |  |
| Email address/domain | `customer.email` | |

---

## Blocked transaction response

Example of a [Charges API](?path=docs/Resources/API-Documents/Payments/Charges.md) *(400: Bad Request)* response due to a blocked IP address filter.

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
      "additionalInfo": "Block IP"
    }
  ]
}
```

---

## See also

- [Fraud Mitigation](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)

<!---
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
-->

---
