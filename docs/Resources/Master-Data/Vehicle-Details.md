---
tags: [API Reference, Customer Details, Vehicle Details, Fleet, Master Data]
---

# Vehicle Details

The transaction request may contain the `vehicle` details as part of the [customer details](?path=docs/Resources/Master-Data/Customer-Details.md), consisting of vehicle-specific data like; vehicle number, odometer reading, license number, trailer details, etc. These fields are used when processing a [fleet transaction](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md).

<!--
type: tab
titles: vehicle, JSON Example 
-->

The below table identifies the parameters in the `vehicle` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `vehicleNumber` | *string* | 256 | Identifies the vehicle number |
| `odometerReading` | *string* | 256 | The vehicle odometer reading keyed in by the customer or clerk |
| `tripNumber` | *string* | 256 | The trip number for the customer |
| `unitId` | *string* | 256 | The unit ID or unit number of the vehicle or customer |
| `maintenanceId` | *string* | 256 | Identifies the maintenance ID for the vehicle or customer |
| `vehicleLicenseNumber` | *string* | 256 | License plate number of the vehicle |
| `vehicleLicenseState` | *string* | 256 | Identifies the `vehicleLicenseNumber` [state or province code](?path=docs/Resources/Master-Data/State-Code.md) |
| `trailerNumber` | *string* | 256 | Trailer ID number for the customer |
| `hubometer` | *string* | 256 | Hubometer value of the vehicle or trailer |
| `reeferHours` | *string* | 256 | This field contains the reefer trailer's *(refrigerated trailer)* hours |
| `trailerLicenseNumber` | *string* | 256 | License plate number of the trailer |
| `trailerLicenseState` | *string* | 256 | Identifies the `trailerLicenseNumber` [state or province code](?path=docs/Resources/Master-Data/State-Code.md) |
| `trailerHub` | *string* | 256 | Identifies the trailer hub serial number keyed in by the customer or clerk |

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
    "maintenanceId": "12321988",
    "vehicleLicenseNumber": "U548212",
    "vehicleLicenseState": "NJ",
    "trailerNumber": "78454",
    "hubometer": "0012353",
    "reeferHours": "14",
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
