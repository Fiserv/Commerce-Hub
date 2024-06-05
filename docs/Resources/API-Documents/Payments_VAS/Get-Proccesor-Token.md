---
tags: [Processor Token, Partner Token, Tokenization, API Reference]
---

# Partner Tokens

The Partner-Tokens request allows a merchant to submit Commerce Hub's TransAmor [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) and receive a third party partner-token. This token can be used to communicate directly with the third-party partner when the merchant performs direct settlement or must accept an offline transaction.

---

## Request Variables

<!--
type: tab
titles: source, merchantDetails, directedRouting
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|----------------|---------|
|`sourceType` | _string_ | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) is always payment token |
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

The below table identifies the required parameters of `directedRouting` in the `additionalDataCommon` object.

The below table identifies the required parameters in the `processors` array.

| Variable | Type | Maximum Length | Description |
| ------ | ----| -----------| ------------------ |
| `processorName` | _string_ | 256 | Identifies the [payment processor](?path=docs/Resources/Guides/Directed-Routing.md). |
| `processingPlatform` | _string_ | 256 | Identifies the [payment platform](?path=docs/Resources/Guides/Directed-Routing.md) of the processor. |

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
    "merchantId": "123456789789567",
    "terminalId": "123456"
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
    "transactionType": "TOKENISE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "POS",
    "transactionProcessingDetails": {
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionTimestamp": "2016-04-16T16:06:05Z",
      "apiTraceId": "1234567a1234567b1234567c1234567d",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "source": {
    "tokenData": "1234123412340019",
    "sourceType": "PaymentToken",
    "card": {
      "expirationYear": "2028",
      "last4": "7237",
      "scheme": "VISA",
      "bin": "981106",
      "expirationMonth": "10"
    }
  },
  "cardDetails": {
    "detailedCardProduct": "VISA",
    "productId": "N1",
    "visaProductSubType": "HC",
    "detailedCardIndicator": "DEBIT"
  },
  "paymentTokens": [
    {
      "tokenData": "9187613690527237",
      "tokenSource": "CITI",
      "tokenResponseCode": "000",
      "tokenResponseDescription": "SUCCESS"
    }
  ],
  "processorResponseDetails": {
    "approvalStatus": "APPROVED",
    "approvalCode": "OK3483",
    "authenticationResponseCode": "string",
    "referenceNumber": "845366457890-TODO",
    "schemeTransactionId": "019078743804756",
    "feeProgramIndicator": "123",
    "processor": "CITI",
    "host": "PRIVATE_LABEL",
    "networkRouted": "string",
    "PAR": "string",
    "responseCode": "00000",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "00",
    "hostResponseMessage": "APPROVAL",
    "localTimestamp": "2016-04-16T16:06:05Z"
  }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/tokens)
- [Payment Token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
- [Directed Routing](?path=docs/Resources/Guides/Directed-Routing.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
