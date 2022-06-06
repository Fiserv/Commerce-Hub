
# Encryption of Data

## Overview

The merchant uses multi-use public key for the asymmeteric PaymentCard encryption of the card data where the merchant can store and send the data to Commerce Hub at a later time.    

## Steps of Encryption

### Step 1: Generate unencrypted encryption block

The encryptionBlock field is passed through the PaymentCard request to encrypt the data. The encryptionBlock field is a concatenated string of the card details such as card number, name, cvv, expiry month, and year.

For example:

- card number - 4111111111111111
- card name - Joe Bloggs
- cvv - 123
- expiry month - 12
- expiry year - 2034
And the cancatenated encryptionBlock = 4111111111111111JoeBloggs123122034

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


### Step 2:  Generate encryption block fields

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

Using public key previously retrieved from Commercehub.

```javascript

const importPublicKey = async (base64Der) => {
  const pubKeyDer = window.atob(base64Der);
  const keyBuf = str2ab(pubKeyDer);
 
  const key = await window.crypto.subtle.importKey("spki", keyBuf, {
    name: "RSA-OAEP",
    hash: "SHA-256"
  }, true, ["encrypt"]);
  return key;
}
 
const rsaEncrypt = async (pubKey, data) => {
  return await window.crypto.subtle.encrypt({
      name: 'RSA-OAEP'
    },
    pubKey,
    new TextEncoder().encode(data))
}

```
```java

public static String encodeBase64(final byte[] bytes) {
    return Base64.getEncoder().encodeToString(bytes);
}
 
public static byte[] decodeBase64(final String base64Encoded) {
    return Base64.getDecoder().decode(base64Encoded);
}
 
public static class Rsa {
    public static byte[] encrypt(final String plainText, final byte[] publicKeyBytes) throws Exception {
        final KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        final EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(publicKeyBytes);
        final PublicKey publicKey = keyFactory.generatePublic(publicKeySpec);
 
        final Cipher cipher = Cipher.getInstance("RSA/ECB/OAEPPadding");
        final OAEPParameterSpec oaepParameterSpec = new OAEPParameterSpec("SHA-256", "MGF1", new MGF1ParameterSpec("SHA-256"), PSource.PSpecified.DEFAULT);
        cipher.init(Cipher.ENCRYPT_MODE, publicKey, oaepParameterSpec);
        return cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));
    }
}
```

### Step 4: Apply Base64 encoding on encrypted encryption block

Base64 encode encrypted data.

```javascript

```
```java

```

### Step 5: Form encryptionData which will contain encrypted PaymentCard details

```Javascript

"encryptionData": { "keyId": "12ce48b1-b7a7-45cb-b14e-6ff961afe0d8", "encryptionType": "RSA", "encryptionBlock": "gYRo6dFgXFIBOsflWrjhoKtOuMgtDgB2BreC...", "encryptionTarget": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3" }
```

### Step 6: Build payment source object

```javascript
{"sourceType": "PaymentCard", "encryptionData": {...}}
```
---

## See Also
- [Multi-Use Public Key Management](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Management.md)
- [Multi-Use Public Key Charges Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Request.md)
- [Multi-Use Public Key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md)


---

