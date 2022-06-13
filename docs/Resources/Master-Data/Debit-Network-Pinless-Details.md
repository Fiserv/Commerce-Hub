---
tags: [card-details, debit-newtork-pinless-details, master-data]
---

# Debit Network Pinless Details 
The Debit Network Pinless Details are returned in the [Debit Network PINless Details](?path=docs/Resources/Master-Data/Debit-Pinless-Indicator.md) as part of the `cardDetails` object. 

The below table identifies the parameters in the `cardDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `pinlessPOS` | *string* | 13 | PINless POS indicator. |
| `pinlessBillPay | *string* | 13 | PINless BillPay indicator. |
| `dualIndicator` | *string* | 13 | Dual indicator. |
| `pinnedPOS` | *string* | 13 | Pinned POS indicator. |

# Debit Network ID

The below table identifies the parameters in the for the Debit Network ID.

| Variable | Number | Description |
|---------|----------|---------|
| `pinlessPOS` | A5 |  PAVD FISERV |
| `pinlessBillPay | *string* | 13 | PINless BillPay indicator. |
| `dualIndicator` | *string* | 13 | Dual indicator. |
| `pinnedPOS` | *string* | 13 | Pinned POS indicator. |
