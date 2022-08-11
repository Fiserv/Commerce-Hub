# Security Credentials

A credentials request is used for authorizing or submitting subsequent financial transactions. 

- Returns an `accessToken` used in creating an [authentication header](?path=docs/Resources/API-Documents/Authentication-Header.md).
- Returns a `sessionId` used in [iFrame JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) and [Payment JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md) requests.

<!--
type: tab
titles: Request Variables, Response Variables
-->

The below table identifies the parameters in the request.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `publicKeyRequired` | *boolean* | N/A | Used ro request a public key. If the signedCert is expired or invalid then merchant would send a request, default is true (false currently not supported) |
| `accessTokenRequired` | *boolean* | N/A | Used to request an access token. If the access token is expired then merchant would request for a new token, default is true (false currently not supported) |
| `accessTokenTimeToLive` | *string* | 7 | Time to live (expiration time) in milliseconds, default is the max time of 30 minutes (1800000 ms) |
| `responseRedirectURL` | *string* | 4000 | Response URL redirect |

<!--
type: tab
-->

The below table identifies the response elements.

| Variable | Type | Maximum Length | Description |
|---------|----------|--------|--------|
| `publicKey` | *string* | | Base64 encoded public key |
| `accessToken` | *string* |  | Access token created and sent back |
| `sessionId` | *string* |  | Used as an identifier for a session after a successful call to security/credentials endpoint or after a successful authentication request" |
| `accessTokenIssuedTime` | *string* | 64 | Token issue time in YYYY-MM-DDThh:mm:ssZ format |
| `accessTokenTimeToLive` | *string* | 7 | Access token expiry |
| `symmetricEncryptionAlgorithm` | *string* |  | AES 256/PKCS with padding |
| `asymmetricEncryptionAlgorithm` | *string* |  | RSA/ECB/PKCS1 with padding. |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |


<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/security/credentials`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a credentials payload request.

```json

{
  "domains": ["https://checkout.mystore.com", "https://store.mystore.com", "https://*.mystore.com"],
  "publicKeyRequired": false,
  "merchantDetails": {
    "merchantId": "100004000000260"
  }
}

```

<!--
type: tab
-->

##### Example of a credentials (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{
  "gatewayResponse": {
  "transactionProcessingDetails": {
    "transactionTimestamp": "2022-08-11T09:20:33.229618Z",
    "apiTraceId": "cea83af5b1ae4c2fb20e8b6c75600a8d",
    "clientRequestId": "36fcd38d2064bcff1222b4e3d2e78fc2",
    "transactionId": "cea83af5b1ae4c2fb20e8b6c75600a8d"
    }
  },
  "keyId": "7250e555-d238-407e-ace1-68cb1930a2d2",
  "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7srHsjawnbAwoN/lGbug53Yntw7wFR8C0yizZK0LMmmEH+wBB945cA61M0ouYt8JeULGpc04/IuPDvM5NXb/gFUg1EfhRxiS4zqS0aKQYmHtqXAZJrC2oZfMRdsc1qErYT6cQSk8iUplGau+d0IScrLP07HomRbTgCLLVkfoVYE3KnZUy8Neko9pn0KmYplhW/thTrq/fISMofBU7DZ1zPFiP5bojNgq2PHO9WmtnLYWv3cMwaDJsG+p9p7XgEqTLFTsy5GU9/R4THPpYczGRzYrPLFjVdISOOzOa1z1VnzrRjSg6rz85drXxcZ1z5udhzt3+pXwvBZmB1llCUU/FQIDAQAB",
  "keyLength": "392",
  "accessToken": "Pqha9WGVanUm1HZMWPAXjY4dolX3",
  "sessionId": "6d8b016a-ea03-4ff2-baf9-3d2f68cb551f",
  "accessTokenIssuedTime": "1660209611535",
  "accessTokenTimeToLive": "1799",
  "symmetricEncryptionAlgorithm": "AES-GCM",
  "asymmetricEncryptionAlgorithm": "RSA-2048"
} 
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/credentials)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
