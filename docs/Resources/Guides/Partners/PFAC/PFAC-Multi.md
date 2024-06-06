---
tags: [Payment Facilitator, Partners]
---

# Payment Facilitator Multi-MID

In a multi-MID payment facilitator *(PayFac)* model the PayFac and sub-merchants are assigned their own `merchantId` by Commerce Hub. The PayFac will aggregate the transactions on behalf of the sub-merchant using the merchant's MID. This model allows the PayFac to have flexible funding and [settlement](?path=docs/Resources/Guides/Partners/PFAC/Split-Settlement.md) options and offer a suite of services to their sub-merchant portfolio.

---

## Request Variables

<!-- theme: info -->
> The following variables are also required when submitting a [capture](?path=docs/Resources/API-Documents/Payments/Capture.md) request.

<!--
type: tab
titles: merchantDetails
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Description |
| --------- | ---------- | -------- | ----- |
| `merchantId` | *string* | 1024 | A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md)|

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a PayFac Multi-MID charges payload request.

```json
{
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
  "amount": {
    "total": 80,
    "currency": "USD"
  },
  "transactionDetails": {
    "captureFlag": true,
    "createToken": true
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&payments-vas/v1/accounts/gift-cards)

<!--
type: tab
-->

Example of a PayFac Multi-MID charges (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG0194cb628f83db3c6f8f947fca45e626e5",
      "transactionTimestamp": "2023-10-26T17:57:32.186136941Z",
      "apiTraceId": "248670cda571448f9d597f2f8f725681",
      "clientRequestId": "08299e6ddb9307c5a0f49d2bf3b5c837",
      "transactionId": "248670cda571448f9d597f2f8f725681"
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
      "total": 80,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK410C",
      "referenceNumber": "7f2f8f725681",
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
    "captureFlag": true,
    "transactionCaptureType": "host",
    "partialApproval": true,
    "processingCode": "000000",
    "transactionCutTimeStamp": "2023-10-27T12:00:00Z",
    "createToken": true,
    "retrievalReferenceNumber": "7f2f8f725681"
  },
  "merchantDetails": {
    "tokenType": "BBY0",
    "terminalId": "10000001",
    "merchantId": "100004SUBPFACM1"
  },
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "cardLevelResultCode": "C",
    "validationCode": "IV  ",
    "transactionIdentifier": "013299935218843"
  }
}

```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Dynamic Descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Payment Facilitator](?path=docs/Resources/Guides/Partners/PFAC/Payment-Faciliator.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Split-Settlement](?path=docs/Resources/Guides/Partners/PFAC/Split-Settlement.md)

---
