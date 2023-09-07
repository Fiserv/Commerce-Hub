---
tags: [In-Person, Card Present, Encrypted Payments, Tap to Pay, Apple, Mobile, Wallet, Contactless]
---

# Tap to Pay on iPhone

[Tap to Pay on iPhone](https://developer.apple.com/tap-to-pay/) allows merchant's to accept contactless payments using a [supported iPhone](https://register.apple.com/tap-to-pay-on-iphone/faq) or a partner-enabled iOS app. Tap to Pay allows the merchant's app to accept payments from contactless credit or debit cards, Apple Pay, Apple Watch, and smartphones with other digital wallets. No additional hardware is required to accept contactless payments through Tap to Pay on iPhone, so merchant's can accept payments from anywhere. 

### How it Works

1. The merchant intiates a transaction from their iPhone app.
2. The customer taps their contactless payment instrument on the iPhone.
3. The merchant's app submits the payload to Commerce Hub.
6. Commerce Hub attempts to process the transaction and sends the response to the merchant’s app.

---

## Step 1: Configure Tap to Pay on iPhone

[Request an entitlement](https://developer.apple.com/contact/request/tap-to-pay-on-iphone) from Apple to enable Tap To Pay on iPhone. Select **Fiserv** as the Payment Service Provider _(PSP)_.
​
Follow the [instructions](https://developer.apple.com/documentation/proximityreader/setting-up-the-entitlement-for-tap-to-pay-on-iphone) to add the entitlement to your app's profile.

---

## Step 2: Obtain API Credentials

Obtain an [API-Key and API-Secret](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md), access the developer dashboard to create a workspace by using the default MID or [creating a dedicated sandbox MID](?path=docs/Resources/Guides/Dev-Studio/Account-Management.md).

<!-- theme: info -->
> These are required in the app.

---

## Step 3: Load Tap to Pay on iPhone Package

Create a new project or open yoru existing app in XCode and [add](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app) the Fiserv Tap to Pay on iPhone Package using the URL: _https://github.com/Fiserv/TTPPackage_.

---

## Step 4: Configure Merchant Account

Add the merchant configuration details from the [Sandbox MID](?path=docs/Resources/Guides/Dev-Studio/Account-Management.md).

```Swift
let myConfig = FiservTTPConfig(
    secretKey: "SECRET_KEY",
    apiKey: "API_KEY",
    environment: .Sandbox,
    currencyCode: "USD",
    merchantId: "MERCHANT_ID",
    merchantName: "MERCHANT_NAME",
    merchantCategoryCode: "MCC",
    terminalId: "TERMINAL_ID",
    terminalProfileId: "TERMINAL_PROFILE_ID")
```

---
​
## Step 5: Configure Card Reader

Create an instance of `FiservTTPCardReader` to the view model, this is the main class the app will interact with.
​
```Swift
private let fiservTTPCardReader: FiservTTPCardReader = FiservTTPCardReader(configuration: myConfig)
```
​
In the startup process of the app, call the following method to validate that the device supports Tap To Pay on iPhone.
​
```Swift
if !fiservTTPCardReader.readerIsSupported() {
    ///TODO handle unsupported device
}
```
​
---

## Step 6: Obtain Token

Obtain a session token to utilize the SDK.

<!-- theme: info -->
> The session token will expire in 24 hours, the merchant is responsible for keeping track of when to obtain a new token.
​
```Swift
do {
    try await fiservTTPCardReader.requestSessionToken()
} catch let error as FiservTTPCardReaderError {
    ///TODO handle exception
}
```
​
---
 
## Step 7: Link Apple Account

Link the device running the app to an Apple ID.

<!-- theme: info -->
> This only needs to occur once, the merchant is responsible for tracking whether the linking process has occurred or not. 
​
```Swift
do {
    try await fiservTTPCardReader.linkAcount()
} catch let error as FiservTTPCardReaderError {
    ///TODO handle exception
}
```
​
---

## Step 8: Initialize Card Reader Session

Initialize the Apple Proximity Reader session.

<!-- theme: info -->
> The card reader must be re-initialized each time the app starts and/or returns to the foreground.
​
```Swift
do {
    try await fiservTTPCardReader.activateReader()
} catch let error as FiservTTPCardReaderError {
    ///TODO handle exception
}
```
​
---
​
## Step 9: Submit a Request

Submit a payment request to Commerce Hub.

<!--
type: tab
titles: Charges, Cancels, Refunds
-->

##### Charges Request
​
<!-- theme: info -->
> Currently Tap to Pay on iPhone only supports USD.

```Swift
let amount = 10.99
let merchantOrderId = "1234567890"
let merchantTransactionId = "1234567890"
​
do {
    let chargeResponse = try await readCard(
        amount: amount, 
        merchantOrderId: merchantOrderId, 
        merchantTransactionId: merchantTransactionId)
    ///TODO inspect the chargeResponse to see the authorization result
} catch let error as FiservTTPCardReaderError {
    ///TODO handle exception
}
```

<!--
type: tab
-->

##### Cancels Request

<!-- theme: info -->
> To support partial cancels it must be configured in Merchant Boarding and Configuration. Please contact your account representative for details.

```Swift
let amount = 10.99
let referenceTransactionId = "1234567890"
do {
  let voidResponse = try await voidTransaction(
      amount:amount,
      referenceTransactionId = referenceTransactionId)
    ///TODO inspect the voidResponse to see the result   
} catch let error as FiservTTPCardReaderError {
    ///TODO handle exception
}
```

<!--
type: tab
-->

##### Refunds Request

```Swift
let amount = 10.99
let referenceTransactionId = "1234567890"
do {
  let refundResponse = try await refundTransaction(
      amount:amount,
      referenceTransactionId = referenceTransactionId)
    ///TODO inspect the refundResponse to see the result   
} catch let error as FiservTTPCardReaderError {
    ///TODO handle exception
}
```

<!-- type: tab-end -->

---

## Step 10: Download Sample Test App

Download [Commerce Hub's Tap to Pay on iPhone Test App](https://github.com/Fiserv/TTPSampleApp).

<-- theme: info -->
> ​The XCode simulator supports testing Tap to Pay on iPhone, but it generates an intentionally invalid payment payload, so calls to authorize will fail. ​To run on a physical iPhone against the test environment, you must be logged into the phone with an [Apple Sandbox ID](https://developer.apple.com/apple-pay/sandbox-testing/).

---

## See Also

- [Commerce Hub Package](https://github.com/Fiserv/TTPPackage)
- [Commerce Hub Sample App](https://github.com/Fiserv/TTPSampleApp)
- ​[Apple's Merchant FAQs](https://register.apple.com/tap-to-pay-on-iphone/faq)​
- ​[Tap to Pay on iPhone Security](https://support.apple.com/guide/security/tap-to-pay-on-iphone-sec72cb155f4/web)
- [In-Person Payments](?path=docs/Getting-Started/Getting-Started-InPerson.md)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)

---
