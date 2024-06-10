---
tags: [Device Management, EMV, Encrypted Payments, CAPK, API Reference]
---

# EMV CAPK Data Status

Commerce Hub provides the ability for a merchant to retrieve the current status of their EMV Certification Authority Public Key *(CAPK)* data.

<!-- theme: info -->
> Once an update it available, merchants are expected to download the new version of CAPK data within six months.

---

## Request Variables

<!--
type: tab
titles: emvDetails, merchantDetails
-->

The below table identifies the required parameters in the `emvDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `transactionType`| *string* | 64 | Specifies the type of the CAPK transaction. |
|`currentFileCreationDate`| *string* | 40 | This parameter is sent as part of the last record in the format MMDDYYYYhhmmss|
| `fileSize` | *integer* | 10979 | This field contains the total size of the file, in bytes |
| `fileCheckSum`| *string* | 40 | This field contains the CRC-16 checksum of the file. Hexadecimal representation of 2 bytes or 16 bits |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `merchantId` | *string* | 1024 | A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md)|

<!-- type: tab-end -->

---

## Response Variables

<!--
type: tab
titles: emvDetails
-->

The below table identifies the required parameters in the `emvDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `transactionType`| *string* | 64 | Specifies the type of the CAPK transaction. |
|`currentFileCreationDate`| *string* | 40 | This parameter is sent as part of the last record in the format MMDDYYYYhhmmss|
| `fileSize` | *integer* | 10979 | This field contains the total size of the file, in bytes |
| `fileCheckSum`| *string* | 40 | This field contains the CRC-16 checksum of the file. Hexadecimal representation of 2 bytes or 16 bits |

<!-- type: tab-end -->

#### CAPK Status

The below table identifies the valid values of `status`.

| Value | Description |
| -------- | ----------- |
| UPDATE_AVAILABLE | A new CAPK data version is available, a [download request](?path=docs/In-Person/Device_Management/CAPK-Download.md) should be performed. |
| NO_UPDATE_AVAILABLE | The CAPK data version is up to date |

---

## Endpoint
<!-- theme: success -->
>**POST** `/tms/v1/emv-capk-data`

---

## Payload Examples

<!--
type: tab
titles: Request, Response
-->

Example of a CAPK status payload request

```json
{
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  },
  "emvDetails": {
    "transactionType": "STATUS",
    "currentFileCreationDate": "11032023000001",
    "fileSize": 10979,
    "fileCheckSum": "a8"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/tms/v1/emv-capk-data)

<!--
type: tab
-->

Example of a CAPK Status (200: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "STATUS",
    "transactionState": "COMPLETED",
    "transactionProcessingDetails": {
      "orderId": "CHG010db4f5595422fcf08fca763282158094",
      "transactionTimestamp": "2023-11-03T20:23:00.808347516Z",
      "apiTraceId": "a85d95a38e454f9db80085712f693aa6",
      "clientRequestId": "8398655",
      "transactionId": "a85d95a38e454f9db80085712f693aa6"
    }
  },
  "emvDetails": {
    "status": "UPDATE_AVAILABLE",
    "currentFileCreationDate": "DDMMYYYYhhmmss",
    "fileSize": "10979",
    "fileCheckSum": "a8"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/tms/v1/capk-data)
- [Device Management](?path=docs/Resources/API-Documents/Device-Management)
- [EMV Encryption](?path=docs/In-Person/Encrypted-Payments/EMV.md)
- [CAPK Download](?path=docs/Resources/API-Documents/Device-Management/CAPK-Download.md)

---
