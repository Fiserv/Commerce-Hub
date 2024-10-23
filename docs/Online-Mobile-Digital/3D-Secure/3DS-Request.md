---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Payment Source]
---

# 3-D Secure Request

Commerce Hub allows a merchant to pass the 3-D Secure *(3DS)* authentication results that were obtained through a Commerce Hub or a third-party 3-D Secure provider when sending a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request. The [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) *PaymentCard* and *PaymentToken* or [reference transaction identifier](#request-with-reference-identifier) is used by the merchant as  when sending the transaction to Commerce Hub, along with the 3DS response data.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry *(PCI)* Compliance capabilities to process and store card data.

---

## Request with PaymentSource

A request using `PaymentSource` requires sending the `additionalData3DS` data that is acquired through Commerce Hub or a third-party 3-D Secure provider listed in the table below.

### Request Variables

<!--
type: tab
titles: source, additionalData3DS
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Max Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are *PaymentSession*, *PaymentCard*, or *PaymentToken* |

<!--
type: tab
-->

The below table identifies the required parameters in the `additionalData3DS` object.

| Variable | Type | Max Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `dsTransactionId` | *string* | 60 | Unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction |
| `authenticationStatus` | *string* | 2 | The result of authentication attempt returned by the 3D Secure authentication process (PaRes). |
| `authenticationAttemptResult` | *string* | 1024 | Result of authentication attempt from Payer Authentication Response (PaRes). 3DS 1.x |
| `mpiData` | *object* | N/A | Merchant plug-in (MPI) data from 3-D Secure (3DS) authentication. |
| `versionData` | *object* | N/A | Additional version data passed during 3-D Secure (3DS) flows. |

The below table identifies the `mpiData` parameters in the `additionalData3DS` object.

| Variable | Type | Max Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `cavv` | *string* | 256 | The Cardholder Authentication Verification Value (CAVV) is a cryptographic value derived by the issuer during payment authentication that can provide evidence of the results of payment authentication during an online purchase. |
| `xid` | *string* | 512 | 3-D Secure value returned by service provider e.g. Cardinal Commerce. |
| `eci` | *string* | 256 | Payment system-specific value provided by the Access Control Server (ACS) or Directory Server (DS) to indicate the results of the attempt to authenticate the cardholder. |
| `tavv` | *string* | 512 | Cryptographic value that is generated during the Visa transaction authentication process for a payment token transaction. |

The below table identifies the `versionData` parameters in the `additionalData3DS` object.

| Variable | Type | Max Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `recommendedVersion` | *string* | 6 | Recommended 3DS version as specified by the card issuer. |

<!-- type: tab-end -->

---

### Request Types

After authentication has been completed with the 3DS provider, submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), or [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) request based on the requirements.

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of charges payload request with 3DS authentication data

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
    "merchantId": "100008000003683",
    "terminalId": "10000001"
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

If the 3DS [authentication request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md) was originally performed by using Commerce Hub's [Checkout](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Secure-Data-Capture.md) or [API](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-API-Only.md), the reference transaction identifier can be used to submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request.

---

### Request Variables

<!--
type: tab
titles: referenceTransactionDetails, merchantDetails
-->

The below table identifies the available parameters in the `referenceTransactionDetails` object.

<!-- theme: info -->
> Only a single transaction identifier should be passed within the request.

| Variable | Data Type| Max Length |Description |
|---------|----------|----------------|---------|
| `referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction. |
| `referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |

<!--
type: tab
-->

The below table identifies the available parameters in the `merchantDetails` object.

| Variable | Data Type| Max Length |Description |
|---------|----------|----------------|---------|
| `merchantId` | *string* | 1024 | A unique ID used to identify the merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |

<!-- type: tab-end -->

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of charges payload request using a reference identifier

```json
{
  "referenceTransactionDetails": {
    "referenceTransactionId": "84356531348"
  },
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
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
      "total": 12.04,
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
- [Custom Identifiers](?path=docsdocs/Resources/Guides/BYOID.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
