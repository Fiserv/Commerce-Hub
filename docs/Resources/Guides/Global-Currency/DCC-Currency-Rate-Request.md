---
tags: [Currency Conversion, Currency Code, Dynamic Currency Conversion, Global Currency]
---

# Dynamic Currency Conversion - Rate Request by Currency

Commerce Hub's Dynamic Currency Conversion *(DCC)* allows a merchant to request a specific currency's rate by submitting the `currencyCode` in the request.

---

## Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/currencies/dcc`

---

## Payload Example

The example below contains the minimum [parameters](#parameters) for a successful DCC rate request using the merchant's specified currency. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/currencies/dcc).

<!--
type: tab
titles: Request, Response, Not Eligible
-->

Example of a DCC rate payload request.

```json
{
  "sourceCurrency": {
    "total": "20.50",
    "currency": "USD"
  },
  "targetCurrency": {
    "currency": "JPY"
  },
  "merchantDetails": {
    "merchantId": "10001POD0212780",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/currencies/dcc)

<!--
type: tab
-->

Example of a DCC rate (200: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CURRENCY_DCC",
    "transactionState": "RATE_SUPPLIED",
    "transactionProcessingDetails": {
      "orderId": "CHG014ce3f530c843957352c36ca40ab855a4",
      "transactionTimestamp": "2024-03-21T18:03:04.603736089Z",
      "apiTraceId": "f2e2df18ec1a4b0fb5213ecb0d52d920",
      "clientRequestId": "2617701",
      "transactionId": "f2e2df18ec1a4b0fb5213ecb0d52d920"
    }
  },
  "processorResponseDetails": {
    "processor": "OpenFX",
    "responseCode": "540",
    "responseMessage": "Rate Supplied"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "400115"
    }
  },
  "rate": {
    "eligibility": "DCC_ELIGIBLE",
    "exchangeRate": 155.6849,
    "margin": 3.5,
    "provider": "Fexco",
    "referenceId": "f2e2df18ec1a4b0fb5213ecb0d52d920",
    "timestamp": "2024-03-21T18:03:06.717938807Z",
    "validFrom": "2024-02-20T00:00:00Z",
    "validTo": "2025-02-21T21:55:13Z",
    "sourceAmount": {
      "total": 90,
      "currency": "USD"
    },
    "targetAmount": {
      "total": 14012,
      "currency": "JPY"
    }
  }
}
```

<!--
type: tab
-->

Example of a DCC rate (200: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CURRENCY_DCC",
    "transactionState": "RATE_NOT_ELIGIBLE",
    "transactionProcessingDetails": {
      "orderId": "CHG013a1fa5c0ce59e4bb4f982f6a683ba603",
      "transactionTimestamp": "2024-03-21T18:11:31.548644302Z",
      "apiTraceId": "14c3714739584644ba484fb129333bea",
      "clientRequestId": "8042000",
      "transactionId": "14c3714739584644ba484fb129333bea"
    }
  },
  "processorResponseDetails": {
    "processor": "OpenFX",
    "responseCode": "804",
    "responseMessage": "Currency Mismatch"
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "404422413"
    }
  },
  "rate": {
    "eligibility": "DCC_NOT_ELIGIBLE"
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request Variables

<!--
type: tab
titles: sourceCurrency, targetCurrency, merchantDetails
-->

The below table identifies the required parameters in the `sourceCurrency` object.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `total` | *string* | 18,3 | Total amount of the goods or services *(including taxes)* shown in the merchant's local currency |
| `currency` | *string* | 3 | [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) of the merchant's local currency |

<!--
type: tab
-->

The below table identifies the required parameters in the `targetCurrency` object.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `currency` | *string* | 3 | [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) of the requested DCC transaction in the cardholder's currency |

<!--
type: tab
-->

The below table identifies the required parameters in the `merchantDetails` object.

| Variable | Data Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `merchantId` | *string* | 40 | A unique ID used to identify the Merchant. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |
| `terminalId` | *string* | 1024 | Identifies the specific device or point of entry where the transaction originated. Value assigned by the acquirer, gateway or a [merchant custom identifier](?path=docs/Resources/Guides/BYOID.md) |

<!-- type: tab-end -->

---

### Response Variables

<!--
type: tab
titles: rate, sourceAmount, targetAmount
-->

The below table identifies the parameters in the `rate` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `eligibility` | *string* | 25 | Indicates if the BIN is DCC_ELIGIBLE or DCC_NOT_ELIGIBLE |
| `exchangeRate` | *number* | 18,3 | Derived exchange rate for the source and target currencies |
| `margin` | *number* | 18,3 | International margin when making the DCC offer to the cardholder |
| `provider` | *string* | 30 | Indicates the name for the rate provider |
| `referenceId` | *string* | 64 | A unique identifier for a [currencies transaction](?path=docs/Resources/Guides/Global-Currency/DCC-Charge-Request.md) that is passed in the primary and secondary transactions |
| `timestamp` | *string* | N/A | Date and time the currency rate transaction occurred in YYYY-MM-DDThh:mm:ssZ format |
| `validFrom` | *string* | N/A | Start date and time the currency rate transaction in YYYY-MM-DDThh:mm:ssZ format |
| `validTo` | *string* | N/A | End date and time the currency rate transaction in YYYY-MM-DDThh:mm:ssZ format |
| `sourceAmount` | *object* | N/A | Total amount and currency from the original request shown in the merchant's local currency |
| `targetAmount` | *object* | N/A | Total amount and currency of the offered DCC transaction |

<!--
type: tab
-->

The below table identifies the required parameters in the `sourceAmount` object.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `total` | *string* | 18,3 | Total amount of the goods or services *(including taxes)* shown in the merchant's local currency |
| `currency` | *string* | 3 | [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) of the merchant's local currency |

<!--
type: tab
-->

The below table identifies the required parameters in the `targetAmount` object.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
| `total` | *string* | 18,3 | Total amount of the offered DCC transaction in the cardholder's currency |
| `currency` | *string* | 3 | [Currency code](?path=docs/Resources/Master-Data/Currency-Code.md) of the offered DCC transaction amount in cardholder currency |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/currencies/dcc)
- [Rate Request by Issuer](?path=docs/Resources/Guides/Global-Currency/DCC-BIN-Rate-Request.md)
- [DCC Charges Request](?path=docs/Resources/Guides/Global-Currency/DCC-Charge-Request.md)

---
