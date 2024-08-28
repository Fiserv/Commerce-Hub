---
tags: [Online, Card Not Present, Checkout, iFrame]
---

# Checkout - iFrame v1 and v2 Comparison

High-level differences between v1 and v2 for iFrame Checkout.

| | V1 | V2 |
| -- | -- | -- |
| **Architecture** | Single iFrame for entire payment form | Each field of the PCI payment form gets its own iFrame which solely consists of the input element |
| **File Hosting** | Hosted on the Commerce Hub API Gateway | Hosted on a dedicated Content Delivery Network *(CDN)* solution with 100% globally distributed infrastructure |
| **Aggregate Size of Files** | Very large | Very small |
| **Custom Fonts** | No | Yes |
| **Flexible CSS Injection** | No | Yes |
| **Credentials and Encryption Key Requirements** | During form rendering | During form submission |
| **Immutable SDK Release Versions** | No | Yes *(each version gets its own folder on the CDN)* |
| **Domain Whitelisting** | Managed on API side and controlled via `domains` field during credentials request | Configured via CDN solution which is a separate infrastructure from the API |

---

## See Also

- [iFrame v2 Integration Guide](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields-Request.md)
- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)

---
