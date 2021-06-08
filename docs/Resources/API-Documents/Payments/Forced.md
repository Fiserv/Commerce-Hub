---
tags: [carat, commerce-hub, enterprise, card-not-present, card-present, forced-post, minimum-requirements, payload-example, payments, api-documents, api-reference, authorization, sale, pre-auth]
---


# Forced Post

## Overview

<!-- theme: danger -->
> Due to higher instances of fraud, it is highly recommended that the forced post be limited to certain personnel. An administrator in the Virtual Terminal can manage forced Post.

A forced post is used when an issuer (bank) provides a referral also known as call response or for off-line processing. The merchant will contact the voice authorization center to receive an `approvalCode` to submit manually via an API call or [Virtual Terminal](?path=docs/Online-Mobile-Digital/Virtual-Terminal/Virtual-Terminal.md).

- If the merchant website is down, make an attempt to process the transaction in the Virtual Terminal before calling the voice authorization center.
- If the voice authorization center was not called and the merchant wants to process the transaction later, a [deferred authorization](?path=docs/Resources/Guides/Authorizations/Deferred-Auth.md) will need to be submitted.

<!-- theme: warning -->
>It is recommended to only call the voice authorization center when the [issuer requests](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md) the merchant to do so. Using the voice authorization center to process an off-line transaction can lead to a false approval and a chargeback.

---

## Minimum Requirements

---

## Payload Example

---

## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Deferred Authorization](?path=docs/Resources/Guides/Authorizations/Deferred-Auth.md)

---