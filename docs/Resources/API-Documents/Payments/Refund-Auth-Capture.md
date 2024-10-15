---
tags: [Full Refund, Payments, Partial Refund, Refund, Authorization, Capture, Online Refund, API Reference]
---

# Process an authorization and capture reversal using the Refunds API

Commerce Hub supports authorization messages for online refund transactions. This allows a merchant to process an [authorization request](#submit-a-refunds-api-pre-authorization-request) and a subsequent [capture request](#submit-a-refunds-api-capture-request) at a later time using the Commerce Hub transaction identifier or [merchant transaction identifier](?path=docs/Resources/Guides/BYOID.md).

<!-- theme: info -->
> If you do not want to process a pre-authorization and capture refund request it is recommended to submit a [tagged reversal](?path=docs/Resources/API-Documents/Payments/Refund-Tagged.md).

Similar to the [Charges API](?path=docs/Resources/API-Documents/Payments/Charges.md), online refunds can be initiated as a refund, pre-authorization, or capture which is defined in the request by sending the `captureFlag` in `transactionDetails`.

- *false:* A pre-authorization transaction, where the customer's funds will be reserved and a capture will be required to return the funds.
- *true:* A refund or subsequent capture transaction where the customer will be refunded the total amount, and funds returned.

<!-- theme: danger -->
> Refund API requests can be initiated against a [transaction](?path=docs/Resources/API-Documents/Payments/Charges.md) only if it is already been [captured](?path=docs/Resources/API-Documents/Payments/Capture.md), otherwise submit a [void request](?path=docs/Resources/API-Documents/Payments/Cancel.md).

---

## Submit a Refunds API pre-authorization request

<!-- theme: danger -->
> All online refunds not submitted with `captureFlag` *true* require a subsequent [Refunds API capture request](#submit-a-refunds-api-capture-request) to complete the settlement of the authorized refund.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful Refunds API authorization request using `captureFlag`: *false*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/refunds).

<!-- theme: success -->
> **POST** `/payments/v1/refunds`

```json
{
  "referenceTransactionDetails": {
    "referenceTransactionId": "84356531348"
  },
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": false
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!--
type: tab
-->

Example of a pre-authorization Refunds API *(201: Created)* response.

<!-- theme: info -->
> See [response handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "REFUND",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "merchantName": "Merchant Name",
    "merchantAddress": "123 Peach Ave",
    "merchantCity": "Atlanta",
    "merchantStateOrProvince": "GA",
    "merchantPostalCode": "12345",
    "merchantCountry": "US",
    "merchantURL": "https://www.somedomain.com",
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "merchantInvoiceNumber": "123456789012"
  }
}
```

<!-- type: tab-end -->

---

## Submit a Refunds API capture request

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful Refunds API capture request using a `referenceTransactionId` and `captureFlag`: *true*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/refunds).

<!-- theme: success -->
> **POST** `/payments/v1/refunds`

```json
{
  "referenceTransactionDetails": {
    "referenceTransactionId": "84356531348"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!--
type: tab
-->

Example of a Refunds API capture (201: Created) response.

<!-- theme: info -->
> See [response handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "REFUND",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "merchantName": "Merchant Name",
    "merchantAddress": "123 Peach Ave",
    "merchantCity": "Atlanta",
    "merchantStateOrProvince": "GA",
    "merchantPostalCode": "12345",
    "merchantCountry": "US",
    "merchantURL": "https://www.somedomain.com",
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "merchantInvoiceNumber": "123456789012"
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request variables

A refund request is initiated by sending the `referenceTransactionDetails` in the payload and may contain the `amount` object based on the refund type.

<!-- theme: warning -->
> In-person PIN based [EMV](?path=docs/In-Person/Encrypted-Payments/EMV.md#pin-based-transactions) and [Track](?path=docs/In-Person/Encrypted-Payments/Track.md#pin-based-transactions) refunds require the payment source including `encryptionData` and `pinBlock`.

<!-- 
type: tab
titles: referenceTransactionDetails, amount, transactionDetails, merchantDetails
-->

The below table identifies the available parameters in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request.

| Variable | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction. |
| `referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |

<!--
type: tab
-->

The below table identifies the parameters in the `amount` object.

| Variable | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `total` | *number* |  | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | ISO 3 digit [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `captureFlag` | *string* | 5 | Designates if the transaction should be captured (*true* for Refund and *false* for Pre-Authorization)|

<!-- theme: info -->
> If `captureflag` is not sent the default function is *true* when online authorization is enabled in Merchant Boarding and Configuration. Please see your account representative for more information.

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `merchantId` | *string* | 1024 | A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md)|

<!-- type: tab-end -->

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Custom Identifiers](?path=docs/Resources/Guides/BYOID.md)
- [Refund Requests](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
