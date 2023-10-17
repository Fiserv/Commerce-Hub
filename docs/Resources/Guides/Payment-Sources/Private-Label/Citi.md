---
tags: [Private Label, Payment Sources]
---

# Citi Private Label  

A private label credit card (PLCC) is a type of credit card that is intended for use at a specific retailer. Merchants partner with PLCC issuers like Citi, Charge After to qualify customers and extend them a credit card account.

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
| `creditPlan` | *string* | 64 | Payment program assigned by the private label processor. |
| `minimumSpendExemptIndicator` | *string* | 32  | Indicates if the customer is exempt from the mimimum spend amount. ***Valid Values:** EXEMPT, NOT_EXEMPT* |

<!--
type: tab
-->

```json

{
  "additionalDataCommon": {
    "privateLabel": {
      "creditPlanNumber": "12345",
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
> PLCC transactions routed to Citi require the additional fields `posEntyMode`, `posConditionCode`, and when the `origin` is _MOTO_ `motoType` in [transaction interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md).

```json
{
  "amount": {
    "total": 1.56,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": 6035322542813757,
      "expirationMonth": 12,
      "expirationYear": 2049,
      "securityCode": 898
    }
  },
  "billingAddress": {
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
  "orderData": {
    "itemDetails": [
      {
        "insuranceClaimNumber": "63732",
        "department": "0",
        "subDepartment": "0",
        "departmentClass": "0",
        "departmentSubClass": "0"
      }
    ]
  },
  "customer": {
    "merchantCustomerId": "12345"
  },
  "transactionDetails": {
    "captureFlag": false,
    "merchantOrderId": "MS46LEG1027E5PX6",
    "merchantTransactionId": "VQZBLFK10EWJN04Z"
  },
  "transactionInteraction": {
    "origin": "MOTO",
    "motoType": "MAIL",
    "eciIndicator": "SECURE_ECOM",
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_MOTO",
    "terminalTimestamp": "2023-10-06T04:42:40Z",
    "additionalPosInformation": {
      "posFeatures": {
        "pinAuthenticationCapability": "UNSPECIFIED",
        "terminalEntryCapability": "UNSPECIFIED"
      }
    }
  },
  "merchantDetails": {
    "merchantId": "100012000001424",
    "terminalId": "10000001"
  },
  "additionalDataCommon": {
    "directedRouting": {
      "processors": [
        {
          "processorName": "CITI",
          "processingPlatform": "PRIVATE_LABEL",
          "priority": "PRIMARY"
        }
      ]
    },
    "privateLabel": {
      "minimumSpendExemptIndicator": "EXEMPT",
      "creditPlan": "00100"
    }
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
    "transactionOrigin": "MOTO",
    "transactionProcessingDetails": {
      "orderId": "CHG01d988590da53ea43a159a3a1d3557c068",
      "transactionTimestamp": "2023-10-06T20:45:34.928541403Z",
      "apiTraceId": "7fdd290469c247799228a7741434d545",
      "clientRequestId": "6158724",
      "transactionId": "7fdd290469c247799228a7741434d545"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2049",
      "bin": "603532",
      "last4": "3757",
      "scheme": "THD"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 1.56,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "006322",
      "processor": "CITI",
      "host": "PRIVATE_LABEL",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "0000",
      "hostResponseMessage": "Approval",
      "bankAssociationDetails": {
        "transactionTimestamp": "2023-10-06T20:45:35.664Z",
        "avsSecurityCodeResponse": {
          "streetMatch": "NOT_MATCHED",
          "postalCodeMatch": "NOT_MATCHED",
          "securityCodeMatch": "CVC2 Match",
          "association": {
            "avsCode": "N",
            "securityCodeResponse": "M"
          }
        }
      },
      "additionalInfo": [
        {
          "name": "customerServicePhoneNumber",
          "value": "8005684571"
        }
      ],
      "purchaseOrderRequiredIndicator": "NOT_REQUIRED",
      "taxExemptIndicator": "NOT_EXEMPT",
      "arqcResponseCode": "UNAVAILABLE"
    }
  },
  "billingAddress": {
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
    "captureFlag": false,
    "transactionCaptureType": "terminal_direct",
    "partialApproval": true,
    "merchantTransactionId": "VQZBLFK10EWJN04Z",
    "merchantOrderId": "MS46LEG1027E5PX6"
  },
  "transactionInteraction": {
    "origin": "MOTO",
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_MOTO",
    "eciIndicator": "SECURE_ECOM",
    "terminalTimestamp": "2023-10-06T04:42:40Z",
    "additionalPosInformation": {
      "posFeatures": {
        "pinAuthenticationCapability": "UNSPECIFIED",
        "terminalEntryCapability": "UNSPECIFIED"
      }
    },
    "motoType": "MAIL"
  },
  "merchantDetails": {
    "terminalId": "10000001",
    "merchantId": "100012000001424"
  },
  "additionalDataCommon": {
    "privateLabel": {
      "creditPlan": "00100",
      "minimumSpendExemptIndicator": "EXEMPT"
    }
  },
  "paymentTokens": [
    {
      "tokenData": "0848594901193757",
      "tokenSource": "TRANSARMOR",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    },
    {
      "tokenData": "7258080032423757",
      "tokenSource": "CITI"
    }
  ]
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Order Data](?path=docs/Resources/Master-Data/Order-Data.md)

---


