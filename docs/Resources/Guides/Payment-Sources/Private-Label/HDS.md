---
tags: [Private Label, Payment Sources]
---

# HD Supply (HDS)

HD Supply is a fully owned subsidiary of THD. HD Pro card will be used by the customers, THD is the only merchant connecting to HD Pro.

<!-- theme: warning -->
> Merchant is expected to provide routing information as part of the transaction payload.
> Settlement will happen outside of CH - directly between THD and HDS using the processor token from HDS.

---

## Request Variables

<!--theme:info-->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. To override this behavior, `createToken`: *false* is required in `transactionDetails`. Contact your account representative for more information about enabling tokenization.

<!--
type: tab
titles: amount, source, transactionDetails, merchantDetails
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

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`merchantId` | *string* | 40 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
|`terminalId` | *string* | N/A |Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

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
ADD RESPONSE CH RESPONSE PAYLOAD

```

<!-- type: tab-end -->

Example of a HDS Request Payload(from Adapter To HDS)

```json
{
  "authorizationRequest": {
    "source": {
      "encryptedData": {
        "keyId": "3F66147545CCC6EBC87C1DC74AF5FD337B646E2B0688137C935DE633428866F951CD256EA3FAA1BDD7033B130903BCD6FABEB58830D5AD06EC5BADB06DC770D1",
        "encryptionBlock": "Be6hd+tOXQ3MIUSqBmN7M766X6CliXyhCoCKxgpZ/a2Ai0gd8xHwvSO7xjZ3xSDTrPSAj5zkMBkt569yaquRyCIu9dWw0bVQ/KRxnXI0gzDdWYX0gFv9cj2pqAHC1m89sDdvUQyHpxGtK2J+d4iruSE0giWmDPXleIb+dpv9wcqZGuyQVATKGr1Tm5lIqkz4aPKOD92xVqhoOW2ZJJ1NG6HFKhB2rG+vYnQtwv1o9ITY1rsH2KbgGgRKQCDZph1JYa1+9skYJsZQvrDoNQGGV/P3Y0Iaq1mbEF/PipgrSXMYMagepbImhrWVXlDCLGlJHDVLCrWCxr9k4hUBEHSfhkjhC7YCii3yzK/D/9IjyKdp6aKdkWZjN4oRwh9UeK/QH2hJYupbhgaLvTvV42N9x7ZZV1wOvi/x6t+bQTWFZzuOVqMt16h7w6HCCY6SZLYzns8r8qg882DpsVKnpQwa5qMMQr1/MOq3FGqI/VRR07cjxMauAl2Vnw3PxAKe9e2U",
        "encryptionBlockFields": "CardPan:16,CardExpirationDate:4"
      }
    },
    "merchantID": "9773",
    "messageType": "SALE",
    "transactionDateTime": "2024-03-01 06:55:35",
    "terminalID": 2,
    "posTransID": 151,
    "retrievalReferenceNumber": "a27937d1975c",
    "transactionAmount": 1.45,
    "posEntryMode": "UNKNOWN",
    "posCondition": "CUSTOMER_PRESENT",
    "clientUUID": "9SEX3NA6A22ZGJPV",
    "billingAddress": {
      "addressLane1": "112 Main St.",
      "city": "Atlanta",
      "state": "OH",
      "zipCode": "43068"
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
  "authorizationResponse": {
    "VendorResponseCode": "00",
    "VendorResponseText": "APPROVED",
    "RetrievalReferenceNumber": "a27937d1975c",
    "AuthorizationIdentificationResponse": "2GAP51",
    "ProcessorToken": "1010105454117237",
    "PurchaseOrderRequiredFlag": "Y",
    "pinValidationRespCode": "P"
  }
}

```
