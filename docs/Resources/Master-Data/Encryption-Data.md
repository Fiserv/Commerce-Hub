---
tags: [API Reference, Card Present, Encrypted Data, Master Data, Pin Block]
---

# Encryption Data

Data encryption is a method of protecting data confidentiality by converting it to encoded information, that can only be decoded with a unique decryption key, generated either at the time of encryption or beforehand. Commerce Hub supports [device encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md) and [multi-use public key encryption](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md).

<!--
type: tab
titles: encryptionData, JSON Example
-->

The below table identifies the parameters in the `encryptionData` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `encryptionType` | *string* | 256 | [Encryption type](#encryption-type) to be passed. |
| `encryptionTarget` | *string* | 256 | [Encryption target](#encryption-target) identifies the data based on how it is entered into the POS device or terminal, website, virtual terminal (VPOS), or mobile app or device. |
| `encryptionBlock` | *string* | 2000 | This field contains the track data or card number provided in encrypted form. |
| `deviceType` | *string* | 256 | [Device type](#device-type) that needs to be sent for TDES and AES encrypted track data. |
| `securitykeyUpdateIndicator` | *boolean* |  | Provided in response. POS is expected to download updated key, key cert. |
| `keyId` | *string* | 40 | Provided encryption key required for decryption of data that is encrypted. This field must be submitted for encryption request messages sending manual PAN, Track 1, or Track 2 data that is encrypted. |
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

Encryption type is the method used to encrypt payment data before sending it to Commerce Hub.

| Valid Values | Details |
| ----- | ----- | 
| *RSA* | RSA Software Encryption (public/private keys) |
| *VERIFONE* | VeriFone Hardware Encryption – Currently not supported |
| *VERIFONE_VDR* | |
| *TDES_DUKPT* | Triple DES Encryption - Symmetric-key block cipher, which applies the DES cipher algorithm three times to each data block. |
| *ON_GUARD* | Ingenico OnGuard Encryption – Format preserving option that relies on symmetric encryption keys used to encrypt and decrypt the cardholder data using 3DES encryption standard. |
| *FPE* | |
| *AES_DUKPT* | Advanced Encryption Standard – Format preserving option that relies on symmetric encryption keys. AES algorithm uses cryptographic keys of 128/256 bits to encrypt and decrypt data. |

---

### Encryption Target

| Valid Values | Details |
| ----- | ----- | 
| *MANUAL* | When card data is manually entered into a POS device or terminal, website, virtual terminal (VPOS), or mobile app or device. | 
| *TRACK1* | When track 1 card data is swiped into a POS device or terminal (Mag stripe) |
| *TRACK2* | When track 2 card data is swiped, dipped, or tapped into a POS device/terminal (Mag stripe, EMV, NFC/Contactless) |
| *BOTH* | When track 1 and 2 card data is swiped, dipped, or tapped into a POS device/terminal (Mag stripe, EMV, NFC/Contactless) |

---

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
