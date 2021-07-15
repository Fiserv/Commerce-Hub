---
tags: [carat, commerce-hub, card-not-present, card-present, restful-api, request-header, request-body, api, header, request-body, environments]
---

# Constructing a RESTful API Request

Commerce Hub's RESTful API allows a merchant to build their own UI and manage customer transactions within their own website, software, app, or terminal. Each request consists of the [Header](#request-header) followed by the [Request Body](#request-body).

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

---

## Environments

Commerce Hub has different environments, that allow the consumption of our RESTful APIs for client development, customer acceptance testing, and production.

<!-- theme: info -->
>Commerce Hub highly recommend testing against our cert environment before using our production environment.

### Cert Sandbox

<!--theme: success -->
> https://cert.api.fiservapps.com/ch/{resource}

- Test APIs before you deploy to production
- View the response format of a specific API
- Experiment, develop code and fix bugs
- Send and cancel "test" transactions

### Production

<!--theme: success -->
> https://api.fiservapps.com/ch/{resource}

- Send and cancel "live" transactions
- Access Value Added Services
- Conduct a complete beta test of your application
- Run reports

<!-- ## QA Sandbox

Description goes here -->

<!--theme: success -->
<!-- > https:// qa.api.fiservapps.com/ch/{resource} -->

---

## Request Header

Commerce Hub RESTful API has a consistent header structure based on a set of parameters. To create the header, provide the following values:

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `Content-Type` | *string* | N/A | The content type. Valid Value (application/json) |
| `Client-Request-Id` | *string* | N/A | A client-generated ID for request tracking and signature creation, unique per request. This is also used for idempotency control. Recommended 128-bit UUID format. |
| `Api-Key` | *string* | N/A | API Key provided to the merchant associating the requests with the appropriate app in the Developer Portal. |
| `Timestamp` | *integer* | N/A | Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins). |
| `Accept-Language` | *string* | N/A | The Accept-Language header contains information about the language preference of a user. This HTTP header is useful to multilingual sites for deciding the best language to serve to the client. example: en-US or fr-CA. |
| `Auth-Token-Type`| *string* | N/A | Indicates Authorization type HMAC, JWT, or AccessToken.|
| `Authorization` | *string* | N/A | Used to ensure the request has not been tampered with during transmission. Valid encryption; HMAC, JWT, or AccessToken. For more information, refer to the [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md) article. |
| `Message-Digest` | *string* | N/A | Needed only from customer browser or app to the API in Hosted Payment Page requests. |

#### Sample Header

```json
header: {
      "Content-Type": "application/json",
      "Client-Request-Id": "Client request ID goes here",
      "REQUEST_UUID": "REQUEST_UUID goes here",
      "Timestamp": "Date().getTime() goes here",
      "Message-Signature": "Message Signature goes here"
    },
```

---

## Request Body

The body of the transaction request differs based on the transaction being initiated. Below is the sample body for a [charge](?path=docs/Resources/API-Documents/Payments/Charges.md) request.

#### Request Body Example

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  }
}
```

---

## API Call Example

A standard API call to execute a charge transaction might look like this:

```json

{
  "method": "POST",
  "url": "https://api.fiservapps.com/ch/payments/v1/charges",
  "headers": {
    "Content-Type": "application/json",
    "Client-Request-Id": "Client request ID goes here",
    "Api-Key": "Api-Key goes here",
    "Timestamp": "Date().getTime() goes here",
    "Auth-Token-Type" :" HMAC",
    "Authorization": "Authetication Header goes here"
  },
  "body": {
    "amount": {
      "total": "12.04",
      "currency": "USD"
    },
    "paymentSource": {
      "sourceType": "PaymentCard",
      "card": {
        "cardData": "4005550000000019",
        "expirationMonth": "02",
        "expirationYear": "2035",
        "securityCode": "123"
        }
    },
    "transactionDetails": {
      "captureFlag": true
    }
  }
}

```

---

## Next Steps
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Account Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Tokenization Request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)

---
