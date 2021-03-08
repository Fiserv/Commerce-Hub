---
tags: [carat, commerce-hub, Dynamic-Descriptor, Statement-Descriptor, Merchant-Descriptor, Merchant-Details, Soft-Descriptor, Hard-Descriptor]
---

# Dynamic Descriptor

## Overview

A descriptor contains identifying information about a merchant, e.g. business name, phone number, city and/or state, which appears on customer's credit/debit card statement and identifies specific industry information based on the [Merchant Category Code (MCC)](../FAQs-Glossary/Glossary.md#merchant-categroy-code). The descriptor informs a customer of the merchant details and contact information.

The standard descriptor information that gets passed through to the customer’s statement is the Doing Business As (DBA) name, customer service phone number and MCC that you provide with your merchant account application. See [hard descriptor](../FAQs-Glossary/Glossary.md#hard-descriptor) and [soft descriptor](../FAQs-Glossary/Glossary.md#soft-descriptor) for more information.

A [dynamic descriptor](../FAQs-Glossary/Glossary.md#dynamic-descriptor) allows a merchant to associate a distinct description and phone number with different products or services. Many companies offer a variety of products or services and if a company name appears as the descriptor on customer's card statement rather than the name of the product or service, the customer may not recognize the charge as a result, customer disputes/[chargebacks](../FAQs-Glossary/Glossary.md#chargeback) occur.

---

<!-- theme: warning -->
> ##### NOTE
> Dynamic Descriptors should not be utilized to correct an incorrect descriptor on the merchant account, please contact your account representative to correct an incorrect descriptor.
>
> Dynamic Descriptors have limited availability. For more information, please contact your account representative.

---

## Minimum Requirements

<!-- theme: danger -->
> ##### CAUTION
> Any information entered in the dynamic descriptor fields will overwrite the master descriptor information on the merchant account, it is very important to use the fields correctly.

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `mcc` | *string* |  | [Merchant Category Code](Merchant-Category-Code.md) |
| `merchantName` | *string* |  | Daynamic Merchant Name or DBA |
| `merchantStreet` | *string* |  | Merchant street address |
| `city` | *string* |  | Merchant City |
| `state` | *string* |  | Merchant state or province |
| `country` | *string* |  | [ISO-3166-1](url) ALPHA-2, ALPHA-3, numeric or full country name |
| `postalCode` | *string* |  | ZIP code or postal code |
| `customerServiceNumber` | *string* | | Customer service phone number information that is passed to the issuer (it may appear on the cardholder’s statement) or if merchant wants to pass information that differs from the information stored on our master File. |
| `serviceEntitlement` | *string* | | Merchant Service Entitlement number |

---

## Payload Examples


