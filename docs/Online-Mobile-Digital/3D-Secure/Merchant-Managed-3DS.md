
# Merchant Managed 3-D Secure

---

Commerce Hub allows a merchant to pass the 3-D Secure Authentication results that were obtained externally with a thrid-party 3DS provider when sending the authorization transaction to Commerce Hub.

<!-- theme: info -->
> This feature is intended for CommerceHub Merchants who directly connect to an external 3-D Secure service provider to perform authentication outside of Commerce Hub.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry (PCI) Compliance capabilities to process and store card data.

### How it Works

1. The customer selects checkout from the merchant's website and the merchant's payment form displays.
2. The customer enters their payment informatn and is redirected to the 3DS provider.
3. The customer completes the 3DS authentication form and returns to the merchant's website.
4. The merchant's website submits the 3DS payload to Commerce Hub.
5. Commerce Hub attempts to process the transaction and sends the response to the merchant's website.

---

### Minimum Requirements

#### Object: paymentSource

| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Use value *Payment3dsPassthrough* for 3-D Secure passthrough transactions. |
| `xid` | *string* | 32 | 3-D Secure/Verified by Visa value returned by Cardinal Commerce. |
| `card` | *object* | N/A | [Card](?path=docs/Resources/Master-Data/Card.md) subcomponent objects. |
| `merchantIdentifier` | *string* | 16 | A unique ID used to identify the Merchant. The merchant must use the value assigned by the acquirer |
| `version` | *string* | 4 | Specific Protocol version supported by 3DS |
| `cavv` | *string* | N/A | The Cardholder Authentication Verification Value (CAVV) is a cryptographic value derived by the issuer during payment authentication that can provide evidence of the results of payment authentication during an online purchase. |

#### Object: transactionDetails
| Variable | Type | Length | Description/Values |
| -------- | :--: | :------------: | ------------------ |
| `eciIndicator` | *string* | 4 | [Electronic Commerce Indicator (ECI)](?path=docs/Resources/Master-Data/Transaction-Interaction.md)(#electroniccommerceindicators). |
  

---

### Payload Example

<!--
type: tab
titles: Request
-->

```json
{
  "source": {
      "sourceType": "Payment3DS",
  },
    "card": {
      "cardData": "4005550000000019",
      "expirationMonth": "02",
      "expirationYear": "2035",
      "securityCode": "123"
    },
    "channel": "ANDROID",
    "merchantIdentifier": "1234567890123456",
    "version": "3DS2",
    "cavv": "AAABCZIhcQAAAABZlyFxAAAAAAA",
    "xid": "&x_MD5_Hash=abfaf1d1df004e3c27d5d2e05929b529&x_state=BC&x_reference_3=&x_auth_code=ET141870&x_fp_timestamp=1231877695"
    "transactionInteraction": {
      "eciIndicator": "SECURE_ECOM",
    }
}
```

<!-- type: tab-end -->

---

## See Also
- API Explorer
- 
