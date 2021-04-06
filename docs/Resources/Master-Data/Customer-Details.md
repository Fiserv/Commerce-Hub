# Customer Details

## Overview

The transaction request may contain the `customerDetails` consisting of customer specific data like; customer id, name, date of birth, phone number, etc.

#### Component customerDetails

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
| `phone` | *array* |  | Cardholder [Phone Number](#subcomponent-phone)|


#### Subcomponent: phone

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `countryCode` | *string* |  | ISO Country code. |
| `phoneNumber` | *string* |  | Cardholder phone number. |
| `type` | *string* |  | This field indicates the type of phone number given. Valid Values: *DAY*, *HOME*, *NIGHT*, WORK |

---

## See Also

- [API Explorer](url)
- [Customer Address](Address.md)