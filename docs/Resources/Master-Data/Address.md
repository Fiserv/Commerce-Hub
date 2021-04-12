# Customer Address

## Overview

A merchant may need to send the customer's address in the transaction request for specific alternative payment methods or relevant for fraud prevention purpose. The merchant can include the `billingAddress` and `shippingAddress` information in the request by using the following fields.

---

## Billing Address

Is an address connected to the customer's [payment method](../Guides/Payment-Sources/Source-Type.md).

#### Component: billingAddress

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `firstName` | *string* |  | Customer first name. |
| `lastName` | *string* |  | Customer last name. |
| `address` | *array* |  | Billing [address](#subcomponent-address) details. |
| `phone` | *array* |  | Customer [phone](Customer-Details.md#subcomponent-phone) details. |

---

## Shipping Address

Is an address where merchant will send the order. 

#### Component: shippingAddress

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `firstName` | *string* |  | Shipping contact first name. |
| `lastName` | *string* |  | Shipping contact last name.|
| `shippingMethod` | *string* |  | [Shipping and delivery method](#shipping-method-valid-values).|
| `address` | *array* |  | Shipping [address](#subcomponent-address) details. |
| `phone` | *array* |  | Shipping contact [phone](Customer-Details.md#subcomponent-phone) details. |

### Shipping Method

#### Object: shippingMethod

| Value | Description |
| ----- | ----------- |
| SAME_DAY | Same day shipping |
| OVERNIGHT | Next day shipping |
| PRIORITY | Shipping within 2-3 days |
| GROUND | Shipping within 4 days |
| ELECTRONIC | Email or digital goods |
| SHIP_TO_STORE | Ship to store |

---

## Address

#### Subcomponent: address

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `street` | *string* |  | Street name |
| `houseNumberOrName` | *string* |  | House number or name |
| `city` | *string* |  | City or locality |
| `stateOrProvince` | *string* |  | State or Province name |
| `postalCode` | *string* |  | Postal code |
| `country` | *string* |  | [Country Code](?path=docs/Resources/Master-Data/Country-Code.md)|

---

## See Also

- [API Explorer](url)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)

---