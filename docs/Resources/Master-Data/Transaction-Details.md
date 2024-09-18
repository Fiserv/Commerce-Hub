---
tags: [API Reference, Master Data, Transaction Details]
---

# Transactional Details

The transaction request initiated by the merchant contains various transaction related data which is captured in `transactionDetails` object.

<!-- 
type: tab
titles: transactionDetails, JSON Example
-->

The below table identifies the parameters in the `transactionDetails` object.

| Variable | Type| Max Length | Description|
|---------|-----------|----------------|---------|
| `approvalCode` | *string* | N/A | Reference number received as the result of a successful external authorization (e.g. by phone). The gateway requires this number for a forced post transaction to a previously performed external authorization. |
| `authOptimazation` | *string* | 32 | An identifier used to indicate what data is received in the response for merchants boarded for [Authorization Optimization](?path=docs/Resources/Guides/Authorizations/Auth-Optimization.md) |
| `primaryTransactionId` | *string* | 40 | The unique identifier from the original transaction passed for a reauthorization and incremental authorization. |
| `captureFlag` | *boolean* | N/A | Designates if the transaction should be captured. Set to *false* for an authorization or *true* for a capture. If not provided in a [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md) or [Refunds API request](?path=docs/Resources/API-Documents/Payments/Refund.md), it defaults to *true*. |
| `transactionCaptureType` | *string* | 64 | Identifies the [capture type for settlement](?path=docs/Resources/Guides/Settlement/Transaction-Capture-Type.md). |
| `merchantTransactionId` | *string* | 128 | [Unique merchant reference transaction ID](?path=docs/Resources/Guides/BYOID.md) |
| `merchantOrderId` | *string* | 128 | [Merchant order ID, customer reference number or purchase order number *(PO Number)*](?path=docs/Resources/Guides/BYOID.md) |
| `merchantInvoiceNumber` | *string* | 12 | Merchant invoice or reference number |
| `authorizationTypeIndicator` | *string* | N/A | Identifies the [authorization types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md#authorization-type-indicator) of subsequent authorizations. |
| `splitShipment` | *object* | N/A| Identifies the number of shipments if the transaction will contain [multiple shipments](?path=docs/Resources/Guides/Split-Shipment.md). Can be set during pre-authorization or the first post-authorization.|
| `reversalReasonCode` | *string* | 22 | [Reason](?path=docs/Resources/Master-Data/Transaction-Details.md#reversal-reason-code) the merchant/customer requests for cancel (void).|
| `physicalGoodsIndicator` | *boolean* | N/A | Identifies if physical goods were sold.|
| `authorizationSequence` | *string* | 27 | Type of [authorization sequence](?path=docs/Resources/Guides/Authorizations/Re-Auth.md#authorization-sequence) requested.|
| `createToken` | *boolean* | N/A | Used to create a token on a charge transaction. |
| `primaryOrderId` | *string* | 40 | The unique identifier from the original transaction passed for a reauthorization and incremental authorization. |
| `clientRequestId` | *string* |64 | Echoes back the value in the request header for tracking. |
| `accountVerification` | *boolean* | N/A | Determines if verification should be performed on the Payment Type.|
| `partialApproval` | *boolean* | N/A | Indicates if a [partial approval](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md) is allowed. Partial approval should only be used in a card present or gift card transaction. |
| `receiptEmail` | *string* | 256 | Email address to send the digital receipt.|
| `paymentDescription` | *string* | 1024 | Payment Description |
| `cardVerificationAmount` | *number* | 18,3 | Amount to charge the card to attempt verification. Note: some card brands do not allow zero $ auth.|
| `partiallyApprovedTransactionAmount` | *number* | 18,3 |  The partially approved transaction amount from the original request. |
| `splitTenderId` | *string* | 1024 | A partially-authorized transaction will generate a Split Tender ID. Subsequent transactions to complete the authorization should include the Split Tender ID so that all the transactions comprising that authorization can be linked. |
| `duplicateTransactionCheckingIndicator` | *boolean* | N/A | Determines if duplicate transactions should be checked.|
| `vaultFundingSource` | *boolean* | N/A | Identifies if the customer information was from the Vault. |
| `retrievalReferenceNumber` | *string* | 12 | Retrieval reference number can be any value based on the merchant’s choosing (e.g. sequential tracking of transactions, fixed value etc.) used for transaction retrieval from the networks. |
| `deviceFingerprint` | *array* | N/A | An array containing the [device fingerprint](?path=docs/Resources/Master-Data/Device-Fingerprint.md) details.|

<!--
type: tab
-->

JSON string format for `transactionDetails`:

```json
{
  "transactionDetails": {
    "approvalCode": "123456",
    "primaryTransactionId": "838916029301",
    "primaryOrderId": "123456789",
    "clientRequestId": "13267786514316843133216746",
    "captureFlag": false,
    "transactionCaptureType": "HOST",
    "accountVerification": false,
    "partialApproval": true,
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO",
    "merchantInvoiceNumber": "123890",
    "receiptEmail": "abc@gmail.com",
    "paymentDescription": "Merchandise",
    "cardVerificationAmount": 0.02,
    "partiallyApprovedTransactionAmount": 10.55,
    "splitTenderId": "12423434",
    "authorizationTypeIndicator": "REAUTH",
    "duplicateTransactionCheckingIndicator": true,
    "deviceFingerprint": [
      {
        "provider": "InAuth",
        "dataCapture": {
          "rawData": "aaaaaXREUVZGRlFY...aMV",
          "dataEventId": "BB8E4E92...Fz1E063113",
          "captureTime": "2016-04-16T16:06:05Z"
        },
        "dataStatic": {
          "operatingSystem": "ANDROID",
          "operatingSystemVersion": "5.1.1 Lollipop",
          "model": "XYX-1",
          "type": "Moto G"
        },
        "dataDynamic": {
          "latitude": "13.0827 N",
          "longitude": "80.2707 E",
          "ipAddress": "172.27.37.221",
          "captureTime": "2016-04-16T16:06:05Z"
        }
      }
    ],
    "splitShipment": {
      "totalCount": 5,
      "finalShipment": true
    },
    "reversalReasonCode": "VOID",
    "physicalGoodsIndicator": true,
    "authorizationSequence": "CANCEL_BEFORE_AUTHORIZATION",
    "createToken": false
  }
}
```

<!--type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)
- [Custom Identifiers](?path=docs/Resources/Guides/BYOID.md)
- [Device Fingerprint](?path=docs/Resources/Master-Data/Device-Fingerprint.md)
- [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Partial Approval](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md)
- [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md)
- [Transaction Capture Type](?path=docs/Resources/Guides/Settlement/Transaction-Capture-Type.md)

---
