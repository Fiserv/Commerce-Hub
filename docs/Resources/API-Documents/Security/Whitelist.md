---
tags: [Security, Whitelist, Domains, API Reference, Checkout]
---

# Whitelist domains for use with Checkout

Commerce Hub's Domain Whitelisting API allows for whitelisting domains in bulk for our [Checkout Solutions]. *CERT* and *PROD* utilize the same whitelist so once a domain is submitted to either environment it can be used as a whitelist both endpoints.

<!-- theme: danger -->
> This request must be invoked as a server API call and should not be attempted directly from the browser.

---

## Submit a list of domains

Multiple domains can be sent as a string of text in the `domains` field.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful Security Credentials API request. The full request schemas are available in our [API Explorer](../api/?type=post&path=/security/v1/saq/whitelist/domains).

<!-- theme: success -->
> **POST** `/security/v1/saq/whitelist/domains`

```json
{
  "domains": [
    "www.example1.com",
    "www.example2.com",
    "www.example1.co"
  ]
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/security/v1/saq/whitelist/domains)

<!--
type: tab
-->

Example of a Domain Whitelist API (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionTimestamp": "2024-08-19T18:50:45.111118458Z",
      "apiTraceId": "56f5270189cc44a4966350ea236a14cd",
      "clientRequestId": "5204452",
      "transactionId": "56f5270189cc44a4966350ea236a14cd",
      "apiKey": "ytIVhAgrMeylMVPhBQkTLKlkSQS8GrwQ"
    }
  },
  "validDomains": [
    "www.example1.com",
    "www.example2.com"
  ],
  "invalidDomains": [
    "www.example1.co"
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
- [Checkout Solutions]

---
