---
tags: [Global Acquiring, International, Foreign Currency]
---

# Global Acquiring

Global Acquiring *(also known as Global Merchant Acquiring)* is Commerce Hub's [multi-currency](?path=docs/Resources/Guides/Global-Currency/Multi-Currency.md) acquiring solution that offers one simplified and consolidated payment solution for large multi-national merchants *(including the United States)* for [online, digital and mobile](?path=docs/Getting-Started/Getting-Started-Online.md) transactions across key markets in 37 countries in [North America *(NA)*, Europe *(EMEA)*, and Asia Pacific *(APAC)*](?path=docs/Resources/Guides/Global-Acquring-Regions.md).

The merchant can accept transactions from any card brand's [supported currencies](?path=docs/Resources/Master-Data/Currency-Code.md) and receive funding in one of the 17 supported settlement currencies.

<!-- theme: info -->
> Please contact your account representative for more information on Global Acquiring requirements.

---

## Benefits

- **Improved Customer Service:** Merchants can provide their customers a variety of payment choices worldwide and accept those payments through a single, convenient provider
- **Payment Choices:** Allows merchants to provide their customers with choices to pay the way that they want, without incurring cross-border transaction fees
- **Single-source Global Partner:** Merchants are those that would like to streamline the number of acquiring relationships necessary to serve their global footprint. By relying on one payment service provider, for all electronic payments in all regions, merchants can also bypass many of the costs, risks and hassles of managing service providers in every country
- **Single Integration:** Makes expansion into new markets, with direct merchant interfaces or third-party providers. A merchant integrates directly with Commerce Hub to authorize and settle all transactions across the globe. Global Acquiring merchants can also take advantage of numerous Commerce Hub product offerings.
- **Operational Efficiencies:** Streamline management of all global relationships through one single point-of-contact, integration, pricing, funding and reporting

---

## Supported Currencies

<!-- theme: danger -->
> All [currencies](?path=docs/Resources/Master-Data/Currency-Code.md) which are prohibited by the [Office of Foreign Assets Control *(OFAC)*](?path=https://ofac.treasury.gov/sanctions-programs-and-country-information) are not supported for Global Acquiring.

Commerce Hub currently supports authorizations for presentment in 140+ card brand [supported currencies](?path=docs/Resources/Master-Data/Currency-Code.md) for online, digital and mobile transactions.

---

## Payload Examples

The example below contains the minimum parameters for a successful charges request using the multi-currency details. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

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
- [Global Acquiring Regions](?path=docs/Resources/Guides/Global-Acquring-Regions.md)
- [Global Currency Solutions](?path=docs/Resources/Guides/Global-Currency/Global-Currency-Solutions.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)

---
