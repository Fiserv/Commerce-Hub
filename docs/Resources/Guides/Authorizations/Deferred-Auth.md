# Deferred Authorization

## Overview

A deferred authorization is a transaction that occurs when a merchant captures transaction information while the connectivity is interrupted or unavailable. The `transactionIndicatorType` of *DEFERRED* must be sent in the authorization/purchase/refund `transactionDetails` once the connectivity is restored.

<!-- theme: info -->
> Deferred Authorization is not used in [Deferred Bill Payments](?path=docs/Resources/Guides/Bill-Payments/Deferred-Payment.md).

<!-- theme: warning -->
> If a voice authorization performed a [Forced Post](?path=docs/Resources/API-Documents/Payments/Forced.md) will need to be submitted.

---

## Payload Example


## See Also
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Cancel](?path=docs/Resources/API-Documents/Payments/Cancel.md)
- [Capture](?path=docs/Resources/API-Documents/Payments/Capture.md)
- [Deferred Bill Payment](?path=docs/Resources/Guides/Bill-Payments/Deferred-Payment.md)
- [Forced Post](?path=docs/Resources/API-Documents/Payments/Forced.md)
- [Refund](?path=docs/Resources/API-Documents/Payments/Refund.md)
- [Subsequent Authorization Types](?path=docs/Resources/Guides/Authorizations/Authorization-Types.md)

---
