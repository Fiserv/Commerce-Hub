# Customer Details

## Overview

The transaction request may contain the customer details. The details consists of customer id, name, date of birth etc.

## Customer Details

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `merchantCustomerId` | *string* |  | Unique Customer Identifier. |
| `processorCustomerId` | *string* |  | UUID in Fiserv EV. |
| `name` | *string* |  | Customer first and last name. |
| `dob` | *string* |  | Customer date of birth in mmddyyyy format. |
| `email` | *string* |  | Customer email address. |
| `ipaddress` | *string* |  | This field should contain the IP Address of the customer. |
| `hostName` | *string* |  | This field should contain the name of the server the customer is connected to.|
| `locale` | *string* |  | The language of the receipt.|
| `driverLicenseNumber` | *string* |  | Customer Driver License Number.|
| `ssn` | *string* |  | Customer SSN or Tax ID.|
| `phone` | *component* |  | Cardholder [Phone Number](#phone-details)|


## Phone Details

Use this component to pass cardholder phone details.

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `countryCode` | *string* |  | ISO Country code. |
| `phoneNumber` | *string* |  | Cardholder phone number. |
| `type` | *string* |  | Type of phone number.</br>Available Values:</br>*BILLING* - Billing account phone number</br>*SHIPPING* - Shipping contact phone number</br>*CUSTOMER* - Customer phone number |

---

## See Also

- [API Explorer](url)
- [Customer Address](Address.md)