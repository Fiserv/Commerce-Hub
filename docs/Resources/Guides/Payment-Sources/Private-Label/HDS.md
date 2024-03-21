---
tags: [Private Label, Payment Sources]
---

# HD Supply (HDS)

HD Supply is a fully owned subsidiary of THD. HD Pro card will be used by the customers, THD is the only merchant connecting to HD Pro. HDS supports CP and CNP.

<!-- theme: warning -->
> Merchant is expected to provide routing information as part of the transaction payload.
<!-- theme: warning -->
> Settlement will happen outside of CH - directly between THD and HDS using the processor token from HDS.

## Transaction types: CP/ CNP

- AUTH - (request for credit authorization)
- VOID - Tagged Auth reversal only
- RETURN - Open Refund only

## Payment Sources

- Payment Track - CP
- Payment Card Encrypted - CP, CNP
- Payment Token – CNP

---

## Request Variables

<!--theme:info-->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. To override this behavior, `createToken`: *false* is required in `transactionDetails`. Contact your account representative for more information about enabling tokenization.

<!--
type: tab
titles: amount, source, transactionDetails, merchantDetails, transactionInteraction
-->

The below table identifies the required parameters in the `amount` object.

|Variable |  Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Total amount of the transaction. [Sub-component](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | The requested currency in [ISO 3 Currency Format](?path=docs/Resources/Master-Data/Currency-Code.md).|

<!--
type: tab
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`captureFlag` | *string* | 5 | Designates if the transaction should be captured (*true* for Sale and *false* for Pre-Auth)|
| `retrievalReferenceNumber` | *string* | 12 | Retrieval reference number can be any value based on the merchant's choosing (e.g. sequential tracking of transactions, fixed value etc.) used for transaction retrieval from the networks.|

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!--
type: tab
-->

The below table identifies the required parameters from `additionalPosInformation` in the `transactionInteraction` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`posId` | *string* | N/A | Indicates the Point-of-Sale for multi-Controller Transactions.|
| `origin` | *string* | N/A | The source of the transaction.|

| Origin Values |
| ------------- |
| ECOM |
| MOTO |
| POS |

<!-- type: tab-end -->

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a CH Request Payload(To HDS Adapter)

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
