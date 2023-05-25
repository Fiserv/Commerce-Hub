---
tags: [Full Refund, Payments, Partial Refund, Refund, Authorization, Capture, Online Refund, API Reference]
---

# Auth/Capture Refund

Commerce Hub supports authorization messages for online refund transactions. This allows a merchant to process an [authorization request](#pre-auth-payload-example) and a subsequent [capture request](#capture-payload-example) at a later time using the Commerce Hub transaction identifier or [merchant transaction identifier](?path=docs/Resources/Guides/BYOID.md).

Similar to [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), online refunds can be initiated as a refund, pre-auth, or capture which is defined in the request by sending the `captureFlag` in `transactionDetails`.

- *false:* A pre-auth transaction, where the customer's funds will be reserved and a capture will be required to return the funds.
- *true:* A refund or subsequent capture transaction where the customer will be refunded the total amount, and funds returned.

<!-- theme: info -->
> If `captureflag` is not sent the default function is *true* when online authorization is enabled in Merchant Boarding and Configuration. Please see your account representative for more information.

---

## Refunds Using Referenced Identifier 

A refund request is initiated by sending the `referenceTransactionDetails` in the payload and may contain the `amount` object based on the refund type. 

### Request Variables

<!-- theme: warning -->
> In-person PIN based [EMV](?path=docs/In-Person/Encrypted-Payments/EMV.md#pin-based-transactions) and [Track](?path=docs/In-Person/Encrypted-Payments/Track.md#pin-based-transactions) refunds require the payment source including `encryptionData` and `pinBlock`.

<!-- 
type: tab
titles: referenceTransactionDetails, amount, transactionDetails, merchantDetails
-->

The below table identifies the available parameters in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request. 

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction. |
| `referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |
| `referenceTransactionType` | *string* | 64 | Identifies the type of the referenced transaction. **Valid Values:** _CHARGES_ |

<!--
type: tab
-->

The below table identifies the parameters in the `amount` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `total` | *number* |  | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | ISO 3 digit [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `captureFlag` | *string* | 5 | Designates if the transaction should be captured (*true* for Refund and *false* for Pre-Auth)|

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|-----|
| `merchantId` | *string* | 40 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | *string* | N/A | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---
### Endpoint

<!-- theme: success -->
> **POST** `/payments/v1/refunds`

---

### Pre-Auth Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of an authorization refund payload request.

```json

{
  "referenceTransactionDetails": {
    "referenceTransactionId": "84356531348"
  },
  "amount": {
    "total": "10.00",
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": false
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}

```
[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/refunds)

<!--
type: tab
-->

##### Example of an authorization refund (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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

### Capture Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a refund capture payload request.

```json

{
  "referenceTransactionDetails": {
    "referenceTransactionId": "84356531348"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}

```
[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/refunds)

<!--
type: tab
-->

##### Example of a refund capture (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/refunds)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Custom Identifiers](?path=docsdocs/Resources/Guides/BYOID.md)
- [Refund Requests](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---