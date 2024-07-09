---
tags: [API Reference, Card Details, Master Data]
---

# Card Data

Card is a required object in `source` for all card payment types including; debit, credit, [prepaid *(gift cards)*](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md), [Fleet](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Card.md), HSA, WIC/EBT, and [tokens](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md).

<!-- theme: danger -->
> Commerce Hub requires all payment cards to be encrypted using [multi-use public key *(MUPK)*](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md) or [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md). Plain card data is only supported in our sandbox environment for [testing purposes](?path=docs/Resources/Guides/Testing/Test-Scripts/Test-Scripts.md).

<!--
type: tab
titles: card, JSON Example
-->

The below table identifies the parameters in the `card` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `cardData` | *string* | 256 | Credit card number |
| `nameOnCard` | *string* | 256 | Cardholder name |
| `expirationMonth` | *string* | 2 | 2-digit card expiration month |
| `expirationyear` | *string* | 4 |  4-digit card expiration year |
| `securityCode` | *string* | 4 | A card security code *(CSC)*, card verification data *(CVD)*, card verification number, card verification value *(CVV)*, card verification value code, card verification code *(CVC)*, verification code *(V-code or V code)*, or signature panel code *(SPC)* |
| `securityCodeIndicator` | *string* | 15 | Indicates how the [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md#security-code-indicator) is passed |
| `bin` | *string* | 8 |  Bank Identification Number *(BIN)*, the initial set of four to six numbers of the Primary Account Number *(PAN)* and identifies the issuer |
| `last4` | *string* | 4 |  Last four digits of the Primary Account Number *(PAN)* |
| `scheme` | *string* | 256 |  Card brand received in the transaction response |
| `category` | *string* | 25 | Describes the card [category](#category-and-subcategory) |
| `subCategory` | *string* | 25 | Provides the [subcategory](#category-and-subcategory) for the `category` field to identify the card type |

<!--
type: tab
-->

JSON string format for `card`:

```json
{
  "card": {
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

### Category and Subcategory

The below table identifies the valid values of `category` and `subCategory`.

| Category | Subcategories |
| -------- | ------- |
| *GIFT* | *GIFT_SOLUTIONS* |
| *FLEET* | *FLEET_ONE*, *FUEL_MAN*, *MASTERCARD*, *VOYAGER*, *VOYAGER_ENHANCED*, *WEX*, *WEX_OTR*, *COMDATA*, *NGFC* |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Source Types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
