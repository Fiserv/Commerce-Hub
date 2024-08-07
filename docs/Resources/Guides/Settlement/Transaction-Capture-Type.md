---
tags: [Settlement, Host Capture, Terminal Capture, Direct Settlement]
---

# Transaction Capture Type

Commerce Hub allows a merchant to determine the settlement type by defining the transaction capture type in the Merchant Boarding and Configuration, or the merchant can manually override the capture type by sending the `transactionCaptureType` in `transactionDetails`.

<!-- theme: info -->
> For more information on transaction settlement, please contact your account representative.

<!-- theme: warning -->
> Commerce Hub currently only supports manual override of the processing network, Marketplace Boarding and Configuration will be enhanced to support Hybrid Card Routing in the future.

##### Transaction Capture Type

Capture type determines how the transaction is submitted to the settlement system for processing and funding.

| Value | Description |
| ---- | -------- |
| HOST | [Host capture](?path=docs/Resources/FAQs-Glossary/Glossary.md#host-capture), the host or processor (e.g. Buypass) will settle the transaction. |
| GATEWAY | [Gateway capture](?path=docs/Resources/FAQs-Glossary/Glossary.md#gateway-capture), Commerce Hub will settle the transaction. |
| TERMINAL_DIRECT | Terminal direct capture also known as [direct capture](?path=docs/Resources/FAQs-Glossary/Glossary.md#direct-capture), the merchant or the merchant's terminal will settle directly to the backend processor. |

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a charge payload request using `transactionCaptureType`. 

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS....",
      "deviceType": "INGENICO",
      "keyId": ""
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "transactionCaptureType": "HOST"
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
    "sourceType": "PaymentEMV",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "02",
      "expirationYear": "2035"
    },
    "emvData": "8a0230309f36020073910a1be55403be070aa53030"
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
    "transactionCaptureType": "HOST"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)
- [Directed Routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md)

---
