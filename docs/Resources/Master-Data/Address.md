# Customer Address

A merchant may need to send the customer's address in the transaction request for specific alternative payment methods or relevant for fraud prevention purpose. The merchant can include the `billingAddress` and/or `shippingAddress` objects in the request.

---

## Billing Address

Is the address connected to the customer's [payment method](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) and can be used for [address verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md).


<!--
type: tab
title: billingAddress
-->

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `firstName` | *string* | 256 | Customer first name. |
| `lastName` | *string* | 256 | Customer last name. |
| `address` | *object* |  | Billing [address](#address) details. |
| `phone` | *object* |  | Customer [phone](?path=docs/Resources/Master-Data/Customer-Details.md#subcomponentphone) details. |

<!--
type: tab
title: JSON Example
-->

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

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `firstName` | *string* | 256  | Shipping contact first name. |
| `lastName` | *string* | 256 | Shipping contact last name.|
| `shippingMethod` | *string* | 256 | [Shipping and delivery method](#shipping-method).|
| `shipToEmail` | *string* | 13 | Email on a digital delivery transaction. |
| `address` | *object* |  | Shipping [address](#address) details. |
| `phone` | *object* |  | Shipping contact [phone](?path=docs/Resources/Master-Data/Customer-Details.md#subcomponentphone) details. |

<!--
type: tab
title: JSON Example
-->

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

### Shipping Method

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

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `street` | *string* | 256 | Street address. |
| `houseNumberOrName` | *string* | 256 | Secondary address information e.g. house number or name. |
| `city` | *string* | 256 | City or locality. |
| `stateOrProvince` | *string* | 256 | State or province name. |
| `postalCode` | *string* | 10 | Postal code. |
| `country` | *string* | 256 | [ISO country code](?path=docs/Resources/Master-Data/Country-Code.md).|

<!--
type: tab
title: JSON Example
-->

```json
{
   "address":{
      "street": "112 Main St.",
      "houseNumberOrName": "Apt 213",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30301",
      "country": "US"
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