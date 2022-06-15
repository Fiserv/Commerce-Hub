---
tags: [API Refernce, Card Details, Debit, Master Data]
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
| `NYCE` | 02 | Interbank network connecting the ATMs of various financial institutions in the United States and Canada. |
| `PULSE` | 03 | Interbank electronic funds transfer (EFT) network in the United States. |
| `STAR_WEST` | 05 | Star West interbank network. |
| `STAR_EAST` | 07 | Star East payment network. |
| `JETS`| 11 | Jets payment solutions. |
| `INFOLINKS` | 12 | Infolinks payment card. |
| `CARLFS`| 13 |  interbank electronic funds transfer (EFT) network in the United States. NO INFO |
| `STAR_NE` | 14 | Multiple payment channel network.  |
| `PAVD` | 15 | Transactions that are Visa Debit transactions and are part of the existing Visa network functionality. |
| `CNB_ENID` | 16 | Central National Bank of ENID |
| `ATH-SCOTIA BANK` | 17 | Bill payment processor. |
| `ATH_DIRECT` | 18 | Direct Debit processing system for recurring payments. |
| `INTERLINK` | 19 | Visa's electronic funds transfer card. |
| `INTERAC_EVERLINK` | 20 | Provider of comprehensive, innovative and integrated payments solutions and services for credit unions, banks, and small/medium enterprises (SMEs). |
| `UNIONPAY`| 23 | Provider of bank card services and a major card scheme in mainland China. | 
| `MAESTRO_DIRECT`| 25 | Brand of debit cards and prepaid cards owned by Mastercard. |
| `MCX` | 26 | Payment Processing platform. |
| `EBT_SOLUTRAN` | 28 | SOLUTRAN EBT |
| `EBT_ACS` | 29 | ACS EBT |
| `MAESTRO_STAR_WEST` | 30 | Brand of debit cards and prepaid cards owned by Mastercard. |
| `STAR_WEST_OPTION`| 31 | STAR WEST OPTION | 
| `JEANIE_STAR_WEST`| 33 | Online-shared ATM network. |
| `JEANIE_DIRECT` | 34 | Direct payment network. |
| `AFFN_DIRECT` | 35 | Provide U.S. military personnel (active, reserve, dependents and retired) with access to their funds through ATM and point-of-sale (POS) terminals at or near U.S. military bases worldwide. | 
| `CU24_DIRECT` | 36| Credit Union 24 payment network. |
| `EBT_TEAM_OF_TEXAS` | 37 | TEAM OF TEXAS EBT Card. |
| `EBT_JPCHASE`| 39 | JPCHASE EBT network. | 
| `SVS`| 39 | Provides support to clients to process over gift card transactions. |
| `EXXON`| 42 | Exxon payment network. |
| `BASE_24/INTERAC`| 43 | Integrated e-payment processing engine that provides application software to acquire and authenticate, route, switch and authorize transactions, regardless of the channel in which they originate.  | 
| `CU24_FIDELITY | 46 | Credit Union 24 payment network for Fidelity. | 
| EBT_EFUNDS`| 47 | EFUNDS EBT | 
| `AFFN_FIDELITY`| 48 | Provide U.S. military personnel (active, reserve, dependents and retired) with access to their funds through ATM and point-of-sale (POS) terminals at or near U.S. military bases worldwide. | 
| `EBT_NORTHRUP_GRUMMAN` | 49 | NORTHRUP GRUMMAN EBT  | 
| `CU24_FISERV`| 51 | Credit Union 24 payment network. | 
| `AFFN_FISERV`| 52 |  Provide U.S. military personnel (active, reserve, dependents and retired) with access to their funds through ATM and point-of-sale (POS) terminals at or near U.S. military bases worldwide. | 
| `STAR_EAST_FISERV`| 56 | Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel. | 
| `PULSE_FISERV`| 57 | Provide consumers anytime, anywhere access to funds – online, at ATMs and at point-of-sale (POS) locations nationwide. | 
| `NYCE_FISERV`| 59 | Interbank network connecting the ATMs of various financial institutions in the United States and Canada. | 
| `STAR_WEST_FISERV`| 62 | Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel for the West region. | 
| `STAR_NE_FISERV`| 63 | Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel for the NE region. | 
| `MAESTRO_FISERVT` | 64 | MAESTRO FISERV | 
| `INTERLINK_FISERV` | 65 | INTERLINK FISERV | 
| `EBT_FISERV` | 67 | FISERV EBT payment network.  | 
| `ACCEL_FISERV` | 68 | Payment newtwork allows account holders to access funds in a multitude of ways, make in-store and online purchases with ease, and send and receive money in real-time. | 
| `OPTION_FISERV` | 69 | OPTION-FISERV | 
  
---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)
- [Accounts Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Card Details](?path=
- [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Tokenization Request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---      
         
