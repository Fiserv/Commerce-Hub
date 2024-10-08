---
tags: [Account, Verification, Security Code, Address Verification Service]
---

# Account Verification

The merchant can perform account verification transaction to confirm that the customer's account is valid for a transaction. Unlike a normal $0 authorization this will not attempt an authorization on the account. The merchant can initiate the verification request using an encrypted [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md), [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md), [PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md) and [PaymentSession](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md).

<!-- theme: info -->
> The merchant can also perform an [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and/or [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification with the request by sending the customer's `billingAddress` and `securityCode`.

---

## Minimum Requirements

<!-- theme: warning -->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. To override this behavior, `createToken`:*false* is required in `transactionDetails`. Contact your account representative for more information about enabling tokenization.

---

## Endpoint

<!-- theme: success -->
> **POST** `/payments-vas/v1/accounts/verification`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Example of an account verification payload request.

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

[![Try it out](../../../../assets/images/button.png)](../api/?type=post&path=/payments-vas/v1/accounts/verification)

<!--
type: tab
-->

Example of an account verification (200: Success) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
   "gatewayResponse":{
      "transactionType": "VERIFICATION",
      "transactionState": "VERIFIED",
      "transactionProcessingDetails":{
         "transactionTimestamp": "2021-06-20T23:42:48Z",
         "orderId": "RKOrdID-525133851837",
         "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
         "clientRequestId": "4345791",
         "transactionId": "84356531338"
      }
   },
   "source":{
      "sourceType": "PaymentCard",
      "card":{
         "bin": "40055500",
         "last4": "0019",
         "scheme": "VISA",
         "expirationMonth": "10",
         "expirationYear": "2030"
      }
   },
   "processorResponseDetails":{
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "fiserv",
      "responseCode": "000000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails":{
         "associationResponseCode": "000",
         "transactionTimestamp": "2021-06-20T23:42:48Z",
      }
   },
   "transactionDetails":{
      "merchantInvoiceNumber": "123456789012"
   }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments-vas/v1/accounts/verification)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [Payment Source](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)
- [Stored Credentials](?path=docs/Resources/Guides/Stored-Credentials.md)
- [Tokenization Request](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)

---
