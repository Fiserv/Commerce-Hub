---
tags: [API Reference, Card Present, Master Data, Pin Block]
---

# PIN Key Management

A PIN entered at the point-of-sale *(POS)* must be encrypted before it is sent in the payload to Commerce Hub. Commerce Hub currently supports [DUKPT (Derived Unique Key Per Transaction)](?path=docs/Resources/FAQs-Glossary/Glossary.md#derived-unique-key-per-transaction) methodology. To comply with debit network mandates, [Triple DES *(TDES)*](?path=docs/Resources/FAQs-Glossary/Glossary.md#tripple-des) DUKPT with double length keys must be supported.

<!-- theme: info -->
> Please contact your account representative for more information on the setup and provisioning of DUKPT keys in your environment.

---

## PIN Block

The PIN block is used to transport an `encryptedPin`. When the customer enters the PIN in the terminal it is encrypted using the terminal's Derived Unique Key Per Transaction (DUKPT) key.

### Requirements

- Mandatory for debit card transactions *(with exception of debit card PIN-Less transactions)*.
- Mandatory for EBT Cash Benefit transactions and mandatory for all EBT Food Stamp transactions *(except for EBT Voucher Clear transactions)*.
- Mandatory for transactions submitted by European Union merchants, sending contactless EMV authorization requests, from their POS devices.

<!--
type: tab
titles: pinBlock, JSON Example
-->

The below table identifies the parameters in the `pinBlock` object.

| Variable | Type | Max Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `encryptedPin` | *string* | 2000 | This field contains the Encrypted PIN Block for [debit](?path=docs/Resources/Guides/Debit/Debit.md), EBT, [Fleet Card](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Card.md) or credit transactions |
| `keySerialNumber` | *string* | 256 | This field is used to create the base PIN encryption key for DUKPT PIN transactions |
| `pinEncryptionWorkingKey` | *string* | 2000 | Device PIN Encryption working key *(TKPE)*. A PIN Encryption Key is a used to protect PINs as they are transmitted |

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
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Encrypted Data](?path=docs/Resources/Master-Data/Encryption-Data.md)

---
