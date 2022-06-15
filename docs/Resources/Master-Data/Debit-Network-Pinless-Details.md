---
tags: [card-details, debit-newtork-pinless-details, master-data]
---

# Debit Network Pinless Details 
The Debit Network Pinless Details are returned as part of the `cardDetails` object. The indicators identify the network and PIN support based on the entry method.

<!--
type: tab
titles: debitPinlessIndicator, JSON Example
-->

The below table identifies the parameters in the `debitPinlessIndicator` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `debitNetworkId` | *string* | 20 | Identifies the [debit network](#debit-network-id). |
| `eCommerce` | *string* | 13 | e-Commerce indicator. |
| `pinlessPOS` | *string* | 13 | PINless POS indicator. |
| `pinlessBillPay` | *string* | 13 | PINless BillPay indicator. |
| `dualIndicator` | *string* | 13 | Dual indicator. |
| `pinnedPOS` | *string* | 13 | Pinned POS indicator. |

<!--
type: tab
-->

JSON string format for `debitPinlessIndicator`:

```json
{
   "debitPinlessIndicator":{
      "debitNetworkId": "NYCE"
      "eCommerce": "SUPPORTED",
      "pinlessPOS": "SUPPORTED",
      "pinlessBillPay": "SUPPORTED",
      "dualIndicator": "NOT_SUPPORTED",
      "pinnedPOS": "SUPPORTED"
    
   }
}
```

<!-- type: tab-end -->

---

## Debit Network ID

The below table identifies the values for `debitNetworkId`.

| Value | Description |
|---------|----------|
| `pinlessPOS` | PAVD FISERV |
| `SHAZAM` | 01 | US based interbank network. |
| `NYCE` | 02 | Debit payment services provider. |
| `PULSE` | 03 | US based electronic funds transfer. |
| `STAR_WEST` | 05 | Star West payment network. (Mortgage/Wealth Management?) |
| `STAR_WEST` | 07 | STAR_WEST|
| `JETS`| 11 | JETS |
| `INFOLINKS` | 12 | INFOLINKS |
| `CARLFS`| 13 | CARLFS |
| `STAR_NE` | 14 | STAR NE |
| `PAVD` | 15 | PAVD |
| `CNB_ENID` | 17 | ATH-SCOTIA BANK |
| `ATH_DIRECT` | 18 | ATH-DIRECT |
| `INTERLINK` | 19 | INTERLINK |
| `INTERAC_EVERLINK` | 20 | INTERAC EVERLINK |
| `UNIONPAY`| 23 | UNIONPAY | 
| `MAESTRO_DIRECT`| 25 | MAESTRO DIRECT |
| `MCX` | 26 | MCX |
| `EBT_SOLUTRAN` | 28 | EBT SOLUTRAN |
| `EBT_ACS` | 29 | EBT ACS|
| `MAESTRO_STAR_WEST` | 30 | MAESTRO STAR WEST |
| `STAR_WEST_OPTION`| 31 | STAR WEST OPTION | 
| `JEANIE_STAR_WEST`| 33 | JEANIE STAR WEST |
| `JEANIE_DIRECT` | 34 | JEANIE DIRECT |
| `AFFN_DIRECT` | 35 | AFFN_DIRECT | 
| `CU24_DIRECT` | 36| CU24-DIRECT |
| `EBT_TEAM_OF_TEXAS` | 37 | TEAM OF TEXAS EBT Card  |
| `EBT_JPCHASE`| 39 | JPCHASE EBT  | 
| `SVS`| 39 | SVS |
| `EXXON`| 42 | EXXON |
| `BASE_24/INTERAC`| 43 | BASE 24/INTERAC | 
| `CU24_FIDELITY | 46 | CU24-FIDELITY | 
| EBT_EFUNDS`| 47 | EFUNDS EBT | 
| `AFFN_FIDELITY`| 48 | AFFN FIDELITY | 
| `EBT_NORTHRUP_GRUMMAN` | 49 | NORTHRUP GRUMMAN EBT  | 
| `CU24_FISERV`| 51 | CU24-FISERV | 
| `AFFN_FISERV`| 52 | AFFN-FISERV | 
| `STAR_EAST_FISERV`| 56 | STAR-EAST FISERV | 
| `PULSE_FISERV`| 57 | PULSE FISERV | 
| `NYCE_FISERV`| 59 | NYCE FISERV | 
| `STAR_WEST_FISERV`| 62 | STAR-WEST FISERVAFFN_DIRECT | 
| `STAR_NE_FISERV`| 63 | STAR NE FISERV | 
| `MAESTRO_FISERVT` | 64 | MAESTRO FISERV | 
| `INTERLINK_FISERV` | 65 | INTERLINK FISERV | 
| `EBT_FISERV` | 67 | EBT-FISERV | 
| `ACCEL_FISERV` | 68 | ACCEL FISERV | 
| `OPTION_FISERV` | 69 | OPTION-FISERV | 
  
---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)
- [Accounts Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Tokenization Request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---      
         
