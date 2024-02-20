---
tags: [Global Merchant Acquiring, International, Foreign Currency]
---

# Global Acquiring

Global Acquiring via Commerce Hub offers global merchants the ability to accept payments and receive integrated settlement and reporting across Fiserv’s global footprint.  Key features include:

- Global reach to 140+ currencies reaching consumers in more than 190 countries
- Full service, local in 37 countries across North America, Europe, and Asia Pacific
- Full-service acquiring for Visa, Mastercard, UPI, Diners, JCB, and various alternative payment methods
- Choice of settlement in any of 17 different settlement currencies
- Support for conveyance models for American Express, Discover, and Paypal
Integrated billing, settlement, and reporting

Commerce Hub will add support for additional Fiserv acquiring countries and alternative payment methods in the future.  

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
> All [currencies](?path=docs/Resources/Master-Data/Currency-Code.md) which are prohibited by the Office of Foreign Assets Control _([OFAC](https://ofac.treasury.gov/ofac-sanctions-lists))_. are not supported for GMA transactions.

Commerce Hub currently only supports GMA on the Nashville front-end processor. Nashville currently only supports a max of 12 digits including precision _(decimal places)_ based on the currency; e.g 12 digits + 0 precision, 10 digits + 2 precisions, or 9 + 3 precisions.

---

### Authorizations

Commerce Hub currently supports authorizations for presentment in any of the 145 card brand [supported currencies](?path=docs/Resources/Master-Data/Currency-Code.md) for [online, digital and mobile](?path=docs/Getting-Started/Getting-Started-Online.md) transactions across [37 countries](#coverage).

---

#### Global Acquiring Country Coverage - Card Networks

| Region    | Country  | Supporte Payments | Supported Model |
|----------|-----------|-------------------|-----------------|
| **North America** |    |                 |                 |
|           | United States   | Visa, Mastercard, PIN Debit Networks, ACH, Closed Loop | Full Service Acquiring - Auth & Settlement |
|           |            | American Express, Discover, UPI, JCB (via Discover), Paypal | Authorization Only     |
|           | Canada          | Visa, Mastercard, UPI                        | Full Service Acquiring - Auth & Settlement |
|                                      |                 | American Express, Discover, JCB (via AMEX), PayPal | Authorization Only     |
| **Europe**     |            |                   |             |
|                | Austria     | Visa, Mastercard, UPI, JCB, Diners   | Full Service Acquiring - Auth & Settlement |
|       | Belgium       | ...         | ...                                    |
|       | Cyprus       | ...         | ...                                    |
|        | Czeck Republic |       |              |
|        | Demark  |      |         |
|        | Finland  |      |         |
|        | France  |      |         |
|        | Germany  |      |         |
|        | Greece  |      |         |
|        | Hungary  |      |         |
|        | Iceland  |      |         |
|        | Ireland  |      |         |
|        | Italy  |      |         |
|        | Latvua  |      |         |
|        | Liechtenstein  |      |         |
|        | Lithuania  |      |         |
|        | Luxemburg  |      |         |
|        | Malta  |    American Express, Paypal    |   Authorization Only       |
|        | Netherlands  |      |         |
|        | Poland  |      |         |
|        | Portugal  |      |         |
|        | Romania  |      |         |
|        | Slovakia  |      |         |
|        | Slovenia  |      |         |
|        | Spain  |      |         |
|        | Sweden  |      |         |
|        | Switzerland  |      |         |
| **Great Britain & British Overseas Territory** |          |                                              |                                        |
|                                      | United Kingdom  | Visa, Mastercard, UPI, JCB, Diners           | Full Service Acquiring - Auth & Settlement |
|                                      |                 | American Express                             | Authorization Only                    |
| **APAC**                             |                 |                                              |                                        |
|                                      | Hong Kong       | Visa, Mastercard, UPI, JCB, Diners           | Full Service Acquiring - Auth & Settlement |
|                                      |                 | American Express                             | Authorization Only                    |
|                                      | Malaysia        | Visa, Mastercard                             | Full Service Acquiring - Auth & Settlement |
|                                      | Singapore       | Visa, Mastercard, UPI, JCB, Diners           | Full Service Acquiring - Auth & Settlement |
|                                      | Australia       | Visa, Mastercard, UPI, Diners                | Full Service Acquiring - Auth & Settlement |
|                                      |                 | American Express, Paypal                     | Authorization Only                    |
| **Note: Digital wallets including ApplePay, GooglePay are supported post cryptogram as part the card scheme coverage.** |

---

## Presentment & Funding Currencies Coverage

| Country/Region | Supported Payments  | Presentment Currencies  | Funding Currencies    |
|----------------|---------------------|-------------------------|-----------------------|
| **North America (outside of US)** | Visa, Mastercard | Any scheme supported currency | USD, CAD, CHF, DKK, EUR, GBP, NOK, NZD, SEK, HKD, AUD, ZAR, JPY
| **Canada** | UPI | Any scheme supported currency | CAD |
|                |                     |                         |                       |
| **Europe** | Visa, Mastercard | Any scheme supported currency | EUR, AUD, JPY, ZAR, CHF, NOK, DKK, SEK, NZD, HKD, USD, CAD, GBP, SGD, PLN, CZK, HUF |
|  | UPI | Any scheme supported currency |   EUR, CHF |
|  **EEA**  | JCB |  Any scheme supported currency  | CHF, NOK, SEK, DKK, EUR, USD and JPY |
|     | Diners |Any scheme supported currency |  CHF, NOK, DKK, SEK, GBP, USD, JPY and EUR |
|                |                     |                         |                       |
| **Great Britain & British Overseas Territory** | Visa, Mastercard | Any scheme supported currency | EUR, AUD, JPY, ZAR, CHF, NOK, DKK, SEK, NZD, HKD, USD, CAD, GBP |
|  | UPI | Any scheme supported currency | GBP |
|  **United Kingdom Gibraltar**  | JCB |  Any scheme supported currency  | GBP, USD, EUR and JPY |
|     | Diners |Any scheme supported currency |  GBP and EUR |
|                |                     |                         |                       |
| **APAC** |           |          |           |
| **Hong Kong** | Visa, Mastercard, UPI, JCB, Diners | Any scheme supported currency | HKD |
| **Malaysia** | Visa, Mastercard | Any scheme supported currency | MYR |
|  **Singapore** | Visa, Mastercard, UPI, JCB, Diners |  Any scheme supported currency  | SGD|
|  **Australia**   | Visa, Mastercard |Any scheme supported currency |  AUD, NZD, USD|
|    | UPI |Any scheme supported currency |  AUD |
|    | Diners |Any scheme supported currency |  AUD |
|                |                     |                         |                                           |

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

### European Countries

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
