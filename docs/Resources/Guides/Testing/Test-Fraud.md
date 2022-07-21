---
tags: [Testing, Test Integration, Test Cards, Test Fraud]
---

# Test Fraud Settings

[Fraud settings](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) can be tested in Commerce Hub after setting them on the test account in [Marketplace]. A fraud response can be triggered when testing a Commerce Hub integration in the sandbox environment in two ways, by passing a specific [error code](?path=docs/Resources/Guides/Testing/Test-Errors.md) or by submitting an applicable transaction that meets a fraud filter.

---

## Address and Security Code

To verify [address and security code](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md) fraud settings, submit a transaction using the corresponding [test values](?path=docs/Resources/Guides/Testing/Test-Address-Security.md) in the request.


### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of an address verification filter request where the transaction is set to decline if the address does not match.

```json
{
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
         "securityCode": "111",
         "securityCodeIndicator": "PROVIDED"
      }
   },
   "billingAddress":{
      "firstName": "1",
      "address":{
         "street": "NOT_MATCHED",
         "postalCode": "11111",
      }
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
   }
}

```
<!--
type: tab
-->


```json
{
   "gatewayResponse":{
      "transactionType":"CHARGE",
      "transactionState":"APPROVED",
      "transactionOrigin":"ECOM",
      "transactionProcessingDetails":{
         "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
         "transactionTimestamp":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total":12.04,
         "currency":"USD"
      },
      "merchantName":"Merchant Name",
      "merchantAddress":"123 Peach Ave",
      "merchantCity":"Atlanta",
      "merchantStateOrProvince":"GA",
      "merchantPostalCode":"12345",
      "merchantCountry":"US",
      "merchantURL":"https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus":"APPROVED",
         "approvalCode":"OK5882",
         "schemeTransactionId":"0225MCC625628",
         "processor":"FISERV",
         "host": "NASHVILLE",
         "responseCode":"000",
         "responseMessage":"Address Verification Failed",
         "hostResponseCode":"00",
         "hostResponseMessage":"APPROVAL",
         "localTimestamp":"2021-06-20T23:42:48Z",
         "bankAssociationDetails":{
            "associationResponseCode":"000",
            "transactionTimestamp":"2016-04-16T16:06:05Z",
            "transactionReferenceInformation":"string",
            "avsSecurityCodeResponse":{
               "streetMatch":"NOT_MATCHED",
               "postalCodeMatch":"MATCHED",
               "securityCodeMatch":"MATCHED",
               "association":{
                  "securityCodeResponse":"M",
                  "avsCode":"NY",
                  "cardholderNameResponse":"1"
               }
            }
         }
      }
   }
}
```
<!-- type: tab-end -->

---

## Velocity Controls

To verify [velocity controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md), submit a transaction that violates the fraud setting for a velocity control. 


### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a velocity control transaction where the dollar amount exceeds the maximum dollar amount setting.

<!-- theme: example -->
> If the maximum dollar amount velocity control is set to $10.00, send the test transaction amount of $11.00.

```json
{
   "amount":{
      "total": "11.00",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
   }
}

```
<!--
type: tab
-->

##### Example of an address verification response.


```json
{
   "gatewayResponse":{
      "transactionType":"CHARGE",
      "transactionState":"DECLINED",
      "transactionOrigin":"ECOM",
      "transactionProcessingDetails":{
         "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
         "transactionTimestamp":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019"
      }
   },
   "paymentReceipt":{
      "merchantName":"Merchant Name",
      "merchantAddress":"123 Peach Ave",
      "merchantCity":"Atlanta",
      "merchantStateOrProvince":"GA",
      "merchantPostalCode":"12345",
      "merchantCountry":"US",
      "merchantURL":"https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus":"DECLINED",
         "processor":"fiserv",
         "responseCode":"621",
         "responseMessage":"Velocity: Maximum Sale Exceeded",
         "localTimestamp":"2021-06-20T23:42:48Z"
      }
   }
}
```
<!-- type: tab-end -->

---


## Transaction Restrictions

To verify [transaction restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md), submit a transaction that violates the fraud setting for the transaction restriction. 

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a transaction restriction where a duplicate transaction is submitted.

<!-- theme: example -->
> If the duplicate transaction threshold is set to 1, submit a second transaction of the same type with the same card number and amount.

```json
{
   "amount":{
      "total": "11.00",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
   }
}

```
<!--
type: tab
-->

##### Example of an address verification response.


```json
{
   "gatewayResponse":{
      "transactionType":"CHARGE",
      "transactionState":"DECLINED",
      "transactionOrigin":"ECOM",
      "transactionProcessingDetails":{
         "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
         "transactionTimestamp":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019"
      }
   },
   "paymentReceipt":{
      "merchantName":"Merchant Name",
      "merchantAddress":"123 Peach Ave",
      "merchantCity":"Atlanta",
      "merchantStateOrProvince":"GA",
      "merchantPostalCode":"12345",
      "merchantCountry":"US",
      "merchantURL":"https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus":"DECLINED",
         "processor":"fiserv",
         "responseCode":"613",
         "responseMessage":"Blocked: Duplicate Transaction",
         "localTimestamp":"2021-06-20T23:42:48Z"
      }
   }
}
```
<!-- type: tab-end -->

---

## Positive and Negative Filters

To verify [positive and negative filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md), submit a transaction that meets the condition of the positive or negative filter.


### Payload Example

<!--
type: tab
titlea: Request, Response
-->

##### Example of a negative filter where the card number has been blocked. 

<!-- theme: example -->
> To test a blocked card number, submit a transaction using the card number added to the list.

```json
{
   "amount":{
      "total": "11.00",
      "currency": "USD"
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "cardData": "4005550000000019",
         "expirationMonth": "02",
         "expirationYear": "2035"
      }
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
   }
}

```
<!--
type: tab
-->

##### Example of an address verification response.


```json
{
   "gatewayResponse":{
      "transactionType":"CHARGE",
      "transactionState":"DECLINED",
      "transactionOrigin":"ECOM",
      "transactionProcessingDetails":{
         "orderId":"R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
         "transactionTimestamp":"2016-04-16T16:06:05Z",
         "apiTraceId":"rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId":"30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId":"838916029301"
      }
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "expirationMonth":"05",
         "expirationYear":"2025",
         "bin":"400555",
         "last4":"0019"
      }
   },
   "paymentReceipt":{
      "merchantName":"Merchant Name",
      "merchantAddress":"123 Peach Ave",
      "merchantCity":"Atlanta",
      "merchantStateOrProvince":"GA",
      "merchantPostalCode":"12345",
      "merchantCountry":"US",
      "merchantURL":"https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus":"DECLINED",
         "processor":"fiserv",
         "responseCode":"610",
         "responseMessage":"Blocked: Card Number",
         "localTimestamp":"2021-06-20T23:42:48Z"
      }
   }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Test Address and Security Code](?path=docs/Resources/Guides/Testing/Test-Address-Security.md)
- [Test Cards](?path=docs/Resources/Guides/Testing/Test-Cards.md)
- [Test Declines](?path=docs/Resources/Guides/Testing/Test-Declines.md)
- [Test Errors](?path=docs/Resources/Guides/Testing/Test-Errors.md)

---
