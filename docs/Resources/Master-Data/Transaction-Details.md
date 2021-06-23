---
tags: [carat, commerce-hub, enterprise,authorization-type-indicator, primary-transaction-type, reversal-reason-code, authorization-sequence, device-fingerprint-data, data-capture, data-dynamic, master-data, transactional-data, transaction-details,]
---


# Transactional Data

The transaction request initiated by merchant contains various transaction related data which is captured in `transactionDetails` component.

<!--
type: tab
title: transactionDetails
-->

Parameters included in the `transactionDetails` object:

|Variable    | Type| Maximum Length | Description/Values|
|---------|-----------|----------------|---------|
| `approvalCode` | *string* |  | Reference number received as the result of a successful external authorization (e.g. by phone). The gateway needs this number for uniquely mapping a ForcedTicket transaction to a previously performed external authorization. |
| `primaryTransactionId` | *string* | 64 | The unique identifier from the original transaction passed for a reauthorization and incremental authorization. |
| `captureFlag` | *boolean* |  | Designates if the transaction should be captured. Auth (*FALSE*) or Sale (*TRUE*)|
| `transactionCaptureType` | *string* |  |  |
| `accountVerification` | *boolean* | 5 | Determines if verification should be performed on the Payment Type.|
| `partialApproval` | *boolean* | 5 | Indicates if a partial approval is allowed. Partial approval should only be used in a card present or gift card transaction.|
| `processingCode` | *string* | 6 | A [required code](?path=docs/Resources/Master-Data/Processing-Code.md) is used in conjunction with the message type to define the type of transaction that is by the terminal to the host.|
| `merchantTransactionId` | *string* | 64 | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `merchantOrderId` | *string* | 128 | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `merchantInvoiceNumber` | *string* | 1024 | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `receiptEmail` | *string* | 256 | Email id to send the digital receipt.|
| `paymentDescription` | *string* | 1024 | Payment Description|
| `cardVerificationAmount` | *number* |  | Amount to charge the card to attempt verification. Note: some card brands do not allow zero $ auth.|
| `partiallyApprovedTransactionAmount` | *number* |  |  The partially approved transaction amount from the original request. |
| `splitTenderId` | *string* | 1024 | A partially-authorized transaction will generate a Split Tender ID. Subsequent transactions to complete the authorization should include the Split Tender ID so that all the transactions comprising that authorization can be linked. |
| `authorizationTypeIndicator` | *string* |  | Identifies the [authorization type](#authorization-type-indicator) of subsequent transactions. |
| `duplicateTransactionCheckingIndicator` | *boolean* |  | Determines if duplicate transactions should be checked.|
| `primaryTransactionType` | *string* | 14 | Identifies the [primary transaction type](#primary-transaction-type).|
| `vaultFundingSource` | *boolean* |  | Identifies if the customer information was from the Vault. |
| `deviceFingerprint` | *array* |  | An array containing the [device fingerprint](#device-fingerprint) details.|
| `splitShipment` | *string* |  | Identifies the number of shipments if the transaction will contain [multiple shipments](?path=docs/Resources/Guides/Split-Shipment.md). Can be set during pre-auth or the first post-auth.|
| `reversalReasonCode` | *string* | 22 | [Reason](#reversal-reason-code) the merchant/customer requests for cancel (void).|
| `physicalGoodsIndicator` | *boolean* |  | Identifies if physical goods were sold.|
| `authorizationSequence` | *string* | 27 | Type of [authorization sequence](#authorization-sequence) requested.|
| `createToken` | *boolean* | | Used to create a token on a charge transaction. |

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
      "captureFlag":false,
      "transactionCaptureType": "TCS",
      "accountVerification":false,
      "partialApproval": "string",
      "processingCode": "000000",
      "merchantTransactionId": "1343678765",
      "merchantOrderId": "845366457890-TODO",
      "merchantInvoiceNumber": "123890",
      "receiptEmail": "abc@gmail.com",
      "paymentDescription": "string",
      "cardVerificationAmount":0.02,
      "partiallyApprovedTransactionAmount":10.55,
      "splitTenderId": "12423434",
      "authorizationTypeIndicator": "REAUTH",
      "duplicateTransactionCheckingIndicator":true,
      "primaryTransactionType": "CHARGE_SALE",
      "vaultFundingSource":true,
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
         "totalCount":5,
         "finalShipment":true
      },
      "reversalReasonCode": "VOID",
      "physicalGoodsIndicator":true,
      "authorizationSequence": "CANCEL_BEFORE_AUTHORIZATION",
      "createToken": false
   }
}
```

<!--type: tab-end -->

---

#### Authorization Type Indicator

Identifies the authorization type of subsequent transactions. Valid values are:

| Value | Description |
| ----- | ----- |
| *INITIAL* | Initial authorization. |
| *REAUTH* | [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)|
| *DEFERRED* | [Deferred Auth](?path=docs/Resources/Guides/Authorizations/Deferred-Auth.md) |
| *INCREMENTAL* | [Incremental Auth](?path=docs/Resources/Guides/Authorizations/Incremental-Auth.md) |

#### Primary Transaction Type

Identifies the primary transaction type. Valid values are:

| Value | Description |
| ----- | ----- |
| *AUTH_ONLY* | Authorization |
| *CHARGE_PREAUTH* | Pre-authorization |
| *CHARGE_SALE* | Sale |
| *CANCEL* | Cancel/Void |
| *REFUND* | Refund |

#### Reversal Reason Code

Indicates the reason the merchant/customer requests for cancel (void). Valid values are:

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

Indicates type of authorization sequence requested. Valid values are:

| Value | Description |
| ----- | ----- |
| *AUTHORIZATION_ONLY* | Only authorization |
| *AUTHORIZATION_BEFORE_CANCEL* | Authorization before cancel |
| *CANCEL_BEFORE_AUTHORIZATION* | Cancel before authorization |

## Device Fingerprint Data

Array that contains the device finger print data.

<!--
type: tab
title: deviceFingerprintData
-->

Parameters included in the `deviceFingerprint` object:

| Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`provider` | *string* |  | Device provider e.g. InAuth. |
|`dataCapture`| *object* |  | [Data capture](#data-capture) details. | 
|`dataStatic`| *object* |  | [Data static](#data-static) details.|
|`dataDynamic`| *object* |  | [Data dynamic](#data-dynamic) details. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `deviceFingerprint`:

```json
{
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
   ]
}

```

<!--type: tab-end -->

## Data Capture

Contains the finger print data and time it is captured.

<!--
type: tab
title: dataCapture
-->

Parameters included in the `dataCapture` object:

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------: | ------------------ |
| `rawData` | *string* | 256 | Raw data from the data capture. |
| `dataEventId` | *string* | 256 | Unique ID for the data capture. |
| `captureTime` | *string* | 20 | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `dataCapture`:

```json
{
   "dataCapture":{
      "rawData": "aaaaaXREUVZGRlFY...aMV",
      "dataEventId": "BB8E4E92...Fz1E063113",
      "captureTime": "2016-04-16T16:06:05Z"
   }
}
```

<!--type: tab-end -->

## Data Static

Contains the static data such as operating system details and device type/model.

<!--
type: tab
title: dataStatic
-->

Parameters included in the `dataStatic` object:

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `operatingSystem` | *string* | 256 | Device operating system (OS). |
| `operatingSystemVersion` | *string* |  56| Device operating system (OS) version. |
| `model` | *string* | 256 | Device Model. |
| `type` | *string* | 256 | Device type/name. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `dataStatic`:

```json
{
   "dataStatic":{
      "operatingSystem": "ANDROID",
      "operatingSystemVersion": "5.1.1 Lollipop",
      "model": "XYX-1",
      "type": "Moto G"
   }
}
```

<!--type: tab-end -->

## Data Dynamic

Contains the dayamic data like device location and ipaddress. 

<!--
type: tab
title: dataDynamic
-->

Parameters included in the `dataDynamic` object:

| Variable | Type | Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `latitude` | *string* | 256 | Cardholder current latitude GPS position. |
| `longitude` | *string* | 256 | Cardholder current longitude GPS position. |
| `ipAddress` | *string* | 39 | Customer IP Address. |
| `captureTime` | *string* | 20 | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ. |


<!--
type: tab
title: JSON Example
-->

JSON string format for `dataDynamic`:

```json
{
   "dataDynamic":{
      "latitude": "13.0827 N",
      "longitude": "80.2707 E",
      "ipAddress": "172.27.37.221",
      "captureTime": "2016-04-16T16:06:05Z"
   }
}

```
<!--type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)

---
