---
tags: [API Reference, Customer Details, Master Data]
---

# Customer Details

The transaction request may contain the `customerDetails` consisting of customer specific data like; customer id, name, date of birth, phone number, etc.  

<!--
type: tab
titles: customer, JSON Example 
-->

The below table identifies the parameters in the `customer` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `merchantCustomerId` | *string* | 1024 | Merchant's unique customer identifier |
| `processorCustomerId` | *string* | 1024 | Processor's unique customer identifier |
| `firstName` | *string* | 256 | Customer first name |
| `lastName` | *string* | 256 | Customer last name |
| `dob` | *string* | 10 | Customer date of birth in YYYY-MM-DD format |
| `email` | *string* | 256 | Customer email address |
| `ipaddress` | *string* | 39 | This field should contain the IP Address of the customer. |
| `hostName` | *string* | 1024 | This field should contain the name of the server the customer is connected to.|
| `locale` | *string* | 256 | The language of the receipt|
| `driverLicenseNumber` | *string* | 256 | Customer Driver License Number |
| `ssn` | *string* | 9 | Customer SSN or Tax ID |
| `phone` | *array* | N/A | Customer [phone number](#phone-number) |


<!--
type: tab
-->

JSON string format for `customer`:

```json
{
   "customer":{
      "merchantCustomerId": "234567",
      "processorCustomerId": "1122334",
      "firstName": "Joe",
      "lastName": "Smith",
      "dob": "1990-01-01",
      "email": "def@gmail.com",
      "ipAddress": "170.165.02.26",
      "hostName": "dreamwave.com",
      "locale": "ENGLISH",
      "driverLicenseNumber": "GA456183789",
      "ssn": "123456789",
      "phone":{
         "countryCode": "91",
         "phoneNumber": "123-123-1234",
         "type": "DAY"
      }
   }
}
```

<!-- type: tab-end -->
 
---

## Phone Number

Object contains the phone details of the customer.

<!--
type: tab
titles: phone, JSON Example
-->

The below table identifies the parameters in the `phoneNumber` object.

| Variable | Type |Maximum Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `countryCode` | *string* | 4 | Country's area code |
| `phoneNumber` | *string* | 15 | Customer phone number |
| `type` | *string* | 5 | This field indicates the type of phone number provided. Valid Values: *DAY*, *HOME*, *NIGHT*, *WORK*, *MOBILE*. |

<!--
type: tab
-->
 
JSON string format for `phoneNumber`:

```json
{
   "phone":{
      "countryCode": "91",
      "phoneNumber": "123-123-1234",
      "type": "DAY"
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Customer Address](?path=docs/Resources/Master-Data/Address.md)

---
