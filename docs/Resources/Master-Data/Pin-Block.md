---
tags: [carat, commerce-hub, enterprise, card-present, master-data, pin-block]
---

# Pin Block

The PIN block is used to transport a PIN value.


<!--
type: tab
title: pinBlock
-->

The below table identifies the parameters in the `pinBlock` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `encryptedPin` | *string* | 2000 | This field contains the Encrypted PIN Block for Debit, EBT, Fleet or Credit transactions. |
| `keySerialNumber` | *string* | 256 | This field is used to create the base PIN encryption key for DUKPT PIN Debit, EBT, Fleet and Credit Transactions. |
| `pinEncryptionWorkingKey` | *string* | 2000 | This field contains the Pin encryption working key. |


<!--
type: tab
title: JSON Example 
-->

JSON string format for `pinBlock`:

```json
{
   "pinBlock":{
      "encryptedPin": "F5f36kA...",
      "keySerialNumber": "TRACK_2",
      "pinEncryptionWorkingKey": ""
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
