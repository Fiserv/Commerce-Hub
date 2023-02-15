---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, mobile-wallets, decrypted-wallets, apple-pay, google-pay]

---

# Decrypted Wallets

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

### Required Fields

|Payeezy Gateway Direct|Commerce Hub|
|-------|-----|
|`transaction_type` | Endpoint:  /payments/v1/charges <br> `sourceType`= DecryptedWallet <br> Refer to Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details.|
|`wallet_provider_id`|`walletType` Identifies the wallet as APPLE_PAY, GOOGLE_PAY, or SAMSUNG_PAY|
|`amount`|  `amount` object containing `total` and `currency`|
|`cc_number` <br> `cardholder_name`<br> `c_expiry`|`card` object containing `cardData`  `expirationMonth`  and  `expirationYear`|
|| `cavv` Cardholder Authentication Verification Value provided by the Wallet Provider|
||`xid` The unique identifier for the transaction provided by the Wallet Provider  |


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

---

## See Also

- [Payeezy Merchant Upgrade to Commerce Hub Playbook](?path=docs/Resources/Guides/Payeezy/PayeezyUpgradetoCHGuideLandingPage.md)
- [CH Overview](?path=docs/Getting-Started/Getting-Started-General.md)
- [Apple Pay Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-Web-REST.md)
- [Google Pay Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay-Web-REST.md)
- [Decrypted Wallets](?path=docs/Resources/Guides/Payment-Sources/Decrypted-Wallet.md)
