---
tags: [carat, commerce-hub, enterprise, currency-conversion, vault]
---

# Currency Conversion

<!-- theme: danger -->
> We are enhancing the Commerce Hub to include currency conversion support and the documents related to the features will be released soon.

## Dynamic Currency Conversion

Commerce Hub's Dynamic Currency Conversion service *(GlobalChoice)* is a payment solution that allows international customers to pay in either their credit card currency or the base currency of the Merchant. The DCC service authorizes and settles transactions in major global currencies while still being funded in the merchant's base currency. Both the customer and merchant will know precisely the amount of the sale in both currencies.

## Dynamic Pricing

With Dynamic Pricing, a consumer is offered the choice of payment currencies upon entering the merchant's website. After selecting the preferred currency, the merchant's website will display pricing in the chosen currency *(i.e. the cardholder's issuing bank's currency)* only. When the cardholder arrives at the checkout page, the transaction will continue to be represented in the chosen currency, through to the receipt/confirmation page. The final transaction amount will be displayed as a single currency amount in the cardholder's selected currency.

Global ePricing (GEP) requires one merchant processing account per each unique currency.  Merchants using GEP with Commerce Hub will be able to process one currency type through each outlet. Multiple currencies types will require multiple outlets.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)

---
