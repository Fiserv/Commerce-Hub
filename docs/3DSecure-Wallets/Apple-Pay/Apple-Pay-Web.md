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

Merchant can enhance the purchase experience in their app or website by creating a streamlined checkout process and presenting a customized payment sheet that lets people promptly authorize payment and complete their transaction. Refer how to customize the [payment sheet](https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/checkout-and-payment/#customize-the-payment-sheet)

---

## Step 7: Submit the Apple Pay Request

<!--
type: tab
title: Request
-->

##### Example of a Charge Payload Request.
```json
{
  "source": {
    "sourceType": "ApplePay",
    "data": "hbreWcQg980mUoUCfuCoripnHO210lvtizOFLV6PTw1DjooSwik778bH/qgK2pKelDTiiC8eXeiSwSIfrTPp6tq9x8Xo2H0KYAHCjLaJtoDdnjXm8QtC3m8MlcKAyYKp4hOW6tcPmy5rKVCKr1RFCDwjWd9zfVmp/au8hzZQtTYvnlje9t36xNy057eKmA1Bl1r9MFPxicTudVesSYMoAPS4IS+IlYiZzCPHzSLYLvFNiLFzP77qq7B6HSZ3dAZm244v8ep9EQdZVb1xzYdr6U+F5n1W+prS/fnL4+PVdiJK1Gn2qhiveyQX1XopLEQSbMDaW0wYhfDP9XM/+EDMLaXIKRiCtFry9nkbQZDjr2ti91KOAvzQf7XFbV+O8i60BSlI4/QRmLdKHmk/m0rDgQAoYLgUZ5xjKzXpJR9iW6RWuNYyaf9XdD8s2eB9aBQ=",
    "header": {
      "applicationDataHash": "94ee059335e587e501cc4bf90613e0814f00a7b08bc7c648fd865a2af6a22cc2",
      "ephemeralPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEvR+anQg6pElOsCnC3HIeNoEs2XMHQwxuy9plV1MfRRtIiHnQ6MyOS+1FQ7WZR2bVAnHFhPFaM9RYe7/bynvVvg==",
      "publicKeyHash": "KRsyW0NauLpN8OwKr+yeu4jl6APbgW05/TYo5eGW0bQ=",
      "transactionId": "31323334353637"
    },
    "signature": "MIAGCSqGSIb3DQEHAqCAMIACAQExDzANBglghkgBZQMEAgEFADCABgkqhkiG9w0BBwEAAKCAMIIB0zCCAXkCAQEwCQYHKoZIzj0EATB2MQswCQYDVQQGEwJVUzELMAkGA1UECAwCTkoxFDASBgNVBAcMC0plcnNleSBDaXR5MRMwEQYDVQQKDApGaXJzdCBEYXRhMRIwEAYDVQQLDAlGaXJzdCBBUEkxGzAZBgNVBAMMEmQxZHZ0bDEwMDAuMWRjLmNvbTAeFw0xNTA3MjMxNjQxMDNaFw0xOTA3MjIxNjQxMDNaMHYxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJOSjEUMBIGA1UEBwwLSmVyc2V5IENpdHkxEzARBgNVBAoMCkZpcnN0IERhdGExEjAQBgNVBAsMCUZpcnN0IEFQSTEbMBkGA1UEAwwSZDFkdnRsMTAwMC4xZGMuY29tMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAErnHhPM18HFbOomJMUiLiPL7nrJuWvfPy0Gg3xsX3m8q0oWhTs1QcQDTT+TR3yh4sDRPqXnsTUwcvbrCOzdUEeTAJBgcqhkjOPQQBA0kAMEYCIQDrC1z2JTx1jZPvllpnkxPEzBGk9BhTCkEB58j/Cv+sXQIhAKGongoz++3tJroo1GxnwvzK/Qmc4P1K2lHoh9biZeNhAAAxggFSMIIBTgIBATB7MHYxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJOSjEUMBIGA1UEBwwLSmVyc2V5IENpdHkxEzARBgNVBAoMCkZpcnN0IERhdGExEjAQBgNVBAsMCUZpcnN0IEFQSTEbMBkGA1UEAwwSZDFkdnRsMTAwMC4xZGMuY29tAgEBMA0GCWCGSAFlAwQCAQUAoGkwGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTkwNjA3MTg0MTIxWjAvBgkqhkiG9w0BCQQxIgQg0PLaZU4YWZqtP9t/ygv9XIS/5ngU6FlGjpvyK6VFXVMwCgYIKoZIzj0EAwIERjBEAiBTNmQEPyc3aMm4Mwa0riD3dNdSc9aAhslj65Us8b3aKwIgNSc/y+CWpsr8qDln0fZK6ZD/LWPMxofQedlPy7Q6gY8AAAAAAAA=",
    "version": "EC_v1",
    "applicationData": "VEVTVA==",
    "merchantId": "merchant.com.fapi.tcoe.applepay",
    "merchantPrivateKey": "MHcCAQEE234234234opsmasdsalsamdsad/asdsad/asdasd/asd\tAwEHoUQDQgAaslkdsad8asjdnlkm23leu9jclaskdas/m\tasr4+/as34+4fh/sf64g/nX35fs5w=="
  }
}

```

<!-- type: tab-end -->