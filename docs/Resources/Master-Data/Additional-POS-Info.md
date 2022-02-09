---
tags: [carat, commerce-hub, enterprise, amount, amount-components,transaction-amount ]
---

# Additional POS Information

Additional information about the POS functions and features can be submitted in the `additionalPosInformation` object as part of `transactionInteraction`.

<!--
type: tab
title: additionalPosInformation
-->

The below table identifies the parameters in the `additionalPosInformation` object.

|Variable |Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `dataEntrySource` | *string* | 32 | Channel the consumer used to initiated transaction. **Valid Values:** *MOBILE_APP*, *MOBILE_WEB*, *BROWSER_PC*, *KIOSK*, *CONSOLE*, *3DS_REQUESTOR_INITIATED* |

The below table contains the valid values for `dataEntrySource` parameter.

| Valid Value | Description |
|--------|--------|
| MOBILE_APP | |
| MOBILE_WEB | |
| BROWSER_PC | |
| KIOSK | |
| CONSOLE | |
| 3DS_REQUESTOR_INITIATED | |
| UNSPECIFIED | |
| ELECTRONIC_PAYMENT_TERMINAL | |
| AUTOMATED_FUEL_DISPENSING_MACHINE | |
| UNATTENDED_CUSTOMER_TERMINAL | |
| ECOMMERCE_CUSTOMER_PRESENT | |
| MOBILE_TERMINAL | |
| MOBILE_POS | |
| ELECTRONIC_CASH_REGISTER | |
| IVR_VRU | |
| TICKET_MACHINE | |
| CALL_CENTER_OPERATOR |  | 


