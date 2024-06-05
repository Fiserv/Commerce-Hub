---
tags: [Online, Card Not Present, Secure Data Capture, Payment JS]
---

# Secure Data Capture - JavaScript v2 Integration Guide

<!-- theme: info -->
> Commerce Hub's JavaScript solution requires the integrated domains to be whitelisted for the Content-Security-Policy in Merchant Configuration and Boarding. Please contact your account representative for more information.

## Step 1: Acquire Credentials

A [credentials](?path=docs/Resources/API-Documents/Security/Credentials.md) request is required to obtain the client `symmetricEncryptionAlgorithm`, `accessToken`, `sessionId`, and `publicKey`. These will be used to create the [`authorization`](?path=docs/Resources/API-Documents/Authentication-Header.md) constant required in the [JS request](#step-3-call-the-sdk) and `sessionId` required in the [charges or tokens request](#step-4-submit-an-api-request).

---

## Step 2: Configure SDK

The JS script tag is required in the website by downloading or including the following code.

```php
<script src="https://commercehub-secure-data-capture.fiservapps.com/{version}/saq-a.js"></script>
```

It is recommended to use the latest [version](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/SDC-Version-Release.md) of Commerce Hub's SDK to ensure PCI and security compliance.

---

## Step 3: Call the SDK

The following JavaScript example will authenticate and load the payment form with the [defined fields and methods](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Customization.md).

```javascript
const captureCard = async () => {
  const tokens = {};
  
  try {
    const response = await window.fiserv.commercehub.captureCard({
      config: {
        environment: "CERT",
        apiKey: "API_KEY",
        accessToken: "ACCESS_TOKEN",
        publicKey: "BASE64_ENCODED_PUBLIC_ENCRYPTION_KEY",
        keyId: "KEY_ID",
        merchantId: "MERCHANT_ID",
        terminalId: "TERMINAL_ID",
        createToken: true,
      },
      fields: {
        nameOnCard: "First Last",
        cardNumber: "4111111111111111",
        securityCode: "123",
        expirationMonth: "01",
        expirationYear: "2030",
      },
    });
  
    if ("paymentTokens" in response) {
      for (const paymentToken of response.paymentTokens) {
        if (paymentToken.tokenResponseDescription === "SUCCESS") {
          tokens[paymentToken.tokenSource] = paymentToken.tokenData;
        }
      }
    }
  } catch (error) {
    console.error(error.toString());
  }
  return tokens;
};
```

---

## Step 4: Submit an API Request

Submit a [charges](?path=docs/Resources/API-Documents/Payments/Charges.md) or [tokenization](?path=docs/Resources/API-Documents/Payments_VAS/Payment-Token.md) request with the `sourceType` of `PaymentSession` and the `sessionID` from the [credentials](#step-1-acquire-credentials) request.

<!-- theme: info -->
> If a successful response is not received, best practice is to still submit the transaction. If an error occurs, the iFrame will need to be re-displayed so the customer can re-submit their payment information.

### Charges Example

<!-- theme: info -->
> Additional fields can be submitted as part of the request call. Additional fields can be found in the [API Explorer](../api/?type=post&path=/payments/v1/charges).

<!--
type: tab
titles: Request, Response
-->

Example of a charges payload request.

```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "PaymentSession",
    "sessionId": "df8c33d2-af27-4a3a-b7a0-61d4edf09cad"
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "origin": "ECOM",
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  },
  "merchantDetails": {
    "merchantId": "100008000003683",
    "terminalId": "123456"
  }
}
```

<!--
type: tab
-->

Example of a charge (201: Created) response.

<!-- theme: info -->
> See [Response Handling](?path=docs/Resources/Guides/Response-Codes/Response-Handling.md) for more information.

```json
{
  "gatewayResponse": {
    "transactionType": "CHARGE",
    "transactionState": "AUTHORIZED",
    "transactionOrigin": "ECOM",
    "transactionProcessingDetails": {
      "transactionTimestamp": "2021-06-20T23:42:48Z",
      "orderId": "RKOrdID-525133851837",
      "apiTraceId": "362866ac81864d7c9d1ff8b5aa6e98db",
      "clientRequestId": "4345791",
      "transactionId": "84356531338"
    }
  },
  "source": {
    "sourceType": "PaymentCard",
    "card": {
      "bin": "40055500",
      "last4": "0019",
      "scheme": "VISA",
      "expirationMonth": "10",
      "expirationYear": "2030"
    }
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": 12.04,
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK5882",
      "schemeTransactionId": "0225MCC625628",
      "processor": "FISERV",
      "host": "NASHVILLE",
      "responseCode": "000",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "00",
      "hostResponseMessage": "APPROVAL",
      "localTimestamp": "2021-06-20T23:42:48Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2021-06-20T23:42:48Z"
      }
    }
  },
  "transactionDetails": {
    "captureFlag": true
  },
  "transactionInteraction": {
    "eciIndicator": "CHANNEL_ENCRYPTED",
    "posConditionCode": "CARD_NOT_PRESENT_ECOM"
  }
}
```

<!-- type: tab-end -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Authentication Header](?path=docs/Resources/API-Documents/Authentication-Header.md)
- [Credentials Request](?path=docs/Resources/API-Documents/Security/Credentials.md)
- [JavaScript Fields and Methods](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/JS-Customization.md)
- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)
- [Version Release Notes](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/SDC-Version-Release.md)

---
