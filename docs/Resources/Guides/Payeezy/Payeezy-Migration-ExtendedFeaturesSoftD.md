---

tags: [carat, commerce-hub,  card-not-present, dynamic-descriptor, Statement-Descriptor, Merchant-Descriptor, Merchant-Details, Soft-Descriptor, Hard-Descriptor, payeezy]

---

# Soft Descriptors

<!-- theme: danger -->
> The following documentation is for **Payeezy** migration clients only. See [Fiserv Developer Studio for Merchants](https://developer.fiserv.com/merchants) for Commerce Hub integration options.

Soft Descriptors in Payeezy are now referred to as [Dynamic Descriptors (additional information)](?path=docs/Resources/Guides/Dynamic-Descriptor.md) in Commerce Hub.  

<!--type: tab
titles: API, Configuration, Virtual Terminal, Reporting
-->

In Payeezy, the North Merchant Master configuration was used to determine if the elements would be accepted in the API; Commerce Hub allows Soft Descriptors for all merchants.

The mvv_maid element is not available in Commerce Hub.

Sample JSON string format for `dynamicDescriptor`:

```json
{
 "dynamicDescriptors":{
      "mcc":"4457",
      "merchantName":"Mywebsite.com",
      "customerServiceNumber":"1231231234",
      "serviceEntitlement":"67893827513",
      "address":{
         "street":"Main Street",
         "houseNumberOrName":"123",
         "city":"Main Street",
         "stateOrProvince":"GA",
         "postalCode":"30303",
         "country":"US"
      }
   }
}
```

See [element level mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedLanding.md) documentation for detailed information on translating Payeezy Soft Descriptor elements to Commerce Hub Dynamic Descriptor elements.

<!--
type: tab
-->

To enable Soft Descriptors if Virtual Terminal, a self-service configuration was available in Payeezy (after the North Merchant Master configuration is set).  In Commerce Hub this is not available (see Virtual Terminal details).

<!--
type: tab
-->

In Payeezy, soft descriptors could be entered in Virtual Terminal for transactions where the configuration was enabled; in Commerce Hub / Client Line Enterprise Virtual Terminal Soft Descriptors cannot be entered.

<!--
type: tab
-->

No Change

<!-- type: tab-end -->

---

## See Also

- [Soft Descriptors](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Overview](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Solution Architecture](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CH Dev Studio](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [CLX Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)
- [Marketplace Training / How To](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)


---
