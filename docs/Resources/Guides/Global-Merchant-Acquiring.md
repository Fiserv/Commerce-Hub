---
tags: [Global Merchant Acquiring, International, Foreign Currency]
---

# Multi-Currency Pricing

Global Merchant Acquiring _(GMA)_ is a Commerce Hub multi-currency acquiring solution that offers one simplified and consolidated payment solution for large multi-national merchants for [Online, Digital and Mobile](?path=docs/Getting-Started/Getting-Started-Online.md) and [In-Person](?path=docs/Getting-Started/Getting-Started-InPerson.md) transactions across key markets in North America, Europe, and Asia Pacific for 37 countries.

GMA is designed to offer multi-national _(including the United States)_ payment acceptance with a local market presence, through a single source for integration, pricing, funding and reporting for multi-national merchants. GMA allows multi-national merchants, based in the US, Canada, [Europe](#european-countries), United Kingdom, Hong Kong, Singapore, and Australia to accept multi-currency payments.

The merchant can accept transactions from any card association's supported currency and receive funding in one of the 17 supported settlement currencies. Merchants can streamline the number of acquiring relationships necessary to serve their global footprint. By relying on one payment service provider for all electronic payments in all regions, merchants can bypass many of the costs, risks, and hassles of managing service providers in every country.

---

## Benefits

- **Improved Customer Service:** Merchants can provide their customers a variety of payment choices worldwide and accept those payments through a single, convenient provider.
- **Payment Choices:** Allows merchants to provide their customers with choices to pay the way that they want, without incurring cross-border transaction fees
- **Single-source Global Partner:** Merchants are those that would like to streamline the number of acquiring relationships necessary to serve their global footprint. By relying on one payment service provider, for all electronic payments in all regions, merchants can also bypass many of the costs, risks and hassles of managing service providers in every country.
- **Single Integration:** Makes expansion into new markets, with direct merchant interfaces or third-party providers. A merchant integrates directly with Commerce Hub to authorize and settle all transactions across the globe. GMA merchants can also take advantage of numerous Commerce Hub product offerings.
- **Operational Efficiencies:** Streamline management of all global relationships through one single point-of-contact and reporting.

---

## Supported Currencies

<!-- theme: info -->
> All [currencies](?path=docs/Resources/Master-Data/Currency-Code.md) which are prohibited by the Office of Foreign Assets Control _(OFAC)_ are not supported for GMA transactions.

Commerce Hub currently only supports GMA on the Nashville front-end processor. Nashville currently only supports a max of 12 digits including precision _(decimal places)_ based on the currency; e.g 12 digits + 0 precision, 10 digits + 2 precisions, or 9 + 3 precisions.

---

### Authorizations

Commerce Hub currently supports authorizations for presentment in any of the 145 card brand [supported currencies](?path=docs/Resources/Master-Data/Currency-Code.md) for [online, digital and mobile](?path=docs/Getting-Started/Getting-Started-Online.md) transactions across [37 countries](#coverage).

For [in-person](?path=docs/Getting-Started/Getting-Started-InPerson.md) transactions Commerce Hub supports 6 currencies: USD, SGD, SEK, CHF, GBP and EUR across the US, Europe and Singapore.

<!-- theme: danger -->
> In-person transactions are not supported in Hong Kong, Australia and Canada.

---

#### European In-Person Support

In Europe, transactions are supported within 10 countries highlighted in the table below.

| Country | Authorization | Settlement |
| ------- | :-----------: | :--------: |
| Austria | EUR | EUR |
| Belgium | EUR | EUR |
| France | EUR | EUR |
| Germany | EUR | EUR |
| Ireland | EUR | EUR |
| Italy | EUR | EUR |
| Netherlands | EUR | EUR |
| Spain | EUR | EUR |
| Switzerland | CHF | CHF |
| United Kingdom | GBP | GBP |

---

### Settlement

For GMA authorized transactions, Commerce Hub will settle the authorized transactions in one of the 17 supported currencies; USD, EUR, AUD, JPY, ZAR, CHF, NOK, DKK, SEK, NZD, HKD, CAD, GBP, SGD, PLN, CZK, HUF.

Commerce Hub supports End-to-End, meaning authorization currency settles in the same settlement currency if available. If a currency is not available _(e.g. Egypt Pounds EGP)_, that transaction currency settles in a default settlement currency _(EUR, USD, GBP)_ based on Merchant Configuration and Boarding.

<!-- theme: info -->
> Settlement currencies reflect Visa and Mastercard settlement options. Please contact your account manager for alternate network funding options _(e.g,. UPI, JCB, Diners)_.

---

## Coverage

See the table below for more details on the supported payments and currencies by foreign country or region for online, digital, and mobile transactions. All countries support authorizations in all card brand [supported currencies](?path=docs/Resources/Master-Data/Currency-Code.md).

<!-- theme: info -->
> American Express, Discover, Diners, JCB and PayPal are conveyance processing only brands and are processing/re-direct only.

| Country/Region | Supported Payments | Settlement |
| ------- | ------------------ | ---------- |
| Canada | Visa, Mastercard, Amex, Union Pay International _(UPI)_, and PayPal | USD, CAD, CHF, DKK, EUR, GBP, NOK, NZD, SEK, HKD, AUD, ZAR, JPY |
| [Europe](#european-countries) | Visa, Mastercard,  Amex, UPI, JCB, Diners, and PayPal | EUR, AUD, JPY, ZAR, CHF, NOK, DKK, SEK, NZD, HKD, USD, CAD, GBP, SGD, PLN, CZK, HUF |
| U.K. and Gibraltar | Visa, Mastercard, UPI, JCB, Diners, Amex | EUR, AUD, JPY, ZAR, CHF, NOK, DKK, SEK, NZD, HKD, USD, CAD, GBP |
| Hong Kong | Visa, Mastercard, UPI, JCB, Diners, and Amex | HKD |
| Malaysia | Visa, Mastercard | MYR |
| Singapore | Visa, Mastercard, UPI, JCB, Diners, and Amex | SGD |
| Australia | Visa, Mastercard, Amex, UPI, Diners, and PayPal | AUD, NZD, USD |

#### European Countries

Commerce Hub supports GMA in the following European countries; Austria, Belgium, Cyprus, Czech Republic, Denmark, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxemburg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, Switzerland.

---

## Payload Examples

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
    "merchantId": "100034000000032",
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
- [Global Currency Solutions](?path=docs/Resources/Guides/Global-Currency/Global-Currency-Solutions.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)

---
