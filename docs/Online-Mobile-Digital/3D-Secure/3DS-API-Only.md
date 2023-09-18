---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, API]
---

# 3-D Secure - API Integration

Description......

---

## Step 1: Obtain PaymentSource

---

## Step 2: Submit Device Data Capture Request

---

## Step 3: Submit Authentication Request

Submit a [Authentication request](?path=docs/Online-Mobile-Digital/3D-Secure/3DS-Authentication.md) after a successful response which identifies the card and device data was captured in Commerce Hub. The request will use the payment sourceType of PaymentSession/PaymentCard/PaymentToken and the sessionId from the credentials request. 

---

## Step 4: Submit Transaction Request

After authentication has been completed with the 3DS provider, submit a charges, tokenization, or verification request as mentioned in Submit 3DS Request, with the following difference:
Pass the following in lieu of the source, amount, and additionalData3DS elements:

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)

---
