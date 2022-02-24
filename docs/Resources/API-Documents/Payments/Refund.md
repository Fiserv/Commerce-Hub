---
tags: [carat, commerce-hub, enterprise, full-refund, payments, partial-refund, refund,api-reference,]
---

# Refund

If the customer returns product or requests to cancel the transaction after the batch has been settled, the merchant will need to release the original authorization by issuing a refund request to the original `transactionId` or `orderId`. Refunds can be initiated for the full amount or a partial amount of the original authorization.

<!-- theme: danger -->
>Refund Request can be initiated against a [charge](?path=docs/Resources/API-Documents/Payments/Charges.md) only if it is already been [captured](?path=docs/Resources/API-Documents/Payments/Capture.md) and settled, otherwise submit a [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) request.

<!-- theme: warning -->
> Based on the issuing bank timeframe, refund may take 3-5 days to process and reflect on the customer's account.

---

## Minimum Requirements

A refund request can be initiated by sending the request to the appropriate endpoint by providing valid `transactionId`. The request may contain the `amount` object based on the refund type.

#### Refund Types

- **Partial Refund:** A request submitted with the `amount` object for a partial `total`.
- **Full Refund:** Can be submitted without the `amount` object to refund the full `total`, or submitted with the `amount` object for the full `total`.


<!--
type: tab
title: amount
-->

The below table identifies the required parameters in the `amount` object.

| Variable | Type | Maximum Length | Description |
| -------- | -- | ------------ | ------------------ |
| `total` | *number* |  | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | ISO 3 digit [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) |

<!--
type: tab
title: merchantDetails
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---

## Endpoint

Use the below endpoint based on the [transaction type](?path=docs/Resources/Guides/Transaction-Types.md).

<!-- theme: success -->
>**POST** `/payments/v1/charges/{transactionId}/refund`

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a Parital Refund Payload Request.

```json
{
  "amount": {
    "total": "1.50",
    "currency": "USD"
  },
  "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges/{transactionId}/refund)


<!--
type: tab
title: Response
-->

##### Example of a Partial Refund (201: Success) Response.

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
      "processor": "fiserv",
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

- [API Explorer](../api/?type=post&path=/payments/v1/refund)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Credit Request](?path=docs/Resources/API-Documents/Payments/Credit.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
