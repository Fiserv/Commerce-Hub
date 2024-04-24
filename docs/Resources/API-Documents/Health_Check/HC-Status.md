---
tags: [Health Check, API Reference, Response Code, Error Code, HTTP Status Code]
---

# Health Check Status

Commerce Hub's Health Check allows merchants to retrieve the status of the Commerce Hub APIs as well as recent errors by products. Health Check statuses are categorizes error counts per product; General, Payments, and Payments-VAS _(Accounts and Security)_. The status API provides the error count for a rolling timeframe of the last 15 minutes.

---

## Endpoint

<!-- theme: info -->
> **GET** `/status`

---

## Response

<!--
type: tab
titles: Parameters, Response Example
-->

| Variable | Type | Description |
| -------- | ---- | ----------- |
| `environment` | _string_ | Tells about the environment in which the status is requested |
| `apiKey` | _string_ | Health check status on behalf of this API-Key |
| `from` | _string_ | Errors are counted from this timestamp (GMT) |
| `to` | _string_ | Errors are counted till this timestamp (GMT) |
| `metrics` | _array_ | Array of errors by `apiProduct` |
| `apiProduct` | _string_ | The API product for which errors are counted. Products are payments, paymentsVAS, and general.
| `httpErrors` | _array_ | Array of HTTP error codes for the specific `apiProduct` |
| `code` | _string_ | [HTTP error code](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) |
| `count` | _string_ | Number of occurrences per HTTP error code |
| `lastOccurred` | _string_ | The timestamp (GMT) of the last occurrence of the error |

<!--
type: tab
-->

Example of a status (200: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "environment": "prod",
  "apiKey": "Pv3bTlh4Gdz6**********Kbccz6sqTAFXMea4",
  "from": "2023-10-23T15:52:00.000000000Z",
  "to": "2023-10-23T16:06:00.000000000Z",
  "metrics": [
    {
      "apiProduct": "general",
      "httpErrors": [
        {
          "code": "401",
          "count": "2"
        }
      ]
    },
    {
      "apiProduct": "payments",
      "httpErrors": [
        {
          "code": "400",
          "count": "2",
          "lastOccurred": "2023-10-23T15:56:19.000000000Z"
        },
        {
          "code": "500",
          "count": "1",
          "lastOccurred": "2023-10-23T15:57:19.000000000Z"
        },
        {
          "code": "501",
          "count": "1",
          "lastOccurred": "2023-10-23T15:57:22.000000000Z"
        }
      ]
    },
    {
      "apiProduct": "paymentsVAS",
      "httpErrors": [
        {
          "code": "501",
          "count": "1",
          "lastOccurred": "2023-10-23T15:58:12.000000000Z"
        },
        {
          "code": "502",
          "count": "1",
          "lastOccurred": "2023-10-23T15:58:09.000000000Z"
        },
        {
          "code": "504",
          "count": "1",
          "lastOccurred": "2023-10-23T15:58:00.000000000Z"
        }
      ]
    }
  ]
}
```

<!-- type: tab-end -->
---

## See Also

- [API Explorer](../api/?type=post&path=/status)
- [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md)

---
