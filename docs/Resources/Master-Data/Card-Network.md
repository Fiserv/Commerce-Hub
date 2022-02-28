---
tags: [carat, commerce-hub, enterprise, master-data, card-network, card-brand, card-scheme, visa, mastercard, amex, discover]
---

# Card Network

The card networks can return sepcific values in the [network response](?path=docs/Resources/Master-Data/Network-Details.md) and some of these values may need to be re-submitted as a part of [transaction interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md) for all subsequent transactions.

---

## Visa

Contains the Visa specific network data.

<!--
type: tab
titles: VISA, JSON Example
-->

The below table identifies the parameters in the `visa` object.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `VISABID` | *string* | 128 | The Business Identifier (BID) provided by Visa to Third Party Services (TPS) |
| `VISAAUR` | *string* | 128 | Agent Unique Account Result (AUAR) provided by Visa to Third Party Services (TPS) in 12 hex digit format. |
| `cardAuthenticationResultCode` | *string* | 1 | Card Authentication Results Code returned by Visa for EMV chip transactions. |
| `spendQualificationIndicator` | *boolean* |  | A field used by Visa to establish annual point-of-sale spending requirements. |

<!--
type: tab
-->

JSON string format for `visa`:

```json
{
  "visa":{
    "VISABID":"VISA",
    "VISAAUR":"12345AD89012",
    "cardAuthenticationResultCode": "",
    "spendQualificationIndicator": false
  }
}
```

<!-- type: tab-end -->

---

## Mastercard

Contains the mastercard specific network data.

<!--
type: tab
title: Mastercard, JSON Example
-->

The below table identifies the parameters in the `mastercard` object.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `interchangeComplianceIndicator` | *string* |  | A code to indicate that Mastercard interchange compliance data was provided for this transaction, and if any other special Mastercard authorization requirements were met. |
| `bankNetRefNumber` | *string* |  | A Mastercard generated identifier for each original authorization request. Reference number assigned by Mastercard to each authorization message. |
| `bankNetDate` | *string* |  | A Mastercard generated date for this transaction. MMDD format |
| `cvvErrorIndicator` | *string* |  | Indicates the CVC Error response data |
| `transactionEditErrorCode` | *string* |  |  Indicates the track data & POS validation Error in response data. |
| `transactionIntegrityClass` | *string* |  | Contains the MasterCard provided Transaction Integrity Classification for Point of Sale (POS) Purchase and Purchase with Cash Back transactions initiated on the Authorization Platform. |
| `xCodeResponse` | *string* | 6 | Contains the MasterCard provided Transaction Integrity Classification for Point of Sale (POS) Purchase and Purchase with Cash Back transactions initiated on the Authorization Platform. |
| `chipCryptoValue` | *string* | 3 | Conditional for Mastercard EMV chip transactions. This value is used to notify the chip that the transaction was unable to go online and is required for batch uploads.' |
| `cardDataOutputCapability` | *string* | 25 | Identifies the card's capability to output data. |
| `terminalDataOutputCapability` | *string* | 25 | Identifies the terminal's capability to display response data. |


<!--
type: tab
-->

JSON string format for `mastercard`:

```json
{
  "mastercard":{
    "interchangeComplianceIndicator":"string",
    "bankNetRefNumber":"string",
    "bankNetDate": "string",
    "cvvErrorIndicator": "string",
    "transactionEditErrorCode": "PRESENT_TRACK_DATA",
    "transactionIntegrityClass": "string",
    "xCodeResponse": "string",
    "chipCryptoValue": "string",
    "cardDataOutputCapability": "UNSPECIFIED",
    "terminalDataOutputCapability": "UNSPECIFIED"
  }
}
```

<!-- type: tab-end -->

---

<!---
## Amex (American Expresss)
## Discover

-->

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Network Details](?path=docs/Resources/Master-Data/Network-Details.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)


---
