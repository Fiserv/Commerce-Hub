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
title: VISA
-->

The below table identifies the parameters in the `visa` object.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `visaBid` | *string* |  | The Business Identifier (BID) provided by Visa to Third Party Services (TPS) |
| `visaAur` | *string* |  | Agent Unique Account Result (AUAR) provided by Visa to Third Party Services (TPS) in 12 hex digit format. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `visa`:

```json
{
  "visa":{
    "visaBid":"VISA",
    "visaAur":"12345AD89012"
  }
}
```

<!-- type: tab-end -->

---

## Mastercard

Contains the mastercard specific network data.

<!--
type: tab
title: Mastercard
-->

The below table identifies the parameters in the `mastercard` object.

|Variable |Type| Maximum Length | Description|
|------|--------|-------|----------------|
| `interchangeComplianceIndicator` | *string* |  | A code to indicate that Mastercard interchange compliance data was provided for this transaction, and if any other special Mastercard authorization requirements were met. |
| `bankNetRefNumber` | *string* |  | A Mastercard generated identifier for each original authorization request. Reference number assigned by Mastercard to each authorization message. |
| `bankNetDate` | *string* |  | A Mastercard generated date for this transaction. MMDD format |
| `cvvErrorIndicator` | *string* |  | Indicates the CVC Error response data |
| `transactionIntegrityClass` | *string* |  | Contains the MasterCard provided Transaction Integrity Classification for Point of Sale (POS) Purchase and Purchase with Cash Back transactions initiated on the Authorization Platform. |


<!--
type: tab
title: JSON Example
-->

JSON string format for `mastercard`:

```json
{
  "mastercard":{
    "interchangeComplianceIndicator":"string",
    "bankNetRefNumber":"string",
    "bankNetDate": "string",
    "cvvErrorIndicator": "string",
    "transactionIntegrityClass": "string"
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