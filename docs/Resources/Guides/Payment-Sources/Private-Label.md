---
tags: [Private Label, Payment Sources]
---


# Private Label

A private label credit card (PLCC) is a type of credit card that is intended for use at a specific retailer. Merchants partner with PLCC issuers like Citi. to qualify customers and extend them a credit card account.

- **Exclusive:** Can only be used at the retailer that issued the card. Provides special financing or promotional offers at the retailer.
- **Co-Branded:** Can be used at the retailer that issued the card or any store that supports the network. Provides special financing and promotional offers only at the retailer who issued the card. Some cards may allow customers to earn loyalty discounts, points, perks, and deals within the network.

Processing PLCC transactions is similar to processing normal credit card transactions, except for the initial charges and refund requests. Cancels and settlements are the same for PLCCs and normal credit cards.

<!-- theme: warning -->
> Currently, only direct send settlement model is supported. Merchants must submit the settlement batch file directly to the processor. Commerce Hub will not have access to transaction completion, therefore refunds will need to be submitted as an open refund. For more information, please contact your account representative.

---

## Request Variables

The `privateLabel` object is part of the `additionalDataCommon` object.

<!--
type: tab
titles: privateLabel, JSON Example
-->

The below table identifies the conditional parameters in the `privateLabel` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `paymentSource` | *string* | 256 | Identifies the private label card source. |
| `paymentType` | *string* | 16 | Identifies if the Type of transaction. |
| `specialFinanceIndicator` | *string* | 16  | Indicates if special finance term and rate in month/rate format. |
| `creditPlanNumber` | *string* | 5  | Payment program assigned by the private label processor. |
| `minimumSpendExemptIndicator` | *string* | N/A  | Indicates if the customer is exempt from the mimimum spend amount. ***Valid Values:** EXEMPT, NOT_EXEMPT* |

<!--
type: tab
-->

```json

{
  "additionalDataCommon": {
    "privateLabel": {
      "paymentSource": "SHELL",
      "paymentType": "CHARGE",
      "specialFinanceIndicator": "24/0"
      "creditPlanNumber": "12345"
      "minimumSpendExemptIndicator": "EXEMPT"
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

##### Example of a charge payload request using a PLCC.

<!-- info -->
> PLCC transactions routed to Citi require additional fields in `transactionInteraction`; `posEntyMode`, `posConditionCode`, and `motoType` when the `origin` is _MOTO_.

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
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
