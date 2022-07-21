---
tags: [Decrypted Wallet, Apple Pay, Google Pay, Payment Sources]
---

# Decrypted Wallet

<!-- theme: danger -->
>We are enhancing Commerce Hub and the documents related to the features will be released soon.

*DecryptedWallet* is used by the merchant while sending the transaction to the Commerce Hub when they are using their own certificate to encrypt the data received from Apple Pay and Google Pay.

### Request Variables

<!--
type: tab
titles: source, card, JSON Example
-->

The below table identifies the parameters in the `source` object.

| Variable | Type| Maximum Length | Required | Description |
|---------|----------|-------|---------|---------|
|`sourceType` | *string* | 15 | &#10004; | Value *DecryptedWallet* is used for Decrypted Wallet requests. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. |
| `card` | *object* | N/A | &#10004; | Decrypted card details |
| `cavv` | *string* | 40 | &#10004; | Cardholder Authentication Verification Value provided by the Wallet Provider |
| `xid` | *string* | 40 | | The unique identifier for the transaction provided by the Wallet Provider |
| `walletType` | *string* | 256 | &#10004; | Identifies the wallet as APPLE_PAY, GOOGLE_PAY, or SAMSUNG_PAY. |

<!--
type: tab
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ---------|--------- |
| `cardData` | *string* | 256 | &#10004; | Card number or encrypted data |
| `expirationMonth` | *string* | 2 | &#10004; | 2-digit expiration month |
| `expirationYear` | *string* | 5 | &#10004; | 4-digit expiration year |

<!-- theme: info -->
> Refer to the [card](?path=docs/Resources/Master-Data/Card.md) object for additional fields.

<!--
type: tab
-->

JSON string format for DecryptedWallet:

```json
{
	"source": {
		"sourceType": "DecryptedWallet",
		"card": {
			"cardData": "4005550000000019",
			"expirationMonth": "02",
			"expirationYear": "2035"
		},
		"cavv": "01ade6ae340005c681c3a1890418b53000020000",
		"xid": "13456789",
		"walletType": "ApplePay"
	}
}
```

<!-- type: tab-end -->

### Payload Example

<!--
type: tab
titles: Request, Response
-->

##### Example of a charge payload request.

```json
{
	"amount": {
		"total": "12.04",
		"currency": "USD"
	},
	"source": {
		"sourceType": "DecryptedWallet",
		"card": {
			"cardData": "4005550000000019",
			"expirationMonth": "02",
			"expirationYear": "2035"
		},
		"cavv": "01ade6ae340005c681c3a1890418b53000020000",
		"xid": "13456789",
		"walletType": "APPLE_PAY"
	},
	"transactionDetails": {
		"captureFlag": true,
		"createToken": false
	},
	"merchantDetails": {
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
         "expirationMonth": "02",
         "expirationYear": "2035"
      },
      "cavv": "01ade6ae340005c681c3a1890418b53000020000",
      "xid": "13456789"
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
   }
}
```
<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
