---
tags: [Security, Credentials, Access Token, API Reference, Session ID]
---

# Obtain Security Credentials

A security credentials request is used to obtain the credentials needed in an authentication request or submitting financial transactions.

- Returns an `accessToken` used in creating an [authentication header](?path=docs/Resources/API-Documents/Authentication-Header.md).
- Returns a `sessionId` used with [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) requests.

<!-- theme: danger -->
> The `sessionId` returned in the response is considered private data that should be stored on the merchant's backend server and never sent to the customer's browser.

---

## Request credentials

<!--
type: tab
titles: Request, Response
-->

Example of a credentials payload request. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/credentials).

<!-- theme: success -->
> **POST** `/payments-vas/v1/security/credentials`

```json
{
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/security/credentials)

<!--
type: tab
-->

Example of a credentials (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "keyId": "16116eb9-365c-4465-9017-e5bd7f153b9c",
  "publicKey": "TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROE......",
  "keyLength": 392,
  "accessToken": "saAOM9qjmKfdazqgoZrKbJuukCP9",
  "sessionId": "1a47b28f-b15d-45d2-9394-07f79ee5e954",
  "accessTokenIssuedTime": "2016-04-16T16:06:05Z",
  "accessTokenTimeToLive": 1800,
  "asymmetricEncryptionAlgorithm": "RSA",
  "accessTokenType": "JWT",
  "expiresAt": "2020-04-16T16:06:05Z"
}
```

<!-- type: tab-end -->

---

## Parameters

### Request variables

The tables below contain the fields for a security credential request.

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

### Response variables

The below table identifies the response elements.

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

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/credentials)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
