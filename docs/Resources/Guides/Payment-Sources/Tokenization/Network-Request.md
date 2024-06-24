---
tags: [Network Token, Online, Web, Mobile, Card Not Present, Payment Source]
---

# Network Token - Merchant Managed

Commerce Hub enables merchants to transmit merchant managed network token results obtained through a third-party provider seamlessly when initiating [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) requests. Merchants utilize *PaymentToken* as the [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) when forwarding transactions to Commerce Hub.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry *(PCI)* Compliance capabilities to process and store card data.

---

## PaymentToken Request

The merchant can use the saved network token data in order to imitate a [subsequent transaction request](#see-also) using *PaymentToken* as the `sourceType`.

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful network token [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using *PaymentToken*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 13.5,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "1234560000000019",
    "tokenSource": "NETWORK_TOKEN",
    "card": {
      "expirationMonth": "10",
      "expirationYear": "2030"
    },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "terminalId": "10000001",
    "merchantId": "100008000003683"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of a charges (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "orderId": "RKOrdID-525133851837",
      "transactionId": "84356531338",
      "transactionTimestamp": "2021-06-20T23:42:48Z"
    },
    "transactionState": "AUTHORIZED",
    "transactionType": "CHARGE"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "currency": "USD",
      "total": "12.04"
    },
    "processorResponseDetails": {
      "approvalCode": "OK5882",
      "approvalStatus": "APPROVED",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      },
      "host": "NASHVILLE",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "processor": "FISERV",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "schemeTransactionId": "0225MCC625628"
    }
  },
  "source": {
    "card": {
      "bin": "40055500",
      "expirationMonth": "10",
      "expirationYear": "30",
      "last4": "0019",
      "scheme": "VISA"
    },
    "sourceType": "PaymentToken",
    "tokenData": "1234560000000019",
    "tokenSource": "NETWORK_TOKEN",
    "cryptogram": "AAABCZIhcQAAAABZlyFxAAAAAAA",
    "tokenRequestorId": "AAAFGFDG",
    "tokenAssuranceMethod": "10"
  },
  "transactionDetails": {
    "captureFlag": true
  }
}
```

<!-- type: tab-end -->

---

### Parameters

#### Request Variables

<!-- theme: info -->
> It is recommended that the merchant captures the [encrypted CVV](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md) if available from the customer for security and validation purposes.

<!--
type: tab
titles: source, card
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| ----- | :----: | :-----: | :-----: | ----- |
| `sourceType` | *string* | 15 | &#10004; | The source is *PaymentToken* |
| `tokenData` | *string* | 2048 | &#10004; | Network token created from third-party provider |
| `tokenSource` | *string* | 256 | &#10004; | The token source is *NETWORK_TOKEN* |
| `cryptogram` | *string* | 256 | | Cryptographic value that is sent by the merchant during payment authentication |
| `tokenRequestid` | *string* | 256 | | The token requestor ID is an identifier used by merchants to request network tokens from the card networks |
| `tokenAssuranceMethod` | *string* | 256 | | The token assurance method can be returned in the authorization response |
| `card` | *object* | N/A | &#10004; | [Card](?path=docs/Resources/Master-Data/Card.md) subcomponent objects |

<!--
type: tab
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type| Maximum Length | Required | Description |
| ----- | :-----: | :-----: | :-----: | ----- |
| `expirationMonth` | *string* | 2 | &#10004; | Card expiration month |
| `expirationYear` | *string* | 4 | &#10004; | Card expiration year |

<!-- type: tab-end -->

---

#### Response Variables

<!--
type: tab
titles: paymentToken
-->

The below table identifies the parameters in the `paymentToken` object.

| Variable | Type | Maximum Length | Description |
| ----- | :-----: | :-----: | ----- |
| `tokenAssuranceMethod` | *string* | 256 | The token assurance method can be returned in the authorization response |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)
- [Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
- [Multi Use Public Key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md)

---
