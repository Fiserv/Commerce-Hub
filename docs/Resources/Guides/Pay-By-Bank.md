---
tags: [Pay By Bank]
---


# Pay By Bank or Check Acceptance

ADD Description

Add INFORMATION

<!-- type: tab-end -->

---

## Request Variables

The following variables are also required when submitting a pay by bank request.

<!--
type: tab
titles: amount, transactionDetails, merchantDetails, transactionInteraction
-->

The below table identifies the parameters in the `amount` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ----- | ------------------ |
| `total` | *number* | 18,3  | &#10004; | Amount of the transaction. [Subcomponent](?path=docs/Resources/Master-Data/Amount-Components.md) values must add up to total amount. |
| `currency` | *string* | 3 | &#10004; | ISO 3 digit [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionDetails` object.

| Variable | Data Type| Maximum Length |Required | Description |
|---------|----------|----------------|---------|---|
| `captureFlag` | *boolean* | 5 | &#10004; | Designates if the transaction should be captured. |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Required|  Description |
| --------- | ---------- | -------- | --------- | ----- |
| `merchantId` | *string* | 40 | &#10004; | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer or the gateway when submitting a transaction. |
| `terminalId` | *string* | N/A | &#10004; | Identifies the specific device or point of entry where the transaction originated assigned by the acquirer or the gateway. |

<!--
type: tab
-->

The below table identifies the required parameters in the `transactionInteraction` object.

| Variable | Data Type| Maximum Length | Required|  Description |
| --------- | ---------- | -------- | --------- | ----- |
| ADDDD

<!-- type: tab-end -->

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments/v1/charges`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a pay by bank payload request

```json
{
  "source": {
    "sourceType": "PaymentCheck",
    "check": {
      "routingNumber": "123456789",
      "accountNumber": "8456234852689"
    }
  },
  "amount": {
    "total": 100,
    "currency": "USD"
  },
  "billingAddress": {
    "firstName": "",
    "lastName": "",
    "address": {
      "street": "",
      "city": "",
      "stateOrProvince": "",
      "postalCode": ""
    },
    "phone": {
      "phoneNumber": ""
    }
  },
  "customer": {
    "email": ""
  },
  "transactionInteraction": {
    "origin": "ECOM"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "merchantId": "100009000000100",
    "terminalId": "00000001"
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
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "CAPTURED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01f2a2c51ec11d3b3e68ee092f16cd1ed0",
      "transactionTimestamp": "2023-06-29T10:29:07.694833Z",
      "apiTraceId": "3db40a448407499bb84785f7d2e961fa",
      "clientRequestId": "324907",
      "transactionId": "3db40a448407499bb84785f7d2e961fa"
    }
  },
  "source": {
    "sourceType": "PaymentCheck",
    "check": {
      "routingNumber": "123456789",
      "accountNumber": "23643672432764726"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK9460",
      "referenceNumber": "85f7d2e961fa",
      "processor": "FISERV",
      "host": "CONNECTPAY",
      "localTimestamp": "123456789012",
      "hostResponseCode": "00",
      "additionalInfo": [
        {
          "name": "ERROR_LOCATION",
          "value": "*******"
        },
        {
          "name": "DENIAL_RECORD_NUMBER",
          "value": "12345"
        },
        {
          "name": "ECHO_DATA",
          "value": "1234561234"
        },
        {
          "name": "DELAY_SHIP_ID",
          "value": "ksjdhfsjk"
        },
        {
          "name": "SCORE",
          "value": "36346"
        },
        {
          "name": "REASON_CODE",
          "value": "1234"
        }
      ]
    }
  },
  "customer": {
    "category": "PREFERRED"
  },
  "billingAddress": {
    "firstName": "Raghavendiran",
    "lastName": "Kannan",
    "address": {
      "street": "100AshfordGablesDr",
      "houseNumberOrName": "4201",
      "city": "Atlanta",
      "stateOrProvince": "Georgia",
      "postalCode": "30338",
      "country": "USA"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "merchantDetails": {
    "terminalId": "00000001",
    "merchantId": "100009000000200"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Reauthorization](?path=docs/Resources/Guides/Authorizations/Re-Auth.md)

---
