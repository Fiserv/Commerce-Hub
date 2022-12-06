---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present]
---

# 3-D Secure - Secure Data Capture Integration

Commerce Hub's Secure Data Capture is designed to work seemlessly with our 3-D Secure (3DS) authentication provider. This eliminates the need to manually integrate with the provider's API and increases PCI security. The iFrame or Javascript SDK handles the data collection and storage to send to the 3DS provider.

## Step 1: Authentication

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request with `authentication3DS` *true* in the `transactionDetails` object is required to inform Commerce Hub the transaction will require 3DS authentication.

The credential request is also needed to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the Secure Data Capture request and `sessionId` required in the subsequent request.


---

## Step 2: Configuration

Follow the confguration requirements depending on the Secure Data Capture integration type; [iFrame](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md#step-2-configuration) or [JavaScript](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Request.md#step-2-configuration).

---

## Step 3: Submit Request

Submit a request after a successful response which identifies the card and device data was captured in Commerce Hub. The request will use the payment `sourceType` of `PaymentSession` and the `sessionId` from the [credentials](#step-1-authentication) request.

<!-- theme: info -->
>If a successful response is not received, best practice is to still submit the transaction. If an error occurs, the iFrame will need to be re-displayed so the customer can re-submit their payment information.

Based on the merchant's API design requirements the order of submitting a request to Commerce Hub can change.

- **Authentication before Charges, Tokenization, or Verification:** By submitting to the authentication endpoint Commerce Hub will route to the 3DS provider to have the customer perform authentication and possible challenge before submitting the `PaymentSession` for a subsequent request.
- **Tokenization before Authentication:** If the transaction processing is not going to occur realtime it is recommended to perform a [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request with the `PaymentSession` to obtain a `PaymentToken` that can be used in a subsequent authentication request.
- **Account Verification before Authentication:** Submitting to the [account verification](?path=docs/Resources/API-Documents/Payments_VAS/Verification.md) endpoint allows a merchant to perform [address](?path=docs/Resources/Guides/Fraud/Address-Verification.md) and/or [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) verification prior to submitting an authentication request.

### Endpoint

<!-- theme: success -->
>**POST** `/3ds/v1/authentication`


### Payload Example

<!-- theme: info -->
> Additional fields can be submitted as part of the request call. Additional fields can be found in the [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

##### Example of an authentication payload request.

<!-- theme: info -->
> If tokenization was performed prior to authentication, the payment `sourceType` will be `PaymentToken` along with the [required fields](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md#paymenttoken-request) instead of `PaymentSession`.

```json
{

}
```


<!--
type: tab
-->

##### Example of an authentication (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json

{

}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)

---

