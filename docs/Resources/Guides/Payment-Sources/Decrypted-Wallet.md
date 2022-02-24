---
tags: [carat, commerce-hub, enterprise, decrypted-wallet, apple-pay, google-pay, payment-sources]
---

# Decrypted Wallet

<!-- theme: danger -->
>We are enhancing Commerce Hub and the documents related to the features will be released soon.

*DecryptedWallet* is used by the merchant while sending the transaction to the Commerce Hub when they are using their own certificate to encrypt and decrypt the data received from Apple Pay, Google Pay, or Samsung Pay.

<!---
### Request Variables
-->

<!--
type: tab
title: source
-->

<!---
The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|-------|---------|---------|
|`sourceType` | *string* | 15 | &#10004; | Value *ApplePay* is used for Apple Pay request. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. |
| `data` | *string* | 4000 | &#10004; | Encrypted Data. Payment data dictionary, Base64 encoded as a string. |
| `header` | *object* | N/A| &#10004; | Additional version-dependent information used to decrypt and verify the payment. |
| `signature` | *string* | 4000 | &#10004; | Signature of the payment and header data. The signature includes the signing certificate, its intermediate CA certificate, and information about the signing algorithm. Detached PKCS #7 signature, Base64 encoded as string. |
| `version` | *string* | 64 | &#10004; | Specific Protocol version supported by Apple. Version information about the payment token. The token uses EC_v1 for ECC-encrypted data, and RSA_v1 for RSA-encrypted data. |
| `applicationData` | *string* | 4000 |  | Hash of the applicationData property of the original PKPaymentRequest object. If the value of that property is nil, this key is omitted. SHA–256 hash, hex encoded as a string. |
| `applePayMerchantId` | *string* | 256 | &#10004; | Unique AppID registered in the Apple portal |
| `merchantPrivateKey` | *string* | 256 | &#10004; | Merchant private key - Hex encoded |
-->

<!--
### Payload Example
-->

<!---
<!-- theme:info 
> Merchants using the wallet encryption will send a [Wallet](?path=docs/Getting-Started/Getting-Started-Wallets.md) payload request based on the wallet type.
-->

<!--
type: tab
title: Request
-->

<!---
##### Example of a charge payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "ApplePay",
    "data": "hbreWcQg980mUoUCfuCoripnHO210lvtizOFLV6PTw1DjooSwik778bH....",
    "header": {
      "applicationDataHash": "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2",
      "ephemeralPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEvR....",
      "publicKeyHash": "KRsyW0NauLpN8OwKr+yeu4jl6APbgW05/TYo5eGW0bQ=",
      "transactionId": "31323334353637"
    },
    "signature": "MIAGCSqGSIb3DQEHAqCAMIACAQExDzANBglghkgBZQMEAgEFADCABgkqhki.....",
    "version": "EC_v1",
    "applicationData": "VEVTVA==",
    "merchantId": "merchant.com.fapi.tcoe.applepay",
    "merchantPrivateKey": "MHcCAQEE234234234opsmasdsalsamdsad/asdsad/asdasd/....."
  }
  "transactionDetails": {
    "captureFlag": true,
    "createToken": false
  },
  "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
    }
}

```
-->

<!--
type: tab
title: Response
-->

<!---
##### Example of a charge (201: Created) response.
-->

<!---
<!-- theme: info
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.
-->

<!---
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
      "sourceType": "DecryptedWallet",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "10",
         "expirationYear": "30"
      },
      "cavv": "01ade6ae340005c681c3a1890418b53000020000",
      "wallet": "APPLE_PAY"
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
         "processor": "fiserv",
         "responseCode": "000000",
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
-->

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
