---
tags: [Private Label, Payment Sources]
---

# HD Supply Private Label

HD Supply is a private label card that is a fully owned subsidiary of The Home Depot. Customers are issued an HD Pro card that only be used with The Home Depot.

<!-- theme: warning -->
> Currently, only direct send settlement model is supported. Merchants must submit the settlement batch file directly to the processor. Commerce Hub will not have access to transaction completion, therefore [refunds](?path=docs/Resources/API-Documents/Payments/Refund.md) will need to be submitted as an [open refund](?pathdocs/Resources/API-Documents/Payments/Refund-Open.md). For more information, please contact your account representative.

---

## Parameters

<!--theme:info-->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. To override this behavior, `createToken`: *false* is required in `transactionDetails`. Contact your account representative for more information about enabling tokenization.

<!--
type: tab
titles: transactionInteraction
-->

The below table identifies the required parameters from `additionalPosInformation` in the `transactionInteraction` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`posId` | *string* | N/A | Indicates the Point-of-Sale for multi-Controller Transactions.|

<!-- type: tab-end -->

---

## Payload Example

The example below contains the minimum [parameters](#parameters) for a successful in-person [charges request](?path=docs/Resources/API-Documents/Payments/Charges.md) using an HD Supply PLCC. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

Example of a charge payload request using an HDS PLCC

```json
{
  "amount": {
    "total": 10,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentTrack",
    "encryptionData": {
      "encryptionType": "ON_GUARD",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "1560384173922145=16888359437361520549",
      "keyId": "FFFF999999039D4001210114",
      "deviceType": "INGENICO"
    }
  },
  "transactionDetails": {
    "captureFlag": false,
    "retrievalReferenceNumber": "23857236013",
    "primaryTransactionType": "AUTH_ONLY"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2023-11-13T10:06:44Z",
    "additionalPosInformation": {
      "posId": 9999,
      "posFeatures": {
        "pinAuthenticationCapability": "UNSPECIFIED",
        "terminalEntryCapability": "MAG_STRIPE_MANUAL"
      }
    }
  },
  "merchantDetails": {
    "merchantId": "100012000100291",
    "terminalId": "10000087"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of a charge (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "POS",
    "transactionProcessingDetails": {
      "orderId": "CHG0168fe8e11cb26db62b67296ae21a83245",
      "transactionTimestamp": "2024-04-17T22:05:08.655103685Z",
      "apiTraceId": "4e057b213f1748b185bd3a290a243e24",
      "clientRequestId": "4405185",
      "transactionId": "4e057b213f1748b185bd3a290a243e24"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 10,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "00",
      "processor": "HD_SUPPLY",
      "host": "PRIVATE_LABEL",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVED",
      "purchaseOrderRequiredIndicator": "REQUIRED",
      "bankAssociationDetails": {
        "avsSecurityCodeResponse": {
          "streetMatch": "NONE",
          "postalCodeMatch": "NONE",
          "securityCodeMatch": "NOT_CHECKED",
          "association": {
            "securityCodeResponse": "P"
          }
        }
      }
    }
  },
  "transactionDetails": {
    "captureFlag": false,
    "transactionCaptureType": "terminal_direct",
    "partialApproval": true,
    "retrievalReferenceNumber": "3a290a243e24",
    "primaryTransactionType": "AUTH_ONLY"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "MAG_STRIPE",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2023-11-13T10:06:44Z",
    "additionalPosInformation": {
      "posId": "9999",
      "posFeatures": {
        "pinAuthenticationCapability": "UNSPECIFIED",
        "terminalEntryCapability": "MAG_STRIPE_MANUAL"
      }
    }
  },
  "merchantDetails": {
    "terminalId": "10000087",
    "merchantId": "100012000100291"
  },
  "additionalDataCommon": {
    "customFields": [
      {
        "key": "authorizationIdentificationResponse",
        "value": "2APP51"
      }
    ]
  },
  "source": {
    "sourceType": "PaymentTrack",
    "card": {
      "expirationMonth": "10",
      "expirationYear": "2028",
      "bin": "981106",
      "last4": "7237",
      "scheme": "THD"
    },
    "encryptionData": {
      "encryptionType": "ON_GUARD",
      "encryptionTarget": "TRACK_2",
      "keyId": "FFFF999999039D4001210114",
      "encryptionBlock": "1560384173922145=16888359437361520549",
      "deviceType": "INGENICO"
    },
    "track2Data": "9811065525747237=28101015432112345678"
  },
  "paymentTokens": [
    {
      "tokenData": "9187613613527237",
      "tokenSource": "TRANSARMOR",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    },
    {
      "tokenData": "1010105454117237",
      "tokenSource": "HD_SUPPLY",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
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
- [Directed Routing](?path=docs/Resources/Guides/Directed-Routing.md)
- [Transaction Interaction](?path=docs/Resources/Master-Data/Transaction-Interaction.md)

---
