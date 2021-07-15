---
tags: [carat, commerce-hub, dynamic-descriptor, Statement-Descriptor, Merchant-Descriptor, Merchant-Details, Soft-Descriptor, Hard-Descriptor, vault]
---

# Dynamic Descriptor

A descriptor contains identifying information about a merchant, e.g. business name, phone number, city and/or state, which appears on customer's credit/debit card statement and identifies specific industry information based on the [Merchant Category Code (MCC)](?path=docs/Resources/FAQs-Glossary/Glossary.md#merchantcategroycode). The descriptor informs a customer of the merchant details and contact information.

The standard descriptor information that is passed through to the customer’s statement is the Doing Business As (DBA) name, customer service phone number and MCC that you provide with your merchant account application. See [hard descriptor](?path=docs/Resources/FAQs-Glossary/Glossary.md#harddescriptor) and [soft descriptor](?path=docs/Resources/FAQs-Glossary/Glossary.md#softdescriptor) for more information.

A [dynamic descriptor](?path=docs/Resources/FAQs-Glossary/Glossary.md#dynamicdescriptor) allows a merchant to associate a distinct description and phone number with different products or services. Many companies offer a variety of products or services and if a company name appears as the descriptor on customer's card statement rather than the name of the product or service, the customer may not recognize the charge as a result, customer disputes/[chargebacks](?path=docs/Resources/FAQs-Glossary/Glossary.md#chargeback) occur.

---

<!-- theme: warning -->
> Dynamic Descriptors should not be utilized to correct an incorrect descriptor on the merchant account, please contact your account representative to correct an incorrect descriptor.

<!-- theme: info -->
> Dynamic Descriptors have limited availability. For more information, please contact your account representative.

---

## Request Variables

<!-- theme: danger -->
> Any information entered in the dynamic descriptor fields will overwrite the master descriptor information on the merchant account, it is very important to use the fields correctly.

<!--
type: tab
title: dynamicDescriptor
-->

The below table identifies the required parameters in the `dynamicDescriptor` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `mcc` | *string* | 4 | [Merchant Category Code](?path=docs/Resources/Master-Data/Merchant-Category-Code.md) |
| `merchantName` | *string* | 1024 | Daynamic Merchant Name or DBA |
| `customerServiceNumber` | *string* | 15| Customer service phone number information that is passed to the issuer (it may appear on the cardholder’s statement) or if merchant wants to pass information that differs from the information stored on our master File. |
| `serviceEntitlement` | *string* | 16 | Merchant Service Entitlement number |
| `address` | *component* | N/A  | Merchant [Address](?path=docs/Resources/Master-Data/Address.md#address) details |

<!--
type: tab
title: JSON Example
-->

JSON string format for `dynamicDescriptor`:

```json
{
 "dynamicDescriptors":{
      "mcc":"4457",
      "merchantName":"Mywebsite.com",
      "customerServiceNumber":"1231231234",
      "serviceEntitlement":"67893827513",
      "address":{
         "street":"Main Street",
         "houseNumberOrName":"123",
         "city":"Main Street",
         "stateOrProvince":"GA",
         "postalCode":"30303",
         "country":"US"
      }
   }
}
```

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a charge payload request using `dynamicDescriptors`.

```json
{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "nameOnCard":"Jane Smith",
         "expirationMonth":"02",
         "expirationYear":"2035",
         "securityCode":"123"
      }
   },
   "transactionDetails":{
      "captureFlag":true
   },
   "dynamicDescriptors":{
      "mcc":"4457",
      "merchantName":"Mywebsite.com",
      "customerServiceNumber":"1231231234",
      "serviceEntitlement":"67893827513",
      "address":{
         "street":"Main Street",
         "houseNumberOrName":"123",
         "city":"Main Street",
         "stateOrProvince":"GA",
         "postalCode":"30303",
         "country":"US"
      }
   }
}
```

<!--
type: tab
title: Response
-->

##### Example of a charge (201: Created) response.

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
         "currency": "USD",
         "merchantName": "Merchant Name",
         "merchantAddress": "123 Peach Ave",
         "merchantCity": "Atlanta",
         "merchantStateOrProvince": "GA",
         "merchantPostalCode": "12345",
         "merchantCountry": "US",
         "merchantURL": "https://www.somedomain.com"
      },
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "fiserv",
         "responseCode": "000000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021.02.25 14:14:38 (CET)",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2021.02.25 14:14:38 (CET)"
         }
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   },
   "dynamicDescriptors":{
      "mcc": "4457",
      "merchantName": "Mywebsite.com",
      "customerServiceNumber": "1231231234",
      "serviceEntitlement": "67893827513",
      "address":{
         "street": "Main Street",
         "houseNumberOrName": "123",
         "city": "Main Street",
         "stateOrProvince": "GA",
         "postalCode": "30303",
         "country": "US"
      }
   }
}```

<!-- type: tab-end -->

---

## See Also
- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)

---
