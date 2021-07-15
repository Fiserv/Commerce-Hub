---
tags: [carat, commerce-hub, enterprise, card-not-present, card-present, in-person, online, mobile, digital, address-verification, fraud]
---

# Address Verification Services

Commerce Hub supports [Address Verification Service (AVS)](?path=docs/Resources/FAQs-Glossary/Glossary.md#address-verification-service) to verify the cardholder’s [billing address](?path=docs/Resources/Master-Data/Address.md#billing-address) with the association bank. Address verification can be used as a [fraud prevention](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md) measure in card not present transaction.

---

## Request Variables

For the transactions where address verification is required, the merchant's API is required to pass the billing information as part of the request.

<!--
type: tab
title: billingAddress
-->

The below table identifies the required parameters in the `billingAddress` object.

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `firstName` | *string* | N/A | Customer first name. |
| `lastName` | *string* | N/A | Customer last name. |
| `address` | *array* | N/A | [Billing address](?path=docs/Resources/Master-Data/Address.md#billing-address) details. |

<!--
type: tab
title: JSON Example
-->

JSON string format for `billingAddress`:

```json
{
   "billingAddress":{
      "firstName": "John",
      "lastName": "Doe",
      "address":{
         "houseNumberOrName": "112",
         "street": "Main St.",
         "city": "Atlanta",
         "stateOrProvince": "GA",
         "postalCode": "30301",
         "country": "US"
      }
   }
}
```

<!-- type: tab-end -->

---

## AVS Verification Request

### Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/verification`

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of an address verification request.

```json
{
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "billingAddress":{
      "firstName": "John",
      "lastName": "Doe",
      "address":{
         "houseNumberOrName": "112",
         "street": "Main St.",
         "city": "Atlanta",
         "stateOrProvince":"GA",
         "postalCode": "30301",
         "country": "US"
      }
   }
}

```
<!--
type: tab
title: Response
-->

##### Example of an address verification response.

```json

{
  "gatewayResponse": {
    "transactionType": "VERIFICATION",
    "transactionState": "VERIFIED",
    "transactionProcessingDetails": {
      "transactionTime": "2021-06-20T23:42:48Z",
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
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "processorResponseDetails": {
    "approvalStatus": "APPROVED",
    "approvalCode": "OK5882",
    "schemeTransactionId": "0225MCC625628",
    "processor": "fiserv",
    "responseCode": "000000",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "00",
    "hostResponseMessage": "APPROVAL",
    "localTimestamp": "2021.02.25 14:14:38 (CET)",
    "bankAssociationDetails": {
      "associationResponseCode": "000",
      "transactionTimestamp": "2021.02.25 14:14:38 (CET)",
      "avsSecurityCodeResponse": {
        "streetMatch": "EXACT_MATCH",
        "postalCodeMatch": "EXACT_MATCH",
        "securityCodeMatch": "MATCHED",
        "association": {
          "avsCode": "Y"
        }
      }
    }
  },
  "transactionDetails": {
    "merchantInvoiceNumber": "123456789012"
  }
}
```
<!-- type: tab-end -->

---

## AVS Verification with Charges Request

### Endpoint

<!-- theme: success -->
>**POST** `/payments/v1/charges`

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of an address verification during a charges request.

```json
{
   "transactionDetails":{
      "captureFlag": true
   },
   "amount":{
      "total": "12.04",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035",
         "securityCode": "123"
      }
   },
   "billingAddress":{
      "firstName": "John",
      "lastName": "Doe",
      "address":{
         "houseNumberOrName": "112",
         "street": "Main St.",
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
title: Response
-->

##### Charges response containing AVS details.

```json
{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTime": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "10",
         "expirationYear": "2030"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
         "currency": "USD"
      },
      "merchantName": "Merchant Name",
      "merchantAddress": "123 Peach Ave",
      "merchantCity": "Atlanta",
      "merchantStateOrProvince": "GA",
      "merchantPostalCode": "12345",
      "merchantCountry": "US",
      "merchantURL": "https://www.somedomain.com"
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "fiserv",
         "responseCode": "000000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021-06-20T23:42:48Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2021-06-20T23:42:48Z",
            "avsSecurityCodeResponse":{
               "streetMatch": "EXACT_MATCH",
               "postalCodeMatch": "EXACT_MATCH",
               "securityCodeMatch": "MATCHED",
               "association":{
                  "avsCode": "Y"
               }
            }
         }
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   }
}
```
<!-- type: tab-end -->

---

## AVS Security Code Response Values

The result of checking the cardholder’s postal code and address information provided with the issuer’s system returns an AVS result. The [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) contains the `avsSecurityCodeResponse` object with `streetMatch` and `postalCodeMatch` value.


The below table identifies the valid values of `streetMatch` and `postalCodeMatch`.

| Value | Descrption |
| ---- | ------------|
| *EXACT_MATCHED* | Data exactly matches with issuer system |
| *MATCHED* | Data matches with issuer system with some mismatch |
| *NOT_MATCHED* | Data does not match with issuer system |
| *NOT_CHECKED* | Street address or postal code verification not done |
| *NO_INPUT_DATA* | Street address or postal code mot present in the input |

## Association Response Code

The result of checking the cardholder’s postal code and address information provided with the issuer’s system returns an AVS result. The [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) contains `association` object with `avsCode` and `cardHolderNameResponse`.

The below table identifies the valid values of `avsCode`.

| Value | Description |
| ------- | ------- |
| *Y* | Both street and postal code matched |
| *N* | Both street and postal code does not matched |
| *X* | Either street or postal code matched, issuer did not checked other. |
| *U* | Card issuer did not check the AVS information |
| *Z* | Postal code matched but street does not |
| *A* | Street matched but postal code does not |


The below table identifies the valid values of `cardHolderNameResponse`.

<!-- theme: info -->
> Cardholder name response is only valid on American Express (AMEX) transactions.

| Value | Description |
| ------- | ------- |
| *1* | Cardholder name matches |
| *2* | Cardholder name, billing address, and postal code match |
| *3* | Cardholder name and billing postal code match |
| *4* | Cardholder name and billing address match |
| *5* | Cardholder name incorrect, billing address and postal code match |
| *6* | Cardholder name incorrect, billing postal code matches |
| *7* | Cardholder name incorrect, billing address matches |
| *8* | Cardholder name, billing address, and postal code are all incorrect |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/accounts/verification)
- [Address Component](?path=docs/Resources/Master-Data/Address.md)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
- [Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
