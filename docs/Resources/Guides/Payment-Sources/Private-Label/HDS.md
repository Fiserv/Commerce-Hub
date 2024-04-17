---
tags: [Private Label, Payment Sources]
---

# HD Supply

HD Supply is a private label card that is a fully owned subsidiary of The Home Depot. Customers are issued an HD Pro card that only be used with The Home Depot.

<!--theme:info-->
> Currently, only direct send settlement model is supported. Merchants must submit the settlement batch file directly to the processor. Commerce Hub will not have access to transaction completion, therefore refunds will need to be submitted as an open refund. For more information, please contact your account representative.

---

## Request Variables

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

<!--
type: tab
titles: Request, Response
-->

Example of a charge payload request using an HDS PLCC

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
      "encryptionBlock": "1560384173922145=16888359437361520549",
      "keyId": "FFFF999999039D4001210114",
      "deviceType": "INGENICO"
    }
  },
  "billingAddress": {
    "firstName": "John",
    "lastName": "Doe",
    "address": {
      "street": "112 Main St.",
      "city": "Atlanta",
      "stateOrProvince": "OH",
      "postalCode": "43068",
      "country": "US"
    }
  },
  "transactionDetails": {
    "captureFlag": false,
    "retrievalReferenceNumber": "yubtotygyr4i",
    "merchantOrderId": "JVI2H6H2IU0C8319",
    "merchantTransactionId": "9SEX3NA6A22ZGJPV"
  },
  "transactionInteraction": {
    "origin": "POS",
    "posEntryMode": "UNSPECIFIED",
    "posConditionCode": "CARD_PRESENT",
    "terminalTimestamp": "2024-03-01T06:55:35Z",
    "additionalPosInformation": {
      "posId": "0151",
      "posFeatures": {
        "pinAuthenticationCapability": "UNSPECIFIED",
        "terminalEntryCapability": "MAG_STRIPE_MANUAL"
      }
    }
  },
  "merchantDetails": {
    "merchantId": "100012000100291",
    "terminalId": "10000087"
  },
  "additionalDataCommon": {
    "directedRouting": {
      "processors": [
        {
          "processorName": "HD_SUPPLY",
          "processingPlatform": "PRIVATE_LABEL",
          "priority": "PRIMARY"
        }
      ]
    }
  }
}
```

<!--
type: tab
-->

Example of a charge (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "paymentToken": {
    "tokenData": "1010105454117237",
    "tokenSource": "HD_SUPPLY"
  },
  "transactionDetails": {
    "captureFlag": false,
    "transactionCaptureType": "terminal_direct",
    "merchantTransactionId": "9SEX3NA6A22ZGJPV",
    "merchantOrderId": "JVI2H6H2IU0C8319",
    "partialApproval": true,
    "retrievalReferenceNumber": "a27937d1975c"
  },
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "POS",
    "transactionProcessingDetails": {
      "orderId": "CHG01db8cb660ea2127354d056586daa2c534",
      "clientRequestId": "8146153",
      "transactionTimestamp": "2024-03-01T23:55:41.583718136Z",
      "transactionId": "18b3e0bedd9a4e7cae06a27937d1975c",
      "apiTraceId": "18b3e0bedd9a4e7cae06a27937d1975c"
    }
  },
  "additionalDataCommon": {
    "customFields": [
      {
        "value": "2GAP51",
        "key": "authorizationIdentificationResponse"
      }
    ]
  },
  "paymentTokens": [
    {
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS",
      "tokenData": "9187613613527237",
      "tokenSource": "TRANSARMOR"
    },
    {
      "tokenData": "1010105454117237",
      "tokenSource": "HD_SUPPLY"
    }
  ],
  "paymentReceipt": {
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "00",
      "hostResponseMessage": "APPROVED",
      "hostResponseCode": "00",
      "bankAssociationDetails": {
        "avsSecurityCodeResponse": {
          "streetMatch": "NONE",
          "securityCodeMatch": "NOT_CHECKED",
          "association": {
            "securityCodeResponse": "P"
          },
          "postalCodeMatch": "NONE"
        }
      },
      "purchaseOrderRequiredIndicator": "REQUIRED",
      "host": "PRIVATE_LABEL",
      "responseMessage": "Approved",
      "processor": "HD_SUPPLY",
      "responseCode": "000"
    },
    "approvedAmount": {
      "total": 1.45,
      "currency": "USD"
    }
  },
  "source": {
    "encryptionData": {
      "deviceType": "INGENICO",
      "encryptionBlock": "1560384173922145=16888359437361520549",
      "encryptionTarget": "TRACK_2",
      "encryptionType": "ON_GUARD",
      "keyId": "FFFF999999039D4001210114"
    },
    "track2Data": "9811065525747237=28101015432112345678",
    "sourceType": "PaymentTrack",
    "card": {
      "expirationYear": "2028",
      "last4": "7237",
      "scheme": "THD",
      "bin": "981106",
      "expirationMonth": "10"
    }
  },
  "billingAddress": {
    "firstName": "John",
    "lastName": "Doe",
    "address": {
      "country": "US",
      "stateOrProvince": "OH",
      "city": "Atlanta",
      "street": "112 Main St.",
      "postalCode": "43068"
    }
  },
  "merchantDetails": {
    "merchantId": "100012000100291",
    "terminalId": "10000087"
  },
  "transactionInteraction": {
    "terminalTimestamp": "2024-03-01T06:55:35Z",
    "origin": "POS",
    "additionalPosInformation": {
      "posId": "0151",
      "posFeatures": {
        "terminalEntryCapability": "MAG_STRIPE_MANUAL",
        "pinAuthenticationCapability": "UNSPECIFIED"
      }
    },
    "posConditionCode": "CARD_PRESENT",
    "posEntryMode": "UNSPECIFIED"
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
