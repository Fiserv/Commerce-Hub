# Capture

If you have used the transaction type Pre-Authorization when your customer checked out in your webshop, funds have been reserved on the customer's card account but have not been transferred to your account yet.
In order to complete a transaction and initiate the settlement process, you will need to send a Post-Authorization (postauth) via our API.
---
## How to Initiate
To capture payments, you can use either:   

**Automatic capture** – The capture is initiated automatically after default set time period. In case you wish to initiate the Capture in specific days, you may specify a delay between authorisation and automatic capture.

**Manual capture** – Manually Capture each pre-authorization.

---

## Automatic Capture

The Automatic Capture Configuration steps to follow here

---

## Manual Capture

The Steps to initiate Capture transactions will come here

---

## Capture a Payment

Payments can be captured using order id or transaction id

**Order id** :- The description of order id.
![](../../../assets/images/capturetranid.JPG)



**Transaction id**:- Gateway transaction identifier returned in the parameter gatewayTransactionId from a charge transaction.

---

## What to Expect in Response










