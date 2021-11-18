---
tags: [carat, commerce-hub, enterprise, 3-d-secure, pass-through, 3-d-secure-authentication, visa-secure, verified-by-visa, securecode, protectbuy, jsecure, safekey]
---

# 3-D Secure

<!-- theme: danger -->
> We are enhancing Commerce Hub to include 3-D Secure support and the documents related to the features will be released soon.

Commerce Hub supports [3-D Secure](?path=docs/Resources/FAQs-Glossary/Glossary.md#3-d-secure) transactions from a either a merchant 3DS service or through Commerce Hub's 3DS Authentication service. Merchants can submit this data as either a [passthrough](#passthrough) or a [authentication](#authentication) request.

---

## Passthrough

When using our payments API with passthrough, the authentication is performed with the merchant's 3DS provider, and will send the response from 3DS as the source type Payment3dsPassthrough the charge request.

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
title: Request
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

## Authentication

When using our payments API as the 3-D Secure provider, the authentication is performed in-line with the existing transaction flow. The process starts by performing a typical authorization or sale request with a desire to perform 3-D Secure authentication in the request.

### Minimum Requirements

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)