---
tags: [3-D Secure, API Reference, Master Data]
---

# 3-D Secure Data

The `additionalData3DS` object contains fields used when submiting a 3D-Secure _(3DS)_ transaction and recieved by the 3DS provider.

<!--
type: tab
titles: additionalData3DS, JSON Example
-->

The below table identifies the parameters in the `additionalData3DS` object.

| Variable | Type | Max Length | Description |
| -------- | -- | ------------ | ------------------ |
| `acsReferenceNumber` | _string_ | 60 | Unique reference number assigned by the Access Control Server _(ACS)_ to identify a single transaction. |
| `acsTransactionId` | _string_ | 60 | Unique transaction identifier assigned by the Access Control Server _(ACS)_ to identify a single transaction. |
| `acsUrl` | _string_ | 256 | The URL to redirect the consumer to complete the [authentication](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md). |
| `authenticationStatus` | _string_ | 2 | The result of authentication attempt returned by the 3D Secure authentication process _(PaRes)_. |
| `challengeIndicator` | _boolean_ | N/A | Indicates whether a regional mandate is in place requiring a challenge to complete authentication for all 3DS transactions initiated within the region. |
| `challengeStatus` | _string_ | 2 | The transaction status as returned by the 3D Secure authentication process. _(CRes)_. |
| `challengeToken` | _string_ | 1024 | Secure token for challenge request _(CReq)_. |
| `channel` | _string_ | 32 | Determines the channel that the transaction came through. _**Valid Values:** BROWSER, SDK, 3DS_REQUESTOR_INITIATED_ |
| `dsTransactionId` | _string_ | 60 | Unique transaction identifier assigned by the Directory Server _(DS)_ to identify a single transaction |
| `messageCategory` | _string_ | 2 | Indicates the message category of 3-D Secure authentication version 2.X. _01 = Payment Authentication 02 = Non-Payment Authentication 80 = Mastercard Data Only_ |
| `serverTransactionId` | _string_ | 16 | DUnique transaction identifier assigned by the 3DS Server to identify a single transaction. |
| `serviceProvider` | _object_ | 32 | The 3DS service provider responsible for managing the 3DS transaction. _**Valid Values:** CARDINAL_ |
| `serviceProviderReferenceId` | _string_ | 60 | Unique reference identifier assigned by the 3DS Server during an [initialization](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Initialization.md). |
| `serviceProviderTransactionId` | _string_ | 60 | Unique transaction identifier assigned by the 3DS Server to identify a single transaction. |
| `statusReason` | _string_ | 16 | Details about a given transaction status. |
| `stepUpUrl` | _string_ | 256 | The URL that the client uses to post the cardholder in order to complete the Consumer Authentication transaction. |
| `methodData` | _object_ | N/A | Additional [device data collection details](#method-data) passed during 3DS flows. |
| `mpiData` | _object_ | N/A | [Merchant plug-in (MPI)](#mpi-data) data from 3-D Secure (3DS) authentication. |
| `versionData` | _object_ | N/A | Additional [version data](#version-data) passed during 3-D Secure (3DS) flows. |

---

<!--
type: tab
-->

JSON string format for `additionalData3DS`:

```json
{
  "additionalDataCommon": {
    "serviceProvider": "CARDINAL",
    "serviceProviderReferenceId": "764a086f-ad30-4313-b90d-d6dc1929c0d6",
    "serviceProviderTransactionId": "475a086f-ad30-4313-b90d-d6dc1929c98",
    "acsTransactionId": "13a086f-ad30-6543-b90d-d6dc1929c98",
    "acsReferenceNumber": "123jd-009ddk-876",
    "dsTransactionId": "3543-b90d-d6dc1765c98",
    "challengeStatus": "A",
    "challengeIndicator": "true",
    "authenticationStatus": "A",
    "statusReason": "Approved",
    "serverTransactionId": "8561c0ef-931a-474f-bfee-55eb98a331b1",
    "challengeToken": "uyt45t89cnwu3rhc98a4hterjklth4o8ctsrjzth4",
    "acsUrl": "https://www.example.com/3ds/redirect",
    "stepUpUrl": "https://www.example.com/3ds/stepUp",
    "channel": "BROWSER",
    "messageCategory": "1",
    "methodData": {
      "dataCollectionUrl": "https://www.example.com/3ds/device/collect",
      "encodedToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      "encodedData": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjNhYzdjYWE3LWFhNDItMjY2My03OTFiLTJhYzA1YTU0MmM0YSJ9",
      "notificationUrl": "https://www.example.com/webhooks/v1/callback"
    },
    "mpiData": {
      "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
      "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
      "eci": "05",
      "tavv": "AAABCZIhcQAAAABZlyFxAAAAAAA"
    },
    "versionData":{
      "recommendedVersion": "2.2.0"
   }
  }
}
```

<!-- type: tab-end -->

---

## Method Data

Additional device data collection details passed during 3DS flows.

<!--
type: tab
titles: methodData, JSON Example
-->

| Variable | Type | Max Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `dataCollectionUrl` | _string_ | 256 | The URL that will be used by the 3DS Method to collect card holder browser information. |
| `encodedToken` | _string_ | 4000 | Base64 encoded transactional JWT token for external data collection with service provider. |
| `encodedData` | _string_ | 4000 | Base64 encoded data for external data collection with service provider. |
| `notificationUrl` | _string_ | 256 | The notification URL to which the 3-D Secure (3DS) provider will send the result of the device data collection. |

---

<!--
type: tab
-->

JSON string format for `methodData`:

```json
{
   "methodData":{
      "dataCollectionUrl": "https://www.example.com/3ds/device/collect",
      "encodedToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      "encodedData": "eyJ0aHJlZURTU2VydmVyVHJhbnNJRCI6IjNhYzdjYWE3LWFhNDItMjY2My03OTFiLTJhYzA1YTU0MmM0YSJ9",
      "notificationUrl": "[ll](https://www.example.com/webhooks/v1/callback)"
   }
}
```

<!-- type: tab-end -->

---

## MPI Data

Merchant plug-in _(MPI)_ data from 3DS authentication.

<!--
type: tab
titles: mpiData, JSON Example
-->

| Variable | Type | Max Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `cavv` | _string_ | 256 | The Cardholder Authentication Verification Value (CAVV) is a cryptographic value derived by the issuer during payment authentication that can provide evidence of the results of payment authentication during an online purchase |
| `xid` | _string_ | 512 | 3-D Secure value returned by service provider e.g. Cardinal Commerce |
| `eci` | _string_ | 256 | Payment system-specific value provided by the Access Control Server (ACS) or Directory Server (DS) to indicate the results of the attempt to authenticate the cardholder |
| `tavv` | _string_ | 512 | Cryptographic value that is generated during the Visa transaction authentication process for a payment token transaction |

---

<!--
type: tab
-->

JSON string format for `mpiData`:

```json
{
   "mpiData":{
      "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
      "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
      "eci": "05",
      "tavv": "AAABCZIhcQAAAABZlyFxAAAAAAA"
   }
}
```

<!-- type: tab-end -->

---

## Version Data

Additional version data passed during 3DS flows.

<!--
type: tab
titles: versionData, JSON Example
-->

| Variable | Type | Max Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `recommendedVersion` | _string_ | 6 | Recommended 3DS version as specified by the card issuer. |

---

<!--
type: tab
-->

JSON string format for `mpiData`:

```json
{
   "versionData":{
      "recommendedVersion": "2.2.0"
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)

---
