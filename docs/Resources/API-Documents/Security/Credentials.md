# Security Credentials

A credentials request is used for authorizing or submitting subsequent financial transactions. 

- Returns an `accessToken` used in creating an [authentication header](?path=docs/Resources/API-Documents/Authentication-Header.md).
- Returns a `sessionId` used with Secure Data Capture [iFrame](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) and [JS](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md) requests.

<!--
type: tab
titles: Request Variables, Response Variables
-->

The below table identifies the parameters in the request.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `domains` | *array* | N/A | A whitelist of domains that are applicable for this credentials request. This is used to prevent the risk of [clickjacking](?path=docs/Resources/FAQs-Glossary/Glossary.md#clickjacking) when integrating with the Secure Data Capture iFrame solution. |

<!---
| `publicKeyRequired` | *boolean* | N/A | Used to request a public key. If the signedCert is expired or invalid then merchant would send a request, default is true (false currently not supported) |
| `accessTokenRequired` | *boolean* | N/A | Used to request an access token. If the access token is expired then merchant would request for a new token, default is true (false currently not supported) |
| `accessTokenTimeToLive` | *string* | 7 | Time to live (expiration time) in milliseconds, default is the max time of 30 minutes (1800000 ms) |
| `responseRedirectURL` | *string* | 4000 | Response URL redirect |
--->

<!--
type: tab
-->

The below table identifies the response elements.

| Variable | Type | Maximum Length | Description |
|---------|----------|--------|--------|
| `keyId` | *string* | 64 | Unique identifier of the public encryption key |
| `publicKey` | *string* | 4000 | Base64 encoded public key |
| `keyLength` | *string* | 10 | Length of the Base64 encoded public encryption key |
| `accessToken` | *string* | 2048 | Access token credential to be used in subsequent API calls. |
| `sessionId` | *string* | 64  | Used as an identifier for a session after a successful call to security/credentials endpoint or after a successful authentication request |
| `domains` | *array* | N/A  | A whitelist of domains that are applicable for this credentials request |
| `accessTokenIssuedTime` | *string* | 64 | Token issue time in YYYY-MM-DDThh:mm:ssZ format |
| `accessTokenTimeToLive` | *string* | 7 | Access token expiry |
| `asymmetricEncryptionAlgorithm` | *string* | 32 | Asymmetric encryption algorithm associated with the public key. RSA/ECB/PKCS1 with padding. |

<!---
| `symmetricEncryptionAlgorithm` | *string* |  | AES 256/PKCS with padding |
-->

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
  "domains": [
    "https://checkout.mystore.com",
    "https://store.mystore.com",
    "https://*.mystore.com"
  ],
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
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionTimestamp": "2016-04-16T16:06:05Z",
      "apiTraceId": "1234567a1234567b1234567c1234567d",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "keyId": "16116eb9-365c-4465-9017-e5bd7f153b9c",
  "publicKey": "TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROE......",
  "keyLength": 392,
  "accessToken": "saAOM9qjmKfdazqgoZrKbJuukCP9",
  "sessionId": "1a47b28f-b15d-45d2-9394-07f79ee5e954",
  "domains": [
    {
      "url": "https://store.example.com"
    }
  ],
  "accessTokenIssuedTime": "2016-04-16T16:06:05Z",
  "accessTokenTimeToLive": 1800,
  "asymmetricEncryptionAlgorithm": "RSA",
  "accessTokenType": "string"
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/credentials)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
