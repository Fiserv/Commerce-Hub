---
tags: [Fleet, Petroleum, WEX, Mastercard, Visa, Voyager, Comdata, Private Label, Payment Sources ]
---

# Fleet Brand Requirements

Fleet brands require specific data requirements when processing [Fleet transactions](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md). This information is obtained from a [Dynamic Card Table](#dynamic-card-table-prompts) or through the [initial authorization or verification request](#authorizationverification-prompts) based on the brand.

---

## Dynamic Card Table Prompts

The device or application must be able to read a Dynamic Card Table downloaded from the Fleet brand or payment processor. In the case where an a table download is not supported, the device or application must provide a method to determine whether specific transactions are allowed.

<!-- theme: info -->
> The third-party vendor or merchant is required for managing the table file download. Please contact your account representative for more details.

The below table outlines the fields that can prompt for a Fleet transaction, for specific card brands see the [device prompt section](#device-prompts).

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
| `customer` | `idCardNumber` | The customer's ID based on merchant's industry or vertical. ***Example:** User ID or Sub-Fleet number.* |
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

## Authorization/Verification Prompts

#### Customer and Vehicle

The device or application must be able to interpret the Commerce Hub's `processorResponseDetails` and the `responseCode` and `additionalInfo` name-value pairs, to determine the required fields and validity before enabling the pump or POS. When the transaction is complete all values entered by the customer must be sent in the [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) request.

| `responseCode` | Requirements |
| ----- | ----- |
| *000* | The device or application must verify the validity of the prompts based on the data returned in the authorization response before enabling the pump or POS. |
| *500* | The authorizer requires additional information to be submitted before the pump or POS is enabled. The device must request the prompts indicated and perform another authorization request. |
| *667* | The authorizer has indicated a value does not match. Invalid prompts will be indicated with a ?. These transactions can be retried after re-prompting for the incorrect values. |

#### Purchase Restrictions

When processing a transaction to Commerce Hub the limits for each allowed product category for the payment instrument will be returned in the `orderData` object in the authorization response. The `itemDails` will contain the `quantity` and `netAmount` limit for the product category. General merchandise is identified by the `description`, and fuel is identified by the `paymentSystemProductCode`. Any product category not included in the authorization response is considered not allowed by the brand. In offline processing mode, the device must make the determination about what products are allowed for offline purchase based on settings in the Dynamic Table.

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
    "transactionType": "CHARGE",
    "transactionState": "DECLINED",
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
      "approvalStatus": "DECLINED",
      "approvalCode": "3212",
      "referenceNumber": "0021-becf314f-59cf-4a75-9133-f3f1495d862d",
      "processor": "FISERV",
      "host": "BUYPASS",
      "networkRouted": "GECC/Wright Exp",
      "responseCode": "500",
      "responseMessage": "Missing Required Data For Industry or MCC",
      "hostResponseCode": "DX",
      "hostResponseMessage": "Declined",
      "settlementIndicator": "COST_PLUS",
      "additionalInfo": [
        {
          "name": "DRID",
          "value": ""
        },
        {
          "name": "VEHN",
          "value": ""
        }
      ]
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
        "itemDescription": "ADD",
        "quantity": "10",
        "netAmount": "100"
      }
    ]
  }
}
```

<!-- type: tab-end -->

---

## Device Prompts

The device or application must be able to prompt for specific [customer details](?path=docs/Resources/Master-Data/Customer-Details.md) or [vehicle details](?path=docs/Resources/Master-Data/Vehicle-Details.md) for all Fleet transactions defined by the [Dynamic Card Table](#dynamic-card-table) or [authorization response](#authorizationverification-prompts). The device or application must prompt for the data appropriate to the transaction it will be performing, and provide the details in the respective fields. Prompts flagged as optional do not have to be offered.

<!--
type: tab
titles: Comdata, Express Code, ComCheck, Corpay, Fleet One, Mastercard, Visa, Voyager, WEX, WEX OTR, Money Code
-->

Comdata requires a [verification request](#authorizationverification-prompts) to determine the required prompts and purchase restrictions.

##### Prompts

The below table outlines the fields that can prompt for Comdata. A conditional prompt should be offered if the account verification response indicates that prompt is required. These prompts are returned in the `additionalInfo` array.

| Name | Object | Field | Verification | Authorization | Capture |
| ----- | ----- | ----- | :-----: | :-----: | :-----: |
| UNIT | `customer::vehicle` | `unitId` | &#10004; | &#10004; | &#10004; |
| DRID | `customer` | `driverId` | | | |
| TRLR | `customer::vehicle` | `trailerNumber` | | | |
| HBRD | `customer::vehicle` | `hubometer` | | | |
| TRHB | `customer::vehicle` | `trailerHub` | | | |
| HRRD | `customer::vehicle` | `reeferHours` | | | |
| TRIP | `customer::vehicle` | `tripNumber` | | | |
| DLIC | `customer` | `driverLicenseNumber` | | | |
| DLST | `customer` | `driverLicenseState` | | | |
| PONB | `customer` | `workOrderNumber` | | | |
| INVC | `transactionDetails` | `merchantinvoiceNumber` | | | &#10004; |

<!-- theme: info -->
> Invoice number is communicated via the prompt code response, but it is not a customer prompt. This value should be generated by the device, and each transaction should have a value that is unique for that location for the business day.

##### Purchase Restrictions

The device is expected to send a list of fuel products that are available to the cardholder in the authorization request. Comdata will send limits for each in the response. Fuel products not listed in the response will be considered ineligible.

Comdata will return the cash available limit `paymentSystemProductCode` 955 and a non-fuel product limit 000. Any Non-fuel products data, including amount, will be sent as part of the Capture request.

<!-- theme: info-->
> Comdata may decline a transaction that includes a non-fuel product whose amount exceeds a limit for its category.

<!--
type: tab
-->

<!-- theme: info-->
> All Comdata Express Code transaction are manual entry.

It is up to the device to allow or disallow any products for Express Code transactions. No product data is to be sent on these transactions. Express Code transaction will be approved for the full amount or declined, there is no partial approval. Any funds approved from the transaction may be used towards the purchase of any product or service, and any remaining funds will be dispersed as cash.

The below table outlines the fields that the device can prompt for, the prompt should be offered but a response is not required.

| Object | Field |
| ----- | ----- |
| `customer::vehicle` | `unitId` |
| `customer` | `driverId` |
| `customer::vehicle` | `tripNumber` |

<!--
type: tab
-->

<!-- theme: info-->
> All Comdata ComCheck transaction are manual entry.

It is up to the device to allow or disallow any products for ComCheck transactions. No product data is to be sent on these transactions. Express Code transaction will be approved for the full amount or declined, there is no partial approval. Any funds approved from the transaction may be used towards the purchase of any product or service, and any remaining funds will be dispersed as cash.

ComCheck requires the `customer::vehicle` `unitId` in the authorization request.

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

Mastercard Fleet is restricted to fuel only if the Product Restriction Code is 2, otherwise all products are allowed. The below table outlines the fields that can prompt for Mastercard Fleet based on the Product Type Code or if always required.

| Object | Field | Swipe/Chip/Contactless | Manual Entry |
| ----- | ----- | :-----: | :-----: |
| `customer` | `driverId` | 3 | |
| `customer` | `idCardNumber` | 1 | &#10004; |
| `customer::vehicle` | `odometerReading` | 1, 2, 3, or 4 | &#10004; |
| `customer::vehicle` | `vehicleNumber` | 2 | |

<!--
type: tab
-->

Visa Fleet is restricted to fuel only if the Service Enhancement Indicator is 2 or fuel and maintenance if 1, otherwise all products are allowed. The below table outlines the fields that can prompt for Visa Fleet based on the Service Prompt or if always required.

<!--theme: info -->
> A Visa Fleet Card transaction must comply with Fleet data requirements, in order to be eligible for reduced commercial interchange rates, such as [Commercial Level II or Level III](?path=docs/Resources/Guides/Level23/Level23.md).

##### Swipe and Manual Entry

| Object | Field | Swipe | Manual Entry |
| ----- | ----- | :-----: | :-----: |
| `customer` | `driverId` | 3 | |
| `customer` | `idCardNumber` | 1, 6 | &#10004; |
| `customer::vehicle` | `odometerReading` | 1, 2, 3, 4 | &#10004; |
| `customer::vehicle` | `vehicleNumber` | 2 | |

##### Visa 2.0 EMV

Visa Fleet 2.0 is a new Fleet EMV standard that harnesses the additional capabilities of EMV at the fuel pump. In addition to more driver prompt options, this functionality enables commercial clients to restrict card use at fuel merchants to certain fuel and non-fuel product categories.

The below table outlines the required fields to prompt for Visa Fleet 2.0.

| Prompt | Object | Field |
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

Voyager is restricted to fuel only if the second digit of the Product Restriction Code is 1, otherwise all products are allowed. The below table outlines the fields that can prompt for Voyager based on the first digit of the Product Restriction Code or if always required.

##### Swipe and Manual Entry

| Object | Field | Swipe | Manual Entry |
| ----- | ----- | :-----: | :-----: |
| `customer` | `driverId` | 1, 3 | 1, 3 |
| `customer::vehicle` | `odometerReading` | 2, 3 | 2, 3 |

##### EMV

EMV chip and contactless use EMV DF Tags and must use the Prompting Script File to determine appropriate prompts until *no record found* result. If the Prompting Script File is not to be used, then the Product Type Code should be used to determine which prompts to offer the cardholder.

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

Wright Express *(WEX)* is restricted to fuel only if in offline mode and the Purchase Restriction = 00, otherwise all products are allowed.

<!-- theme: info -->
> If the device finds values not included in this table, it should prompt for `driverId` and `odometerReading`.

##### Manual Entry

For manual entry transactions enter the Prompt Code on the card, otherwise always prompt for the `driverId`, `idCardNumber` and `odometerReading`. The `vehicleNumber` is always required.

##### Swiped

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

##### EMV

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

<!-- theme: info-->
> Manual entry is not allowed for any WEX OTR card.

WEX OTR requires an [authorization request](#authorizationverification-prompts) to determine the required prompts and purchase restrictions.

##### Prompts

The table below contains the repeatable fields that can occur up to 8 times in a single transaction and will be used in Wex OTR Fleet transactions containing prompt data. These prompts are returned in the `additionalInfo` array.

| Name | Object | Field |
| ----- | ----- | ----- |
| BDAY | `customer` | `dateOfBirth` |
| DLIC | `customer` | `driverLicenseNumber` |
| DLST | `customer` | `driverLicenseState` |
| DRID | `customer` | `driverId` |
| HBRD | `customer::vehicle` | `hubometer` |
| HRRD | `customer::vehicle` | `reeferHours` |
| LCST | `customer::vehicle` | `vehicleLicenseState` |
| LICN | `customer::vehicle` | `vehicleLicenseNumber` |
| LSTN | `customer` | `lastName` |
| NAME | `customer` | `firstName` |
| ODRD | `customer::vehicle` | `odometerReading` |
| PONB | `customer` | `workOrderNumber` |
| SSUB | `customer` | `idCardNumber` |
| TRIP | `customer::vehicle` | `tripNumber` |
| TRLR | `customer::vehicle` | `trailerNumber` |
| UNIT | `customer::vehicle` | `unitId` |
| VEHN | `customer::vehicle` | `vehicleNumber` |

##### Product Category

The `orderData::itemDetails` response as an array and the `itemDescription` identifies the product categories that are allowed for the customer. The product category will correspond to the product category column in the Dynamic Card Table products table.

| Value | Product Type |
| ----- | ----- |
| ADD | Additives |
| ANFR | Anti-freeze |
| BRAK | Brakes and wheels |
| CADV | Company funds cash advance |
| CLTH | Clothing |
| DEF | DEFContainer |
| DELI | Deli Items |
| ELEC | Electronics |
| ETAX | Exempt tax amount |
| FAX | Fax |
| FLAT | Flat Repair |
| GROC | Groceries |
| HARD | Hardware |
| IDLE | Idleaire |
| LMPR | Lumper Fee |
| LUBE | Lube |
| MERC | Default category for merchandise |
| OIL | Oil |
| OILC | Oil Change |
| PADV | Personal funds |
| PART | Parts |
| PHON | Phone time |
| PNT | Paint |
| RECP | Tire Recap |
| REPR | Repair Service |
| REST | Restaurant Purchases |
| SCAN | Imaging |
| SCLE | Scale |
| SHWR | Shower |
| TCHN | Tire Chains |
| TIRE | Tire |
| TOLL | Toll Charges |
| TRAL | Trailer |
| TRPP | Trip permit |
| UREA | UREA Container |
| WASH | Car/Truck Wash |
| WWFL | Windshield Washer Fluid |

<!--
type: tab
-->

<!-- theme: info-->
> All WEX OTR Money Code transaction are manual entry.

WEX OTR Money Code is restricted at the device level, no validations are done by the host, but product data should be sent as usual for WEX OTR transactions. Money Code transactions do not have any specific prompt codes.

<!-- type: tab-end -->

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
