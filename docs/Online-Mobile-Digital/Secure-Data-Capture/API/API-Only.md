---
tags: [Online, Card Not Present, Secure Data Capture]
---

# Secure Data Capture - API Only Integration Guide

Commerce Hub allows E-commerce merchants to manage the design and card entry form of their website or mobile app _(unlike Hosted Payment Page and [iFrame](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) solutions)_. The merchant handles encrypting the data from their form and makes a direct API call with the payment information to Commerce Hub's [card capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/Card-Capture.md) service to store the data. The merchant website can then pass the `sessionId` received as part of the security credentials request in a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [tokens](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) request with the `sourceType` _PaymentSession_.

- **credentials:** responsible for creating a payment session.
- **card-capture:** responsible for capturing encrypted card details.
- **charges:** responsible for decrypting captured card details and then charging based on a payment session.
- **tokens:** responsible for decrypting captured card details and then generating a token based on a payment session.

---

## Step 1: Acquire Credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request is required to obtain the client `asymmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, `keyId`, and `publicKey`. These will be used to create the [encryption data](#step-2-encryption) required in the offline payment request and `sessionId` required in the [charges or tokens request](#step-4-submit-request).

---

## Step 2: Encrypt Card Data

The card data is encrypted using Base64 RSA Multi-Use Public Key. Once [encryption](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md) is performed, the `encryptionBlock` and `encryptionBlockFields` are used in the card capture request.

<!-- theme: info -->
> Commerce Hub supports encrypting `securityCode` data only when processing a [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) payment instrument such as a [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or an encrypted [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md. This process enhances security and serves validation purposes.

---

## Step 3: Build Message Digest

To ensure data integrity, prevent replay attacks, and eliminate stale requests, the message digest is required as part of the [header](?path=docs/Resources/API-Documents/Message-Digest.md).

---

## Step 3: Submit Card Capture Request

The encrypted data is securely submitted to Commerce Hub's in a [card capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/API/Card-Capture.md) request, where it is persisted and linked to the `sessionId` generated in step 1.

<!-- theme: warning -->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. If a multi-use token is required the [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) must be submitted in the request. To override this behavior, `createToken`: _false_ is required in `transactionDetails`.

---

## Step 4: Submit a Request

Submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md), [tokens](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) or [verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) request after a successful response that identifies the card data is captured in Commerce Hub. The request will use the payment `sourceType` of `PaymentSession` and the `sessionId` from the [credentials](#step-1-authentication) request.

### Charges Payload Example

The example below contains the mandatory fields required for a successful charge request. The full request schemas are available in our [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

Example of a charges payload request.

```json
{
  "amount": {
    "total": "12.04",
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
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

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

## Additional Security Settings

The following security settings are recommended to limit the potential for fraudulent activity on your Commerce Hub integration.

### Recommendations

- Enable Re-Captcha
- Authentication/Login requirement to access the payment page
- Limit response back to the browser/customer
- Follow [fraud best practices](?path=docs/Resources/Guides/Fraud/Fraud-Settings.md) for the business type or payment flow

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/card-capture)
- [RESTful API Guide](?path=docs/Resources/API-Documents/Use-Our-APIs.md)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Multi-Use Public Key Encryption](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Multi-Use-Public-Key/Multi-Use-Public-Key-Encryption.md)
- [Message Digest](?path=docs/Resources/API-Documents/Message-Digest.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
