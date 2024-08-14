---
tags: [Account Information, Card Details, Card Meta Data, BIN]
---

# Account Information Lookup

Account information lookup *(BIN lookup)* is used to obtain the `cardDetails` *([card meta data](?path=docs/Resources/Master-Data/Card-Details.md))* of the cardholder such as issuer country, card function, card brand, and supported features for a [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md), [PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md), [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md) or [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md).

The card details can be used for:

- **Card processing requirements:** based on brand, function, type *([commercial](?path=docs/Resources/Guides/Level23/Level23.md), non-corporate)*
- **[Directed routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md):** sending the request to a network based on card brand, function or type
- **[POS Decision Table](?path=docs/Resources/API-Documents/Device-Management/Decision-Table.md):** allows a device to take preemptive actions on accounts being presented for transactions

<!-- theme: info -->
> Card meta data can be returned as part of a [tokens](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), or [card capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/API-Only.md) request if enabled in Merchant Configuration and Boarding. Please contact your account representative for more information.

---

## Global BIN request

<!--
type: tab
titles: Request, Response
-->

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/information-lookup`

Account information lookup request for a Global BIN using PaymentCard.

```json

{
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "cardData": "4005550000000019"
    }
  }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)

<!--
type: tab
-->

Account information lookup response.

```json
{
  "gatewayResponse": {
    "transactionType": "INFORMATION",
    "transactionState": "SUCCESS",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "cardDetails": [
    {
      "detailedCardProduct": "VISA",
      "productId": "N1",
      "visaProductSubType": "HC",
      "detailedCardIndicator": "DEBIT",
      "pinSignatureCapability": "PIN_OR_SIGNATURE",
      "cardClass": "CORPORATE",
      "countryCode": "USA",
      "issuerBankName": "Example Bank",
      "recordType": "DETAIL",
      "lowBin": "400337",
      "highBin": "400338",
      "binLength": "6",
      "binDetailPan": "16",
      "issuerUpdateYear": "20",
      "issuerUpdateMonth": "09",
      "issuerUpdateDay": "22",
      "regulatorIndicator": "NON_REGULATED",
      "fsaIndicator": "SUPPORTED",
      "nonMoneyTransferOCTsDomestic": "SUPPORTED",
      "nonMoneyTransferOCTsCrossBorder": "SUPPORTED",
      "onlineGamblingOCTsDomestic": "SUPPORTED",
      "onlineGamblingOCTsCrossBorder": "SUPPORTED",
      "moneyTransferOCTsDomestic": "SUPPORTED",
      "moneyTransferOCTsCrossBorder": "SUPPORTED",
      "fastFundsDomesticMoneyTransfer": "SUPPORTED",
      "fastFundsCrossBorderMoneyTransfer": "SUPPORTED",
      "fastFundsDomesticNonMoneyTransfer": "SUPPORTED",
      "fastFundsCrossBorderNonMoneyTransfer": "SUPPORTED",
      "fastFundsDomesticGambling": "SUPPORTED",
      "fastFundsCrossBorderGambling": "SUPPORTED",
      "prepaidIndicator": "PREPAID",
      "visaLargeTicketIndicator": "SUPPORTED",
      "accountFundSource": "DEBIT",
      "panLengthMin": "16",
      "panLengthMax": "16",
      "tokenIndicator": "SUPPORTED",
      "cardholderBillingCurrency": "USD",
      "b2bProgramId": "B2B_PROGRAM_1"
    }
  ]
}
```

<!-- type: tab-end -->

---

## Cloud BIN request

<!--
type: tab
titles: Request, Response
-->

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/information-lookup`

Account information lookup request for a Cloud BIN using PaymentEMV.

```json

{
  "source": {
    "sourceType": "PaymentEMV",
    "emvData": "0249F3704833A12329F1002AB34",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "TRACK_2",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS....",
      "deviceType": "INGENICO",
      "keyId": "88000000022"
    },
    "card": {
      "category": "GIFT"
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683"
  }
}

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)

<!--
type: tab
-->

Account information lookup response for a card not in the [Global BIN file](#global-bin-request) and setup for [Cloud BIN Service](?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Download.md).

```json
{
  "gatewayResponse": {
    "transactionType": "INFORMATION",
    "transactionState": "SUCCESS",
    "transactionProcessingDetails": {
      "orderId": "CHG3b83fca82f9c436486ae12c91f1fcf16",
      "transactionTimestamp": "2016-04-16T16:06:05Z",
      "apiTraceId": "1234567a1234567b1234567c1234567d",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "1234567a1234567b1234567c1234567d"
    }
  },
  "cardDetails": [
    {
      "primaryCardData": "6543210098765432",
      "additionalCardData": "7"
    }
  ]
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)
- [Card Meta Data *(Card Details)*](?path=docs/Resources/Master-Data/Card-Details.md)
- [Commercial Card Processing](?path=docs/Resources/Guides/Level23/Level23.md)
- [Decision Table](?path=docs/Resources/API-Documents/Device-Management/Decision-Table.md)
- [Directed Routing](?oath=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
