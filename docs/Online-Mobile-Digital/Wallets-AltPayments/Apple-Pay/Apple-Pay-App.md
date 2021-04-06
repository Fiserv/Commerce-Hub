# Apple Pay: In-App Integration

#### Apple Pay on the App

## Step1: Create Merchant Identifier

First create a merchant identifier in your developer account that uniquely identifies you to Apple Pay as a merchant who is able to accept payments. You can use the same merchant identifier for multiple native and web apps. The merchant identifier never expires.

- In [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources), select Identifiers from the sidebar, then click the Add button (+) in the upper-left corner.
- Select Merchant IDs, then click Continue.
- Enter the merchant description and identifier name, then click Continue.
- Review the settings, then click Register.
- Alternatively, you can create a merchant identifier in Xcode.

<!-- theme: warning -->
>
> After Merchant Identifier is created, you will need us to generate the certificate for you using the Merchant Identifier. Please contact our Account Representative in order to get the certificate.

---

## Step 2:  Enable Apple Pay in the App

- In [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources), [enable the Apple Pay capability](https://help.apple.com/developer-account/#/dev4cb6dfbdb?sub=dev1d9758eca), then click Edit.
- In the Merchant ID table, select the merchant identifiers you want to assign to the App ID, then click Continue.
- If there are no merchant identifiers, click Create Merchant ID or go to [Create a merchant identifier](https://help.apple.com/developer-account/#/devb2e62b839?sub=dev103e030bb). Then repeat these steps.
- Review the changes, then click Save.
- If a warning dialog appears, click Confirm to finalize your changes.

Alternatively, [enable Apple Pay](https://help.apple.com/xcode/mac/current/#/deva43983eb7) in Xcode.

---

## Step 3: Create Payment Processing Certificate

Next create a payment processing certificate that is associated with your merchant identifier and used to encrypt payment information. The payment processing certificate expires every 25 months and can be revoked. When that happens, just re-create the payment process certificate.

- In [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources), select Identifiers from the sidebar.
- Under Identifiers, select Merchant IDs using the filter in the top-right.
- On the right, select your merchant identifier.
>Note: If a banner appears at the top of the page saying that you need to accept an agreement, click the Review Agreement button and follow the instructions before continuing.
- Under Apple Pay Payment Processing Certificate, click Create Certificate.
- [Create a certificate signing request](https://help.apple.com/developer-account/#/devbfa00fef7?sub=dev103e030bb) on your Mac, and click Continue.
- Click Choose File.
- In the dialog that appears, select the certificate request file (a file with a .`certSigningRequest` file extension), then click Choose.
- Click Continue to continue.
- Click Download to download the certificate.
- Once the certificate is downloaded on your system, install it by double clicking it.
- The certificate should show up in the 'Key chain access' of your Macbook.

---

## Step 4: Set-up Project in Xcode

A merchant will need to create a project in Xcode to start supporting Apple Pay in their app. Refer to Apple's website on how to [create the project in Xcode](https://developer.apple.com/documentation/xcode/creating_an_xcode_project_for_an_app) and [enable Apple Pay in Xcode](https://help.apple.com/xcode/mac/9.3/#/deva43983eb7?sub=dev44ce8ef13).

---

## Step 5: Submit a Payment Request

The merchant can submit a payment request to Apple to verify if apple pay is supported and to receive the encrypted wallet data. Refer to Apple Pay's [Creating Payment Request](https://developer.apple.com/library/archive/ApplePay_Guide/CreateRequest.html#//apple_ref/doc/uid/TP40014764-CH3-SW2) for more detail.


## Step 6: Submit a Charge Request

Option 1 - Encrypted Data (wallet encrypted data using apple encryption, commerce hub will decrypt)
Option 2 - Decrypted Wallet (Merchant using their own certificate and they decrypt themselves and send us card data)

<!--
type: tab
title: ApplePay
-->

##### Example of a Charge Payload Request.
```json
{
  "amount": {
    "total": "12.04",
    "currency": "USD"
  },
  "source": {
    "sourceType": "ApplePay",
    "data": "hbreWcQg980mUoUCfuCoripnHO210lvtizOFLV6PTw1DjooSwik778bH....",
    "header": {
      "applicationDataHash": "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2",
      "ephemeralPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEvR....",
      "publicKeyHash": "KRsyW0NauLpN8OwKr+yeu4jl6APbgW05/TYo5eGW0bQ=",
      "transactionId": "31323334353637"
    },
    "signature": "MIAGCSqGSIb3DQEHAqCAMIACAQExDzANBglghkgBZQMEAgEFADCABgkqhki.....",
    "version": "EC_v1",
    "applicationData": "VEVTVA==",
    "merchantId": "merchant.com.fapi.tcoe.applepay",
    "merchantPrivateKey": "MHcCAQEE234234234opsmasdsalsamdsad/asdsad/asdasd/....."
  }
  "transactionDetails": {
    "captureFlag": true,
    "createToken": true,
    "tokenProvider": "RSA"
  }
}

```

<!--
type: tab
title: DecryptedWallet
-->

Add payload here (PaymentCard) add extra data like cryptogram and stuff

<!--
type: tab
title: Response
-->

##### Example of a Charge (201: Created) Response.

<!-- theme: info -->
> See [Error Responses](url) for additional examples.
```json
{
  "gatewayResponse": {
    "orderId": "R-3b83fca8-2f9c-4364-86ae-12c91f1fcf16",
    "transactionType": "charge",
    "transactionState": "authorized",
    "transactionOrigin": "ecom"
  },
  "transactionProcessingDetails": {
    "transactionDate": "2021-04-16",
    "transactionTime": "2021-04-16T16:06:05Z",
    "apiTraceId": "rrt-0bd552c12342d3448-b-ea-1142-12938318-7",
    "clientRequestId": "30dd879c-ee2f-11db-8314-0800200c9a66",
    "transactionId": "838916029301"
  },
  "source": "ApplePay",
  "tokenData": "1234123412340019",
  "PARId": "string",
  "declineDuplicates": false,
  "tokenSource": "string",
  "paymentReceipt": {
    "approvedAmount": {
      "total": "1.00",
      "currency": "USD"
    },
    "processorResponseDetails": null,
    "approvalStatus": "APPROVED",
    "approvalCode": "OK7118",
    "referenceNumber": "845366457890-TODO",
    "schemeTransactionID": "019078743804756",
    "processor": "fiserv",
    "responseCode": "00",
    "responseMessage": "APPROVAL",
    "hostResponseCode": "54022",
    "hostResponseMessage": "Approved",
    "localTimestamp": "2021-04-16T16:06:05Z",
    "bankAssociationDetails": {
      "associationResponseCode": "000",
      "transactionTimestamp": "2021-04-16T16:06:05Z",
      "transactionReferenceInformation": null,
    }
  }
}
```


<!-- type: tab-end -->

