
# Multi-Use Public Key Management

The objective of a key management system is to achieve PCI DSS compliance for a banking institution. It involves implementing a crypto system that manages the secure creation, exchange, distribution, storage and use of cryptographic keys, which is typically known as the key life cycle for protecting customer's sensitive payment card data. The `asymmetricKeyDetails` and `symmetricKeyDetails` are returned in the response.


## Best Practices for Key Management

- The merchant should initiate the new key request 2 days prior to the expiry of the previous key. The merchant shall start using the new key once it is successfully exchanged.
  - If merchant does not initiate the new key exchange as per the best practices, Commerce Hub will send three notifications via webhook at 47, 44 and 41 hours before the key expires.
- Merchant should set the limit on the transaction amount for offline (Store and Forward) transactions.
  - Any transaction that exceeds the set limit should be rejected by the merchant.
  - The merchant is liable for any approved transaction with a higher amount that is rejected during processing.

<!--
type: tab
titles: asymmetricKeyDetails, symmetricKeyDetails
-->

The below table identifies the parameters for `asymmetricKeyDetails` object. The `asymmetricKeyDetails` object contains the public Key and its relevant details for asymmetric cryptography.

| Variables | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `keyId` | *string* | 64 | Unique identifier of the key pair |
| `encryptionType` | *string* | 32 | Encryption type of the key pair. Defaults to RSA. |
| `modulus` | *integer* |  | Modulus size of the key pair |
| `encodedPublicKey` | *string* |  | Hex encoded public key |
| `validFrom` | *datetime* |  | Date and time the key pair is valid from in YYYY-MM-DDThh:mm:ssZ format |
| `validTo` | *datetime* |  | Date and time the key pair is valid to in YYYY-MM-DDThh:mm:ssZ format |
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
        "merchantId": "100004000000175"
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
            "transactionTimestamp": "2022-03-09T12:15:36.864999Z",
            "apiTraceId": "7285fd4f2496418992e5b12fbb7f68e4",
            "clientRequestId": "46e4aee3c4f41a1b7ac95a5c8a313c6d",
            "transactionId": "7285fd4f2496418992e5b12fbb7f68e4"
        }
    },
    "asymmetricKeyDetails": {
        "keyId": "e294a246-078b-4ec0-82d6-5ab7fccd6491",
        "encryptionType": "RSA",
        "modulus": 2048,
        "encodedPublicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtb18DQ0vV/1bz7q2kew+uckYIEON++ItNPcEaDj/vwBITAQTJtpZNY1EWQApZqx/b2aJl2gx4Ucv8pSbQWixbshy5eKLf0PblfeJmHwXuFZHXdwjCL243sKqx1yxifOymnujyp9l2GHls9F7OCAj6MGP8EjKc4nYmAlf9BMR6L22gxPG9Y+VoJBb0HhWwtSNYpn4pfv+wZOH+wlENusCcqOL3AbQbRASpaKgg3CzzTWfYJtYMf/nslnzjsvye1/Jx61VyYARn8yI0pj7U8K3W3R2A/zut9fYE2lSIaJEvcKW/PzAAyd+tqvjFqNTP7fUX46JABQAMfU6dETSQG2guwIDAQAB",
        "validFrom": "2022-03-09T12:15:39.576795Z",
        "validTo": "2022-06-07T12:15:39.576795Z",
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
        "merchantId": "100004000000175"
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
            "transactionTimestamp": "2022-03-09T12:15:36.864999Z",
            "apiTraceId": "7285fd4f2496418992e5b12fbb7f68e4",
            "clientRequestId": "46e4aee3c4f41a1b7ac95a5c8a313c6d",
            "transactionId": "7285fd4f2496418992e5b12fbb7f68e4"
        }
    },
    "asymmetricKeyDetails": {
        "keyId": "e294a246-078b-4ec0-82d6-5ab7fccd6491",
        "encryptionType": "RSA",
        "modulus": 2048,
        "encodedPublicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtb18DQ0vV/1bz7q2kew+uckYIEON++ItNPcEaDj/vwBITAQTJtpZNY1EWQApZqx/b2aJl2gx4Ucv8pSbQWixbshy5eKLf0PblfeJmHwXuFZHXdwjCL243sKqx1yxifOymnujyp9l2GHls9F7OCAj6MGP8EjKc4nYmAlf9BMR6L22gxPG9Y+VoJBb0HhWwtSNYpn4pfv+wZOH+wlENusCcqOL3AbQbRASpaKgg3CzzTWfYJtYMf/nslnzjsvye1/Jx61VyYARn8yI0pj7U8K3W3R2A/zut9fYE2lSIaJEvcKW/PzAAyd+tqvjFqNTP7fUX46JABQAMfU6dETSQG2guwIDAQAB",
        "validFrom": "2022-03-09T12:15:39.576795Z",
        "validTo": "2022-06-07T12:15:39.576795Z",
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


## Best practice for Multi Use Public key Expiry

- The merchant administrator have the authority to set the number of days of the validity of the statis multi use public key.
- Commerce Hub needs to adhere to the Fiserv standards for key validity.
- Commerce Hub and a merchant can have multiple static public keys where the key identifier in the transaction request determines which key is being used to encrypt the data.
- A transaction request received with an expired key is rejected and an expiry response is being sent.  

### Key Expiry Example

|                | Generated | Activated | Expiry Date and Time |
| ------------ | --------- | ----------- | ------- |
| Key #1 Expired |  |  |  |
| Key #2 Expired |  |  |  |
| Key #3 Expired |  |  |  |


|  |  |  |  |

## See Also
- [Multi Use Public Key Encryption](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md)
- [Multi Use Public Key Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Request.md)
- [Multi Use Public Key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md)
- [iFrame JS Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md)
- [Payment JS Integration](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md)

---
