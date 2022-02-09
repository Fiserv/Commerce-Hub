
---
tags: [carat, commerce-hub, enterprise, sandbox, testing, test-integration, test-cards, test-declines, test-errors, test-fraud]
---

# Test Response Messages

Commerce Hub allows developers to integrate with the API to trigger responses and to ensure that they are handled accordingly. 

<!-- theme: warning -->
> Test documentation provided is intended to be used in the Commerce Hub sandbox environment, for end-to-end certification testing utilize the test scripts located in the developer dashboard.

---

## Test Cards

Commerce Hub supports [test cards](?path=docs/Resources/Guides/Testing/Test-Cards.md) in the sandbox environment. No funds will be charged, refunded or processed while utilizing a test account.

--- 

## Error Response Testing

A transaction error can be triggered by entering the desired error code in the request payload. For more information, see [test errors](?path=docs/Resources/Guides/Testing/Test-Errors.md).

---

## Decline Response Testing

A transaction decline can be triggered by entering a specific amount for the transaction. For more information, see [test declines](?path=docs/Resources/Guides/Testing/Test-Declines.md).

---

## Address and Security Code Testing

Address and security code verification responses can be triggered by submitting a specific address or security code in the request payload. For more information, see [test address and security code](?path=docs/Resources/Guides/Testing/Test-Address-Security.md).

---
## Fraud Setting Testing

A fraud setting can be triggered by defining the error in the request or submitting specific information to simulate a fraud response. For more information, see [test fraud settings](?path=docs/Resources/Guides/Testing/Test-Fraud.md).


---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
- [Test Address and Security Code](?path=docs/Resources/Guides/Testing/Test-Address-Security.md)
- [Test Cards](?path=docs/Resources/Guides/Testing/Test-Cards.md)
- [Test Declines](?path=docs/Resources/Guides/Testing/Test-Declines.md)
- [Test Errors](?path=docs/Resources/Guides/Testing/Test-Errors.md)
- [Test Fraud Settings](?path=docs/Resources/Guides/Testing/Test-Fraud.md)

---
