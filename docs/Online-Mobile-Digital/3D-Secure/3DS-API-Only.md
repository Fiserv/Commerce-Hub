---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, API]
---

# 3-D Secure - API Integration

Commerce Hub's API is designed to work seemlessly with our 3-D Secure (3DS) authentication provider. This eliminates the need to manually integrate with the provider's API and increases PCI security. Using our APIs allows more flexiblity in merchant website designed compared to using the [iFrame or JavaScript integration](path?=docs/Online-Mobile-Digital/3D-Secure/3DS-Secure-Data-Capture.md). The merchant handles the data collection and storage of the customer's data to sent to the 3DS provider.

---

## Step 1: Obtain PaymentSource

Obtain the customer's [paymentCard](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md), [paymentToken](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md), or [paymentSession](?path+docs/Online-Mobile-Digital/Secure-Data-Capture/API/API-Only.md) based on the integration method. 

---

## Step 2: Submit Device Data Capture Request

Obtain the customer's broswer data using Commerce Hub or the 3DS provider's [device data capture](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Device-Capture.md). 

---

## Step 3: Submit Authentication Request

Submit the [authentication request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md) with Commerce Hub to intilizaze authentication with the 3DS provider. 

---

## Step 4: Submit Transaction Request

After authentication has been completed with the 3DS provider, submit a charges, tokenization, or verification request based on the requirements. 

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)

---
