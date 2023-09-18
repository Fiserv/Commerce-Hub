---
tags: [3-D-Secure, Online, Web, Mobile, Card Not Present, API]
---

# 3-D Secure - API Integration

A credentials request is required to obtain the client accessToken, sessionId, publicKey and additional 3DS details.These will be used to create the authorization constant required in the iFrame request and sessionId required in the charges or tokens request.

As an opt-in feature, 3DS authentication can be enabled when creating the credentials by setting the transactionDetails.authentication3DS to true. This flag can, at the merchant discretion, be set to false to skip 3DS authentication before submitting a charges or tokens request. For example, a merchant may decide to proceed with a non-3DS transaction if device data collection has failed. Please refer to Skipping 3DS Authentication for more information on skipping 3DS authentication. 

---

## Step 1: Obtain PaymentSource

The device data initialization request supports paymentCard, paymentToken, and paymentSession. 

---

## Step 2: Submit Device Data Capture Request

Submit a [Device Data Capture Request](Device-Data-Capture-Request) after a successful response which identifies the card and device data was captured in Commerce Hub. The request will use the payment sourceType of PaymentSession/PaymentCard/PaymentToken and the sessionId from the credentials request. 

---

## Step 3: Submit Authentication Request

Submit a [Authentication request](Authentication-request) after a successful response which identifies the card and device data was captured in Commerce Hub. The request will use the payment sourceType of PaymentSession/PaymentCard/PaymentToken and the sessionId from the credentials request. 

---

## Step 4: Submit Transaction Request

After authentication has been completed with the 3DS provider, submit a charges, tokenization, or verification request as mentioned in Submit 3DS Request, with the following difference:
Pass the following in lieu of the source, amount, and additionalData3DS elements:

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [3-D Secure](?path=docs/Online-Mobile-Digital/3D-Secure/3DSecure.md)

---
