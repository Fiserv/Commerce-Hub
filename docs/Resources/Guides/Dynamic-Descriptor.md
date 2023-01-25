---
tags: [Dynamic Descriptor, Statement Descriptor, Merchant Descriptor, Merchant Details, Soft Descriptor, Hard Descriptor, Vault]
---

# Dynamic Descriptor

A descriptor contains identifying information about a merchant, e.g. business name, phone number, city and/or state, which appears on customer's credit/debit card statement and identifies specific industry information based on the [Merchant Category Code (MCC)](?path=docs/Resources/FAQs-Glossary/Glossary.md#merchant-category-code). The descriptor informs a customer of the merchant details and contact information.

The standard descriptor information that is passed through to the customer’s statement is the Doing Business As (DBA) name, customer service phone number and MCC that you provide with your merchant account application. See [hard descriptor](?path=docs/Resources/FAQs-Glossary/Glossary.md#hard-descriptor) and [soft descriptor](?path=docs/Resources/FAQs-Glossary/Glossary.md#soft-descriptor) for more information.

A [dynamic descriptor](?path=docs/Resources/FAQs-Glossary/Glossary.md#dynamicdescriptor) allows a merchant to associate a distinct description and phone number with different products or services. Many companies offer a variety of products or services and if a company name appears as the descriptor on customer's card statement rather than the name of the product or service, the customer may not recognize the charge as a result, customer disputes/[chargebacks](?path=docs/Resources/FAQs-Glossary/Glossary.md#chargeback) occur.

---

<!-- theme: warning -->
>Dynamic Descriptors should not be utilized to correct an incorrect descriptor on the merchant account, please contact your account representative to correct an incorrect descriptor.

<!-- theme: info -->
>Dynamic Descriptors have limited availability. For more information, please contact your account representative.

---

## Request Variables

<!-- theme: danger -->
>Any information entered in the dynamic descriptor fields will overwrite the master descriptor information on the merchant account, it is very important to use the fields correctly.

A soft descriptor should be sent during the initial [authorization](?path=docs/Resources/API-Documents/Payments/Charges.md) and again during the [capture](?path=docs/Resources/API-Documents/Payments/Capture.md). The descriptor sent during the authorization appears on the online statement. The descriptor sent at capture is the final descriptor which appears for the settled transactions. 

<!--
type: tab
titles: dynamicDescriptor, JSON Example
-->

Card issuer may limit how many characters will show up in each field, it is recommended to keep the `merchantName` field to fewer than 22 characters and the `city` field in the `address` object to fewer than 11 characters to appear properly on the cardholder’s statement.

- **MOTO:** utilize the `city` field for the phone number
- **E-commerce:** utlize the `city` field for a URL, email address or phone number

<!---
For Visa and MasterCard non Payment Facilitators the DBA Name may be optionally be followed by an asterisk, and then additional information following the asterisk, such as product description, order number, reference number or other information that will further assist with cardholder recognition. In this case, the asterisk may only appear in position 5, 9 or 14.
For Discover, Visa, and MasterCard Single Merchant ID Payment Facilitators, the format is as follows: The first 3 characters of this field are the abbreviated Payment Facilitator name followed by an asterisk (*) followed by the sub merchant name, e.g. “XYZ*A SMALL CO”
For Amex Single Merchant ID Payment Facilitators the format is as follows: This field must only contain the sub merchant name, e.g. “A SMALL CO”
-->

The below table identifies the required parameters in the `dynamicDescriptor` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `mcc` | *string* | 4 | [Merchant Category Code](?path=docs/Resources/Master-Data/Merchant-Category-Code.md) |
| `merchantName` | *string* | 1024 | Merchant Name or Doing Business As (DBA) |
| `customerServiceNumber` | *string* | 15| Customer service phone number information that is passed to the issuer (it may appear on the cardholder’s statement) or if merchant wants to pass information that differs from the information stored on our master File. |
| `serviceEntitlement` | *string* | 16 | Merchant Service Entitlement number |
| `address` | *object* | N/A  | Merchant [address](?path=docs/Resources/Master-Data/Address.md#address) details |

<!--
type: tab
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
titles: Request, Response
-->

##### Example of a charge payload request using `dynamicDescriptors`.

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
         "expirationYear": "2035"
      }
   },
   "dynamicDescriptors":{
      "mcc": "4457",
      "merchantName": "Mywebsite.com",
      "customerServiceNumber": "1231231234",
      "serviceEntitlement": "67893827513",
      "address":{
         "street": "123 Main Street",
         "houseNumberOrName": "Unit B",
         "city": "Atlanta",
         "stateOrProvince": "GA",
         "postalCode": "30303",
         "country": "US"
      }
   },
   "transactionDetails":{
      "captureFlag": true
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

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "gatewayResponse":{
      "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
      "transactionType": "CHARGE",
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
         "cardData": "4005550000000019",
         "nameOnCard": "Jane Smith",
         "expirationMonth": "02",
         "expirationYear": "2035",
         "bin": "400555",
         "last4": "0019"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
         "currency": "USD"
      },
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK3483",
         "authenticationResponseCode": "string",
         "referenceNumber": "845366457890-TODO",
         "schemeTransactionId": "019078743804756",
         "feeProgramIndicator": "123",
         "processor": "FISERV",
         "host": "NASHVILLE",
         "responseCode": "000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2016-04-16T16:06:05Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2016-04-16T16:06:05Z"
         }
      }
   },
   "dynamicDescriptors":{
      "mcc": "4457",
      "merchantName": "Mywebsite.com",
      "customerServiceNumber": "1231231234",
      "serviceEntitlement": "67893827513",
      "address":{
         "street": "123 Main Street",
         "houseNumberOrName": "Unit B",
         "city": "Atlanta",
         "stateOrProvince": "GA",
         "postalCode": "30303",
         "country": "US"
      }
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges) 
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)

---
