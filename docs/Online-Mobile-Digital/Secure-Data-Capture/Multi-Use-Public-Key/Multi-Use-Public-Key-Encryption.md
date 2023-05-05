---
tags: [Online, Card Not Present, Secure Data Capture, Multi-Use Public Key]
---

# Multi-Use Public Key Encryption

The merchant uses multi-use public key for the asymmeteric PaymentCard encryption of the card data where the merchant can store and send the data to Commerce Hub at a later time.   

## Step 1: Generate Unencrypted encryptionBlock


The `encryptionBlock` field is passed through the `PaymentCard` request to encrypt the data. The `encryptionBlock` field is a concatenated string of the `card` object fields which can include: `cardData`, `nameOnCard`, `expirationMonth`, `expirationYear`, and `securityCode`.

```javascript
const cardData = {
    "cardData": "4141414141414141",
    "nameOnCard": "Joe Bloggs",
    "expirationMonth": "01",
    "expirationYear": "2024",
    "securityCode": "123"
}
  
const encryptionBlock =  Object.values(cardData).join(""));

```

<!-- theme: example -->
> encryptionBlock = 4111111111111111Joe Bloggs123122034

--- 

### Step 2:  Generate encryptionBlockFields

The `encryptionBlockFields` when generated contains a string of card data fields and its corresponding byte lengths. The string must match the order in which the `encryptionBlock` was generated in step 1. 


```javascript
const cardData = {
    "cardData": "4141414141414141",
    "nameOnCard": "Joe Bloggs",
    "expirationMonth": "01",
    "expirationYear": "2024",
    "securityCode": "123"
}
  
const encryptionBlockFields = Object.keys(cardData).map(key => `card.${key}:${encoder.encode(cardData[key]).length}`).join(',');

```

<!-- theme: example -->
> encryptionBlockFields = card.cardData:16,card.nameOnCard:10,card.securityCode:3,card.expirationMonth:2,card.expirationYear:4

---

### Step 3: Perfrom RSA Encryption

A [generate key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md#generate-key) request is required  to receive a base64 encoded encryption key. This key is used to encrypt the `encryptionBlock` that was created in step 1.


```javascript

const asymmerticallyEncrypt = async (base64PubKey, sourceString) => {  const keyBuf = toArrayBuffer(window.atob(base64PubKey));
  const pubKeyDer = await window.crypto.subtle.importKey("spki", keyBuf, { name: "RSA-OAEP", hash: "SHA-256", }, true, ["encrypt"]);
  const encryptedBlock = await window.crypto.subtle.encrypt({name: "RSA-OAEP",}, pubKeyDer, new TextEncoder().encode(sourceString));
  return toBase64Encode(encryptedBlock);
};

const toBase64Encode = (arrayBuffer) => window.btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

```

--- 


### Step 4: Form encryptionData

Form the `encryptionData` object using the encrypted `encryptionBlock` and `encryptionBlockFields` from steps 2 and 3.

The below table identifies the parameters in the `encryptionData` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -----------|
| `encryptionType` | *string* | 256 | Encryption type is *RSA* when using MUPK. |
| `encryptionTarget` | *string* | 256 | Target is *MANUAL* when a customer card details are manually entered into a terminal or device, or when a customer manually enters their card details online or in an app. |
| `encryptionBlock` | *string* | 2000 | This field contains the card details in encrypted form. |
| `keyId` | *string* | 40 | Provided encryption key required for decryption of track data that is encrypted. |
| `encryptionBlockFields` | *string* | 256 | ncryption block field descriptors to facilitate decryption when using public keys. Each field should be recorded in the form of the object.field_name:byte_count, for example: card.expirationMonth:2. |


```javascript

encryptionData: {
  keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51",
  encryptionType: "RSA",
  encryptionBlock: "=s3ZmiL1SSZC8QyBpj/....",
  encryptionBlockFields: "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
  encryptionTarget: "MANUAL",
}

```

--- 

### Step 5: Build Payment Source Object

Build the payment source object that will be sent within the payload.

```javascript

const payload = {       
 source: {
            sourceType: "PaymentCard",
            encryptionData: {
                keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51",
                encryptionType: "RSA",
                encryptionBlock: "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
                encryptionBlockFields: "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",,
                encryptionTarget: "MANUAL",
            }
         }
     };
     
```

---

## Encryption Example

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
        "cardData": "4141414141414141",
        "nameOnCard": "Joe Bloggs",
        "expirationMonth": "01",
        "expirationYear": "2024",
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

- [Multi-Use Public Key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md)
- [Multi-Use Public Key Management](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md)
- [Multi-Use Public Key Charges Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Request.md)
- [Secure Data Capture API Only](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/API-Only.md)

---
