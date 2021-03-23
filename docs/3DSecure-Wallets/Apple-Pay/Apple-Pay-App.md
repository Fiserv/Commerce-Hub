# Apple Pay: In-App Integration

#### Apple Pay on the App

## Step1: Create Merchant Identifier

First create a merchant identifier in your developer account that uniquely identifies you to Apple Pay as a merchant who is able to accept payments. You can use the same merchant identifier for multiple native and web apps. The merchant identifier never expires.

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

- Select new xcode project with a single view or import an existing project.
- Register the app using the app-id in the apple portal under Identifier->appId
- Go to Xcode->Preferences,->accounts and install the downloaded provision profile, your profile is now linked to your Xcode.
- Click on your project, go to Signing & Capabilities select 'Automatically manage signing'.
- '+ capabilities' add apple pay.
- Under 'Apple Pay' click '+' and add the merchant id's registered in the portal, which in turn will be added to the entitlements file.
- Now the Xcode is set-up for coding.

## Step 5: Test the Integration

From the Apple Pay SDK test the merchant account integration

- Merchant id: Enter any valid merchant id registered in the apple portal. This gives the capability for a single user to use multiple merchant id's
- Amount: Enter the amount of the transaction
- Transaction type: Select PreAuth or Sale.
- Apple Pay Button: Click this to produce payment sheet and fingerprint authentication for the transaction.
