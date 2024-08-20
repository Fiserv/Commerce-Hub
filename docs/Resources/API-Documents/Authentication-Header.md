---
tags: [Card Not Present, Card Present, HMAC, Header, Authentication, API Reference]
---

# Generate an HMAC authentication

To ensure data integrity, prevent replay attacks, and eliminate stale requests, Authentication is required as part of the [header](?path=docs/Resources/API-Documents/Use-Our-APIs.md).

## Details

- **Signature Algorithm:** SHA256 HMAC
- **Signature Encoding:** Base64
- **Signed With:** API Secret Key

The message data for the signature is the following items concatenated:

| Header | Description |
| ----- | ----- |
| `Auth-Token-Type` | HMAC used to ensure the request has not been tampered with during transmission |
| `Api-Key` | [API Key](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md) associating the requests with the appropriate account and [environment](?path=docs/Resources/API-Documents/Use-Our-APIs.md) in the Developer Portal |
| `Timestamp` | Epoch timestamp in milliseconds in the request from a client system
| `Client-Request-Id` | A client-generated unique ID for request tracking and signature creation, unique per request. This is also used for idempotency control. Recommended 128-bit UUIDv4 format. |


`Api-Key`, `Client-Request-Id`, `Timestamp`, `Request-Body`.

<!-- theme: info -->
> The `Client-Request-Id` is a client generated number that is unique for each request. It is used as nonce and validated against all Client-Request-Ids received by Commerce Hub within a predetermined time frame *(five minutes is the default)* to prevent replay attacks. Commerce Hub uses the timestamp of the request to validate against stale requests. Any request older than the specified duration is rejected.

---

## Code Example

Generate the authentication required for use with our APIs.

<!-- theme: example -->
> HMAC Authorization Example: OWRiMWNlZjRmMTEyY2M5NmMzNDFkMjhjZDU0NWIyZmYzM2Q2YWMyNDE5Nzg5YmVkYzEyZTJjNmUwNDA5OWMyMQ==

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

### Sample Header

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

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Idempotency](?path=docs/Resources/Guides/Idempotency.md)
- [Message Digest](?path=docs/Resources/API-Documents/Message-Digest.md)
- [Postman Testing](?path=docs/Resources/Guides/Testing/Postman-Testing.md)
- [Use Commerce Hub APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md)

---
