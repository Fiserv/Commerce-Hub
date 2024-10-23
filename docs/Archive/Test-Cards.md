---
tags: [Testing, Test Integration, Test Cards, Test Errors] 
---

# Test Cards

Commerce Hub allows testing of [supported card types](?path=docs/Resources/Master-Data/Card-Type.md) by providing test card data. Funds will not be processed while using the sandbox or certification environments, these test cards are used to perform tests that simulate certain situations for different card brands. 

---

## Network End to End Test Cards

Commerce Hub provides test scripts with card numbers that will allow you test against the various networks that are supported using the certification environment. No funds will be charged, refunded or processd while utilizing a certification account.

---

## Sandbox Test Cards

Commerce Hub provides generic test card numbers, an allows generation of merchant dedicated card numbers. Using the Commerce Hub sandbox, you can use the generated test payment cards to simulate real-life payment scenarios and to verify the correct integration of your systems. No funds will be charged, refunded or processd while utilizing a test account. 

<!-- theme: info -->
> Any future expiration date can be used for test cards. See [test security code response](?path=docs/Resources/Guides/Testing/Test-Address-Security.md) to determine the 3 or 4-digit (AMEX) security code to pass based on the desired response.

| Number | Card Type |
| -------- | ------ |
| 370000 00000 0002 | American Express |
| 378282 24631 0005 | American Express Level II |
| 305693 000902 0004 | Diners Club |
| 362272 0627 1667 | Diners Club |
| 601100 099301 0970 | Discover |
| 356600 202036 0505 | JCB |
| 550000 000000 0004 | MasterCard |
| 555555 555555 4444 | Mastercard Level II |
| 555555 555555 4444 | Mastercard Level III |
| 222300 312200 3222 | Mastercard (2-series) |
| 520082 828282 8210 | Mastercard (debit) |
| 510510 510510 5100 | Mastercard (prepaid) |
| 620000 000000 0005 | UnionPay |
| 411111 111111 1111 | Visa |
| 420000 000000 0000 | Visa Level II |
| 424242 424242 4242 | Visa Level III |
| 400005 665566 5556 | Visa (debit)|
| 410510 510510 5100 | Visa (prepaid) |

---

### Card Generation Requirements

Generated test cards should meet the following requirements:

- Test card numbers should be between 16-19 digits long.
- All test card numbers in a generated test card range need to have the same number of digits.
- The first six digits of the test card numbers in any generated range need to be valid BIN numbers.
- Test card numbers should comply with standard payment card number constraints. For example, to test a system with Visa you should create a test card range with a valid Visa BIN.
- Although the created test card start and end range numbers are not checked for compliance, if you carry out a test payment the test card is handled like a standard payment card. It undergoes the standard card checks that take place in live environments.
- The billing address details you define for a test card range need to be [Address Verification Service](?path=docs/Resources/Guides/Fraud/Address-Verification.md) compliant, i.e. you always need to include at least the street address. Zip code is optional.
- The billing address check verifies only the numeric characters in the street address and Zip code (if available).

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payments Requests](path?=docs/Resources/API-Documents/Payments/Payments.md)
- [Test Address and Security Code](?path=docs/Resources/Guides/Testing/Test-Address-Security.md)
- [Test Declines](?path=docs/Resources/Guides/Testing/Test-Declines.md)
- [Test Errors](?path=docs/Resources/Guides/Testing/Test-Errors.md)
- [Test Fraud Settings](?path=docs/Resources/Guides/Testing/Test-Fraud.md)
- [Supported Card Types](?path=docs/Resources/Master-Data/Card-Type.md)

---
