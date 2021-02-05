---
tags: [carat, commerce-hub, Dynamic-Descriptor, Statement-Descriptor, Merchant-Data, Merchant-Details]
---

## Dynamic-Descriptor

Some of the time customers challenge the transaction received in the statement because of the incomplete merchant information, resulting in incorrect chargebacks. Banks and Payment Schemes require inclusion of certain clear and accurate merchant information, which comes in statement helping in reducing such incidents.

A descriptor is a piece of identifying information about a merchant, e.g. business name, phone number, city and/or state, which appears on buyers’ credit/debit card statements. These descriptors remind cardholders of the details of the purchase and give them a way to contact the merchant. The standard descriptor information that gets passed through to the cardholder’s statement is the DBA (Doing Business As) name and customer service phone number that you provide with your merchant account application.

---

### Soft Descriptors
The descriptor that shows up after a transaction has been authorized. As long as the charge is in a pending state, the soft descriptor will be displayed on the customer's statement.

### Hard descriptors
The descriptor that shows up after a transaction has settled. As soon as the customer's bank has finalized the transaction status, the hard descriptor will be permanently displayed as the description of the charge on the customer’s statement.

### Dynamic descriptors
A custom descriptor you configure and pass with each transaction via the API. Some processors only support soft dynamic descriptors, while others support both hard and soft dynamic descriptors.

---

<!-- theme: warning -->

> ##### Note
>
> This field has limited platform availability. For more information, please contact your account representative.

---

### Minimum Requirements

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `merchantName` | *string* |  | Daynamic Merchant Name or DBA </br>(Example MyWebsite.com) |
| `merchantStreet` | *string* |  | Merchant street address </br>(Example 456 Street)|
| `city` | *string* |  | Merchant City </br>(Example Atlanta)|
| `state` | *string* |  | Merchant state or province </br>(Example GA)|
| `country` | *string* |  | [ISO-3166-1](url) ALPHA-2, ALPHA-3, numeric or full country name </br>(Example US) |
| `postalCode` | *string* |  | ZIP code or postal code </br>(Example 30303)|
| `customerServiceNumber` | *string* | | Customer service phone number information that is passed to the issuer (it may appear on the cardholder’s statement) or if merchant wants to pass information that differs from the information stored on our master File. </br>Example (9898989898) |
| `serviceEntitlement` | *string* | | Merchant Service Entitlement number </br>Example (67893827513) |


---





