---
tags: [API Reference, Card Details, Master Data]
---

# Card Data

Card is a required object in `source` for all card payment types including; debit, credit, prepaid _(gift cards)_, HSA, WIC/EBT, and tokens.

<!--
type: tab
titles: card, JSON Example
-->

The below table identifies the parameters in the `card` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | -----|
| `cardData` | _string_ | 256 | Credit card number |
| `nameOnCard` | _string_ | 256 | Cardholder name |
| `expirationMonth` | _string_ | 2 | 2-digit card expiration month |
| `expirationyear` | _string_ | 4 |  4-digit card expiration year |
| `securityCode` | _string_ | 4 | A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC), verification code (V-code or V code), or signature panel code (SPC). |
| `securityCodeIndicator` | _string_ | 15 | Indicates how the [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md#security-code-indicator) is passed |
| `bin` | _string_ | 8 |  Bank Identification Number (BIN), the initial set of four to six numbers of the Primary Account Number (PAN) and identifies the issuer. |
| `last4` | _string_ | 4 |  Last four digits of the Primary Account Number (PAN) |
| `scheme` | _string_ | 256 |  Card brand received in the transaction response |
| `category`| _string_ | 25 | Describes the card [category](#category-and-subcategory) |
| `subCategory`| _string_ | 25 | Provides the [subcategory](#category-and-subcategory) for the `category` field to identify the card type. |

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
      "category": "GIFT",
      "subCategory": "GIFT_SOLUTIONS"
   } 
}
```

<!-- type: tab-end -->

---

## Category and Subcategory

The below table identifies the valid values of `category` and `subCategory`.

| Category | Subcategories |
| -------- | ------- |
| GIFT | GIFT_SOLUTIONS |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Source Types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
