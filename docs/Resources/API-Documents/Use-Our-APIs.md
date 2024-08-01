---
tags: [Card Not Present, Card Present, Request Header, Request Body, Header, Environments]
---

# Constructing a RESTful API Request

Commerce Hub's RESTful API allows a merchant to build their own UI and manage customer transactions within their own website, software, app, or terminal. Each request consists of the [header](#request-header) followed by the [Request Body](#request-body).

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

---

## Environments

Commerce Hub has different environments, that allow the consumption of our RESTful APIs for client development, customer acceptance testing, and production.

<!-- theme: warning -->
> Commerce Hub highly recommends testing against our sandbox and end to end environments before using our production environment.

#### Sandbox

<!--theme: info -->
> https://cert.api.fiservapps.com/ch/{resource}

- Uses Sandbox [credentials](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md)
- Test APIs before certifying for production
- View the response format of a specific API
- Experiment, develop code and fix bugs
- Send and cancel "test" transactions

#### End to End

<!--theme: info -->
> https://cert.api.fiservapps.com/ch/{resource}

- Uses End-to-End [credentials](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md)
- Certify before deploying to production
- Run test scripts based on the API's requirements
- Conduct a complete beta test of your application

#### Production

<!--theme: info -->
> https://prod.api.fiservapps.com/ch/{resource}

- Uses production [credentials](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md)
- Send and cancel "live" transactions
- Access Value-Added Services
- Run reports

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
| `Authorization` | *string* | N/A | Used to ensure the request has not been tampered with during transmission. Valid encryption; [HMAC](?path=docs/Resources/API-Documents/Authentication-Header.md) or [AccessToken](?path=docs/Resources/API-Documents/Security/Credentials.md). |
| `Auth-Token-Type`| *string* | N/A | Indicates Authorization type HMAC or AccessToken.|
| `Message-Digest` | *string* | N/A | Needed only from customer browser or app to the API in a [API Only card capture](?path=docs/Online-Mobile-Digital/Checkout/API/API-Only.md) or Hosted Payment Page request. |

### Sample Header

```json
{
  "Content-Type": "application/json",
  "Client-Request-Id": "CLIENT_REQUEST_ID",
  "Api-Key": "API_KEY",
  "Timestamp": "TIMESTAMP",
  "Auth-Token-Type": "AUTH_TOKEN_TYPE",
  "Authorization": "AUTHORIZATION"
}
```

---

## Request Body

The body of the transaction request differs based on the transaction being initiated. Below is the sample body for a [charge](?path=docs/Resources/API-Documents/Payments/Charges.md) request.

### Request Body Example

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
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

---

## API Call Example

A standard API call to execute a charges request.

```javascript
{
  method: "POST",
  url: "https://cert.api.fiservapps.com/ch/payments/v1/charges",
  headers: {
      "Content-Type": "application/json",
      "Client-Request-Id": "1000000012",
      "Api-Key": "1951fe5b30e34cdaad758b8874140872",
      "Timestamp": "Date().getTime()",
      "Auth-Token-Type": "HMAC" ,
      "Authorization": "OWRiMWNlZjRmMTEyY2M5NmMzNDFkMjhjZDU0NWIyZmYzM2Q2YWMyNDE5Nzg5YmVkYzEyZTJjNmUwNDA5OWMyMQ=="
  },
  body: JSON.stringify({
    amount: {
      total: "12.04",
      currency: "USD"
    },
    paymentSource: {
      sourceType: "PaymentCard",
      card: {
        cardData: "4005550000000019",
        expirationMonth: "02",
        expirationYear: "2035",
        securityCode: "123"
        }
    },
    transactionDetails: {
      captureFlag: true
    }
  })
}
```

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [HMAC Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Message Digest](?path=docs/Resources/API-Documents/Message-Digest.md)
- [Payment Request](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Postman Testing](?path=docs/Resources/Guides/Testing/Postman-Testing.md)
- [Idempotency](?path=docs/Resources/Guides/Idempotency.md)

---
