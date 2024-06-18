---
tags: [Network Token, Online, Web, Mobile, Card Not Present, Payment Source]
---

# Network Token - Merchant Managed

Commerce Hub enables merchants to transmit merchant-managed Network Token results obtained through a third-party provider seamlessly when initiating [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request. Merchants utilize *PaymentToken* as the [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) when forwarding transactions to Commerce Hub.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry *(PCI)* Compliance capabilities to process and store card data.

---

## Payload Example

The example below contains the minimum [parameters](#parameters) for a successful network token [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) request using *PaymentToken*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

Example of charges payload request with Network Token

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
    "cryptogram": "AAABCZIhcQAAAABZlyFxAAAAAAA",
    "tokenRequestorId": "AAAFGFDG",
    "tokenAssuranceMethod": "10",
    "card": {
      "expirationMonth": "10",
      "expirationYear": "2030"
    },
    "encryptionData": {
      "keyId": "bf12e130ee1f37a22b5be1aa62b2a885f5e21f799a5d6f1356fdaef611f2d04a",
      "encryptionType": "RSA",
      "encryptionBlock": "IZywBkx9cxDY/KDxkG6zkZRxJdlEY7457hpMWOZunArcRuk34ZhpQ==",
      "encryptionBlockFields": "card.securityCode:3",
      "encryptionTarget": "MANUAL"
    }
  },
  "transactionDetails": {
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO",
    "primaryTransactionType": "CHARGE_SALE",
    "tokenProvider": "paze"
  },
  "billingAddress": {
    "firstName": "Jane",
    "lastName": "Smith"
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
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionTimestamp": "2016-04-16T16:06:05Z",
      "apiTraceId": "1234567a1234567b1234567c1234567d",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "source": {
    "sourceType": "PaymentToken"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 13.5,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK3483",
      "PAR": "string"
    },
    "merchantName": "string",
    "merchantAddress": "string"
  },
  "billingAddress": {
    "firstName": "Jane",
    "lastName": "Smith"
  },
  "transactionDetails": {
    "approvalCode": "string",
    "primaryTransactionId": "838916029301",
    "primaryTransactionType": "CHARGE_SALE"
  }
}

```

<!-- type: tab-end -->

---

## Parameters

### Request Variables

<!-- theme: info -->
> It is required that the merchant captures the [encrypted CVV](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md) if available from the customer for security and validation purposes.

<!--
type: tab
titles: source, transactionDetails
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | The source is *PaymentToken* |
| `tokenData` | *string* | 2048 | Token created from the payment source |
| `tokenSource` | *string* | 256 | The token source is *NETWORK_TOKEN* |
| `cryptogram` | *string* | 256 | Cryptographic value that is sent by the merchant during payment authentication |
| `tokenRequestid` | *string* | 256 | Token Requestor ID, an identifier used by merchants to request network tokens from the card networks. |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | ------------------ |
| `tokenProvider` | *string* | 256 | Source for the Token Service Provider (TSP) |

<!-- type: tab-end -->

---

### Response Variables

<!--
type: tab
titles: paymentToken
-->

The below table identifies the parameters in the `paymentToken` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `tokenAssuranceMethod` | *string* | 256 | Token Assurance Method will be returned back to merchants in auth response. |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Request](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)
- [Tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
- [Multi Use Public Key](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md)

---
