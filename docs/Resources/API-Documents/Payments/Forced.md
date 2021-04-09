# Forced Post

## Overview

<!-- theme: danger -->
> Due to higher instances of fraud, it is highly recommended that the forced post be limited to certain personnel. Forced Post can be managed by an administrator in the Virtual Terminal.

A forced post is used when a issuer (bank) provides a referral also known as call response or for off-line processing. The merchant will contact the voice authorization center to receive an `approvalCode` to submit manually via an API call or [Virtual Terminal](?path=docs/Online-Mobile-Digital/Virtual-Terminal/Virtual-Terminal.md).

- If the merchant website is down, an attempt to process the transaction in the Virtual Terminal should be made before calling the voice authorization center.
- If the voice authorization center was not called and the merchant wants to process the transaction at a later time, a [deferred authorization](?path=docs/Resources/Guides/Authorizations/Deferred-Auth.md) will need to be submitted.

<!-- theme: warning -->
>It is recommended to only call the voice authorization center when the [issuer requests](?path=docs/Resources/Guides/Response-Codes/Bank-Issuer.md) the merchant to do so. Using the voice authorization center to process an off-line transaction can lead to a false approval and a chargeback.

---

## Minimum Requirements

---

## Payload Example

---

## See Also
- API Explorer
- Deferred Authorization