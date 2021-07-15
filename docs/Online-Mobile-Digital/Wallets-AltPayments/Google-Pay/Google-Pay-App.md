---
tags: [carat, commerce-hub, enterprise, integration-methods, restful-api, in-app, online, google-pay, wallet, mobile]
---

# Google Pay: In-App Integration

#### Google Pay on the App

## Step 1: Configure Google Pay in App

The merchant will need to be do the changes in their [App to integrate with Google Pay](https://developers.google.com/pay/api/web/guides/tutorial). This includes define Google Pay API Version, request a payment token, define payment card networks, describe allowed payment methods, create PaymentClientsInstance, determine readniness to pay, create PaymentDataRequest, register event handler etc.

---

## Step 2: Submit a Charge Request

- Option 1 - Encrypted Data (wallet encrypted data using apple encryption, commerce hub will decrypt)
- Option 2 - Decrypted Wallet (Merchant using their own certificate and they decrypt themselves and send us card data)

### Request Variables

<!--
type: tab
title: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | &#10004; | Value *GooglePay* is used for Google Pay request. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. |
| `data` | *string* | 4000 | &#10004; | Encrypted Data. Payment data dictionary, Base64 encoded as a string. |
| `signature` | *string* | 2000 | &#10004; | Verifies that the message came from Google, base64-encoded, and created with ECDSA by the intermediate signing key. |
| `version` | *string* | 32 | &#10004; | Specific Protocol version supported by Google. Identifies the encryption or signing scheme under which the message is created. It allows the protocol to evolve over time, if needed. |
| `merchantId` | *string* | 256 | &#10004; | Single Merchant Identifier common for all Google Pay merchants. |
| `keyInfo` | *array* | N/A | &#10004; | Key information |



<!--
type: tab
title: keyInfo
-->

The below table identifies the required parameters in the `keyInfo` array.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ------------------ |
| `merchantPrivateKey` | *string* | 1024 | | Merchant private key - Hex encoded. |
| `signingVerificationKey` | *string* | 1024 | &#10004; | Signing verification key - Base64 encoded. |

<!-- type: tab-end -->

### Payload Example

<!--
type: tab
title: Request
-->

##### Example of a Charge Payload Request.
```json
{
   "amount":{
      "total":"12.04",
      "currency":"USD"
   },
   "source":{
      "sourceType":"GooglePay",

   }
}

```

<!--
type: tab
title: Response
-->

##### Example of a Charge (201: Created) Response.

<!-- theme: info -->
> See [Error Responses](?path=docs/Resources/Guides/Response-Codes/HTTP.md) for additional examples.
```json
{
   "gatewayResponse":{
      "transactionType": "CHARGE",
      "transactionState": "AUTHORIZED",
      "transactionOrigin": "ECOM",
      "transactionProcessingDetails":{
         "transactionTime": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source":{
      "sourceType": "DecryptedWallet",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "10",
         "expirationYear": "30"
      }
      "cavv": "01ade6ae340005c681c3a1890418b53000020000",
      "wallet": "APPLE_PAY"
   },
   "paymentReceipt":{
      "approvedAmount":{
         "total": 12.04,
         "currency": "USD",
         "merchantName": "Merchant Name",
         "merchantAddress": "123 Peach Ave",
         "merchantCity": "Atlanta",
         "merchantStateOrProvince": "GA",
         "merchantPostalCode": "12345",
         "merchantCountry": "US",
         "merchantURL": "https://www.somedomain.com"
      },
      "processorResponseDetails":{
         "approvalStatus": "APPROVED",
         "approvalCode": "OK5882",
         "schemeTransactionId": "0225MCC625628",
         "processor": "fiserv",
         "responseCode": "000000",
         "responseMessage": "APPROVAL",
         "hostResponseCode": "00",
         "hostResponseMessage": "APPROVAL",
         "localTimestamp": "2021.02.25 14:14:38 (CET)",
         "bankAssociationDetails":{
            "associationResponseCode": "000",
            "transactionTimestamp": "2021.02.25 14:14:38 (CET)"
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

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Google Pay Web Integration - RESTful API](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-REST.md)
- [Google Pay Web Integration - Hosted Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-HPP.md)
- [Charges](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)

---
