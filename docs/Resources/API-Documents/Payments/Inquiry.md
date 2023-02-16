---
tags: [Inquiry, Transaction Inquiry, Transaction Status, API Reference]
---

# Transaction Inquiry

To retrieve the current state of any previous transaction, an inquiry request can be submitted against the original Commerce Hub transaction identifier or [merchant transaction identifier](?path=docs/Resources/Guides/BYOID.md).

---

## Request Variables

<!--
type: tab
titles: referenceTransactionDetails, merchantDetails
-->

The below table identifies the transaction identifiers in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request. 

| Variable | Type| Maximum Length | Description|
|---------|-----------|----------------|---------|
| `referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction used for reference in a secondary transaction. |
| `referenceOrderId` | *string* | 128 | Commerce Hub generated `orderId` from the original transaction used for reference in a secondary transaction. |
| `referenceClientRequestId` | *string* | 128 | Merchant/client generated `clientRequestId` from the original transaction. Can only be used in a transaction inquiry request.' |
| `referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |
| `referenceMerchantOrderId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantOrderId` from the original transaction. |

<!--
type: tab
-->

The below table identifies the parameters in the `merchantDetails` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- |------------| ------- | ---- |
| `merchantId` | *string* | 16 | &#10004; | A unique ID used to identify the Merchant. The merchant may use the value assigned by the acquirer, gateway, or their [own unique identifier](?path=docs/Resources/Guides/BYOID.md) when submitting a transaction. Can be used for merchants that support [dynamic descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md), or support multiple stores in the same app. |
| `terminalId` | *string* | 1024 |  | Identifies the specific device or point of entry where the transaction originated, can be assigned by the the gateway or [merchant specified](?path=docs/Resources/Guides/BYOID.md). |

<!-- type: tab-end -->

---

## Endpoints

Use the below endpoints based on the [transaction type](?path=docs/Resources/Guides/Transaction-Types.md).

<!-- theme: success -->
>**POST** `/payments/v1/transaction-inquiry`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

```json
{
  "referenceTransactionDetails": {
    "referenceTransactionId": "aa829dcb83cd49f485141168e051b8d1"
  },
  "merchantDetails": {
    "merchantId": "1234567890123456"
  }
}
```

<!--
type: tab
-->

##### Example of an inquiry (201: Success) response.

The below table identifies additional arrays that may be returned in the inquiry response.

| Variable | Type| Maximum Length | Description|
|---------|-----------|----------------|---------|
| `linkedTransactions` | *array* | N/A | List of transactions linked to the inquiry, most common when requesting information about a [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) request. |
| `error` | *array* | N/A | If the referenced transaction was unsuccessful, the list of [errors](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) will be returned. |

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
        "total": "690"
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

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/inquiry)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Reference Transaction Details](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
