---
tags: [carat, commerce-hub, enterprise, currency-conversion, vault]
---


# Currency Conversion

Pull information IPG or PayEasy

<!-- theme: danger -->
> We are enhancing the Commerce Hub to include Currency Conversion support and the documents related to the features will be released soon.


Use our Currency Conversion services to offer your customers the ability to pay in different currencies, typically their own domestic currency when ordering from overseas.

Currency Conversion Types
We provide 2 types of Currency Conversion, one in which you'll request the optimal currency and rate from our exchange rate provider, who will then determine which currency to provide a price and exchange rate in (a DCC Exchange Rate Request), and another in which you'll be provided with a list of currencies and prices. You can then choose certain prices and currencies to present to the customer, or customer can select the currency they would like to pay in (a Dynamic Pricing Exchange Rate Request).

Using Currency Conversion
To use our currency conversion services, use the POST method to /exchange-rates to request a price and exchange rate from our exchange rate providers. As with our other services, this resource is polymorphic. This means you'll need to submit a request type to tell the Exchange Rates resource how to treat your request.


## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)


---
