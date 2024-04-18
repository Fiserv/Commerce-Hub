---
tags: [Currency Conversion, Dynamic Currency Conversion, BIN, Global Currency]
---

# Dynamic Currency Conversion - Rate Request by Issuer

Commerce Hub's DCC allows a merchant to obtain the issuing bank's rate by submitting the `bin` information in the request.

---

## Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/gift-cards`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of a DCC rate payload request.

```json
{

}
```

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/gift-cards)

<!--
type: tab
-->

Example of a DCC rate (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{

}
```

<!-- type: tab-end -->

## Parameters

### Request

<!--
type: tab
titles: referenceTransactionDetails
-->

The below table identifies the available parameters in the `referenceTransactionDetails` object.

| Variable | Data Type| Maximum Length |Description |
|---------|----------|----------------|---------|
|`referenceTransactionId` | *string* | 40 | Commerce Hub generated `transactionId` from the original transaction. |
|`referenceMerchantTransactionId` | *string* | 128 | [Merchant/client generated](?path=docs/Resources/Guides/BYOID.md) `merchantTransactionId` from the original transaction. |

<!-- type: tab-end -->

---

## Response

<!--
type: tab
titles: target
-->

The below table identifies the parameters in the `target` object.

| Variable | Type | Maximum Length | Description |
| -------- | :--: | :------------: | ------------------ |
| `sourceType` | *string* | 15 | Payment [source types](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) supported are *PaymentSession*, *PaymentCard*, or *PaymentToken* |

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/currencies/dcc)
- [Rate Request by Currency](?path=docs/Resources/Guides/Global-Currency/DCC-Currency-Rate-Request.md)
- [DCC Charges Request](?path=docs/Resources/Guides/Global-Currency/DCC-Charge-Request.md)

---
