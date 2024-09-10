---
tags: [Online, Card Not Present, Checkout, Release Notes]
---

# Checkout - SDK Release Notes

The following version fixes have been implemented for Commerce Hub's Checkout SDK. To ensure PCI and security compliance it is recommended to always use the latest version of Commerce Hub's SDK.

---

## 3.1.7

| Change | Additional Details |
| ----- | ----- |
| Payment field iFrame rendering now works even when parent page is not hosted by a server | such as in opening an html file in browser for testing or certain mobile app integrations using WebViews |
| Card `last4`, `expirationMonth` and `expirationYear` echoed back by the SDK on submission for card capture | The `submit` method for payment fields instance, now includes card last four digits and expiration date in the response payload *(returned as a Promise)* |
| ACH *PaymentCheck* support | The `window.fiserv.components.paymentFields` now supports capturing ACH details with specific fields and configuration |

---

## 3.1.3

| Change | Additional Details |
| ----- | ----- |
| Increased iFrame render timeout | Helps in situations of poor or unreliable network quality  |
| iOS support updates | Updates to iOS 15 compatibility. General update for iOS for the ALWAYS_MASK_ALL masking type. |
| No longer auto-inserting a "0" at start of expiration text field when first digit entered is a "2" or greater | Update with code formatting |
| Improved performance of formatting operations | Particularly when real-time masking is enabled |

---

## 3.0.0

| Change | Additional Details |
| ----- | ----- |
| Increased flexibility around custom brand (PLCC) functionality | Can specify additional customization options |
| New masking modes for card number that leave trailing digits unmasked with the number of digits determined by the brand configuration | Default 4 and is set to 4 digits for built in brands |
| Removed support for identifying cards with brands not supported by the Commerce Hub gateway | elo, mir, hiper, and hipercard |
| Support for gift cards | New `paymentMethod` config field |
| Support for programmatic population of field data | Selective or full; including drop down fields; new method `populate` |
| Support for dynamically updating a field's placeholder text configuration | New method `configure` |
| Support for configuring input format and delimiter for the card expiration text input field | |
| New SDK file *checkout.js* that is adjusted for easy expansion of additional integration options and payment methods | Previous SDK files *saq-a.js* and *saq-aep.js* have been removed |
|  | |
| Refactored `window.fiserv` operations for `createPaymentForm` and `captureCard` | `commercehub.createPaymentForm` has been moved to `components.paymentFields` and `commercehub.captureCard` has been moved to `api.capturePaymentMethod` |

---

## 2.2.0

| Change | Additional Details |
| ----- | ----- |
| For the text field expiration entry, the expiration year is now allowed by validations to be up to 40 years in the future | Previously the field was limited to 19 years |
| A new rendering config data field for domain `config.data.domain` | Overrides the built-in domain injection for the page that iFrames will be injected into. A valid use case is when a wildcard domain has been whitelisted and the integration needs this entry to be checked instead of the fully qualified domain name. Example: **.fiserv.com* *(for pages on subdomains of "fiserv.com")* |

---

## 2.1.4

| Change | Additional Details |
| ----- | ----- |
| Enhanced how a 4 digit year is entered into the expiration text field and is encoded in the card capture request, the `expirationYear` portion of expiration will now always send as 4 digits in card capture request | Previously the 4 digit year was truncated to 2 digits and had *20* added in front to make it 4 digits, this was not the intent and caused issues on the subsequent charges call after card capture |

---

## 2.1.3

| Change | Additional Details |
| ----- | ----- |
| `localhost` can no longer be used with the PROD environment | |
| `config.data.additionalFrameAncestors` can optionally be provided as a string array in the rendering config provided to `createPaymentForm` | The string values are expected to be `hostnames` that the current *(integrator's)* page may be embedded in as an iFrame either directly or transitively. This permits embedding the payment form containing the payment field iFrames as an iFrame on another domain. Each value will be checked against the CDN whitelist when constructing the field iFrame html file's Content-Security-Policy |
| Custom brand identification support | New optional config field defined for the configuration passed to `createPaymentForm` |
| In the submission config, merchants can now pass a boolean field `createToken` for inclusion in the card capture request | If not provided the default behavior depends on merchant boarding |
| When a card brand is identified as having a security code length set to 0, the form will allow submission if the field is empty | Treats it as optional even when mode has not been adjusted |
| `toString()` method added to the SDK instances as a debugging quality-of-life improvement | State as well as sanitized configuration is included in the returned JSON string |

---

## See Also

- [Checkout](?path=docs/Online-Mobile-Digital/Checkout/Checkout.md)
- [Hosted Fields](?path=docs/Online-Mobile-Digital/Checkout/Hosted-Fields/Hosted-Fields.md)

---
