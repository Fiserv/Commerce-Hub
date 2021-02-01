## Charges

Charges can be initiated in 2 ways. either as Sale or Pre-Auth and can be distinguished as per the `captureFlag` sent in the request. If the value for `captureFlag` is sent as *TRUE*, the transaction will be considered as sale, where the customer will be charged with the transaction amount whereas if the value of `captureFlag` in charge request is sent as *FALSE*, the request would be considered as Pre-Auth Request, where the funds on the customer account would be kept reserved and the followup transaction (Capture) would be needed in order to charge the fund to the customer.

---

### Authorization
Authorization is necessary to check whether a card holder's credit card holds sufficient funds and is approved to purchase from a merchant. An authorization request first emerges whenever a cardholder attempts to purchase a good or service through a debit or credit card.

---

### Sale
A sale is a customer transaction where the purchase amount is authorized and settled at the same time. If a sale is not voided (Cancel) before batching, the merchant funding process begins for this charge. At this point,the merchant can still return funds (Refund) the customer.

<!-- theme: warning -->
> 
>🚧
>Settlement time is based on processing network, contact your account manager for more details.

---

### Pre-auth

A pre-auth is a customer transaction where the merchant can validate a given amount is available on the customer payment method (physical card, digital wallet, etc.) and then also place a hold for that amount. This amount is held on the customer account (credit limit or bank balance), but not yet transferred to the merchant.

Once the merchant initiates a capture transaction, the held amount is then setled with the merchant batch.

----

### Endpoints

**POST** `/payments/v1/charges`


---
### Minimum Field Requirement

##### Component : amount

|Field    | Data Type| Maximum Length | Description|
|---------|----------|----------------|---------|
| `total` | *number* | 12 | Sub component values must add up to total amount. 0.00 expected format|
| `currency` | *string* | 3 | [ISO 3 Currency Format](../Master-Data/Currency-Code.md).|

##### Component : paymentSource

Field    | Data Type| Maximum Length | Description
---------|----------|----------------|---------
`sourceType` | *string* | 15 | Payment Source (Example PaymentCard)
`cardData`| *string* | 19 | Card Number 
`expirationMonth`| *string* | 2 | Card Expiration date Month (Example 12)
`expirationYear`| *string* | 4 | Card Expiration date Month (Example 2035)
`securityCode` | *string* | 3| A card security code (CSC), card verification data (CVD), card verification number, card verification value (CVV), card verification value code, card verification code (CVC)

##### Component : transactionDetails

Field    | Data Type| Maximum Length | Description
---------|----------|----------------|---------
`captureFlag` | *string* | 5 | Designates if the transaction should be captured ( *TRUE* for Sale and *FALSE* for Pre-Auth)


**OR**

- `amount` : Amount object to support the request for payment.
- `paymentSource` : Model for Payment source. This is sent as a part of the request to determine wht is the source of the payment.
- `card` : Used to sent the card details. Contains card number, expiry date, CVV etc. Clink on Link to know more about Card Component.
- `transactionDatils` : Used to send transaction data.

---

### Payload Examples

<!--
type: tab
title: Request
-->

##### Example of a Charge Payload Request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard",
    "cardData": "4005550000000019",
    "expirationMonth": "02",
    "expirationYear": "2035",
    "securityCode": "123"
  },
  "transactionDetails": {
    "captureFlag": true
  }
}
```
<!--
type: tab
title: Response
-->

##### Example of a Charge (201: Created) Response.

<!-- theme: info -->
> See [Error Responses](url) for additional examples.
```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
    "transactionState": "authorized",
    "transactionOrigin": "ecom"
  },
  "transactionProcessingDetails": {
    "transactionDate": "2021-04-16",
    "transactionTime": "2021-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "paymentSource": "PaymentCard",
  "card": {
    "bin": "400555",
    "last4": "0019",
    "brand": "VISA",
    "expirationMonth": "02",
    "expirationYear": "2035"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": "1.00",
      "currency": "USD"
    },
    "processorResponseDetails": null,
    "approvalStatus": "APPROVED",
    "approvalCode": "OK7118",
    "referenceNumber": "845366457890-TODO",
    "schemeTransactionID": "019078743804756",
    "processor": "fiserv",
    "responseCode": "00",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "54022",
    "hostResponseMessage": "Approved",
    "localTimestamp": "2021-04-16T16:06:05Z",
    "bankAssociationDetails": {
      "associationResponseCode": "000",
      "transactionTimestamp": "2021-04-16T16:06:05Z",
      "transactionReferenceInformation": null,
      "avsSecurityCodeResponse": {
        "streetMatch": "EXACT_MATCH",
        "postalCodeMatch": "EXACT_MATCH",
        "securityCodeMatch": "MATCHED",
        "association": {
          "avsCode": "Z",
          "securityCodeResponse": "S",
          "cardHolderNameResponse": "M"
        }
      }
    }
  }
}
```

<!-- type: tab-end -->











