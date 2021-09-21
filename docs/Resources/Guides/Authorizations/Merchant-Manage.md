---
tags: [carat, commerce-hub, card-not-present, reauthorization, reauth, reauthorize, authorization]
---

# Merchant Managed Re-Authorization

Merchant Mangaged allows the merchant to reauthorize payments only once, following the original honor period for a specific amount more than the original amount. Apple Pay, Google Pay, PayPal and Samsung Pay guarantees that funds are available in the buyer's account during the standard 3-day honor period and within the honor period of the reauthorization (if applicable); outside of that period, funds are not guaranteed to be in the buyer's account at the time of capture, though the authorization is still valid. Authorizations are valid for 29 days.

Merchants typically reauthorize a payment to verify that the funds are available as recommended by PayPal. If the merchant wants to confirm that funds are available, and it is past the 3-day honor period, you can perform a reauthorization.

# Commerce Hub 

Commerce Hub allows you to measure the validity period of when an original authorization has expired. Commerce Hub has the ability to capture an authorization which will remain valid for 7-10 days. This functionality has been created at the CommerceHub gateway level so that multiple front ends can support this feature. Commerce Hub can also initiate a reauthorization on behalf of the merchant for several used cases mentioned below. 

- Validity period of original authorization has expired
- Original auth is missing CPS qualified data
- Different transaction amount in either authorization or settlement 
- Merchant preference for reauthorization

---

## Reauthorize a payment

A reauthorization with a [token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) is required when a pending authorization has been released based on the card issuer's hold times. The most common reason for reauthorization is due to a pre-order or [split shipment](?path=docs/Resources/Guides/Split-Shipment.md).


<!-- theme: info -->
> See an account representative for more information on account management.



---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Split Shipment](?path=docs/Resources/Guides/Split-Shipment.md)
- [Subsequent Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)
- [Transaction Details](?path=docs/Resources/Master-Data/Transaction-Details.md)

---