<!---
| `posId` | *string* | | Identifies the specific device or point of entry where the transaction originated. For example, pump number, lane number, terminal number, etc. |
| `cashierId` | *string* | | Used to uniquely identify the merchant’s store cashier or employee accepting the transaction. |
| `stan` | *string* | | Contains the System Trace Audit Numbers (STAN) returned for a Discover incremental transaction. Note: This field has limited platform availability. For more information, please contact your account representative. |
| `posFormFactorIndicator` | *string* | | This field is used to identify the form factor used at the POS for MasterCard PayPass transactions. Note: Some values from 00–19 may indicate not only the physical form factor but also other attributes such as device technology and payment app specifications. Values from 20–99 exclusively indicate the form factor only without also indicating the storage technology.|
| `enhancedAuthorizationRequestIndicator` | *string* | 32 | Used to indicate that the terminal or software is capable of supporting partial authorizations, [prepaid identification and request balances](#enhanced-authorization-request-indicator). Partial Authorization support is dependent on card type and region please contact your account representative.|
| `transactionQualifier` | *string* | | Used for Discover - Discover TransactionQualifier. |
| `enhancedAuthorizationResponseIndicator` | *string* |  | Returns the approval type for Enhanced Authorization. **Valid Values:** *FULL*, *PARTIAL*, *DEPLETED*, *DECLINE*, *ERROR* |
| `attendedTerminalData` | *string* | 16 | [Attended terminal data](#attended-terminal-data) indicates if the card acceptor was at the point of sale. |
| `cardPresentIndicator` | *string* |  | Indicates if the actual card that was used for the transaction was present  |
| `cardPresentAtPosIndicator` | *string* |  | Indicates if the actual card was present at the point of sale. |
| `terminalLocation` | *string* | 16 | Identifies the [location of the terminal](#terminal-location) or software. |
| `cardholderActivatedTerminalInformation` | *string* | 16 | Identifies [Cardholder Activated Terminal](#cardholder-activated-terminal) (CAT) capabilities of the device. |
| `posHardwareAndSoftware` | *object* | N/A | [Terminal hardware and software](#hardware-and-software-information) information. |
| `posFeatures` | *object* | N/A | Terminal or [software feature](#pos-features) information. |
| `supervisorId` | *string* |  | Used to uniquely identify the merchant’s store supervisor transactions. |
-->


<!--
type: tab
title: JSON Example
-->

JSON string format for `additionalPosInformation`:

```json
{
   "additionalPosInformation":{
      "posId": "1234",
      "cashierId": "3456",
      "stan": "123456",
      "posFormFactorIndicator": "02",
      "enhancedAuthorizationRequestIndicator": "BOTH_SUPPORTED",
      "dataEntrySource": "string",
      "transactionQualifier": "string",
      "enhancedAuthorizationResponseIndicator": "FULL",
      "attendedTerminalData": "ATTENDED",
      "cardPresentIndicator": "string",
      "cardPresentAtPosIndicator": "string",
      "terminalLocation": "MERCHANT",
      "cardholderActivatedTerminalInformation": "2",
      "posHardwareAndSoftware":{
         "hardwareVendorIdentifier": "string",
         "softwareIdentifier": "string",
         "hardwareSerialNumber": "V1234567",
         "softwareApplicationName": "string",
         "softwareReleaseDate": "2022-05-21",
         "softwareVersionNumber": "string"
      },
      "posFeatures":{
         "hostProcessingPlatform": "TAS",
         "messageFormatSupport": "string",
         "emvSupport": "string",
         "peripheralInformation1": "string",
         "peripheralInformation2": "string",
         "communicationInformation1": "DIAL",
         "communicationInformation2": "string",
         "industryInformation1": "string",
         "industryInformation2": "string",
         "terminalEntryCapability": "ECOMMERCE",
         "classAndComplianceCertification": "A",
         "otherCapabilities": "string"
      },
      "supervisorId": "1234567"
   }
}
```

<!-- type: tab-end -->

---

### Hardware and Software Information

Contains additional terminal's hardware and software information.

<!--
type: tab
title: posHardwareAndSoftware
-->

The below table identifies the parameters in the `posHardwareAndSoftware` object.

|Variable |Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `hardwareVendorIdentifier` | *string* |  | Hardware vendor identifier assigned by Chase merchant services at time of certification, represented in ASCII HEX. |
| `softwareIdentifier` | *string* | | Software Identifier assigned by Chase merchant services at time of certification, represented in ASCII HEX. |
| `hardwareSerialNumber` | *string* | | Serial number of hardware device. The hardware serial # can be left-justified, space-filled. |
| `softwareApplicationName` | *string* | | Name of software application |
| `softwareReleaseDate` | *string* | | Date software was released, in YYYY-MM-DD format |
| `softwareVersionNumber` | *string* | | EPROM or version information related to the terminal software. |

<!--
type: tab
title: JSON Example
-->

```json
{
   "posHardwareAndSoftware":{
      "hardwareVendorIdentifier": "string",
      "softwareIdentifier": "string",
      "hardwareSerialNumber": "V1234567",
      "softwareApplicationName": "string",
      "softwareReleaseDate": "2022-05-21",
      "softwareVersionNumber": "string"
   }
}
```

<!-- type: tab-end -->

### POS Features

Terminal or software feature information.

<!--
type: tab
title: posFeatures
-->

The below table identifies the parameters in the `posFeatures` object.

|Variable |Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `hostProcessingPlatform` | *string* |  | Indicates which system is being used by the payment application and to what extent it is being used. |
| `messageFormatSupport` | *string* |  | Indicates which message format the application uses to communicate with the Chase merchant services PNS Host. |
| `emvSupport` | *string* |   Indicates the payment brands supported by the application for EMV processing. Required for any application that supports EMV processing. |
| `peripheralInformation1` | *string* |  | Indicates the type of peripheral device attached to or being used by the payment application or point of sale device. Only the highest level of support should be indicated unless multiple devices are attached. |
| `peripheralInformation2` | *string* |  | Reserved for future use |
| `communicationInformation1` | *string* |  | Indicates the methods of communication supported by the payment application. It is possible for an application to support more than one type of communication at a time. |
| `communicationInformation2` | *string* |  | Reserved for future use |
| `industryInformation1` | *string* |  | Indicates the industries supported by the payment application. More than one industry can be indicated. |
| `industryInformation2` | *string* |  | Reserved for future use |
| `terminalEntryCapability` | *string* | 28 | Identifies how data can be entered in the terminal or software. |
| `classAndComplianceCertification` | *string* |  | Indicates the type of application or device sending the transaction, Class A or Class B. |
| `otherCapabilities` | *string* |  | Indicates whether the transaction originated from a mobile device that uses Chase merchant services’ mobile payment gateway or originated from a device that does not use Chase merchant services’ Mobile Payment Gateway. Note: It is required for merchants to send the appropriate information in this element in the case where a mobile terminal is supported. |

<!--
type: tab
title: JSON Example
-->

```json
{
   "posFeatures":{
      "hostProcessingPlatform": "TAS",
      "messageFormatSupport": "string",
      "emvSupport": "string",
      "peripheralInformation1": "string",
      "peripheralInformation2": "string",
      "communicationInformation1": "DIAL",
      "communicationInformation2": "string",
      "industryInformation1": "string",
      "industryInformation2": "string",
      "terminalEntryCapability": "ECOMMERCE",
      "classAndComplianceCertification": "A",
      "otherCapabilities": "string"
   }
}
```

<!-- type: tab-end -->

---

#### Enhanced Authorization Request Indicator

The below table identifies the valid values of `enhancedAuthorizationRequestIndicator`.

| Value | Description |
| ----- | ----------- |
| *NOT_SUPPORTED* | Partial authorizations NOT requested; Balance information NOT requested |
| *BALANCE_ONLY* | Partial authorizations NOT requested; Balance information requested |
| *PARTIAL_AUTH_ONLY* | Partial authorizations requested; Balance information NOT requested |
| *BOTH_SUPPORTED* | Partial authorizations requested; Balance information requested |

----

#### Attended Terminal Data

The below table identifies the valid values of `attendedTerminalData`.

| Value | Description |
| ----- | ----------- |
| *ATTENDED* | Attended terminal (Not a valid option if  cardholderActivatedTerminalInformation is CAT_LEVEL_6) |
| *UNATTENDED* | Unattended terminal or software |
| *NONE* | No terminal or software used (VRU, etc.) |

---

#### Terminal Location

The below table identifies the valid values of `terminalLocation`.

| Value | Description |
| ----- | ----------- |
| *MERCHANT* | On the premises of the card acceptor |
| *CARDHOLDER* | On the premises of the cardholder (e.g. Home PC) |
| *NONE* | No terminal used |

---

#### Cardholder Activated Terminal Information

The below table identifies the valid values of `cardholderActivatedTerminalInformation`.

| Value | Description |
| ----- | ----------- |
| *0* | Not a CAT device |
| *CAT_LEVEL_1* | Automated dispensing machine with online/offline PIN (MC Only) |
| *CAT_LEVEL_2* | Self-service terminal, used for automated fueling transactions and unattended terminals. |
| *CAT_LEVEL_3* | Limited amount terminal |
| *CAT_LEVEL_6* | Electronic commerce transaction (attendedTerminalData must not be ATTENDED) |


---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/DaaS/Enhanced-Data-Service.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---
