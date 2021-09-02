---
tags: [carat, commerce-hub, enterprise,authorization-type-indicator, primary-transaction-type, reversal-reason-code, authorization-sequence, device-fingerprint-data, data-capture, data-dynamic, master-data, transactional-data, transaction-details,]
---

# Transactional Details

The transaction request initiated by merchant contains various transaction related data which is captured in `transactionDetails` object.

<!--
type: tab
title: transactionDetails
-->

The below table identifies the parameters in the `transactionDetails` object.

| Variable | Type| Maximum Length | Description|
|---------|-----------|----------------|---------|
| `approvalCode` | *string* | N/A | Reference number received as the result of a successful external authorization (e.g. by phone). The gateway requires this number for a [forced post](?path=docs/Resources/API-Documents/Payments/Forced.md) transaction to a previously performed external authorization. |
| `primaryTransactionId` | *string* | 64 | The unique identifier from the original transaction passed for a reauthorization and incremental authorization. |
| `captureFlag` | *boolean* | N/A | Designates if the transaction should be captured. Auth (*FALSE*) or Sale (*TRUE*)|
| `transactionCaptureType` | *string* | N/A | Identifies if a settlement was host capture or terminal capture. |
| `accountVerification` | *boolean* | 5 | Determines if verification should be performed on the Payment Type.|
| `partialApproval` | *boolean* | 5 | Indicates if a partial approval is allowed. Partial approval should only be used in a card present or gift card transaction. Refer [Partial Approval](#partial-approval) for valid values.|
| `processingCode` | *string* | 6 | A [required code](?path=docs/Resources/Master-Data/Processing-Code.md) is used in conjunction with the message type to define the type of transaction that is by the terminal to the host.|
| `merchantTransactionId` | *string* | 64 | Unique merchant transaction ID (aka transaction reference ID). |
| `merchantOrderId` | *string* | 128 | Merchant order ID (aka customer reference number or purchase order number). |
| `merchantInvoiceNumber` | *string* | 1024 | Merchant invoice number (aka reference number). |
| `receiptEmail` | *string* | 256 | Email id to send the digital receipt.|
| `paymentDescription` | *string* | 1024 | Payment Description |
| `cardVerificationAmount` | *number* |  | Amount to charge the card to attempt verification. Note: some card brands do not allow zero $ auth.|
| `partiallyApprovedTransactionAmount` | *number* |  |  The partially approved transaction amount from the original request. |
| `splitTenderId` | *string* | 1024 | A partially-authorized transaction will generate a Split Tender ID. Subsequent transactions to complete the authorization should include the Split Tender ID so that all the transactions comprising that authorization can be linked. |
| `authorizationTypeIndicator` | *string* | N/A | Identifies the [authorization type](#authorization-type-indicator) of subsequent transactions. |
| `duplicateTransactionCheckingIndicator` | *boolean* | N/A | Determines if duplicate transactions should be checked.|
| `primaryTransactionType` | *string* | 14 | Identifies the [primary transaction type](#primary-transaction-type).|
| `vaultFundingSource` | *boolean* | N/A | Identifies if the customer information was from the Vault. |
| `deviceFingerprint` | *array* | N/A | An array containing the [device fingerprint](?path=docs/Resources/Master-Data/Device-Fingerprint.md) details.|
| `splitShipment` | *object* |N/A| Identifies the number of shipments if the transaction will contain [multiple shipments](?path=docs/Resources/Guides/Split-Shipment.md). Can be set during pre-auth or the first post-auth.|
| `reversalReasonCode` | *string* | 22 | [Reason](#reversal-reason-code) the merchant/customer requests for cancel (void).|
| `physicalGoodsIndicator` | *boolean* | N/A | Identifies if physical goods were sold.|
| `authorizationSequence` | *string* | 27 | Type of [authorization sequence](#authorization-sequence) requested.|
| `createToken` | *boolean* | N/A | Used to create a token on a charge transaction. |
| `TPPID` | *string* |  | Third party processor ID assigned by Fiserv. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `transactionDetails`:

```json
{
   "transactionDetails":{
      "approvalCode": "string",
      "primaryTransactionId": "838916029301",
      "captureFlag": false,
      "transactionCaptureType": "TCS",
      "accountVerification": false,
      "partialApproval": "string",
      "processingCode": "000000",
      "merchantTransactionId": "1343678765",
      "merchantOrderId": "845366457890-TODO",
      "merchantInvoiceNumber": "123890",
      "receiptEmail": "abc@gmail.com",
      "paymentDescription": "string",
      "cardVerificationAmount": 0.02,
      "partiallyApprovedTransactionAmount": 10.55,
      "splitTenderId": "12423434",
      "authorizationTypeIndicator": "REAUTH",
      "duplicateTransactionCheckingIndicator": true,
      "primaryTransactionType": "CHARGE_SALE",
      "vaultFundingSource": true,
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
      "TPPID": "string"
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


#### Authorization Type Indicator

The below table identifies the valid values of `authorizationTypeIndicator` in subsequent transactions.

| Value | Description |
| ----- | ----- |
| *INITIAL* | Initial authorization. |
| *REAUTH* | [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)|
| *DEFERRED* | [Deferred Auth](?path=docs/Resources/Guides/Authorizations/Deferred-Auth.md) |
| *INCREMENTAL* | [Incremental Auth](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md) |

#### Primary Transaction Type

The below table identifies the valid values of `primaryTransactionType`.

| Value | Description |
| ----- | ----- |
| *AUTH_ONLY* | Authorization |
| *CHARGE_PREAUTH* | Pre-authorization |
| *CHARGE_SALE* | Sale |
| *CANCEL* | Cancel/Void |
| *REFUND* | Refund |

#### Reversal Reason Code

The below table identifies the valid values of `reversalReasonCode` the reason merchant/customer requests for cancel (void).

| Value | Description |
| ----- | ----- |
| *VOID* | Cancel/Void |
| *TIMEOUT* | Transaction timeout |
| *EDIT_ERROR* | 
| *MAC_VERIFICATION_ERROR* | Mac Verification error |
| *MAC_SYNCH_ERROR* | Mac sync error |
| *ENCRYPTION_ERROR* | Encryption error |
| *SYSTEM_ERROR* | System error |
| *SUSPECTED_FRAUD* | Suspect fraud |

#### Authorization Sequence

The below table identifies the valid values of type of `authorizationSequence`.

| Value | Description |
| ----- | ----- |
| *AUTHORIZATION_ONLY* | Only authorization |
| *AUTHORIZATION_BEFORE_CANCEL* | Authorization before cancel |
| *CANCEL_BEFORE_AUTHORIZATION* | Cancel before authorization |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)

---
