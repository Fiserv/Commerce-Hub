---
tags: [Currency Conversion, Global Currency]
---

# Multi-Currency Pricing

Multi-Currency Pricing (MCP) _(previously known as Global ePricing)_ is available for [online, digital, and mobile integrations](?path=docs/Getting-Started/Getting-Started-Online.md) and allows merchants to set static pricing in multiple currencies. MCP provides the most control for specific international markets and offers customers an _in country_ shopping experience. The merchant is entirely responsible for setting and maintaining the prices in the currencies they support.

[Payment requests](?path=docs/Resources/API-Documents/Payments/Payments.md) are submitted to Commerce Hub in the same manner as domestic activity, but the merchant must send the correct amount format and corresponding [currency code](?path=docs/Resources/Master-Data/Currency-Code.md) for these transactions. Merchant sets all pricing in foreign currency (for example, EUR for U.S. merchant) specific to geographical markets.

Merchant is funded in their local currency _(for US merchant, USD)_ based on a prevailing exchange rates. Commerce Hub supports Visa, Mastercard and American Express where available.

---

## Benefits

#### Merchant Benefits

- Support any currency enabled by Visa, Mastercard or American Express
- Reduce shopping cart abandonment and improve sales conversion at checkout thereby improving customer satisfaction and customer loyalty
- Funding is always provided in the merchant's local currency – regardless of the presentment currency. By being funded in only one currency the merchant doesn't need to have a bank account per currency for their international traffic
- Enables easy cross-border expansion into markets where the merchant may not be domiciled

#### Cardholder Benefits

- Shop and Pay in more than 145 global presentment currencies
- Receipt in the same amount and currency that appears on their cardholder statement
- Eliminates the foreign transaction fees charges by some issuers _(this depends on the cardholder agreement)_
- Make purchases in a familiar currency without having to perform manual calculations thereby enjoying a superior cross-border experience similar to doing business with a local merchant

---

## Country and Currency Coverage

CommerceHub currently supports authorizations for presentment in more than 145 Scheme supported currencies for MCP transactions. For MCP authorized transactions, CommerceHub supports settlement of authorized transactions in USD currency only for the US market.  For non-US markets, available settlement currencies are noted in our [Global Merchant Acquiring](?path=docs/Resources/Guides/Global-Merchant-Acquiring.md)

For certain currency conversions with respect to USD such as the Lebanese Pound (11 digits + 2 decimal points) or Somali Shilling (9 digits + 2 decimal points), there is a limit on amount value these are supported in downstream systems such as Nashville. Nashville specifications currently support a max of 12 digits. Most terminal or POS systems support 7 digits+3 decimals or 8 digits+2 decimals. Only merchants that have high ticket items will probably support 10 digits + 2 decimals.

