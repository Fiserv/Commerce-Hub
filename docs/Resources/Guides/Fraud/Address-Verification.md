---
tags: [Address Verification, AVS, Fraud Mitigation]
---

# Prevent fraudulent transactions with Address Verification Services

Commerce Hub supports [Address Verification Service (AVS)](?path=docs/Resources/FAQs-Glossary/Glossary.md#address-verification-service) to verify the cardholder's [billing address](?path=docs/Resources/Master-Data/Address.md#billing-address) and customer name with the association bank. Address verification can be used as a [fraud prevention](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md) measure in [online, digital and mobile transaction](?path=docs/Getting-Started/Getting-Started-Online.md).

---

## Address verification with Account Verification API

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful AVS request using the [Account Verification API](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md). The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification).

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/verification`

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "billingAddress": {
    "firstName": "John",
    "lastName": "Doe",
    "address": {
      "street": "112 Main St.",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30301",
      "country": "US"
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!--
type: tab
-->

Example of an address verification response.

```json
{
  "gatewayResponse": {
    "transactionType": "VERIFICATION",
    "transactionState": "CHECKED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "02",
      "expirationYear": "2035"
    }
  },
  "paymentReceipt": {
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
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z",
        "transactionReferenceInformation": "string",
        "avsSecurityCodeResponse": {
          "streetMatch": "MATCHED",
          "postalCodeMatch": "MATCHED",
          "association": {
            "avsCode": "Y",
            "cardholderNameResponse": "1"
          }
        }
      }
    }
  }
}
```
<!-- type: tab-end -->

---

## Address verification with Charges API

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum [parameters](#parameters) for a successful AVS request using the [Charges API](?path=docs/Resources/API-Documents/Payments/Charges.md). The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
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
  "billingAddress": {
    "firstName": "John",
    "lastName": "Doe",
    "address": {
      "street": "112 Main St.",
      "city": "Atlanta",
      "stateOrProvince": "GA",
      "postalCode": "30301",
      "country": "US"
    }
  }
}
```

<!--
type: tab
-->

Charges API response containing AVS details.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGES",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
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
      "total": 12.04,
      "currency": "USD"
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
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2016-04-16T16:06:05Z",
        "transactionReferenceInformation": "string",
        "avsSecurityCodeResponse": {
          "streetMatch": "MATCHED",
          "postalCodeMatch": "MATCHED",
          "association": {
            "avsCode": "Y",
            "cardholderNameResponse": "1"
          }
        }
      }
    }
  }
}
```
<!-- type: tab-end -->

---

## Parameters

### Request variables

For the transactions where an address verification is required, the merchant's API is required to pass the billing information as part of the request.

<!--
type: tab
titles: billingAddress
-->

The below table identifies the required parameters in the `billingAddress` object.

| Variable | Type| Max Length | Description |
| ----- | :-----: | :-----: | ----- |
| `firstName` | *string* | N/A | Customer first name. |
| `lastName` | *string* | N/A | Customer last name. |
| `address` | *array* | N/A | [Billing address](?path=docs/Resources/Master-Data/Address.md#billing-address) details. |

<!-- type: tab-end -->

---

### Bank response

The result of checking the cardholder’s postal code and address information provided with the issuer’s system returns an AVS result. The [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) contains the `avsSecurityCodeResponse` object with `streetMatch` and `postalCodeMatch` value.

```json
{
  "processorResponseDetails": {
    "bankAssociationDetails": {
      "avsSecurityCodeResponse": {
        "streetMatch": "MATCHED",
        "postalCodeMatch": "MATCHED"
      }
    }
  }
}
```

The below table identifies the valid values of `streetMatch` and `postalCodeMatch`.

| Value | Description |
| ---- | ----- |
| *MATCHED* | Data matches with issuer system with some mismatch |
| *NOT_MATCHED* | Data does not match with issuer system |
| *NOT_CHECKED* | Street address or postal code verification not done |
| *NO_INPUT_DATA* | Street address or postal code not present in the input |
| *NONE* | Street address or postal code not available |

---

### Association response

The result of checking the cardholder’s postal code and address information provided with the issuer’s system returns an AVS result. The [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) contains `association` object with `avsCode` and `cardHolderNameResponse`. The valid response values are based on the host or processor, see the respective processor's spec doc for a list of response values.

<!-- theme: info -->
> Cardholder name response is only valid on American Express (AMEX) and Discover transactions.

```json
{
  "processorResponseDetails": {
    "bankAssociationDetails": {
      "avsSecurityCodeResponse": {
        "association": {
          "avsCode": "Y",
          "cardholderNameResponse": "1"
        }
      }
    }
  }
}
```

---

## See also

- [API Explorer](../api/?type=post&path=/payments/v1/accounts/verification)
- [Address Object](?path=docs/Resources/Master-Data/Address.md)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
