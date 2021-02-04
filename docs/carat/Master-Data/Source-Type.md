---
tags: [Source-Type, carat, commerce-hub]
---

## Payment Source-Type

The variable `sourceType` is used to determine the source of the transaction. Depending on the source the required variables change.

<!--
type: tab
title: PaymentCard
-->

##### PaymentCard

Financial Institutions such as banks issue the **Payment Card** to the customers. Customers use the card to pay online or in person. Check out the different [Card Types](url) we support.   

<!--
type: tab
title: PaymentToken
-->

##### PaymentToken

With more mind-blowing material. Really. Just amazing, grade-A stuff.

<!--
type: tab
title: ApplePay
-->

##### ApplePay

**Apple Pay** is a mobile payment and digital wallet service by Apple Inc. that allows users to make payments in person, in iOS apps, and on the web using Safari. It is supported on the iPhone, Apple Watch, iPad, and Mac. The `sourceType` *ApplePay* is used to submit [**Apple Pay**](../Wallets/Apple-Pay.md) transaction to our application. 

<!--
type: tab
title: GooglePay
-->

##### GooglePay

**Google Pay** is a digital wallet platform and online payment system developed by Google to power in-app and tap-to-pay purchases on mobile devices, enabling users to make payments with Android phones, tablets or watches. The `sourceType` *GooglePay* is used to submit [**Google Pay**]() transaction to our application.

<!--
type: tab
title: Payment3DS
-->

##### Payment3DS

**3-D Secure** authentication provides an additional security layer for online card transactions. If  the merchant account is enabled for 3-D Secure, all [charge](../Transactions/Charges.md) transactions merchant initiate by posting an HTML form will by default go through the 3-D Secure process i.e. cardholders with an enrolled card will see a page from the card issuer to enter the password unless the card issuer decides not to check it. The `sourceType` *Payment3DS* is used to submit [**3-D Secure**]() transaction to our application.

<!-- type: tab-end -->

---


