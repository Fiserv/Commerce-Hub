---
tags: [CVV, Fraud, Security Code Verification]
---

# Security Code Verification

Commerce Hub supports [security code](?path=docs/Resources/FAQs-Glossary/Glossary.md#security-code) verification, a service where cardholder is prompted to enter the 3 or 4-digit (AMEX) security code to have it verified by the association bank. Security code verification can be used as a [fraud prevention](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md) measure in card not present transaction.

---

## Request Variables

For the transactions where security code verification is required, the merchant's API is required to pass `securityCode` and `securityCodeIndicator` as part of the card array.


<!--
type: tab
titles: card, JSON Example
-->

The below table identifies the additional required parameters in the `card` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`securityCode` | *string* | 3| The card security code |
|`securityCodeIndicator` | *string* | | Indicates how the security code is passed |

#### Security Code Indicator

The below table identifies the valid values of `securityCodeIndicator`.

| Value | Description |
| ----- | --------- |
| *NOT_SUPPORTED* | Not supported (Default) |
| *PROVIDED* | Security code provided in the transaction request |
| *VALUE_ILLEGIBLE* | Security code value missing or illegible |
| *NOT_AVAILABLE* | Security code not available. |

<!--
type: tab
-->

JSON string format for `card`:

```json
{
   "card":{
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123",
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

##### Example of a security code verification request.

```json
{
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035",
         "securityCode": "123",
         "securityCodeIndicator": "PROVIDED"
      }
    },
    "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/accounts/verification)

<!--
type: tab
-->

##### Example of a security code verification response.

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
>**POST** `/payments/v1/charges`

### Payload Example

<!--
type: tab
titlea: Request, Response
-->

##### Example of a security code verification during a charges request.

```json
{
   "transactionDetails":{
      "captureFlag":true
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
         "securityCode": "123",
         "securityCodeIndicator": "PROVIDED"
      }
   }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

##### Charges response containing security code response details.

```json
{
   "gatewayResponse":{
      "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType":"token",
      "transactionState":"authorized",
      "transactionOrigin":"ecom",
      "transactionProcessingDetails":{
         "transactionDate":"2016-04-16",
         "transactionTime":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "source":{
      "sourceType":"PaymentCard",
      "tokenData":"1234123412340019",
      "PARId":"string",
      "declineDuplicates":"FALSE",
      "tokenSource":"string",
      "card":{
         "nameOnCard":"Jane Smith",
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019"
      }
   },
   "processorResponseDetails":{
      "approvalStatus":"APPROVED",
      "approvalCode":"OK3483",
      "authenticationResponseCode":"string",
      "referenceNumber":"845366457890-TODO",
      "schemeTransactionId":"019078743804756",
      "feeProgramIndicator":"123",
      "processor":"fiserv",
      "responseCode":"00000",
      "responseMessage":"APPROVAL",
      "hostResponseCode":"00",
      "hostResponseMessage":"APPROVAL",
      "localTimestamp":"2021.02.25 14:14:38 (EST)",
      "bankAssociationDetails":{
         "associationResponseCode":"000",
         "transactionTimestamp":"2016-04-16T16:06:05Z",
         "avsSecurityCodeResponse":{
            "securityCodeMatch":"MATCHED",
            "association":{
               "securityCodeResponse":"M"
            }
         }
      }
   }
}
```
 
<!-- type: tab-end -->

---

## Response Values

The result of checking the cardholder’s entered security code with the issuer’s system returns an security code result. The [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) contains the `avsSecurityCodeResponse` object with `securityCodeMatch` value.

```json
{
      "processorResponseDetails":{
         "bankAssociationDetails":{
            "avsSecurityCodeResponse":{
               "securityCodeMatch": "MATCHED"
            }
         }
      }
}
```

The below table identifies the valid values of `securityCodeMatch`.

| Value | Descrption |
| ---- | ------------|
| *MATCHED* | Data matches with issuer system |
| *NOT_MATCHED* | Data does not match with issuer system |
| *NOT_PROCESSED* | Security code verification not done |
| *NOT_PRESENT* | Security code not present in the input |
| *NOT_CERTIFIED* | Issuer not certified to verify sercurity code |
| *NOT_CHECKED* | Security code not checked |
| *NONE* | No security code provided |

---

## Association Response Code

The result of checking the card’s security code provided with the issuer’s system returns a verification result. The [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md) contains `association` object with `securityCodeResponse`. The valid response values are based on the host or processor, see the respective orocessor's spec doc for a list of response values.

```json
{
      "processorResponseDetails":{
         "bankAssociationDetails":{
            "avsSecurityCodeResponse":{
               "association":{
                 "securityCodeResponse": "M"
               }
            }
         }
      }
}
```


<!---
The below table identifies the valid values of `securityCodeResponse`.

| Value | Descrption |
| ---- | ------------|
| *M* | Card security code matched |
| *N* | Card security code does not matched |
| *P* | Not processed |
| *S* | Merchant has indicated that the card security code is not present on the card. |
| *U* | Issuer is not certified and/or not provides encryption keys. |
| *X* | No response from the credit card association was received. |
| | A blank response will indicate that no code was sent and that there was no indication that the code was present on the card. |
-->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address/Security Code Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Card Details](?path=docs/Resources/Master-Data/Card.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

---
