# Customer Address


## Overview

In some cases merchant may need to send the cardholder address in the transaction request for specific alternative payment methods or relevant for fraud prevention purpose. They can include billing and shipping information in the request by using the following fields. Address is categorized in to 2 types

## Billing Address

Is an address connected to the customer's [payment method](Source-Type.md).

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `name` | *string* |  | Customer First and Last name |
| `street` | *string* |  | Street name |
| `houseNumberOrName` | *string* |  | House number or name |
| `city` | *string* |  | City or locality |
| `stateOrProvince` | *string* |  | State or Province name |
| `postalCode` | *string* |  | Postal code |
| `country` | *string* |  | [Country Code](Country-Code.md)|


## Shipping Address

Is an address where merchant will send the order. 

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `name` | *string* |  | Customer First and Last name |
| `shippingMethod` | *string* |  | Shipping and delivery method Example (*SAME_DAY, OVERNIGHT*) |
| `street` | *string* |  | Street name |
| `houseNumberOrName` | *string* |  | House number or name |
| `city` | *string* |  | City or locality |
| `stateOrProvince` | *string* |  | State or Province name |
| `postalCode` | *string* |  | Postal code |
| `country` | *string* |  | [Country Code](Country-Code.md)|

