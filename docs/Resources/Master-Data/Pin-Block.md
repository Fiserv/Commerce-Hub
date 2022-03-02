---
tags: [carat, commerce-hub, enterprise, card-present, master-data, pin-block]
---

# PIN Block

The PIN block is used to transport an `encryptedPin`. When the customer enters the PIN in the terminal it is encrypted using the terminal's Derived Unique Key Per Transaction (DUKPT) key.

#### Requirements

- Mandatory for Debit Card transactions (with exception of Debit Card PIN-Less transactions).
- Mandatory for EBT Cash Benefit transactions and mandatory for all EBT Food Stamp transactions (except for EBT Voucher Clear transactions).
- Mandatory for transactions submitted by European Union merchants, sending contactless EMV authorization requests, from their POS Terminals.


<!--
type: tab
titles: pinBlock, JSON Example
-->

The below table identifies the parameters in the `pinBlock` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `encryptedPin` | *string* | 2000 | This field contains the Encrypted PIN Block for Debit, EBT, Fleet or Credit transactions. |
| `keySerialNumber` | *string* | 256 | This field is used to create the base PIN encryption key for DUKPT PIN Debit, EBT, Fleet and Credit Transactions. |
| `pinEncryptionWorkingKey` | *string* | 2000 | Terminal PIN Encryption working key (TKPE). A PIN Encryption Key is a used to protect PINs as they are transmitted. |


<!--
type: tab
-->

JSON string format for `pinBlock`: 

```json
{
   "pinBlock":{
      "encryptedPin": "53511F325B7C89E3",
      "keySerialNumber": "7964085138968549....",
      "pinEncryptionWorkingKey": "7586325254178549....."
   } 
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Encrypted Data](?path=docs/Resources/Master-Data/Encryption-Data.md)

---
