---
tags: [Private Label, Payment Sources]
---

# Charge After

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

The below table identifies the conditional parameters in the `privateLabel` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `minimumSpendExemptIndicator`| *string* | N/A | description |
| `creditPlan`| *string* | N/A | description | 

<!--
type: tab
-->

The below table identifies the conditional parameters in the `customFields` object.

| Key | Value |
| -------- | -------- |
 v

<!--
type: tab
-->

The below table identifies the conditional parameters in the `directedRouting` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `processor` | *array* | N/A | Identifies the card processor |

```json

{
  "amount": {
    "total": 1.45,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "ON_GUARD",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "4599891943100751=36193012513455685570",
      "keyId": "FFFF999999039D4001080114",
      "deviceType": "INGENICO"
    }
  },
  "transactionDetails": {
    "captureFlag": false,
    "merchantOrderId": "7EWVTZRNAK7AJMXL",
    "merchantTransactionId": "FT4WTBP9LW0FB0PD"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2023-09-20T05:33:05Z",
    "additionalPosInformation": {
      "dataEntrySource": "MOBILE_TERMINAL",
      "posFeatures": {
        "pinAuthenticationCapability": "UNSPECIFIED",
        "terminalEntryCapability": "MAG_STRIPE_MANUAL"
      }
    }
  },
  "merchantDetails": {
    "merchantId": "100012000003424",
    "terminalId": "10000001"
  },
  "additionalDataCommon": {
    "privateLabel": {
      "minimumSpendExemptIndicator": "EXEMPT",
      "creditPlan": "00100"
    },
    "customFields": [
      {
        "key": " Request_Date_Time_GMT",
        "value": "2023-09-20T05:33:05Z"
      },
      {
        "key": " Request_Date_Time_Local",
        "value": "2023-09-20T05:33:05Z"
      },
      {
        "key": "Requestor_Channel_Code",
        "value": "STORE"
      },
      {
        "key": " Requestor_Organization_Code",
        "value": "HOME DEPOT"
      },
      {
        "key": "Requestor_User_ID",
        "value": "NCLCP"
      },
      {
        "key": "Requestor_POS_Event_Code",
        "value": "Sale"
      },
      {
        "key": "Requestor_Location_State_Code",
        "value": "TX"
      },
      {
        "key": "Retailer_Channel",
        "value": "STORE"
      },
      {
        "key": "Consumer_Decision",
        "value": "ACCEPT"
      },
      {
        "key": " Terms_Verified",
        "value": "Y"
      },
      {
        "key": "Lookup_Strategy",
        "value": "DETERMINISTIC"
      },
      {
        "key": "Sales_Doc_ID",
        "value": "12443-605"
      }
    ],
    "directedRouting": {
      "processors": [
        {
          "processorName": "CHARGE_AFTER",
          "processingPlatform": "PRIVATE_LABEL",
          "priority": "PRIMARY"
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

##### Example of a charge payload request using a PLCC.

<!-- info -->
> PLCC transactions routed to Citi require the additional fields `posEntyMode`, `posConditionCode`, and when the `origin` is _MOTO_ `motoType` in [transaction interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md).

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
    "privateLabel": {
      "creditPlan": "12345",
      "minimumSpendExemptIndicator": "EXEMPT"
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
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2035",
      "bin": "400555",
      "last4": "0019",
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
      "purchaseOrderRequiredIndicator": "NOT_REQUIRED",
      "taxExemptIndicator": "NOT_EXEMPT",
      "feeProgramIndicator": "123",
      "purchaseAprType": "FIXED",
      "arqcResponseCode": "VALIDATION_PASSED"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "additionalDataCommon": {
    "privateLabel": {
      "creditPlanNumber": "12345",
      "minimumSpendExemptIndicator": "EXEMPT"
    }
  }
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

