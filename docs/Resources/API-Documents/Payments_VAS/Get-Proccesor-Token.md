---
tags: [Get-Proccesor, Token, Tokenization, API Reference]
---

# Get Proccesor Token

There are use cases where merchant requires processor token using standalone **[Tokenization](?path=docs/Resources/FAQs-Glossary/Glossary.md#tokenization)** calls.

- Merchant uses encryption at point of interaction (P2PE) and does not have access to PCI data. Merchant must accept an offline transaction and requires processor token.

- Merchant performs direct settlement with the backend settlement systems and needs to submit the proccesor token in the settlement file.

<!-- theme: info -->
> Merchant should use endpoint /paymentsvas/v1/processor-tokens and this payload to request processor token.

## Front Ends Supported

- Chase
- Citi
- HD Supply
- ChargeAfter

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
|`sourceType` | _string_ | 15 | Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) is always payment token |
| `tokenData` | _string_ | 2048 |Token created from the payment source. |
| `tokenSource` | _string_ | N/A | Source for the Token Provider (TSP). Valid Value: TRANSARMOR |

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

The below table identifies the required parameters of `directedRouting` in the `additionalDataCommon` object.

The below table identifies the required parameters in the `processors` array.

| Variable | Type | Maximum Length | Description |
| ------ | ----| -----------| ------------------ |
| `processorName` | _string_ | 256 | Identifies the payment processor. |
| `processingPlatform` | _string_ | 256 | Identifies the payment platform of the processor. |

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
    "tokenData": "1234123412340019",
    "sourceType": "PaymentToken",
    "card": {
      "expirationYear": "2028",
      "last4": "7237",
      "scheme": "THD",
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
      "tokenData": "9187613613527237",
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

### Get Processor Token Decline

<!--
type: tab
titles: Chase, Citi, HD Supply, ChargeAfter
-->

<!-- theme: info -->
> All declines will be sent to the merchant as 201 responses.

<!-- theme: info -->
> Merchant should look for gatewayResponse.transactionState to determine whether 'TOKENISE' request was declined/approved.
<!-- theme: info -->
> All processors pass additional information (objects) in the declined response, the merchant can persist what is needed at their end.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

---

```json
{
  "gatewayResponse": {
    "transactionType": "TOKENISE",
    "transactionState": "DECLINED",
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
      "scheme": "THD",
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
      "tokenSource": "CHASE",
      "tokenResponseCode": "280",
      "tokenResponseDescription": "token could not be provided"
    }
  ],
  "processorResponseDetails": {
    "approvalStatus": "DECLINED",
    "processor": "CHASE",
    "responseCode": "335",
    "responseMessage": "Token Request Failed",
    "hostResponseCode": "280",
    "hostResponseMessage": "token could not be provided",
    "bankAssociationDetails": {
      "associationResponseCode": "00"
    }
  },
  "transactionDetails": {
    "retrievalReferenceNumber": "a2dlcywRZRs6mqI2NQDt"
  }
}
```

<!--
type: tab
-->

```json
{
  "transactionDetails": {
    "captureFlag": false,
    "transactionCaptureType": "terminal_direct",
    "partialApproval": true,
    "retrievalReferenceNumber": "ae17e8ec33e9"
  },
  "processorResponseDetails": {
    "approvalStatus": "DECLINED",
    "hostResponseMessage": "Approval",
    "hostResponseCode": "0000",
    "bankAssociationDetails": {
      "transactionTimestamp": "2024-03-22T15:16:08.304Z"
    },
    "host": "PRIVATE_LABEL",
    "additionalInfo": [
      {
        "name": "customerServicePhoneNumber",
        "value": "8003884142"
      }
    ],
    "arqcResponseCode": "UNAVAILABLE",
    "responseMessage": "Approved",
    "processor": "CITI",
    "responseCode": "000"
  },
  "gatewayResponse": {
    "transactionType": "TOKENIZE",
    "transactionState": "DECLINED",
    "transactionProcessingDetails": {
      "clientRequestId": "4412801",
      "transactionTimestamp": "2024-03-22T15:16:06.742128223Z",
      "transactionId": "edefb8d83bec4a01bbeeae17e8ec33e9",
      "apiTraceId": "edefb8d83bec4a01bbeeae17e8ec33e9"
    }
  },
  "cardDetails": {
    "binDetailPan": "16",
    "issuerBankName": "Vive Financial",
    "binSource": "PRIVATE_LABEL",
    "binLength": "15",
    "clientId": "thdusa",
    "productId": "I03",
    "highBin": "637222999999999",
    "recordType": "DETAIL",
    "detailedCardProduct": "THD",
    "lowBin": "637222990000000",
    "detailedCardIndicator": "CREDIT",
    "cardClass": "HOME_IMPROVER"
  },
  "additionalDataCommon": {
    "privateLabel": {
      "creditPlan": "00100"
    }
  },
  "source": {
    "sourceType": "PaymentToken"
  }
}
```

<!--
type: tab
-->

```json
{
  "transactionDetails": {
    "transactionCaptureType": "terminal_direct",
    "retrievalReferenceNumber": "6d4424184edd"
  },
  "processorResponseDetails": {
    "approvalStatus": "DECLINED",
    "host": "PRIVATE_LABEL",
    "responseMessage": "Declined",
    "processor": "HD_SUPPLY",
    "responseCode": "006"
  },
  "gatewayResponse": {
    "transactionType": "TOKENIZE",
    "transactionState": "DECLINED",
    "transactionProcessingDetails": {
      "clientRequestId": "6497585",
      "transactionTimestamp": "2024-03-22T12:40:29.371460493Z",
      "transactionId": "42f64a230a2e45348f426d4424184edd",
      "apiTraceId": "42f64a230a2e45348f426d4424184edd"
    }
  },
  "cardDetails": {
    "binDetailPan": "16",
    "issuerBankName": "Vive Financial",
    "binSource": "PRIVATE_LABEL",
    "binLength": "15",
    "clientId": "thdusa",
    "productId": "I03",
    "highBin": "637222999999999",
    "recordType": "DETAIL",
    "detailedCardProduct": "THD",
    "lowBin": "637222990000000",
    "detailedCardIndicator": "CREDIT",
    "cardClass": "HOME_IMPROVER"
  },
  "source": {
    "tokenData": "0870072104659304",
    "sourceType": "PaymentToken",
    "card": {
      "expirationYear": "2028",
      "last4": "9304",
      "scheme": "THD",
      "bin": "637222",
      "expirationMonth": "12"
    }
  }
}
```

<!--
type: tab
-->

```json
{
  "transactionDetails": {
    "retrievalReferenceNumber": "a2dlcywRZRs6mqI2NQDt"
  },
  "processorResponseDetails": {
    "approvalStatus": "DECLINED",
    "hostResponseMessage": "Account number is invalid",
    "hostResponseCode": "9999",
    "host": "PRIVATE_LABEL",
    "additionalInfo": [
      {
        "name": "Decision_Date_Time",
        "value": "2024-02-07T19:19:19.9385374Z"
      }
    ],
    "responseMessage": "Invalid Card or Account Number",
    "processor": "CHARGE_AFTER",
    "responseCode": "026"
  },
  "gatewayResponse": {
    "transactionType": "TOKENIZE",
    "transactionState": "DECLINED",
    "transactionProcessingDetails": {
      "clientRequestId": "5396527",
      "transactionTimestamp": "2024-02-07T19:19:19.772964307Z",
      "transactionId": "d054d5fbfda94a4fac245cbd13c98e7d",
      "apiTraceId": "d054d5fbfda94a4fac245cbd13c98e7d"
    }
  },
  "cardDetails": {
    "binDetailPan": "16",
    "issuerBankName": "Citi",
    "binSource": "PRIVATE_LABEL",
    "binLength": "09",
    "clientId": "thdusa",
    "productId": "P01",
    "highBin": "603532300",
    "recordType": "DETAIL",
    "detailedCardProduct": "THD",
    "lowBin": "603532250",
    "detailedCardIndicator": "CREDIT",
    "cardClass": "COMMERC_PROX"
  },
  "additionalDataCommon": {
    "customFields": [
      {
        "value": "2024-02-07T19:19:19.9395742Z",
        "key": "Response_Date_Time_GMT"
      },
      {
        "value": "2024-02-07T14:19:19.9395748",
        "key": "Response_Date_Time_Local"
      },
      {
        "value": "02_00_00",
        "key": "Service_Version_ID"
      },
      {
        "value": "HOME DEPOT",
        "key": "Requestor_Organization_Code"
      },
      {
        "value": "STORE",
        "key": "Requestor_Channel_Code"
      },
      {
        "value": "DETERMINISTIC",
        "key": "Lookup_Strategy"
      },
      {
        "value": "LENDER_OFFLINE",
        "key": "Lookup_Type"
      }
    ]
  },
  "source": {
    "sourceType": "PaymentToken"
  }
}
```

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/tokens)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Card Meta Data](?path=docs/Resources/Master-Data/Card-Details.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Account Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
