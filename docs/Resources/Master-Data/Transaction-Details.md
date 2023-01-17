---
tags: [API Reference, Master Data, Transaction Details]
---

# Transactional Details

The transaction request initiated by merchant contains various transaction related data which is captured in `transactionDetails` object.

<!-- 
type: tab
titles: transactionDetails, JSON Example
-->

The below table identifies the parameters in the `transactionDetails` object.

| Variable | Type| Maximum Length | Description|
|---------|-----------|----------------|---------|
| `approvalCode` | *string* | N/A | Reference number received as the result of a successful external authorization (e.g. by phone). The gateway requires this number for a [forced post](?path=docs/Resources/API-Documents/Payments/Forced.md) transaction to a previously performed external authorization. |
| `primaryTransactionId` | *string* | 40 | The unique identifier from the original transaction passed for a reauthorization and incremental authorization. |
| `captureFlag` | *boolean* | N/A | Designates if the transaction should be captured. Auth (*FALSE*) or Sale (*TRUE*)|
| `transactionCaptureType` | *string* | 64 | Identifies the [capture type for settlement](?path=docs/Resources/Guides/Settlement/Transaction-Capture-Type.md). |
| `merchantTransactionId` | *string* | 128 | Unique merchant transaction ID (aka transaction reference ID). |
| `merchantOrderId` | *string* | 128 | Merchant order ID (aka customer reference number or purchase order number). |
| `merchantInvoiceNumber` | *string* | 12 | Merchant invoice number (aka reference number). |
| `authorizationTypeIndicator` | *string* | N/A | Identifies the [authorization types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md#authorization-type-indicator) of subsequent authorizations. |
| `primaryTransactionType` | *string* | 14 | Identifies the [primary transaction type](#primary-transaction-type).|
| `deviceFingerprint` | *array* | N/A | An array containing the [device fingerprint](?path=docs/Resources/Master-Data/Device-Fingerprint.md) details.|
| `splitShipment` | *object* | N/A| Identifies the number of shipments if the transaction will contain [multiple shipments](?path=docs/Resources/Guides/Split-Shipment.md). Can be set during pre-auth or the first post-auth.|
| `reversalReasonCode` | *string* | 22 | [Reason](?path=docs/Resources/Master-Data/Transaction-Details.md#reversal-reason-code) the merchant/customer requests for cancel (void).|
| `physicalGoodsIndicator` | *boolean* | N/A | Identifies if physical goods were sold.|
| `authorizationSequence` | *string* | 27 | Type of [authorization sequence](?path=docs/Resources/Guides/Authorizations/Re-Auth.md#authorization-sequence) requested.|
| `createToken` | *boolean* | N/A | Used to create a token on a charge transaction. |
| `primaryOrderId` | *string* | 40 | The unique identifier from the original transaction passed for a reauthorization and incremental authorization. |
| `clientRequestId` | *string* |64 | Echoes back the value in the request header for tracking. |
| `accountVerification` | *boolean* | N/A | Determines if verification should be performed on the Payment Type.|
| `partialApproval` | *string* | 32 | Indicates if a partial approval is allowed. Partial approval should only be used in a card present or gift card transaction. Refer [Partial Approval](#partial-approval) for valid values.|
| `receiptEmail` | *string* | 256 | Email address to send the digital receipt.|
| `paymentDescription` | *string* | 1024 | Payment Description |
| `cardVerificationAmount` | *number* | 18,3 | Amount to charge the card to attempt verification. Note: some card brands do not allow zero $ auth.|
| `partiallyApprovedTransactionAmount` | *number* | 18,3 |  The partially approved transaction amount from the original request. |
| `splitTenderId` | *string* | 1024 | A partially-authorized transaction will generate a Split Tender ID. Subsequent transactions to complete the authorization should include the Split Tender ID so that all the transactions comprising that authorization can be linked. |
| `duplicateTransactionCheckingIndicator` | *boolean* | N/A | Determines if duplicate transactions should be checked.|
| `vaultFundingSource` | *boolean* | N/A | Identifies if the customer information was from the Vault. |
| `retrievalReferenceNumber` | *string* | 12 | Retrieval reference number can be any value based on the merchant’s choosing (e.g. sequential tracking of transactions, fixed value etc.) used for transaction retrieval from the networks. |

<!--
type: tab
-->

JSON string format for `transactionDetails`:

```json
{
   "transactionDetails":{
      "approvalCode": "123456",
      "primaryTransactionId": "838916029301",
      "primaryOrderId": "123456789",
      "clientRequestId": "13267786514316843133216746",
      "captureFlag": false,
      "transactionCaptureType": "TCS",
      "accountVerification": false,
      "partialApproval": "NOT_SUPPORTED",
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
      "primaryTransactionType": "CHARGE_SALE",
      "vaultFundingSource": true,  /// Future Release
      "deviceFingerprint":[  
         {
            "provider": "InAuth",  
            "dataCapture":{
               "rawData": "aaaaaXREUVZGRlFY...aMV",
               "dataEventId": "BB8E4E92...Fz1E063113",  
               "captureTime": "2016-04-16T16:06:05Z"  
            },
            "dataStatic":{  
               "operatingSystem": "ANDROID",
               "operatingSystemVersion": "5.1.1 Lollipop",  
               "model": "XYX-1",  
               "type": "Moto G"  
            },
            "dataDynamic":{
               "latitude": "13.0827 N",
               "longitude": "80.2707 E",
               "ipAddress": "172.27.37.221",
               "captureTime": "2016-04-16T16:06:05Z"
            }
         }
      ],
      "splitShipment":{
         "totalCount": 5,
         "finalShipment": true
      },
      "reversalReasonCode": "VOID",
      "physicalGoodsIndicator": true,
      "authorizationSequence": "CANCEL_BEFORE_AUTHORIZATION",
      "createToken": false,
   }
}
```

<!--type: tab-end -->

---

#### Partial Approval

The below table identifies the valid values of `partialApproval`.

| Value | Description |
| ----- | ----- |
| NOT_SUPPORTED | Partial authorization approvals are not supported |
| SUPPORTED_NO_CASH_BACK | Partial authorization approvals are supported, however partial authorization of cash disbursement amount is not supported. POS/Terminal should not prompt for cash back. |
| MERCH_CASH_BACK_SUPPORTED | Merchandise can be partially authorized, and cash disbursement amount can be partially authorized. |
| MERCH_SUPPORTED_ONLY | Merchandise can be partially authorized, but the cash disbursement amount cannot be partially authorized. |
| CASH_BACK_SUPPORTED_ONLY | Merchandise cannot be partially authorized, but the cash disbursement amount can be partially authorized. |
| MERCH_CASH_BACK_NOT_SUPPORTED | Merchandise cannot be partially authorized and the cash disbursement amount cannot be partially authorized. |

#### Primary Transaction Type

The below table identifies the valid values of `primaryTransactionType`.

| Value | Description |
| ----- | ----- |
| *AUTH_ONLY* | Authorization |
| *CHARGE_PREAUTH* | Pre-authorization |
| *CHARGE_SALE* | Sale |
| *CANCEL* | Cancel/Void |
| *REFUND* | Refund |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)
- [Device Fingerprint](?path=docs/Resources/Master-Data/Device-Fingerprint.md)
- [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md)
- [Transaction Capture Type](?path=docs/Resources/Guides/Settlement/Transaction-Capture-Type.md)

--- 
