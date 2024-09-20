---
tags: [Online, Card Not Present, Checkout]
---

# Checkout - API integration guide

Commerce Hub allows merchants to manage the design and payment entry form of their website or mobile app for accepting [online, digital and mobile transactions](?path=docs/Getting-Started/Getting-Started-Online.md). The merchant handles encrypting the data from their form and makes a direct API call with the payment information to Commerce Hub's [Data Capture API](#step-3-submit-a-capture-api-request) service to store the data. The merchant website can then pass the `sessionId` received as part of the [security credentials request](#step-1-acquire-credentials) in a [Charges, Tokens, or Verification API request](#step-4-submit-an-api-request) with the `sourceType` as *PaymentSession*.

**API interactions:**

- **Credentials:** responsible for creating a payment `sessionId`, `accessToken`, and encryption keys.
- **Capture:** responsible for capturing the encrypted payment details and linking them to the *PaymentSession*.
- **Charges:** responsible for decrypting the captured payment details and then authorizing the payment based on the *PaymentSession*.
- **Tokens:** responsible for decrypting the captured payment details and then generating a token based on the *PaymentSession*.
- **Verification:** responsible for decrypting the captured payment details and performing a verification request on the *PaymentSession*.

<!-- theme: info -->
> A `sessionId` is a nonce token obtained from a security credentials request. It is used as the *PaymentSession* in [Checkout integrations](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md) to submit a transaction to our application. The `sessionId` expires once it goes out to the processor or after 30 minutes of it's generation, whichever comes first.

---

## Step 1: Acquire credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request is required to obtain the client `asymmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, `keyId`, and `publicKey`. These will be used to create the [encryption data](#step-2-encrypt-the-payment-data) required in the offline payment request and `sessionId` required in the [charges or tokens request](#step-4-submit-an-api-request).

---

## Step 2: Encrypt the payment data

The payment data is encrypted using Base64 RSA Multi-Use Public Key. Once [encryption](?path=docs/Online-Mobile-Digital/Checkout/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md) is performed, the `encryptionBlock` and `encryptionBlockFields` are used in the [capture request](#step-3-submit-a-capture-api-request).

<!-- theme: info -->
> Commerce Hub supports encrypting `securityCode` data only when processing a [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) payment instrument such as a [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or an encrypted [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md). This process enhances security and serves validation purposes.

---

## Step 3: Build the message digest

To ensure data integrity, prevent replay attacks, and eliminate stale requests, the message digest is required as part of the [header](?path=docs/Resources/API-Documents/Message-Digest.md).

---

## Step 3: Submit a Data Capture API request

The encrypted data is securely submitted to Commerce Hub in a [Data Capture API request](?path=docs/Online-Mobile-Digital/Checkout/API/Card-Capture.md), where it is persisted and linked to the `sessionId` generated in the [credentials request](#step-1-acquire-credentials).

<!-- theme: warning -->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. If a multi-use token is required the [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) must be submitted in the request. To override this behavior, `createToken`: *false* is required in `transactionDetails`.

---

## Step 4: Submit an API request

Submit a [Charges API request](?path=docs/Resources/API-Documents/Payments/Charges.md), [Tokens API request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or a [Verification API request](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) after a successful response that identifies the payment data is captured in Commerce Hub. The request will use the payment `sourceType` of *PaymentSession* and the `sessionId` from the [credentials request](#step-1-acquire-credentials).

<!--
type: tab
titles: Request, Response
-->

The example below contains the minimum parameters for a successful Charges API request using a *PaymentSession*. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!-- theme: success -->
> **POST** `/payments/v1/charges`

```json
{
  "amount": {
    "total": 12.04,
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentSession",
    "sessionId": "df8c33d2-af27-4a3a-b7a0-61d4edf09cad"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
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

Example of a charges (201: Created) response.

<!-- theme: info -->
> See [response handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentSession",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  }
}
```

<!-- type: tab-end -->

---

## Additional security settings

The following security settings are recommended to limit the potential for fraudulent activity on your Commerce Hub integration.

- Enable Captcha as an available component
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

## See also

- [API explorer](../api/?type=post&path=/payments-vas/v1/card-capture)
- [Checkout Solutions](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [Create an authentication header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Create a message digest](?path=docs/Resources/API-Documents/Message-Digest.md)
- [Credentials API request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Multi-Use Public Key encryption](?path=docs/Online-Mobile-Digital/Checkout/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md)

---
