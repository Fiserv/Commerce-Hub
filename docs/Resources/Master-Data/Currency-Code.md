---
tags: [API Reference, Foreign Currency, Master Data. Global Currency Solutions, International]
---


# Supported Currencies

The `currency` variable in the `amount` [object](?path=docs/Resources/Master-Data/Amount-Components.md) determines what currency the transaction well be submitted in.

Commerce Hub supports the use of foreign currencies with [Global Acquiring _(GA)_](?path=docs/Resources/Guides/Global-Acquiring.md),  [Multi-Currency Pricing _(MCP)_](?path=docs/Resources/Guides/Global-Currency/Multi-Currency.md), and [Dynamic Currency Conversion _(DCC)_](?path=docs/Resources/Guides/Global-Currency/Currency-Conversion.md) transactions.

<!-- theme: info -->
> Commerce Hub uses a decimal for separating precisions. When submitting the `total` ensure the correct precision usage; e.g. 10 GBP is submitted as 10.00, 10 JPY is submitted as 10, and 10 JOD is submitted as 10.000.

---

## Currency Codes

The table below contains all valid values of currency name, code, number, region precision values, and supported card brands per integration method. Commerce Hub uses the 3 character alpha code when submitting [transactions](?path=docs/Resources/API-Documents/Payments/Payments.md).

