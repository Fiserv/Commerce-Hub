# Security Credentials

A credentials request is used for authorizing or submitting subsequent financial transactions. 

- Returns an `accessToken` used in creating an [authentication header](?path=docs/Resources/API-Documents/Authentication-Header.md).
- Returns a `sessionId` used in [iFrame JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) and [Payment JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md) requests.

## Minimum Requirements

<!--
type: tab
title: SecurityCredentialsRequest
-->

The below table identifies the required parameters in the `SecurityCredentialsRequest` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|------|
| `publicKeyRequired` | *boolean* |  | &#10004; | If the signedCert is expired or invalid then merchant would send a request |
| `accessTokenRequired` | *boolean* |  | &#10004; | If the access token is expired then merchant would request for a new token |
| `accessTokenTimeToLive` | *string* | N/A| &#10004; | Time to live (expiration time) in milliseconds. 1800000 ms, max 30 minutes |
| `responseRedirectURL` | *string* | 4000 | &#10004; | Response URL redirect |



<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/security/credentials`
---

## Payload Example

<!--
type: tab
title: Request
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
title: Response
-->

The below table identifies the response parameters in the `SecurityCredentialsResponse` object.

| Variable | Type | Maximum Length | Description |
|---------|----------|--------|--------|
| `publicKey` | *string* | | Base64 encoded public key |
| `accessToken` | *string* |  | Access token created and sent back |
| `sessionId` | *string* |  | Used as an identifier for a session after a successful call to security/credentials endpoint or after a successful authentication request" |
| `accessTokenIssuedTime` | *string* |  | Token issue time in YYYY-MM-DDThh:mm:ssZ format |
| `accessTokenTimeToLive` | *string* | | Access token expiry |
| `symmetricEncryptionAlgorithm` | *string* |  | AES 256/PKCS with padding |
| `asymmetricEncryptionAlgorithm` | *string* |  | RSA/ECB/PKCS1Padding. |

##### Example of a credentials (201: Created) response.



<!-- theme: info -->
> See [HTTP Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.

```json

  const formConfig = {
       "merchantId": '100004000002050', // merchant receives this during on-boarding process
       "publicKey": 'TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUFtbnBnQUpTellsWVNzNjZwUWc2S3hBdkN3NXk3dXNWRmlLODdRU2FSZzNOYzdodzlVVE5DWXh3L3UxME5MblA1RW1OblVWS2FKcWE4SHdnS1RibmxWNTRsZnhBMkV5OEt6dEtsYVBYMlh2QWw3bXVNVFNsMjZZdzd2ZU1pUUVPSExIL2RQaGQxUlo3UUwwcE1KeVIrbTYzMHhwVDRoakliZkJJV0VTNXRRa3lnSk5LQ2RXT0tQY2VkU2hLeUV5YzYraW1DNTk5VjdETUVrYXVqL2haWVhYOTlyQXJIV3NkYkRmZVpaWlNRcjVVK0lnWmEvdFJiTlA2MUFrKy9KVnFDby8wZ3BzNVJUOU9XV1hYUzYwYlVEby9nSCtweVcrRkpKdjBxYWFPT0IrWjFNN1dCQlBNeEdXZGpJT2VscjR6eGRUdXhHWlpxWG1ad1hTelQyaVZ1b3dJREFRQUI=',
       "symmetricEncryptionAlgorithm": 'AES_GCM'
 };

```

<!-- type: tab-end -->

---

## See Also

- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)

