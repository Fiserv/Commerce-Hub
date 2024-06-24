---
tags: [Currency Conversion, Global Currency, Multi-Currency]
---

# Multi-Currency Pricing

Multi-Currency Pricing (MCP) *(previously known as Global ePricing)* is available for [online, digital, and mobile integrations](?path=docs/Getting-Started/Getting-Started-Online.md) and allows merchants to set static pricing in multiple currencies. MCP provides the most control for specific international markets and offers customers an in country shopping experience. The merchant is entirely responsible for setting and maintaining the prices in the currencies they support.

[Payment requests](?path=docs/Resources/API-Documents/Payments/Payments.md) are submitted to Commerce Hub in the same manner as domestic activity, but the merchant must send the correct amount format and corresponding [currency code](?path=docs/Resources/Master-Data/Currency-Code.md) for these transactions. Merchants set all pricing in foreign currency *(i.e. setting EUR as a US merchant)* specific to geographical markets.

The merchant is funded in their local currency *(i.e. US merchants fund in USD)* based on a prevailing exchange rates. Commerce Hub supports Visa, Mastercard and American Express where available.

---

## Benefits

#### Merchant Benefits

- Support any currency enabled by Visa, Mastercard or American Express
- Reduce shopping cart abandonment and improve sales conversion at checkout thereby improving customer satisfaction and customer loyalty
- Funding is always provided in the merchant's local currency – regardless of the presentment currency. By being funded in only one currency the merchant doesn't need to have a bank account per currency for their international traffic
- Enables easy cross-border expansion into markets where the merchant may not be domiciled

#### Cardholder Benefits

- Shop and Pay in more than 145 global presentment currencies
- Receipt in the same amount and currency that appears on their cardholder statement
- Eliminates the foreign transaction fees charges by some issuers _(this depends on the cardholder agreement)_
- Make purchases in a familiar currency without having to perform manual calculations thereby enjoying a superior cross-border experience similar to doing business with a local merchant

---

## Supported Currencies

<!-- theme: danger -->
> All [currencies](?path=docs/Resources/Master-Data/Currency-Code.md) which are prohibited by the [Office of Foreign Assets Control _(OFAC)_](?path=https://ofac.treasury.gov/sanctions-programs-and-country-information) are not supported for MCP transactions.

Commerce Hub currently supports authorizations for presentment in 140+ card brand [supported currencies](?path=docs/Resources/Master-Data/Currency-Code.md) for MCP transactions. For MCP authorized transactions, Commerce Hub supports settlement of authorized transactions in USD currency only for the US market. For non-US markets, foreign settlement currencies are available with [Global Acquiring](?path=docs/Resources/Guides/Global-Merchant-Acquiring.md).

<!-- theme: info -->
> Commerce Hub currently only supports MCP on the Nashville front-end processor. Nashville currently only supports a max of 12 digits including precision _(decimal places)_ based on the currency; e.g 12 digits + 0 precision, 10 digits + 2 precisions, or 9 + 3 precisions.

---

## Payload Examples

The example below contains the minimum parameters for a successful charges request using the multi-currency pricing. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response, OFAC Response
-->

Example of a charge payload request using KWD at 3 precisions.

```json
{
  "amount": {
    "total": 100.436,
    "currency": "KWD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "transactionInteraction": {
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "origin": "ECOM",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

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
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG01d9929027e019aeac14a6f673bfd2f07f",
      "transactionTimestamp": "2024-01-04T18:33:06.209952422Z",
      "apiTraceId": "42c31f52a0ec4846936e0d6b938f05ae",
      "clientRequestId": "9049755",
      "transactionId": "42c31f52a0ec4846936e0d6b938f05ae"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 100.436,
      "currency": "KWD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK971C",
      "referenceNumber": "0d6b938f05ae",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "networkRouted": "VISA",
      "networkInternationalId": "0001",
      "responseCode": "000",
      "responseMessage": "Approved",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "401200",
      "last4": "0026",
      "scheme": "VISA"
    }
  },
  "networkDetails": {
    "network": {
      "network": "Visa"
    },
    "networkResponseCode": "00",
    "cardLevelResultCode": "C",
    "validationCode": "G609",
    "transactionIdentifier": "014004744227472"
  },
  "transactionInteraction": {
    "posEntryMode": "MANUAL",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  }
}
```

<!--
type: tab
-->

Example of a charge (400: Bad Request) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionTimestamp": "2023-12-27T18:38:56.638209418Z",
      "apiTraceId": "d1f2d78e838642dab6f552348b88a0a5",
      "clientRequestId": "297396",
      "transactionId": "d1f2d78e838642dab6f552348b88a0a5"
    }
  },
  "error": [
    {
      "type": "GATEWAY",
      "field": "amount.currency",
      "code": "105",
      "message": "Invalid Amount or Currency"
    }
  ]
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Supported Currencies](?path=docs/Resources/Master-Data/Currency-Code.md)
- [Global Acquiring](?path=docs/Resources/Guides/Global-Merchant-Acquiring.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)

---
