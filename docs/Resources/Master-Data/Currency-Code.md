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

| Currency Name | CH Alpha Code | ISO Number | Precisions | Region | GA | MCP | DCC |
| ------------- | :-----------: | :---------:| :-----: | :---: | :---: | :---: | :---: |
| Afghan Afghani | AFN | 971 | 2 | EMEA | | V/M | |
| Albanian Lek | ALL | 008 | 2 | EMEA | | V/M/A | |
| Algerian Dinar | DZD | 012 | 2 | EMEA | | V/M/A | |
| Angolan Kwanza | AOA | 973 | 2 | EMEA | | V/M | |
| Argentine Peso | ARS | 032 | 2 | LATAM | | V/M | |
| Armenian Dram | AMD | 051 | 2 | EMEA | | V/M | |
| Aruban Guilder | AWG | 533 | 2 | LATAM | | V/M/A | |
| Australian Dollar | AUD | 036 | 2 | APAC | | V/M/A | |
| Azerbaijan Manat | AZN | 944 | 2 | EMEA | | V/M/A | |
| Bahamian Dollar | BSD | 044 | 2 | LATAM | | V/M/A | |
| Bahrain Dinar | BHD | 048 | 3 | EMEA | | V/M/A | |
| Bangladeshi Taka | BDT | 050 | 2 | APAC | | V/M/A | |
| Barbados Dollar | BBD | 052 | 2 | LATAM | | V/M/A | |
| Belizean Dollar | BZD | 084 | 2 | LATAM | | V/M/A | |
| Bermudian Dollar | BMD | 060 | 2 | | | | |
| Bhutanese Ngultrum | BTN | 064 | 2 | APAC | | V/M/A | |
| Bolivian Boliviano | BOB | 068 | 2 | LATAM | | V/M | |
| Bolivian Soberano | VES | 928 | 2 | | | | |
| Bosnian and Herzegovina Convertible Marka | BAM | 977 | 2 | EMEA | | V/M/A | |
| Botswana Pula | BWP | 072 | 2 | EMEA | | V/M/A | |
| Brazilian Real | BRL | 986 | 2 | LATAM | | V/M | |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **GA** | **MCP** | **DCC** |
| Bruneian Dollar | BND | 096 | 2 | APAC | | V/M/A | |
| Bulgarian Lev | BGN | 975 | 2 | EMEA | | V/M/A | |
| Burundian Franc | BIF | 108 | 2 | EMEA | | V/M/A | |
| Cambodian Riel | KHR | 116 | 2 | APAC | | V/M/A | |
| Canadian Dollar | CAD | 124 | 2 | NA | | V/M/A | |
| Cape Verdean Escudo | CVE | 132 | 2 | EMEA | | V/M/A | |
| Caymanian Dollar | KYD | 136 | 2 |LATAM | | V/M/A | |
| Central African CFA Franc |  XAF | 950 | 2 | EMEA | | V/M/A | |
| Chilean Peso | CLP | 152 | 0 | LATAM | | V/M/A | |
| China Yuan Renminbi | CNY | 156 | 2 | APAC | | V/M/A | |
| Colombian Peso | COP | 170 | 2 | LATAM | | V/M/A | |
| Comoros Franc | KMF | 174 | 2 | EMEA | | V/M/A | |
| Costa Rican Colon | CRC | 188 | 2 | LATAM | | V/M/A | |
| Croatian Kuna | HRK | 191 | 2 | EMEA | | V/M/A | |
| Czech Krona | CZK | 203 | 2 | EMEA | | V/M/A | |
| Danish Krone | DKK | 208 | 2 | | | | |
| Djiboutian Franc | DJF | 262 | 0 | EMEA | | V/M/A | |
| Dominican Peso | DOP | 214 | 2 | LATAM | | V/M/A | |
| East Caribbean Dollar | XCD | 951 | 2 | LATAM | | V/M/A | |
| Egyptian Pound | EGP | 818 | 2 | EMEA | | V/M/A | |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **GA** | **MCP** | **DCC** |
| Eritrean Nafka | ERN | 232 | 2 | EMEA | | V/M | |
| Ethiopian Birr | ETB | 230 | 2 | EMEA | | V/M/A | |
| Euro | EUR | 978 | 2 | EMEA, LATAM, NA | | V/M/A | |
| Falkland Island Pound | FKP | 238 | 2 | LATAM | | V/M | |
| Fijian Dollar | FJD | 242 | 2 | APAC | | V/M/A | |
| French Pacific Franc | XPF | 953 | 0 | APAC | | V/M/A | |
| Gambian Dalasi | GMD | 270 | 2 | EMEA | | V/M/A | |
| Georgian Lari | GEL | 981 | 2 | EMEA | | V/M/A | |
| Ghanaian Cedi | GHS | 288 | 2 | EMEA | | V/M/A | |
| Gibraltar Pound | GIP | 292 | 2 | EMEA | | V/M/A | |
| Guatemalan Quetzal | GTQ | 320 | 2 | LATAM | | V/M/A | |
| Guinean Franc | GNF | 324 | 2 | EMEA | | V/M/A | |
| Guyanese Dollar | GYD | 328 | 2 | LATAM | | V/M/A | |
| Haitian Gourde | HTG | 332 | 2 | LATAM | | V/M/A | |
| Honduran Lempira | HNL | 340 | 2 | LATAM | | V/M/A | |
| Hongkong Dollar | HKD | 344 | 2 | APAC | | V/M/A | |
| Hungarian Forint | HUF | 348 | 2 | EMEA | | V/M/A | |
| Iceland Krona | ISK | 352 | 0 | EMEA | | V/M/A | |
| India Rupee | INR | 356 | 2 | APAC | | V/M/A | |
| Indonesian Rupiah | IDR | 360 | 2 | APAC | | V/M/A | |
| Israel Shekel | ILS | 376 | 2 | EMEA | | V/M/A | |
| Jamaican Dollar | JMD | 388 | 2 | LATAM | | V/M/A | |
| Japanese Yen | JPY | 392 | 0 | APAC | | V/M/A | |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **GA** | **MCP** | **DCC** |
| Jordanian Dinar | JOD | 400 | 3 | EMEA | | V/M/A | |
| Kazakhstani Tenge | KZT | 398 | 2 | EMEA | | V/M/A | |
| Kenyan Shilling | KES | 404 | 2 | EMEA | | V/M/A | |
| Kyrgyzstani Som | KGS | 417 | 2 | EMEA | | V/M/A | |
| Kuwait Dinar | KWD | 414 | 3 | EMEA | | V/M/A | |
| Laotian Kip | LAK | 418 | 2 | APAC | | V/M | |
| Lebanese Pound | LBP | 422 | 2 | EMEA | | V/M/A | |
| Lesotho Loti | LSL | 426 | 2 | EMEA | | V/M/A | |
| Libyan Dinar | LYD | 434 | 3 | | | | |
| Macanese Pataca | MOP | 446 | 2 | APAC | | V/M/A | |
| Macedonian Denar | MKD | 807 | 2 | EMEA | | V/M/A | |
| Malagasy Ariary | MGA | 969 | 2 | EMEA | | V/M/A | |
| Malawian Kwacha | MWK | 454 | 2 | EMEA | | V/M/A | |
| Malaysian Ringgit | MYR | 458 | 2 | APAC | | V/M/A | |
| Maldivian Rufiyaa | MVR | 462 | 2 | APAC | | V/M/A | |
| Mauritanian Ouguiya | MRU | 929 | 2 | EMEA | | V/M | |
| Mauritian Rupee | MUR | 480 | 2 | EMEA | | V/M/A | |
| Mexico Peso | MXN | 484 | 2 | LATAM | | V/M/A | |
| Moldovan Leu | MDL | 498 | 2 | EMEA | | V/M/A | |
| Mongolian Tughrik | MNT | 496 | 2 | APAC | | V/M/A | |
| Moroccan Dirham | MAD | 504 | 2 | EMEA | | V/M/A | |
| Mozambican Metical | MZN | 943 | 2 | EMEA | | V/M/A | |
| Namibian Dollar | NAD | 516 | 2 | EMEA | | V/M/A | |
| Nepalese Rupee | NPR | 524 | 2 | APAC | | V/M/A | |
| Netherlands Antilles Guilder | ANG | 532 | 2 | LATAM | | V/M/A | |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **GA** | **MCP** | **DCC** |
| New Zealand Dollar | NZD | 554 | 2 | APAC | | V/M/A | |
| Nicaraguan Cordoba | NIO | 558 | 2 | LATAM | | V/M/A | |
| Nigerian Naira | NGN | 566 | 2 | EMEA | | V/M/A | |
| Ni-Vanuatu Vatu | VUV | 548 | 0 | APAC | | V/M/A | |
| Norwegian  Krona | NOK | 578 | 2 | EMEA | | V/M/A | |
| Omani Rial | OMR | 512 | 3 | EMEA | | V/M/A | |
| Pakistani Rupee | PKR | 586 | 2 | APAC | | V/M/A | |
| Panamanian Balboa | PAB | 590 | 2 | LATAM | | V/M | |
| Papua New Guinean Kina | PGK | 598 | 2 | APAC | | V/M/A | |
| Paraguayan Guarani | PYG | 600 | 0 | LATAM | | V/M/A | |
| Peruvian Sol | PEN | 604 | 2 | LATAM | | V/M/A | |
| Philippine Peso | PHP | 608 | 2 | APAC | | V/M/A | |
| Polish Zloty  | PLN | 985 | 2 | EMEA | | V/M/A | |
| Pound Sterling | GBP | 826 | 2 | EMEA | | V/M/A | |
| Qatari Riyal | QAR | 634 | 2 | EMEA | | V/M/A | |
| Romania Leu | RON | 946 | 2 | EMEA | | V/M/A | |
| Rwandan Franc | RWF | 646 | 0 | EMEA | | V/M/A | |
| Saint Helenian Pound | SHP | 654 | 2 | EMEA | | V/M | |
| Salvadoran Colon | SVC | 222 | 2 | | | | |
| Samoan Tala | WST | 882 | 2 | APAC | | V/M/A | |
| São Tomé and Príncipe Dobra | STN | 930 | 2 | EMEA | | V/M/A | |
| Saudi Riyal | SAR | 682 | 2 | EMEA | | V/M/A | |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **GA** | **MCP** | **DCC** |
| Serbian Dinar | RSD | 941 | 2 | EMEA | | V/M/A | |
| Seychellois Rupee | SCR | 690 | 2 | EMEA | | V/M/A | |
| Sierra Leonean Leone | SLL | 694 | 2 | EMEA | | V/M/A | |
| Singapore Dollar | SGD | 702 | 2 | APAC | | V/M/A | |
| Solomon Islander Dollar | SBD | 090 | 2 | APAC | | V/M/A | |
| Somali Shilling | SOS | 706 | 2 | EMEA | | V/M/A | |
| South African Rand | ZAR | 710 | 2 | EMEA | | V/M/A | |
| South Korea Won | KRW | 410 | 0 | APAC | | V/M/A | |
| South Sudanese Pound | SSP | 728 | 2 | EMEA | | V/M | |
| Sri Lankan Rupee | LKR | 144 | 2 | APAC | | V/M/A | |
| Surinamese Dollar | SRD | 968 | 2 | LATAM | | V/M | |
| Swazi Lilangeni | SZL  | 748 | 2 | EMEA | | V/M/A | |
| Swedish Krona | SEK | 752 | 2 | EMEA | | V/M/A | |
| Swiss Franc | CHF | 756 | 2 | EMEA | | V/M/A | |
| Taiwan New Dollar | TWD | 901 | 2 | APAC | | V/M/A | |
| Tajikistani Somoni | TJS | 972 | 2 | EMEA | | V/M/A | |
| Tanzanian Shilling | TZS | 834 | 2 | EMEA | | V/M/A | |
| Thai Baht | THB | 764 | 2 | APAC | | V/M/A | |
| Tongan Pa'anga | TOP | 776 | 2 | APAC | | V/M/A | |
| Trinidad and Tobago Dollar | TTD | 780 | 2 | LATAM | | V/M/A | |
| Tunisian Dinar | TND | 788 | 3 | EMEA | | V/M/A | |
| Turkish Lira | TRY | 949 | 2 | EMEA | | V/M/A | |
| Turkmenistani Manat | TMT | 934 | 2 | EMEA | | V/M/A | |
| Ugandan Shilling | UGX | 800 | 0 | EMEA | | V/M/A | |
| Ukrainian Hryvnia | UAH | 980 | 2 | EMEA | | V/M/A | |
| **Currency Name** | **CH Alpha Code** | **ISO Number** | **Precisions** | **Region** | **GA** | **MCP** | **DCC** |
| United Arab Emirates Dirham | AED | 784 | 2 | EMEA | | V/M/A | |
| United States Dollar | USD | 840 | 2 | NA, APAC, LATAM | | V/M/A | |
| Uruguayan Peso | UYU | 858 | 2 | LATAM | | V/M/A | |
| Uzbekistani Som | UZS | 860 | 2 | EMEA | | V/M/A | |
| Venezuelan Bolívar Soberano | VEF | 862 | 2 | LATAM | | V/M | |
| Vietnamese Dong | VND | 704 | 0 | APAC | | V/M/A | |
| West African CFA Franc | XOF | 952 | 0 | EMEA | | V/M/A | |
| Yemeni Rial | YER | 886 | 2 | EMEA | V/M/A | | |
| Zambian Kwacha | ZMW | 894 | 2 | EMEA | | V/M/A | |

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
