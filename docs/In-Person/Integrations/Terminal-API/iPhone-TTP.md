---
tags: [In-Person, Card Present, Encrypted Payments, Tap to Pay, Apple, Mobile, Wallet, Contactless]
---

# Tap to Pay on iPhone integration guide

[Tap to Pay on iPhone](https://developer.apple.com/tap-to-pay/) allows merchants to accept contactless payments using a [supported iPhone](https://register.apple.com/tap-to-pay-on-iphone/faq) or a partner-enabled iOS app. Tap to Pay on iPhone allows the merchant's app to accept payments from contactless credit or debit cards, Apple Pay, Apple Watch, and smartphones with other digital wallets. No additional hardware is required to accept contactless payments through Tap to Pay on iPhone, so merchants can accept payments from anywhere.

---

## Step 1: Configure Tap to Pay on iPhone

[Request an entitlement](https://developer.apple.com/contact/request/tap-to-pay-on-iphone) from Apple to enable Tap To Pay on iPhone. Select **Fiserv** as the Payment Service Provider _(PSP)_.

Follow the [instructions](https://developer.apple.com/documentation/proximityreader/setting-up-the-entitlement-for-tap-to-pay-on-iphone) to add the entitlement to your app's profile.

---

## Step 2: Obtain API Credentials

Access the developer dashboard to create a workspace by using a [certification MID](?path=docs/Resources/Guides/Dev-Studio/Account-Management.md) and to obtain an [API-Key and API-Secret](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md).

<!-- theme: info -->
> These are required in the app.

---

## Step 3: Load Tap to Pay on iPhone package

Create a new project or open your existing app in XCode and [add the Fiserv Tap to Pay on iPhone Package](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app) using the following URL: _https://github.com/Fiserv/TTPPackage_.

---

## Step 4: Configure the merchant account

Add the merchant configuration details from the [Cert MID](#step-2-obtain-api-credentials).

```Swift
let myConfig = FiservTTPConfig(
    secretKey: "SECRET_KEY",
    apiKey: "API_KEY",
    environment: .Cert,
    currencyCode: "USD",
    merchantId: "MERCHANT_ID",
    merchantName: "MERCHANT_NAME",
    merchantCategoryCode: "MCC",
    terminalId: "TERMINAL_ID",
    terminalProfileId: "TERMINAL_PROFILE_ID")
```

---

## Step 5: Configure the card reader

Create an instance of `FiservTTPCardReader` to the view model, this is the main class the app will interact with.

```Swift
private let fiservTTPCardReader: FiservTTPCardReader = FiservTTPCardReader(configuration: myConfig)
```

In the startup process of the app, call the following method to validate that the device supports Tap To Pay on iPhone.

```Swift
if !fiservTTPCardReader.readerIsSupported() {
    ///TODO handle unsupported device
}
```

---

## Step 6: Obtain Payment Service Provider Token

Obtain a PSP session token to utilize the SDK.

<!-- theme: info -->
> The session token has a time to live (TTL) of 48 hours. Included is an auto-refresh feature that will request a new token when the TTL value is 30 minutes or less. Moving the app from the background to the foreground, as well as unlocking _(a locked iPhone)_ will trigger this check and the refresh will occur based on the time remaining of the token.

```Swift
do {
    try await fiservTTPCardReader.requestSessionToken()
} catch let error as FiservTTPCardReaderError {
    ///TODO handle exception
}
```

---

## Step 7: Link an Apple account

Link the device running the app to an Apple ID.

<!-- theme: info -->
> This only needs to occur once, the merchant is responsible for tracking whether the linking process has occurred or not.

```Swift
do {
    try await fiservTTPCardReader.linkAccount()
} catch let error as FiservTTPCardReaderError {
    ///TODO handle exception
}
```

**Is the account linked:**

When targeting iOS 16.4 or greater, the option to check if the account is already linked is [available](https://developer.apple.com/documentation/proximityreader/paymentcardreader/isaccountlinked(using:)).

```Swift
do {
    let isLinked = try await fiservTTPCardReader.isAccountLinked()
} catch let error as FiservTTPCardReaderError {
    // TODO handle exception
}
```

---

## Step 8: Initialize the card reader session

Initialize the Apple Proximity Reader session.

<!-- theme: info -->
> The card reader must be re-initialized each time the app starts and/or returns to the foreground.

```Swift
do {
    try await fiservTTPCardReader.initializeSession()
} catch let error as FiservTTPCardReaderError {
    ///TODO handle exception
}
```

---

## Step 9: Submit a payment request

Submit a payment request to Commerce Hub.

<!--
type: tab
titles: Charges, Cancels, Refunds, Inquiry
-->

**Submit a Charges API request:**

<!-- theme: info -->
> Currently Tap to Pay on iPhone only supports USD.

<!-- theme: warning -->
> If the card used for the charges request is a PIN debit, the user will see a PIN entry screen after tapping the card.

```Swift
let amount = 10.99
let merchantOrderId = "1234567890"
let merchantTransactionId = "1234567890"

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

**Submit a Cancels API request:**

At least one [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) must be provided to perform a [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md).

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

**Submit a Refund API Request for a payment without tap:**

At least one [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) must be provided to perform a [tagged refund](?path=docs/Resources/API-Documents/Payments/Refund-Tagged.md).

<!-- theme: warning -->
> When processing a PIN debit refund request, submit a refund payment with tap using an unmatched tagged refund.

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

**Submit a Refund API request for a payment with tap:**

The `fiservTTPCardReader.refundCard` API supports both [unmatched tagged refunds](?path=docs/Resources/API-Documents/Payments/Refund-Unmatched.md) and [open refunds](?path=docs/Resources/API-Documents/Payments/Refund-Open.md).

At least one [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) must be provided to perform an [unmatched tagged refund](?path=docs/Resources/API-Documents/Payments/Refund-Unmatched.md).

<!-- theme: warning -->
> If the card used for the refund request is a PIN debit, the user will see a PIN entry screen after tapping the card.

```Swift
let amount = 10.99
let referenceTransactionId = "1234567890"
do {
  let refundResponse = try await refundCard(
      amount:amount,
      referenceTransactionId: referenceTransactionId,
      referenceMerchantTransactionId: referenceMerchantTransactionId)
    ///TODO inspect the refundResponse to see the result   
} catch let error as FiservTTPCardReaderError {
    ///TODO handle exception
}
```

No [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) is required to perform an [open refund](?path=docs/Resources/API-Documents/Payments/Refund-Open.md).

```Swift
let amount = 10.99
let referenceTransactionId = "this value was returned in the charge response"
do {
    let refundResponse = try await fiservTTPCardReader.refundCard(
        amount: amount,
        merchantTransactionId: transactionId)
    // TODO inspect the refundResponse to see the result
} catch let error as FiservTTPCardReaderError {
    // TODO handle exception
}         
```

<!--
type: tab
-->

**Submit an Inquiry API request:**

At least one [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) must be provided to perform an [inquiry](?path=docs/Resources/API-Documents/Payments/Inquiry.md).

```Swift
do {
    let inquireResponse = try await fiservTTPCardReader.inquiryTransaction(referenceTransactionId: referenceTransactionId, referenceMerchantTransactionId: referenceMerchantTransactionId, referenceMerchantOrderId: referenceMerchantOrderId, referenceOrderId: referenceOrderId)
    // TODO inspect the Inquire Response to see the result
} catch let error as FiservTTPCardReaderError {
    // TODO handle exception
}
```

<!-- type: tab-end -->

---

## Step 10: Download a sample test app

Download [Commerce Hub's Tap to Pay on iPhone Test App](https://github.com/Fiserv/TTPSampleApp).

<!-- theme: info -->
> The XCode simulator supports testing Tap to Pay on iPhone, but it generates an intentionally invalid payment payload, so calls to authorize will fail. To run on a physical iPhone against the test environment, you must be logged into the phone with an [Apple Sandbox ID](https://developer.apple.com/apple-pay/sandbox-testing/).

---

## See also

- [Commerce Hub Package](https://github.com/Fiserv/TTPPackage)
- [Commerce Hub Sample App](https://github.com/Fiserv/TTPSampleApp)
- [Apple's Merchant FAQs](https://register.apple.com/tap-to-pay-on-iphone/faq)
- [Tap to Pay on iPhone Security](https://support.apple.com/guide/security/tap-to-pay-on-iphone-sec72cb155f4/web)
- [In-Person Payments](?path=docs/Getting-Started/Getting-Started-InPerson.md)
- [Apple Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay.md)

---
