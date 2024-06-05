---
tags: [Online, Card Not Present, Secure Data Capture, Release Notes]
---

# Secure Data Capture - SDK Release Notes

The following version fixes have been implemented for Commerce Hub's Secure Data Capture iFrame and JS v2 SDK. To ensure PCI and security compliance it is recommended to always use the latest version of Commerce Hub's SDK.

---

## 2.2.0

| Integration | Change | Additional Details |
| ----- | ----- | ----- |
| iFrame & JS | For the text field expiration entry, the expiration year is now allowed by validations to be up to 40 years in the future | Previously the field was limited to 19 years |
| iFrame | A new rendering config data field for domain `config.data.domain` | Overrides the built-in domain injection for the page that iFrames will be injected into. A valid use case is when a wildcard domain has been whitelisted and the integration needs this entry to be checked instead of the fully qualified domain name. Example: **.fiserv.com* *(for pages on subdomains of "fiserv.com")* |

---

## 2.1.4

| Integration | Change | Additional Details |
| ----- | ----- | ----- |
| iFrame & JS | Enhanced how a 4 digit year is entered into the expiration text field and is encoded in the card capture request, the `expirationYear` portion of expiration will now always send as 4 digits in card capture request | Previously the 4 digit year was truncated to 2 digits and had *20* added in front to make it 4 digits, this was not the intent and caused issues on the subsequent charges call after card capture |

---

## 2.1.3

| Integration | Change | Additional Details |
| ----- | ----- | ----- |
| iFrame | `localhost` can no longer be used with the PROD environment | |
| iFrame | `config.data.additionalFrameAncestors` can optionally be provided as a string array in the rendering config provided to `createPaymentForm` | The string values are expected to be `hostnames` that the current *(integrator's)* page may be embedded in as an iFrame either directly or transitively. This permits embedding the payment form containing the payment field iFrames as an iFrame on another domain. Each value will be checked against the CDN whitelist when constructing the field iFrame html file's Content-Security-Policy |
| iFrame | Custom brand identification support | New optional config field defined for the configuration passed to `createPaymentForm` |
| iFrame & JS | In the submission config, merchants can now pass a boolean field `createToken` for inclusion in the card capture request | If not provided the default behavior depends on merchant boarding |
| iFrame | When a card brand is identified as having a security code length set to 0, the form will allow submission if the field is empty | Treats it as optional even when mode has not been adjusted |
| iFrame | `toString()` method added to the SDK instances as a debugging quality-of-life improvement | State as well as sanitized configuration is included in the returned JSON string |

---

## See Also

- [Secure Data Capture](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Secure-Data-Capture.md)
- [iFrame v2](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/iFrame-JS/iFrame-JS.md)
- [JS v2](?path=docs/Online-Mobile-Digital/Secure-Data-Capture/Payment-JS/Payment-JS.md)

---
