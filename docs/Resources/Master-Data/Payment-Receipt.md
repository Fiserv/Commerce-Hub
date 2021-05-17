# Customer Transaction Record 

A Customer Transaction Record (CTR), also known as a payment receipt is returned upon the completion of a transaction. It contains the approved amount, [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md), business information, and other transaction details.

## Payment Receipt

<!--
type: tab
title: paymentReceipt
-->

| Variable | Type | Length | Description/Values |
| -------- | ---- | ------- | -------------------------------|
| `approvedAmount` | *object* |  | Contains the approved [amount](?path=docs/Resources/Master-Data/Amount-Components.md) and currency code. |
| `processorResponseDetails` | *object* | | Contains the [response](?path=docs/Resources/Master-Data/Processor-Response-Details.md) parameters from the Commerce Hub for any successful or unsuccessful transaction. |
| `merchantName` | *string* | |  Name of the merchant returned from boarded account or dyanamic descriptor. |
| `merchantAddress` | *string* | | Street address of the merchant returned from boarded account or dyanamic descriptor. |
| `merchantCity` | *string* | | City of the merchant returned from boarded account or dyanamic descriptor. |
| `merchantStateOrProvince` | *string* | | State or Province of the merchant returned from boarded account or dyanamic descriptor. |
| `merchantCountry` | *string* | | Country of the merchant returned from boarded account or dyanamic descriptor. |
| `merchantURL` | *string* | | Merchant URL returned from boarded account. |
| `merchantPostalCode`| *string* | | Postal code of the merchant returned from boarded account or dyanamic descriptor. |


<!--
type: tab
title: JSON Example 
-->

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
         "authenticationResponseCode": "string",
         "referenceNumber": "845366457890-TODO",
         "schemeTransactionId": "019078743804756",
         "feeProgramIndicator": "123",
         "processor": "fiserv",
         "responseCode": "00000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021.02.25 14:14:38 (EST)",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2016-04-16T16:06:05Z",
            "transactionReferenceInformation": "string",
            "avsSecurityCodeResponse":{
               "streetMatch": "MATCH",
               "postalCodeMatch": "MATCH",
               "securityCodeMatch": "MATCH",
               "association":{
                  "avsCode": "BOTH_MATCH",
                  "securityCodeResponse": "MATCH",
                  "cardholderNameResponse": "NAME_MATCH"
               }
            }
         }
      },
      "merchantName": "Merchant Business",
      "merchantAddress": "30 Memorial Drive",
      "merchantCity": "Avon",
      "merchantStateOrProvince": "MA",
      "merchantCountry": "Albama",
      "merchantURL": "www.business.com",
      "merchantPostalCode": "2322"
   }
}
  
```

<!-- type: tab-end -->

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Amount](?path=docs/Resources/Master-Data/Amount-Components.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
- [Dynamic Descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md)

---