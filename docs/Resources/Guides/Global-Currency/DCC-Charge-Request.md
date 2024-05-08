---
tags: [Currency Conversion, Charges, Dynamic Currency Conversion, Global Currency]
---

# Dynamic Currency Conversion - Charges Request

After obtaining the required rate information by submitting either a request using the [BIN](?path=docs/Resources/Guides/Global-Currency/DCC-BIN-Rate-Request.md) or [currency](?path=docs/Resources/Guides/Global-Currency/DCC-Currency-Rate-Request.md), the merchant will need to submit a [payment request](?path=docs/Resources/API-Documents/Payments/Payments.md) using the rate details object.

---

## Payload Example

The example below contains the minimum [parameters](#parameters) for a successful DCC charges request using the currency rate details. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: info -->
> The response does not contain the converted `total` or `currency` in the `receipt` object. You should retain the `targetAmount` details from the DCC rate request to display on the customer's receipt.

<!--
type: tab
titles: Request, Response
-->

Example of a DCC charges payload request.

```json
{
  "amount": {
    "total": 115.12,
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
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "dccApplied": "APRROVED_CONVERSION",
  },
  "rate": {
    "referenceId": "f2e2df18ec1a4b0fb5213ecb0d52d920",
  },
  "merchantDetails": {
    "merchantId": "10001POD0212780",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of a DCC charges (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01f5ba9002e46214fa9fd0468f40f01562",
      "transactionTimestamp": "2024-03-21T18:08:54.535978067Z",
      "apiTraceId": "bd9793f8b5ff4129af1ba7c3362e0cc8",
      "clientRequestId": "8955613",
      "transactionId": "bd9793f8b5ff4129af1ba7c3362e0cc8"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 115.12,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK0047",
      "referenceNumber": "a7c3362e0cc8",
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
  "shippingAddress": {
    "firstName": "John",
    "lastName": "Doe",
    "address": {
      "street": "112 Main St.",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30301",
      "country": "US"
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "transactionCaptureType": "gateway",
    "createToken": false,
    "retrievalReferenceNumber": "a7c3362e0cc8",
    "processingCode": "000000",
    "transactionCutTimeStamp": "2024-03-21T21:30:00Z"
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM",
    "authorizationCharacteristicsIndicator": "N",
    "terminalTimestamp": "2024-03-13T16:04:00.770200127Z",
    "hostPosEntryMode": "010",
    "hostPosConditionCode": "59",
    "dccApplied": "APRROVED_CONVERSION"
  },
  "merchantDetails": {
    "terminalId": "10000001",
    "merchantId": "10001POD0212780"
  },
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "cardLevelResultCode": "",
    "validationCode": "IV  ",
    "transactionIdentifier": "014081168933594"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "400115",
      "last4": "0004",
      "scheme": "VISA"
    }
  },
  "rate": {
    "referenceId": "362866ac81864d7c9d1ff8b5aa6e98db",
    "provider": "VISA",
    "eligibility": "DCC_ELIGIBLE",
    "exchangeRate": "19.45",
    "margin": "3.45",
    "timestamp": "2016-04-16T16:06:05Z",
    "validFrom": "2016-04-16T16:06:05Z",
    "validTo": "2016-04-16T16:06:05Z"
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request Variables

<!--
type: tab
titles: transactionInteraction, rate
-->

The below table identifies the required parameters in the `transactionInteraction` object.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `dccApplied` | *string* | 26 | Indicates if the cardholder APPROVED_CONVERSION or DECLINED_CONVERSION for the DCC transaction |

<!--
type: tab
-->

The below table identifies the required parameters in the `rate` object.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `referenceId` | *string* | 64 | A unique identifier for a currencies transaction received from the rate request |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Rate Request by Currency](?path=docs/Resources/Guides/Global-Currency/DCC-Currency-Rate-Request.md)
- [Rate Request by Issuer](?path=docs/Resources/Guides/Global-Currency/DCC-BIN-Rate-Request.md)

---
