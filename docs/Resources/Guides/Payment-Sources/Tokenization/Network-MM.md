---
tags: [Network Token, Online, Web, Mobile, Card Not Present, Payment Source]
---

# Network Token - Merchant Managed

Commerce Hub allows a merchant to pass a merchant managed Network Token results that were obtained through a Commerce Hub or a third-party 3-D Secure provider when sending a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request. The [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) _PaymentCard_ and _PaymentToken_ or [reference transaction identifier](#request-with-reference-identifier) is used by the merchant as  when sending the transaction to Commerce Hub, along with the 3DS response data.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry _(PCI)_ Compliance capabilities to process and store card data.

---

## Parameters

### Request Variables

<!-- theme: warning -->
> It is required that the merchant captures encrypted CVV if available customer for security and validation purposes.

<!--
type: tab
titles: source, transactionDetails
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | _string_ | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are _PaymentSession_, _PaymentCard_, or _PaymentToken_ |
| `tokenData` | _string_ | 2048 | Token created from the payment source |
| `tokenSource` | _string_ | 256 | Source for the Token Service Provider (TSP). |
| `cryptogram` | _string_ | 256 | Cryptographic value that is sent by the merchant during payment authentication |
| `tokenRequestid` | _string_ | 256 | Token Requestor ID, an identifier used by merchants to request network tokens from the card networks. |
| `tokenAssuranceMethod` | _string_ | 256 | Token Assurance Method will be returned back to merchants in auth response. |

<!--
type: tab
-->

The below table identifies the parameters in the `transactionDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | ------------------ |
| `merchantTransactionId` | _sting_ | 128 | Merchant transaction ID (aka transaction reference ID). |
| `merchantOrderId` | _string_ | 128 | Merchant order ID (aka customer reference number or purchase order (PO) number).|
| `primaryTransactionType` | _string_ | 32 | Identifies the primary transaction type |
| `tokenprovider` | _string_ | 256 | Source for the Token Service Provider (TSP) |

---

### Response Variables

<!--
type: tab
titles: source
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `tokenAssuranceMethod` | _string_ | 256 | Token Assurance Method will be returned back to merchants in auth response. |

---

### Request Types

After authentication has been completed with the 3DS provider, submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), or [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) request based on the requirements.

<!-- type: tab-end -->

---

### Payload Example

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
    "terminalId": "12",
    "merchantId": "123456789012345"
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
  },
  "merchantDetails": {
    "terminalId": "12",
    "merchantId": "123456789012345"
  }
}

```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Additional Data 3DS](?path=docs/Resources/Master-Data/Additional-Data-3DS.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Stored Credentials](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
