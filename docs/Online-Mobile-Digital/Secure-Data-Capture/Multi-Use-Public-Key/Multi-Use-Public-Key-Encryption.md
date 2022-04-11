
# Encryption of Data

## Overview


## Steps of Encryption

### Step 1: Generate encryption target

Comma separated string with each index indicating the field name and byte length of the data.

```Javascript
card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3

### Step 2: Generate unencrypted encryption block

### Step 3: Perfrom RSA encryption on encryption block

### Step 4: Apply Base64 encoding on encrypted encryption block

### Step 5: Form encryptionData which will contain encrypted PaymentCard details
