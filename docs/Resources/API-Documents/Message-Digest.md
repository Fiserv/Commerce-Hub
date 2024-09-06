---
tags: [Card Not Present, Card Present, Message Digest, Authentication. API Reference]
---

# Generate Message Digest

To ensure data integrity, prevent replay attacks, and eliminate stale requests, Authentication is required as part of the header when integrating with Commerce Hub's [API Only card capture service](?path=docs/Online-Mobile-Digital/Checkout/API/API-Only.md) or Hosted Payment Pages.

## Details

## Message digest details

- **Signature algorithm:** SHA256 HMAC
- **Signature encoding:** Base64
- **Signed with:** Access token

The message data for the message digest is the following items concatenated:

| Header | Description |
| ----- | ----- |
| `Auth-Token-Type` | Indicates Authorization type is *AccessToken* |
| `Api-Key` | [API Key](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md) associating the requests with the appropriate account and [environment](?path=docs/Resources/API-Documents/Use-Our-APIs.md) in the Developer Portal |
| `Timestamp` | Epoch timestamp in milliseconds in the request from a client system |
| `Client-Request-Id` | A client-generated ID for request tracking and signature creation, unique per request. This is also used for [idempotency control](?path=docs/Resources/Guides/Idempotency.md). Recommended 128-bit UUIDv4 format. |
| `Authorization` | Computed message signature value used to ensure the request has not been tampered with during transmission. The required bearer *accessToken* is obtained from a [Security Credentials API request](?path=docs/Resources/API-Documents/Security/Credentials.md). |

---

## JavaScript code

The below JavaScript can be used to generate the message digest required for use with our APIs.

<!-- theme: example -->
> Encrypted message digest example: 2e5a47d16aaafd6a13303d4e211bbce1a771d9cfa412ac45deb38a558037fd38

```javascript
function guid() { // create clientRequestId
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

const clientRequestId = guid();
const timestamp = new Date().getTime();
const apiKey = "API_KEY";
const payload = JSON.parse(request.body.toString());
const rawSignature = apiKey + clientRequestId + timestamp + JSON.stringify(payload);
const messageDigest = CryptoJS.SHA256(rawSignature);
```

---

## Sample message digest

```json
{
  "Content-Type": "application/json",
  "Client-Request-Id": "CLIENT_REQUEST_ID",
  "Api-Key": "API_KEY",
  "Timestamp": "TIMESTAMP",
  "Auth-Token-Type": "AccessToken",
  "Authorization": "BEARER_ACCESS_TOKEN",
  "Message-Digest": "MESSAGE_DIGEST"
}
```

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/card-capture)
- [Getting started with Commerce Hub APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Idempotency](?path=docs/Resources/Guides/Idempotency.md)
- [Postman Testing](?path=docs/Resources/Guides/Testing/Postman-Testing.md)

---
