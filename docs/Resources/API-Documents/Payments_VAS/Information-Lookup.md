---
tags: [carat, commerce-hub, enterprise, information-lookup, account-lookup, card-lookup, token-lookup]
---

# Information Lookup

Information Lookup is used to verify card related information of the cardholder such as issuer country, card function and card brand associated with a card or token. The `cardDetails` are returned in the response.

- CPS (card processing requirements) - based on things like brand, function, type (commercial, non-corporate)
- Directed Routing - sending the request to a network based on card brand, function or type

<!--
type: tab
titles: cardDetails
-->

The below table identifies the parameters in the `cardDetails` object.

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
| `binSource` | *string* | 30 | Categorizes the source of the BIN record. **Valid Values:** _FIERV, CHASE, PRIVATE_LABEL_ |
| `recordType` | *string* | 10 | Record Type |
| `lowBin` | *string* | 21 | This field contains the low BIN value of the BIN range. |
| `highBin` | *string* | 21 | This field contains the high BIN value of the BIN range. |
| `binLength` | *string* | 2 | Length of the BIN. |
| `binDetailPan` | *string* | 2 | Displays the primary PAN length. |
| `issuerBankName` | *string* | 3 |Issuer bank name for the BIN. |
| `countryCode` | *string* | 3 | Card Issuer Country Two-letter [Country Code](?path=docs/Resources/Master-Data/Country-Code.md). |
| `detailedCardIndicator` | *string* | 16 | Determines the card type (credit, debit). **Valid Values:** _CREDIT, DEBIT, COMMERCIAL_DEBIT_, CONSUMBER_DEBIT |
| `pinSignatureCapability` | *string* | 16 | Determines the card PIN/Signature capability. **Valid Values:** _PIN_CAPABLE, SIGNATURE, PIN OR SIGNATURE_ |
| `issuerUpdateYear` | *string* | 2 | The year the BIN record was last updated. |
| `issuerUpdateMonth` | *string* | 2 | The month the BIN record was last updated. |
| `issuerUpdateDay` | *string* | 2 | The day the BIN record was last updated. |
| `regulatorIndicator` | *string* | 15 | Applies to US issued cards only (Visa, Mastercard, and Discover). **Valid Values:** _NON_REGULATED, REGULATED, REGULATED_FRAUD_ | 
| `cardClass` | *string* | 30 |   Categorizes the BIN as a Business card, Corporate T&E card, Purchase card or Consumer card. **Valid Values:** _BUSINESS, CONSUMER, PURCHASE, CORPORATE_ |
| `debitPinlessIndicator` | *array* |  | A list of [Debit Network PINless Details](?path=docs/Resources/Master-Data/Debit-Pinless-Indicator.md). | 
| `ebtState` | *string* | 2 | This is the EBT State. Will only be present if EBT capable. Information originates from the debit network. |
| `fsaIndicator` | *string* | 13 | FSA/HSA (Flexible Spending Account / Health Savings Account) indicator, which denotes prepaid card program in the US that permits use of funds to pay for qualified out of pocket medical expenses. **Valid Values:**  |
| `nonMoneyTransferOCTsDomestic` | *string* | 13 | Indicates if domestic non-money transfer OCTs are supported. Visa Only. **Valid Values:** |
| `nonMoneyTransferOCTsCrossBorder` | *string* | 13 | Indicates if cross-border non-money transfer OCTs are supported. Visa Only. **Valid Values:** |
| `onlineGamblingOCTsCrossBorder` | *string* | 13 |  Indicates if cross-border online gambling OCTs are supported. Visa Only. **Valid Values:** |
| `moneyTransferOCTsDomestic` | *string* | 13 | Indicates if domestic money transfer OCTs are supported. Visa Only.  **Valid Values:** |
| `moneyTransferOCTsCrossBorder` | *string* | 13 | Indicates if cross-border money transfer OCTs are supported. Visa Only.  **Valid Values** |
| `fastFundsDomesticMoneyTransfer` | *string* | 13 |  Indicates if fast funds is supported for domestic money transfer OCTs. Visa Only. **Valid Values:** |
| `fastFundsCrossBorderMoneyTransfer` | *string* | 13 | Indicates if fast funds is supported for cross-border money transfer OCTs. Visa Only. **Valid Values:** |
| `fastFundsDomesticNonMoneyTransfer` | *string* | 13 |    Indicates if fast funds is supported for cross-border non-money transfer OCTs. Visa Only. Visa Only. Visa Only. **Valid Values:** |
| `fastFundsCrossBorderNonMoneyTransfer` | *string* | 13 | Indicates if fast funds is supported for domestic non-money transfer OCTs. Visa Only. **Valid Values:** |
| `fastFundsCrossBorderGambling` | *string* | 13 | Indicates if fast funds is supported for cross-border gambling OCTs. Visa Only. **Valid Values:** |
| `prepaidIndicator` | *string* | 13 | Indicates whether the card is prepaid. **Valid Values:** _NON_PREPAID, PREPAID_ |
| `anonymousPrepaidIndicator` | *string* | 26 | Identifies whether Anonymous Prepaid is supported, like AMLD5 (Anti-Money Laundering Directive) compliant, non-AMLD5 compliant, or non-anonymous prepaid programs / not a prepaid program. Mastercard Only. **Valid Values:** _AMLD5_NON_COMPLIANT, _AMLD4_COMPLIANT_EQUIVALENT, _NON_ANONYMOUS_ |
| `productID` | *string* | 5 | Indicates card product sub categories (Purchase Card, Business Card, etc.) for Visa, Mastercard, Discover or Private Label. Refer to BIN specs for valid values. |
| `visaProductSubType` | *string* | 2 | This is used to identify product subtypes. Refer to BIN specs for valid values. |
| `visaLargeTicketIndicator` | *string* | 13 | Visa large ticket indicator. **Valid Values:** _NOT_SUPPORTED, SUPPORTED_ |
| `accountFundSource` | *string* | 15 | Categorizes the source of the BIN recordFor Visa, Mastercard, Discover, and UnionPay. Identifies the source of the funds associated with the primary account for the card. **Valid Values:** _CREDIT, DEBIT, PREPAID, CHARGE, DEFERRED_DEBIT_|
| `panLengthMin` | *string* | 2 | Primary Account Number (PAN) Length Minimum. |
| `panLengthMax` | *string* | 2 | Primary Account Number (PAN) Length Maximum. |
| `tokenIndicator` | *string* | 13 | Token Indicator. **Valid Values:** _NOT_SUPPORTED, SUPPORTED_ |
| `issuingNetwork` | *string* | 10| Identifies Discover card types. **Valid Values:** _DISCOVER, DINERS, JCB, CUP, PAYPAL_|
| `cardholderBillingCurrency` | *string* | 3 | Cardholder billing currency in 3-letter ISO currency format. |
| `accountFundSourceSubtype` | *string* | 22 | Account fund source subtype. Mastercard only. **Valid Values:** _PREPAID_RELOADBLE, PREPAID_NON_RELOADABLE_ |
| `b2bProgramId`| *string* | 15 | Business-to-Business Virtual Payments Product Offering. Visa only. **Valid Values:** _B2B_PROGRAM_1, B2B_PROGRAM_2, B2B_PROGRAM_3, B2B_PROGRAM_4, B2B_PROGRAM_5, B2B_PROGRAM_6_|
| `moneySendIndicator` | *string* | 25 | MoneySend is a set of a Mastercard network transactions that facilitate fund transfers. This indicator determines if the Mastercard account is eligible to receive a MoneySend payment. |
| `countryCode` | *string* | 30 | Categorizes the source of the BIN record. **Valid Values:** _UNKNOWN, DOMESTIC_AND_CROSS_BORDER, NOT_ENABLED_|
| `detailedCardProduct` | *string* | 21 | Card Product. **Valid Values:** _VISA, MASTERCARD, AMEX, DISCOVER, PIN_ONLY (Not Visa, Mastercard, American Express, Discover), MAESTRO, DINERS, INTERAC, JCB_ |         
| `clientId` | *string* |  64 | Intermediate field which categorizes BIN records as client ownership, with restricted availability to that client like PLCC private label. |
| `mTIndicator` | *string* | 13 | (Deprecated) The Original Credit Money Transfer (MT) Indicator determines if the MasterCard account is eligible to receive a MoneySend Payment. **Valid Values:** _NOT_SUPPORTED, SUPPORTED_|
| `ogIndicator` | *string* | 13 | (Deprecated) The Original Credit Online Gambling (OG) Indicator determines if the Visa account is eligible to receive an Original Credit Money Transfer. **Valid Values:** |
| `fastFunds` | *string* | 25 | (Deprecated) The Fast Funds Indicator determines if the Visa/MasterCard account can receive the transfer of funds within 30 minutes. **Valid Values:** _NOT_ENABLED, DOMESTIC_AND_CROSS_BORDER, CROSS_BORDER, DOMESTIC_|_|_|
| `octIndicator` | *string* | 13 | (Deprecated) The Original Credit Transaction (OCT) Indicator determines if the Visa account can receive a gambling or lottery payout Original Credit Transaction (OCT).
| `ogIndicator` | *string* | 13 | (Deprecated) The Original Credit Online Gambling (OG) Indicator determines if the Visa account is eligible to receive an Original Credit Money Transfer. |
| `accountLevelProcessing` | *string* | 13 | Allows an issuer to manage select product-based payment services at the account level rather than at the BIN level. |
| `debitNetworkParticipant` | *string* | 15 | Debit network participant. |
| `account` | *string* | 1 | To be removed. Use accountLevelProcessing if this is needed. |
| `debitSignatureNWParticipant` | *string* | 2 | To be removed. Use debitNetworkParticipant. Debit Signature Participant. |
| `pan`| *string* | 2 | To be removed. Use panLengthMax. |
| `brand` | *string* | 256 | To be removed. Use detailedCardProduct. Card brand. |
| `brandProductID` | *string* | 256 | To be removed. Use productId. Category within the card brand. |
| `detailProductId` | *string* | 256 | To be removed. Not used, or use productId instead. Detailed Product ID.'. |
| `cardFunction` | *string* | 256 | To be removed. Use detailedCardIndicator. Identifies the type of card as CREDIT, DEBIT, FUEL, or GIFT. |
| `commercialCard` | *string* | | To be removed. Use cardClass. Identifies if the card is a commercial card.  **Valid Values:** _CORPPORATE, BUSINESS, PURCHASE, UNAVAILABLE, NON_COMMERCIAL_|
| `issuerCountry` | *string* | 256 | To be removed. Use countryCode. Card issuer two-letter country code. |
| `issuerName` | *string* | 256 | To be removed. Use issuerBankName. Issuing bank name. |

<!-- type: tab-end -->

---

## Information Lookup Using PaymentCard

The merchant can initiate information lookup transaction by passing the card details of the customer and using `PaymentCard` as a payment source.

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
>**POST** `/payments-vas/v1/accounts/information`

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

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/information)

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

The merchant can initiate information lookup transaction by passing the card details of the customer and using `PaymentToken` as a payment source.

### Minimum Requirements

<!--
type: tab
titles: source
-->

| Variable | Type| Maximum Length | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Value *PaymentToken* is used for a verification request using `tokenData`. Refer to [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) for more details. |
|`tokenData`| *string* | 19 | Token created for Card. |

<!-- type: tab-end -->

---

### Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/information`

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
      "transactionTime": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "cardDetails": [
    {
      "brand": "VISA",
      "brandProductId": "VISA_BUSINESS",
      "cardFunction": "CREDIT",
      "commercialCard": "CORPORATE",
      "issuerCountry": "US",
      "issuerName": "First National Bank of Omaha"
    }
  ]
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Tokenization Request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---
