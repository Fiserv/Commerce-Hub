---
tags: [API Reference, Customer, Address, Phone]
---

# Phone Number

The `phone` object contains the phone details of the customer, .

<!--
type: tab
titles: phone, JSON Example
-->

The below table identifies the parameters in the `phone` object.

| Variable | Type |Maximum Length | Description/Values |
| -------- | -- | ------------ | ------------------ |
| `countryCode` | *string* | 4 | Country's area code |
| `phoneNumber` | *string* | 15 | Customer phone number |
| `type` | *string* | 5 | This field indicates the type of phone number provided. Valid Values: *DAY*, *HOME*, *NIGHT*, *WORK*, *MOBILE*. |

<!--
type: tab
-->

JSON string format for the `phone` object:

```json
{
   "phone":{
      "countryCode": "91",
      "phoneNumber": "123-123-1234",
      "type": "DAY"
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Address Details](?path=docs/Resources/Master-Data/Address.md)

---
