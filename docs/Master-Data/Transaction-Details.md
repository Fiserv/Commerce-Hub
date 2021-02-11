## Transaction Details

The transaction request initiated by merchant contains various transaction related data which is captured in transactionDetails component.

|Variable    | Type| Maximum Length | Description/Values|
|---------|-----------|----------------|---------|
| `captureFlag*` | *boolean* | 5 | Designates if the transaction should be captured. Auth (*FALSE*) or Sale (*TRUE*)|
| `accountVerification` | *boolean* | 5 | Determines if verification should be performed on the Payment Type.|
| `partialApproval` | *boolean* | 5 | Indicates if a partial approval is allowed. Partial approval should only be used in a card present or gift card transaction.|
| `processingCode` | *string* | 6 | A required code is used in conjunction with the message type to define the type of transaction that is by the terminal to the host.</br>Code Format:</br>Position 1-2 : [Transaction Type](url)</br>Position 3–4 : From [Account Type](url)</br>Position 5–6 : To Account Type </br> |
| `merchantTransactionId` | *string* |  | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `merchantOrderId` | *string* |  | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `merchantInvoiceNumber` | *string* |  | Client transaction ID if supplied by client mapped from Retrieval Reference Number (RRN) in the Request.|
| `receiptEmail` | *string* |  | Email id to send the digital receipt.|
| `paymentDescription` | *string* |  | Payment Description|
| `cardVerificationAmount` | *string* |  | Amount to charge the card to attempt verification. Note: some card brands do not allow zero $ auth.|
| `deferredAuthorizationIndicator` | *string* |  | This tag indicates a transaction that occurs when a merchant captures transaction information while the connectivity is interrupted or unavailable. This tag must be sent in the authorization/ purchase/ refund transaction once the connectivity is restored.</br>Accepted Request Types:</br>*INCREMENTAL_AUTH*</br>*RESUBMIT_AUTH*</br>*DELAYED_CHARGE*</br>*REAUTH*</br>*NO_SHOW* - Auto Rental & Lodging</br>*TOP_UP*</br>*DEFERRED_AUTH*|
| `duplicateTransactionCheckingIndicator` | *boolean* | 5 | Determines if duplicate transactions should be checked.|
| `primaryTransactionType` | *string* |  | Identifies the primary transaction type.</br>Accepted Request Types :</br>*AUTH_ONLY*</br>*CHARGE_PREAUTH*</br>*CHARGE_SALE*</br>*CANCEL*</br>*REFUND*|
| `reversalReasonCode` | *string* |  | Reason the merchant/ customer requests for cancel (void).</br>Accepted Request Types:</br>*VOIDED*</br>*TIMEOUT*</br>*EDIT_ERROR*</br>*MAC_VERIFICATION_ERROR*</br>MAC_SYNCH_ERROR</br>*ENCRYPTION_ERROR*</br>*SYSTEM_ERROR*</br>*SUSPECTED_FRAUD*|
| `splitShipment` | *string* |  | Identifies the number of shipments if the transaction will contain multiple shipments. Can be set during pre-auth or the first post-auth.|
| `physicalGoodsIndicator` | *boolean* |  | Identifies if physical goods were sold.|
| [deviceFingerprint {...}](#device-finger-print) | *component* |  | An array containing the device fingerprint details.|

### Device Finger Print

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`provider` | *string* |  |  |
|[dataCapture {...}](#data-capture)| *string* |  | An array containing data Capture details. | 
|[dataStatic {...}](#data-static)| *string* |  | An array containing data Static details.|
|[dataDynamic {...}](#data-dynamic)| *string* |  | An array containing data Dynamic details. |


#### Data Capture

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `rawData` | *string* |  | Raw data from the data capture. |
| `dataEventId` | *string* |  | Unique ID for the data capture. |
| `captureTime` | *string* |  | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ |


#### Data Static

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `operatingSystem` | *string* |  | Device operating system (OS). |
| `operatingSystemVersion` | *string* |  | Device operating system (OS) version. |
| `model` | *string* |  | Device Model. |
| `type` | *string* |  | Device type/name. |


#### Data Dynamic

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `latitude` | *string* |  | Cardholder current latitude GPS position. |
| `longitude` | *string* |  | Cardholder current longitude GPS position. |
| `ipAddress` | *string* |  | Customer IP Address. |
| `captureTime` | *string* |  | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ |