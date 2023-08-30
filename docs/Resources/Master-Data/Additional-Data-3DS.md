---
tags: [3-D Secure, API Reference, Master Data]
---

# 3-D Secure Data

Additional data 3DS contains fields used when submiting a 3D-Secure transaction and recieved by the 3DS provider. 

<!--
type: tab
titles: additionalData3DS, JSON Example
-->


The below table identifies the parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `dsTransactionId` | *string* | 60 | Unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction | 
| `authenticationStatus` | *string* | 2 | The result of authentication attempt returned by the 3D Secure authentication process (PaRes). |
| `authenticationAttemptResult` | *string* | 1024 | Result of authentication attempt from Payer Authentication Response (PaRes). 3DS 1.x |
| `mpiData` | *object* | N/A | [Merchant plug-in (MPI)](#mpi-data) data from 3-D Secure (3DS) authentication. |
| `versionData` | *object* | N/A | Additional [version data](#version-data) passed during 3-D Secure (3DS) flows. |

---

<!--
type: tab
-->


JSON string format for `additionalData3DS`:

```json
{
  "additionalDataCommon": {
    "dsTransactionId": "3543-b90d-d6dc1765c98",
    "authenticationStatus": "A",
    "authenticationAttemptResult": "uyt45t89cnwu3rhc98a4hterjklth4o8ctsrjzth4",
    "mpiData": {
      "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
      "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
      "eci": "05",
      "tavv": "AAABCZIhcQAAAABZlyFxAAAAAAA"
    },
    "versionData": {
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


| Variable | Type | Maximum Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `dataCollectionUrl` | *string* | 256 | The URL that will be used by the 3DS Method to collect card holder browser information. |
| `encodedToken` | *string* | 4000 | Base64 encoded transactional JWT token for external data collection with service provider. |
| `encodedData` | *string* | 4000 | Base64 encoded data for external data collection with service provider. |
| `notificationUrl` | *string* | 256 | The notification URL to which the 3-D Secure (3DS) provider will send the result of the device data collection. |

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

Merchant plug-in (MPI) data from 3-D Secure (3DS) authentication.

<!--
type: tab
titles: mpiData, JSON Example
-->


| Variable | Type | Maximum Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `cavv` | *string* | 256 | The Cardholder Authentication Verification Value (CAVV) is a cryptographic value derived by the issuer during payment authentication that can provide evidence of the results of payment authentication during an online purchase. |
| `xid` | *string* | 512 | 3-D Secure value returned by service provider e.g. Cardinal Commerce. |
| `eci` | *string* | 256 | Payment system-specific value provided by the Access Control Server (ACS) or Directory Server (DS) to indicate the results of the attempt to authenticate the cardholder. |
| `tavv` | *string* | 512 | Cryptographic value that is generated during the Visa transaction authentication process for a payment token transaction. |

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

Additional version data passed during 3-D Secure (3DS) flows.

<!--
type: tab
titles: versionData, JSON Example
-->


| Variable | Type | Maximum Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `recommendedVersion` | *string* | 6 | Recommended 3DS version as specified by the card issuer. |

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
- [3-D Secure: Secure Data Capture](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Secure-Data-Capture.md)
- [3-D Secure Authentication Request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md)
- [3-D Secure Request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Request.md)

--- 
