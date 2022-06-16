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
| `SHAZAM`| US based interbank network. |
| `NYCE` | Interbank network connecting the ATMs of various financial institutions in the United States and Canada. |
| `PULSE` | Interbank electronic funds transfer (EFT) network in the United States. |
| `STAR_WEST` | Star West interbank network. |
| `STAR_EAST` | Star East payment network. |
| `JETS`| Jets payment solutions. |
| `INFOLINKS` | Infolinks payment card. |
| `CARLFS`| Interbank electronic funds transfer (EFT) network in the United States. NO INFO |
| `STAR_NE` | Multiple payment channel network.  |
| `PAVD` | Transactions that are Visa Debit transactions and are part of the existing Visa network functionality. |
| `CNB_ENID` | Central National Bank of ENID |
| `ATH-SCOTIA BANK` | Bill payment processor. |
| `ATH_DIRECT` | Direct Debit processing system for recurring payments. |
| `INTERLINK` | Visa's electronic funds transfer card. |
| `INTERAC_EVERLINK` | Provider of comprehensive, innovative and integrated payments solutions and services for credit unions, banks, and small/medium enterprises (SMEs). |
| `UNIONPAY`| Provider of bank card services and a major card scheme in mainland China. | 
| `MAESTRO_DIRECT`| Brand of debit cards and prepaid cards owned by Mastercard. |
| `MCX` | Payment Processing platform. |
| `EBT_SOLUTRAN` | SOLUTRAN EBT |
| `EBT_ACS` | ACS EBT |
| `MAESTRO_STAR_WEST` | Brand of debit cards and prepaid cards owned by Mastercard. |
| `STAR_WEST_OPTION`| STAR WEST OPTION | 
| `JEANIE_STAR_WEST`| Online-shared ATM network. |
| `JEANIE_DIRECT` | Direct payment network. |
| `AFFN_DIRECT` | Provide U.S. military personnel (active, reserve, dependents and retired) with access to their funds through ATM and point-of-sale (POS) terminals at or near U.S. military bases worldwide. | 
| `CU24_DIRECT` | Credit Union 24 payment network. |
| `EBT_TEAM_OF_TEXAS` | TEAM OF TEXAS EBT Card. |
| `EBT_JPCHASE`| JPCHASE EBT network. | 
| `SVS`| Provides support to clients to process over gift card transactions. |
| `EXXON`| Exxon payment network. |
| `BASE_24/INTERAC`| Integrated e-payment processing engine that provides application software to acquire and authenticate, route, switch and authorize transactions, regardless of the channel in which they originate.  | 
| `CU24_FIDELITY | Credit Union 24 payment network for Fidelity. | 
| EBT_EFUNDS`| EFUNDS EBT | 
| `AFFN_FIDELITY`| Provide U.S. military personnel (active, reserve, dependents and retired) with access to their funds through ATM and point-of-sale (POS) terminals at or near U.S. military bases worldwide. | 
| `EBT_NORTHRUP_GRUMMAN` | NORTHRUP GRUMMAN EBT  | 
| `CU24_FISERV`| Credit Union 24 payment network. | 
| `AFFN_FISERV`| Provide U.S. military personnel (active, reserve, dependents and retired) with access to their funds through ATM and point-of-sale (POS) terminals at or near U.S. military bases worldwide. | 
| `STAR_EAST_FISERV`| Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel. | 
| `PULSE_FISERV`| Provide consumers anytime, anywhere access to funds – online, at ATMs and at point-of-sale (POS) locations nationwide. | 
| `NYCE_FISERV`| Interbank network connecting the ATMs of various financial institutions in the United States and Canada. | 
| `STAR_WEST_FISERV`| Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel for the West region. | 
| `STAR_NE_FISERV`| Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel for the NE region. | 
| `MAESTRO_FISERVT` | MAESTRO FISERV | 
| `INTERLINK_FISERV` | INTERLINK FISERV | 
| `EBT_FISERV` | FISERV EBT payment network.  | 
| `ACCEL_FISERV` | Payment newtwork allows account holders to access funds in a multitude of ways, make in-store and online purchases with ease, and send and receive money in real-time. | 
| `OPTION_FISERV` | OPTION-FISERV | 
  
---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)
- [Accounts Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Card Details](?path=docs/Resources/Master-Data/Card.md)
- [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Tokenization Request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---      
         
