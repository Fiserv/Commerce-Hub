---
tags: [API Reference, Customer Details, Phone, Master Data]
---

# Customer Details

The transaction request may contain the `customer` object consisting of customer-specific data like; customer IDs, name, date of birth, [phone number](#phone-number), [vehicle details](?path=docs/Resources/Master-Data/Vehicle-Details.md), etc.  

<!--
type: tab
titles: customer, JSON Example 
-->

The below table identifies the parameters in the `customer` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `merchantCustomerId` | *string* | 1024 | Merchant's unique customer identifier |
| `firstName` | *string* | 256 | First name of the customer |
| `lastName` | *string* | 256 | Last name of the customer |
| `email` | *string* | 256 | Email address for the customer |
| `dateOfBirth` | *string* | 10 | Date of birth for the customer in YYYY-MM-DD format |
| `driverLicenseNumber` | *string* | 256 | Driver license number of the customer |
| `driverLicenseState` | *string* | 256 | Identifies the `driverLicenseNumber` state code |
| `passportNumber` | *string* | 256 | Customer passport number |
| `ssn` | *string* | 9 | Customer's Social Security Number *(SSN*) |
| `taxId` | *string* | | Customer tax ID number |
| `hostName` | *string* | 1024 | This field should contain the name of the server the customer is connected to |
| `ipAddress` | *string* | 39 | This field should contain the IP Address of the customer |
| `accountCode` | *string* | 64 | This response field contains the account code of the customer or business |
| `driverID` | *string* | 256 | This field represents the identification number of the driver |
| `department` | *string* | 256 | Identifies the department the customer belongs to |
| `jobId` | *string* | 256 | Job code for the customer |
| `workOrderNumber` | *string* | 256 | Used for the contract number or purchase order of the transaction |
| `idCardNumber` | *string* | 256 | The customer's ID based on merchant's industry or veritical. ***Example:** User ID or Sub-fleet number.* |
| `additionalData1` | *string* | 256 | Additional information related to customer based on industry or vertical. The data can be enhanced data, prompted data, or message data |
| `additionalData2` | *string* | 256 | Additional information related to customer based on industry or vertical. The data can be enhanced data, prompted data, or message data |
| `phone` | *array* | N/A | Customer [phone number](#phone-number) |
| `vehicle` | *object* | N/A | [Vehicle](?path=docs/Resources/Master-Data/Vehicle-Details.md) specific information |

<!--
type: tab
-->

JSON string format for the `customer` object.

```json
{
  "customer": {
    "merchantCustomerId": "234567",
    "firstName": "Joe",
    "lastName": "Smith",
    "dateOfBirth": "1990-01-01",
    "email": "customer@domain.com",
    "driverLicenseNumber": "456183789",
    "driverLicenseState": "GA",
    "passportNumber": "US124578885",
    "ssn": "123456789",
    "taxId": "987654321",
    "hostName": "dreamwave.com",
    "ipAddress": "170.165.02.26",
    "driverID": "45874",
    "workOrderNumber": "24561845",
    "idCardNumber": "12345",
    "additionalData1": "string",
    "additionalData2": "string",
    "department": "DP005778",
    "jobId": "JB20230001",
    "accountCode": "890611",
    "phone": {
      "countryCode": "91",
      "phoneNumber": "123-123-1234",
      "type": "DAY"
    },
    "vehicle": {
      "vehicleNumber": "5676912",
      "odometerReading": "78454",
      "tripNumber": "27112",
      "unitId": "578",
      "reeferHours": "14",
      "maintenanceId": "12321988",
      "trailerNumber": "78454",
      "hubometer": "0012353",
      "vehicleLicenseNumber": "U548212",
      "vehicleLicenseState": "NJ",
      "trailerLicenseNumber": "FAU15874",
      "trailerLicenseState": "NJ",
      "trailerHub": "33543"
    }
  }
}
```

<!-- type: tab-end -->

---

## Phone Number

The `phone` object contains the phone details of the customer.

<!--
type: tab
titles: phone, JSON Example
-->

The below table identifies the parameters in the `phone` object.

| Variable | Type |Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `countryCode` | *string* | 4 | Country's area code |
| `phoneNumber` | *string* | 15 | Customer phone number |
| `type` | *string* | 5 | This field indicates the type of phone number provided. ***Valid Values:** DAY, HOME, NIGHT, WORK, MOBILE* |

<!--
type: tab
-->

JSON string format for the `phone` object.

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
- [Address Details](?path=docs/Resources/Master-Data/Address.md)
- [Vehicle Details](?path=docs/Resources/Master-Data/Vehicle-Details.md)

---
