---
tags: [carat, commerce-hub, enterprise, inquiry, transaction-inquiry, transaction-status, api-reference,]
---

# Transaction Inquiry

To retrieve the current state of any previous transaction, an inquiry request can be submitted against the original Commerce Hub transaction identifier or [merchant defined transaction identifier](?path=docs/Resources/Guides/BYOID.md).
---

## Request Variables

The below table identifies the transaction identifiers in the `referencetransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request. 

| Variable | Type| Maximum Length | Description|
|---------|-----------|----------------|---------|
| `referenceTransactionId` | *string* | 40 | The unique identifier from the original transaction passed for a reauthorization and incremental authorization. |
| `referenceOrderId` | *string* | 40 | The unique identifier from the original transaction passed for a reauthorization and incremental authorization. |
| `referenceRequestId` | *string* |64 | Echoes back the value in the request header for tracking. |
| `referenceTransactionId` | *string* | 32 | Unique merchant transaction ID (aka transaction reference ID). |
| `referenceOrderId` | *string* | 32 | Merchant order ID (aka customer reference number or purchase order number). |

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
  "transactionDetails": {
    "primaryTransactionId": "aa829dcb83cd49f485141168e051b8d1"
  }
}
```

<!--
type: tab
-->

##### Example of an inquiry (201: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{
  "additionalDataCommon": {
    "directedRouting": {
      "processors": [
        {
          "platform": "IPG",
          "priority": "FINAL"
        }
      ]
    },
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
    "merchantDetails": {
      "merchantId": "100004000000233",
      "storeId": "66100004000000233"
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
    "transactionDetails": {
      "captureFlag": "true",
      "merchantInvoiceNumber": "CHG01586b641"
    }
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/inquiry)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Reference Transaction Details](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---
