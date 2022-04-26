---
tags: [carat, commerce-hub, enterprise, directed-routing, network, processor]
---

# Directed Routing

<!-- theme: danger -->
> We are enhancing the Commerce Hub to include directed routing support and the documents related to the feature will be updated frequently.

Directed Routing allows merchants to send transactions to a specific processor or network based on cost, approval rates, liability shift and ticket size.


## Request Variables

The `directedRouting` is part of the `additionalDataCommon` object.

<!--
type: tab
titles: directedRouting, processors, JSON Example
-->

The below table identifies the required parameters in the `directedRouting` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `network` | *string* | 16 | Identifies the debit card processing network. **Valid Values:** NYCE, PULSE, VISA |
| `cardFunction` | *string* | 6 | Identifies if the processing method is CREDIT or DEBIT |
| `processors` | *array* | N/A  | Identifies the processor or processors for Directed Routing. |

<!--
type: tab
-->

The below table identifies the required parameters in the `processors` array.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `processorName` | *string* | 256 | Identifies the payment processor. **Valid Values:** FISERV, CHASE |
| `processingPlatform` | *string* | 256 | Identifies the payment platform of the processor. **Valid Values:** NASHVILLE, TAMPA, SALEM |
| `priority` | *string* | 256 | Identifies the priority to use each processor. **Valid Values:** PRIMARY, SECONDARY |

<!--
type: tab
-->

```json

{
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
  }
}

```

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request using `directedRouting`.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "nameOnCard": "Jane Smith",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123",
      "securityCodeIndicator": "PROVIDED"
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
    "merchantId": "123456789789567",
    "terminalId": "123456"
  }
}
```
<!--
type: tab
-->

##### Example of a charge (201: Created) response.

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
    "sourceType": "PaymentTrack",
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
      "total": 10.56,
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
  },
  "merchantDetails": {
    "terminalId": "123456",
    "merchantId": "123456789789567"
  },
}
```

<!-- type: tab-end -->

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Additional Data](?path=docs/Resources/Master-Data/Additional-Data.md)

---
