---
tags: [carat, commerce-hub, apple-pay]
---

# Apple Pay

**Apple Pay enables secure, simple checkouts in your app or on your website. **

## Overview
Our API allows developers to quickly enable secure and convenient payments in their payment applications. The API handles all of the tokenization needed to protect customers’ transactions.

<p>&nbsp;</p>

<hr>

**User Action:** The Buyer taps the Apple Pay button in the app or on the website, selects the payment card and uses the Touch-ID to complete the transaction.
1. The Merchant App communicates with the merchant server and creates a transaction ID
2. The Merchant App obtains the encrypted transaction payload (The tokenized card data "DPAN", Cryptogram, and transaction details) from Apple's Pass Kit Framework
3. The Merchant App sends the encrypted transaction payload to processor API using the Apple Pay SDK
4. Processor API decrypts the encrypted transaction payload and processes the transaction
5. Processor API responds back to the Merchant App (through the SDK) with either an approval or decline
6. Check out the Apple Pay participant [Banks and Countries](https://support.apple.com/en-us/HT204916).

---

## Steps to Accept Apple Pay Transactions

### Step 1: Create Your Merchant Identifier

A *merchant identifier* uniquely identifies you to Apple Pay as a merchant who is able to accept payments. You can use the same merchant identifier for multiple native and web apps. It never expires.

- In [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources), select Identifiers from the sidebar, then click the Add button (+) in the upper-left corner.
- Select Merchant IDs, then click Continue.
- Enter the merchant description and identifier name, then click Continue.
  - Adyen has more instruction
    -In the step to enter the merchant description and identifier name, make sure that the identifier includes the prefix merchant.com.adyen. For example: merchant.com.adyen.merchantAccount
- Review the settings, then click Register.
- Alternatively, you can create a merchant identifier in Xcode.

<!-- theme: warning -->
>
> After Merchant Identifier is created, you will need us to generate the certificate for you using the Merchant Identifier. Please contact our Account Representative in order to get the certificate.

### Step 2: Enable Apple Pay in your app

<!-- theme: warning -->
>This step is required if you are integrating Apple Pay into your iOS app. If you are only integrating Apple Pay into your website, you can move to Step 3: [Create a payment processing certificate](#step-3-create-payment-processing-certificate).

- In [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources), [enable the Apple Pay capability](https://help.apple.com/developer-account/#/dev4cb6dfbdb?sub=dev1d9758eca), then click Edit.
- In the Merchant ID table, select the merchant identifiers you want to assign to the App ID, then click Continue.
- If there are no merchant identifiers, click Create Merchant ID or go to [Create a merchant identifier](https://help.apple.com/developer-account/#/devb2e62b839?sub=dev103e030bb). Then repeat these steps.
- Review the changes, then click Save.
- If a warning dialog appears, click Confirm to finalize your changes.

Alternatively, [enable Apple Pay](https://help.apple.com/xcode/mac/current/#/deva43983eb7) in Xcode.


### Step 3: Create Payment Processing Certificate

A *payment processing certificate* is associated with your merchant identifier and used to encrypt payment information. The payment processing certificate expires every 25 months. If the certificate is revoked, you can recreate it.

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

<!-- theme : warning-->
>You can now start processing Apple Pay payments in your iOS app. For Apple Pay on the web, you need to do the additional steps described below.

### Step 4. Register and Validate Merchant Account

Then register the merchant domains in your organization that will process the Apple Pay transactions and create a merchant identity certificate that you’ll use to authenticate communication with the Apple Pay servers.

- In [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources), select Identifiers from the sidebar, then select Merchant IDs from the pop-up menu on the top right.
- On the right, select your merchant identifier.
- Under Merchant Domains, click Add Domain.
- Enter the fully qualified domain name, then click Save.
- Click Download, place the downloaded file in the specified location, then click Verify.
- Click Done.

### Step 5. Create Merchant Identity Certificate

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
- Convert the p12 file to a PEM file using the following command:
> Command here
- Upload the apple-pay-cert.pem file to your server.