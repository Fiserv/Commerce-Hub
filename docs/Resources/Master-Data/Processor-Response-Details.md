# Processor Response Details

## Overview

The processor response contains the response parameters from the Commerce Hub for any successful or unsuccessful transaction.

#### Component: processorResponseDetails

| Variable | Type | Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `approvalStatus` | *string* | | Final status of the transaction. | 
| `approvalCode` |*string* | | Approval code from the processor. |
| `authenticationResponseCode` | string | | Response code from authentication. |
| `referenceNumber` | *string* | | Transaction reference number. |
| `schemeTransactionId` | *string* | | Brand (card issuer) transaction ID. |
| `feeProgramIndicator` | *string* | | Contains the Fee Program Indicator (FPI) code that may be returned on Debit or PLDebit transaction response.|
| `processor` | *string* | 256 | Card processor. |
| `responseCode` | *string* | | Normalized transaction [gateway response code](?path=docs/Resources/Guides/Response-Codes/Gateway.md). | 
| `responseMessage` | *string* | | Normalized transaction [gateway response message](?path=docs/Resources/Guides/Response-Codes/Gateway.md). | 
| `hostResponseCode` | *string* | | Endpoint or issuer [host response code](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md).| 
| `hostResponseMessage` | *string* | | Endpoint or issuer [host response message](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md).|
| `localTimestamp` | *string* | | Transaction timestamp in local time.| 
| `bankAssociationDetails` | *array* | | [Bank association](#subcomponent-bankassociatindetails) response details.|

---

### Approval Status

#### Object: approvalStatus

| Value | Description |
|-------|-------------|
| APPROVED | The transaction was approved. |
| DECLINED | The transaction was declined by the issuing bank. |
| PROCESSING_FAILED | Transaction failed to process, try again later. |
| VALIDATION_FAILED | Validation failed. |
| WAITING | Transaction has been placed in queue. Wait 24 hours before retrying the transaction. |

---

## Bank Association Details

#### Subcomponent: bankAssociationDetails

| Variable | Type | Length | Description/Values |
| ----- | ----- | ----- | ----- |
| associationResponseCode | string | 32 | Bank response code. |
| transactionTimestamp | string | 64 | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ.|
| transactionReferenceInformation| string | 256 | Transaction reference information.|
|avsSecurityCodeResponse | array | | [Address and security code](#subcomponent-avssecuritycoderesponse) response details. |

---

### Address and Security Code Response

#### Subcomponent: avsSecurityCodeResponse

| Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `streetMatch` | *string* | 8 | Contains the normalized gateway response of [street number](?path=docs/Resources/Guides/Fraud/Address-Verification.md#response-values) match.|
| `postalCodeMatch` | *string* | 8 |Contains the noramlized gateway response of [postal code](?path=docs/Resources/Guides/Fraud/Address-Verification.md#response-values) match. |
| `securityCodeMatch` | *string* | 8 |  Contains the noramlized gateway response of [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md#response-values) match. |
| `association` | *array* | | Bank [association](#subcomponent-association) address and security code responses. |

---

### Association Response

#### Subcomponent: association

| Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `avsCode` | *string* |  | Contains the [AVS verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md) response received from the association bank. |
| `securityCodeResponse` | *string* | 32 | Contains the [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) response received from the association bank.
| `cardHolderNameResponse` | *string* |  |Contains the response [cardholder name](?path=docs/Resources/Guides/Fraud/Address-Verification.md#object-cardholdernameresponse) received from the association bank. Only applicable for AMEX card type. |

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Host Response Codes](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)
- [Gateway Response Codes](?path=docs/Resources/Guides/Response-Codes/Gateway.md)
- [Gateway Response](?path=docs/Resources/Master-Data/Gateway-Response.md)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)

---