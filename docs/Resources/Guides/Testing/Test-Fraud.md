# Test Fraud Settings

[Fraud settings](path?=docs/Resources/Guides/Fraud/Fraud-Settings.md) can be tested in Commerce Hub after setting them on the test account in [Marketplace](link to document). A fraud response can be triggered when testing a Commerce Hub integration in the sandbox environment in two ways, by passing a specific [error code](path?=docs/Resources/Guides/Testing/Test-Errors.md) or by submitting an applicable transaction that meets a fraud filter.

---

## Address and Security Code

To verify [address and security code](path?=docs/Resources/Guides/Testing/Test-Address-Security.md) fraud settings, submit a transaction using the corresponding values in the request.


## Payload Example

<!--
type: tab
title: Request
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
title: Response
-->


```json
{{
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
         "cardData":"4005550000000019",
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
         "processor":"fiserv",
         "responseCode":"000000",
         "responseMessage":"APPROVAL",
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

To verify [velocity controls], submit a transaction that violates the fraud setting for a velocity control. 




## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a velocity control transaction where the dollar amount exceeds the maximum dollar amount setting.

<!-- theme: example -->
> If the maximum dollar amount velocity control is set to $10.00, send the test transaction amount of $11.00.

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
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
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
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "APPROVED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
         "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
         "transactionId": "838916029301"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "expirationMonth": "05",
         "expirationYear": "2025",
         "bin": "400555",
         "last4": "0019"
      }
   },
   "processorResponseDetails":{
      "approvalStatus": "DECLINED",
      "approvalCode": "OK3483",
      "authenticationResponseCode": "string",
      "referenceNumber": "845366457890-TODO",
      "schemeTransactionId": "019078743804756",
      "feeProgramIndicator": "123",
      "processor": "fiserv",
      "responseCode": "606",
      "responseMessage": "Address Verification Failed",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2016-04-16T16:06:05Z",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2016-04-16T16:06:05Z",
         "transactionReferenceInformation": "string",
         "avsSecurityCodeResponse":{
            "streetMatch": "NOT_MATCHED",
            "postalCodeMatch": "MATCHED",
            "securityCodeMatch": "MATCHED",
            "association":{
               "securityCodeResponse": "M"
               "avsCode": "NY",
               "cardholderNameResponse": "1"
            }
         }
      }
   }
}
```
<!-- type: tab-end -->

---


## Transaction Restrictions

To verify [transaction restrictions], submit a transaction that violates the fraud setting for the transaction restriction. 

<!-- theme: example -->
> If the duplicate transaction threshold is set to 1, submit a second transaction of the same type with the same card number and amount.

## Positive and Negative Filters

To verify [positive and negative filters], submit a transaction that meets the condition of the positive or negative filter.

<!-- theme: example -->
> To test a blocked card number, submit a transaction using the card number.



