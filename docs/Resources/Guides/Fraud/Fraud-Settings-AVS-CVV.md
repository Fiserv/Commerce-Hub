---
tags: [Address Verification, AVS, Security Code Verification, CVV, Fraud]
---

# Address and Security Code Filters

The address and security code filters provide a merchant the ability to enable various transaction filters using the [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification requests. Commerce Hub will reject and automatically reverse the submitted transaction if the conditions for any of these filters are met.

Filters are applied by inside of Merchant Configuration and Boarding _(Marketplace in the [ClientLine Enterprise Portal](https://www.businestrack.com))_. Filters are applied by attributes and the respective response values.

<!-- theme: info -->
> Not all banks return a response when cardholder verification data is sent and a filter will not cover this situation.

---

## Response Example

##### Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "DECLINED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "orderId": "CHG019e28e1cc73bb4eaea04f24295536deb7",
      "transactionTimestamp": "2022-10-06T09:43:18.862072Z",
      "apiTraceId": "ebc22200e3914cd09d35248d3a559592",
      "clientRequestId": "2206078",
      "transactionId": "ebc22200e3914cd09d35248d3a559592"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "expirationMonth": "12",
      "expirationYear": "2025",
      "bin": "401200",
      "last4": "0026",
      "scheme": "VISA"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 250.01,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "DECLINED",
      "approvalCode": "OK998C",
      "schemeTransactionId": "012279731610623",
      "processor": "fiserv",
      "responseCode": "600",
      "responseMessage": "Fraud Error: General",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2022-10-06T09:43:19Z",
      "bankAssociationDetails": {
        "transactionTimestamp": "2022-10-06T09:43:20.006Z",
        "avsSecurityCodeResponse": {
          "streetMatch": "NOT_CHECKED",
          "postalCodeMatch": "NOT_CHECKED",
          "securityCodeMatch": "MATCHED",
          "association": {
            "avsCode": "S",
            "securityCodeResponse": "M"
          }
        }
      }
    }
  },
  "billingAddress": {
    "firstName": "Raghavendiran",
    "lastName": "Kannan",
    "address": {
      "street": "100 Ashford Gables Dr",
      "houseNumberOrName": "4201",
      "city": "Atlanta",
      "stateOrProvince": "Georgia",
      "postalCode": "30338",
      "country": "USA"
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "merchantInvoiceNumber": "CHG019e28e1c"
  },
}
```

---

## See Also

- [Fraud Settings](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Positive/Negative Fraud Filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Transaction Restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md)
- [Velocity Controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md)
- [Verification Request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md)

<!---
- [Fraud Detect](?path=docs/Resources/Guides/Fraud/Fraud-Detect.md)
-->

---
