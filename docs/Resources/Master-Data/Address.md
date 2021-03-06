---
tags: [carat, commerce-hub, enterprise, customer-address, billing-address, master-data, shipping-address, shipping-method]
---

# Customer Address

A merchant may need to send the customer's address in the transaction request for specific alternative payment methods or relevant for fraud prevention purpose. The merchant can include the `billingAddress` and/or `shippingAddress` objects in the request.

---

## Billing Address

Is the address connected to the customer's [payment method](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) and can be used for [address verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md).


<!--
type: tab
title: billingAddress
-->

The below table identifies the parameters in the `billingAddress` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `firstName` | *string* | 256 | Customer first name. |
| `lastName` | *string* | 256 | Customer last name. |
| `address` | *object* | N/A  | Billing [address](#address) details. |
| `phone` | *object* | N/A | Customer [phone](?path=docs/Resources/Master-Data/Customer-Details.md#subcomponentphone) details. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `billingAddress`:

```json
{
   "billingAddress":{
      "firstName": "John",
      "lastName": "Doe",
      "address":{
         "street": "123 Main St.",
         "houseNumberOrName": "Apt 1",
         "city": "Atlanta",
         "stateOrProvince": "GA",
         "postalCode": "30301",
         "country": "US"
         "addressHistory": "FIRST"
      },
      "phone":{
         "countryCode": "1",
         "phoneNumber": "123-123-1234",
         "type": "DAY"
      }
   }
}
```

<!-- type: tab-end -->


---

## Shipping Address

Is the address or email where the merchant will deliver the goods or services.

<!--
type: tab
title: shippingAddress
-->


The below table identifies the parameters in the `shippingAddress` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `firstName` | *string* | 256  | Shipping contact first name |
| `lastName` | *string* | 256 | Shipping contact last name |
| `shippingMethod` | *string* | 256 | [Shipping and delivery method](#shipping-method) |
| `shipToEmail` | *string* | 13 | Email on a digital delivery transaction |
| `address` | *object* | N/A | Shipping [address](#address) details |
| `phone` | *object* | N/A | Shipping contact [phone](?path=docs/Resources/Master-Data/Customer-Details.md#subcomponentphone) details |

<!--
type: tab
title: JSON Example
-->

JSON string format for `shippingAddress`:

```json
{
   "shippingAddress":{
      "firstName": "Jane",
      "lastName": "Doe",
      "shippingMethod": "SAME_DAY",
      "shipToEmail": "customer@domain.com",
      "address":{
         "street": "112 Main St.",
         "houseNumberOrName": "Apt 112",
         "city": "Atlanta",
         "stateOrProvince": "GA",
         "postalCode": "30301",
         "country": "US"
         "addressHistory": "FIRST"
      },
      "phone":{
         "countryCode": "1",
         "phoneNumber": "123-123-1234",
         "type": "DAY"
      }
   }
}
```

<!-- type: tab-end -->

#### Shipping Method

The below table identifies the valid values of `shippingMethod`.

| Value | Description |
| ----- | ----------- |
| *SAME_DAY* | Same day shipping |
| *OVERNIGHT* | Next day shipping |
| *PRIORITY* | Shipping within 2-3 days |
| *GROUND* | Shipping within 4 days |
| *ELECTRONIC* | Email or digital goods |
| *SHIP_TO_STORE* | Ship to store |

---

## Address

Common `address` object used in both the billing address and shipping address.
<!--
type: tab
title: address
-->


The below table identifies the parameters in the `address` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `street` | *string* | 256 | Street address |
| `houseNumberOrName` | *string* | 256 | Secondary address information e.g. house number or name |
| `recipientNameOrAddress` | *string* | 256 | Tertiary address information e.g. recipeint name, company name or address |
| `city` | *string* | 256 | City or locality |
| `stateOrProvince` | *string* | 256 | State or province name |
| `postalCode` | *string* | 10 | Postal code |
| `country` | *string* | 256 | [ISO country code](?path=docs/Resources/Master-Data/Country-Code.md).|
| `addressHistory` | *string* | 18 | Update history of the address on file. **Valid Values:** *FIRST*, *LESS_THAN_30_DAYS*, *30_60_DAYS*, *60_90_DAYS*, *OVER_90_DAYS* |

<!--
type: tab
title: JSON Example
-->

JSON string format for `address`:

```json
{
   "address":{
      "street": "112 Main St.",
      "houseNumberOrName": "Apt 213",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30301",
      "country": "US"
      "addressHistory": "FIRST"
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)

---
