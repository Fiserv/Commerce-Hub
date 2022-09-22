---
tags: [Hosted Payment Page, Web, Online, Google Pay, Wallet]
---

# Google Pay Web: Hosted Payment Page

<!-- theme: danger -->
> We are enhancing Commerce Hub to include Google Pay Hosted Payment Page support and the documents related to the features will be released soon.

Commerce Hub's Hosted Payment Page integration removes the PCI Complaince requirement on the merchant server by handling the payment processing form on Commerce Hub's secure server. The merchant can customize the look and feel of the payment form.

### How it Works

1. Customer selects checkout from the merchant's website.
2. Customer then presented with the Commerce Hub's secure Hosted Payment Page.
3. Customer selects Google Pay and then redirected to the Google Pay payment form.
4. Customer completes the Google Pay form and then redirected to the Hosted Payment Page.
5. Customer selects to complete the transaction.
6. Hosted Payment Page submits the encrypted Google Pay payload to Commerce Hub.
7. Commerce Hub attempts to process the transaction and sends the response to the merchant website.

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](?path=docs/Resources/API-Documents/Payments/Charges.md)
- [Google Pay Brand Guidelines](?path=https://developers.google.com/pay/api/web/guides/brand-guidelines)

---
