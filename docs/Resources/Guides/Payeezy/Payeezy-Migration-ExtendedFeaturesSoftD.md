---

tags: [carat, commerce-hub,  card-not-present, dynamic-descriptor, Statement-Descriptor, Merchant-Descriptor, Merchant-Details, Soft-Descriptor, Hard-Descriptor, payeezy]

---

# Soft Descriptors

<!-- theme: danger -->
>  The following documentation is for **Payeezy** migration clients only. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

Soft Descriptors in Payeezy are now referred to as [Dynamic Descriptors (additional information)](?path=docs/Resources/Guides/Dynamic-Descriptor.md) in Commerce Hub. 

In Payeezy Real-time Payment Manager (RPM), a self-service configuration was available to enable Soft Descriptors in Virtual Terminal (after the North Merchant Master configuration is set). In ClientLine Enterprise (CLX), this is not available [(see Virtual Terminal details)](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedCoreVT.md).

### API Structure

In Payeezy, the 'dba_name' or 'mcc' element was required on the capture request for settlement; In Commerce Hub, 'mcc', 'merchantName', 'customerServiceNumber', 'serviceEntitlement' and 'address' are all required. 

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

See [element level mapping](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedTechnicalAPI.md) documentation for detailed information on translating Payeezy Soft Descriptor elements to Commerce Hub Dynamic Descriptor elements.

---

## See Also

- [Payeezy Merchant Migration Virtual Terminal Information](?path=docs/Resources/Guides/Payeezy/Payeezy-Migration-ExtendedCoreVT.md)
- [Commerce Hub Administration / ClientLine Enterprise Training](https://fiserv.cloudguides.com/en-us/guides/ClientLine%20Enterprise%20from%20Fiserv)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)

---
