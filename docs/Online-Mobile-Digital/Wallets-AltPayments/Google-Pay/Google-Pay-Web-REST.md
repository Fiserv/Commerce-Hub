---
tags: [Web, Online, Google Pay, Wallet]
---

# Google Pay on the Web: RESTful API Integration

Commerce Hub's RESTful API integration allows the merchant to create a custom UI integration with Google Pay. The merchants would need to setup their own server for secure communication with Google Pay. The merchant will host the payment processing on their server and has full control over the look and feel.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

### How it Works

1. The customer selects checkout from the merchant's website and is presented with the merchant's payment form.
2. The customer selects Google Pay and then redirected to the Google Pay payment form.
3. The customer completes the Google Pay form and then redirected to the merchant's website.
4. The customer selects to complete the transaction.
5. The merchant submits the encrypted Google Pay payload to Commerce Hub.
6. Commerce Hub attempts to process the transaction and sends the response to the merchant website.

---

## Step 1: Configure Google Pay

Configure the environment to accept [Google Pay on the web](https://developers.google.com/pay/api/web/guides/tutorial). This includes define Google Pay API version, request a payment token, define payment card networks and auth methods, describe acceptable payment methods, add payment tag, determine readiness to pay, add Google Pay button, etc.

---

## Step 2: Submit a Charge Request

- [**Encrypted Data:**](#request-variables) The data is encrypted using Google's encryption and Commerce Hub will decrypt the information.
- [**Decrypted Wallet:**](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) The data is encrypted and decrypted using a merchant's certificate and the card data is submitted to Commerce Hub.

---

### Request Variables

<!--
type: tab
titles: source
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|-------|---------|---------|
|`sourceType` | *string* | 15 | &#10004; | Value *GooglePay* is used for Google Pay request. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. |
| `data` | *string* | 4000 | &#10004; | Encrypted Data. Payment data dictionary, Base64 encoded as a string. |
| `signature` | *string* | 2000 | &#10004; | Verifies that the message came from Google, base64-encoded, and created with ECDSA by the intermediate signing key. |
| `version` | *string* | 32 | &#10004; | Specific Protocol version supported by Google. Identifies the encryption or signing scheme under which the message is created. It allows the protocol to evolve over time, if needed. |

<!-- type: tab-end -->

### Payload Example

<!-- theme:info -->
>Merchants managing their own encryptions will send a [Decrypted Wallet](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md) payload request.

---

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request.
```json

{
   "amount":{
      "total": 12.04,
      "currency": "USD"
   },
   "source":{
      "sourceType": "GooglePay",
      "data": "{\"encryptedMessage\":\"NZF5Vs2YaI\/t25L\/1+dp6tuUOvra9pszs2antqcbHJbkjMMXZSR7innTFJxNR5DNnf4GheWIso8n8MA1q1zqWCU8MaK9bnNcHxvROpvfsU3SCCjkfG2k2M4\/RYMjs+lxYW\/nEtIIKVVOkdjAj4pI\/Wth8xQXphn7hDNiyp9tIydmlPZVnzkXI6mVbpHbbkaCCD4TNPhFBDtx0VafqRjbb2Wt3EDazTx3dHdd+qVX5Xj8\/BPb1cmwHWvrDw\/dQRk\/E0TsP+erLjhLaZ8l2EycxeUEZYqSX5w77S8vd3sw8WXuOCMsU8sx0Bs5IY7hohq67qNDxckP1fcBD4OYdGP6bumJR0J6pJxD5iRh5lFSjN6zNLRI77ylxWL6DwHoe\/pPdCc0n6cV0Nt0RJMLjerr12BLuhv4bPQ3QB6jxnbt8JK\/EndgIG8xpFyNkKlRUyxAKM22\/ZSy45d6qtZIKLXRqDTr9JMk8uJ53QRZtQx8k9KkRZGC+GM2sD+Z75fxc0Yye7l6H0D8p5z1iEzWnYHxd0pmY\/cOYEJxnOOdD573QmE6ikFcyaAw3XnCyul\/EA\\u003d\\u003d\",\"ephemeralPublicKey\":\"BAhnPIWrCXWv\/45GFK0mNAvN9w+NFBs3tQji0wTUS2+hiFKsZujG5wRd4JXGmxhG+k3bglYk544ILBNdDpsAh+o\\u003d\",\"tag\":\"liBzKfGcO+FclHg7XuqRJxR\/8EJShRp9\/APab0Sho08\\u003d\"}",
      "signature": "MIAGCSqGSIb3DQEHAqCAMIACAQExDzAN...",
      "version": "ECv2"
   },
   "transactionDetails":{
      "captureFlag": true,
      "createToken": false
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
   }
}

```

<!--
type: tab
-->

##### Example of a charge (201: Created) response.

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
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Decrypted Wallet](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md)
- [Google Pay App Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-App.md)
- [Google Pay Brand Guidelines](https://developers.google.com/pay/api/web/guides/brand-guidelines)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)

<!---
- [Samsung Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Samsung-Pay/Samsung-Pay.md)
- [Google Pay Web Integration - Hosted Page](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-HPP.md)
-->

---
