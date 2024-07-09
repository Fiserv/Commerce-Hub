---
tags: [API Reference, Customer Details, Vehicle Details, Fleet, Master Data]
---

# Vehicle Details

The transaction request may contain the `vehicle` details as part of the [customer details](?path=docs/Resources/Master-Data/Customer-Details.md), consisting of vehicle-specific data like; vehicle number, odometer reading, license number, trailer details, etc. These fields are used when processing a [Fleet transaction](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md).

<!--
type: tab
titles: vehicle, JSON Example 
-->

The below table identifies the parameters in the `vehicle` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `vehicleNumber` | *string* | 256 | This field identifies the vehicle number |
| `odometerReading` | *string* | 256 | This field identifies the vehicle odometer reading keyed in by the customer or clerk |
| `tripNumber` | *string* | 256 | This field contains the trip number |
| `unitId` | *string* | 256 | This field contains the unit ID |
| `reeferHours` | *string* | 256 | This field contains the reefer trailer's *(refrigerated trailer)* hours |
| `maintenanceId` | *string* | 256 | This field contains the maintenance ID |
| `trailerNumber` | *string* | 256 | This field contains the trailer ID number |
| `hubometer` | *string* | 256 | This field contains the hubometer value |
| `vehicleLicenseNumber` | *string* | 256 | This field contains Vehicle license number |
| `vehicleLicenseState` | *string* | 256 | This field contains the vehicle license state code |
| `trailerLicenseNumber` | *string* | 256 | This field contains trailer license number |
| `trailerLicenseState` | *string* | 256 | This field contains the trailer license state code |
| `trailerHub` | *string* | 256 | This field identifies the trailer hub serial number keyed in by the customer or clerk |

<!--
type: tab
-->

JSON string format for the `vehicle` object:

```json
{
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
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Customer Details](?path=docs/Resources/Master-Data/Customer-Details.md)
- [Fleet Transactions](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md)

---
