---
tags: [Online, Card Not Present, Secure Data Capture, Payment JS]
---

# Secure Data Capture - JavaScript v2 Supported Fields and Methods

The JavaScript SDK defines a function in the window object `window.fiserv.commercehub.captureCard`. This function accepts a JavaScript object containing the [PCI field data](#field-data) as well as the [submission configuration](#configuration).

---

## Configuration

The available configuration methods are listed in the table below.

| Value | Required | Type | Details |
| ------ | ----------- | ------- | ----- |
| `environment` | &#10004; | _string_ | Defines the Commerce Hub environment; **_PROD_** or **_CERT_** |
| `apiKey` |  &#10004; | _string_ | API Key provided to the merchant associating the requests with the appropriate app in the Developer Portal |
| `accessToken` | &#10004; | _string_ | Access token credential to be used in subsequent API calls |
| `publicKey` | &#10004; | _string_ | Base64 public RSA encryption key from the credentials endpoint |
| `keyId` | &#10004; | _string_ | Unique identifier of the public encryption key |
| `merchantId` | &#10004; | _string_ | A unique ID used to identify the Merchant. The merchant may use the value assigned by the acquirer, gateway, or their [own unique identifier](?path=docs/Resources/Guides/BYOID.md) when submitting a transaction |
| `terminalId` | | _string_ | Identifies the specific device or point of entry where the transaction originated, can be assigned by the the gateway or [merchant specified](?path=docs/Resources/Guides/BYOID.md) |

---

## Field Data

The available PCI fields are listed in the table below.

| Value | Type | Details |
| ------ | ------- | ----- |
| `nameOnCard` | _string_ | Cardholder first and last name |
| `cardNumber` | _string_ | Credit card number |
| `securityCode` | _string_ | A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC), verification code (V-code or V code), or signature panel code (SPC) |
| `expirationMonth` | _string_ | 2-digit card expiration month |
| `expirationYear` | _string_ | 4-digit card expiration year |

---

## See Also

- [Create a JavaScript Request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Request.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
