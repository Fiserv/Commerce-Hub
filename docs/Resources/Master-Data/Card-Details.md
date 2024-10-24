---
tags: [API Reference, Card Details, Card Metadata, Debit, Master Data]
---

# Card metadata

Card metadata is returned in the `cardDetails` object and contains details from Commerce Hub's Global BIN table and [Cloud BIN table](?path=docs/Resources/API-Documents/Device-Management/Decision-Table.md). The information can be obtained by performing an [account information lookup request](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md).

<!-- theme: info -->
> Card metadata can be returned as part of a [Tokens API request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md), [Refunds API request](?path=docs/Resources/API-Documents/Payments/Refund.md) or [Card Capture API request](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/API-Only.md) if enabled in Merchant Configuration and Boarding. Please contact your account representative for more information.

<!--
type: tab
titles: cardDetails, JSON Example
-->

The below table identifies the parameters in the `cardDetails` object.

| Variable | Type| Max Length | Description |
|---------|----------|----------------|---------|
| `binSource` | *string* | 30 | Categorizes the source of the BIN record. **Valid Values:** *FISERV, CHASE, PRIVATE_LABEL* |
| `recordType` | *string* | 10 | Record Type |
| `lowBin` | *string* | 21 | This field contains the low BIN value of the BIN range. |
| `highBin` | *string* | 21 | This field contains the high BIN value of the BIN range. |
| `binLength` | *string* | 2 | Length of the BIN. |
| `binDetailPan` | *string* | 2 | Displays the primary PAN length. |
| `primaryCardData` | *string* | 79 | PAN/Track digits returned in clear based on the [Cloud BIN](?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Guide.md) set up in Merchant Configuration and Boarding. |
| `additionalCardData` | *string* | 79 | Additional PAN/Track digits returned based on the [Cloud BIN](?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Guide.md) set up in Merchant Configuration and Boarding. |
| `issuerBankName` | *string* | 3 |Issuer bank name for the BIN. |
| `countryCode` | *string* | 3 | Card Issuer Country Two-letter [Country Code](?path=docs/Resources/Master-Data/Country-Code.md). |
| `detailedCardIndicator` | *string* | 16 | Determines the card type (credit, debit). **Valid Values:** *CREDIT, DEBIT, COMMERCIAL_DEBIT*, CONSUMBER_DEBIT |
| `pinSignatureCapability` | *string* | 16 | Determines the card PIN/Signature capability. **Valid Values:** *PIN_CAPABLE, SIGNATURE, PIN OR SIGNATURE* |
| `issuerUpdateYear` | *string* | 2 | The year the BIN record was last updated. |
| `issuerUpdateMonth` | *string* | 2 | The month the BIN record was last updated. |
| `issuerUpdateDay` | *string* | 2 | The day the BIN record was last updated. |
| `regulatorIndicator` | *string* | 15 | Applies to US issued cards only (Visa, Mastercard, and Discover). **Valid Values:** *NON_REGULATED, REGULATED, REGULATED_FRAUD* |
| `cardClass` | *string* | 30 |   Categorizes the BIN as a Business card, Corporate T&E card, Purchase card or Consumer card. **Valid Values:** *BUSINESS, CONSUMER, PURCHASE, CORPORATE* |
| `ebtState` | *string* | 2 | This is the EBT State. Will only be present if EBT capable. Information originates from the debit network. |
| `fsaIndicator` | *string* | 13 | FSA/HSA (Flexible Spending Account / Health Savings Account) indicator, which denotes prepaid card program in the US that permits use of funds to pay for qualified out of pocket medical expenses. |
| `nonMoneyTransferOCTsDomestic` | *string* | 13 | Indicates if domestic non-money transfer OCTs are supported. |
| `nonMoneyTransferOCTsCrossBorder` | *string* | 13 | Indicates if cross-border non-money transfer OCTs are supported. |
| `onlineGamblingOCTsCrossBorder` | *string* | 13 |  Indicates if cross-border online gambling OCTs are supported. |
| `moneyTransferOCTsDomestic` | *string* | 13 | Indicates if domestic money transfer OCTs are supported. **Visa Only**. |
| `moneyTransferOCTsCrossBorder` | *string* | 13 | Indicates if cross-border money transfer OCTs are supported. **Visa Only**. |
| `fastFundsDomesticMoneyTransfer` | *string* | 13 |  Indicates if fast funds is supported for domestic money transfer OCTs. **Visa Only**. |
| `fastFundsCrossBorderMoneyTransfer` | *string* | 13 | Indicates if fast funds is supported for cross-border money transfer OCTs. **Visa Only**. |
| `fastFundsDomesticNonMoneyTransfer` | *string* | 13 |    Indicates if fast funds is supported for cross-border non-money transfer OCTs. **Visa Only**. |
| `fastFundsCrossBorderNonMoneyTransfer` | *string* | 13 | Indicates if fast funds is supported for domestic non-money transfer OCTs. **Visa Only**. |
| `fastFundsCrossBorderGambling` | *string* | 13 | Indicates if fast funds is supported for cross-border gambling OCTs. Visa Only. **Valid Values:** |
| `prepaidIndicator` | *string* | 13 | Indicates whether the card is prepaid. **Valid Values:** *NON_PREPAID, PREPAID* |
| `anonymousPrepaidIndicator` | *string* | 26 | Identifies whether Anonymous Prepaid is supported, like AMLD5 (Anti-Money Laundering Directive) compliant, non-AMLD5 compliant, or non-anonymous prepaid programs / not a prepaid program. Mastercard Only. **Valid Values:** _AMLD5_NON_COMPLIANT, _AMLD4_COMPLIANT_EQUIVALENT, *NON_ANONYMOUS* |
| `productID` | *string* | 5 | Indicates card product sub categories (Purchase Card, Business Card, etc.) for Visa, Mastercard, Discover or Private Label. Refer to BIN specs for valid values. |
| `visaProductSubType` | *string* | 2 | This is used to identify product subtypes. Refer to BIN specs for valid values. |
| `visaLargeTicketIndicator` | *string* | 13 | Visa large ticket indicator. |
| `accountFundSource` | *string* | 15 | Categorizes the source of the BIN recordFor Visa, Mastercard, Discover, and UnionPay. Identifies the source of the funds associated with the primary account for the card. **Valid Values:** *CREDIT, DEBIT, PREPAID, CHARGE, DEFERRED_DEBIT*|
| `panLengthMin` | *string* | 2 | Primary Account Number (PAN) Length Minimum. |
| `panLengthMax` | *string* | 2 | Primary Account Number (PAN) Length Maximum. |
| `tokenIndicator` | *string* | 13 | Token Indicator. |
| `issuingNetwork` | *string* | 10| Identifies Discover card types. **Valid Values:** *DISCOVER, DINERS, JCB, CUP, PAYPAL*|
| `cardholderBillingCurrency` | *string* | 3 | Cardholder billing currency in 3-letter ISO currency format. |
| `accountFundSourceSubtype` | *string* | 22 | Account fund source subtype. Mastercard only. **Valid Values:** *PREPAID_RELOADBLE, PREPAID_NON_RELOADABLE* |
| `b2bProgramId`| *string* | 15 | Business-to-Business Virtual Payments Product Offering. Visa only. **Valid Values:** *B2B_PROGRAM_1, B2B_PROGRAM_2, B2B_PROGRAM_3, B2B_PROGRAM_4, B2B_PROGRAM_5, B2B_PROGRAM_6*|
| `moneySendIndicator` | *string* | 25 | MoneySend is a set of a Mastercard network transactions that facilitate fund transfers. This indicator determines if the Mastercard account is eligible to receive a MoneySend payment. |
| `countryCode` | *string* | 30 | Categorizes the source of the BIN record. **Valid Values:** *UNKNOWN, DOMESTIC_AND_CROSS_BORDER, NOT_ENABLED*|
| `detailedCardProduct` | *string* | 21 | Card Product. **Valid Values:** *VISA, MASTERCARD, AMEX, DISCOVER, PIN_ONLY (Not Visa, Mastercard, American Express, Discover), MAESTRO, DINERS, INTERAC, JCB* |
| `debitPinlessIndicator` | *array* |  | A list of [Debit Network PINless Details](#debit-network-pinless-details ) |

<!--
type: tab
-->

JSON string format for cardDetails:

```JSON
{
  "cardDetails": [
    {
      "binSource": "CHASE",
      "recordType": "DETAIL",
      "lowBin": "400337",
      "highBin": "400338",
      "binLength": "6",
      "binDetailPan": "16",
      "issuerBankName": "Example Bank",
      "countryCode": "USA",
      "detailedCardProduct": "VISA",
      "detailedCardIndicator": "CREDIT",
      "pinSignatureCapability": "PIN_OR_SIGNATURE",
      "issuerUpdateYear": "20",
      "issuerUpdateMonth": "09",
      "issuerUpdateDay": "22",
      "regulatorIndicator": "NON_REGULATED",
      "cardClass": "CONSUMER",
      "debitPinlessIndicator": [
        {
          "debitNetworkId": "STAR_WEST",
          "pinlessPOS": "SUPPORTED",
          "pinlessBillPay": "SUPPORTED",
          "eCommerce": "SUPPORTED",
          "dualIndicator": "SUPPORTED",
          "pinnedPOS": "SUPPORTED"
        }
      ],
      "ebtState": "string",
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
      "prepaidIndicator": "SUPPORTED",
      "anonymousPrepaidIndicator": "string",
      "productId": "N1",
      "visaProductSubType": "HC",
      "visaLargeTicketIndicator": "SUPPORTED",
      "accountFundSource": "CREDIT",
      "panLengthMin": "16",
      "panLengthMax": "16",
      "tokenIndicator": "SUPPORTED",
      "issuingNetwork": "DINERS",
      "cardholderBillingCurrency": "USD",
      "accountFundSourceSubtype": "PREPAID_RELOADABLE",
      "b2bProgramId": "B2B_PROGRAM_1",
      "moneySendIndicator": "DOMESTIC_AND_CROSS_BORDER"
    }
  ]
}
```

<!-- type: tab-end -->

---

## Debit Network PINless Details

The Debit Network Pinless Details are returned as part of the `cardDetails` object. The indicators identify the network and PIN support based on the entry method.

<!--
type: tab
titles: debitPinlessIndicator, JSON Example
-->

The below table identifies the parameters in the `debitPinlessIndicator` object.

| Variable | Type| Max Length | Description |
|---------|----------|----------------|---------|
| `debitNetworkId` | *string* | 20 | Identifies the [debit network](#debit-network-id). |
| `eCommerce` | *string* | 13 | e-Commerce indicator. |
| `pinlessPOS` | *string* | 13 | PINless POS indicator. |
| `pinlessBillPay` | *string* | 13 | PINless BillPay indicator. |
| `dualIndicator` | *string* | 13 | Dual indicator. |
| `pinnedPOS` | *string* | 13 | Pinned POS indicator. |

<!--
type: tab
-->

JSON string format for `debitPinlessIndicator`:

```json
{
  "debitPinlessIndicator": {
    "debitNetworkId": "NYCE",
    "eCommerce": "SUPPORTED",
    "pinlessPOS": "SUPPORTED",
    "pinlessBillPay": "SUPPORTED",
    "dualIndicator": "NOT_SUPPORTED",
    "pinnedPOS": "SUPPORTED"
  }
}
```

<!-- type: tab-end -->

---

### Debit Network ID

The below table identifies the values for `debitNetworkId`.

| Value | Description |
| ----- | ----- |
| `ACCEL_FISERV` | Payment network allows account holders to access funds in a multitude of ways, make in-store and online purchases with ease, and send and receive money in real-time |
| `AFFN_DIRECT` | Provide U.S. military personnel *(active, reserve, dependents and retired)* with access to their funds through ATM and point-of-sale *(POS)* terminals at or near U.S. military bases worldwide |
| `AFFN_FIDELITY` | AFFN Fidelity |
| `AFFN_FISERV` | AFFN Fiserv |
| `ATH-SCOTIA BANK` | Bill payment processor |
| `ATH_DIRECT` | Direct Debit processing system for recurring payments |
| `BASE_24/INTERAC` | Integrated e-payment processing engine that provides application software to acquire and authenticate, route, switch and authorize transactions, regardless of the channel in which they originate |
| `CARLFS` | Interbank electronic funds transfer *(EFT)* network in the United States |
| `CNB_ENID` | Central National Bank of ENID |
| `CU24_DIRECT` | Credit Union 24 payment network |
| `CU24_FIDELITY` | Credit Union 24 payment network for Fidelity |
| `CU24_FISERV` | Credit Union 24 payment network |
| `EBT_ACS` | ACS EBT |
| `EBT_EFUNDS` | EFUNDS EBT |
| `EBT_FISERV` | Fiserv EBT payment network |
| `EBT_JPCHASE` | JP Morgan Chase EBT network |
| `EBT_NORTHRUP_GRUMMAN` | Northrup Grumman EBT |
| `EBT_SOLUTRAN` | Solutran EBT |
| `EBT_TEAM_OF_TEXAS` | Team of Texas EBT Card |
| `EXXON` | Exxon payment network |
| `INFOLINKS` | Infolinks payment card |
| `INTERAC_EVERLINK` | Provider of comprehensive, innovative and integrated payments solutions and services for credit unions, banks, and small/medium enterprises (SMEs) |
| `INTERLINK` | Visa's electronic funds transfer card |
| `INTERLINK_FISERV` | Interlink Fiserv |
| `JEANIE_DIRECT` | Direct payment network |
| `JEANIE_STAR_WEST` | Online-shared ATM network |
| `JETS` | Jets payment solutions |
| `MAESTRO_DIRECT` | Brand of debit cards and prepaid cards owned by Mastercard |
| `MAESTRO_FISERV` | Maestro Fiserv |
| `MAESTRO_STAR_WEST` | Brand of debit cards and prepaid cards owned by Mastercard |
| `MCX` | Payment Processing platform |
| `NYCE` | Interbank network connecting the ATMs of various financial institutions in the United States and Canada |
| `NYCE_FISERV` | Interbank network connecting the ATMs of various financial institutions in the United States and Canada |
| `OPTION_FISERV` | Fiserv Network |
| `PAVD` | Transactions that are Visa Debit transactions and are part of the existing Visa network functionality |
| `PAVD_FISERV` | PAVD Fiserv |
| `PULSE` | Interbank electronic funds transfer (EFT) network in the United States |
| `PULSE_FISERV` | Provide consumers anytime, anywhere access to funds – online, at ATMs and at point-of-sale *(POS)* locations nationwide |
| `SHAZAM` | US based interbank network |
| `STAR_EAST` | Star East payment network |
| `STAR_EAST_FISERV` | Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel |
| `STAR_NE` | Multiple payment channel network |
| `STAR_NE_FISERV` | Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel for the NE region |
| `STAR_WEST` | Star West interbank network |
| `STAR_WEST_FISERV` | Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel for the West region |
| `STAR_WEST_OPTION` | Star West Option |
| `SVS` | Provides support to clients to process over gift card transactions |
| `UNIONPAY` | Provider of bank card services and a major card scheme in mainland China |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)
- [Accounts Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [POS Decision Table](?path=docs/Resources/API-Documents/Device-Management/Decision-Table.md)
- [Tokenization Request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---
