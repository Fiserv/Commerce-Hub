---
tags: [Account Information, Card Details, Card Metadata, BIN]
---

# Perform an Global BIN Information Lookup

Commerce Hub's Global BIN lookup checks the Global BIN file for the `cardDetails` *([card metadata](?path=docs/Resources/Master-Data/Card-Details.md))* and returns relevant data such as issuer country, card function, card brand, and supported features. This data can be used to take actions on an account being presented for a transaction.

<!-- theme: info -->
> Card metadata can be returned as part of a [Tokens API](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), [Charges API](?path=docs/Resources/API-Documents/Payments/Charges.md), or [Checkout Capture API](?path=docs/Online-Mobile-Digital/Checkout/API/API-Only.md) request if enabled in Merchant Configuration and Boarding. Please contact your account representative for more information.

---

## Global BIN request

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum parameters for a Global BIN Information Lookup request using a *PaymentCard*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup).

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/information-lookup`

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "OpzYI4RDhNVbHM3Fc6sVBASBXX4HHneBw4MBhNVxljwjMFGaBdJPo4h7GmElBu3xEem....",
      "encryptionBlockFields": "card.cardData:16",
      "keyId": "88000000022"
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)

<!--
type: tab
-->

Example of a information lookup (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)
- [Card Metadata *(Card Details)*](?path=docs/Resources/Master-Data/Card-Details.md)
- [Commercial Card Processing](?path=docs/Resources/Guides/Level23/Level23.md)
- [Directed Routing](?oath=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
