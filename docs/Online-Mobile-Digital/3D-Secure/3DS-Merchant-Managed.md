---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, API]
---

# 3-D Secure - Merchant Managed API Integration

Commerce Hub's API is designed to work seamlessly with third-party 3-D Secure (3DS) authentication providers. This allows the 3DS authentication details that were completed by a third-party provider to be passed in the request. The merchant handles the data collection and storage of the customer's data to send to the 3DS provider.

---

## Step 1: Obtain PaymentSource

Obtain the customer's [paymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md), [paymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), or [paymentSession](?path+docs/Online-Mobile-Digital/Checkout/API/API-Only.md) based on the integration method.

---

## Step 2: Submit Authentication Request

Submit the authentication request with your third-party 3DS Secure provider to obtain the required `additonalData3DS`parameters.

---

## Step 3: Submit Transaction Request

After authentication has been completed with the 3DS provider, [submit a charges, tokenization, or verification request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Request.md) based on the requirements.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)

---
