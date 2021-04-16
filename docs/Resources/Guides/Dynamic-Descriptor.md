---
tags: [carat, commerce-hub, Dynamic-Descriptor, Statement-Descriptor, Merchant-Descriptor, Merchant-Details, Soft-Descriptor, Hard-Descriptor]
---

# Dynamic Descriptor

## Overview

A descriptor contains identifying information about a merchant, e.g. business name, phone number, city and/or state, which appears on customer's credit/debit card statement and identifies specific industry information based on the [Merchant Category Code (MCC)](?path=docs/Resources/FAQs-Glossary/Glossary.md#merchant-categroy-code). The descriptor informs a customer of the merchant details and contact information.

The standard descriptor information that is passed through to the customer’s statement is the Doing Business As (DBA) name, customer service phone number and MCC that you provide with your merchant account application. See [hard descriptor](?path=docs/Resources/FAQs-Glossary/Glossary.md#hard-descriptor) and [soft descriptor](?path=docs/Resources/FAQs-Glossary/Glossary.md#soft-descriptor) for more information.

A [dynamic descriptor](?path=docs/Resources/FAQs-Glossary/Glossary.md#dynamic-descriptor) allows a merchant to associate a distinct description and phone number with different products or services. Many companies offer a variety of products or services and if a company name appears as the descriptor on customer's card statement rather than the name of the product or service, the customer may not recognize the charge as a result, customer disputes/[chargebacks](?path=docs/Resources/FAQs-Glossary/Glossary.md#chargeback) occur.

---

<!-- theme: warning -->
> Dynamic Descriptors should not be utilized to correct an incorrect descriptor on the merchant account, please contact your account representative to correct an incorrect descriptor.

<!-- theme: info -->
> Dynamic Descriptors have limited availability. For more information, please contact your account representative.

---

## Minimum Requirements

<!-- theme: danger -->
> Any information entered in the dynamic descriptor fields will overwrite the master descriptor information on the merchant account, it is very important to use the fields correctly.

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `mcc` | *string* |  | [Merchant Category Code](?path=docs/Resources/Master-Data/Merchant-Category-Code.md) |
| `merchantName` | *string* |  | Daynamic Merchant Name or DBA |
| `customerServiceNumber` | *string* | | Customer service phone number information that is passed to the issuer (it may appear on the cardholder’s statement) or if merchant wants to pass information that differs from the information stored on our master File. |
| `serviceEntitlement` | *string* | | Merchant Service Entitlement number |
| `address` | *component* |  | Merchant [Address](?path=docs/Resources/Master-Data/Address.md#address) details |

---

## Payload Example

#### Sample chargeRequest with Dynamic Descriptor details

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

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Charge](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)

---
