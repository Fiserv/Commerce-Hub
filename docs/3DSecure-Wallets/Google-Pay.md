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
 
Check out the Google Pay participant [Banks and Countries](https://support.google.com/pay/answer/7454247?hl=en)




### Steps to accept Apple Pay Transactions

#### 1. Merchant Boarding

Please reach out to your local Integration Support team for getting your account enabled. The Integration team will share a Sample Application to generate Google Encrypted payloads.

#### 2. Pre-requisites to build and run the sample Application

Developers wishing to use the Fiserv Google Pay sample application will need the following software and hardware:

- Google Play Services version 18.0.0
- A physical device or an emulator to use for developing and testing. Google Play services can only be installed on an emulator with an AVD that runs Google APIs platform based on Android 4.4 or higher.
- The latest version of Android Studio. This includes:
  - The latest version of the AndroidSDK, including the SDK Tools component. The SDK is available from the
    - Android SDK Manager
    - JavaJRE(JDKfordevelopment) as per Android SDK requirements

Your project should be able to compile against Android 4.4 (KITKAT) or higher.

For more details, please refer https://developers.google.com/pay/api/android/guides/setup

3. Changes to be made in the Application
The following parameters need to be defined

Merchant ID

Merchant Token

APIKey

APISecret

Define the Fiserv Object Parameters: Parameters must be updated in the following files:

Constants.java

EnvData.java

Update the Constants.java file with the Merchant ID and Gateway Tokenization parameters. Note that:

The Merchant ID will be shared by the Integration team and

The Gateway Tokenization parameter defaults to ‘firstdata’.

In the EnvData.java file, set the following environment variables, which will be shared by the Integration Team:

APIKey

Token

APISecret

envMap.put("CERT", new EnvPropertiesImpl( "CERT","https://cert.api.firstdata.com/gateway/v1/payments","---------", "----------", "-----------"));
gatewayMerchantId and the APIGEE credentials will be provided by the Integration Team

4. Credit Card for Testing
Note that for testing purposes; the credit card information used in the app must be attached to an active account. The standard test cards will not be validated by Google and will fail in processing, our integration team will provide google pay-specific test cards.

5. Execute Authorize and Purchase Request
The Authorization parameter, required as part of the Header for a Fiserv API transaction, needs to be created. Construct the data param by appending the following parameters in the order shown:

apikey – the developer’s API key

nonce – A secure random number

timestamp – Epoch timestamp in milliseconds

token – the Merchant Token

payload – The actual body content passed as the POST request

6. Google Pay APK Installation to Device
Once the downloaded code for the sample app is built successfully in Android Studio, build the APK and install it on your device.

Once the APK is installed, select the Open option to access the application.

The sample application should now be installed on the test device (nonPROD environment), and the response from a payment processed in the First Data nonPROD environment/Google test environment available

7. Example Payload
Sample Google Pay Request within the walletPaymentMethod object for a WalletPreAuthTransaction:
