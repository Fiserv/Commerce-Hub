---
tags: [carat, commerce-hub, enterprise, customer-transaction-record, master-data]
---

# Customer Transaction Record 

A Customer Transaction Record (CTR), also known as a payment receipt is returned upon the completion of a transaction. The CTR contains the approved amount, [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md), business information, and other transaction details.

---

## Payment Receipt

Object contains payment receipt response details.

<!--
type: tab
title: paymentReceipt
-->

The below table identifies the parameters in the `paymentReceipt` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `approvedAmount` | *object* | N/A | Contains the approved [amount](?path=docs/Resources/Master-Data/Amount-Components.md) and currency code. |
| `processorResponseDetails` | *object* | N/A | Contains the [response](?path=docs/Resources/Master-Data/Processor-Response-Details.md) parameters from the Commerce Hub for any successful or unsuccessful transaction. |

<!---
| `merchantName` | *string* | 1024 |  Name of the merchant returned from boarded account or dyanamic descriptor. |
| `merchantAddress` | *string* | 1024 | Street address of the merchant returned from boarded account or dyanamic descriptor. |
| `merchantCity` | *string* | 256 | City of the merchant returned from boarded account or dyanamic descriptor. |
| `merchantStateOrProvince` | *string* | 256 | State or Province of the merchant returned from boarded account or dyanamic descriptor. |
| `merchantCountry` | *string* | 256 | Country of the merchant returned from boarded account or dyanamic descriptor. |
| `merchantURL` | *string* | 256 | Merchant URL returned from boarded account. |
| `merchantPostalCode`| *string* | 10 | Postal code of the merchant returned from boarded account or dyanamic descriptor. |
-->

<!--
type: tab
title: JSON Example 
-->

JSON string format for `paymentReceipt`:

```json
{
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.32,
         "currency": "USD"
      },
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK3483",
         "authenticationResponseCode": "string", /// Future Release
         "referenceNumber": "845366457890-TODO",
         "schemeTransactionId": "019078743804756",
         "feeProgramIndicator": "123", /// Future Release
         "processor": "fiserv",
         "responseCode": "000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021.02.25 14:14:38 (EST)",
         "bankAssociationDetails":{
            "associationResponseCode": "000", /// Future Release
            "transactionTimestamp": "2016-04-16T16:06:05Z",
            "transactionReferenceInformation": "123456789", /// Future Release
            "avsSecurityCodeResponse":{
               "streetMatch": "MATCH",
               "postalCodeMatch": "MATCH",
               "securityCodeMatch": "MATCH",
               "association":{
                  "avsCode": "A",
                  "securityCodeResponse": "MATCH",
                  "cardholderNameResponse": "5"
               }
            }
         }
      },
      "merchantName": "Merchant Business", /// Future Release
      "merchantAddress": "30 Memorial Drive", /// Future Release
      "merchantCity": "Avon", /// Future Release
      "merchantStateOrProvince": "MA", /// Future Release
      "merchantCountry": "Albama", /// Future Release
      "merchantURL": "www.business.com", /// Future Release
      "merchantPostalCode": "2322" /// Future Release
   }
}
  
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Amount Components](?path=docs/Resources/Master-Data/Amount-Components.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Capture Request](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Cancel Request](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Dynamic Descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
- [Refund Request](?path=docs/Resources/API-Documents/Payments/Refund.md)

<!---
- [Credit Request](?path=docs/Resources/API-Documents/Payments/Credit.md)
- [Forced Post](?path=docs/Resources/API-Documents/Payments/Forced.md)
-->

---