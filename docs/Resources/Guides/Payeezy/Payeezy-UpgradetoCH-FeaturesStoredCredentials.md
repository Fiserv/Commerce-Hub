---

tags: [carat, commerce-hub, enterprise, stored-credentials,card-not-present, payeezy]

---

# Stored Credentials

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

Stored Credentials also known as Credentials on File or Card on File, allows a customer to authorize the storage of their payment source details for future transactions as a Cardholder Initiated Transaction (CIT).  The merchant can initiate subsequent transactions on behalf of their customers (e.g. for subscription payments), using the [Payment Token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) created from the customer's details as a Merchant Initiated Transaction (MIT).  More information about using stored credentials in Commerce Hub can be found [here](?path=docs/Resources/Guides/Stored-Credentials.md).

In Payeezy, American Express card brand used the `ecommerce_flag` element for processing stored credential transactions; in Commerce Hub, all supported card brands will use the Stored Credentials object.

In Payeezy, the Stored Credentials are returned in the response; in Commerce Hub, they are not.  See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) documentation for more information.

In Commerce Hub, merchant managed scheduled transactions require the `billPaymentType` request element in the [additionalDataCommon object](?path=docs/Resources/Master-Data/Additional-Data.md).

The `original_amount` element used for processing Discover cards in Payeezy is now `networkOriginalAmount` in Commerce Hub and contained in the Discover object. 

**The following elements are currently not supported in Commerce Hub:**

|Card Brand| Payeezy Element|
|----------|---------------|
|Discover| `protectbuy_indicator`|
|Visa|`authorization_type_override`|

Additional information on mapping stored credential elements from Payeezy to Commerce Hub can be found in the [mapping documentation](?path=docs/Resources/Guides/Payeezy/Payeezy-UpgradetoCH-TechnicalAPI.md).

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---
