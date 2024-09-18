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
| `reversalReasonCode` | *string* | 22 | Identifies the [reason](?path=docs/Resources/API-Documents/Payments/Cancel.mdreversal-reason-code) the merchant or customer requests a cancel *(void)* |
| `physicalGoodsIndicator` | *boolean* | N/A | Identifies if physical goods were sold |
| `authorizationSequence` | *string* | 27 | Type of [authorization sequence](?path=docs/Resources/Guides/Authorizations/Re-Auth.md#authorization-sequence) requested.|
| `createToken` | *boolean* | N/A | Used to create a token on a charge transaction. |
| `clientRequestId` | *string* |64 | Echoes back the value in the request header for tracking. |
| `accountVerification` | *boolean* | N/A | Determines if verification should be performed on the Payment Type.|
| `partialApproval` | *boolean* | N/A | Indicates if a [partial approval](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md) is allowed. Partial approval should only be used in a card present or gift card transaction. |
| `receiptEmail` | *string* | 256 | Email address to send the digital receipt.|
| `paymentDescription` | *string* | 1024 | Payment Description |
| `partiallyApprovedTransactionAmount` | *number* | 18,3 |  The partially approved transaction amount from the original request. |
| `splitTenderId` | *string* | 1024 | A partially-authorized transaction will generate a Split Tender ID. Subsequent transactions to complete the authorization should include the Split Tender ID so that all the transactions comprising that authorization can be linked. |
| `duplicateTransactionCheckingIndicator` | *boolean* | N/A | Determines if duplicate transactions should be checked.|
| `retrievalReferenceNumber` | *string* | 12 | Retrieval reference number can be any value based on the merchant’s choosing (e.g. sequential tracking of transactions, fixed value etc.) used for transaction retrieval from the networks. |
| `authentication3DS` | *boolean* | N/A | Determines if authentication should be performed on the payment type with 3DS provider |
| `processingCode` | *string* | 6 | A required code is used in conjunction with the message type to [define the type of transaction](?path=docs/Resources/Master-Data/Processing-Code.md) that is by the terminal to the host |
| `transactionCutTimeStamp` | *string* | N/A | This defines the date and time beyond which a [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md) cannot be preformed for the transaction in YYYY-MM-DDThh:mm:ssZ format |
| `operationType` | *string* | 50 | Identifies the operation type based on the request |
| `settlementDate` | *string* | N/A | Date that goods and services are preordered. YYYY-MM-DD format |
| `balanceInquiry` | *boolean* | N/A | Indicates if a balance inquiry is allowed |
| `fleetType` | *string* | 20 | Fleet Type to identify if its *RegularFleet* or *EnhancedFleet* |
| `registrationType` | *string* | 16 | Type of device registration |
| `deviceFingerprint` | *array* | N/A | An array containing the [device fingerprint](?path=docs/Resources/Master-Data/Device-Fingerprint.md) details.|
| `splitShipment` | *object* | N/A| Identifies the number of shipments if the transaction will contain [multiple shipments](?path=docs/Resources/Guides/Split-Shipment.md). Can be set during pre-authorization or the first post-authorization.|
| `authOptimizationDetails` | *object* | N/A | Contains the details for an [Authorization Optimization](?path=docs/Resources/Guides/Authorizations/Auth-Optimization.md) request and response |

<!--
type: tab
-->

JSON string format for `transactionDetails`:

```json
{
  "transactionDetails": {
    "approvalCode": "123456",
    "clientRequestId": "13267786514316843133216746",
    "captureFlag": false,
    "createToken": false,
    "transactionCaptureType": "HOST",
    "accountVerification": false,
    "partialApproval": true,
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO",
    "merchantInvoiceNumber": "123890",
    "receiptEmail": "customer@domain.com",
    "paymentDescription": "Merchandise",
    "partiallyApprovedTransactionAmount": 10.55,
    "splitTenderId": "12423434",
    "authorizationTypeIndicator": "REAUTH",
    "duplicateTransactionCheckingIndicator": true,
    "reversalReasonCode": "VOID",
    "physicalGoodsIndicator": true,
    "authorizationSequence": "CANCEL_BEFORE_AUTHORIZATION",
    "authentication3DS": true,
    "processingCode": "000000",
    "transactionCutTimeStamp": "2016-04-16T16:06:05Z",
    "operationType": "ACTIVATE",
    "settlementDate": "2020-11-20",
    "balanceInquiry": true,
    "fleetType": "EnhancedFleet",
    "registrationType": "TAVE_1",
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
    "authOptimizationDetails": {
      "accountStatus": "ACCOUNT_CHANGE",
      "originalHostResponseCode": "51",
      "originalHostResponseMessage": "DECLINED",
      "panEncryptionStatus": "Success"
    }
  }
}
```

<!--type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)
- [Authorization Optimization](?path=docs/Resources/Guides/Authorizations/Auth-Optimization.md)
- [Custom Identifiers](?path=docs/Resources/Guides/BYOID.md)
- [Device Fingerprint](?path=docs/Resources/Master-Data/Device-Fingerprint.md)
- [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Partial Approval](?path=docs/Resources/Guides/Authorizations/Partial-Auth.md)
- [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md)
- [Transaction Capture Type](?path=docs/Resources/Guides/Settlement/Transaction-Capture-Type.md)

---
