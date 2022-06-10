
# Multi-Use Public Key Encryption

The merchant uses multi-use public key for the asymmeteric PaymentCard encryption of the card data where the merchant can store and send the data to Commerce Hub at a later time.   

## Step 1: Generate Unencrypted encryptionBlock

The `encryptionBlock` field is passed through the `PaymentCard` request to encrypt the data. The `encryptionBlock` field is a concatenated string of the card details such as card number, name, cvv, expiry month, and year.

```Javascript
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
> encryptionBlock = 4111111111111111JoeBloggs123122034

--- 

### Step 2:  Generate encryptionBlockFields

The encrytpion block field is generated that contains a string with the card data fields and its corresponding byte lengths. The string must match the order in which the encryptionBlock was generated in step 1. 

The card data fields are:

- card.cardData
- card.nameOnCard
- card.expirationMonth
- card.expirationYear
- card.securityCode

So if the encryptionBlock generated from step 1 is:

unencrypted encryptionBlock - 4111111111111111Joe Bloggs123122034

Then the encryptionBlockFields string should be:

encryptionBlockFields - card.cardData:16,card.nameOnCard:10,card.securityCode:3,card.expirationMonth:2,card.expirationYear:4

Or, if the encryptionBlock generated from step 1 is:  

unencrypted encryptionBlock - Joe Bloggs1231220344111111111111111

Then the encryptionBlockFields string should be:

encryptionBlockFields - card.nameOnCard:10,card.securityCode:3,card.expirationMonth:2,card.expirationYear:4,card.cardData:16


```Javascript
const cardData = {
    "cardData": "4141414141414141",
    "nameOnCard": "Joe Bloggs",
    "expirationMonth": "01",
    "expirationYear": "2024",
    "securityCode": "123"
}
  
const encryptionBlockFields = Object.keys(cardData).map(key => `card.${key}:${encoder.encode(cardData[key]).length}`).join(',');

```

### Step 3: Perfrom RSA encryption on encryption block

The merchant will have to use the generate key api to receive a base64 encoded encryption key that they will store themselves. This key is then used to encrypt the encryption block that was created in step 1

Using public key previously retrieved from Commercehub.

```javascript

const asymmerticallyEncrypt = async (base64PubKey, sourceString) => {  const keyBuf = toArrayBuffer(window.atob(base64PubKey));
  const pubKeyDer = await window.crypto.subtle.importKey("spki", keyBuf, { name: "RSA-OAEP", hash: "SHA-256", }, true, ["encrypt"]);
  const encryptedBlock = await window.crypto.subtle.encrypt({name: "RSA-OAEP",}, pubKeyDer, new TextEncoder().encode(sourceString));
  return toBase64Encode(encryptedBlock);
};


### Step 4: Apply Base64 encoding on encrypted encryption block

Base64 encode encrypted data.

```javascript

const toBase64Encode = (arrayBuffer) => window.btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

```

### Step 5: Form encryptionData which will contain encrypted PaymentCard details

Form the encryptionData object which will contain the encrypted PaymentCard details.


```Javascript

encryptionData: {
  keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51", /** obtained from generate multi-use encryption key API */
  encryptionType: "RSA",
  encryptionBlock: encryptionBlock,
  encryptionBlockFields: encryptionBlockFields,
  encryptionTarget: "MANUAL",
}

```

### Step 6: Build payment source object

Build the payment source object that will be sent within the payload.

```javascript

const payload = {       
 source: {
            sourceType: "PaymentCard",
            encryptionData: {
                keyId: "79cd0553-9db5-4676-989b-f29edfbb6a51", /** obtained from generate multi-use encryption key API */
                encryptionType: "RSA",
                encryptionBlock: encryptionBlock,
                encryptionBlockFields: encryptionBlockFields,
                encryptionTarget: "MANUAL",
            }
         }
     };
     
```
---

## See Also
- [Multi-Use Public Key Management](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md)
- [Multi-Use Public Key Charges Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Request.md)
- [Multi-Use Public Key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md)


---

