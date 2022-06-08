---
tags: [Vault, Vault Payments]
---


# Vault Payments

When a payment method is stored in the Vault, the information is encrypted by the gateway and associated with a unique payment method token. This token can be used to create transactions without the [PCI compliance](https://www.pcisecuritystandards.org/) burden that comes with handling unencrypted data.

<!-- theme: warning -->
>Commerce Hub never store your customer's CVV in the Vault because it is expressly prohibited by card associations (e.g. Visa, Mastercard).


### Account Vault



### Account Updater

[Account Updater](?path=docs/Resources/Guides/Vault/Account-Updater.md) is a feature that automatically requests updates for vaulted payment methods in the event that a customer's vaulted card expires or is replaced – helping you avoid failed transactions or gaps in services provided to your customers.


### Card Updater

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
