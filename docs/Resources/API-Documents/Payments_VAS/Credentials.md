# Security Credentials

A credentials request is used for authorizing or submitting subsequent financial transactions. 

- Returns an `accessToken` used in creating an [authentication header](?path=docs/Resources/API-Documents/Authentication-Header.md).
- Returns a `sessionId` used in [iFrame JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) and [Payment JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md) requests.

<!--
type: tab
titles: Request Variables, Response Variables
-->

The below table identifies the required parameters in the request.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|------|
| `publicKeyRequired` | *boolean* | N/A | &#10004; | If the signedCert is expired or invalid then merchant would send a request |
| `accessTokenRequired` | *boolean* | N/A | &#10004; | If the access token is expired then merchant would request for a new token |
| `accessTokenTimeToLive` | *string* | 7 | &#10004; | Time to live (expiration time) in milliseconds, max 30 minutes (1800000 ms) |
| `responseRedirectURL` | *string* | 4000 | &#10004; | Response URL redirect |

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
| `asymmetricEncryptionAlgorithm` | *string* |  | RSA/ECB/PKCS1Padding. |

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
  "publicKeyRequired": true,
  "accessTokenRequired": true,
  "accessTokenTimeToLive": "889",
  "responseRedirectURL": "https://www.somedomain.com"
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
  "publicKey": "TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFtbnBnQUpTellsWVNzNjZwUWc2S3hBdkN3NXk3dXNWRmlLODdRU2FSZzNOYzdodzlVVE5DWXh3L3UxME5MblA1RW1OblVWS2FKcWE4SHdnS1RibmxWNTRsZnhBMkV5OEt6dEtsYVBYMlh2QWw3bXVNVFNsMjZZdzd2ZU1pUUVPSExIL2RQaGQxUlo3UUwwcE1KeVIrbTYzMHhwVDRoakliZkJJV0VTNXRRa3lnSk5LQ2RXT0tQY2VkU2hLeUV5YzYraW1DNTk5VjdETUVrYXVqL2haWVhYOTlyQXJIV3NkYkRmZVpaWlNRcjVVK0lnWmEvdFJiTlA2MUFrKy9KVnFDby8wZ3BzNVJUOU9XV1hYUzYwYlVEby9nSCtweVcrRkpKdjBxYWFPT0IrWjFNN1dCQlBNeEdXZGpJT2VscjR6eGRUdXhHWlpxWG1ad1hTelQyaVZ1b3dJREFRQUI=",
  "keyLength": "12345",
  "accessToken": "vsmsrKcNFWzq79Yd8aaxHetHBdxm",
  "sessionId": "b28ba2ca-6368-4d72-b5f0-c185b4d0de4c",
  "accessTokenIssuedTime": "2016-04-16T16:06:05Z",
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
