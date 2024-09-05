---
tags: [Security, Credentials, Access Token, API Reference]
---

# Security Credentials

A security credentials request is used to obtain the credentials needed in an authentication request or submitting financial transactions.

- Returns an `accessToken` used in creating an [authentication header](?path=docs/Resources/API-Documents/Authentication-Header.md).
- Returns a `sessionId` used with [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) requests.

<!-- theme: danger -->
> The `sessionId` returned in the response is considered private data that should be stored on the merchant's backend server and never sent to the customer's browser.

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

<!-- theme: success -->

The below table identifies the parameters in the request.

| Variable | Type| Max Length | Description |
|---------|----------|----------------|---------|
| `domains` | *array* | N/A | A whitelist of domains that are applicable for this credentials request. This is used to prevent the risk of [clickjacking](?path=docs/Resources/FAQs-Glossary/Glossary.md#clickjacking) when integrating with the Secure Data Capture v1 iFrame solution. |

    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```


The below table identifies the fields in the `domains` array.

| Variable | Type | Max Length | Description |
|---------|----------|--------|--------|
| `url` | *string* | 2048 | URL associated with the HTTP domain |


<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

The below table identifies the required parameters in the `merchantDetails` object.

| Variables | Type| Max Length | Required | Description |
|---------|----------|----------------|-------- | --------|
| `merchantId` | *string* | 1024 | &#10004; | A unique ID used to identify the Merchant. |
| `terminalId` | *string* | 1024 | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. Required when using [merchant defined](?path=docs/Resources/Guides/BYOID.md) MID/TID. |
  "sessionId": "1a47b28f-b15d-45d2-9394-07f79ee5e954",
  "accessTokenIssuedTime": "2016-04-16T16:06:05Z",
  "accessTokenTimeToLive": 1800,
  "asymmetricEncryptionAlgorithm": "RSA",
  "accessTokenType": "JWT",
  "expiresAt": "2020-04-16T16:06:05Z"

The below table identifies the response elements. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/credentials).

| Variable | Type | Max Length | Description |
|---------|----------|--------|--------|
| `accessToken` | *string* | 2048 | Access token credential to be used in subsequent API calls. |
| `accessTokenType` | *string* | 50 | Identifies if the token is a BEARER or JWT *(JSON Web Token)* |
## Parameters

### Request Variables

The tables below contain the fields for a security credential request. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/credentials).

<!--
type: tab
titles: merchantDetails
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variables | Type| Maximum Length | Required | Description |
|---------|----------|----------------|-------- | --------|
| `merchantId` | *string* | 1024 | &#10004; | A unique ID used to identify the Merchant. |
| `terminalId` | *string* | 1024 | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. Required when using [merchant defined](?path=docs/Resources/Guides/BYOID.md) MID/TID. |

<!-- type: tab-end -->

---

### Response Variables

The below table identifies the response elements. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/credentials).

| Variable | Type | Maximum Length | Description |
|---------|----------|--------|--------|
| `accessToken` | *string* | 2048 | Access token credential to be used in subsequent API calls. |
| `accessTokenType` | *string* | 50 | Identifies if the token is a BEARER or JWT *(JSON Web Token)* |
| `accessTokenIssuedTime` | *string* | 64 | Token issue time in YYYY-MM-DDThh:mm:ssZ format |
| `accessTokenTimeToLive` | *string* | 7 | Access token expiry |
| `keyId` | *string* | 64 | Unique identifier of the public encryption key |
| `keyLength` | *string* | 10 | Length of the Base64 encoded public encryption key |
| `publicKey` | *string* | 4000 | Base64 encoded public key |
| `asymmetricEncryptionAlgorithm` | *string* | 32 | Asymmetric encryption algorithm associated with the public key. RSA/ECB/PKCS1 with padding. |
| `expiresAt` | *string* | 64 | Date and time when the session expires |
| `sessionId` | *string* | 64  | A `sessionId` is a nonce token obtained from a security credentials request. It is used as the _PaymentSession_ in [Checkout integrations](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) to submit a transaction to our application. The `sessionId` expires once it goes out to the processor or after 30 minutes of it's generation, whichever comes first. |
| `domains` | *array* | N/A  | A whitelist of domains that are applicable for this credentials request |

<!---
| `symmetricEncryptionAlgorithm` | *string* |  | AES 256/PKCS with padding |
-->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/credentials)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
