---
tags: [Fleet, Petroleum, WEX, Mastercard, Visa, Voyager, Comdata, Private Label, Payment Sources ]
---

# Fleet Brand Requirements

Fleet brands require specific data requirements when processing a [Fleet transactions](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md). This information is obtained from a [Dynamic Card Table](#dynamice-card-table) or through the [initial authorization](#authorization-prompt) based on the brand.

---

## Dynamice Card Table

The device or application must be able to read a Dynamic Card Table downloaded from the fleet brand or payment processor. In the case where an a table download is not supported, the device or application must provide a method to determine whether specific transactions are allowed.

<!-- theme: info -->
> The third-party vendor or merchant is required for managing the table file download. Please contact your account representative for more details.

---

## Authorization Prompt

The device or application must be able to interpret the Commerce Hub authorization response to determine the required fields. The response will contain the details in `processorResponseDetails.additionalInfo`. When the transaction is complete all values entered by the customer must be sent in the [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) request.

| Response Code | Requirements |
| ----- | ----- |
| APPROVED | The device or application must verify the validity of the prompts based on the data returned in the authorization response before authorization the pump to active |
| DECLINED (DX?) | The authorizer requires additional information to be submitted before the pump is authorized. The device must request the prompts indicated and perform another authorization request. |
| DECLINED (D7) | The authorizer has indicated a value does not match. Invalid prompts will be indicated with a ?. These transactions can be retried after re-prompting for the incorrect values. |

---

### Purchase Restrictions

When procssing a transaction to Commerce Hub the limits for each allowed product category for the payment instrument will be returned in the `orderData` object in the authorization response. The `itemDails` will contain the `description` and `netAmount` limit for the product category. Any product category not included in the authorization response is considered not allowed by the brand. In offline processing mode, the device must make the determination about what products are allowed for offline purchase based on settings in the Dynamic Table.

---

## Device Prompts

The device or application must be able to prompt for specific customer or vehicle details for all fleet transactions. The device or application must prompt for the data appropriate to the transaction it will be performing, and provide the details in the respective fields. Prompts flagged as optional do not have to be offered.


<!--
type: tab
titles: Comdata, Express Code, ComCheck, Corpay, Fleet One, Mastercard, Visa, Voyager, WEX, WEX OTR, Money Code
-->

The below table outlines the fields that can prompt for Comdata.


<!--
type: tab
-->

The below table outlines the fields that can prompt for Comdata Express Code.


<!--
type: tab
-->

The below table outlines the fields that can prompt for Comdata ComCheck.

<!--
type: tab
-->

The below table outlines the fields that can prompt for Corpay.

<!--
type: tab
-->

The below table outlines the fields that can prompt for Fleet One.

<!--
type: tab
-->

The below table outlines the fields that can prompt for Mastercard Fleet.

<!--
type: tab
-->

The below table outlines the fields that can prompt for Visa Fleet.

<!--
type: tab
-->

The below table outlines the fields that can prompt for Voyager.

<!--
type: tab
-->

The below table outlines the fields that can prompt for WEX.

<!--
type: tab
-->

The below table outlines the fields that can prompt for WEX OST.

<!--
type: tab
-->

The below table outlines the fields that can prompt for WEX Money Code.

<!-- type: tab-end -->

| Object | Field | Description |
| ----- | :-----: | ----- |
| `customer` | `firstName` | First name of the customer |
| `customer` | `lastName` | Last name of the customer |
| `customer` | `dateOfBirth` | Date of birth for the customer in YYYY-MM-DD format |
| `customer` | `driverLicenseNumber` | Driver license number of the customer |
| `customer` | `driverLicenseState` | Identifies the `driverLicenseNumber` state code |
| `customer` | `driverId` | Represents the identification number of the driver|
| `customer` | `department` | Identifies the department the customer belongs to |
| `customer` | `jobId` | Job code for the customer |
| `customer` | `idCardNumber` | The customer's ID based on merchant's industry or veritical. ***Example:** User ID or Sub-fleet number.* |
| `customer` | `workOrderNumber` | Used for the contract number or purchase order of the transaction |
| `customer` | `additionalData1` | Additional information related to customer based on industry or vertical. The data can be enhanced data, prompted data, or message data |
| `customer` | `additionalData2` | Additional information related to customer based on industry or vertical. The data can be enhanced data, prompted data, or message data |
| `customer::vehicle` | `vehicleNumber` | Identifies the vehicle number |
| `customer::vehicle` | `odometerReading` | The vehicle odometer reading keyed in by the customer or clerk |
| `customer::vehicle` | `tripNumber` | The trip number for the customer |
| `customer::vehicle` | `unitId` | The unit ID or unit number of the vehicle or customer |
| `customer::vehicle` | `maintenanceId` | Identifies the maintenance ID for the vehicle or customer |
| `customer::vehicle` | `vehicleLicenseNumber` | License plate number of the vehicle |
| `customer::vehicle` | `vehicleLicenseState` | Identifies the `vehicleLicenseNumber` state code |
| `customer::vehicle` | `trailerNumber` | Trailer ID number for the customer |
| `customer::vehicle` | `hubometer` | Hubometer value of the vehicle or trailer |
| `customer::vehicle` | `reeferHours` | The reefer trailer's *(refrigerated trailer)* hours |
| `customer::vehicle` | `trailerLicenseNumber` | License plate number of the trailer |
| `customer::vehicle` | `trailerLicenseState` | Identifies the `trailerLicenseNumber` state code |
| `customer::vehicle` | `trailerHub` | Identifies the trailer hub serial number keyed in by the customer or clerk |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Customer Details](?path=docs/Resources/Master-Data/Customer-Details.md)
- [Fleet Payments](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md)
- [Order Data](?path=docs/Resources/Master-Data/Order-Data.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment System Product Codes](?path=docs/Resources/Master-Data/Payment-System-Product-Codes.md)
- [Vehicle Details](?path=docs/Resources/Master-Data/Vehicle-Details.md)

---
