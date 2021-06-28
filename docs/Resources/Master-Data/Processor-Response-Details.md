---
tags: [carat, commerce-hub, enterprise, master-data, processor-response-parameters]
---

# Processor Response Parameters

The processor response contains the response parameters from the Commerce Hub for any successful or unsuccessful transaction.

## Processor Response Details

<!--
type: tab
title: processorResponseDetails
-->

The below table identifies the required parameters in the `processorResponseDetails` object.

| Variable | Type | Maximum Length | Description |
| ----- | ----- | ----- | ----- |
| `approvalStatus` | *string* | | Final [status](#approval-status) of the transaction | 
| `approvalCode` |*string* | | Approval code from the processor |
| `authenticationResponseCode` | string | | Response code from authentication |
| `referenceNumber` | *string* | | Transaction reference number |
| `schemeTransactionId` | *string* | | Brand (card issuer) transaction ID |
| `feeProgramIndicator` | *string* | | Contains the Fee Program Indicator (FPI) code that may be returned on Debit or PLDebit transaction response.|
| `processor` | *string* | 256 | Card processor |
| `responseCode` | *string* | | Normalized transaction [gateway response code](?path=docs/Resources/Guides/Response-Codes/Gateway.md) | 
| `responseMessage` | *string* | | Normalized transaction [gateway response message](?path=docs/Resources/Guides/Response-Codes/Gateway.md) | 
| `hostResponseCode` | *string* | | Endpoint or issuer [host response code](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)| 
| `hostResponseMessage` | *string* | | Endpoint or issuer [host response message](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)|
| `localTimestamp` | *string* | | Transaction timestamp in local time.| 
| `bankAssociationDetails` | *object* | | [Bank association](#bank-association-details) response details |

<!--
type: tab
title: JSON Example
-->

JSON string format for `processorResponseDetails`:

```json
{
   "processorResponseDetails":{
      "approvalStatus": "APPROVED",
      "approvalCode": "OK3483",
      "authenticationResponseCode": "string",
      "referenceNumber": "845366457890-TODO",
      "schemeTransactionId": "019078743804756",
      "feeProgramIndicator": "123",
      "processor": "fiserv",
      "responseCode": "00000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021.02.25 14:14:38 (EST)",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "transactionReferenceInformation": "string",
         "avsSecurityCodeResponse":{
            "streetMatch": "MATCH",
            "postalCodeMatch": "MATCH",
            "securityCodeMatch": "MATCH",
            "association":{
               "avsCode": "BOTH_MATCH",
               "securityCodeResponse": "MATCH",
               "cardholderNameResponse": "NAME_MATCH"
            }
         }
      }
   }
}
```

<!--type: tab-end -->

---

#### Approval Status

The below table identifies the valid values of `approvalStatus`.

| Value | Description |
|-------|-------------|
| *APPROVED* | The transaction was approved |
| *DECLINED* | The transaction was declined by the issuing bank |
| *PROCESSING_FAILED* | Transaction failed to process, try again later |
| *VALIDATION_FAILED* | Validation failed |
| *WAITING* | Transaction has been placed in queue. Wait 24 hours before retrying the transaction. |

---

## Bank Association Details

Indicates the bank association response details.

<!--
type: tab
title: bankAssociationDetails
-->

The below table identifies the required parameters in the `bankAssociationDetails` object.

| Variable | Type | Maximum Length | Description |
| ----- | ----- | ----- | ----- |
|` associationResponseCode` | string | 32 | Bank response code |
| `transactionTimestamp` | string | 64 | Timestamp in ISO 8601 fromat YYYY-MM-DDThh:mm:ssZ|
| `transactionReferenceInformation` | string | 256 | Transaction reference information|
| `avsSecurityCodeResponse` | object | | [Address and security code response](#address-and-security-code-response) details |

<!--
type: tab
title: JSON Example
-->

JSON string format for `bankAssociationDetails`:

```json
{
   "bankAssociationDetails":{
      "associationResponseCode": "000",
      "transactionTimestamp": "2016-04-16T16:06:05Z",
      "transactionReferenceInformation": "string",
      "avsSecurityCodeResponse":{
         "streetMatch": "MATCH",
         "postalCodeMatch": "MATCH",
         "securityCodeMatch": "MATCH",
         "association":{
            "avsCode": "BOTH_MATCH",
            "securityCodeResponse": "MATCH",
            "cardholderNameResponse": "NAME_MATCH"
         }
      }
   }
}
```

<!--type: tab-end -->

---

## Address and Security Code Response

Indicates the AVS and Security code gateway response details.

<!--
type: tab
title: avsSecurityCodeResponse
-->

The below table identifies the required parameters in the `avsSecurityCodeResponse` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `streetMatch` | *string* | 1 | Contains the normalized gateway response of [street number](#street-match) match.|
| `postalCodeMatch` | *string* | 1 |Contains the noramlized gateway response of [postal code](#postal-code-match) match. |
| `securityCodeMatch` | *string* | 8 |  Contains the noramlized gateway response of [security code](#security-code-match) match. |
| `association` | *object* | | Bank [association](#association-response) address and security code responses |

<!--
type: tab
title: JSON Example
-->

JSON string format for `avsSecurityCodeResponse`:

```json
{
   "avsSecurityCodeResponse":{
      "streetMatch": "MATCH",
      "postalCodeMatch": "MATCH",
      "securityCodeMatch": "MATCH",
      "association":{
         "avsCode": "BOTH_MATCH",
         "securityCodeResponse": "MATCH",
         "cardholderNameResponse": "NAME_MATCH"
      }
   }
}
```

<!--type: tab-end -->

#### Street Match

The `streetMatch` variable contains the result for street address verification from the card issuer. The below table identifies the valid values of `streetMatch`.

| Value | Descrption |
| ---- | ------------|
| *Y* | MATCHED |
| *N* | NOT_MATCHED |
| *X* | NOT_CHECKED |
| *P* | NO_INPUT_DATA |

#### Postal Code Match

The `postalCodeMatch` variable contains the result for postal code verification from the card issuer. The below table identifies the valid values of `postalCodeMatch`.

| Value | Descrption |
| ---- | ------------|
| *Y* | MATCHED |
| *N* | NOT_MATCHED |
| *X* | NOT_CHECKED |
| *P* | NO_INPUT_DATA |

#### Security Code Match

The `securityCodeMatch` variable contains the result for security code verification from the card issuer. The below table identifies the valid values of `securityCodeMatch`.

| Value | Descrption |
| ---- | ------------|
| *M* | Card security code matched |
| *N* | Card security code does not matched |
| *P* | Not processed |
| *S* | Merchant has indicated that the card security code is not present on the card. |
| *U* | Issuer is not certified and/or not provides encryption keys. |
| *X* | No response from the credit card association was received. |

---

## Association Response

Indicates the AVS and Security code association response details.

<!--
type: tab
title: association
-->

The below table identifies the required parameters in the `association` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `avsCode` | *string* | 32 | Contains the [AVS verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md) response received from the association bank. |
| `securityCodeResponse` | *string* | 32 | Contains the [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) response received from the association bank. |
| `cardHolderNameResponse` | *string* |  |Contains the response [cardholder name](?path=docs/Resources/Guides/Fraud/Address-Verification.md#object-cardholdernameresponse) received from the association bank. Only applicable for AMEX card type. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `association`:

```json
{
   "association":{
      "avsCode": "BOTH_MATCH",
      "securityCodeResponse": "MATCH",
      "cardholderNameResponse": "NAME_MATCH"
   }
}
```

<!--type: tab-end -->

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Gateway Response Codes](?path=docs/Resources/Guides/Response-Codes/Gateway.md)
- [Gateway Response](?path=docs/Resources/Master-Data/Gateway-Response.md)
- [Host Response Codes](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)

---