| Currency | Alpha Code | Numeric Code | Minor Units | ISO Country Code | Country/Countries | Region | MCP |
|-------|--------|---------|----------|------|----------|---------|---------|
| Albanian Lek | ALL | 008  | 2  | 008  | Albania  | EMEA  | V/M/A* |
| Algerian Dinar  | DZD | 012  | 2 | 012 | Algeria  | EMEA  | V/M/A* |
| Argentinian Peso | ARS | 032 | 2 | 032 | Argentina | LATAM | V/M |
| Australian Dollar | AUD  | 036 | 2 | 036<br>162<br>166<br>334<br>520<br>296<br>574<br>798 | Australia<br>Christmas Island<br>Cocos (Keeling) Islands<br>Heard Island and McDonald Islands<br>Nauru<br>Kiribati<br>Norfolk Island<br>Tuvalu | APAC | V/M/A* |
| Bahamian Dollar  | BSD  | 044 | 2 | 044 | Bahamas | LATAM   | V/M/A*  |
| Bahraini Dinar | BHD | 048 | 3 | 048   | Bahrain  | EMEA    | V/M/A*  |
| Bangladeshi Taka | BDT | 050 | 2 | 050 | Bangladesh | APAC  | V/M/A*  |
| Armenian Dram  | AMD  | 051  | 2  | 051  | Armenia | EMEA   | V/M   |
| Barbados Dollar | BBD | 052  | 2  | 052  | Barbados | LATAM  | V/M/A*  |
| Bermudian Dollar  | BMD  | 060  | 2  | 060   | Bermuda  | LATAM | V/M/A*  |
| Bhutanese Ngultrum | BTN | 064 | 2 | 064 | Bhutan | APAC | V/M/A* |
| Boliviano  | BOB  | 068 | 2 | 068    | Bolivia | LATAM | V/M |
| Botswana Pula  | BWP | 072 | 2  | 072 | Botswana | EMEA | V/M/A* |
| Belize Dollar | BZD  | 084 | 2  | 084 | Belize | LATAM | V/M/A* |
| Solomon Islands Dollar | SBD | 090 | 2 | 090 | Solomon Islands  | APAC    | V/M/A*      |
| Brunei Dollar | BND | 096  | 2  | 096  | Brunei | APAC | V/M/A*  |
| Myanmar Kyat  | MMK | 104  | 2   | 104  | Myanmar | APAC | V/M |
| Burundi Franc | BIF   | 108 | 0  | 108 | Burundi| EMEA | V/M/A* |
| Cambodian Riel | KHR | 116 | 2 | 116 | Cambodia | APAC | V/M/A* |
| Canadian Dollar | CAD | 124 | 2 | 124 | Canada | NA      | V/M/A*      |
| Cape Verde Escudo | CVE | 132 | 2 | 132 | Cape Verde | EMEA | V/M/A* |
| Caymans Islands Dollar | KYD | 136 | 2 | 136 | Cayman Islands | LATAM | V/M/A* |
| Sri Lanka Rupee | LKR | 144 | 2 | 144 | Sri Lanka | APAC | V/M/A* |
| Chilean Peso | CLP | 152 | 0 | 152 | Chile | LATAM | V/M/A* |
| Chinese Yuan | CNY | 156 | 2 | 156 | China | APAC | V/M/A* |
| Colombian Peso | COP | 170 | 2 | 170 | Colombia | LATAM | V/M/A* |
| Comoros Franc | KMF | 174 | 0 | 174 | Comoros | EMEA | V/M/A* |
| Costa Rican Colon | CRC | 188 | 2 | 188 | Costa Rica | LATAM   | V/M/A*      |
| Croatian Kuna | HRK | 191 | 2 | 191 | Croatia | EMEA | V/M/A* |
| Czech Koruna | CZK | 203 | 2 | 203 | Czech Republic | EMEA    | V/M/A*      |
| Danish Krone | DKK | 208 | 2 | 208<br>234<br>304 | Denmark<br>Faroe Islands<br>Greenland | EMEA | V/M/A* |
| Dominican Peso | DOP | 214 | 2 | 214 | Dominican Republic | LATAM | V/M/A* |
| Ethiopian Birr | ETB | 230 | 2 | 230 | Ethiopia | EMEA    | V/M/A* |
| Eritrean Nafka | ERN | 232 | 2 | 232 | Eritrea | EMEA    | V/M         |
| Falkland Island Pound | FKP | 238 | 2 | 238 | Falkand Islands | LATAM | V/M |
| Fiji Dollar | FJD | 242 | 2 | 242 | Fiji | APAC | V/M/A* |
| Djiboutian Franc | DJF | 262 | 0 | 262 | Djibouti | EMEA | V/M/A* |
| Gambian Dalasi | GMD | 270 | 2 | 270 | Gambia | EMEA | V/M/A* |
| Gibraltar Pound | GIP | 292 | 2 | 292 | Gibraltar | EMEA | V/M/A* |
| Guatemalan Quetzal | GTQ | 320 | 2 | 320 | Guatemala | LATAM | V/M/A* |
| Guinean Franc | GNF | 324 | 0 | 324 | Guinea | EMEA   | V/M/A* |
| Guyanese Dollar | GYD | 328 | 2 | 328 | Guyana | LATAM  | V/M/A* |
| Haitian Gourde | HTG | 332 | 2 | 332 | Haiti | LATAM  | V/M/A* |
| Honduran Lempira | HNL | 340 | 2 | 340 | Honduras | LATAM  | V/M/A* |
| Hong Kong Dollar | HKD | 344 | 2 | 344 | Hong Kong | APAC   | V/M/A* |
| Hungarian Forint | HUF | 348 | 2 | 348 | Hungary | EMEA   | V/M/A* |
| Icelandic Krona | ISK | 352 | 0 | 352 | Iceland | EMEA   | V/M/A* |
| Indian Rupee | INR | 356 | 2 | 356 | India | APAC   | V/M/A* |
| Indonesian Rupiah | IDR | 360 | 2 | 360 | Indonesia | APAC   | V/M/A* |
| Israeli New Shekel | ILS | 376 | 2 | 376 | Israel | EMEA   | V/M/A* |
| Jamaican Dollar | JMD | 388 | 2 | 388 | Jamaica | LATAM  | V/M/A* |
| Japanese Yen | JPY | 392 | 0 | 392 | Japan | APAC   | V/M/A* |
| Kazakhstani Tenge | KZT | 398 | 2 | 398 | Kazakhstan | EMEA   | V/M/A* |
| Jordanian Dinar | JOD | 400 | 3 | 400 | Jordan | EMEA   | V/M/A* |
| Kenyan Shilling | KES | 404 | 2 | 404 | Kenya | EMEA   | V/M/A* |
| South Korean Won | KRW | 410 | 0 | 410 | South Korea | APAC   | V/M/A* |
| Kuwaiti Dinar | KWD | 414 | 3 | 414 | Kuwait | EMEA   | V/M/A* |
| Kyrgyzstani Som | KGS | 417 | 2 | 417 | Kyrgyzstan | EMEA   | V/M/A* |
| Lao Kip | LAK | 418 | 2 | 418 | Laos | APAC | V/M |
| Lebanese Pound | LBP | 422 | 2 | 422 | Lebanon | EMEA   | V/M/A* |
| Lesotho Loti | LSL | 426 | 2 | 426 | Lesotho | EMEA   | V/M/A* |
| Liberian Dollar | LRD | 430 | 2 | 430 | Liberia | EMEA   | V/M/A* |
| Macanese Pataca | MOP | 446 | 2 | 446 | Macao | APAC   | V/M/A* |
| Malawian Kwacha | MWK | 454 | 2 | 454 | Malawi | EMEA   | V/M/A* |
| Malaysian Ringgit | MYR | 458 | 2 | 458 | Malaysia | APAC   | V/M/A* |
| Maldivian Rufiyaa | MVR | 462 | 2 | 462 | Maldives | APAC   | V/M/A* |
| Mauritian Rupee | MUR | 480 | 2 | 480 | Mauritius | EMEA   | V/M/A* |
| Mexican Peso | MXN | 484 | 2 | 484 | Mexico | LATAM  | V/M/A* |
| Mongolian Togrog | MNT | 496 | 2 | 496 | Mongolia | APAC   | V/M/A* |
| Moldovan Leu | MDL | 498 | 2 | 498 | Moldova | EMEA   | V/M/A* |
| Moroccan Dirham | MAD | 504 | 2 | 504 | Morocco | EMEA   | V/M/A* |
| Omani Rial | OMR | 512 | 3 | 512 | Oman | EMEA   | V/M/A* |
| Namibian Dollar | NAD  | 516 | 2 | 516 | Namibia | EMEA   | V/M/A*      |
| Nepalese Rupee | NPR  | 524 | 2 | 524 | Nepal | APAC   | V/M/A*      |
| Netherlands Antilles Guilder | ANG | 532 | 2 | 531<br>534 | Curaçao<br>Sint Maarten | LATAM | V/M/A* |
| Aruban Florin | AWG  | 533 | 2 | 533 | Aruba | LATAM  | V/M/A* |
| Vanuatu Vatu | VUV  | 548 | 0 | 548 | Vanuatu | APAC   | V/M/A* |
| New Zealand Dollar | NZD  | 554 | 2 | 554<br>184<br>570<br>612<br>772 | New Zealand<br>Cook Islands<br>Niue<br>Pitcairn Islands<br>Tokelau | APAC | V/M/A* |
| Nicaraguan Cordoba | NIO  | 558 | 2 | 558 | Nicaragua | LATAM  | V/M/A* |
| Nigerian Naira | NGN  | 566 | 2 | 566 | Nigeria | EMEA | V/M/A* |
| Norwegian Krone | NOK  | 578 | 2 | 578<br>744<br>074 | Norway<br>Svalbard and Jan Mayen<br>Bouvet Island | EMEA | V/M/A* |
| Pakistani Rupee | PKR  | 586 | 2 | 586 | Pakistan | APAC   | V/M/A* |
| Panamanian Balboa | PAB  | 590 | 2 | 591 | Panama | LATAM  | V/M |
| Papua New Guinean Kina | PGK  | 598 | 2 | 598 | Papua New Guinea    | APAC   | V/M/A*      |
| Paraguayan Guarani | PYG  | 600 | 0 | 600 | Paraguay | LATAM  | V/M/A* |
| Peruvian Sol | PEN  | 604 | 2 | 604 | Peru | LATAM  | V/M/A* |
| Philippine Peso | PHP  | 608 | 2 | 608 | Philippines | APAC   | V/M/A* |
| Qatari Rial | QAR  | 634 | 2 | 634 | Qatar | EMEA   | V/M/A* |
| Rwanda Franc | RWF  | 646 | 0 | 646 | Rwanda | EMEA | V/M/A* |
| St. Helena Pound | SHP  | 654 | 2 | 654 | St. Helena, Ascension Island | EMEA | V/M         |
| Saudi Riyal | SAR  | 682 | 2 | 682 | Saudi Arabia | EMEA   | V/M/A* |
| Seychelles Rupee | SCR  | 690 | 2 | 690 | Seychelles | EMEA   | V/M/A* |
| Sierra Leonean Leone | SLL  | 694 | 2 | 694 | Sierra Leone | EMEA   | V/M/A* |
| Singapore Dollar | SGD  | 702 | 2 | 702 | Singapore | APAC   | V/M/A* |
| Vietnamese Dong | VND  | 704 | 0 | 704 | Vietnam | APAC   | V/M/A* |
| Somali Shilling | SOS  | 706 | 2 | 706 | Somalia | EMEA   | V/M/A* |
| South African Rand | ZAR  | 710 | 2 | 710 | South Africa | EMEA   | V/M/A* |
| South Sudanese Pound | SSP  | 728 | 2 | 728 | South Sudan | EMEA   | V/M |
| Swazi Lilangeni | SZL  | 748 | 2 | 748 | Swaziland | EMEA   | V/M/A* |
| Swedish Krona | SEK  | 752 | 2 | 752 | Sweden | EMEA   | V/M/A* |
| Swiss Franc | CHF  | 756 | 2 | 756 | Switzerland, Liechtenstein | EMEA | V/M/A* |
| Thai Baht | THB  | 764 | 2 | 764 | Thailand | APAC | V/M/A* |
| Tongan Pa'anga | TOP  | 776 | 2 | 776 | Tonga | APAC | V/M/A* |
| Trinidad and Tobago Dollar| TTD  | 780 | 2 | 780 | Trinidad and Tobago | LATAM  | V/M/A*      |
| United Arab Emirates Dirham | AED | 784 | 2 | 784 | United Arab Emirates | EMEA  | V/M/A*      |
| Tunisian Dinar | TND  | 788 | 3 | 788 | Tunisia | EMEA | V/M/A* |
| Ugandan Shilling | UGX  | 800 | 0 | 800 | Uganda | EMEA   | V/M/A* |
| Macedonian Denar | MKD  | 807 | 2 | 807 | Macedonia | EMEA   | V/M/A* |
| Egyptian Pound | EGP  | 818 | 2 | 818 | Egypt | EMEA   | V/M/A*      |
| Pound Sterling | GBP  | 826 | 2 | 826 | United Kingdom<br>Isle of Man<br>Jersey<br>Guernsey | EMEA | V/M/A* |
| Tanzanian Shilling | TZS  | 834 | 2 | 834 | Tanzania | EMEA | V/M/A*  |
| United States Dollar | USD  | 840 | 2 | 840<br>535<br>016<br>092<br>218<br>316<br>222<br>-<br> 584<br>580<br>585<br>630<br>850<br>796 | United States<br>Bonaire<br>American Samoa<br>British Virgin Islands<br>Ecuador<br>Guam<br>El Salvador<br>Micronesia<br>Marshall Islands<br>Northern Mariana Islands<br> Palau<br>Puerto Rico<br>US Virgin Islands<br>Turks and Caicos | NA, APAC, LATAM      | V/M/A*  |
| Uruguayan Peso | UYU  | 858 | 2 | 858 | Uruguay | LATAM | V/M/A*  |
| Uzbekistan Som | UZS  | 860 | 2 | 860 | Uzbekistan | EMEA | V/M/A*  |
| Samoan Tala | WST  | 882 | 2 | 882 | Samoa | APAC | V/M/A*  |
| Yemeni Rial | YER  | 886 | 2 | 887 | Yemen | EMEA | V/M/A*  |
| New Taiwan Dollar | TWD  | 901 | 2 | 158 | Taiwan | APAC | V/M/A*  |
| Venezuela Bolivar Soberano | VES  | 928 | 2 | 862 | Venezuela | LATAM | V/M |
| Mauritanian Ouguiya | MRU  | 929 | 2 | 478 | Mauritania | EMEA | V/M |
| São Tomé & Príncipe Dobra | STN  | 930 | 2 | 678 | São Tomé & Príncipe | EMEA | V/M/A*  |
| Turkmenistani Manat | TMT  | 934 | 2 | 795 | Turkmenistan | EMEA                 | V/M/A*  |
| Ghanaian Cedi | GHS  | 936 | 2 | 288 | Ghana | EMEA | V/M/A*  |
| Serbian Dinar | RSD  | 941 | 2 | 688 | Serbia | EMEA | V/M/A*  |
| Mozambican Metical | MZN  | 943 | 2 | 508 | Mozambique | EMEA | V/M/A*  |
| Azerbaijani Manat | AZN  | 944 | 2 | 031 | Azerbaijan | EMEA | V/M/A*  |
| Romanian Leu | RON  | 946 | 2 | 642 | Romania | EMEA | V/M/A*  |
| Turkish Lira | TRY  | 949 | 2 | 792 | Turkey | EMEA | V/M/A*  |
| CFA Franc BEAC | XAF  | 950 | 0 | 120<br>140<br>178<br>148<br>226<br>266 | Cameroon<br>Central African Republic<br>Republic of the Congo<br>Chad<br>Equatorial Guinea<br>Gabon | EMEA | V/M/A* |
| East Caribbean Dollar | XCD  | 951 | 2 | 660<br>028<br>212<br>308<br>500<br>659<br>662<br>670 | Anguilla<br>Antigua and Barbuda<br>Dominica<br>Grenada<br>Montserrat<br>St. Kitts and Nevis<br>St. Lucia<br>St. Vincent and the Grenadines | LATAM | V/M/A*|
| CFA Franc BCEAO | XOF  | 952 | 0 | 204<br>854<br>384<br>624<br>466<br>562<br>768<br>686 | Benin<br>Burkina Faso<br>Cote d’Ivoire<br>Guinea-Bissau<br>Mali<br>Niger<br>Togo<br>Senegal | EMEA | V/M/A*   |
| CFP Franc | XPF | 953 | 0 | 258<br>540<br>876 | French Polynesia<br>New Caledonia<br>Wallis and Futuna | APAC | V/ |
| Zambian Kwacha | ZMW  | 967 | 2 | 894 | Zambia | EMEA | V/M/A*   |
| Surinamese Dollar | SRD  | 968 | 2 | 740 | Suriname | LATAM | V/M      |
| Malagasy Ariary | MGA  | 969 | 2 | 450 | Madagascar | EMEA | V/M/A* |
| Afghan Afghani | AFN  | 971 | 2 | 004 | Afghanistan | EMEA | V/M |
| Tajikistani Somoni | TJS  | 972 | 2 | 762 | Tajikistan | EMEA | V/M/A* |
| Angolan Kwanza | AOA  | 973 | 2 | 024 | Angola | EMEA | V/M |
| Bulgarian Lev | BGN  | 975 | 2 | 100 | Bulgaria | EMEA | V/M/A* |
| Convertible Mark | BAM  | 977 | 2 | 070 | Bosnia & Herzegovina   | EMEA | V/M/A* |
| Euro | EUR  | 978 | 2 | 020<br>-<br>040<br>056<br>196<br>233<br>246<br>250<br>260<br>280<br>300<br>312<br>254<br>372<br>380<br>900<br>428<br>440<br>442<br>470<br>474<br>-<br>492<br>499<br>528<br>620<br>674<br>703<br>705<br>724<br>534<br>666<br>336 | Andorra<br>Aland Islands<br>Austria<br>Belgium<br>Cyprus<br>EstoniaFinland<br>France<br>French Southern Territories<br>Germany<br>Greece<br>Guadeloupe<br>French Guiana<br>Ireland<br>Italy<br>Kosovo<br>Latvia<br>Lithuania<br>Luxembourg<br>Malta<br>Martinique<br>Mayotte<br>Monaco<br>Montenegro<br>Netherlands<br>Portugal<br>San Marino<br>Slovakia<br>Slovenia<br>Spain<br>St. Martin<br>St. Pierre<br>Vatican City | EMEA, LATAM, NA | V/M/A* |
| Ukrainian Hryvnia | UAH  | 980 | 2 | 804 | Ukraine | EMEA | V/M/A* |
| Georgian Lari | GEL | 981 | 2 | 268 | Georgia | EMEA | V/M/A* |
| Polish Zloty | PLN  | 985 | 2 | 616 | Poland | EMEA | V/M/A* |
| Brazilian Real | BRL  | 986 | 2 | 076 | Brazil | LATAM | V/M |

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
- [Global Merchant Acquiring](?path=docs/Resources/Guides/Global-Merchant-Acquiring.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)

---
