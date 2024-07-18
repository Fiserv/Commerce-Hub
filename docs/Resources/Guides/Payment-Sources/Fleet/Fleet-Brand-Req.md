---
tags: [Fleet, Petroleum, WEX, Mastercard, Visa, Voyager, Comdata, Private Label, Payment Sources ]
---

# Fleet Brand Requirements

Fleet brands require specific data requirements when processing a [Fleet transactions](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md). This information is obtained from a [Dynamic Card Table](#dynamice-card-table) or through the [initial authorization](#authorization-prompt) based on the brand.

---

## Dynamic Card Table

The device or application must be able to read a Dynamic Card Table downloaded from the fleet brand or payment processor. In the case where an a table download is not supported, the device or application must provide a method to determine whether specific transactions are allowed.

<!-- theme: info -->
> The third-party vendor or merchant is required for managing the table file download. Please contact your account representative for more details.

---

## Authorization Prompt

The device or application must be able to interpret the Commerce Hub authorization response to determine the required fields. The response will contain the details in `processorResponseDetails.additionalInfo`. When the transaction is complete all values entered by the customer must be sent in the [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) request.

| Response Code | Requirements |
| ----- | ----- |
| *APPROVED* | The device or application must verify the validity of the prompts based on the data returned in the authorization response before authorization the pump to active |
| *DECLINED (DX?)* | The authorizer requires additional information to be submitted before the pump is authorized. The device must request the prompts indicated and perform another authorization request. |
| *DECLINED (D7)* | The authorizer has indicated a value does not match. Invalid prompts will be indicated with a ?. These transactions can be retried after re-prompting for the incorrect values. |

#### Purchase Restrictions

When procssing a transaction to Commerce Hub the limits for each allowed product category for the payment instrument will be returned in the `orderData` object in the authorization response. The `itemDails` will contain the `description` and `netAmount` limit for the product category. Any product category not included in the authorization response is considered not allowed by the brand. In offline processing mode, the device must make the determination about what products are allowed for offline purchase based on settings in the Dynamic Table.

---

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful WEX [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using a *PaymentEMV*. Required fields are based on the specific [card brand prompt requirements](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Brand-Req.md). The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 66.17,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    },
    "card": {
      "category": "FLEET",
      "subCategory": "WEX_OST"
    }
  },
  "transactionDetails": {
    "captureFlag": false
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001",
    "terminalLaneNumber": "01",
    "siteTypeIndicator": "RETAIL"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "additionalPosInformation": {
      "attendedTerminalData": "UNATTENDED",
      "cardholderActivatedTerminalInformation": "CAT_LEVEL_2",
      "dataEntrySource": "AUTOMATED_FUEL_DISPENSING_MACHINE",
      "terminalLocation": "ON_PREMISE",
      "terminalOperator": "CUSTOMER",
      "posFeatures": {
        "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
        "terminalEntryCapability": "CHIP_MAG_STRIPE"
      }
    }
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE_SALE",
    "transactionState": "CAPTURED",
    "transactionOrigin": "RETAIL",
    "transactionProcessingDetails": {
      "orderId": "CHG01dec589299d309240fb51cb8957234868",
      "transactionTimestamp": "2024-03-07T22:23:21.506426965Z",
      "apiTraceId": "ae33c0c0dad948148aa4e00b14b15e0c",
      "clientRequestId": "5389247",
      "transactionId": "ae33c0c0dad948148aa4e00b14b15e0c"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 66.17,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "3212",
      "referenceNumber": "0021-becf314f-59cf-4a75-9133-f3f1495d862d",
      "processor": "FISERV",
      "host": "BUYPASS",
      "networkRouted": "GECC/Wright Exp",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "0",
      "hostResponseMessage": "Approved",
      "bankAssociationDetails": {
        "transactionTimestamp": "2024-03-07T16:23:00Z"
      }
    }
  },
  "source": {
    "sourceType": "PaymentEMV",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "02",
      "expirationYear": "2035"
    },
    "emvData": "8a0230309f36020073910a1be55403be070aa53030"
  },
  "networkDetails": {
    "systemTrace": "1400310000032032697430",
    "networkResponseStatus": "1",
    "networkResponseCode": "07"
  },
  "transactionDetails": {
    "captureFlag": true,
    "transactionCaptureType": "host",
    "retrievalReferenceNumber": "e00b14b15e0c",
    "transactionCutTimeStamp": "2024-03-08T05:00:00Z"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "ICR_RELIABLE",
    "posConditionCode": "CARD_PRESENT",
    "additionalPosInformation": {
      "attendedTerminalData": "UNATTENDED",
      "cardholderActivatedTerminalInformation": "CAT_LEVEL_2",
      "dataEntrySource": "AUTOMATED_FUEL_DISPENSING_MACHINE",
      "terminalLocation": "ON_PREMISE",
      "terminalOperator": "CUSTOMER",
      "posFeatures": {
        "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
        "terminalEntryCapability": "EMV_CONTACTLESS"
      }
    }
  },
  "orderData": {
    "itemDetails": [
      {
        "paymentSystemProductCode": "001",
        "itemDescription": "Regular",
        "quantity": 18.385,
        "unitOfMeasurement": "GALLON",
        "itemType": "PRODUCT",
        "itemSubType": "FUEL",
        "amountComponents": {
          "unitPrice": 3.599,
          "netAmount": 66.17
        }
      }
    ]
  }
}
```

<!-- type: tab-end -->

---

## Device Prompts

The device or application must be able to prompt for specific [customer details](?path=docs/Resources/Master-Data/Customer-Details.md) or [vehicle details](?path=docs/Resources/Master-Data/Vehicle-Details.md) for all fleet transactions defined by the [Dynamic Card Table](#dynamic-card-table) or [authorization response](#authorization-prompt). The device or application must prompt for the data appropriate to the transaction it will be performing, and provide the details in the respective fields. Prompts flagged as optional do not have to be offered.

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

Corpay *(Fleetwide and Fuelman)* have no product restrictions. The below table outlines the fields that can prompt for Corpay.

| Object | Field | Swipe/Chip/Contactless | Manual Entry |
| ----- | ----- | :-----: | :-----: |
| `customer` | `driverId` | &#10004; | &#10004; |
| `customer::vehicle` | `odometerReading` | &#10004; | &#10004; |

<!--
type: tab
-->

Fleet One has no product restrictions. The below table outlines the fields that can prompt for Fleet One.

| Object | Field | Swipe/Chip/Contactless | Manual Entry |
| ----- | ----- | :-----: | :-----: |
| `customer::vehicle` | `odometerReading` | &#10004; | &#10004; |
| `customer::vehicle` | `vehicleNumber` | &#10004; | &#10004; |

<!--
type: tab
-->

Mastercard Fleet is retricted to fuel only if the Product Restriction Code = 2, otheriwse all products are allowed. The below table outlines the fields that can prompt for Mastercard Fleet based on the Product Type Code or if always required.

| Object | Field | Swipe/Chip/Contactless | Manual Entry |
| ----- | ----- | :-----: | :-----: |
| `customer` | `driverId` | 3 | |
| `customer` | `idCardNumber` | 1 | &#10004; |
| `customer::vehicle` | `odometerReading` | 1, 2, 3, or 4 | &#10004; |
| `customer::vehicle` | `vehicleNumber` | 2 | |

<!--
type: tab
-->

Visa Fleet is retricted to fuel only if the Service Enhancement Indicator = 2 or fuel and maintenance if = 1, otheriwse all products are allowed. The below table outlines the fields that can prompt for Visa Fleet based on the Service Prompt or if always required.

<!--theme: info -->
> A Visa fleet card transaction must comply with fleet data requirements, in order to be eligible for reduced commercial interchange rates, such as [Commercial Level II or Level III](?path=docs/Resources/Guides/Level23/Level23.md).

#### Swipe and Manual Entry

| Object | Field | Swipe | Manual Entry |
| ----- | ----- | :-----: | :-----: |
| `customer` | `driverId` | 3 | |
| `customer` | `idCardNumber` | 1, 6 | &#10004; |
| `customer::vehicle` | `odometerReading` | 1, 2, 3, 4 | &#10004; |
| `customer::vehicle` | `vehicleNumber` | 2 | |

#### Visa 2.0 EMV

Visa Fleet 2.0 is a new fleet EMV standard that harnesses the additional capabilities of EMV at the fuel pump. In addition to more driver prompt options, this functionality enables commercial clients to restrict card use at fuel merchants to certain fuel and non-fuel product categories.

The below table outlines the required fields to prompt for Visa Fleet 2.0.

| Prompt Tokens | Object | Field |
| ----- | ----- | ----- |
| AD1 | `customer` | `additionalData1` |
| AD2 | `customer` | `additionalData1` |
| DRI | `customer` | `driverId` |
| EMP | `customer` | `jobId` |
| GEN | `customer` | `idCardNumber` |
| ODM | `customer::vehicle` | `odometerReading` |
| TRL | `customer::vehicle` | `trailerNumber` |
| VHI | `customer::vehicle` | `vehicleNumber` |
| WON | `customer` | `workOrderNumber` |

<!--
type: tab
-->

Voyager is retricted to fuel only if the second digit of the Product Restriction Code = 1, otheriwse all products are allowed. The below table outlines the fields that can prompt for Voyager based on the first digit of the Product Restriction Code or if always required.

#### Swipe and Manual Entry

| Object | Field | Swipe | Manual Entry |
| ----- | ----- | :-----: | :-----: |
| `customer` | `driverId` | 1, 3 | 1, 3 |
| `customer::vehicle` | `odometerReading` | 2, 3 | 2, 3 |

#### EMV

EMV chip and contactless use EMV DF Tags and must use the Prompting Script File to determine appropriate prompts until *no record found* result. If the Prompting Script File is not to be used, then the Product Type Code should be used to determine which prompts to offer the
cardholder.

The below table outlines the required fields to prompt for Voyager.

| EMV Tag | Object | Field |
| ----- | ----- | ----- |
| DF10 | `customer` | `jobId` |
| DF11 | `customer::vehicle` | `vehicleNumber` |
| DF12 | `customer` | `driverId` |
| DF13 | `customer::vehicle` | `odometerReading` |
| DF20 | `customer::vehicle` | `trailerNumber` |
| DF21 | `customer::vehicle` | `reeferHours` |
| DF22 | `customer::vehicle` | `tripNumber` |
| DF23 | `customer` | `idCardNumber` |
| DF24 | `customer::vehicle` | `unitId` |
| DF25 | `customer` | `workOrderNumber` |
| DF26 | `customer` | `driverLicenseNumber` |
| DF27 | `customer` | `driverLicenseState` |
| DF28 | `customer::vehicle` | `vehicleLicenseNumber` |
| DF29 | `customer::vehicle` | `vehicleLicenseStater` |
| DF30 | `customer::vehicle` | `trailerLicenseNumber` |
| DF31 | `customer::vehicle` | `trailerLicenseStater` |
| DF32-DF6F | `customer` | `additionalData1` |

<!--
type: tab
-->

Wright Express *(WEX)* is retricted to fuel only if in offline mode and the Purchase Restriction = 00, otheriwse all products are allowed.

<!-- theme: info -->
> If the device finds values not included in this table, it should prompt for `driverId` and `odometerReading`.

#### Manual Entry

For manual entry thransactions enter the Prompt Code on the card, otherwise always prompt for the `driverId`, `idCardNumber` and `odometerReading`. The `vehicleNumber` is always required.

#### Swiped

Swiped transactions uses fields 6 and 10 of the `track2Data`. The below table outlines the required fields to prompt for WEX.

| Field 6 | Field 10 | `customer` | `customer::vehicle` |
| ----- | ----- | ----- | ----- |
| 0 | 0 | | |
| 1 | 0 | `driverId` | `odometerReading`|
| 1 | 1 | | `odometerReading`, `vehicleNumber` |
| 1 | 2 | | `odometerReading` |
| 1 | 3 | `driverId` | `vehicleNumber` |
| 1 | 4 | `driverId` | |
| 1 | 5 | | `vehicleNumber` |
| 1 | 6 | `driverId`, `jobId` | |
| 1 | 7 | `jobId` | `vehicleNumber` |
| 1 | 8 | `driverId` | `odometerReading`, `vehicleNumber` |
| 1 | 9 | `driverId`, `jobId` | `odometerReading` |
| 3 | 3 | `idCardNumber` | `vehicleNumber` |
| 3 | 4 | `driverId`, `idCardNumber` | |
| 3 | 5 | `department`, `driverId` | |
| 3 | 7 | `department` | `vehicleNumber` |
| 3 | 8 | `department`, `driverId` | `odometerReading` |
| 4 | 0 | `department` | `odometerReading`, `vehicleNumber` |
| 4 | 3 | `additionalData1`, `department` | `vehicleNumber` |
| 4 | 4 | `additionalData1`, `driverId`, `idCardNumber` | |
| 4 | 5 | `additionalData1`, `driverId` | |
| 4 | 9 | `additionalData1` | |
| 5 | 1 | `additionalData1` | `vehicleNumber` |

#### EMV

EMV chip and contactless use EMV Tag DF30. The below table outlines the required fields to prompt for WEX.

| Bits 8-4 | Hex | Object | Field |
| ----- | ----- | ----- | ----- |
| 00001 | 0D0040 | `customer` | `idCardNumber` |
| 00010 | 110040 | `customer::vehicle` | `vehicleNumber` |
| 00100 | 250040 | `customer` | `driverId` |
| 00101 | 2900C0 | `customer::vehicle` | `odometerReading` |
| 01001 | 4D0040 | `customer` | `workOrderNumber` |
| 01011 | 5D0040 | `customer::vehicle` | `tripNumber` |
| 01100 | 650040 | `customer::vehicle` | `unitId` |
| 01101 | 690040 | `customer::vehicle` | `reeferHours` |
| 10001 | 890040 | `customer` | `additionalData1` |
| 10101 | AD0040 | `customer` | `jobId` |
| 10110 | B50040 | `customer::vehicle` | `maintenanceId` |
| 10111 | BD0040 | `customer` | `department` |
| 11010 | D10040 | `customer::vehicle` | `hubometer` |
| 11000 | C50040 | `customer::vehicle` | `trailerNumber` |

<!--
type: tab
-->

WEX OTR requires an [authorization request](#authorization-prompt) to determine the required prompts and purchase restrictions.

<!-- theme: info-->
> Manual entry is not allowed for any WEX OTR card.

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
