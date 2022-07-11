---

tags: [carat, commerce-hub, enterprise, stored-credentials,card-not-present, payeezy]

---

# Stored Credentials

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

In Payeezy, American Express card brand used the `ecommerce_flag` element for processing stored credential transactions; in Commerce Hub, all suported card brands will use the Stored Credentials object.

In Payeezy, the Stored Credentials are returned in the response; in Commerce Hub, they are not.  See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) documentation for more information.

In Commerce Hub, merchants can initiate subsequent transactions by using the [Payment Token](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) generated from the customer's details.

In Commerce Hub, merchant managed scheduled transactions require the billPaymentType request element in the [additionalDataCommon object](?path=docs/Resources/Master-Data/Additional-Data.md).

**The following elements are currently not supported in Commerce Hub:**

|Card Brand| Payeezy Element|
|----------|---------------|
|Discover|`original_amount` <br> `protectbuy_indicator`|
|Visa|`authorization_type_override`|

Further information about Stored Credentials, required elements and additional optional elements available in Commerce Hub can be found [here](?path=docs/Resources/Guides/Stored-Credentials.md).

---

## See Also

- [Payeezy Merchant Migration Playbook](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedLanding.md)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---
