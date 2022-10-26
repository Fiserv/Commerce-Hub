---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, mobile-wallets, decrypted-wallets, encrypted-wallets, apple-pay, google-pay]

---

# Mobile Wallets

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

Wallet transactions originate from a digital wallet either from a website or on a device (e.g. Apple/iOS, Google/Android, and Samsung). Merchants can submit this data as either an encrypted or a decrypted request.

- **Encrypted Wallet:** The merchant will send the encrypted data along with their private key and Commerce Hub will decrypt the information for processing.
- **Decrypted Wallet:** The merchant will decrypt the wallet data before submitting to Commerce Hub for processing.

> :memo: **Note:** All merchants upgrading to Commerce Hub, now have the opportunity to utilize Commerce Hub's decryption capabilities.

<!--type: tab
titles: Encrypted Wallet, Decrypted Wallet
-->

<!--type: tab
titles: Apple Pay, Google Pay
-->

### Encryption Elements

The below table identifies the required parameters in the `source` object.

&#10004; denotes required fields

|Developer API|Commerce Hub|
|-------|-----|
||&#10004; `sourceType` Value *ApplePay* is used for Apple Pay request. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. <br> &#10004; `data` Encrypted Data. Payment data dictionary, Base64 encoded as a string. <br> &#10004; `header` Additional version-dependent information used to decrypt and verify the payment. <br> &#10004; `signature` Signature of the payment and header data. The signature includes the signing certificate, its intermediate CA certificate, and information about the signing algorithm. Detached PKCS #7 signature, Base64 encoded as string. <br> &#10004; `version` Specific Protocol version supported by Apple. Version information about the payment token. The token uses EC_v1 for ECC-encrypted data, and RSA_v1 for RSA-encrypted data. <br>  `applicationData` Hash of the applicationData property of the original PKPaymentRequest object. If the value of that property is nil, this key is omitted. SHA–256 hash, hex encoded as a string. <br> &#10004; `applePayMerchantId` Unique AppID registered in the Apple portal <br> &#10004; `merchantPrivateKey`  Merchant private key - Hex encoded |

The below table identifies the required parameters in the `header` object.

&#10004; denotes required fields

|Developer API|Commerce Hub|
|-------|-----|
|| `applicationDataHash`  Encrypted app data  <br> &#10004; `ephemeralPublicKey` Used to derive the actual Public Key. Ephemeral public key bytes. EC_v1 only. X.509 encoded key bytes, Base64 encoded as a string. <br> &#10004; `publicKeyHash` Hash of the X.509 encoded public key bytes of the merchant’s certificate. SHA–256 hash, Base64 encoded as a string. <br> &#10004; `transactionId` Transaction ID generated by the Apple device. A hexadecimal identifier, as a string. |

### Sample JSON Request Payload

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

Additional information on [Apple Pay Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-Web-REST.md) into Commerce Hub is available.

<!--
type: tab
-->

### Encryption Elements

The below table identifies the required parameters in the `source` object.

&#10004; denotes required fields

|Developer API|Commerce Hub|
|-------|-----|
||&#10004; `sourceType`  Value *GooglePay* is used for Google Pay request. Refer Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details.. <br> &#10004; `data` Encrypted Data. Payment data dictionary, Base64 encoded as a string. <br> &#10004; `signature` Signature of the payment and header data. The signature includes the signing certificate, its intermediate CA certificate, and information about the signing algorithm. Detached PKCS #7 signature, Base64 encoded as string. <br> &#10004; `version` Specific Protocol version supported by Apple. Version information about the payment token. The token uses EC_v1 for ECC-encrypted data, and RSA_v1 for RSA-encrypted data. <br>  `applicationData` Hash of the applicationData property of the original PKPaymentRequest object. If the value of that property is nil, this key is omitted. SHA–256 hash, hex encoded as a string. <br> &#10004; `applePayMerchantId` Unique AppID registered in the Apple portal <br> &#10004; `merchantPrivateKey`  Merchant private key - Hex encoded |

### Sample JSON Request Payload

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

Additional information on [Google Pay Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-REST.md) into Commerce Hub is available.

<!-- type: tab-end -->

<!--
type: tab
-->

### Required Fields

|Payeezy Gateway Direct|Commerce Hub|
|-------|-----|
|`transaction_type` <br> `amount` <br> `cc_number` <br> `cardholder_name` <br> `wallet_provider_id` <br> `c_expiry`<br><br><br> | Endpoint:  /payments/v1/charges <br>   `amount` object containing `total` and `currency` <br> `sourceType` Value DecryptedWallet is used for Decrypted Wallet requests. Refer to Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. <br> `card` object containing `cardData`  `expirationMonth`  and  `expirationYear`   <br>  `cavv` Cardholder Authentication Verification Value provided by the Wallet Provider <br> `xid` The unique identifier for the transaction provided by the Wallet Provider <br> `walletType` Identifies the wallet as APPLE_PAY, GOOGLE_PAY, or SAMSUNG_PAY |


### Sample JSON Request Payload

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

Additional information on using Decrypted Wallets in Commerce Hub can be found [here](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md).

<!-- type: tab-end -->

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)
- [Apple Pay Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-Web-REST.md)
- [Google Pay Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-REST.md)
- [Decrypted Wallets](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md)



---