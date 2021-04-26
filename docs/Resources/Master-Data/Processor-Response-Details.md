# Processor Response Details

## Overview

The Processor Response contains the response parameters from the Commerce Hub for any successful or unsuccessful transaction.

#### Component: processorResponseDetails

| Variable | Type | Length | Description/Values |
| ----- | ----- | ----- | ----- |
| `approvalStatus` | *string* | | Final status of the transaction. | 
| `approvalCode` |*string* | | Approval code from the processor. |
| `authenticationResponseCode` | string | | Response code from authentication. |
| `referenceNumber` | *string* | | Transaction reference number. |
| `schemeTransactionId` | *string* | | Brand (card issuer) transaction ID. |
| `feeProgramIndicator` | *string* | | Contains the Fee Program Indicator (FPI) code that may be returned on Debit or PLDebit transaction response.
| `processor` | *string* | 256 | Card processor. |
| `responseCode` | *string* | | Normalized transaction [gateway response code](?path=docs/Resources/Guides/Response-Codes/Gateway.md). | 
| `responseMessage` | *string* | | Normalized transaction [gateway response message](?path=docs/Resources/Guides/Response-Codes/Gateway.md). | 
| `hostResponseCode` | *string* | | Endpoint or issuer [host response code](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md).| 
| `hostResponseMessage` | *string* | | Endpoint or issuer [host response message](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md).|
| `localTimestamp` | *string* | | Transaction timestamp in local time.| 
| `bankAssociationDetails` | *array* | | Bank Association Details.|

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

    BankAssociationDetails:
      description: 'Bank response details.'
      properties:
        associationResponseCode:
          type: string
          maxLength: 32
          description: 'Bank response code.'
          example: '000'
        transactionTimestamp:
          type: string
          maxLength: 64
          description: 'Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ'
          example: '2016-04-16T16:06:05Z'
        transactionReferenceInformation:
          type: string
          maxLength: 256
          description: 'Transaction reference information.'
          example: ''
        avsSecurityCodeResponse:
          $ref: '#/components/schemas/AvsSecurityCodeResponse'

#### Subcomponent: avsSecurityCodeResponse

| Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `streetMatch` | *string* |  | Contains the Response of Street Matching. Valid Values are MATCH, NO_MATCH, NOT_PROVIDED |
| `postalCodeMatch` | *string* |  |Contains the Response of Postal Code Matching. Valid Values are MATCH, NO_MATCH, NOT_PROVIDED |

    AvsSecurityCodeResponse:
      description: 'Address Verification System (AVS) response object.'
      properties:
        streetMatch:
          type: string
          maxLength: 8
          description: 'AVS street address result message.'
          example: 'MATCH'
        postalCodeMatch:
          type: string
          maxLength: 8
          description: 'AVS postal code result message.'
          example: 'MATCH'
        securityCodeMatch:
          type: string
          maxLength: 8
          description: 'Security code result message.'
          example: 'MATCH'
        association:
          $ref: '#/components/schemas/Association'

#### Subcomponent: association

| Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
| `avsCode` | *string* |  | Contains the [AVS verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md) response received from the association bank. |
| securityCodeResponse | string | 32 | Contains the [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) response received from the association bank.
| `cardHolderNameResponse` | *string* |  |Contains the Response cardholder name matching. Only applicable for AMEX card type. |

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Host Response Codes](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)
- [Gateway Response Codes](?path=docs/Resources/Guides/Response-Codes/Gateway.md)
- [Gateway Response](?path=docs/Resources/Master-Data/Gateway-Response.md)

---