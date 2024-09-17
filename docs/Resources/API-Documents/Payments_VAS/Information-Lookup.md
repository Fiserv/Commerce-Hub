---
tags: [Account Information, Card Details, Card Meta Data, BIN]
---

# Account Information Lookup

The Account Information Lookup (BIN Lookup) API is used to obtain `cardDetails` *(also known as [card metadata](?path=docs/Resources/Master-Data/Card-Details.md))* of the cardholder. This includes information such as issuer country, card function, card brand, and supported features for a [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md), [PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md), [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md), or [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md).

The card details can be used to determine;

- **Card Processing Requirements (CPS):** based on brand, function, type _(commercial, non-corporate)_
- **[Directed Routing](?path=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md):** sending the request to a network based on card brand, function or type

<!-- theme: info -->
> Card meta data can be returned as part of a [tokens](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), or [card capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/API-Only.md) request if enabled in Merchant Configuration and Boarding. Please contact your account representative for more information.

---

### Endpoint
<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/information-lookup`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Account information lookup request using PaymentCard.

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

##### Account information lookup response.

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
- [Card Meta Data](?path=docs/Resources/Master-Data/Card-Details.md)
- [Directed Routing](?oath=docs/Resources/Guides/Transaction-Routing/Directed-Routing.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
