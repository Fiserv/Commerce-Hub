---
tags: [In-App, Online, Google Pay, Wallet, Mobile]
---

# Google Pay: In-App Integration

Commerce Hub's RESTful API integration allows the merchant to create a custom App integration with Google Pay. The merchant will present the payment processing form on their App and submit the transaction to Commerce Hub.

##### How it Works

1. The customer selects checkout from the merchant's App and is presented with the merchant's payment form.
2. The app calls the Google Pay framework to obtain the encrypted wallet data.
3. The merchant's app submits the encrypted Google Pay payload to Commerce Hub.
4. Commerce Hub attempts to process the transaction and sends the response to the merchant's App.

---

## Step 1: Configure Google Pay

Configure the [App to integrate with Google Pay](https://developers.google.com/pay/api/android/guides/tutorial). This includes define Google Pay API version, request a Fiserv payment token, define payment card networks and payment methods, etc.

---

## Step 2: Submit a Charge Request

- [**Encrypted Data:**](#parameters) The data is encrypted using Google's encryption and Commerce Hub will decrypt the information.
- [**Decrypted Wallet:**](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) The data is encrypted and decrypted using a merchant's certificate and the card data is submitted to Commerce Hub.

### Parameters

<!--
type: tab
titles: source, intermediateSigningKey
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Max Length | Description |
|---------|----------|-------|---------|
| `sourceType` | *string* | 15 | Value *GooglePay* is used for Google Pay request. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details |
| `data` | *string* | 4000 | Encrypted Data. Payment data dictionary, Base64 encoded as a string |
| `signature` | *string* | 2000 | Verifies that the message came from Google, base64-encoded, and created with ECDSA by the intermediate signing key |
| `version` | *string* | 32 | Specific Protocol version supported by Google. Identifies the encryption or signing scheme under which the message is created. It allows the protocol to evolve over time, if needed |
| `intermediateSigningKey` | *object* | N/A | An object that contains the intermediate signing key from Google. It is serialized object to simplify the intermediate signing key signature verification process |

<!--
type: tab
-->

| Variable | Type| Max Length | Description |
|---------|----------|-------|---------|
| `signedKey` | *string* | 4000 | A UTF-8 encoded, serialized object that contains `keyExpiration` and `keyValue`, `keyExpiration` is date and time when the intermediate key expires as UTC milliseconds and `keyValue` is base64 version of key encoded in ASN.1 type |
| `signatures` | *array* | N/A | Verifies that the intermediate signing key came from Google. It is base64-encoded, and created with ECDSA |

<!-- type: tab-end -->

---

### Payload Example

<!-- theme:info -->
> Merchants managing their own encryptions will send a [Decrypted Wallet](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) payload request.

<!--
type: tab
titles: Request, Response
-->

Example of a Charge Payload Request.

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "GooglePay",
    "data": "{\"encryptedMessage\":\"NZF5Vs2YaI/t25L/1+dp6tuUOvra9.....\",\"ephemeralPublicKey\":\"BAhnPIWrCXWv/45GFK0mNAtQj.....\\u003d\",\"tag\":\"liBzKfGcO+FclHg7XuqRJxR.....\"}",
    "signature": "MIAGCSqGSIb3DQEHAqCAMIACAQExDzAN...",
    "version": "ECv2",
    "intermediateSigningKey": {
      "signedKey": "{\"keyExpiration\":\"1542323393147\",\"keyValue\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/1+3HBVSbdv+j7NaArdgMyoSAM43yRy.....\\u003d\\u003d\"}",
      "signatures": [
        {
          "items": "MEYCIQCO2EIi48s8VTH+ilMEpoXLFfkxAwHjfPSCVED/QDSHmQIhALLJmrUlNAY8hDQRV/y1iKZGsWpeNmIP+z+tCQHQxP0v"
        }
      ]
    }
  },
  "transactionDetails": {
    "captureFlag": true,
    "createToken": false
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!--
type: tab
-->

Example of a Charge (201: Created) Response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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
      },
      "cavv": "01ade6ae340005c681c3a1890418b53000020000",
      "wallet": "GOOGLE_PAY"
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
      "merchantURL": "https://www.somedomain.com"
   },
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
      "localTimestamp": "2021-04-16T16:06:05Z",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2021-04-16T16:06:05Z"
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

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Decrypted Wallet](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md)
- [Google Pay Web Integration - RESTful API](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-REST.md)
- [Google Pay API Sample for Android](https://github.com/google-pay/android-quickstart/tree/master)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)

<!---
- [Samsung Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Samsung-Pay/Samsung-Pay.md)
- [Google Pay Web Integration - Hosted Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-HPP.md)
-->

---
