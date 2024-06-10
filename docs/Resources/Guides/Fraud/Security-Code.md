---
tags: [CVV, Fraud, Security Code Verification]
---

# Security Code Verification

Commerce Hub supports [security code](?path=docs/Resources/FAQs-Glossary/Glossary.md#security-code) verification, a service where cardholder is prompted to enter the 3 or 4-digit _(AMEX)_ security code to have it verified by the association bank. Security code verification can be used as a [fraud prevention](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md) measure in card not present transaction.

---

## Request Variables

For the transactions where security code verification is required, the merchant's API is required to pass `securityCode` as part of the `encryptionBlock` and `securityCodeIndicator` as part of the `card` object.

<!--
type: tab
titles: card, JSON Example
-->

The below table identifies the additional required parameters in the `card` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `securityCodeIndicator` | _string_ | | Indicates how the security code is passed |

### Security Code Indicator

The below table identifies the valid values of `securityCodeIndicator`.

| Value | Description |
| ----- | --------- |
| _NOT_SUPPORTED_ | Not supported (Default) |
| _PROVIDED_ | Security code provided in the transaction request |
| _VALUE_ILLEGIBLE_ | Security code value missing or illegible |
| _NOT_AVAILABLE_ | Security code not available. |

<!--
type: tab
-->

JSON string format for `card`:

```json
{
   "card":{
      "securityCodeIndicator": "PROVIDED"
   }
}
```

<!-- type: tab-end -->

---

## Verification Request

### Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/verification`

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a security code verification request.

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "securityCodeIndicator": "PROVIDED"
    },
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/accounts/verification)

<!--
type: tab
-->

Example of a security code verification response.

```json
{
   "gatewayResponse":{
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType": "CHARGES",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "nameOnCard": "Jane Smith",
         "expirationMonth": "02",
         "expirationYear": "2035",
         "bin": "400555",
         "last4": "0019",
         "scheme": "VISA"
      }
   },
   "paymentReceipt":{
      "merchantName": "Merchant Name",
      "merchantAddress": "123 Peach Ave",
      "merchantCity": "Atlanta",
      "merchantStateOrProvince": "GA",
      "merchantPostalCode": "12345",
      "merchantCountry": "US",
      "merchantURL": "https://www.somedomain.com",
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
         "localTimestamp": "2016-04-16T16:06:05Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2016-04-16T16:06:05Z",
            "transactionReferenceInformation": "string",
            "avsSecurityCodeResponse":{
               "securityCodeMatch": "MATCHED",
               "association":{
                 "securityCodeResponse": "M"
               }
            }
         }
      }
   }
}
```

<!-- type: tab-end -->

---

## Verification with Charges Request

### Endpoint

<!-- theme: success -->
> **POST** `/payments/v1/charges`

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a security code verification during a charges request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "securityCodeIndicator": "PROVIDED"
    },
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Charges response containing security code response details.

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "CHARGES",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "currency": "USD",
      "total": 12.04
    },
    "merchantName": "Merchant Name",
    "merchantAddress": "123 Peach Ave",
    "merchantCity": "Atlanta",
    "merchantStateOrProvince": "GA",
    "merchantPostalCode": "12345",
    "merchantCountry": "US",
    "merchantURL": "https://www.somedomain.com",
    "processorResponseDetails": {
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
      "localTimestamp": "2016-04-16T16:06:05Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2016-04-16T16:06:05Z",
        "transactionReferenceInformation": "string",
        "avsSecurityCodeResponse": {
          "securityCodeMatch": "MATCHED",
          "association": {
            "securityCodeResponse": "M"
          }
        }
      }
    }
  }
}
```
 
<!-- type: tab-end -->

---

## Response Values

The result of checking the cardholder's entered security code with the issuer's system returns an security code result. The [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) contains the `avsSecurityCodeResponse` object with `securityCodeMatch` value.

```json
{
  "processorResponseDetails": {
    "bankAssociationDetails": {
      "avsSecurityCodeResponse": {
        "securityCodeMatch": "MATCHED"
      }
    }
  }
}
```

The below table identifies the valid values of `securityCodeMatch`.

| Value | Description |
| ---- | ------------|
| _MATCHED_ | Data matches with issuer system |
| _NOT_MATCHED_ | Data does not match with issuer system |
| _NOT_PROCESSED_ | Security code verification not done |
| _NOT_PRESENT_ | Security code not present in the input |
| _NOT_CERTIFIED_ | Issuer not certified to verify security code |
| _NOT_CHECKED_ | Security code not checked |
| _NONE_ | No security code provided |

---

## Association Response Code

The result of checking the card’s security code provided with the issuer’s system returns a verification result. The [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) contains `association` object with `securityCodeResponse`. The valid response values are based on the host or processor, see the respective processor's spec doc for a list of response values.

```json
{
  "processorResponseDetails": {
    "bankAssociationDetails": {
      "avsSecurityCodeResponse": {
        "association": {
          "securityCodeResponse": "M"
        }
      }
    }
  }
}
```

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
