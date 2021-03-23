# Apple Pay: Web Integration


## Step 1: Create Merchant Identifier

First create a merchant identifier in your developer account that uniquely identifies you to Apple Pay as a merchant who is able to accept payments. You can use the same merchant identifier for multiple native and web apps. The merchant identifier never expires.

- In [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources), select Identifiers from the sidebar, then click the Add button (+) in the upper-left corner.
- Select Merchant IDs, then click Continue.
- Enter the merchant description and identifier name, then click Continue.
-Review the settings, then click Register.
- Alternatively, you can create a merchant identifier in Xcode.

<!-- theme: warning -->
>
> After Merchant Identifier is created, you will need us to generate the certificate for you using the Merchant Identifier. Please contact our Account Representative in order to get the certificate.

---

## Step 2: Create Payment Processing Certificate

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


## Step 3: Register and Validate Merchant Account

Then register the merchant domains in your organization that will process the Apple Pay transactions and create a merchant identity certificate that you’ll use to authenticate communication with the Apple Pay servers.


- In [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources), select Identifiers from the sidebar, then select Merchant IDs from the pop-up menu on the top right.
- On the right, select your merchant identifier.
- Under Merchant Domains, click Add Domain.
- Enter the fully qualified domain name, then click Save.
- Click Download, place the downloaded file in the specified location, then click Verify.
- Click Done.

---

## Step 4: Create Merchant Identity Certificate

- In [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources), select Identifiers from the sidebar, then select Merchant IDs from the pop-up menu on the top right.
- On the right, select your merchant identifier.
- Under Apple Pay Merchant Identity Certificate, click Create Certificate.
- Create a [certificate signing request](https://help.apple.com/developer-account/#/devbfa00fef7) on your Mac, and click Continue.
- Click Choose File.
- In the dialog that appears, select the certificate request file (a file with a .certSigningRequest file extension), then click Choose.
- Click Continue to continue.
- Click Download to download the certificate.
- Once the certificate is downloaded on your system, install it by double clicking it.
- The certificate should show up in the 'Key chain access' of your Macbook.
- Export the certificate from your keychain as a p12 file.
- Convert the p12 file to a PEM file.
- Upload the apple-pay-cert.pem file to your server.

---

## Step 5: Support Apple Pay on Website

Merchant can start supporting Apple Pay on their website either by using Apple Pay JS API Framework or by using Commerce Hub Hosted Payment Page.

**Integrate Using Apple Pay JS API:** For more details refer [Apple Pay JS API](https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_js_api) documentation.

**Integrate Using Commerce Hub Hosted Page:** configure your apple pay settings in Commerce Hub
Hosted Page.

---

## Step 6: Presenting the Payment Sheet

A merchant can enhance the purchase experience from their website by creating a streamlined checkout process and presenting a customized Apple Pay payment sheet that allows customers to promptly authorize a payment and complete their transaction. Refer to Apple's website on how to customize the [payment sheet](https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/checkout-and-payment/#customize-the-payment-sheet).

---

## Step 7: Submit a Payment Request

<!--theme: warning-->
> This step is only required when utilizing Commerce Hub's RESTful API and Apple Pay JS.

<!--
type: tab
title: Request
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