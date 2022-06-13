---
tags: [carat, commerce-hub,encrypted-data, enterprise, card-present, master-data, pin-block]
---

# Encryption Data

Data encryption is a method of protecting data confidentiality by converting it to encoded information, that can only be decoded with a unique decryption key, generated either at the time of encryption or beforehand.

<!--
type: tab
titles: encryptionData, JSON Example
-->

The below table identifies the parameters in the `encryptionData` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `encryptionType` | *string* | 256 | Encryption type to be passed. |
| `encryptionTarget` | *string* | 256 | Target could be *TRACK1*, *TRACK2*, Both or Manual. |
| `encryptionBlock` | *string* | 2000 | This field contains the track data or card number provided in encrypted form. |
| `deviceType` | *string* | 256 | Device type that needs to be sent for TDES and AES encrypted track data. |
| `securitykeyUpdateIndicator` | *boolean* |  | Provided in response. POS is expected to download updated key, key cert. |
| `keyId` | *string* | 40 | Provided encryption key required for decryption of track data that is encrypted. This field must be submitted for encryption request messages sending manual PAN, Track 1, or Track 2 data that is encrypted. |
| `encryptedKey` | *string* | 2000 | Merchant or device defined encryption key required for decryption of encrypted `cardData`. Normally used in card not present integrations e.g. Mobile device |
| `encryptionBlockFields` | *string* | 256 | Encryption block field descriptors to facilitate decryption when using [multi-use public key encryption](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md). Each field should recorded the form field_name:byte_count e.g. card.expirationMonth:2 |


<!--
type: tab
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

### Encryption Type

| Valid Values | Details |
| ----- | ----- | 
| *RSA* | Default | |
| *VERIFONE* | |
| *VERIFONE_VDR* | |
| *TDES_DUKPT* | |
| *ON_GUARD* | |
| *FPE* | |
| *AES_DUKPT* | |

### Device Type

| Valid Values | Details |
| ----- | ----- | 
| *INGENICO* | Default |
| *RPXXX* | |
| *CLOVER* | |
| *NCR* | |
| *NCRTLV* | |

--- 

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [EMV Chip and PIN](?path=docs/In-Person/Encrypted-Payments/EMV.md)
- [Manual Entry](?path=docs/In-Person/Encrypted-Payments/Manual.md)
- [Pin Block](?path=docs/Resources/Master-Data/Pin-Block.md)
- [Track Data](?path=docs/In-Person/Encrypted-Payments/Track.md)
- [Multi-Use Public Key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md)

---
