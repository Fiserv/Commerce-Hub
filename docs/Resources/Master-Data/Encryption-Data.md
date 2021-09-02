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
| `encryptionType` | *string* | 256 | Encryption type to be passed. **Valid values:** *RSA (Default)*, *VERIFONE*, *VERIFONE_VDR*, *TDES_DUKPT*,*ON_GUARD*, *FPE*, *AES_DUKPT*. |
| `encryptionTarget` | *string* | 256 | Target could be *TRACK1*, *TRACK2*, Both or Manual. |
| `encryptionBlock` | *string* | 2000 | This field contains the track data or card number provided in encrypted form. |
| `deviceType` | *string* | 256 | Device type need to be sent for TDES and AES encrypted track data. **Valid values:** *INGENICO (Default)*, RPXXX, *CLOVER*, *NCR*, *NCRTLV*. |
| `securitykeyUpdateIndicator` | *boolean* |  | Provided in response. POS is expected to download updated key, key cert. |
| `keyId` | *string* | 40 | Needs to be passed if track data is encrypted. This field must be submitted for encryption request messages sending manual PAN, Track 1, or Track 2 data that is encrypted. |
| `encryptedKey` | *string* | 2000 | Merchant or device defined encryption key required for decryption of encrypted `cardData`. Normally used in card not present integrations e.g. Mobile device |

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
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/....",
      "deviceType": "INGENICO",
      "securitykeyUpdateIndicator": false,
      "keyId": "88000000023",
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