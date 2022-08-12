---
tags: [Hosted Payment Page, Web, Online, Apple Pay, Wallet]
---

# Apple Pay on the Web: Hosted Payment Page

<!-- theme: danger -->
> We are enhancing Commerce Hub to include Apple Pay Hosted Payment Page support and the documents related to the features will be released soon.

Commerce Hub's Hosted Payment Page integration removes the PCI Compliance requirement on the merchant server by handling the payment processing form on Commerce Hub's secure server. The merchant can customize the look and feel of the payment form.

### How it Works

1. The customer selects checkout from the merchant's website and Commerce Hub's secure Hosted Payment Page displays.
2. The customer selects Apple Pay and the Apple Pay payment form displays.
3. The customer completes the Apple Pay form and returns to the Hosted Payment Page.
4. The customer selects to complete the transaction.
5. The Hosted Payment Page submits the encrypted Apple Pay payload to Commerce Hub.
6. Commerce Hub attempts to process the transaction and sends the response to the merchant’s website.

---

## Step 1: Configure Apple Pay on the Web

The Apple developer account will need to be configured with the merchant information to accept [Apple Pay on the web](https://help.apple.com/developer-account/#/dev1731126fb). This includes creating a merchant identifier, creating a processing certificate, registering the merchant and creating a merchant identity certificate.

---

## Step 2: Support Apple Pay on the Web

The merchant can start supporting Apple Pay on their [Hosted Payment Page](?path=docs/Online-Mobile-Digital/Hosted-Payment-Page/Hosted-Payment-Page.md) by configuring the settings in the [Enterprise Portal](https://www.businesstrack.com). For more information, reiview the help section in the Enterprise Portal.

---

## Step 3: Presenting the Payment Sheet

The merchant can enhance the purchase experience from their website by creating a streamlined checkout process and presenting a customized Apple Pay payment sheet that allows customers to promptly authorize a payment and complete their transaction. Refer to Apple's website on how to customize the [payment sheet](https://developer.apple.com/design/human-interface-guidelines/apple-pay/overview/checkout-and-payment/#customize-the-payment-sheet).

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Apple Pay App Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-App.md)
- [Apple Pay Web RESTful Integration](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Apple-Pay/Apple-Pay-Web-REST.md)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Google Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Google-Pay/Google-Pay.md)
- [Samsung Pay](?path=docs/Online-Mobile-Digital/Wallets-AltPayments/Samsung-Pay/Samsung-Pay.md)

---
