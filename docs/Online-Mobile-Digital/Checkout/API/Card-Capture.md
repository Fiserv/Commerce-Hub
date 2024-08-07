---
tags: [Online, Card Not Present, Checkout]
---

# Checkout - Card Capture

Commerce Hub allows a payment instrument to be securely submitted to Commerce Hub using API-key validation, where it is persisted and linked to the `sessionId` generated from the [credentials request](?path=docs/Resources/API-Documents/Security/Credentials.md).

<!-- theme: info -->
> A `sessionId` is a nonce token obtained from a security credentials request. It is used as the _PaymentSession_ in [Checkout integrations](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) to submit a transaction to our application. The `sessionId` expires once it goes out to the processor or after 30 minutes of it's generation, whichever comes first.

Checkout using card capture provides a merchant with an easy and secure way to manage and encrypt the payment data on their website. Commerce Hub makes it simple to submit the payment information without collecting, processing, or being able to view those payment details in their non-tokenized form, lowering the PCI compliance requirements.

---

## Card Capture

<!--
type: tab
titles: Request, Response
-->

<!-- theme: success -->
> **POST** `/payments-vas/v1/card-capture`

Example of a card capture payload request using PaymentCard for Checkout.

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

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/card-capture)

<!--
type: tab
-->

Example of a card capture (200: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  }
}
```

<!-- type: tab-end -->

---

## Parameters

### Request Variables

<!-- theme:info -->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. To override this behavior, `createToken`: _false_ is required in `transactionDetails`. Contact your account representative for more information about enabling tokenization.

<!--
type: tab
titles: source, encryptionData
-->

The below table identifies the required parameters in the `source` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | --------| ---------- |
| `sourceType` | _string_ | 15 |  &#10004; | Use _PaymentCard_ for card transactions |
| `encryptionData` | _object_ | N/A | &#10004; | Contains the [encrypted payment details](?path=docs/Resources/Master-Data/Encryption-Data.md) |

<!--
type: tab
-->

The below table identifies the required parameters in the `encryptionData` object.

| Variable | Type | Length | Required | Description |
| -------- | -- | ------------ | ---------| --------- |
| `encryptionType` | _string_ | 256 |  &#10004; | Encryption type is _RSA_ when using [Multi-Use Public Key](?path=docs/Online-Mobile-Digital/Checkout/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md). |
| `encryptionTarget` | _string_ | 256 |  &#10004; | Target is _MANUAL_ when a customer card details are manually entered into a terminal or device, or when a customer manually enters their card details online or in an app. |
| `encryptionBlock` | _string_ | 2000 |  &#10004; | This field contains the card details in encrypted form. |
| `encryptionBlockFields` | _string_ | 256 |  &#10004; | Encryption block field descriptors to facilitate decryption when using public keys. Each field should be recorded in the form of the object.field_name:byte_count, for example: card.expirationMonth:2. |
| `keyId` | _string_ | 64 | &#10004; | Provided encryption key required for decryption of track data that is encrypted. |

<!-- type: tab-end -->

---

## Additional Security Settings

The following security settings are recommended to limit the potential for fraudulent activity on your Commerce Hub integration.

#### Recommendations

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/card-capture)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Multi-Use Public Key Encryption](?path=docs/Online-Mobile-Digital/Checkout/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md)
- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)

---
