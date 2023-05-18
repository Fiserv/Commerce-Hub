---
tags: [Master Data, API Reference, POS Features, POS Information, Point of Sale, Terminal Transaction Interaction]
---

# Additional POS Information

Additional information about the POS functions and features can be submitted in the `additionalPosInformation` object as part of `transactionInteraction`.

<!--
type: tab
titles: additionalPosInformation, JSON Example
-->

The below table identifies the parameters in the `additionalPosInformation` object.

|Variable |Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `dataEntrySource` | *string* | 50 | [Source](#data-entry-source) used to initiated transaction. |
| `posId` | *string* | | Identifies the specific device or point of entry where the transaction originated. For example, pump number, lane number, terminal number, etc. |
| `cashierId` | *string* | | Used to uniquely identify the merchant’s store cashier or employee accepting the transaction. |
| `stan` | *string* | 6 | Contains the System Trace Audit Numbers (STAN) used to to uniquely reference the transaction. The STAN must increment from 000001 to 999999 and not reset until it reaches 999999. Note: This field has limited platform availability. For more information, please contact your account representative.  |
| `posFormFactorIndicator` | *string* | | This field is used to identify the form factor used at the POS for MasterCard PayPass transactions. Note: Some values from 00–19 may indicate not only the physical form factor but also other attributes such as device technology and payment app specifications. Values from 20–99 exclusively indicate the form factor only without also indicating the storage technology.|
| `alternateRoutingIndicator` | *boolean* | | 'Identifies if the terminal support the Alternate Routing feature used for PINless POS, Signature Debit, and EMV Common AID features (excluding Online PIN CVM) allows merchants to process PIN Debit Network transactions without a PIN.' |
| `enhancedAuthorizationRequestIndicator` | *string* | 32 | Used to indicate that the terminal or software is capable of supporting partial authorizations, [prepaid identification and request balances](#enhanced-authorization-request-indicator). Partial Authorization support is dependent on card type and region please contact your account representative.|
| `transactionQualifier` | *string* | | Used for Discover - Discover TransactionQualifier. |
| `enhancedAuthorizationResponseIndicator` | *string* |  | Returns the approval type for Enhanced Authorization. **Valid Values:** *FULL*, *PARTIAL*, *DEPLETED*, *DECLINE*, *ERROR* |
| `attendedTerminalData` | *string* | 16 | [Attended terminal data](#attended-terminal-data) indicates if the card acceptor was at the point of sale. |
| `cardholderActivatedTerminalInformation` | *string* | 16 | Identifies [Cardholder Activated Terminal](#cardholder-activated-terminal) (CAT) capabilities of the device. |
| `posHardwareAndSoftware` | *object* | N/A | [Terminal hardware and software](#hardware-and-software-information) information. |
| `posFeatures` | *object* | N/A | Terminal or [software feature](#pos-features) information. |
| `supervisorId` | *string* |  | Used to uniquely identify the merchant’s store supervisor transactions. |


<!--
type: tab
-->

JSON string format for `additionalPosInformation`:

```json
{
  "additionalPosInformation": {
    "posId": "1234",
    "cashierId": "3456",
    "stan": "123456",
    "posFormFactorIndicator": "02",
    "enhancedAuthorizationRequestIndicator": "BOTH_SUPPORTED",
    "dataEntrySource": "string",
    "transactionQualifier": "string",
    "enhancedAuthorizationResponseIndicator": "FULL",
    "attendedTerminalData": "ATTENDED",
    "cardholderActivatedTerminalInformation": "2",
    "supervisorId": "1234567",
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

### Hardware and Software Information

Contains additional terminal's hardware and software information.

<!--
type: tab
titles: posHardwareAndSoftware, JSON Example
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

---

### POS Features

Terminal or software feature information.

<!--
type: tab
titles: posFeatures, JSON Example
-->

The below table identifies the parameters in the `posFeatures` object.

|Variable |Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `hostProcessingPlatform` | *string* |  | Indicates which system is being used by the payment application and to what extent it is being used. |
| `messageFormatSupport` | *string* |  | Indicates which message format the application uses to communicate with the Chase merchant services PNS Host. |
| `emvSupport` | *string* |  | Indicates the payment brands supported by the application for EMV processing. Required for any application that supports EMV processing. |
| `peripheralInformation1` | *string* |  | Indicates the type of peripheral device attached to or being used by the payment application or point of sale device. Only the highest level of support should be indicated unless multiple devices are attached. |
| `peripheralInformation2` | *string* |  | Reserved for future use |
| `communicationInformation1` | *string* |  | Indicates the methods of communication supported by the payment application. It is possible for an application to support more than one type of communication at a time. |
| `communicationInformation2` | *string* |  | Reserved for future use |
| `industryInformation1` | *string* |  | Indicates the industries supported by the payment application. More than one industry can be indicated. |
| `industryInformation2` | *string* |  | Reserved for future use |
| `terminalEntryCapability` | *string* | 28 | Identifies how data can be entered in the terminal or software. |
| `classAndComplianceCertification` | *string* |  | Indicates the type of application or device sending the transaction, Class A or Class B. |
| `otherCapabilities` | *string* |  | Indicates whether the transaction originated from a mobile device that uses Chase merchant services’ mobile payment gateway or originated from a device that does not use Chase merchant services’ Mobile Payment Gateway. Note: It is required for merchants to send the appropriate information in this element in the case where a mobile terminal is supported. |
| `cardCaptureCapability` | *boolean* |  | Identifies if the terminal is able to capture the card data. |
| `pinAuthenticationCapability` | *string* | 25 | PIN entry capability of the Point of Sale. ***Valid Values:** UNSPECIFIED, CAN_ACCEPT_PIN, CANNOT_ACCEPT_PIN, PIN_PAD_IS_DOWN, PIN_VERIFIED_BY_TERMINAL* |
| `authenticationCapability` | *string* | 50 | Identifies the terminals capability to authenticate the cardholder. ***Valid Values:** UNSPECIFIED, NONE, PIN, ELECTRONIC_SIGNATURE, INOPERATIVE, OTHER* |
| `taxPromptCapability` | *string* | 25 | This field indicates if the terminal is CAPABLE or NOT_CAPABLE of prompting for the tax amount for commercial card types in the response message. |
| `terminalEntryCapability` | *string* | 28 | Identifies how data can be [entered](#terminal-entry-capability) in the terminal or software. |
| `PINcaptureCapability` | *string* | 50 | Identifies the terminals capability to caputer a PIN. ***Valid Values:** UNSPECIFIED, NONE, PIN_# (# of characters accepted 1-12)* |


<!--
type: tab
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

The below table contains the valid values for `dataEntrySource` parameter.

| Valid Value | Description |
|--------|--------|
| *MOBILE_APP* | The payment source was entered into a mobile app or obtained from a mobile wallet.  |
| *MOBILE_WEB* | The payment source was entered into a website on a mobile device or obtained from a digital wallet. |
| *BROWSER_PC* | The payment source was entered into a website on a personal computer or obtained from a digital wallet. |
| *KIOSK* | The payment source was entered into a kisok or obtained from a mobile wallet. |
| *CONSOLE* | The payment source was entered into gaming console. |
| *3DS_REQUESTOR_INITIATED* | The payment source initiated by the cuatomer using 3-D Secure. |
| *UNSPECIFIED* | The data entry source is unknown or left blank. |
| *ELECTRONIC_PAYMENT_TERMINAL* | The payment source was entered into a standard point of sale terminal. |
| *AUTOMATED_FUEL_DISPENSING_MACHINE* | The payment source was entered into an unattended fuel station. |
| *UNATTENDED_CUSTOMER_TERMINAL* | The payment source was entered int unattended customer terminal. |
| *ECOMMERCE_CUSTOMER_PRESENT* | The ecommerce transaction where the payment source is entered at the merchant's location. |
| *MOBILE_TERMINAL* | The payment source was entered into a wireless point of sale terminal on a cellular network. |
| *MOBILE_POS* | Point of sales terminal that works on wifi. |
| *ELECTRONIC_CASH_REGISTER* | Point of sales terminal that allows cash transaction.  |
| *IVR_VRU* | Interactive Voice Response(IVR), Voice Response Unit (VRU) |
| *TICKET_MACHINE* | A machine to buy the tickets. |
| *CALL_CENTER_OPERATOR* | The payment source entered by a call center operator when taking an order from a customer. | 

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
| *ATTENDED* | Attended terminal (Not a valid option if `cardholderActivatedTerminalInformation` is CAT_LEVEL_6) |
| *UNATTENDED* | Unattended terminal or software |
| *NONE* | No terminal or software used (VRU, etc.) |

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

#### Terminal Location

The below table identifies the valid values of `terminalLocation`.

| Value | Description |
| ----- | ----------- |
| *MERCHANT* | On the premises of the card acceptor |
| *CARDHOLDER* | On the premises of the cardholder (e.g. Home PC, Mobile Device, etc.) |
| *NONE* | No terminal used |

---

#### Terminal Entry Capability

The below table identifies the valid values of `terminalEntryCapability`.

| Value | Description |
| ----- | ----------- |
| *UNSPECIFIED* | Default |
| *ECOMMERCE* | E-commerce no terminal used |
| *MAG_STRIPE_ONLY* | Track read only |
| *MAG_STRIPE_MANUAL* | Track read or manual key |
| *MAG_STRIPE_MANUAL_CHIP* | Track read, manual key or chip |
| *BARCODE* | Barcode scan |
| *CONTACTLESS* | Contactless integrated circuit read |
| *OCR* | Opitcal character reader |
| *CHIP_ONLY* | Chip only |
| *CHIP_MAG_STRIPE* | Chip with track fallback |
| *MANUAL_ONLY* | Manual key only |
| *CONTACTLESS_MAG_STRIPE* | Contactless or track read |
| *HYBRID* | Hybrid entry mode |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/DaaS/Enhanced-Data-Service.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)
 
---
