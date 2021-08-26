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
| `posId` | *string* | | Identifies the specific device or point of entry where the transaction originated. For example, pump number, lane number, terminal number, etc. |
| `cashierId` | *string* | | Used to uniquely identify the merchant’s store cashier or employee accepting the transaction. |
| `stan` | *string* | | Contains the System Trace Audit Numbers (STAN) returned for a Discover incremental transaction. Note: This field has limited platform availability. For more information, please contact your account representative. |
| `posFormFactorIndicator` | *string* | | This field is used to identify the form factor used at the POS for MasterCard PayPass transactions. Note: Some values from 00–19 may indicate not only the physical form factor but also other attributes such as device technology and payment app specifications. Values from 20–99 exclusively indicate the form factor only without also indicating the storage technology.|
| `enhancedAuthorizationRequestIndicator` | *string* | 32 | Used to indicate that the terminal or software is capable of supporting partial authorizations, [prepaid identification and request balances](#enhanced-authorization-request-indicator). Partial Authorization support is dependent on card type and region please contact your account representative.|
| `dataEntrySource` | *string* | 32 | Channel the consumer used to initiated transaction. **Valid Values:** *MOBILE_APP*, *MOBILE_WEB*, *BROWSER_PC*, *KIOSK*, *CONSOLE*, *3DS_REQUESTOR_INITIATED* |
| `transactionQualifier` | *string* | | Used for Discover - Discover TransactionQualifier. |
| `enhancedAuthorizationResponseIndicator` | *string* |  | Returns the approval type for Enhanced Authorization. Valid Values: *FULL*, *PARTIAL*, *DEPLETED*, *DECLINE*, *ERROR* |
| `attendedTerminalData` | *string* | 16 | [Attended terminal data](#attended-terminal-data) indicates if the card acceptor was at the point of sale. |


<!--
type: tab
title: JSON Example
-->

JSON string format for `additionalPosInformation`:

```json
{
   "transactionInteraction": {
      "additionalPosInformation": {
         "dataEntrySource": "MOBILE_APP"
      }
   }
}
```

<!-- type: tab-end -->

### Hardware and Software Information

posHardwareAndSoftware

### POS Features

posFeatures

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

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/Payments_VAS/Enhanced-Data-Service.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---