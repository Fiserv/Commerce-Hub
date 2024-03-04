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
- Integrated billing, settlement, and reporting

Commerce Hub will add support for additional Fiserv acquiring countries and alternative payment methods in the future.  

---

## Benefits and Requirements

Global merchants with domicility in these markets can benefit from Fiserv’s local, in-country licensing and global reach to achieve optimal approval rates as well as the lowest network interchange and assessments costs.

Requirements for domicility typically include the following criteria for each country or region:

- Having a permanent establishment  through which all transactions are completed
- Holding a valid business license
- Having a local address for correspondence and judicial process
- Paying taxes relating to sales activity

Merchants not meeting domicility requirements can still conduct cross-border currency using our FX solutions, although approval rates will be lower and network costs will be higher in this model.

---

## Country and Currency Coverage

CommerceHub currently supports authorizations for presentment in any of the 140+ Scheme Supported [currencies](?path=docs/Resources/Master-Data/Currency-Code.md) for Card Not Present transactions across our global acquiring footprint.  Fiserv does not support certain  _([OFAC](https://ofac.treasury.gov/ofac-sanctions-lists))_-sanctioned currencies.  

Commerce Hub currently supports the below [37 countries](#coverage) for local acquiring as a direct Fiserv service.  Additional Fiserv supported countries to be added to Commerce Hub in the near future.

For certain currency conversions with respect to USD such as the Lebanese Pound (11 digits + 2 decimal points) or Somali Shilling (9 digits + 2 decimal points), there is a limit on amount value these are supported in downstream systems such as Nashville. Nashville specifications currently support a max of 12 digits. Most terminal or POS systems support 7 digits+3 decimals or 8 digits+2 decimals. Only merchants that have high ticket items will probably support 10 digits + 2 decimals.

---

### Global Acquiring Country Coverage - Card Networks

| Region    | Country  | Supporte Payments | Supported Model |
|----------|-----------|-------------------|-----------------|
| **North America** |    |                 |                 |
|           | United States   | Visa, Mastercard, PIN Debit Networks, ACH, Closed Loop | Full Service Acquiring - Auth & Settlement |
|           |            | American Express, Discover, UPI, JCB (via Discover), Paypal | Authorization Only     |
|           | Canada          | Visa, Mastercard, UPI                        | Full Service Acquiring - Auth & Settlement |
|                                      |                 | American Express, Discover, JCB (via AMEX), PayPal | Authorization Only     |
| **Europe**     |            |                   |             |
|                | Austria     | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|       | Belgium       | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only  |
|        | Croatia| Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Cyprus | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Czeck Republic | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Demark  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Finland  |Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | France  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Germany  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Greece  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Hungary  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Iceland  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Ireland  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Italy  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only 
|        | Latvua  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only 
|        | Liechtenstein  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Lithuania  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Luxemburg  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Malta  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Netherlands  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Poland  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Portugal  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Romania  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Slovakia  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Slovenia  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
|        | Spain  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only  |
|        | Sweden  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only  |
|        | Switzerland  | Visa, Mastercard, UPI, JCB, Diners American Express, Paypal   | Full Service Acquiring - Auth & Settlement Authorization Only |
| **Great Britain & British Overseas Territory** |          |                                              |                                        |
|                                      | United Kingdom Gibraltar  | Visa, Mastercard, UPI, JCB, Diners           | Full Service Acquiring - Auth & Settlement |
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

| Region | Country  | Supported Payments  | Presentment Currencies  | Funding Currencies    |
|-------- | -------|---------------------|-------------------------|-----------------------|
| **North America (outside of US)** |         |          |    |
|  | **Canada** |Visa, Mastercard | Any scheme supported currency | USD, CAD, CHF, DKK, EUR, GBP, NOK, NZD, SEK, HKD, AUD, ZAR, JPY |
|    |       | UPI | Any scheme supported currency | CAD |
|                |                     |                         |                       |
| **Europe** |         |          |    |
|  |  **EEA**  | Visa, Mastercard | Any scheme supported currency | EUR, AUD, JPY, ZAR, CHF, NOK, DKK, SEK, NZD, HKD, USD, CAD, GBP, SGD, PLN, CZK, HUF |
|   |    | UPI | Any scheme supported currency |   EUR, CHF |
|   |    | JCB |  Any scheme supported currency  | CHF, NOK, SEK, DKK, EUR, USD and JPY |
|   |   | Diners |Any scheme supported currency |  CHF, NOK, DKK, SEK, GBP, USD, JPY and EUR |
|                |                     |                         |                       |
|  **Great Britain & British Overseas Territory** |         |          |    |
| |  **United Kingdom Gibraltar**  | Visa, Mastercard | Any scheme supported currency | EUR, AUD, JPY, ZAR, CHF, NOK, DKK, SEK, NZD, HKD, USD, CAD, GBP |
|  |  | UPI | Any scheme supported currency | GBP |
|  |  | JCB |  Any scheme supported currency  | GBP, USD, EUR and JPY |
|  |  | Diners |Any scheme supported currency |  GBP and EUR |
|                |                     |                         |                  |
| **APAC** |         |          |    |
|   |  **Hong Kong**    | Visa, Mastercard, UPI, JCB, Diners | Any scheme supported currency | HKD |
|  | **Malaysia** | Visa, Mastercard | Any scheme supported currency | MYR |
|  |  **Singapore** | Visa, Mastercard, UPI, JCB, Diners |  Any scheme supported currency  | SGD|
|  | **Australia**   | Visa, Mastercard |Any scheme supported currency |  AUD, NZD, USD|
|  |    | UPI |Any scheme supported currency |  AUD |
|  |   | Diners |Any scheme supported currency |  AUD |
|                |                     |                         |    |
<!-- type: tab-end -->

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
