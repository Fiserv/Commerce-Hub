---
tags: [carat, commerce-hub, enterprise, currency-conversion, vault]
---


# Currency Conversion

<!-- theme: danger -->
> We are enhancing the Commerce Hub to include Currency Conversion support and the documents related to the features will be released soon.

Fiserv’s Dynamic Currency Conversion service (also known as GlobalChoice) is a payment solution that allows international customers to have the choice to pay for goods and services purchased online in their home currency while using their credit card for the payment. International Visa and MasterCard eCommerce customers can make informed decisions about their online purchases and avoid any unexpected pricing or foreign exchange conversions on receipt of their monthly statements.

If you use hosted forms for the payment process in your webshop and your Store has been activated for this product option, a currency choice is automatically provided to your customers if the card they use has been issued in a country with a currency that is different to your default currency.

## Currency Conversion Types

Commerce Hub provides 2 types of Currency Conversion requests, first is `Dynamic Currency Conversion Exchange Rate Request` in which you'll request the optimal currency and rate from our exchange rate provider, who will then determine which currency to provide a price and exchange rate in. And second one is `Dynamic Pricing Exchange Rate Request` in which you'll be provided with a list of currencies and prices. You can then choose certain prices and currencies to present to the customer, or customer can select the currency they would like to pay through.

<!-- theme: info -->
> To utilize the Currency Conversion the merchant account needs to be boarded with GlobalChoice. For more information, please contact your account representative.



### Dynamic Currency Conversion



### Dynamic Pricing Conversion


---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