<!-- theme: info -->
> For a list of countries that are supported for each currency, see the [ISO 4217 Currency Codes XLS or XML forms](https://www.iso.org/iso-4217-currency-codes.html).

| Currency Name | CH Alpha Code | ISO Number | Precisions | Region | MCP | DCC |
| ------------- | :-----------: | :---------:| :-----: | :---: | :---: | :---: |
| Afghan Afghani | AFN | 971 | 2 | EMEA | V/M | V/M |
| Albanian Lek | ALL | 008 | 2 | EMEA | V/M/A | V/M |
| Algerian Dinar | DZD | 012 | 2 | EMEA | V/M/A | V/M |
| Angolan Kwanza | AOA | 973 | 2 | EMEA | V/M | V/M |
| Argentine Peso | ARS | 032 | 2 | LATAM | V/M | V/M |
| Armenian Dram | AMD | 051 | 2 | EMEA | V/M | V/M |
| Aruban Guilder | AWG | 533 | 2 | LATAM | V/M/A | V/M |
| Australian Dollar | AUD | 036 | 2 | APAC | V/M/A | V/M |
| Azerbaijan Manat | AZN | 944 | 2 | EMEA | V/M/A | V/M |
| Bahamian Dollar | BSD | 044 | 2 | LATAM | V/M/A | V/M |
| Bahrain Dinar | BHD | 048 | 3 | EMEA | V/M/A | |
| Bangladeshi Taka | BDT | 050 | 2 | APAC | V/M/A | V/M |
| Barbados Dollar | BBD | 052 | 2 | LATAM | V/M/A | V/M |
| Belizean Dollar | BZD | 084 | 2 | LATAM | V/M/A | V/M |
| Bermudian Dollar | BMD | 060 | 2 | | | V/M |
| Bhutanese Ngultrum | BTN | 064 | 2 | APAC | V/M/A | V/M |
| Bolivian Boliviano | BOB | 068 | 2 | LATAM | V/M | V/M |
| Bolivian Soberano | VES | 928 | 2 | | | V/M |
| Bosnian and Herzegovina Convertible Marka | BAM | 977 | 2 | EMEA | V/M/A | V/M |
| Botswana Pula | BWP | 072 | 2 | EMEA | V/M/A | V/M |
| Brazilian Real | BRL | 986 | 2 | LATAM | V/M | V/M |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **MCP** | **DCC** |
| Bruneian Dollar | BND | 096 | 2 | APAC | V/M/A | V/M |
| Bulgarian Lev | BGN | 975 | 2 | EMEA | V/M/A | V/M |
| Burundian Franc | BIF | 108 | 2 | EMEA | V/M/A | V/M |
| Cambodian Riel | KHR | 116 | 2 | APAC | V/M/A | V/M |
| Canadian Dollar | CAD | 124 | 2 | NA | V/M/A | V/M |
| Cape Verdean Escudo | CVE | 132 | 2 | EMEA | V/M/A | V/M |
| Caymanian Dollar | KYD | 136 | 2 | LATAM | V/M/A | V/M |
| Central African CFA Franc |  XAF | 950 | 2 | EMEA | V/M/A | V/M |
| Chilean Peso | CLP | 152 | 0 | LATAM | V/M/A | V/M |
| China Yuan Renminbi | CNY | 156 | 2 | APAC | V/M/A | |
| Colombian Peso | COP | 170 | 2 | LATAM | V/M/A | V/M |
| Comoros Franc | KMF | 174 | 2 | EMEA | V/M/A | V/M |
| Costa Rican Colon | CRC | 188 | 2 | LATAM | V/M/A | V/M |
| Croatian Kuna | HRK | 191 | 2 | EMEA | V/M/A | V/M |
| Czech Krona | CZK | 203 | 2 | EMEA | V/M/A | V/M |
| Danish Krone | DKK | 208 | 2 | | | V/M |
| Djiboutian Franc | DJF | 262 | 0 | EMEA | V/M/A | V/M |
| Dominican Peso | DOP | 214 | 2 | LATAM | V/M/A | V/M |
| East Caribbean Dollar | XCD | 951 | 2 | LATAM | V/M/A | V/M |
| Egyptian Pound | EGP | 818 | 2 | EMEA | V/M/A | V/M |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **MCP** | **DCC** |
| Eritrean Nafka | ERN | 232 | 2 | EMEA | V/M | V/M |
| Ethiopian Birr | ETB | 230 | 2 | EMEA | V/M/A | V/M |
| Euro | EUR | 978 | 2 | EMEA, LATAM, NA | V/M/A | V/M |
| Falkland Island Pound | FKP | 238 | 2 | LATAM | V/M | V/M |
| Fijian Dollar | FJD | 242 | 2 | APAC | V/M/A | V/M |
| French Pacific Franc | XPF | 953 | 0 | APAC | V/M/A | V/M |
| Gambian Dalasi | GMD | 270 | 2 | EMEA | V/M/A | V/M |
| Georgian Lari | GEL | 981 | 2 | EMEA | V/M/A | V/M |
| Ghanaian Cedi | GHS | 288 | 2 | EMEA | V/M/A | V/M |
| Gibraltar Pound | GIP | 292 | 2 | EMEA | V/M/A | V/M |
| Guatemalan Quetzal | GTQ | 320 | 2 | LATAM | V/M/A | V/M |
| Guinean Franc | GNF | 324 | 2 | EMEA | V/M/A | V/M |
| Guyanese Dollar | GYD | 328 | 2 | LATAM | V/M/A | V/M |
| Haitian Gourde | HTG | 332 | 2 | LATAM | V/M/A | V/M |
| Honduran Lempira | HNL | 340 | 2 | LATAM | V/M/A | V/M |
| Hongkong Dollar | HKD | 344 | 2 | APAC | V/M/A | V/M |
| Hungarian Forint | HUF | 348 | 2 | EMEA | V/M/A | V/M |
| Iceland Krona | ISK | 352 | 0 | EMEA | V/M/A | V/M |
| India Rupee | INR | 356 | 2 | APAC | V/M/A | V/M |
| Indonesian Rupiah | IDR | 360 | 2 | APAC | V/M/A | V/M |
| Israel Shekel | ILS | 376 | 2 | EMEA | V/M/A | V/M |
| Jamaican Dollar | JMD | 388 | 2 | LATAM | V/M/A | V/M |
| Japanese Yen | JPY | 392 | 0 | APAC | V/M/A | V/M |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **MCP** | **DCC** |
| Jordanian Dinar | JOD | 400 | 3 | EMEA | V/M/A | |
| Kazakhstani Tenge | KZT | 398 | 2 | EMEA | V/M/A | V/M |
| Kenyan Shilling | KES | 404 | 2 | EMEA | V/M/A | V/M |
| Kyrgyzstani Som | KGS | 417 | 2 | EMEA | V/M/A | V/M |
| Kuwait Dinar | KWD | 414 | 3 | EMEA | V/M/A | |
| Laotian Kip | LAK | 418 | 2 | APAC | V/M | V/M |
| Lebanese Pound | LBP | 422 | 2 | EMEA | V/M/A | V/M |
| Lesotho Loti | LSL | 426 | 2 | EMEA | V/M/A | V/M |
| Libyan Dinar | LYD | 434 | 3 | | | |
| Macanese Pataca | MOP | 446 | 2 | APAC | V/M/A | V/M |
| Macedonian Denar | MKD | 807 | 2 | EMEA | V/M/A | V/M |
| Malagasy Ariary | MGA | 969 | 2 | EMEA | V/M/A | V/M |
| Malawian Kwacha | MWK | 454 | 2 | EMEA | V/M/A | V/M |
| Malaysian Ringgit | MYR | 458 | 2 | APAC | V/M/A | V/M |
| Maldivian Rufiyaa | MVR | 462 | 2 | APAC | V/M/A | V/M |
| Mauritanian Ouguiya | MRU | 929 | 2 | EMEA | V/M | V/M |
| Mauritian Rupee | MUR | 480 | 2 | EMEA | V/M/A | V/M |
| Mexico Peso | MXN | 484 | 2 | LATAM | V/M/A | V/M |
| Moldovan Leu | MDL | 498 | 2 | EMEA | V/M/A | V/M |
| Mongolian Tughrik | MNT | 496 | 2 | APAC | V/M/A | V/M |
| Moroccan Dirham | MAD | 504 | 2 | EMEA | V/M/A | V/M |
| Mozambican Metical | MZN | 943 | 2 | EMEA | V/M/A | V/M |
| Namibian Dollar | NAD | 516 | 2 | EMEA | V/M/A | V/M |
| Nepalese Rupee | NPR | 524 | 2 | APAC | V/M/A | V/M |
| Netherlands Antilles Guilder | ANG | 532 | 2 | LATAM | V/M/A | V/M |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **MCP** | **DCC** |
| New Zealand Dollar | NZD | 554 | 2 | APAC | V/M/A | V/M |
| Nicaraguan Cordoba | NIO | 558 | 2 | LATAM | V/M/A | V/M |
| Nigerian Naira | NGN | 566 | 2 | EMEA | V/M/A | V/M |
| Ni-Vanuatu Vatu | VUV | 548 | 0 | APAC | V/M/A | V/M |
| Norwegian  Krona | NOK | 578 | 2 | EMEA | V/M/A | V/M |
| Omani Rial | OMR | 512 | 3 | EMEA | V/M/A | |
| Pakistani Rupee | PKR | 586 | 2 | APAC | V/M/A | V/M |
| Panamanian Balboa | PAB | 590 | 2 | LATAM | V/M | V/M |
| Papua New Guinean Kina | PGK | 598 | 2 | APAC | V/M/A | V/M |
| Paraguayan Guarani | PYG | 600 | 0 | LATAM | V/M/A | V/M |
| Peruvian Sol | PEN | 604 | 2 | LATAM | V/M/A | V/M |
| Philippine Peso | PHP | 608 | 2 | APAC | V/M/A | V/M |
| Polish Zloty  | PLN | 985 | 2 | EMEA | V/M/A | V/M |
| Pound Sterling | GBP | 826 | 2 | EMEA | V/M/A | V/M |
| Qatari Riyal | QAR | 634 | 2 | EMEA | V/M/A | V/M |
| Romania Leu | RON | 946 | 2 | EMEA | V/M/A | V/M |
| Rwandan Franc | RWF | 646 | 0 | EMEA | V/M/A | V/M |
| Saint Helenian Pound | SHP | 654 | 2 | EMEA | V/M | V/M |
| Salvadoran Colon | SVC | 222 | 2 | | | |
| Samoan Tala | WST | 882 | 2 | APAC | V/M/A | V/M |
| São Tomé and Príncipe Dobra | STN | 930 | 2 | EMEA | V/M/A | V/M |
| Saudi Riyal | SAR | 682 | 2 | EMEA | V/M/A | V/M |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **MCP** | **DCC** |
| Serbian Dinar | RSD | 941 | 2 | EMEA | V/M/A | V/M |
| Seychellois Rupee | SCR | 690 | 2 | EMEA | V/M/A | V/M |
| Sierra Leonean Leone | SLL | 694 | 2 | EMEA | V/M/A | V/M |
| Singapore Dollar | SGD | 702 | 2 | APAC | V/M/A | V/M |
| Solomon Islander Dollar | SBD | 090 | 2 | APAC | V/M/A | V/M |
| Somali Shilling | SOS | 706 | 2 | EMEA | V/M/A | V/M |
| South African Rand | ZAR | 710 | 2 | EMEA | V/M/A | V/M |
| South Korea Won | KRW | 410 | 0 | APAC | V/M/A | V/M |
| South Sudanese Pound | SSP | 728 | 2 | EMEA | V/M | V/M |
| Sri Lankan Rupee | LKR | 144 | 2 | APAC | V/M/A | V/M |
| Surinamese Dollar | SRD | 968 | 2 | LATAM | V/M | V/M |
| Swazi Lilangeni | SZL  | 748 | 2 | EMEA | V/M/A | V/M |
| Swedish Krona | SEK | 752 | 2 | EMEA | V/M/A | V/M |
| Swiss Franc | CHF | 756 | 2 | EMEA | V/M/A | V/M |
| Taiwan New Dollar | TWD | 901 | 2 | APAC | V/M/A | V/M |
| Tajikistani Somoni | TJS | 972 | 2 | EMEA | V/M/A | V/M |
| Tanzanian Shilling | TZS | 834 | 2 | EMEA | V/M/A | V/M |
| Thai Baht | THB | 764 | 2 | APAC | V/M/A | V/M |
| Tongan Pa'anga | TOP | 776 | 2 | APAC | V/M/A | V/M |
| Trinidad and Tobago Dollar | TTD | 780 | 2 | LATAM | V/M/A | V/M |
| Tunisian Dinar | TND | 788 | 3 | EMEA | V/M/A | |
| Turkish Lira | TRY | 949 | 2 | EMEA | V/M/A | V/M |
| Turkmenistani Manat | TMT | 934 | 2 | EMEA | V/M/A | V/M |
| Ugandan Shilling | UGX | 800 | 0 | EMEA | V/M/A | V/M |
| Ukrainian Hryvnia | UAH | 980 | 2 | EMEA | V/M/A | V/M |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **MCP** | **DCC** |
| United Arab Emirates Dirham | AED | 784 | 2 | EMEA | V/M/A | V/M |
| United States Dollar | USD | 840 | 2 | NA, APAC, LATAM | V/M/A | V/M |
| Uruguayan Peso | UYU | 858 | 2 | LATAM | V/M/A | V/M |
| Uzbekistani Som | UZS | 860 | 2 | EMEA | V/M/A | V/M |
| Venezuelan Bolívar Soberano | VEF | 862 | 2 | LATAM | V/M | |
| Vietnamese Dong | VND | 704 | 0 | APAC | V/M/A | V/M |
| West African CFA Franc | XOF | 952 | 0 | EMEA | V/M/A | V/M |
| Yemeni Rial | YER | 886 | 2 | EMEA | V/M/A | V/M |
| Zambian Kwacha | ZMW | 894 | 2 | EMEA | V/M/A | V/M |

---

### Unsupported Currencies

Commerce Hub does not support the following currencies which are prohibited by the [Office of Foreign Assets Control _(OFAC)_](?path=https://ofac.treasury.gov/sanctions-programs-and-country-information).

<!-- theme: danger -->
> Fiserv has taken the stance as a company to cease and desist all dealings with Russia as a country, therefore Commerce Hub cannot support RUB as a currency for any services.

| Currency Name | CH Alpha Code | ISO Number | Precisions | Region |
| ------------- | :-----------: | :---------:| :-----: | :-----: |
| Belarusian Ruble | BYN | 933 | 2 | |
| Cuban Peso | CUP | 192 | 2 | |
| Congolese Franc | CDF | 976 | 2 | |
| Iranian Rial | IRR | 364 | 2 | |
| Iraqi Dinar | IQD | 368 | 3 | |
| Liberian Dollar | LRD | 430 | 2 | EMEA |
| Myanmar Kyat | MMK | 104 | 2 | APAC |
| North Korean Won | KPW | 408 | 2 | |
| Russia Ruble | RUB | 643 | 2 | |
| Sudanese Pound | SDG | 938 | 2 | |
| Syrian Pound | SYP | 760 | 2 | |
| Zimbabwean Dollar | ZWL | 932 | 2 | |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Amount](?path=docs/Resources/Master-Data/Amount-Components.md)
- [Global Currency Solutions](?path=docs/Resources/Guides/Global-Currency/Global-Currency-Solutions.md)
- [Global Merchant Acquiring](?path=docs/Resources/Guides/Global-Merchant-Acquiring.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)

---
