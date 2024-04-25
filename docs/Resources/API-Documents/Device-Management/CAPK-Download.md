---
tags: [Device Management, EMV, Encrypted Payments, CAPK, API Reference]
---

# EMV CAPK Data Download

Commerce Hub will provide the ability for a merchant to retrieve the latest EMV(Europay Mastercard Visa) CAPK (Certification Authority Public Key) data.

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

## Response Variables

<!--
type: tab
titles: emvDetails, headerInfo, keys
-->

The below table identifies the parameters in the `emvDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `transactionType`| *string* | 64 | Specifies the type of the CAPK transaction. |
|`currentFileCreationDate`| *string* | 40 | This parameter is sent as part of the last record in the format MMDDYYYYhhmmss|
| `fileSize` | *integer* | 10979 | This field contains the total size of the file, in bytes |
| `fileCheckSum`| *string* | 40 | This field contains the CRC-16 checksum of the file. Hexadecimal representation of 2 bytes or 16 bits |

<!--
type: tab
-->

The below table identifies the parameters in the `headerInfo` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `fileName` | *string* | 64 | Identifies the type of file. |
| `fileVersion` | *string* | 4 | Specifies the header file version for tracking purposes. |

<!--
type: tab
-->

The below table identifies the parameters in the `keys` array.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `expiryDate` | *string* | N/A | Specifies when the key expires in MMDDYYYY format. |
| `certificateAuthorityHashAlgorithmIndicator` | *string* | 2 | Identifies the hash algorithm used to produce the Hash Result in the digital signature scheme. At the present time only a value of (SHA-1) is supported |
| `certificateAuthorityPublicKeyAlgorithmIndicator`| *string* | 2 | Identifies the hash algorithm used to produce the Hash Result in the digital signature scheme. At the present time only a value of (SHA-1) is supported. |
| `applicationIdentifier` | *string* | 10 | Registered application identifier. |
| `publicKeyIndex`| *string* | 2 | Identifies the Certification Authority Public Key in conjunction with the applicationIdentifier. |
| `publicKeyModulus` | *string* | 496 | Value of the modulus part of the Certification Authority Public Key.|
| `publicKeyExponent` | *string* | 6 | Value of the exponent part of the Certification Authority Public Key, equal to 3 or 2^16+1 |
| `publicKeyChecksum`| *string* | 40 | A check value calculated on the concatenation of all parts of the certification Authority Public Key (ApplicationIdentifier, Certification Authority Public Key Index, Certification Authority Public Key Modulus, Certification Authority Public Key Exponent) using SHA-1. |

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

Example of a CAPK download payload request

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

Example of a CAPK download (200: Created) response.

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

## See Also

- [API Explorer](../api/?type=post&path=/tms/v1/capk-data)
- [Device Management](?path=docs/Resources/API-Documents/Device-Management)
- [EMV Encryption](?path=docs/In-Person/Encrypted-Payments/EMV.md)
- [CAPK Status](?path=docs/Resources/API-Documents/Device-Management/CAPK-Status.md)

---
