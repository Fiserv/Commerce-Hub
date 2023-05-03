---
tags: [Account Information, Card Details, BIN]
---

# Account Information Lookup

Account information lookup is used to obtain the [card details](?path=docs/Resources/Master-Data/Card-Details.md) of the cardholder such as issuer country, card function, card brand, and supported features for a [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) or [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md).

The card details can be used to determine;

- **Card Processing Requirements (CPS):** based on brand, function, type _(commercial, non-corporate)_
- **[Directed Routing](?path=docs/Resources/Guides/Directed-Routing.md):** sending the request to a network based on card brand, function or type

<!-- theme: info -->
> Card details can be returned as part of a tokens or charges request if enabled in Merchant Boarding and Configuration. Please contacnt your account representative for more information.

---

## Information Lookup Using PaymentCard

The merchant can initiate information lookup transaction by passing the card details of the customer using `PaymentCard` as a payment source.

### Minimum Requirements

<!--
type: tab
titles: source, card
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Value *PaymentCard* is used for a verification request using `cardData`. Refer to [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md) for more details. |

<!--
type: tab
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `cardData` | *string* | 19 | Card number or encrypted data |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/information-lookup`

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

## Information Lookup Using PaymentToken 

The merchant can initiate information lookup transaction by passing the card details of the customer and `PaymentToken` as a payment source.

### Minimum Requirements

<!--
type: tab
titles: source
-->

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Value *PaymentToken* is used for a verification request using `tokenData`. Refer to [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) for more details. |
|`tokenData`| *string* | 19 | Token created for a payment type. |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/information-lookup`

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Account information lookup request using PaymentToken.

```json
{
   "source":{
      "sourceType":"PaymentToken",
      "tokenData":"1234123412340019"
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
- [Card Details](?path=docs/Resources/Master-Data/Card-Details.md)
- [Directed Routing](?oath=docs/Resources/Guides/Directed-Routing.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
