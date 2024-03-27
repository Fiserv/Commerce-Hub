---
tags: [Stored Credentials, Token, Tokenization, API Reference]
---

# Mail Order Telephone Order (MOTO)

Mail Order Telephone Order (MOTO)- a remote transaction where the physical card is not present and the customer provides payment details to complete the transaction.

<!-- theme: warning -->
> Customer/consumer will provide the payment details of credit card through email, regular mail, telephone, or fax to complete the transaction.

<!-- theme: warning -->
> Merchant initiates a payment request via some virtual point of sale and sends to Commerce Hub
---

### Mimimum Requirements

<!-- theme: warning -->
Add This 

### Requirements

<!--
type: tab
titles: amount, source, card
-->

The below table identifies the required parameters in the `amount` object.

|Variable |  Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `total` | _number_ | 12 | Total amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | _string_ | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|---|
| `sourceType` | _string_ | 15 | &#10004; |Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md). |
| `card` | _object_ | | &#10004; | [Card](?path=docs/Resources/Master-Data/Card.md) subcomponent objects. |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionInteraction` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|---|
| `origin` | *string* | 4 | The source of the transaction |
| `mototype` | *string* | N/A | Defines the type of MOTO transaction when origin is MOTO. |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/tokens`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a MOTO only payload request.

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035"
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "merchantInvoiceNumber": "123456789012"
  },
  "transactionInteraction": {
    "origin": "MOTO",
    "motoType": "PHONE"
  },
  "merchantDetails": {
    "terminalId": "123456",
    "merchantId": "123456789012345"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/tokens)

<!--
type: tab
-->

Example of a MOTO (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "MOTO",
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
    "captureFlag": true,
    "merchantInvoiceNumber": "123456789012"
  }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/tokens)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Card Meta Data](?path=docs/Resources/Master-Data/Card-Details.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Account Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
