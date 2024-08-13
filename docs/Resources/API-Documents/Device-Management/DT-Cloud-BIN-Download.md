---
tags: [Device Management, Decision Table, API Reference, Device, Terminal, Point of Sale]
---

# POS Decision Table: Cloud BIN Service

Commerce Hub's Cloud BIN Service will return the configured 6 digit BIN ranges on the merchant account as a POS Decision Table. The device may use this table to determine when it should require certain positions of the card data to be in the clear *(unencrypted)*. An array of 6 digit BIN ranges defines what details of the card data is to be returned in the clear for each of the ranges.

The response will include an array with the `accountRangeLow` and `accountRangeHigh` value for any configured ranges that should be sent to Commerce Hub's Cloud BIN Service for additional information. The device will make an [Information Lookup request](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md) that will return the required positions as `additionalCardData` for the `primaryCardData`.

<!-- theme: info-->
> The Cloud BIN Table needs to be configured in Merchant Configuration and Boarding. Please contact your account representative for more information.

---

## Device configuration requirements

The device needs to be configured to route cards and store the BIN information.

- The device should know if it can support 8-digit BINs locally and be configured with the merchant's known card ranges.
- For transactions where the first 6-digits of the card are found in the POS Decision Table, the device will request additional information.
  - This will exclude local 8-digit BIN range support on devices.
- For transactions where the device identifies a card not found in the POS Decision Table or the device routing table, it should validate the data is encrypted and send to the Cloud BIN Service, which will return the information lookup details.

---

## Download Cloud BIN Table

<!-- theme: caution --->
> The device should validate if a new table exists daily.

<!--
type: tab
titles: Request, Response, Parameters
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

<!--
type: tab
-->

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

## See Also

- [API Explorer](../api/?type=post&path=/tms/v1/pos-decision-table)
- [Device Management](?path=docs/Resources/API-Documents/Device-Management/Device-Management.md)
- [Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---
