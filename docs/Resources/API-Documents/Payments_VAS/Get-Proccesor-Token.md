---
tags: [Processor Token, Partner Token, Tokenization, API Reference]
---

# Partner Tokens

A partner tokens request allows a merchant to submit Commerce Hub's TransAmor [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) and receive a third-party partner token. This token can be used to communicate directly with the third-party partner when the merchant performs direct settlement or must accept an offline transaction.

---

## Request Variables

<!--
type: tab
titles: source, merchantDetails, directedRouting
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `sourceType` | _string_ | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) is always _**paymentToken**_ |
| `tokenData` | _string_ | 2048 |Token created from the payment source. |
| `tokenSource` | _string_ | N/A | Source for the Token Provider (TSP). Valid Value: TRANSARMOR |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|---------------|---------|
| `merchantId` | _string_ | 1024| A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | _string_ | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md)|

<!--
type: tab
-->

The below table identifies the required parameters in the `processors` array as part of `directedRouting` in the `additionalDataCommon` object.

| Variable | Type | Maximum Length | Description |
| ------ | ----| -----------| ------------------ |
| `processorName` | _string_ | 256 | Identifies the [payment processor](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md). |
| `processingPlatform` | _string_ | 256 | Identifies the [payment platform](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md) of the processor. |

<!-- type: tab-end -->

---

## Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/partner-tokens`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a token only payload request.

```json
{
  "source": {
    "sourceType": "PaymentToken",
    "tokenData": "1234123412340019",
    "tokenSource": "TRANSARMOR",
    "card": {
      "expirationMonth": "05",
      "expirationYear": "2044"
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  },
  "additionalDataCommon": {
    "directedRouting": {
      "processors": [
        {
          "processorName": "CITI",
          "processorPlatform": "PRIVATE_LABEL"
        }
      ]
    }
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/partner-tokens)

<!--
type: tab
-->

Example of a get partner token (200: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "TOKENIZE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "POS"
  },
  "source": {
    "sourceType": "PaymentToken",
    "tokenSource": "TRANSARMOR",
    "tokenData": "1234560000000019"
  },
  "paymentTokens": [
    {
      "tokenData": "23459371934460009",
      "tokenSource": "CHASE",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    }
  ],
  "processorResponseDetails": {
    "approvalStatus": "APPROVED",
    "schemeTransactionId": "0225MCC625628",
    "processor": "CHASE",
    "responseCode": "000",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "00",
    "hostResponseMessage": "APPROVAL",
    "localTimestamp": "2021-06-20T23:42:48Z"
  },
  "additionalDataCommon": {
    "directedRouting": {
      "processors": {
        "processorName": "CHASE",
        "processorPlatform": "TAMPA"
      }
    }
  },
  "cardDetails": [
    {
      "binSource": "FISERV",
      "recordType": "DETAIL",
      "lowBin": "476173",
      "highBin": "476173",
      "binLength": "06",
      "binDetailPan": "16",
      "countryCode": "USA",
      "detailedCardProduct": "VISA",
      "detailedCardIndicator": "DEBIT",
      "pinSignatureCapability": "PIN_OR_SIGNATURE",
      "issuerUpdateYear": "22",
      "issuerUpdateMonth": "04",
      "issuerUpdateDay": "22",
      "cardClass": "CONSUMER",
      "productId": "F",
      "accountFundSource": "DEBIT",
      "panLengthMin": "16",
      "panLengthMax": "16",
      "debitPinlessIndicator": [
        {
          "debitNetworkId": "MAESTRO_DIRECT",
          "pinnedPOS": "SUPPORTED"
        },
        {
          "debitNetworkId": "MAESTRO_STAR_WEST",
          "pinnedPOS": "SUPPORTED"
        },
        {
          "debitNetworkId": "PAVD",
          "pinnedPOS": "SUPPORTED"
        }
      ]
    }
  ]
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/partner-tokens)
- [Card Details](?path=docs/Resources/Master-Data/Card-Details.md)
- [Directed Routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Payment Token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---
