---
tags: [Device Management, Decision Table, API Reference, Device, Terminal, Point of Sale]
---

# POS Decision Table: Cloud BIN Download

Commerce Hub's Cloud BIN Service will return the configured 6-digit BIN ranges on the merchant account as a POS Decision Table. The device may use this table to determine when it should require certain positions of the card data to be in the clear *(unencrypted)*. The POS Decision Table is an array of 6-digit BIN ranges defining what cards should request more information from Commerce Hub's Cloud BIN Service.

<!-- theme: info-->
> The Cloud BIN Service needs to be configured in Merchant Configuration and Boarding. Please contact your account representative for more information.

---

## Table data

The response will include an array with the `accountRangeLow` and `accountRangeHigh`. Cards within the configured ranges should be sent to [Commerce Hub's Information Lookup API](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md#cloud-bin-request) for additional information.

---

## Download Cloud BIN Table

<!-- theme: caution --->
> The device should validate if a new table exists daily.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for an subsequent POS Decision Table download request using `updatedOn`. The full request schemas are available in our [API Explorer](../api/?type=post&path=/tms/v1/pos-decision-table).

<!-- theme: success -->
> **POST** `/tms/v1/pos-decision-table`

```json
{
  "metadata": {
    "updatedOn": "2021-06-20T23:42:48Z"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  },
  "transactionDetails": {
    "operationType": "DOWNLOAD"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/tms/v1/pos-decision-table)

<!--
type: tab
-->

Example of a Cloud BIN download (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "POS_DECISION_TABLE",
    "transactionState": "DOWNLOADED",
    "transactionProcessingDetails": {
      "orderId": "CHG3b83fca82f9c436486ae12c91f1fcf16",
      "transactionTimestamp": "2024-04-16T16:06:05Z",
      "apiTraceId": "1234567a1234567b1234567c1234567d",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "1234567a1234567b1234567c1234567d"
    }
  },
  "metadata": {
    "updatedOn": "2021-06-20T23:42:48Z"
  },
  "posDecisionData": [
    {
      "accountRangeLow": 654321,
      "accountRangeHigh": 654329
    },
    {
      "accountRangeLow": 554321,
      "accountRangeHigh": 554329
    }
  ]
}
```

<!-- type: tab-end -->

---

## Parameters

### Request Variables

<!--
type: tab
titles: metadata, transactionDetails, merchantDetails
-->

The below table identifies the conditional parameters in the `metadata` object.

<!-- theme: info -->
> For the first download or a full download, the `updatedOn` variable of `metaData` object should not be sent. For subsequent downloads, the `lastModified` value from the response should be sent for `updateOn`.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `updatedOn` | *string* | N/A | Updated timestamp in ISO 8601 format YYYY-MM-DDThh:mm:ssZ |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `operationType` | *string* | 50 | Defines the operation as *DOWNLOAD* |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Max Length | Description |
| ----- | ----- | ----- | ----- |
|`merchantId` | *string* | 1024 | A unique ID used to identify the merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
|`terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |

<!-- type: tab-end -->

---

### Response Variables

<!--
type: tab
titles: metadata, transactionDetails
-->

The below table identifies the response parameters in the `metadata` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `updatedOn` | *string* | N/A | Updated timestamp in ISO 8601 format YYYY-MM-DDThh:mm:ssZ |

<!--
type: tab
-->

The below table identifies the response parameters in the `posDecisionData` object.

| Variable | Type | Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `accountRangeLow` | *string* | 21 | Identifies the low range of the account |
| `accountRangeHigh` | *string* | 21 | Identifies the high range of the account |

<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/tms/v1/pos-decision-table)
- [Cloud BIN Integration Guide](?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Guide.md)
- [Device Management](?path=docs/Resources/API-Documents/Device-Management/Device-Management.md)
- [Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---
