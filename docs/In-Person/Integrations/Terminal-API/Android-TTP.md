---
tags: [In-Person, Card Present, Encrypted Payments, Tap to Pay, Android, Mobile, Wallet, Contactless]
---

# Tap to Pay on Android integration guide

[Tap to Pay on Android](https://developer.apple.com/tap-to-pay/) allows merchants to accept contactless payments using a [supported device](https://storage.googleapis.com/play_public/supported_devices.html) or a partner-enabled app. Tap to Pay on Android allows the merchant's app to accept payments from contactless credit or debit cards, Google Pay, smartwatches, and smartphones with other digital wallets. No additional hardware is required to accept contactless payments through Tap to Pay on Android, so merchants can accept payments from anywhere.

---

## Step 1: Obtain API Credentials

Access the developer dashboard to create a workspace by using a [certification MID](?path=docs/Resources/Guides/Dev-Studio/Account-Management.md) and to obtain an [API-Key and API-Secret](?path=docs/Resources/Guides/Dev-Studio/Key-Management.md).

<!-- theme: info -->
> These are required in the app.

---

## Step 2: Load Tap to Pay on Android SDK

[Apache Maven](https://maven.apache.org/) uses repositories to store artifacts. The library is distributed via maven repository and is downloaded from TODO:NEED_URL.

**Adding SDK to your project:**

Add the Fiserv Module to your app by following these instructions:

1. Open the app `build.gradle` file and add following item to the dependency, TODO:?????
2. Sync the project

---

## Step 3: Configure the merchant account

Add the merchant configuration details from the [Cert MID](#step-1-obtain-api-credentials).

```java
val myConfig : FiservTTPConfig = FiservTTPConfig(
    merchantId = "MERCHANT_ID",
    terminalId = "TERMINAL_ID",
    apiKey = "API_KEY",
    secretKey = "SECRET_KEY",
    ppid = "PPID",
    hostPort = "HOST_PORT",
    environment: Environment.CERT,
    currencyCode: Currency.USD)
```

---

## Step 4: Configure the card reader

Create an instance of `FiservTTPCardReader` to the view model, this is the main class the app will interact with.

```java
CoroutineScope(Dispatchers.Main).launch {
    try{
        FiservTTPCardReader.initializeSession(myConfig)
    } catch (fiservTTPCardReaderError:FiservTTPCardReaderException) {
        // TODO handle error
    }
}
```

<!-- theme: info -->
> The card reader must be re-initialized each time the app starts and/or returns to the foreground.

---

## Step 5: Submit a payment request

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

```java
val amount = 10.99
val merchantOrderId = "merchantOrderId"
val merchantTransactionId = "merchantTransactionId"
val captureFlag = "true"
val createToken = "true"

val transactionDetailsRequest: TransactionDetailsRequest = TransactionDetailsRequest(
            captureFlag,
            merchantTransactionId,
            merchantOrderId,
            createToken )

CoroutineScope(Dispatchers.Main).launch {
    try{
        FiservTTPCardReader.charges(
        amount.toBigDecimal(), 
        PaymentTransactionType.CAPTURE,
        transactionDetailsRequest)
    } catch (fiservTTPCardReaderError:FiservTTPCardReaderException) {
        // TODO handle error
    }
}
```

<!--
type: tab
-->

**Submit a Cancels API request:**

At least one [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) must be provided to perform a [cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md).

<!-- theme: info -->
> To support partial cancels it must be configured in Merchant Boarding and Configuration. Please contact your account representative for details.

```java
val amount = 10.99
val referenceMerchantTransactionId = "referenceMerchantTransactionId"

val referenceTransactionDetails: ReferenceTransactionDetails = ReferenceTransactionDetails(
    referenceMerchantTransactionId )

CoroutineScope(Dispatchers.Main).launch {
    try{
        FiservTTPCardReader.cancels(
            amount.toBigDecimal(),
            referenceTransactionDetails)
    } catch (fiservTTPCardReaderError:FiservTTPCardReaderException) {
        // TODO handle error
    }
}
```

<!--
type: tab
-->

**Submit a Refund API Request for a payment without tap:**

At least one [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) must be provided to perform a [tagged refund](?path=docs/Resources/API-Documents/Payments/Refund-Tagged.md).

<!-- theme: warning -->
> When processing a PIN debit refund request, submit a refund payment with tap using an unmatched tagged refund.

```java
val amount = 10.99
val merchantOrderId = "merchantOrderId"
val merchantTransactionId = "merchantTransactionId"
val captureFlag = "true"
val createToken = "true"
val referenceMerchantTransactionId = "referenceMerchantTransactionId"

val transactionDetailsRequest: TransactionDetailsRequest = TransactionDetailsRequest(
    captureFlag,
    merchantTransactionId,
    merchantOrderId,
    createToken )

val referenceTransactionDetails: ReferenceTransactionDetails = ReferenceTransactionDetails(
    referenceMerchantTransactionId )

CoroutineScope(Dispatchers.Main).launch {
    try{
        FiservTTPCardReader.refunds(
            amount.toBigDecimal(),
            RefundTransactionType.TAGGED,
            transactionDetailsRequest,
            referenceTransactionDetails)
    } catch (fiservTTPCardReaderError:FiservTTPCardReaderException) {
        // TODO handle error
    }
}
```

**Submit a Refund API request for a payment with tap:**

The `fiservTTPCardReader.refundCard` API supports both [unmatched tagged refunds](?path=docs/Resources/API-Documents/Payments/Refund-Unmatched.md) and [open refunds](?path=docs/Resources/API-Documents/Payments/Refund-Open.md).

At least one [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) must be provided to perform an [unmatched tagged refund](?path=docs/Resources/API-Documents/Payments/Refund-Unmatched.md).

<!-- theme: warning -->
> If the card used for the refund request is a PIN debit, the user will see a PIN entry screen after tapping the card.

```java
val amount = 10.99
val merchantOrderId = "merchantOrderId"
val merchantTransactionId = "merchantTransactionId"
val captureFlag = "true"
val createToken = "true"
val referenceMerchantTransactionId = "referenceMerchantTransactionId"

val transactionDetailsRequest: TransactionDetailsRequest = TransactionDetailsRequest(
    captureFlag,
    merchantTransactionId,
    merchantOrderId,
    createToken )

val referenceTransactionDetails: ReferenceTransactionDetails = ReferenceTransactionDetails(
    referenceMerchantTransactionId )

CoroutineScope(Dispatchers.Main).launch {
    try{
        FiservTTPCardReader.refunds(
            amount.toBigDecimal(),
            RefundTransactionType.UNMATCHED,
            transactionDetailsRequest,
            referenceTransactionDetails)
    } catch (fiservTTPCardReaderError:FiservTTPCardReaderException) {
        // TODO handle error
    }
}
```

No [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) is required to perform an [open refund](?path=docs/Resources/API-Documents/Payments/Refund-Open.md).

```java
val amount = 10.99
val merchantOrderId = "merchantOrderId"
val merchantTransactionId = "merchantTransactionId"
val captureFlag = "true"
val createToken = "true"

val transactionDetailsRequest: TransactionDetailsRequest = TransactionDetailsRequest(
    captureFlag,
    merchantTransactionId,
    merchantOrderId,
    createToken )

val referenceTransactionDetails: ReferenceTransactionDetails = ReferenceTransactionDetails(
    referenceMerchantTransactionId )

CoroutineScope(Dispatchers.Main).launch {
    try{
        FiservTTPCardReader.refunds(
            amount.toBigDecimal(),
            RefundTransactionType.OPEN,
            transactionDetailsRequest,
            referenceTransactionDetails)
    } catch (fiservTTPCardReaderError:FiservTTPCardReaderException) {
        // TODO handle error
    }
}
```

<!--
type: tab
-->

**Submit an Inquiry API request:**

At least one [reference transaction identifier](?path=docs/Resources/Master-Data/Reference-Transaction-Details.md) must be provided to perform an [inquiry](?path=docs/Resources/API-Documents/Payments/Inquiry.md).

```java
val referenceMerchantTransactionId = "referenceMerchantTransactionId"

val referenceTransactionDetails: ReferenceTransactionDetails = ReferenceTransactionDetails(
    referenceMerchantTransactionId )

CoroutineScope(Dispatchers.Main).launch {
    try{
        FiservTTPCardReader.inquiry(referenceTransactionDetails)
    } catch (fiservTTPCardReaderError:FiservTTPCardReaderException) {
        // TODO handle error
    }
}
```

<!-- type: tab-end -->

---

## Step 6: Download a sample test app

Download [Commerce Hub's Tap to Pay on Android Test App]NEED_LINK.

---

## See also

- [Commerce Hub Package]NEED_LINK
- [Commerce Hub Sample App]NEED_LINK
- [In-Person Payments](?path=docs/Getting-Started/Getting-Started-InPerson.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)

---
