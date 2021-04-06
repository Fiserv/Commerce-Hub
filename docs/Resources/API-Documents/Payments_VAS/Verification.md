# Verification

## Overview

Account verification is performed when the merchant wants to confirm that the cardholder account is valid for a transaction. Merchant can initiate the verifiation request using card as well as token details.

<!--theme:info-->
> The merchant can also perform an [address](../Guides-Info/Fraud/Address-Verification.md) and/or [security code](../Guides-Info/Fraud/Security-Code.md) verification with the request.

---

## Endpoint
<!-- theme: success -->
>**POST** `/payments-vas/v1/accounts/verification`

---

## PaymentCard Requirement

#### Component: source

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Value *PaymentCard* used for verification request using card details. Refer Payment [source type](../Master-Data/Source-Type.md) for more details. |
|`cardData`| *string* | 19 | Encrypted or unencrypted card data (e.g. PAN, EMV, Track, etc.). | 

### Payload Example

<!--
type: tab
title: Request
-->

##### Account Verification Request using PaymentCard

```json
{
  "source": {
    "sourceType": "PaymentCard"
    "card": {
      "cardData": "4005550000000019"      
    },
  }
}
```

<!--
type: tab
title: Response
-->

##### Account Verification Response

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "token",
    "transactionState": "authorized",
    "transactionOrigin": "ecom",
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "paymentSource": {
    "sourceType": "PaymentCard",
    "card": {
      "nameOnCard": "Jane Smith",
      "expirationMonth": "05",
      "expirationYear": "2025",
      "bin": "400555",
      "last4": "0019",
      "scheme": "VISA"
    }
  },
}
```
<!-- type: tab-end -->

---

## PaymentToken Requirement

#### Component: source

Variable | Type| Maximum Length | Description/Values|
|---------|----------|----------------|---------|
|`sourceType` | *string* | 15 | Value *PaymentToken* used for verification request using card details. Refer Payment [source type](../Master-Data/Source-Type.md) for more details. |
|`tokenData`| *string* | 19 | Token created for Card. | 

### Payload Example

<!--
type: tab
title: Request
-->

##### Account Verification Request using PaymentToken

```json
{
  "source": {
    "sourceType": "PaymentToken"
    "card": {
      "tokenData": "1234123412340019"      
    },
  }
}
```

<!--
type: tab
title: Response
-->

##### Account Verification Response

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "token",
    "transactionState": "authorized",
    "transactionOrigin": "ecom",
    "transactionProcessingDetails": {
      "transactionDate": "2016-04-16",
      "transactionTime": "2016-04-16T16:06:05Z",
      "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
      "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
      "transactionId": "838916029301"
    }
  },
  "paymentSource": {
    "sourceType": "PaymentToken",
    "tokenData": "1234123412340019",
    "PARId": "string",
    "declineDuplicates": "FALSE",
    "tokenSource": "string",
    "card": {
      "nameOnCard": "Jane Smith",
      "expirationMonth": "05",
      "expirationYear": "2025",
      "bin": "400555",
      "last4": "0019",
      "scheme": "VISA"
    }
  },
}
```
<!-- type: tab-end -->

---

## See Also

[API Explorer](url)
[AVS](../Guides-Info/Fraud/Address-Verification.md)
[Charge](Charges.md)
[CVV](../Guides-Info/Fraud/Security-Code.md)
[Payment Source](../Guides-Info/Payment-Source/Source-Type.md)
