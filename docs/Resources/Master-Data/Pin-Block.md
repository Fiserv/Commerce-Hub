---
tags: [API Reference, Card Present, Master Data, Pin Block]
---

# PIN Key Management

** PIN entered at the point of sale must be encrypted before it is sent in the payload to Commerce Hub.
** Commerce Hub currently supports "DUKPT" (Derived Unique Key Per Transaction) methodology. To comply with debit network mandates, Triple DES (TDES) DUKPT with double length keys must be supported.
*** DUKPT system of “derived” keys is used in a point-of-sale (POS) environment where the merchant can accept transactions from a large number of unique PIN entry devices. This technique involves the use of a non-secret “key serial number” and a secret “base derivation key”. On each transaction, the PIN pad derives a unique key based on a previous key and the key serial number. Terminal encrypts the PIN with this derived key, and sends both the encrypted PIN and the key serial number to the Host.
**** Please contact your Fiserv account management team on the setup and provisioning of DUKPT keys in your environment.
** Commerce Hub will support master/working session encryption key methodology in *future*.
*** Merchants incorporating a Host Security Module (HSM) into their system typically use the master session encryption key methodology.
*** Merchants’ HSM will accept DUKPT output from PIN pads at the point-of-sale (POS) and translate the encrypted PIN to the current working key shared with Fiserv.
*** A master key must be established in coordination with the Fiserv Key Management office prior to the start of processing.
*** A working session key is periodically exchanged between merchant and Fiserv and is used to encrypt the pin payload.

## PIN Block

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
