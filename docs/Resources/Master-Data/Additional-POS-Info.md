---
tags: [carat, commerce-hub, enterprise, amount, amount-components,transaction-amount ]
---

# Additional POS Information

Additional information about the POS functions and features can be submitted in the `additionalPosInformation` object as part of `transactionInteraction`.

<!--
type: tab
title: amount
-->

The below table identifies the parameters in the `additionalPosInformation` object.

|Variable |Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `dataEntrySource` | *number* | 18,3 | Channel the consumer used to initiated transaction. **Valid Values:** *MOBILE_APP*, *MOBILE_WEB*, *BROWSER_PC*, *KIOSK*, *CONSOLE*, *3DS_REQUESTOR_INITIATED* |

<!--
type: tab
title: JSON Example
-->

JSON string format for `additionalPosInformation`:

```json
{
   "transactionInteraction": {
      "additionalPosInformation": {
         "dataEntrySource": "MOBILE_APP",
         "houseNumberOrName": "Apt 1",
         "city": "Atlanta",
         "stateOrProvince": "GA",
         "postalCode": "30301",
         "country": "US"
      }
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Enhanced Data Service](?path=docs/Resources/API-Documents/Payments_VAS/Enhanced-Data-Service.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---