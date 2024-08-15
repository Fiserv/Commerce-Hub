---
tags: [Directed Routing, Network, Processor]
---

# Directed Routing

Directed Routing allows merchants to override the [standard transaction routing](?path=docs/Resources/Guides/Transaction-Routing/Intelligent-Routing.md) and send transactions to a specific processor or network based on cost, approval rates, liability shift and ticket size.

---

## Directed Routing Request

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful Directed Routing request using a *PaymentCard*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
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
  "additionalDataCommon": {
    "directedRouting": {
      "network": "VISA",
      "cardFunction": "CREDIT",
      "processors": [
        {
          "processorName": "FISERV",
          "processingPlatform": "NASHVILLE",
          "priority": "PRIMARY"
        },
        {
          "processorName": "CHASE",
          "processingPlatform": "TAMPA",
          "priority": "SECONDARY"
        }
      ]
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```
<!--
type: tab
-->

Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "POS",
    "transactionProcessingDetails": {
      "orderId": "CHG01864c3cb65c824d99b7f297505f914605",
      "transactionTimestamp": "2021-11-30T21:26:14.90396Z",
      "apiTraceId": "635866b3fc244917aa864fbc5baaae18",
      "clientRequestId": "4324974",
      "transactionId": "635866b3fc244917aa864fbc5baaae18"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2024",
      "bin": "401200",
      "last4": "0026",
      "scheme": "Visa"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK123C",
      "referenceNumber": "4fbc5baaae18",
      "processor": "FISERV",
      "networkRouted": "VISA",
      "networkInternationalId": "0001",
      "responseCode": "000",
      "responseMessage": "Approved",
      "host": "NASHVILLE",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL ",
      "bankAssociationDetails": {
        "associationResponseCode": "00"
      }
    }
  },
  "transactionDetails": {
    "captureFlag": false
  }
}
```

<!-- type: tab-end -->

---

### Parameters

#### Request Variables

The `directedRouting` object is part of the `additionalDataCommon` object.

<!--
type: tab
titles: directedRouting, processors
-->

The below table identifies the required parameters in the `directedRouting` object.

| Variable | Type | Max Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `network` | *string* | 16 | Identifies the debit card processing network. **Valid Values:** NYCE, PULSE, VISA |
| `cardFunction` | *string* | 6 | Identifies if the processing method is CREDIT or DEBIT |
| `processors` | *array* | N/A  | Identifies the processor or processors for Directed Routing. |

<!--
type: tab
-->

The below table identifies the required parameters in the `processors` array.

| Variable | Type | Max Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `processorName` | *string* | 256 | Identifies the payment processor. |
| `processingPlatform` | *string* | 256 | Identifies the payment platform of the processor. |
| `priority` | *string* | 256 | Identifies the priority to use each processor. |

##### Procssor and Platform Combinations

The below table identifies the valid values and combinations for `processorName` and `processingPlatform`.

| Processor | Platforms |
| ----- | ----- |
| *FISERV* | *NASHVILLE* |
| *CHASE* | *TAMPA*, *SALEM* |
| *CITI* | *PRIVATE_LABEL* |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Additional Data](?path=docs/Resources/Master-Data/Additional-Data.md)
- [Basic Routing](?path=docs/Resources/Guides/Transaction-Routing/Intelligent-Routing.md)
- [Hybrid Card Routing](?path=docs/Resources/Guides/Settlement/Transaction-Capture-Type.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Partner Tokens](?path=docs/Resources/API-Documents/Payments_VAS/Get-Proccesor-Token.md)

---
