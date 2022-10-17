---
tags: [Settlement, Host Capture, Terminal Capture, Direct Settlement]
---

# Transaction Capture Type

Commerce Hub allows a merchant to determine the settlement type by defining the transaction capture type in the Merchant Boarding and Configuration, or the merchant can manually override the capture type by sending the `transactionCaptureType` in `transactionDetails`.

<!-- theme: info -->
> For more information on transaction settlement, please contact your account representative.

<!-- theme: warning -->
> Commerce Hub currently only supports manual override of the processing network, Marketplace Boarding and Configuration will be enhanced to support Hybrid Card Routing in the future.

#### Transaction Capture Type

Capture type determines how the transaction is submitted to the settlement system for processing and funding.

| Value | Description |
| ---- | -------- |
| HCS | [Host capture system](?path=docs/Resources/FAQs-Glossary/Glossary.md#host-capture), will route the transaction to the debit network. |
| TCS | [Terminal capture system](?path=docs/Resources/FAQs-Glossary/Glossary.md#terminal-capture), will route the transaction to the credit network. |
| DIRECT | [Direct settelment](?path=docs/Resources/FAQs-Glossary/Glossary.md#direct-capture), will route the transaction to the credit network. |

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request using `transactionCaptureType`.

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
    "captureFlag": true,
    "transactionCaptureType": "HCS"
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
      "bin": "400555",
      "last4": "0019",
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
    "captureFlag": true,
    "transactionCaptureType": "HCS"
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
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)
- [Directed Routing](?path=docs/Resources/Guides/Routing/Directed-Routing.md)

---