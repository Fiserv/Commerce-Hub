# Transaction Details

## Overview

The transaction request initiated by merchant contains various transaction related data which is captured in `transactionDetails` component.

#### Component: transactionDetails

|Variable    | Type| Maximum Length | Description/Values|
|---------|-----------|----------------|---------|
| `captureFlag` | *boolean* | 5 | Designates if the transaction should be captured. Auth (*FALSE*) or Sale (*TRUE*)|
| `accountVerification` | *boolean* | 5 | Determines if verification should be performed on the Payment Type.|
| `partialApproval` | *boolean* | 5 | Indicates if a partial approval is allowed. Partial approval should only be used in a card present or gift card transaction.|
| `processingCode` | *string* | 6 | A [required code](?path=docs/Resources/Master-Data/Processing-Code.md) is used in conjunction with the message type to define the type of transaction that is by the terminal to the host.|
| `merchantTransactionId` | *string* |  | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `merchantOrderId` | *string* |  | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `merchantInvoiceNumber` | *string* |  | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `receiptEmail` | *string* |  | Email id to send the digital receipt.|
| `paymentDescription` | *string* |  | Payment Description|
| `cardVerificationAmount` | *string* |  | Amount to charge the card to attempt verification. Note: some card brands do not allow zero $ auth.|
| `authorizationTypeIndicator` | *string* |  | Identifies the authorization type of subsequent transactions. **Valid Values:** *INCREMENTAL*, *RESUBMIT*, *DELAYED_CHARGE*, *REAUTH*, *NO_SHOW*, *TOP_UP*, *DEFERRED*|
| `duplicateTransactionCheckingIndicator` | *boolean* | 5 | Determines if duplicate transactions should be checked.|
| `primaryTransactionType` | *string* |  | Identifies the primary transaction type. **Valid Values:** *AUTH_ONLY*, *CHARGE_PREAUTH*, *CHARGE_SALE*, *CANCEL*, *REFUND*|
| `reversalReasonCode` | *string* |  | Reason the merchant/ customer requests for cancel (void). **Valid Values:** *VOIDED*, *TIMEOUT*, *EDIT_ERROR*, *MAC_VERIFICATION_ERROR*, MAC_SYNCH_ERROR, *ENCRYPTION_ERROR*, *SYSTEM_ERROR*, *SUSPECTED_FRAUD*|
| `splitShipment` | *string* |  | Identifies the number of shipments if the transaction will contain multiple shipments. Can be set during pre-auth or the first post-auth.|
| `physicalGoodsIndicator` | *boolean* |  | Identifies if physical goods were sold.|
| `deviceFingerprint` | *array* |  | An array containing the [device fingerprint](#subcomponent-devicefingerprint) details.|

---

### Device Fingerprint

#### Subcomponent: deviceFingerprint

| Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`provider` | *string* |  | Device provider e.g. InAuth. |
|`dataCapture`| *array* |  | An array containing [data capture](#subcomponent-datacapture) details. | 
|`dataStatic`| *array* |  | An array containing [data static](#subcomponent-datastatic) details.|
|`dataDynamic`| *array* |  | An array containing [data dynamic](#subcomponent-datadynamic) details. |

---

### Device Fingerprint Data

#### Subcomponent: dataCapture

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `rawData` | *string* |  | Raw data from the data capture. |
| `dataEventId` | *string* |  | Unique ID for the data capture. |
| `captureTime` | *string* |  | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ. |

#### Subcomponent: dataStatic

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `operatingSystem` | *string* |  | Device operating system (OS). |
| `operatingSystemVersion` | *string* |  | Device operating system (OS) version. |
| `model` | *string* |  | Device Model. |
| `type` | *string* |  | Device type/name. |

#### Subcomponent: dataDynamic

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `latitude` | *string* |  | Cardholder current latitude GPS position. |
| `longitude` | *string* |  | Cardholder current longitude GPS position. |
| `ipAddress` | *string* |  | Customer IP Address. |
| `captureTime` | *string* |  | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ. |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Dynamic Descriptors](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)

---
