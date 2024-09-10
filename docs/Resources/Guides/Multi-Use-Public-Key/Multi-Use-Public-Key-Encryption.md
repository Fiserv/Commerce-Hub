---
tags: [Multi-Use Public Key, RSA, Encrypted Payments, Payment Card, EMV, Track]
---

# Multi-Use Public Key Encryption

The merchant uses a [generated multi-use public key _(MUPK)_](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md) for the asymmetric encryption of _PaymentCard_, _PaymentEMV_ and _PaymentTrack_ card data, allowing the merchant the ability to securely store and send the data to Commerce Hub at a later time.

<!-- theme: info -->
> Commerce Hub supports encrypting `securityCode` data only when processing a [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) [online, digital or mobile payment](?path=docs/Getting-Started/Getting-Started-Online.md) request when using a [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or an encrypted [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md). This process enhances security and serves cardholder validation purposes.

---

## Step 1: Generate Unencrypted encryptionBlock

The `encryptionBlock` is passed through the _PaymentCard_, _PaymentEMV_ or _PaymentTrack_ request to encrypt the data. The `encryptionBlock` is a concatenated string of the the payment instruments unencrypted data.

<!--
type: tab
titles: PaymentCard, PaymentEMV, PaymentTrack
-->

The `encryptionBlock` for _PaymentCard_ includes the `card` object fields which can include: `cardData`, `nameOnCard`, `expirationMonth`, `expirationYear`, and `securityCode`.

```javascript
const cardData = {
    "cardData": "4005550000000019",
    "nameOnCard": "John Doe",
    "expirationMonth": "01",
    "expirationYear": "2034",
    "securityCode": "123"
}
  
const encryptionBlock =  Object.values(cardData).join(""));
```

<!-- theme: example -->
> encryptionBlock = 4005550000000019John Doe123122034

<!--
type: tab
-->

The `encryptionBlock` for _PaymentEMV_ includes either the `track1Data` or `track2Data`. The below snippet is for `track2Data`.

```javascript
const track2Data = {
    "track2Data": "4005550000000019=3401111123400001230"
}
  
const encryptionBlock =  Object.values(track2Data).join(""));
```

<!-- theme: example -->
> encryptionBlock = 4005550000000019=3401111123400001230

<!--
type: tab
-->

The `encryptionBlock` for _PaymentTrack_ includes either the `track1Data` or `track2Data`. The below snippet is for `track1Data`.

```javascript
const track1Data = {
    "track1Data": "B4005550000000019^John/Doe ^34011110000123000"
}
  
const encryptionBlock =  Object.values(track1Data).join(""));
```

<!-- theme: example -->
> encryptionBlock = B4005550000000019^John/Doe ^34011110000123000

<!-- type: tab-end -->

---

## Step 2:  Generate encryptionBlockFields

The `encryptionBlockFields` when generated contains a string of data fields and its corresponding byte lengths. The string must match the order in which the `encryptionBlock` was generated in step 1.

<!--
type: tab
titles: PaymentCard, PaymentEMV, PaymentTrack
-->

```javascript
const cardData = {
    "cardData": "4005550000000019",
    "nameOnCard": "John Doe",
    "expirationMonth": "01",
    "expirationYear": "2034",
    "securityCode": "123"
}
  
const encryptionBlockFields = Object.keys(cardData).map(key => `card.${key}:${encoder.encode(cardData[key]).length}`).join(',');
```

<!-- theme: example -->
> encryptionBlockFields = card.cardData:16,card.nameOnCard:8,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3

<!--
type: tab
-->

```javascript
const track2Data = {
    "track2Data": "4005550000000019=3401111123400001230"
}
  
const encryptionBlockFields = Object.keys(track2Data).map(key => `${key}:${encoder.encode(track2Data[key]).length}`).join(',');
```

<!-- theme: example -->
> encryptionBlockFields = track2Data:36

<!--
type: tab
-->

```javascript
const track1Data = {
    "track1Data": "B4005550000000019^John/Doe ^34011110000123000"
}

const encryptionBlockFields = Object.keys(track1Data).map(key => `${key}:${encoder.encode(track1Data[key]).length}`).join(',');
```

<!-- theme: example -->
> encryptionBlockFields = track1Data:45

<!-- type: tab-end -->

---

## Step 3: Perform RSA Encryption

A [generate key](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md#generate-key) request is required  to receive a base64 encoded encryption key. This key is used to encrypt the `encryptionBlock` that was created in step 1.

```javascript
const asymmerticallyEncrypt = async (base64PubKey, sourceString) => {  const keyBuf = toArrayBuffer(window.atob(base64PubKey));
  const pubKeyDer = await window.crypto.subtle.importKey("spki", keyBuf, { name: "RSA-OAEP", hash: "SHA-256", }, true, ["encrypt"]);
  const encryptedBlock = await window.crypto.subtle.encrypt({name: "RSA-OAEP",}, pubKeyDer, new TextEncoder().encode(sourceString));
  return toBase64Encode(encryptedBlock);
};

const toBase64Encode = (arrayBuffer) => window.btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
```

---

## Step 4: Form encryptionData

Form the `encryptionData` object using the encrypted `encryptionBlock` and `encryptionBlockFields` from steps 2 and 3.

The below table identifies the parameters in the `encryptionData` object.

| Variable | Type | Maximum Length | Description |
| -------- | :----: | :-----: | -----------|
| `encryptionType` | _string_ | 256 | Encryption type is _RSA_ when using MUPK. |
| `encryptionTarget` | _string_ | 256 | The [encryption target](?path=docs/Resources/Master-Data/Encryption-Data.md#encryption-target) identifies the data based on how it is entered into the device or terminal, website, or mobile app or device. |
| `encryptionBlock` | _string_ | 2000 | This field contains the card details in encrypted form. |
| `keyId` | _string_ | 40 | Provided encryption key required for decryption of track data that is encrypted. |
| `encryptionBlockFields` | _string_ | 256 | Encryption block field descriptors to facilitate decryption when using public keys. Each field should be recorded in the form of the object.field_name:byte_count, for example: card.expirationMonth:2. |
| `devoiceType` | _string_ | 256 | Original [device type](?path=docs/Resources/Master-Data/Encryption-Data.md#device-type) that read the payment instrument, only required for [in-person](?path=docs/Getting-Started/Getting-Started-InPerson.md) integrations. |

<!--
type: tab
titles: PaymentCard, PaymentEMV, PaymentTrack
-->

```javascript
encryptionData: {
  keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51",
  encryptionType: "RSA",
  encryptionBlock: "cyz8/XQHosFcIVfWcRs0KL....",
  encryptionBlockFields: "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
  encryptionTarget: "MANUAL",
}
```

<!--
type: tab
-->

```javascript
encryptionData: {
  keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51",
  encryptionType: "RSA",
  encryptionBlock: "Q3FJIiQUOPb2IetIsay4fLoHxXmvH+....",
  encryptionBlockFields: "track2Data:36",
  encryptionTarget: "TRACK_2"
  deviceType: "INGENICO",
}
```

<!--
type: tab
-->

```javascript
encryptionData: {
  keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51",
  encryptionType: "RSA",
  encryptionBlock: "=h9PmiL1SSZC8QyBpj/....",
  encryptionBlockFields: "track1Data:45",
  encryptionTarget: "TRACK_1",
  deviceType: "INGENICO",
}
```

<!-- type: tab-end -->

---

## Step 5: Build Payment Source Object

Build the payment source object that will be sent within the payload.

<!--
type: tab
titles: PaymentCard, PaymentEMV, PaymentTrack
-->

```javascript
const payload = {
    source: {
        sourceType: "PaymentCard",
        encryptionData: {
            keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51",
            encryptionType: "RSA",
            encryptionBlock: encryptionBlock,
            encryptionBlockFields: encryptionBlockFields,
            encryptionTarget: "MANUAL",
        }
    }
};
```

<!--
type: tab
-->

```javascript
const payload = {
    source: {
        sourceType: "PaymentEMV",
        encryptionData: {
            keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51",
            encryptionType: "RSA",
            encryptionBlock: encryptionBlock,
            encryptionBlockFields: encryptionBlockFields,
            encryptionTarget: "TRACK_2",
            deviceType: "INGENICO",
        }
    }
};
```

<!--
type: tab
-->

```javascript
const payload = {
    source: {
        sourceType: "PaymentTrack",
        encryptionData: {
            keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51",
            encryptionType: "RSA",
            encryptionBlock: encryptionBlock,
            encryptionBlockFields: encryptionBlockFields,
            encryptionTarget: "TRACK_2",
            deviceType: "INGENICO",
        }
    }
};
```

<!-- type: tab-end -->

---

## Encryption Example

The following JavaScript example will create the encrypted source information for a _PaymentCard_.

```javascript
// Utils
const toArrayBuffer = (str) => {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0; i < str.length; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};
  
const toBase64Encode = (arrayBuffer) => window.btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
  
// RSA Algorithm
const asymmerticallyEncrypt = async (base64PubKey, sourceString) => {
  const keyBuf = toArrayBuffer(window.atob(base64PubKey));
  const pubKeyDer = await window.crypto.subtle.importKey("spki", keyBuf, { name: "RSA-OAEP", hash: "SHA-256", }, true, ["encrypt"]);
  const encryptedBlock = await window.crypto.subtle.encrypt({name: "RSA-OAEP",}, pubKeyDer, new TextEncoder().encode(sourceString));
  return toBase64Encode(encryptedBlock);
};
  
// Example usage of the library
(async () => {  
  const rsaAsymmerticPublicKey =
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3bOOfW6F6rMSmSy2/" +
    "DQboSnp5KtCNVa5ygbmecdnXf9pHTvd4S5OFMon8HX/f274cMZXISXh5e4swJ/IIelCszxMjOmH1UzbihgoMPen+9sh+Nc9qNJ0MJ+ZSTGiY4EvtUdiamYa" +
    "kKHYheSi+Wo2r+njEnsisGSybpoPqIhPLYnhyRw5IsmjKOJseibba1V9Z3R+9FktxHamYjCaOYTq58zPg4z2Txt9iuu9sOL1EXsRuNFvw6YadPHrBaDYIK/" +
    "PuMviix8s3lg0pgCi39pYh9E/nQF5R14Wj1uGMBiXxlGQlmGg5JBv7xfxJ0+9V7Q1lIaSbeX7+jwIqyIpTuyPdQIDAQAB";
  
    const cardData = {
        "cardData": "4005550000000019",
        "nameOnCard": "John Doe",
        "expirationMonth": "01",
        "expirationYear": "2034",
        "securityCode": "123"
    }
      
    const encryptionBlock = await asymmerticallyEncrypt(rsaAsymmerticPublicKey, Object.values(cardData).join(""));
    const encoder = new TextEncoder();
    const encryptionBlockFields = Object.keys(cardData).map(key => `card.${key}:${encoder.encode(cardData[key]).length}`).join(',');
    const payload = {
        source: {
            sourceType: "PaymentCard",
            encryptionData: {
                keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51",
                encryptionType: "RSA",
                encryptionBlock: encryptionBlock,
                encryptionBlockFields: encryptionBlockFields,
                encryptionTarget: "MANUAL",
            }
        }
    };
  
  console.log(JSON.stringify(payload, null, 4));
})();
```

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Encryption Data](?path=docs/Resources/Master-Data/Encryption-Data.md)
- [Multi-Use Public Key Management](?path=docs/Resources/Guides/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
