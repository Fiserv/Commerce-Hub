# Customer Details

## Overview

The transaction request may contain the `customerDetails` consisting of customer specific data like; customer id, name, date of birth, phone number, etc.

#### customerDetails

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `merchantCustomerId` | *string* |  | Unique customer identifier. |
| `processorCustomerId` | *string* |  | UUID in Fiserv EV. |
| `name` | *string* |  | Customer first and last name. |
| `dob` | *string* |  | Customer date of birth in mmddyyyy format. |
| `email` | *string* |  | Customer email address. |
| `ipaddress` | *string* |  | This field should contain the IP Address of the customer. |
| `hostName` | *string* |  | This field should contain the name of the server the customer is connected to.|
| `locale` | *string* |  | The language of the receipt.|
| `driverLicenseNumber` | *string* |  | Customer Driver License Number.|
| `ssn` | *string* |  | Customer SSN or Tax ID.|
| `phone` | *object* |  | Customer [phone number](#phone-number).|

---

### Phone Number

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `countryCode` | *string* |  | Country's area code. |
| `phoneNumber` | *string* |  | Customer phone number. |
| `type` | *string* |  | This field indicates the type of phone number provided. Valid Values: *DAY*, *HOME*, *NIGHT*, WORK |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Customer Address](?path=docs/Resources/Master-Data/Address.md)

---
