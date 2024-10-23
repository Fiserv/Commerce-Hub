---
tags: [Online, Card Not Present, Checkout]
---

# Collect secure payment data with the Data Capture API

Commerce Hub allows a [payment instrument](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md) *(PaymentCard and PaymentCheck)* to be securely submitted to Commerce Hub using API-key validation, where it is persisted and linked to a `sessionId` generated from a [Credentials API request](?path=docs/Resources/API-Documents/Security/Credentials.md).

<!-- theme: info -->
> A `sessionId` is a nonce token obtained from a security credentials request. It is used as the *PaymentSession* in [Checkout integrations](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) to submit a transaction to our application. The `sessionId` expires once it goes out to the processor or after 30 minutes of it's generation, whichever comes first.

---

**Key benefits:**

- **Easy and secure management:** Processing using our Data Capture API provides merchants with a straightforward and secure method to manage and encrypt card and check payment data on their website.
- **Simplified submission:** Commerce Hub simplifies the submission of payment information without the need to collect, process, or view payment details in their non-tokenized form.
- **Reduced PCI Compliance requirements:** By not handling non-tokenized payment data, merchants can lower their PCI compliance requirements.

---

## Capture payment details

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum parameters for a successful Data Capture API request using a *PaymentCard*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments-vas/v1/card-capture).

<!-- theme: success -->
> **POST** `/payments-vas/v1/card-capture`

```json
{
  "source": {
    "sourceType": "PaymentCard",
    "encryptionData": {
      "encryptionType": "RSA",
      "encryptionTarget": "MANUAL",
      "encryptionBlock": "=s3ZmiL1SSZC8QyBpj/Wn+VwpLDgp41IwstEHQS8u4EQJ....",
      "encryptionBlockFields": "card.cardData:16,card.nameOnCard:10,card.expirationMonth:2,card.expirationYear:4,card.securityCode:3",
      "keyId": "88000000022"
    }
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "10000001"
  }
}
```

<!--
type: tab
-->

Example of a Data Capture API *(200: Success)* response.

<!-- theme: info -->
> See [response handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "TOKENIZE",
    "transactionState": "AUTHORIZED",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2024-03-12T18:15:39.710423262Z",
      "apiTraceId": "755f19915f284309bd28250124620ef5",
      "clientRequestId": "681a5623eceb7b521e6a3bd520b70915",
      "transactionId": "755f19915f284309bd28250124620ef5"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request variables

<!-- theme:info -->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. To override this behavior, `createToken`: *false* is required in `transactionDetails`. Contact your account representative for more information about enabling tokenization.

<!--
type: tab
titles: source, encryptionData
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | --------| ---------- |
| `sourceType` | *string* | 15 |  &#10004; | Use *[PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)* for card transactions or *[PaymentCheck](?path=docs/Resources/Guides/Payment-Sources/Pay-By-Bank/Payment-Check.md)* for check transactions. |
| `encryptionData` | *object* | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `encryptionType` | *string* | 256 |  &#10004; | Encryption type is *RSA* when using [Multi-Use Public Key](?path=docs/Online-Mobile-Digital/Checkout/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md). |
| `encryptionTarget` | *string* | 256 |  &#10004; | Target is *MANUAL* when a customer card details are manually entered into a terminal or device, or when a customer manually enters their card details online or in an app. |
| `encryptionBlock` | *string* | 2000 |  &#10004; | This field contains the card details in encrypted form. |
| `encryptionBlockFields` | *string* | 256 |  &#10004; | Encryption block field descriptors to facilitate decryption when using public keys. Each field should be recorded in the form of the object.field_name:byte_count, for example: card.expirationMonth:2. |
| `keyId` | *string* | 64 | &#10004; | Provided encryption key required for decryption of track data that is encrypted. |

<!-- type: tab-end -->

---

## Additional security settings

The following security settings are recommended to limit the potential for fraudulent activity on your Commerce Hub integration.

- Enable Captcha as an available component
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

## See Also

- [API explorer](../api/?type=post&path=/payments-vas/v1/card-capture)
- [Checkout Solutions](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [Create an authentication header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Create a message digest](?path=docs/Resources/API-Documents/Message-Digest.md)
- [Credentials API request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Multi-Use Public Key encryption](?path=docs/Online-Mobile-Digital/Checkout/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md)

---
