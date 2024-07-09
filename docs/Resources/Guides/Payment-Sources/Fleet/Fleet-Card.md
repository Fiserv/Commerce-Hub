---
tags: [Fleet, Petroleum, WEX, Mastercard, Visa, Voyager, Comdata, Private Label, Payment Sources, Payment Card, EMV, Track]
---

# Fleet Cards

Commerce Hub supports card based payments for Visa Fleet, Mastercard Fleet, Corpay *(formerly FleetCor; Fuelman, Fleetwide, Comdata)*, Wright Express *(WEX and OTR, Fleet One)*, Voyager, and Private Label *(proprietary)* using [*PaymentEMV*](?path=docs/In-Person/Encrypted-Payments/EMV.md), [*PaymentTrack*](?path=docs/In-Person/Encrypted-Payments/Track.md) or [*PaymentCard*](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) as the `sourceType`.


## Transaction Example




## Paramters

#### Request Variables

Required fields are based on the specific [card brand data requirements](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Brand-Req.md).

<!--
type: tab
titles: source, card
-->

The below table identifies the parameters in the `card` object.

<!-- theme: warning -->
> Not all Fleet BINs are part of the Commerce Hub BIN file, the merchant will need to provide [card category and sub-category](?path=docs/Resources/Master-Data/Card.md#category-and-sub-category) based on the Dynamic Card Table.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ----------- |---|
| `category` | *string* | 25 |  &#10004; | Identifies the card category as *FLEET* |
| `subCategory` | *string* | 25 |  &#10004; | Provides the [subcategory](?path=docs/Resources/Master-Data/Card.md#category-and-sub-category) for the `category` field to identify the card type |

<!--
type: tab
-->

<!-- type: tab-end -->



---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Customer Details](?path=docs/Resources/Master-Data/Customer-Details.md)
- [Fleet Payments](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Payment System Product Codes](?path=docs/Resources/Master-Data/Payment-System-Product-Codes.md)

---
