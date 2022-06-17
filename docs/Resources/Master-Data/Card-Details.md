---
tags: [API Reference, Card Details, Debit, Master Data]
---

# Card Details

Card details contains elements from the card or token's BIN details. The information can be obtained by performing an [account information lookup request](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md).

<!-- theme: info -->
> Card details can be returned as part of a tokens or charges request if enabled in Marketplace.

<!--
type: tab
titles: cardDetails, JSON Example
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
| `debitPinlessIndicator` | *array* |  | A list of [Debit Network PINless Details](#debit-network-pinless-details ). | 
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
| `prepaidIndicator` | *string* | 13 | Indicates whether the card is prepaid. **Valid Values:** _NON_PREPAID, PREPAID_ |
| `anonymousPrepaidIndicator` | *string* | 26 | Identifies whether Anonymous Prepaid is supported, like AMLD5 (Anti-Money Laundering Directive) compliant, non-AMLD5 compliant, or non-anonymous prepaid programs / not a prepaid program. Mastercard Only. **Valid Values:** _AMLD5_NON_COMPLIANT, _AMLD4_COMPLIANT_EQUIVALENT, _NON_ANONYMOUS_ |
| `productID` | *string* | 5 | Indicates card product sub categories (Purchase Card, Business Card, etc.) for Visa, Mastercard, Discover or Private Label. Refer to BIN specs for valid values. |
| `visaProductSubType` | *string* | 2 | This is used to identify product subtypes. Refer to BIN specs for valid values. |
| `visaLargeTicketIndicator` | *string* | 13 | Visa large ticket indicator. |
| `accountFundSource` | *string* | 15 | Categorizes the source of the BIN recordFor Visa, Mastercard, Discover, and UnionPay. Identifies the source of the funds associated with the primary account for the card. **Valid Values:** _CREDIT, DEBIT, PREPAID, CHARGE, DEFERRED_DEBIT_|
| `panLengthMin` | *string* | 2 | Primary Account Number (PAN) Length Minimum. |
| `panLengthMax` | *string* | 2 | Primary Account Number (PAN) Length Maximum. |
| `tokenIndicator` | *string* | 13 | Token Indicator. |
| `issuingNetwork` | *string* | 10| Identifies Discover card types. **Valid Values:** _DISCOVER, DINERS, JCB, CUP, PAYPAL_|
| `cardholderBillingCurrency` | *string* | 3 | Cardholder billing currency in 3-letter ISO currency format. |
| `accountFundSourceSubtype` | *string* | 22 | Account fund source subtype. Mastercard only. **Valid Values:** _PREPAID_RELOADBLE, PREPAID_NON_RELOADABLE_ |
| `b2bProgramId`| *string* | 15 | Business-to-Business Virtual Payments Product Offering. Visa only. **Valid Values:** _B2B_PROGRAM_1, B2B_PROGRAM_2, B2B_PROGRAM_3, B2B_PROGRAM_4, B2B_PROGRAM_5, B2B_PROGRAM_6_|
| `moneySendIndicator` | *string* | 25 | MoneySend is a set of a Mastercard network transactions that facilitate fund transfers. This indicator determines if the Mastercard account is eligible to receive a MoneySend payment. |
| `countryCode` | *string* | 30 | Categorizes the source of the BIN record. **Valid Values:** _UNKNOWN, DOMESTIC_AND_CROSS_BORDER, NOT_ENABLED_|
| `detailedCardProduct` | *string* | 21 | Card Product. **Valid Values:** _VISA, MASTERCARD, AMEX, DISCOVER, PIN_ONLY (Not Visa, Mastercard, American Express, Discover), MAESTRO, DINERS, INTERAC, JCB_ |         

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

| Variable | Type| Maximum Length | Description |
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
   "debitPinlessIndicator":{
      "debitNetworkId": "NYCE"
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

## Debit Network ID

The below table identifies the values for `debitNetworkId`.

| Value | Description |
|---------|----------|
| `pinlessPOS` | PAVD FISERV |
| `SHAZAM`| US based interbank network. |
| `NYCE` | Interbank network connecting the ATMs of various financial institutions in the United States and Canada. |
| `PULSE` | Interbank electronic funds transfer (EFT) network in the United States. |
| `STAR_WEST` | Star West interbank network. |
| `STAR_EAST` | Star East payment network. |
| `JETS`| Jets payment solutions. |
| `INFOLINKS` | Infolinks payment card. |
| `CARLFS`| Interbank electronic funds transfer (EFT) network in the United States. **NO INFO** |
| `STAR_NE` | Multiple payment channel network.  |
| `PAVD` | Transactions that are Visa Debit transactions and are part of the existing Visa network functionality. |
| `CNB_ENID` | Central National Bank of ENID. |
| `ATH-SCOTIA BANK` | Bill payment processor. |
| `ATH_DIRECT` | Direct Debit processing system for recurring payments. |
| `INTERLINK` | Visa's electronic funds transfer card. |
| `INTERAC_EVERLINK` | Provider of comprehensive, innovative and integrated payments solutions and services for credit unions, banks, and small/medium enterprises (SMEs). |
| `UNIONPAY`| Provider of bank card services and a major card scheme in mainland China. | 
| `MAESTRO_DIRECT`| Brand of debit cards and prepaid cards owned by Mastercard. |
| `MCX` | Payment Processing platform. |
| `EBT_SOLUTRAN` | SOLUTRAN EBT. |
| `EBT_ACS` | ACS EBT. |
| `MAESTRO_STAR_WEST` | Brand of debit cards and prepaid cards owned by Mastercard. |
| `STAR_WEST_OPTION`| STAR WEST OPTION. | 
| `JEANIE_STAR_WEST`| Online-shared ATM network. |
| `JEANIE_DIRECT` | Direct payment network. |
| `AFFN_DIRECT` | Provide U.S. military personnel (active, reserve, dependents and retired) with access to their funds through ATM and point-of-sale (POS) terminals at or near U.S. military bases worldwide. | 
| `CU24_DIRECT` | Credit Union 24 payment network. |
| `EBT_TEAM_OF_TEXAS` | TEAM OF TEXAS EBT Card. |
| `EBT_JPCHASE`| JPCHASE EBT network. | 
| `SVS`| Provides support to clients to process over gift card transactions. |
| `EXXON`| Exxon payment network. |
| `BASE_24/INTERAC`| Integrated e-payment processing engine that provides application software to acquire and authenticate, route, switch and authorize transactions, regardless of the channel in which they originate.  | 
| `CU24_FIDELITY` | Credit Union 24 payment network for Fidelity. | 
| `EBT_EFUNDS`| EFUNDS EBT. | 
| `AFFN_FIDELITY`| Provide U.S. military personnel (active, reserve, dependents and retired) with access to their funds through ATM and point-of-sale (POS) terminals at or near U.S. military bases worldwide. | 
| `EBT_NORTHRUP_GRUMMAN` | NORTHRUP GRUMMAN EBT.  | 
| `CU24_FISERV`| Credit Union 24 payment network. | 
| `AFFN_FISERV`| Provide U.S. military personnel (active, reserve, dependents and retired) with access to their funds through ATM and point-of-sale (POS) terminals at or near U.S. military bases worldwide. | 
| `STAR_EAST_FISERV`| Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel. | 
| `PULSE_FISERV`| Provide consumers anytime, anywhere access to funds – online, at ATMs and at point-of-sale (POS) locations nationwide. | 
| `NYCE_FISERV`| Interbank network connecting the ATMs of various financial institutions in the United States and Canada. | 
| `STAR_WEST_FISERV`| Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel for the West region. | 
| `STAR_NE_FISERV`| Full-service debit payments network that gives cardholders anytime, anywhere access to cash, purchases and payments options through any channel for the NE region. | 
| `MAESTRO_FISERVT` | MAESTRO FISERV. | 
| `INTERLINK_FISERV` | INTERLINK FISERV. | 
| `EBT_FISERV` | FISERV EBT payment network. | 
| `ACCEL_FISERV` | Payment newtwork allows account holders to access funds in a multitude of ways, make in-store and online purchases with ease, and send and receive money in real-time. | 
| `OPTION_FISERV` | Fiserv Network. | 
  
---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/information-lookup)
- [Accounts Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Charges Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Tokenization Request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)

---
