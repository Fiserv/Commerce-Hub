---
tags: [Online, Card Not Present, Secure Data Capture, Multi-Use Public Key]
---

# Multi-Use Public Key Management

The objective of a key management system is to achieve PCI DSS compliance for a banking institution. It involves implementing a crypto system that manages the secure creation, exchange, distribution, storage and use of cryptographic keys, which is typically known as the key life cycle for protecting customer's sensitive payment card data. The `asymmetricKeyDetails` and `symmetricKeyDetails` are returned in the response.


## Best Practices for Key Management

- The merchant should initiate the new key request 2 days prior to the expiry of the previous key. The merchant shall start using the new key once it is successfully exchanged.
  - If merchant does not initiate the new key exchange as per the best practices, Commerce Hub will send three notifications via webhook at 47, 44 and 41 hours before the key expires.
- Merchant should set the limit on the transaction amount for offline _(Store and Forward)_ transactions.
  - Any transaction that exceeds the set limit should be rejected by the merchant.
  - The merchant is liable for any approved transaction with a higher amount that is rejected during processing.

<!--
type: tab
titles: asymmetricKeyDetails
-->

The below table identifies the parameters for `asymmetricKeyDetails` object. The `asymmetricKeyDetails` object contains the public Key and its relevant details for asymmetric cryptography.

| Variables | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `keyId` | *string* | 64 | Unique identifier of the key pair |
| `encryptionType` | *string* | 32 | Encryption type of the key pair. Defaults to RSA. |
| `modulus` | *integer* |  | Modulus size of the key pair |
| `encodedPublicKey` | *string* |  | Hex encoded public key |
| `validFrom` | *string* |  | Date and time the key pair is valid from in YYYY-MM-DDThh:mm:ssZ format |
| `validTo` | *string* |  | Date and time the key pair is valid to in YYYY-MM-DDThh:mm:ssZ format |
| `status` | *string* | 10 | Status of the key pair. Valid values are ACTIVE, REVOKED, INACTIVE or LEGACY | 

<!-- type: tab-end -->

---

## Generate Key

Commerce Hub allows the merchant to provision a new encryption key to store for the payment data for any future offline requirements. This provides a valid Commerce Hub generated merchant public key for card encryption where a merchant will store and forward to Commerce Hub at a later time.

### Requirements

<!--
type: tab
titles: merchantDetails
-->

The below table identifies the required parameter for the generate request payload.

| Variables | Type| Maximum Length | Required | Description |
|---------|----------|----------------|-------- | --------|
| `merchantId` | *string* |  | &#10004; | A unique ID used to identify the Merchant. |

<!-- type: tab-end -->

---

### Endpoint

<!-- theme: success -->
>**POST** `/security/v1/keys/generate`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of payload request.

```json
{
  "merchantDetails": {
    "merchantId": "123456789012345"
  }
}
```

<!--
type: tab
-->

##### Example of (201: Created) response.

```json
{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "asymmetricKeyDetails": {
    "keyId": "accb12d8-684e-4261-9786-1b54f98d48ee",
    "encryptionType": "RSA",
    "modulus": 2048,
    "encodedPublicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuDjOPaWaW4VHWvn2dtzEmgJ32usf6F8AbzsyutP4j3EJEfq4qKg95wSHB3FRETcwksDkRRiRBiwnkWROxNwzuPf3MZNjqDY......",
    "validFrom": "2023-03-29T13:55:20.102105Z",
    "validTo": "2023-04-18T13:55:20.102105Z",
    "status": "ACTIVE"
  },
  "symmetricKeyDetails": {
    "encryptionType": "AES-GCM",
    "modulus": 256
  }
}
```

<!-- type: tab-end -->

---

---

## Revoke Key

Revokes an encryption key pair that was previously generated. 
  
### Requirements

<!--
type: tab
titles: URI Parameter, merchantDetails
-->

The below table identifies the required parameter for the URI.

| Variables | Type| Maximum Length | Required | Description |
|---------|----------|----------------|--------- | -------|
| `keyId` | *string* | 64 | &#10004; | Used to pass the keyId of the encryption key pair to be revoked |

<!--
type: tab
-->

The below table identifies the required parameter for the revoke request payload.

| Variables | Type| Maximum Length | Required | Description |
|---------|----------|----------------|-----|-------|
| `merchantId` | *string* | 1024 | &#10004; | A unique ID used to identify the Merchant. |


<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** ` /security/v1/keys/{keyId}/revoke`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of payload request.

```json
{
  "merchantDetails": {
    "merchantId": "123456789012345"
  }
}
```

<!--
type: tab
-->

##### Example of (201: Created) response.

```json
{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "asymmetricKeyDetails": {
    "keyId": "accb12d8-684e-4261-9786-1b54f98d48ee",
    "encryptionType": "RSA",
    "modulus": 2048,
    "encodedPublicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuDjOPaWaW4VHWvn2dtzEmgJ32usf6F8AbzsyutP4j3EJEfq4qKg95wSHB3FRETcwksDkRRiRBiwnkWROxNwzuPf3MZNjqDY......",
    "validFrom": "2023-03-29T13:55:20.102105Z",
    "validTo": "2023-04-18T13:55:20.102105Z",
    "status": "REVOKED"
  },
  "symmetricKeyDetails": {
    "encryptionType": "AES-GCM",
    "modulus": 256
  }
}
```

<!-- type: tab-end -->

---

## Multi-Use Public Key Expiry

Commerce Hub and a merchant can have multiple static public keys where the key identifiers in the transaction request determines which key is being used to encrypt the data. A transaction request received with an expired key is rejected and an expiry response will be sent. A merchant should follow key management best practices to prevent rejected transactions. 

### Key Expiry Example

Below is an example of multiple pblic keys that are generated during a transaction request and expires after a set time interval. 

| Public Key  | Generated/Activated | Expiry Date and Time |
| ------------ | ----------- | ------- |
| Key #1 | 1 Jan 00:00:00 AM |7 Jan 11:59:59 PM  | 
| Key #2 | 6 Jan 00:00:00 AM | 12 Jan 11:59:59 PM | 
| Key #3 | 11 Jan 08:00:01 AM | 18 Jan 08:00:00 PM | 

Below are some of the examples of offline transactions and the multi-use public keys that can be used at a given instance.

- The transaction request is submitted on Jan 2nd at 2:30 PM, the merchant can process with the first key generated.  
- The transaction request is submitted on Jan 6th at 8:30 AM, as per the best practices the merchant should use the second key generated. However, the merchant can use the first generated key.   
- The transaction request is submitted on Jan 11th at 11:45 PM, as per the best practices the merchant should use the third key generated. However, the merchant can still use the second generated key. If the merchants submits the first key, Commerce Hub will rejects the transaction.

---

## See Also
- [Multi Use Public Key Encryption](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md)
- [Multi Use Public Key Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Request.md)
- [Multi Use Public Key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md)

---
