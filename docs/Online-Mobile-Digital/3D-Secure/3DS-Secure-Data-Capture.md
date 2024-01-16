---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, Secure Data Capture]
---

# 3-D Secure - Commerce Hub Managed Secure Data Capture Integration

Commerce Hub's Secure Data Capture is designed to work seamlessly with our 3-D Secure (3DS) authentication provider. This eliminates the need to manually integrate with the provider's API and increases PCI security. The [iFrame](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md) or [JavaScript SDK](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md) handles the data collection and storage of the customer's data to send to the 3DS provider.

## Transaction Flow

1. The customer navigates to checkout page of the merchant's website.
2. The customer's browser loads the Commerce Hub iFrame or JS SDK.
3. The Commerce Hub builds and renders an a card form that allows the customer to initiate the payment session.
4. The customer's details are entered and stored against a session ID within Commerce Hub on form submit.
5. Upon successful card capture, Commerce Hub will initiate a device capture with the 3DS provider.
6. Upon successful device capture, the merchant's website will attempt an authentication call via the merchant's backend server.
7. Upon successful authentication, the merchant's website will attempt to process the transaction via the merchant's backend server.
8. Commerce Hub sends the transaction response to the merchant's website.

---

## Step 1: Acquire Credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request with `authentication3DS` *true* in the `transactionDetails` object is required to inform Commerce Hub the transaction will require 3DS authentication.

The credential request is also needed to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the Secure Data Capture request and `sessionId` required in the subsequent request.

---

## Step 2: Configure iFrame or JS

Follow the configuration requirements depending on the Secure Data Capture integration type; [iFrame](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-Request.md#step-2-configuration) or [JavaScript](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Request.md#step-2-configuration).

The iFrame or JS form will capture the customer card and device information to be used in the 3DS authentication and used for the subsequent charges or tokenization transaction.

---

## Step 3: Submit Authentication Request

Submit the [authentication request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md) with Commerce Hub to initialize authentication with the 3DS provider.

---

## Step 4: Submit Transaction Request

After authentication has been completed with the 3DS provider, [submit a charges, tokenization, or verification request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Request.md) based on the requirements.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)

---
