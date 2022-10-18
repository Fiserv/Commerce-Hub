---

tags: [carat, commerce-hub, enterprise, card-not-present, payeezy, quick-keys, batch-upload]

---

# Mobile Wallets

<!-- theme: danger -->
>  The following documentation is only for **Payeezy** merchants that are upgrading to Commerce Hub. See [Getting Started](?path=docs/Getting-Started/Getting-Started-General.md) for Commerce Hub integration options.

Wallet transactions originate from a digital wallet either from a website or on a device (e.g. Apple/iOS, Google/Android, and Samsung). Merchants can submit this data as either an encrypted or a decrypted request.

- **Encrypted Wallet:** The merchant will send the encrypted data along with their private key and Commerce Hub will decrypt the information for processing.
- **Decrypted Wallet:** The merchant will decrypt the wallet data before submitting to Commerce Hub for processing.

**Do we want to call this out?**
> :memo: **Note:** Merchants using the **Payeezy Gateway Direct (PGW)** platform and **/api.globalgatewaye4.firstdata.com** URL, now have the opportunity to utilize Commerce Hub's decryption capabilities.


<!--type: tab
titles: Encrypted Wallet, Decrypted Wallet
-->



<!--
type: tab
-->

### Required Fields

|Payeezy Gateway Direct|Commerce Hub|
|-------|-----|
|`transaction_type` <br> `amount` <br> `cc_number` <br> `cardholder_name` <br> `wallet_provider_id` <br> `c_expiry`<br><br><br><br><br> | Endpoint:  /payments/v1/charges <br> `sourceType` Value DecryptedWallet is used for Decrypted Wallet requests. Refer to Payment [source type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) for more details. <br> `card` object Decrypted card details <br> `cardData` Card number or encrypted data <br> `expirationMonth` 2-digit expiration month <br> `expirationYear` 4-digit expiration year <br> `cavv` Cardholder Authentication Verification Value provided by the Wallet Provider <br> `xid` The unique identifier for the transaction provided by the Wallet Provider <br> `walletType` Identifies the wallet as APPLE_PAY, GOOGLE_PAY, or SAMSUNG_PAY |


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



---
