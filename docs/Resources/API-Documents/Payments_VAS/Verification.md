---
tags: [Account, Verification, Security Code, Address Verrification Service]
---

# Account Verification

The merchant can perform account verification transaction to confirm that the customer's account is valid for a transaction. Unlike a normal $0 auth this will not attempt an authorization on the account. The merchant can initiate the verification request using an encrypted payment card, payment token, payment track and payment emv.

<!-- theme: info -->
> The merchant can also perform an [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and/or [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification with the request by sending the customer's `billingAddress` and `securityCode`.

<!-- theme: info -->
> CH will initiate a reversal use case when the provider requests account verification from Chargeafter as the Account Verification request is for 1$.
Encryption types supported - RSA, On-Guard

<!-- theme: warning -->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. To override this behavior, `createToken`_:false_ is required in `transactionDetails`. Contact your account representative for more information about enabling tokenization.

<!-- theme: info -->
>For Account Verification, merchant is expected to pass request payload as they would for a ‘[Charges](?path=docs/Resources/API-Documents/Payments/Charges.md)’ trn based on the front end.

## Supported Payment source type for transaction request

- [PaymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [PaymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md)
- [PaymentEMV](?path=docs/In-Person/Encrypted-Payments/EMV.md)
- [PaymentTrack](?path=docs/In-Person/Encrypted-Payments/Track.md)

## Front ends and transaction sources supported

USA - POS, ECOM, MOTO
- HD Supply
- Chargeafter
- Fiserv (Nashville)
- Chase
- Citi

CANADA – POS, ECOM, MOTO
- Citi

---

## Minimum Requirements

<!-- theme: warning -->
> If the merchant account is enabled for a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) service, `paymentTokens` will be returned in the response. If a multi-use token is required the [stored credentials](?path=docs/Resources/Guides/Stored-Credentials.md) must be submitted in the request. To override this behaviour, `createToken`_:false_ is required in `transactionDetails`.

---

## Endpoint

<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/verification`

---

## Payload Example

<!--
type: tab
titles: Request, Response
-->

Account verification request using PaymentTrack.

```json
{
   "source":{
      "sourceType":"PaymentCard",
      "card":{
         "cardData":"4005550000000019",
         "expirationMonth":"02",
         "expirationYear":"2035"
      }
   },
   "merchantDetails":{
      "merchantId": "123456789789567",
      "terminalId": "123456"
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

## Account Verifcation Response

| Processor | Payment Card | PaymentToken (Transarmor token only) | PaymentEMV | PaymentTrack |
|---------|--------------|------------|-----------|------------|
| HD Supply  | Y | Y | N | Y |
| Chargeafter| Y | Y | N | Y |
| Nashville  | Y | Y | Y | Y |
| Chase | Y | Y | Y | Y |
| Citi | Y | Y | Y | Y |

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
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
