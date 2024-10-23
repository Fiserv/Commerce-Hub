---
tags: [Inquiry, Transaction Inquiry, Transaction Status, API Reference]
---

# Perform a transaction lookup using the Transaction Inquiry API

The Transaction Inquiry API is used to retrieve the current state of any [previous transaction](?path=docs/Resources/API-Documents/Payments/Payments.md), an inquiry request can be submitted against the Commerce Hub transaction identifier or [merchant transaction identifier](?path=docs/Resources/Guides/BYOID.md).

---

## Submit a Transaction Inquiry API request

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful Transaction Inquiry API request using a `referenceTransactionId`. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/inquiry).

<!-- theme: success -->
> **POST** `/payments/v1/transaction-inquiry`

```json
{
  "referenceTransactionDetails": {
    "referenceTransactionId": "aa829dcb83cd49f485141168e051b8d1"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "merchantId": "10000001",
  }
}
```

<!--
type: tab
-->

Example of a Transaction Inquiry API *(201: Success)* response.

<!-- theme: -->
> When using `referenceOrderId` or `referenceMerchantOrderId` Commerce Hub will return an array of transaction results related to the original `orderId` or `merchantOrderId`.

<!-- theme: info -->
> See [response handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
[
  {
    "gatewayResponse": {
      "gatewayName": "IPG",
      "gatewayOrderId": "CH-cb1e236f-3136-411d-8eff-7273ad6d2505",
      "gatewayTransactionId": "84439763459",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails": {
        "apiTraceId": "aa829dcb83cd49f485141168e051b8d1",
        "clientRequestId": "9806383",
        "orderId": "CHG01586b6416dddd4425ae764daee6c3ac8a",
        "transactionId": "aa829dcb83cd49f485141168e051b8d1",
        "transactionTimestamp": "2022-01-13T19:09:27.939151Z"
      },
      "transactionState": "CAPTURED",
      "transactionType": "CHARGE"
    },
    "paymentReceipt": {
      "approvedAmount": {
        "currency": "USD",
        "total": 12.04
      },
      "processorResponseDetails": {
        "approvalCode": "OK6982",
        "approvalStatus": "APPROVED",
        "hostResponseCode": "00",
        "hostResponseMessage": "APPROVAL",
        "localTimestamp": "2022-01-13T19:09:29Z",
        "processor": "FISERV",
        "host": "NASHVILLE",
        "responseCode": "000",
        "responseMessage": "APPROVAL",
        "schemeTransactionId": "0113MCC815463"
      }
    },
    "source": {
      "card": {
        "bin": "542418",
        "expirationMonth": "12",
        "expirationYear": "2025",
        "last4": "1732",
        "scheme": "MASTERCARD"
      },
      "sourceType": "PaymentCard"
    },
    "additionalDataCommon": {
      "billingAddress": {
        "address": {
          "city": "Atlanta",
          "country": "USA",
          "houseNumberOrName": "4201",
          "postalCode": "30338",
          "stateOrProvince": "Georgia",
          "street": "123 Main Dr"
        },
        "firstName": "Jane",
        "lastName": "Doe"
      }
    },
    "transactionDetails": {
      "captureFlag": "true",
      "merchantInvoiceNumber": "CHG01586b641"
    }
  }
]
```

<!-- type: tab-end -->

---

## Parameters

### Request variables

<!--
type: tab
titles: referenceTransactionDetails, merchantDetails
-->

The below table identifies the transaction identifiers in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request.

| Variable | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction used for reference in a secondary transaction. |
| `referenceOrderId` | *string* | 128 | Commerce Hub generated `orderId` from the original transaction used for reference in a secondary transaction. |
| `referenceClientRequestId` | *string* | 128 | Merchant/client generated `clientRequestId` from the original transaction. Can only be used in a transaction inquiry request.' |
| `referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |
| `referenceMerchantOrderId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantOrderId` from the original transaction. |

<!--
type: tab
-->

The below table identifies the parameters in the `merchantDetails` object.

| Variable | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `merchantId` | *string* | 1024 | A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md)|

<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/inquiry)
- [Custom Identifiers](?path=docs/Resources/Guides/BYOID.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Reference Transaction Details](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
