---
tags: [Get-Proccesor, Token, Tokenization, API Reference]
---

# TGet Proccesor Token

There are use cases where merchant requires both gateway token and/or processor token using standalone **[Tokenization](?path=docs/Resources/FAQs-Glossary/Glossary.md#tokenization)** calls.

- Merchant uses encryption at point of interaction (P2PE) and does not have access to PCI data. Merchant must accept an offline transaction and requires both gateway token and processor token.
- Merchant receives gateway token and/or processor token but fails to store the tokens in their vault.
- Merchant performs direct settlement with the backend settlement systems and does not have the token to submit in the settlement file.
Merchant will not have the Processor Token to settle with Processor in above cases. 

<!-- theme: info -->
>Merchant generates a TA token from CH using get token endpoint.
Merchant uses endpoint /paymentsvas/v1/processor-tokens and this payload to request processor token.

---

## Tokens Request

Use this payload to request a payment token from a payment processor.

<!--
type: tab
titles: source, merchantDetails, additionalDataCommon
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|----------------|---------|
|`sourceType` | _string_ | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|---------------|---------|
| `merchantId`| _string_ | 1024 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | 8string* | 1024 | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway.|

<!--
type: tab
-->

The below table identifies the required parameters in the `additionalDataCommon` object.

| Variable | Type| Maximum Length | Description|
|---------|----------|----------------|---------|



<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/paymentsvas/v1/processor-tokens`

---

### Payload Example

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
      "processors": {
        "processorName": "HD_SUPPLY",
        "processorPlatform": "PRIVATE_LABEL"
      }
    }
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/tokens)

<!--
type: tab
-->

Example of a tokenization (201: Created) response.

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
    "sourceType": "PaymentToken"
  },
  "cardDetails": {
    "detailedCardProduct": "VISA",
    "productId": "N1",
    "visaProductSubType": "HC",
    "detailedCardIndicator": "DEBIT"
  },
  "paymentTokens": [
    {
      "tokenData": "1234123412340019",
      "tokenSource": "HD_SUPPLY",
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
    "processor": "HD_SUPPLY",
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
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Card Meta Data](?path=docs/Resources/Master-Data/Card-Details.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Account Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
