---
tags: [Network Token, Online, Web, Mobile, Card Not Present, Payment Source]
---

# Network Token - Merchant Managed

Commerce Hub allows a merchant to pass a merchant managed Network Token results that were obtained through a Commerce Hub or a third-party 3-D Secure provider when sending a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request. The [payment source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) _PaymentCard_ and _PaymentToken_ or [reference transaction identifier](#request-with-reference-identifier) is used by the merchant as  when sending the transaction to Commerce Hub, along with the 3DS response data.

<!-- theme: warning -->
> Merchants are required to have the relevant Payment Card Industry _(PCI)_ Compliance capabilities to process and store card data.

---

## Parameters

### Request Variables

<!--
type: tab
titles: source, encryptionData
-->

The below table identifies the parameters in the `source` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | _string_ | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are _PaymentSession_, _PaymentCard_, or _PaymentToken_ |
| `tokenData` | _string_ | 2048 | Token created from the payment source |
| `tokenSource` | _string_ | 256 | Source for the Token Service Provider (TSP). |
| `cryptogram` | _string_ | 256 | Cryptographic value that is sent by the merchant during payment authentication |
| `tokenRequestid` | _string_ | 256 | Token Requestor ID, an identifier used by merchants to request network tokens from the card networks. |
| `tokenAssuranceMethod` | _string_ | 256 | Token Assurance Method will be returned back to merchants in auth response. |

<!--
type: tab
-->

The below table identifies the parameters in the `encryptionData` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | -------------------------------|
| `encryptionType` | _string_ | 256 | [Encryption type](#encryption-type) to be passed. |
| `encryptionTarget` | _string_ | 256 | [Encryption target](#encryption-target) identifies the data based on how it is entered into the POS device or terminal, website, virtual terminal (VPOS), or mobile app or device. |
| `encryptionBlock` | _string_ | 2000 | This field contains the track data or card number provided in encrypted form. |
| `keyId` | _string_ | 40 | Provided encryption key required for decryption of data that is encrypted. This field must be submitted for encryption request messages sending manual PAN, Track 1, or Track 2 data that is encrypted. |
| `encryptionBlockFields` | _string_ | 256 | Encryption block field descriptors to facilitate decryption when using [multi-use public key encryption](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key.md). Each field should recorded the form field_name:byte_count e.g. card.expirationMonth:2 |

<!--
type: tab
-->

The below table identifies the parameters in the `transactionDetails` object.

| Variable | Type | Maximum Length | Description |
| -------- | ---- | ------- | ------------------ |
| `merchantTransactionId` | _sting_ | 128 | Merchant transaction ID (aka transaction reference ID). |
| `merchantOrderId` | _string_ | 128 | Merchant order ID (aka customer reference number or purchase order (PO) number).|
| `primaryTransactionType` | _string_ | 32 | Identifies the primary transaction type |
| `tokenProvider` | _string_ | 256 | Source for the Token Service Provider (TSP) |

---

### Request Types

After authentication has been completed with the 3DS provider, submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), or [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) request based on the requirements.

---

### Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of charges payload request with Network Token

```json

```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments/v1/charges)

<!--
type: tab
-->

Example of a charges (201: Created) response

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json


```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Additional Data 3DS](?path=docs/Resources/Master-Data/Additional-Data-3DS.md)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Payment Sources](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
