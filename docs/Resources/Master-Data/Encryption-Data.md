---
tags: [carat, commerce-hub,encrypted-data, enterprise, card-present, master-data, pin-block]
---

# Encryption Data

Data encryption is a method of protecting data confidentiality by converting it to encoded information, that can only be decoded with a unique decryption key, generated either at the time of encryption or beforehand.

<!--
type: tab
title: encryptionData
-->

The below table identifies the parameters in the `encryptionData` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `encryptionType` | *string* | 256 | Encryption type to be passed. Possible values: RSA, Verifone, TDES/DUKPT,On-Guard FPE, AES/Dukpt. Defaults to RSA. |
| `encryptionTarget` | *string* | 256 | Target could be Track1, Track2, Both or Manual. |
| `encryptionBlock` | *string* | 2000 |  |
| `deviceType` | *string* | 256 | Device type need to be sent for TDES and AES encrypted track data. Possible values: INGENICO, RPXXX, CLOVER, NCR, NCRTLV. Defaults to INGENICO. |
| `securitykeyUpdateIndicator` | *boolean* |  | Provided in response. POS is expected to download updated key, key cert. |
| `keyId` | *string* |  | Needs to be passed if track data is encrypted. |
| `encryptedKey` | *string* | 2000 | Identifier required for decryption. |

<!--
type: tab
title: JSON Example 
-->

JSON string format for `encryptionData`:

```json
{
   "encryptionData":{
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "",
      "deviceType": "INGENICO",
      "securitykeyUpdateIndicator": false,
      "keyId": "",
      "encryptedKey": "NdCmVw5..."
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Pin Block](?path=docs/Resources/Master-Data/Pin-Block.md)

---