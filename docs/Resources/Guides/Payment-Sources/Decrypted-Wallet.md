---
tags: [carat, commerce-hub, enterprise, decrypted-wallet, apple-pay, google-pay, payment-sources]
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
|`sourceType` | *string* | 256 | &#10004; |   Payment source type for a transaction request. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. |


<!--
type: tab
-->

The below table identifies the required parameters in the `card` object.

| Variable | Type | Maximum Length | Required | Description |
| -------- | -- | ------------ | ---------|--------- |
| `cardData` | *string* | 256 | &#10004; | Card number or encrypted data |
| `nameOnCard` | *string* | 256 | &#10004; | Cardholder or customer name |
| `expirationMonth` | *string* | 2 | &#10004; | 2-digit expiration month |
| `expirationYear` | *string* | 4 | &#10004; | 4-digit expiration year |
| 'securityCode' | *string* | 4 | &#10004; | Card Security Code (CSC), Card Verification Data (CVD), Card Verification Number (CVN), Card Verification Value (CVV), Card Verification Code (CVC), Verification Code (V-code or V code), or Signature Panel Code (SPC). |
| 'securityCodeIndicator' | *string* | 15 | &#10004; | Indicates how the security code is passed |
| 'bin' | *string* | 8 | &#10004; | Bank Identification Number (BIN), the initial set of four to six numbers of the Primary Account Number (PAN). The BIN identifies the issuer and Level 2/3 qualifications. |
| 'last4' | *string* | 4 | &#10004; | Contains the last four digits of the Primary Account Number (PAN) |
| 'scheme' | *string* | 256 | &#10004; | Card brand |
| 'beginningBalance' | *number* | 999999999999999999.999 | &#10004; | Beginning card balance |
| 'endingBalance' | *number* | 999999999999999999.999 | &#10004; | Ending card balance |

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
         "processor": "fiserv",
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
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
