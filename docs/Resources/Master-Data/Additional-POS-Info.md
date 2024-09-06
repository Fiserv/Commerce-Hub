---
tags: [Master Data, API Reference, POS Features, POS Information, Point of Sale, Transaction Interaction, Terminal, Device]
---

# Additional POS Information

Additional information about the POS functions and features can be submitted in the `additionalPosInformation` object as part of [transaction interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md).

<!--
type: tab
titles: additionalPosInformation, JSON Example
-->

The below table identifies the parameters in the `additionalPosInformation` object.

|Variable |Type| Max Length | Description|
|---------|----------|----------------|---------|
| `dataEntrySource` | _string_ | 50 | [Source](#data-entry-source) used to initiated transaction. |
| `posId` | _string_ | | Identifies the specific device or point of entry where the transaction originated. For example, pump number, lane number, terminal number, etc. |
| `cashierId` | _string_ | | Used to uniquely identify the merchant’s store cashier or employee accepting the transaction. |
| `stan` | _string_ | 6 | Contains the System Trace Audit Numbers _(STAN)_ used to to uniquely reference the transaction. The STAN must increment from 000001 to 999999 and not reset until it reaches 999999. Note: This field has limited platform availability. For more information, please contact your account representative.  |
| `posFormFactorIndicator` | _string_ | | This field is used to identify the form factor used at the POS for MasterCard PayPass transactions. Note: Some values from 00–19 may indicate not only the physical form factor but also other attributes such as device technology and payment app specifications. Values from 20–99 exclusively indicate the form factor only without also indicating the storage technology.|
| `alternateRoutingIndicator` | _boolean_ | N/A | 'Identifies if the terminal support the Alternate Routing feature used for PINless POS, Signature Debit, and EMV Common AID features (excluding Online PIN CVM) allows merchants to process PIN Debit Network transactions without a PIN.' |
| `transactionQualifier` | _string_ | | Used for Discover - Discover TransactionQualifier. |
| `attendedTerminalData` | _string_ | 16 | [Attended terminal data](#attended-terminal-data) indicates if the card acceptor was at the point of sale. |
| `terminalLocation` | _string_ | 16 | Identifies the [location](#terminal-location) of the terminal or software. |
| `terminalOperator` | _string_ | 256 | The [person operating](#terminal-operator) the terminal |
| `cardholderActivatedTerminalInformation` | _string_ | 16 | Identifies [Cardholder Activated Terminal](#cardholder-activated-terminal-information) (CAT) capabilities of the device. |
| `cashbackLimit` | _number_ | 18,3 | POS cashback limit for the day. |
| `supervisorId` | _string_ |  | Used to uniquely identify the merchant’s store supervisor transactions. |
| `hostDiscountTimestamp` | _string_ | N/A | Identifies the timestamp used to support host discounts |
| `posCardTableVersion` | _string_ | 35 | This field indicates the version of the card table  ID being downloaded |
| `posHardwareAndSoftware` | _object_ | N/A | [Terminal hardware and software](#hardware-and-software-information) information. |
| `posFeatures` | _object_ | N/A | Terminal or [software feature](#pos-features) information. |

<!--
type: tab
-->

JSON string format for `additionalPosInformation`.

```json
{
  "additionalPosInformation": {
    "posId": "1234",
    "cashierId": "3456",
    "stan": "123456",
    "posCardTableVersion": "XZ12235689124578963158lk45wr74yd321",
    "posFormFactorIndicator": "02",
    "dataEntrySource": "string",
    "hostDiscountTimestamp": "2016-04-16T16:06:05Z",
    "transactionQualifier": "string",
    "attendedTerminalData": "ATTENDED",
    "cardholderActivatedTerminalInformation": "2",
    "cashbackLimit" : 1.50,
    "supervisorId": "1234567",
    "terminalLocation": "MERCHANT",
    "terminalOperator": "MERCHANT",
    "posHardwareAndSoftware": {
      "hardwareVendorIdentifier": "string",
      "softwareIdentifier": "string",
      "hardwareSerialNumber": "V1234567",
      "softwareApplicationName": "string",
      "softwareReleaseDate": "2022-05-21",
      "softwareVersionNumber": "string"
    },
    "posFeatures": {
      "hostProcessingPlatform": "TAS",
      "messageFormatSupport": "string",
      "emvSupport": "string",
      "peripheralInformation1": "string",
      "peripheralInformation2": "string",
      "communicationInformation1": "DIAL",
      "communicationInformation2": "string",
      "industryInformation1": "string",
      "industryInformation2": "string",
      "terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP",
      "classAndComplianceCertification": "A",
      "otherCapabilities": "string",
      "cardCaptureCapability": true,
      "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
      "authenticationCapability": "PIN",
      "taxPromptCapability": "CAPABLE",
      "PINcaptureCapability": "PIN_12"
    },
  }
}
```

<!-- type: tab-end -->

---

## Hardware and Software Information

Contains additional terminal's hardware and software information.

<!--
type: tab
titles: posHardwareAndSoftware, JSON Example
-->

The below table identifies the parameters in the `posHardwareAndSoftware` object.

|Variable |Type| Max Length | Description|
|---------|----------|----------------|---------|
| `hardwareVendorIdentifier` | _string_ |  | Hardware vendor identifier assigned by Chase merchant services at time of certification, represented in ASCII HEX. |
| `softwareIdentifier` | _string_ | | Software Identifier assigned by Chase merchant services at time of certification, represented in ASCII HEX. |
| `hardwareSerialNumber` | _string_ | | Serial number of hardware device. The hardware serial # can be left-justified, space-filled. |
| `softwareApplicationName` | _string_ | | Name of software application |
| `softwareReleaseDate` | _string_ | | Date software was released, in YYYY-MM-DD format |
| `softwareVersionNumber` | _string_ | | EPROM or version information related to the terminal software. |

<!--
type: tab
-->

JSON string format for `posHardwareAndSoftware`.

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

---

## POS Features

Terminal or software feature information.

<!--
type: tab
titles: posFeatures, JSON Example
-->

The below table identifies the parameters in the `posFeatures` object.

|Variable |Type| Max Length | Description|
|---------|----------|----------------|---------|
| `hostProcessingPlatform` | _string_ |  | Indicates which system is being used by the payment application and to what extent it is being used. |
| `messageFormatSupport` | _string_ |  | Indicates which message format the application uses to communicate with the Chase merchant services PNS Host. |
| `emvSupport` | _string_ |  | Indicates the payment brands supported by the application for EMV processing. Required for any application that supports EMV processing. |
| `peripheralInformation1` | _string_ |  | Indicates the type of peripheral device attached to or being used by the payment application or point of sale device. Only the highest level of support should be indicated unless multiple devices are attached. |
| `peripheralInformation2` | _string_ |  | Reserved for future use |
| `communicationInformation1` | _string_ |  | Indicates the methods of communication supported by the payment application. It is possible for an application to support more than one type of communication at a time. |
| `communicationInformation2` | _string_ |  | Reserved for future use |
| `industryInformation1` | _string_ |  | Indicates the industries supported by the payment application. More than one industry can be indicated. |
| `industryInformation2` | _string_ |  | Reserved for future use |
| `terminalEntryCapability` | _string_ | 28 | Identifies how data can be entered in the terminal or software. |
| `classAndComplianceCertification` | _string_ |  | Indicates the type of application or device sending the transaction, Class A or Class B. |
| `otherCapabilities` | _string_ |  | Indicates whether the transaction originated from a mobile device that uses Chase merchant services’ mobile payment gateway or originated from a device that does not use Chase merchant services’ Mobile Payment Gateway. Note: It is required for merchants to send the appropriate information in this element in the case where a mobile terminal is supported. |
| `cardCaptureCapability` | _boolean_ |  | Identifies if the terminal is able to capture the card data. |
| `pinAuthenticationCapability` | _string_ | 25 | PIN entry capability of the Point of Sale. _**Valid Values:** UNSPECIFIED, CAN_ACCEPT_PIN, CANNOT_ACCEPT_PIN, PIN_PAD_IS_DOWN, PIN_VERIFIED_BY_TERMINAL_ |
| `authenticationCapability` | _string_ | 50 | Identifies the terminals capability to authenticate the cardholder. _**Valid Values:** UNSPECIFIED, NONE, PIN, ELECTRONIC_SIGNATURE, INOPERATIVE, OTHER_ |
| `taxPromptCapability` | _string_ | 25 | This field indicates if the terminal is CAPABLE or NOT_CAPABLE of prompting for the tax amount for commercial card types in the response message. |
| `terminalEntryCapability` | _string_ | 28 | Identifies how data can be [entered](#terminal-entry-capability) in the terminal or software. |
| `PINcaptureCapability` | _string_ | 50 | Identifies the terminals capability to caputer a PIN. _**Valid Values:** UNSPECIFIED, NONE, PIN_# (# of characters accepted 1-12)_ |

<!--
type: tab
-->

JSON string format for `posFeatures`.

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
      "otherCapabilities": "string",
      "cardCaptureCapability": true,
      "pinAuthenticationCapability": "CAN_ACCEPT_PIN",
      "authenticationCapability": "PIN",
      "taxPromptCapability": "CAPABLE",
      "terminalEntryCapability": "MAG_STRIPE_MANUAL_CHIP",
      "PINcaptureCapability": "PIN_12"
   }
}
```

<!-- type: tab-end -->

---

#### Data Entry Source

The below table contains the valid values of `dataEntrySource`.

| Valid Value | Description |
|--------|--------|
| _MOBILE_APP_ | The payment source was entered into a mobile app or obtained from a mobile wallet.  |
| _MOBILE_WEB_ | The payment source was entered into a website on a mobile device or obtained from a digital wallet. |
| _BROWSER_PC_ | The payment source was entered into a website on a personal computer or obtained from a digital wallet. |
| _KIOSK_ | The payment source was entered into a kisok or obtained from a mobile wallet. |
| _CONSOLE_ | The payment source was entered into gaming console. |
| _3DS_REQUESTOR_INITIATED_ | The payment source initiated by the cuatomer using 3-D Secure. |
| _UNSPECIFIED_ | The data entry source is unknown or left blank. |
| _ELECTRONIC_PAYMENT_TERMINAL_ | The payment source was entered into a standard point of sale terminal. |
| _AUTOMATED_FUEL_DISPENSING_MACHINE_ | The payment source was entered into an unattended fuel station. |
| _UNATTENDED_CUSTOMER_TERMINAL_ | The payment source was entered int unattended customer terminal. |
| _ECOMMERCE_CUSTOMER_PRESENT_ | The ecommerce transaction where the payment source is entered at the merchant's location. |
| _MOBILE_TERMINAL_ | The payment source was entered into a wireless point of sale terminal on a cellular network. |
| _MOBILE_POS_ | Point of sales terminal that works on wifi. |
| _ELECTRONIC_CASH_REGISTER_ | Point of sales terminal that allows cash transaction.  |
| _IVR_VRU_ | Interactive Voice Response _(IVR)_, Voice Response Unit _(VRU)_ |
| _TICKET_MACHINE_ | A machine to buy the tickets. |
| _CALL_CENTER_OPERATOR_ | The payment source entered by a call center operator when taking an order from a customer. |

---

<!---
#### Enhanced Authorization Request Indicator

The below table identifies the valid values of `enhancedAuthorizationRequestIndicator`.

| Value | Description |
| ----- | ----------- |
| _NOT_SUPPORTED_ | Partial authorizations NOT requested; Balance information NOT requested |
| _BALANCE_ONLY_ | Partial authorizations NOT requested; Balance information requested |
| _PARTIAL_AUTH_ONLY_ | Partial authorizations requested; Balance information NOT requested |
| _BOTH_SUPPORTED_ | Partial authorizations requested; Balance information requested |
-->

---

#### Attended Terminal Data

The below table identifies the valid values of `attendedTerminalData`.

| Value | Description |
| ----- | ----------- |
| _ATTENDED_ | Attended terminal _(Not a valid option if `cardholderActivatedTerminalInformation` is CAT_LEVEL_6)_ |
| _UNATTENDED_ | Unattended terminal or software |
| _NONE_ | No terminal or software used _(VRU, etc.)_ |

---

#### Cardholder Activated Terminal Information

The below table identifies the valid values of `cardholderActivatedTerminalInformation`.

| Value | Description |
| ----- | ----------- |
| _0_ | Not a CAT device |
| _CAT_LEVEL_1_ | Automated dispensing machine with online/offline PIN _(Mastercard Only)_ |
| _CAT_LEVEL_2_ | Self-service terminal, used for automated fueling transactions and unattended terminals. |
| _CAT_LEVEL_3_ | Limited amount terminal |
| _CAT_LEVEL_6_ | Electronic commerce transaction _(attendedTerminalData must not be ATTENDED)_ |

---

#### Terminal Location

The below table identifies the valid values of `terminalLocation`.

| Value | Description |
| ----- | ----------- |
| _MERCHANT_ | On the premises of the card acceptor |
| _CARDHOLDER_ | On the premises of the cardholder _(e.g. Home PC, Mobile Device, etc.)_ |
| _NONE_ | No terminal used |

---

#### Terminal Operator

The below table identifies the valid values of `terminalOperator`.

| Value | Description |
| ----- | ----------- |
| _MERCHANT_ | An employee of the merchant processed the transaction |
| _CUSTOMER_ | The customer processed the transaction |
| _ADMINISTRATOR_ | The transaction was processed as part of an administrative function |

---

#### Terminal Entry Capability

The below table identifies the valid values of `terminalEntryCapability`.

| Value | Description |
| ----- | ----------- |
| _UNSPECIFIED_ | Default |
| _ECOMMERCE_ | E-commerce no terminal used |
| _MAG_STRIPE_ONLY_ | Track read only |
| _MAG_STRIPE_MANUAL_ | Track read or manual key |
| _MAG_STRIPE_MANUAL_CHIP_ | Track read, manual key or chip |
| _MAG_MANUAL_CHIP_CONTACTLESS_ | Track read, manual key, chip, or contactless |
| _BARCODE_ | Barcode scan |
| _CONTACTLESS_ | Contactless integrated circuit read |
| _OCR_ | Opitcal character reader |
| _CHIP_ONLY_ | Chip only |
| _CHIP_MAG_STRIPE_ | Chip with track fallback |
| _MANUAL_ONLY_ | Manual key only |
| _CONTACTLESS_MAG_STRIPE_ | Contactless or track read |
| _HYBRID_ | Hybrid entry mode |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/DaaS/Enhanced-Data-Service.md)
- [In-Person Payments](?pathdocs/Getting-Started/Getting-Started-InPerson.md)
- [Online, Digital and Mobile Payments](?path=docs/Getting-Started/Getting-Started-Online.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---
