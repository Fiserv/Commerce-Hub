# Create a Payment Token

**[Tokenization](../FAQs-Glossary/Glossary.md#tokenization)** is a process of replacing sensitive data with non-sensitive equivalent, referred to as a token. Merchant either can submit a request to tokenize a payment card as part of a payment, or can tokenize the card separately. Tokenizing a payment card as part of a payment is covered as part of the /payments guide documentation in the Payments section. A Payment Token request creates a single-use or multi-use token that represents card details.


- **Single Use Token** : The token created can be used only one time. The reusable field in createToken object is sent as *FALSE*.
- **Multi Use Token** : The token created can be used multiple times. The reusable field in createToken object is sent as *TRUE*.

---

## Technical Requirements

##### Component: createToken

The createToken component is used for sending the pymentToken Request.

|Variable | Data Type| Maximum Length | Description/Values |
|---------|----------|----------------|---------|
| `value`|*string* | |Client supplied payment-token value. Only applicable for DataVault tokenization scheme. |
| `reusable`|*boolean* | |If the token is reusable. |
| `declineDuplicates`|*boolean* | |Decline duplicate payment info if client token is supplied. |


<!-- theme: success -->
>##### Endpoints
>**POST** `/payments-vas/v1/tokens`
>- Use this endpoint to submit a Payment Token request.

## Payload Example

<!--
type: tab
title: Request
-->

##### Example of a Payment Token Payload Request.

```json
{
  "requestType": "PaymentToken",
  "paymentCard": {
    "number": "4035874000424977",
    "expiryDate": {
      "month": "12",
      "year": "20"
    },
    "securityCode": "977"
  },
  "billingAddress": {
    "address1": "5565 Glenridge Conn",
    "city": "Atlanta",
    "postalCode": "30342",
    "country": "USA"
  },
  "createToken": {
    "value": "234ljl124l12",
    "reusable": true,
    "declineDuplicates": false
  },
  "accountVerification": true
}
```
<!--
type: tab
title: Response
-->

##### Example of a Payment Token Payload Response.

<!-- theme: info -->
> See [Error Responses](url) for additional examples.
```json

{
  "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
  "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
  "responseType": "Unauthenticated",
  "requestStatus": "DELETED",
  "requestTime": "1554308829345",
  "brand": "VISA",
  "country": "Germany",
  "paymentToken": {
    "value": "234ljl124l12",
    "reusable": true,
    "declineDuplicates": false,
    "last4": "4997",
    "brand": "VISA",
    "accountVerification": true,
    "type": "PAYMENT_CARD"
  },
  "paymentCard": {
    "number": "5424180279791732",
    "expiryDate": {
      "month": "03",
      "year": "21"
    },
    "securityCode": "977"
  },
  "processor": {
    "referenceNumber": "117011573",
    "authorizationCode": "OK1852",
    "responseCode": "00",
    "network": "DISC",
    "associationResponseCode": "000",
    "responseMessage": "APPROVAL",
    "avsResponse": {
      "streetMatch": "NO_INPUT_DATA",
      "postalCodeMatch": "NO_INPUT_DATA",
      "associationAvsResponse": "Y"
    },
    "securityCodeResponse": "MATCHED"
  },
  "orderId": "R-44df6542-ae0b-4415-88e8-7f3e62cc9e5d",
  "ipgTransactionId": "838916029301",
  "merchantTransactionId": "lsk23532djljff3"
}

```

<!-- type: tab-end -->