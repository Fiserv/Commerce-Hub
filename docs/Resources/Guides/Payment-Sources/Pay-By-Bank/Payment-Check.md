---
tags: [Payment Check, Payment Sources]
---

# PaymentCheck

Commerce Hubs allows merchants to securely process payments directly from customers' bank accounts. Payment Check offers enhanced security and convenience. With multiple integration methods available, merchants can accept one-time and recurring payments, providing additional flexibility and convenience for customers.

---

## Request Variables

The following variables are required when submitting a *PaymentCheck* request.

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
| `origin` | *string* | 4 | The source of the transaction |

<!-- type: tab-end -->

---

## Payload Example

<!--
type: tab
titles: source, check, customer
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ------ | --- |
| `sourceType` | *string* | 15 |  &#10004; | Use Value *PaymentCard* for card transactions |
| `card` | *object* | N/A |  &#10004; | Contains the payment card details |
| `encryptionData` | *object* | N/A | | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `check` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ----------- |---|
| `routingNumber` | *string* | 45 | Routing number endorsed on the check. |
| `accountNumber` | *string* | 45 | Account number endorsed on the check. |

<!--
type: tab
-->

The below table identifies the required parameters in the `customer` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ----------- |---|
| `email` | *string* | 256 | Customer email address |

<!-- theme: info -->
> Refer to the [card](?path=docs/Resources/Master-Data/Card.md) object for additional fields.

<!-- type: tab-end -->

---

Example of a paymentCheck payload request

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
    "firstName": "Raghavendiran",
    "lastName": "Kannan",
    "address": {
      "street": "100AshfordGablesDr",
      "city": "Atlanta",
      "stateOrProvince": "Georgia",
      "postalCode": "30338"
    },
    "phone": {
      "phoneNumber": "123-123-1234"
    }
  },
  "customer": {
    "email": "customer@domain.com"
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

Example of a charge (201: Created) response.

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

- [API Explorer](./api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Device Encryption](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md)
- [Multi-Use Public Key *(MUPK)*](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md)
- [Private Label](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)

---
