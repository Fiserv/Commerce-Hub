# Constructing an API Call

## Overview

Commerce Hub's RESTful API request consists of the [Header](#request-header) followed by the [Request Body](#request-body).

---

## Request Header

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `Content-Type` | *string* |  | The content type. Valid Value (application/json) |
| `Client-Request-Id` | *string* |  | A client-generated ID for request tracking and signature creation, unique per request. This is also used for idempotency control. Recommended 128-bit UUID format. |
| `Api-Key` | *string* |  | API Key provided to the merchant associating the requests with the appropriate app in the Developer Portal. |
| `Timestamp` | *integer* |  | Epoch timestamp in milliseconds in the request from a client system. Used for Message Signature generation and time limit (5 mins). |
| `Accept-Language` | *string* |  | The Accept-Language header contains information about the language preference of a user. This HTTP header is useful to multilingual sites for deciding the best language to serve to the client. example: en-US or fr-CA. |
| `Auth-Token-Type`| *string* |  | Indicates Authorization type HMAC, JWT, or AccessToken.|
| `Authorization` | *string* |  | Used to ensure the request has not been tampered with during transmission. Valid encryption; HMAC, JWT, or AccessToken. For more information, refer to the [Authentication Header](Authentication-Header.md) article. |
| `Message-Digest` | *string* |  | Needed only from customer browser or app to the API in Hosted Payment Page requests. |

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

The body of the transaction request differs based on the transaction being initiated. Below is the sample body for a [charge](../Transactions/Charges.md) request.
</br>

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
},
```

---

## API Call Example

A standard API call to execute a charge transaction might look like this:

```json

{
    method: "POST",
    url: "https://test.fiservapps.com/commer-hub/payments/v1/charges",
    headers: {
      "Content-Type": "application/json",
      "Client-Request-Id": "Client request ID goes here",
      "REQUEST_UUID": "REQUEST_UUID goes here",
      "Timestamp": "Date().getTime() goes here",
      "Message-Signature": "Message Signature goes here"
    },
    body: JSON.stringify({
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
	})
}

```

<!-- https://docs.fiserv.com/docs/payments/docs/1.%20Introduction%20to%20Fiserv%20Payments/How-to-use-our-payments-APIs.md -->
