---
tags: [API Reference, Customer Transaction Record, Master Data]
---

# Payment Receipt

The payment receipt also known as a Customer Transaction Record (CTR), is returned upon the completion of a transaction. The receipt contains the approved amount, [processor response details](?path=docs/Resources/Master-Data/Processor-Response-Details.md), and other transaction details.

---

## Payment Receipt

Object contains payment receipt response details.

<!--
type: tab
titles: paymentReceipt, JSON Example
-->

The below table identifies the parameters in the `paymentReceipt` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `approvedAmount` | *object* | N/A | Contains the approved [amount](?path=docs/Resources/Master-Data/Amount-Components.md) and currency code |
| `amountComponents` | *object* | N/A | Contains the additional amount fields such as [taxes](?path=docs/Resources/Master-Data/Tax-Types.md), [convenience fees](?path=docs/Resources/Guides/Convenience-Fees.md), cashback, tips, or [price adjustments](?path=docs/Resources/Master-Data/Price-Adjustments.md) were part of the request |
| `processorResponseDetails` | *object* | N/A | Contains the [response](?path=docs/Resources/Master-Data/Processor-Response-Details.md) parameters from the Commerce Hub for any successful or unsuccessful transaction |
| `balances` | *array* | N/A | Contains the beginning and ending balances for [Gift](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) and EBT cards |
| `merchantName` | *string* | 1024 |  Name of the merchant returned from boarded account or dyanamic descriptor |
| `merchantAddress` | *string* | 1024 | Street address of the merchant returned from boarded account or dyanamic descriptor |
| `merchantCity` | *string* | 256 | City of the merchant returned from boarded account or dyanamic descriptor |
| `merchantStateOrProvince` | *string* | 256 | State or Province of the merchant returned from boarded account or dyanamic descriptor |
| `merchantCountry` | *string* | 256 | Country of the merchant returned from boarded account or dyanamic descriptor |
| `merchantURL` | *string* | 256 | Merchant URL returned from boarded account |
| `merchantPostalCode`| *string* | 10 | Postal code of the merchant returned from boarded account or dyanamic descriptor |

<!--
type: tab
-->

JSON string format for `paymentReceipt`:

```json
{
  "paymentReceipt": {
    "approvedAmount": {
      "total": 21.75,
      "currency": "USD"
    },
    "amountComponents": {
      "unitPrice": 10,
      "subTotal": 10,
      "cashback": 2,
      "tip": 1.5,
      "convenienceFee": 1.5,
      "surcharge": 1.5,
      "shippingRate": 1.7,
      "shippingAmount": 5,
      "freightRate": 1.7,
      "freightAmount": 5,
      "priceAdjustments": [
        {
          "adjustmentType": "DISCOUNT",
          "adjustmentDescription": "Discount for loyalty",
          "adjustmentRate": 10,
          "adjustmentAmount": 1.5
        },
        {
          "adjustmentType": "COUPON",
          "adjustmentDescription": "10% Off Coupon",
          "adjustmentRate": 10,
          "adjustmentAmount": 1.5
        }
      ],
      "netAmount": 20,
      "taxAmounts": [
        {
          "taxType": "STATE",
          "taxRate": 7.5,
          "taxAmount": 1.5,
          "taxExempt": false
        },
        {
          "taxType": "CITY",
          "taxRate": 1.6,
          "taxAmount": 0.25,
          "taxExempt": false
        }
      ],
      "grossAmount": 21.75
    },
    "balances": [
      {
        "beginningBalance": 100,
        "endingBalance": 78.25,
        "currency": "USD"
      }
    ],
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK3483",
      "authenticationResponseCode": "string",
      "referenceNumber": "845366457890-TODO",
      "schemeTransactionId": "019078743804756",
      "feeProgramIndicator": "123",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021.02.25 14:14:38 (EST)",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2016-04-16T16:06:05Z",
        "transactionReferenceInformation": "123456789",
        "avsSecurityCodeResponse": {
          "streetMatch": "MATCH",
          "postalCodeMatch": "MATCH",
          "securityCodeMatch": "MATCH",
          "association": {
            "avsCode": "A",
            "securityCodeResponse": "MATCH",
            "cardholderNameResponse": "5"
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
- [Amount Components](?path=docs/Resources/Master-Data/Amount-Components.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Dynamic Descriptor](?path=docs/Resources/Guides/Dynamic-Descriptor.md)
- [Processor Response Details](?path=docs/Resources/Master-Data/Processor-Response-Details.md)
- [Refund Requests](?path=docs/Resources/API-Documents/Payments/Refund.md)

---
