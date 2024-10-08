---
tags: [Online, Card Not Present]
---

# API Direct Integration Guide

Commerce Hub allows merchants to manage the full design of their website, mobile app. The merchant handles encrypting and storing the data from their form and makes a direct API call with the payment information to Commerce Hub. The merchant website will pass the [encrypted payment source](?path=docs/Online-Mobile-Digital/Checkout/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md) in a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [tokens](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) request with the `sourceType` *PaymentCard*.

---

## Step 1: Encrypt Card Data

The card data is encrypted using either a [Multi-Use Public Key *(MUPK)*](?path=docs/Online-Mobile-Digital/Checkout/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md) or is encrypted by the [point of sale device](?pathdocs/In-Person/Integrations/Encrypted-PIN-Pad.md).

<!-- theme: info -->
> Commerce Hub supports encrypting `securityCode` data only when processing a [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) payment instrument such as a [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or an encrypted [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md). This process enhances security and serves validation purposes.

---

## Step 2: Build Authentication Header

To ensure data integrity, prevent replay attacks, and eliminate stale requests, authentication is required as part of the [header](?path=docs/Resources/API-Documents/Authentication-Header.md).

---

## Step 3: Submit a Request

Submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [tokens](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) request using the [encrypted payment source](?path=[Title](../../../Resources/Guides/Payment-Sources/Source-Type.md)).

<!-- theme: warning -->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. If a multi-use token is required the [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) must be submitted in the request. To override this behavior, `createToken`: *false* is required in `transactionDetails`.

### Charges Payload Example

The example below contains the mandatory fields required for a successful charge request. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

Example of a charge payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "10",
         "expirationYear": "2030"
      }
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
         "currency": "USD"
      },
      "merchantName": "Merchant Name",
      "merchantAddress": "123 Peach Ave",
      "merchantCity": "Atlanta",
      "merchantStateOrProvince": "GA",
      "merchantPostalCode": "12345",
      "merchantCountry": "US",
      "merchantURL": "https://www.somedomain.com",
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "FISERV",
         "host": "NASHVILLE",
         "responseCode": "000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021-06-20T23:42:48Z",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2021-06-20T23:42:48Z"
         }
      }
   },
   "transactionDetails":{
      "captureFlag": true,
      "merchantInvoiceNumber": "123456789012"
   }
}
```

<!-- type: tab-end -->

---

## Additional Security Settings

The following security settings are recommended to limit the potential for fraudulent activity on your Commerce Hub integration.

### Recommendations

- Enable Captcha as an available component
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/card-capture)
- [RESTful API Guide](?path=docs/Resources/API-Documents/Use-Our-APIs.md)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Multi-Use Public Key Encryption](?path=docs/Online-Mobile-Digital/Checkout/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md)
- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)

---
