---
tags: [API Reference, Card Details, Master Data]
---


# Card Data

Card is a required object in `source` for all card payment types including; debit, credit, prepaid (gift), HSA, and WIC/EBT. 

<!--
type: tab
titles: card, JSON Example
-->

The below table identifies the parameters in the `card` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | -----|
| `cardData` | *string* | 256 | Credit card number |
| `nameOnCard` | *string* | 256 | Cardholder name |
| `expirationMonth` | *string* | 2 | 2-digit card expiration month |
| `expirationyear` | *string* | 4 |  4-digit card expiration year |
| `securityCode` | *string* | 4 | A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC), verification code (V-code or V code), or signature panel code (SPC). |
| `securityCodeIndicator` | *string* | 15 | Indicates how the [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md#security-code-indicator) is passed |
| `bin` | *String* | 8 |  Bank Identification Number (BIN), the initial set of four to six numbers of the Primary Account Number (PAN) and identifies the issuer. |
| `last4` | *String* | 4 |  Last four digits of the Primary Account Number (PAN) |
| `scheme` | *String* | 256 |  Card brand received in the transaction response |
| `beginningBalance` | *number* | 18,3 | Beginning card balance received in the transaction response |
| `endingBalance` | *number* | 18,3 | Ending card balance received in the transaction response |


<!--
type: tab
-->

JSON string format for `card`: 

```json
{
   "card":{
      "cardData": "4005550000000019",
      "nameOnCard": "Jane Smith",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "111",
      "securityCodeIndicator": "PROVIDED",
      "bin": "400555",
      "last4": "0019",
      "scheme": "VISA",
      "beginningBalance": "1.00",
      "endingBalance": "0.10"
   } 
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
