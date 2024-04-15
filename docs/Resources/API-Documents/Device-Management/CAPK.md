---
tags: [Device Management, EMV, Encrypted Payments, CAPK, API Reference]
---

# EMV CAPK Data

EMV (Europay Mastercard Visa) CAPK (Certification Authority Public Key) data is crucial for secure payment transactions. It ensures card and cardholder authenticity through Certification Authority Public Keys. EMV cards have issuer certificates signed by EMV authorities for validation. Offline checks use cryptographic keys on terminals and cards. Commerce Hub offers a new CAPK data download endpoint. Refer to integration details in Download and Status articles.

<!-- theme: info -->
> For more details on technical implementation of CAPK storage and withdrawal, please refer to latest version of EMV Book 2 - Security and Key Management.

<https://www.emvco.com/specifications/>

---

## Download Article

Commerce Hub will provide the ability for a merchant to retrieve the latest EMV(Europay Mastercard Visa) CAPK (Certification Authority Public Key) data.

<!--
type: tab
titles: emvDetails, merchantDetails
-->

The below table identifies the required parameters in the `emvDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `transactionType`| *string* | 64 | Specifies the type of the CAPK transaction. |

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
>**POST** `/tms/v1/emv-capk-data`

---

## Payload Examples

<!--
type: tab
titles: Request, Response
-->

Example of a Download payload request

```json
{
  "emvDetails": {
    "transactionType": "DOWNLOAD"
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/tms/v1/emv-capk-data)

<!--
type: tab
-->

Example of a Download (201: Created) response.

```json
{
  "gatewayResponse": {
    "transactionType": "DOWNLOAD",
    "transactionState": "COMPLETED",
    "transactionProcessingDetails": {
      "orderId": "CHG0195f97ffb035b92a8e2d0f8f49cced1a3",
      "transactionTimestamp": "2023-10-10T17:55:17.976766118Z",
      "apiTraceId": "8dcb739f45574e01b81f15734fd9f03c",
      "clientRequestId": "7883676",
      "transactionId": "8dcb739f45574e01b81f15734fd9f03c"
    }
  },
  "emvDetails": {
    "headerInfo": {
      "fileName": "CA_KEYS",
      "fileVersion": "0119"
    },
    "version": "0310202200000110578",
    "currentFileCreationDate": "DDMMYYYYhhmmss",
    "fileSize": "10979",
    "fileCheckSum": "a9",
    "keys": [
      {
        "expiryDate": "2024-12-31",
        "certificateAuthorityHashAlgorithmIndicator": "01",
        "certificateAuthorityPublicKeyAlgorithmIndicator": "01",
        "applicationIdentifier": "B000000025",
        "publicKeyIndex": "C9",
        "publicKeyModulus": "C23ECBD7119F4....",
        "publicKeyExponent": "03",
        "publicKeyChecksum": "8E8DFF443D78CD91DE88821D70C98F0638E51E49"
      }
    ]
  }
}
```
<!-- type: tab-end -->

---

## Status Article

Commerce Hub will provide the ability for a merchant to retrieve the current status of the EMV(Europay Mastercard Visa) CAPK (Certification Authority Public Key) data.

---

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
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---

## Payload Examples

<!--
type: tab
titles: Request, Response
-->

Example of a Status payload request

```json
{
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
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

Example of a Status (201: Created) response.

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
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/tms/v1/capk-data)
- [Device Management](?path=docs/Resources/API-Documents/Device_Management/Device-Management.md)
- [EMV Encryption](?path=docs/In-Person/Encrypted-Payments/EMV.md)

---
