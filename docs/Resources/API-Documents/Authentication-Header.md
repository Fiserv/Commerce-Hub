---
tags: [Card Not Present, Card Present, HMAC, Header, Authentication, API Reference]
---

# Generate an HMAC authentication

To ensure data integrity, prevent replay attacks, and eliminate stale requests, authentication is required as part of the [header](?path=docs/Resources/API-Documents/Use-Our-APIs.md).

---

## Authentication header details

- **Signature algorithm:** SHA256 HMAC
- **Signature encoding:** Base64
- **Signed with:** API secret key

The message data for the signature is the following items concatenated:

| Header | Description |
| ----- | ----- |
| `Auth-Token-Type` | Indicates Authorization type is *HMAC* |
| `Api-Key` | [API Key](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md) associating the requests with the appropriate account and [environment](?path=docs/Resources/API-Documents/Use-Our-APIs.md) in the Developer Portal |
| `Timestamp` | Epoch timestamp in milliseconds in the request from a client system |
| `Client-Request-Id` | A client-generated ID for request tracking and signature creation, unique per request. This is also used for [idempotency control](?path=docs/Resources/Guides/Idempotency.md). Recommended 128-bit UUIDv4 format. |
| `Authorization` | Computed message signature value used to ensure the request has not been tampered with during transmission |

---

## JavaScript code example

The below JavaScript can be used to generate the authentication header required for use with our APIs.

<!-- theme: example -->
> HMAC authorization example: OWRiMWNlZjRmMTEyY2M5NmMzNDFkMjhjZDU0NWIyZmYzM2Q2YWMyNDE5Nzg5YmVkYzEyZTJjNmUwNDA5OWMyMQ==

```javascript
function guid() { // create clientRequestId
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

var apiKey = "API_KEY";
var secret = "SECRET";
var clientRequestId = guid();
var timeStamp = new Date().getTime();
var requestBody = request.data;
var rawSignature = apiKey + clientRequestId + timeStamp + requestBody;
var computedHash = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secret.toString());
computedHash.update(rawSignature);
computedHash = computedHash.finalize();
var computedHmac = CryptoJS.enc.Base64.stringify(computedHash);
```

---

### Authorization header example

```json
{
  "Content-Type": "application/json",
  "Client-Request-Id": "CLIENT_REQUEST_ID",
  "Api-Key": "API_KEY",
  "Timestamp": "TIMESTAMP",
  "Auth-Token-Type": "HMAC",
  "Authorization": "COMPUTED_HMAC"
}
```

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Getting started with Commerce Hub APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Idempotency](?path=docs/Resources/Guides/Idempotency.md)
- [Message Digest](?path=docs/Resources/API-Documents/Message-Digest.md)
- [Postman Testing](?path=docs/Resources/Guides/Testing/Postman-Testing.md)

---
