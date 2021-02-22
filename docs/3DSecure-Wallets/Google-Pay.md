# Google Pay

## Overview

Google Pay is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. 


**User Action:** The buyer taps the "Google Pay" button, and then selects a payment method and shipping address.

#### If the purchase originates from a third-party site

1. The merchant/client server issues a credential request with the Merchant ID and Processor Name as Commerce Hub to Google.
2. Google returns response with encrypted payment credentials signed with the Commerce Hub key to the merchant server.
3. The Merchant sends the encrypted payload to Commerce Hub.
4. Commerce Hub decrypts and validates the payload, and then processes the transaction and responds back to merchant with either an approval or decline response.


#### If the purchase originates from a Google site:

1. Google initiates a purchase request to the merchant after the consumer confirms order.
2. The merchant/client server issues a request with the Merchant ID and Processor Name as Commerce Hub to Google.
3. Google returns response with encrypted payment credentials signed with the Commerce Hub key to merchant server.
4. The merchant sends the encrypted payload to Commerce Hub.
5. Commerce Hub decrypts and validates the payload and process the transaction and respond back to merchant with either an approval or decline response.
 
Check out the Google Pay participant [Banks and Countries](https://support.google.com/pay/answer/7454247?hl=en).

---

## Start Accepting Google Pay Transactions

### 1. Merchant Boarding

Please reach out to your local Integration Support team for getting your account enabled. 

>**Note:** The Integration team will share a Sample Application to generate Google Encrypted payloads.

### 2. Pre-requisites for sample Application

Developers wishing to use the Commerce Hub Google Pay sample application will need the following software and hardware:

- Google Play Services version 18.0.0
- A physical device or an emulator to use for developing and testing. Google Pay services can only be installed on an emulator with an AVD that runs Google APIs platform based on Android 4.4 or higher.
- The latest version of Android Studio. This includes:
  - The latest version of the AndroidSDK, including the SDK Tools component. The SDK is available from the
    - Android SDK Manager
    - JavaJRE(JDKfordevelopment) as per Android SDK requirements

Merchant project should be able to compile against Android 4.4 (KITKAT) or higher.

For more details, please refer https://developers.google.com/pay/api/android/guides/setup

### 3. Application Chanages

The following parameters need to be defined

  - Merchant ID
  - Merchant Token
  - APIKey
  - APISecret

Define the Fiserv Object Parameters: Parameters must be updated in the following files:

  - Constants.java
  - EnvData.java

Update the Constants.java file with the Merchant ID and Gateway Tokenization parameters. Note that:

  - The Merchant ID will be shared by the Integration team and
  - The Gateway Tokenization parameter defaults to ‘firstdata’.

In the EnvData.java file, set the following environment variables, which will be shared by the Integration Team:

  - APIKey
  - Token
  - APISecret

```json
envMap.put("CERT", new EnvPropertiesImpl( "CERT","https://cert.api.firstdata.com/gateway/v1/payments","---------", "----------", "-----------"));
```

gatewayMerchantId and the APIGEE credentials will be provided by the Integration Team

### 4. Credit Card for Testing
Note that for testing purposes; the credit card information used in the app must be attached to an active account. The standard test cards will not be validated by Google and will fail in processing, our integration team will provide google pay-specific test cards.

### 5. Execute Authorize and Purchase Request
The Authorization parameter, required as part of the Header for a Fiserv API transaction, needs to be created. Construct the data param by appending the following parameters in the order shown:

  - apikey – the developer’s API key
  - nonce – A secure random number
  - timestamp – Epoch timestamp in milliseconds
  - token – the Merchant Token
  - payload – The actual body content passed as the POST request

### 6. Google Pay APK Installation to Device

- Once the downloaded code for the sample app is built successfully in Android Studio, build the APK and install it on your device.
- Once the APK is installed, select the Open option to access the application.
- The sample application should now be installed on the test device (nonPROD environment), and the response from a payment processed in the First Data nonPROD environment/Google test environment available

### 7. Example Payload
Sample Google Pay Request within the walletPaymentMethod object for a WalletPreAuthTransaction:

<!--
type: tab
title: Request
-->

##### Example of a Capture Payload Request.

```json
{
  "source": {
    "sourceType": "GooglePay",
    "data": "{\"encryptedMessage\":\"NZF5Vs2YaI/t25L/1+dp6tuUOvra9pszs2antqcbHJbkjMMXZSR7innTFJxNR5DNnf4GheWIso8n8MA1q1zqWCU8MaK9bnNcHxvROpvfsU3SCCjkfG2k2M4/RYMjs+lxYW/nEtIIKVVOkdjAj4pI/Wth8xQXphn7hDNiyp9tIydmlPZVnzkXI6mVbpHbbkaCCD4TNPhFBDtx0VafqRjbb2Wt3EDazTx3dHdd+qVX5Xj8/BPb1cmwHWvrDw/dQRk/E0TsP+erLjhLaZ8l2EycxeUEZYqSX5w77S8vd3sw8WXuOCMsU8sx0Bs5IY7hohq67qNDxckP1fcBD4OYdGP6bumJR0J6pJxD5iRh5lFSjN6zNLRI77ylxWL6DwHoe/pPdCc0n6cV0Nt0RJMLjerr12BLuhv4bPQ3QB6jxnbt8JK/EndgIG8xpFyNkKlRUyxAKM22/ZSy45d6qtZIKLXRqDTr9JMk8uJ53QRZtQx8k9KkRZGC+GM2sD+Z75fxc0Yye7l6H0D8p5z1iEzWnYHxd0pmY/cOYEJxnOOdD573QmE6ikFcyaAw3XnCyul/EA\\u003d\\u003d\",\"ephemeralPublicKey\":\"BAhnPIWrCXWv/45GFK0mNAvN9w+NFBs3tQji0wTUS2+hiFKsZujG5wRd4JXGmxhG+k3bglYk544ILBNdDpsAh+o\\u003d\",\"tag\":\"liBzKfGcO+FclHg7XuqRJxR/8EJShRp9/APab0Sho08\\u003d\"}",
    "merchantPrivateKey": "DCEDF9AF72707BFD9C5231ECB9EAD040F3B4BA2AB608579736E37FDBA8884175566BDA410997B2575EA7E76AC54BBDB99DD0F74DD0A648BC0F6A2F06909E79A0F15D779F1A80CFC1EC9612476204C43A",
    "signingVerificationKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEIsFro6K+IUxRr4yFTOTO+kFCCEvHo7B9IOMLxah6c977oFzX/beObH4a9OfosMHmft3JJZ6B3xpjIb8kduK4/A==",
    "signature": "MEUCIFriwt8Cw8b6IGIPIDZOQtVJpKSBBklExO1pQcFxHG8RAiEAnlkUN5jOonK8G7563eNOBy8Y4Zc4E9+anlMRcuR/V6U=",
    "version": "ECv1",
    "merchantId": "676174657761793A666972737464617461"
  },
  "transactionProcessingDetails": {
    "apiTraceId": "7783054c719c8b6c",
    "clientRequestId": "req-7783054c719c8b6c",
    "transactionId": "tx-7783054c719c8b6c"
  }
}
```

<!--
type: tab
title: Response
-->

##### Example of a Capture (200: Success) Response.

<!-- theme: info -->

> See [Error Responses](url) for additional examples.

```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
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
  "amount": {
    "total": "1.50",
    "currency": "USD"
  },
  "paymentSource": {
    "sourceType": "PaymentCard"
  },
  "transactionDetails": {
    "captureFlag": "TRUE",
    "accountVerification": "FALSE",
    "processingCode": "000000",
    "merchantTransactionId": "1343678765",
    "merchantOrderId": "845366457890-TODO",
    "receiptEmail": "abc@gmail.com",
    "paymentDescription": ""
  },
  "transactionProcessingDetails": {
    "transactionDate": "2016-04-16",
    "transactionTime": "2016-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "paymentReceipt": {
    "approvedAmount": {
      "total": "1.50",
      "currency": "USD"
    },
    "processorResponseDetails": {
      "approvalStatus": "APPROVED",
      "approvalCode": "OK3483",
      "referenceNumber": "845366457890-TODO",
      "schemeTransactionId": "019078743804756",
      "feeProgramIndicator": "",
      "processor": "fiserv",
      "responseCode": "00",
      "responseMessage": "APPROVAL",
      "hostResponseCode": "54022",
      "hostResponseMessage": "",
      "localTimestamp": "2016-04-16T16:06:05Z",
      "bankAssociationDetails": {
        "associationResponseCode": "000",
        "transactionTimestamp": "2016-04-16T16:06:05Z"
      }
    }
  }
}
```

<!-- type: tab-end -->
