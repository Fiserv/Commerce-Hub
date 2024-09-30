---
tags: [Security, Whitelist, Domains, API Reference, Checkout]
---

# Whitelist domains for use with Commerce Hub

Commerce Hub's Domain Whitelisting API allows for whitelisting domains in bulk for our  *CERT* and *PROD* utilize the same whitelist so once a domain is submitted to either environment it can be used as a whitelist both endpoints. Local host testing without whitelisting is permitted.

Commerce Hub’s Domain Whitelisting API enables bulk whitelisting of domains for our [Checkout Solutions](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md). Both CERT *(certification)* and PROD *(production)* environments share the same whitelist. Once a domain is submitted to either environment, it is whitelisted for both [endpoints](?path=docs/Resources/API-Documents/Use-Our-APIs.md). Additionally, local host testing is allowed without the need for whitelisting.

---

## Submit a list of domains

Multiple domains can be sent as a string of text in the `domains` field.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful Domains Whitelist API request. The full request schemas are available in our [API Explorer](../api/?type=post&path=/security/v1/saq/whitelist/domains).

<!-- theme: success -->
> **POST** `/security/v1/saq/whitelist/domains`

```json
{
  "domains": [
    "www.example1.com",
    "checkout.example2.com",
    "example3.com",
    "https://checkout.example4.com",
    "*.example5.com"
  ]
}
```

<!--
type: tab
-->

Example of a Domain Whitelist API *(201: Created)* response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionTimestamp": "2024-09-19T14:11:10.168675929Z",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338",
      "apiKey": "abcdabcdabcdabcd"
    }
  },
  "validDomains": [
    "www.example1.com",
    "checkout.example2.com",
    "example3.com"
  ],
  "invalidDomains": [
    "https://checkout.example4.com",
    "*.example5.com"
  ]
}
```

<!-- type: tab-end -->

---

## Parameters

### Request variables

The tables below contain the required fields for a Domain Whitelist API request.

| Variables | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `domains` | *array* | N/A | A list of domains that needs to be whitelisted as a *string* of text. |

---

### Response variables

The tables below contain the response fields for a Domain Whitelist API request.

| Variables | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `validDomains` | *array* | N/A | A list of domains that are valid as a *string* of text. |
| `invalidDomains` | *array* | N/A | A list of domains that are invalid as a *string* of text. |

---

## See also

- [API Explorer](../api/?type=post&path=/security/v1/saq/whitelist/domains)
- [Checkout Solutions](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)

---
