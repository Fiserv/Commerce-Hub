---
tags: [Device Management, Certificate, API Reference, Device, Terminal, Point-of-Sale]
---

# Manage client certificates

Commerce Hub provides an API for clients to upload a client certificate. This certificate enables secure, encrypted data transmission to the point-of-sale (POS) device, ensuring the confidentiality and integrity of sensitive information.

**Supported features:**

- [Authorization Optimization](?path=docs/Resources/Guides/Authorizations/Auth-Optimization.md): Commerce Hub's real-time account updater *(RTAU)*

<!-- theme: info -->
> The supported feature may need to be configured in Merchant Configuration and Boarding. Please contact your account representative for more information.

---

## Upload a client certificate

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) to upload a new client certificate to Commerce Hub. The full request schemas are available in our [API Explorer](../api/?type=post&path=/tms/v1/pos-decision-table).

<!-- theme: success -->
> **POST** `/tms/v1/client-certificate`

```json
{
  "clientCryptographicDetails": {
    "clientKeyID": "924ee01b95ff1bfb45514cbe28f913725d82f8fe0ffc450c3582b00bc4b.....",
    "cryptographicResource": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuDjOPaWa......",
    "cryptographicAlgorithm": "JWE",
    "cryptographicResourceEncoding": ".pemEncoded",
    "cryptographicResourceType": "CERTIFICATE",
    "cryptographicResourceLength": 2048,
    "usedFor": "RTAU"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/tms/v1/pos-decision-table)

<!--
type: tab
-->

Example of a client certificate upload (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "UPLOAD",
    "transactionState": "UPLOADED",
    "transactionOrigin": "POS",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2022-03-15T20:28:09.977157Z",
      "apiTraceId": "96b35a89b00a492c87dda321b7deee02",
      "clientRequestId": "9716198",
      "transactionId": "96b35a89b00a492c87dda321b7deee02",
      "apiKey": "Pv3bTlh4Gdz6**********Kbccz6sqTAFXMea4"
    }
  },
  "clientCryptographicDetails": {
    "clientKeyID": "924ee01b95ff1bfb45514cbe28f913725d82f8fe0ffc450c3582b00bc4b8414d",
    "cryptographicResource": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuDjOPaWa......",
    "cryptographicAlgorithm": "JWT",
    "cryptographicResourceEncoding": ".pemEncoded",
    "cryptographicResourceType": "CERTIFICATE",
    "cryptographicResourceLength": 2048,
    "usedFor": "RTAU",
    "publicKeyHash": "3A100B15B9430B1711f2E38F05939A9A"
  }
}
```

<!-- type: tab-end -->

---

## Parameters

<!--
type: tab
titles: clientCryptographicDetails
-->

The below table identifies the request and response parameters in the `clientCryptographicDetails` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `clientKeyID` | *string* | 64 | Unique identifier of the key pair |
| `cryptographicAlgorithm` | *string* | 256 | Encryption type of the key pair. ***Valid values:** JWT, RSA and DUKPT* |
| `cryptographicResourceLength` | *integer* | N/A | Size of the key pair |
| `cryptographicResource` | *string* | 256 | Encoded public key/certificate |
| `cryptographicResourceType` | *string* | N/A | Describes cryptographic resource type as a *KEY* or *CERTIFICATE* |
| `cryptographicResourceEncoding` | *string* | N/A | Describes cryptographic resource encoding. ***Valid values:** .pemEncoded, .cerEncoded, .derEncoded* |
| `publicKeyHash` | *string* | N/A | Commerce hub generated public key hash |
| `usedFor` | *string* | N/A | Indicates the purpose of cryptographic information. ***Valid values:** RTAU* |

<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/tms/v1/pos-decision-table)
- [Authorization Optimization](?path=docs/Resources/Guides/Authorizations/Auth-Optimization.md)
- [Device Management](?path=docs/Resources/API-Documents/Device-Management/Device-Management.md)

---
