---
tags: [Device Management, EMV, Encrypted Payments, CAPK, API Reference]
---

# EMV CAPK Data

EMV CAPK data is crucial for secure payment transactions. It ensures card and cardholder authenticity through Certification Authority Public Keys. EMV cards have issuer certificates signed by EMV authorities for validation. Offline checks use cryptographic keys on terminals and cards. Commerce Hub offers a new CAPK data download endpoint. Refer to integration details in Download and Status articles.

<!-- theme: info -->
> For more details on technical implementation of CAPK storage and withdrawal, please refer to latest version of EMV Book 2 - Security and Key Management.

https://www.emvco.com/specifications/

---

## Download Article

Commerce Hub will provide the ability for a merchant to retrieve the latest EMV(Europay Mastercard Visa) CAPK (Certification Authority Public Key) data.

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
    "terminalId": "{{api:terminalId}}",
    "merchantId": "{{api:merchantId}}"
  }
}

```

## Status Article

Des

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
    "terminalId": "{{api:terminalId}}",
    "merchantId": "{{api:merchantId}}"
  },
  "emvDetails": {
    "transactionType": "STATUS",
    "currentFileCreationDate": "11032023000001",
    "fileSize": 10979,
    "fileCheckSum": "��"
  }
}

## See Also

- [API Explorer](../api/?type=post&path=/tms/v1/capk-data)
- [Device Management](?path=docs/Resources/API-Documents/Device_Management/Device-Management.md)
- [EMV Encryption](?path=docs/In-Person/Encrypted-Payments/EMV.md)

---
