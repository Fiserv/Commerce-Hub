---
tags: [Currency Conversion, Global Currency]
---

# Dynamic Currency Conversion

Dynamic Currency Conversion (DCC) is a Card Present (CP) and (CNP) present offering that allows merchants to offer their international credit cardholders the choice to pay in either their own currency or the merchant’s base currency. Merchants benefit by offering their foreign customers the choice, convenience, and transparency to pay in their card billing. This service is currently offered for Visa and Mastercard credit transactions.

The DCC service provides convenience and a level of comfort to the international cardholder by transacting in their own home currency while offering a favorable exchange rate. Once the customer elects to proceed with DCC, the transaction remains in the currency of the card throughout the entire transaction and settlement process.

The DCC choice is determined by interrogating the BIN of the card to determine whether the card is eligible for conversion. If it is determined to be eligible, disclosures are presented to the cardholder to allow them to make an active choice to pay in their card’s currency or the merchant’s local currency (for US merchant, USD). These disclosures, required by the card scheme, include:

<!-- theme: danger -->
> We are enhancing the Commerce Hub to include currency conversion support and the documents related to the features will be released soon.

THIS IS OLD  !!!!

Commerce Hub's Dynamic Currency Conversion _(DCC)_ service is a payment solution that allows international customers to pay in either their credit card currency or the base currency of the merchant. The DCC service authorizes and settles transactions in major global currencies while still being funded in the merchant's base currency. Both the customer and merchant will know precisely the amount of the sale in both currencies.

---

## Key Takeaways

- Dynamic currency conversion *(DCC)* is a merchant-provided service that allows the cardholder to see his/her foreign credit card transactions in his/her home currency at the point-of-sale.
- DCC is optional, and you have the right to decline.
- With DCC you are still subject to any foreign transaction fees levied by your credit card.
- Support for more than 70 global Visa and Mastercard-supported currencies






## Benefits

Cardholder Benefits

- Allows cardholders to make an informed choice about their online purchases based on exchange rate, Local currency price, Foreign Currency price and international margins thereby eradicating any unexpected pricing or foreign exchange conversions on receipt of their monthly statements. 
- Know exact price and ability to pay in familiar currency at the time of purchase, thereby providing an enhanced purchase experience

## Merchant Benefits

Earn additional income on foreign issued credit card transactions.
No additional setup costs or monthly fees
Improve customer satisfaction and customer loyalty
All transactions will be funded to the merchant in their local currency
For each DCC transaction, cardholder incurs an international margin. Merchants earn a share of this margin, which can be used to help offset their processing costs.


ADDD TABLE


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

---
