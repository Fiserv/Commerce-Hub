---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Payment Source]
---

# 3-D Secure Request

Commerce Hub allows a merchant to pass the 3-D Secure _(3DS)_ authentication results that were obtained through a Commerce Hub or a third-party 3-D Secure provider when sending a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request. _PaymentCard_ or _PaymentToken_ is used by the merchant as the [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) when sending the transaction to Commerce Hub, along with the 3DS response data.

Commerce Hub supports 3DS request from merchants using one of the two options below;

- **Merchant Managed:** the merchant is directly integrated with a third-party system to perform 3DS authentication. The merchant will send the 3DS authentication data to Commerce Hub. Commerce Hub will pass this information to issuer during the transaction request.
- **Commerce Hub Managed:** the merchant will use one of Commerce Hub's [3DS solutions](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md) to perform 3DS authentication and transaction authorization.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry _(PCI)_ Compliance capabilities to process and store card data.

---

## Request with PaymentSource

A request using `PaymentSource` requires sending the `additionalData3DS` data that is acquired through Commerce Hub or a third-party 3-D Secure provider listed in the table below.

### Request Variables

The below table identifies the parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are *PaymentSession*, *PaymentCard*, or *PaymentToken* |

The below table identifies the required parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `dsTransactionId` | _string_ | 60 | Unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction |
| `authenticationStatus` | _string_ | 2 | The result of authentication attempt returned by the 3D Secure authentication process (PaRes). |
| `authenticationAttemptResult` | _string_ | 1024 | Result of authentication attempt from Payer Authentication Response (PaRes). 3DS 1.x |
| `mpiData` | _object_ | N/A | Merchant plug-in (MPI) data from 3-D Secure (3DS) authentication. |
| `versionData` | _object_ | N/A | Additional version data passed during 3-D Secure (3DS) flows. |

The below table identifies the `mpiData` parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `cavv` | _string_ | 256 | The Cardholder Authentication Verification Value (CAVV) is a cryptographic value derived by the issuer during payment authentication that can provide evidence of the results of payment authentication during an online purchase. |
| `xid` | _string_ | 512 | 3-D Secure value returned by service provider e.g. Cardinal Commerce. |
| `eci` | _string_ | 256 | Payment system-specific value provided by the Access Control Server (ACS) or Directory Server (DS) to indicate the results of the attempt to authenticate the cardholder. |
| `tavv` | _string_ | 512 | Cryptographic value that is generated during the Visa transaction authentication process for a payment token transaction. |

The below table identifies the `versionData` parameters in the `additionalData3DS` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `recommendedVersion` | _string_ | 6 | Recommended 3DS version as specified by the card issuer. |

<!-- type: tab-end -->

---

### Endpoint

<!-- theme: success -->
> **POST** `/payments/v1/charges`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

#### Example of charges payload request with 3DS authentication data

```json
{
  "amount": {
    "total": 6,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "additionalData3DS": {
    "dsTransactionId": "3543-b90d-d6dc1765c98",
    "authenticationStatus": "A",
    "authenticationAttemptResult": "uyt45t89cnwu3rhc98a4hterjklth4o8ctsrjzth4",
    "mpiData": {
      "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
      "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695",
      "tavv": "AAABCZIhcQAAAABZlyFxAAAAAAA"
    },
    "versionData": {
      "recommendedVersion": "2.2.0"
    }
  },
  "transactionDetails": {
    "captureFlag": false
  },
  "transactionInteraction": {
    "eciIndicator": "SECURE_ECOM"
  },
  "merchantDetails": {
    "merchantId": "100009000000202",
    "terminalId": "00000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

#### Example of a charges (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG016bf4014790ae4542af01d2bfb82c2371",
      "transactionTimestamp": "2022-07-01T17:42:28.651979Z",
      "apiTraceId": "1bc2f7471fa746708667e4bff79f016e",
      "clientRequestId": "ed50be7a2b3638e2f5e8270075c326cb",
      "transactionId": "1bc2f7471fa746708667e4bff79f016e"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "401200",
      "last4": "0026",
      "scheme": "VISA"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 6,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK973C",
      "referenceNumber": "e4bff79f016e",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "networkRouted": "VISA",
      "networkInternationalId": "0001",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL"
    }
  },
  "transactionDetails": {
    "captureFlag": false
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "cardLevelResultCode": "C",
    "validationCode": "G205",
    "transactionIdentifier": "012182063695002"
  }
}

```

<!-- type: tab-end -->

---

## Request with Reference Identifier

If the 3DS [authentication request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md) was originally performed by using Commerce Hub's [Secure Data Capture](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Secure-Data-Capture.md) or [API](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-API-Only.md), the reference transaction identifier can be used to submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request.

---

### Request Variables

<!--
type: tab
titles: referenceTransactionDetails, merchantDetails
-->

The below table identifies the available parameters in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `referenceTransactionId` | _string_ | 40 | Commerce Hub generated `transactionId` from the original transaction. |
| `referenceMerchantTransactionId` | _string_ | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |

<!--
type: tab
-->

The below table identifies the available parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `merchantId` | _string_ | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | _string_ | N/A | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!-- type: tab-end -->

---

### Endpoint

<!-- theme: success -->
> **POST** `/payments/v1/charges`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

#### Example of charges payload request using a referece identifier

```json
{
  "referenceTransactionDetails": {
    "referenceTransactionId": "84356531348"
  },
{
  "amount": {
    "total": "10.00",
    "currency": "USD"
  },
  "merchantDetails":{
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

#### Example of a charges (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG016bf4014790ae4542af01d2bfb82c2371",
      "transactionTimestamp": "2022-07-01T17:42:28.651979Z",
      "apiTraceId": "1bc2f7471fa746708667e4bff79f016e",
      "clientRequestId": "ed50be7a2b3638e2f5e8270075c326cb",
      "transactionId": "1bc2f7471fa746708667e4bff79f016e"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "401200",
      "last4": "0026",
      "scheme": "VISA"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 6,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK973C",
      "referenceNumber": "e4bff79f016e",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "networkRouted": "VISA",
      "networkInternationalId": "0001",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL"
    }
  },
  "transactionDetails": {
    "captureFlag": false
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "cardLevelResultCode": "C",
    "validationCode": "G205",
    "transactionIdentifier": "012182063695002"
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

---
