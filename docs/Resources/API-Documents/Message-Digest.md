---
tags: [Card Not Present, Card Present, Message Digest, Authentication. API Reference]
---

# Generate a Message Digest

To ensure data integrity, prevent replay attacks, and eliminate stale requests, Authentication is required as part of the header when integrating with Commerce Hub's [API Only card capture service](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/API-Only.md) or Hosted Payment Pages.

## Details

Message Digest String is created using the `Api-Key` + `Client-Request-Id` + `Timestamp` + `Request-Body` before being encrypted using a SHA256 HMAC algorithm and sent in the header. The required `Authorization` bearer `accessToken` is obtained from a [security credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request.

<!-- theme: info -->
> The `Client-Request-Id` is a client generated number that is unique for each request. It is used as nonce and validated against all Client-Request-Ids received by Commerce Hub within a predetermined time frame *(five minutes is the default)* to prevent replay attacks. Commerce Hub uses the timestamp of the request to validate against stale requests. Any request older than the specified duration is rejected.

---

## Code Example

Generate the message digest required for use with our APIs.

<!-- theme: example -->
> Encrypted Message Digest Example: 2e5a47d16aaafd6a13303d4e211bbce1a771d9cfa412ac45deb38a558037fd38

```javascript
function guid() { // create clientRequestId
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

const clientRequestId = guid();
const timestamp = new Date().getTime();
const apiKey = "ytIrtghbjkuytewsdfgvxzcnzskliqopkjmd";
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
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Idempotency](?path=docs/Resources/Guides/Idempotency.md)
- [Postman Testing](?path=docs/Resources/Guides/Testing/Postman-Testing.md)
- [Use Commerce Hub APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md)

---
