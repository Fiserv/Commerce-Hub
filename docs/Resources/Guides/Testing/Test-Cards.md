---
tags: [Testing, Test Cards]
---

# Test Cards

Commerce Hub allows testing of [supported card types](?path=docs/Resources/Master-Data/Card-Type.md) by providing test card data. Funds will not be processed while using the sandbox or certification environments, these test cards are used to perform tests that simulate certain situations for different card brands.

---

## Network End to End Test Cards

Commerce Hub provides test scripts with card numbers that will allow you test against the various networks that are supported using the certification environment. No funds will be charged, refunded or processd while utilizing a production account. 

<!-- 
Will our system automatically submit the void on the test card or will the merchant have to manually void the transaction?
Will we support 3-D secure?
Can we simulate payments in another country?
 --> 

---

## Sandbox Test Cards

Commerce Hub provides generic test card numbers, an allows generation of merchant dedicated card numbers. Using the Commerce Hub sandbox, you can use the generated test payment cards to simulate real-life payment scenarios and to verify the correct integration of your systems. No funds will be charged, refunded or processd while utilizing a test account. 


<!-- theme: info -->
>Any future expiration date can be used for test cards. See [test security code response](?path=docs/Resources/Guides/Testing/Test-Address-Security.md) to determine the 3 or 4-digit (AMEX) security code to pass based on the desired response.

| Number | Card Type |
| -------- | :--: |
| 370000000000002 |American Express |
| 378282246310005 |	American Express Level II |
| 3056930009020004 |	Diners Club |
| 36227206271667 |	Diners Club |
| 6011000993010970 |Discover |
| 3566002020360505 |	JCB |
| 5500000000000004 | MasterCard |
| 5555555555554444 |	Mastercard Level II |
| 5555555555554444 |	Mastercard Level III |
| 2223003122003222 |	Mastercard (2-series) |
| 5200828282828210 |	Mastercard (debit) |
| 5105105105105100 |	Mastercard (prepaid) |
| 6200000000000005 |	UnionPay |
| 4111111111111111 | Visa |
| 4200000000000000 | Visa Level II |
| 4242424242424242 |	Visa Level III |
| 4000056655665556 |	Visa (debit)|
| 4105105105105100 |	Visa (prepaid) |

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


<!-- theme: info -->
<!-- https://docs.adyen.com/development-resources/test-cards/create-test-cards -->

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
- [Test Address and Security Code](?path=docs/Resources/Guides/Testing/Test-Address-Security.md)
- [Test Declines](?path=docs/Resources/Guides/Testing/Test-Declines.md)
- [Test Errors](?path=docs/Resources/Guides/Testing/Test-Errors.md)
- [Test Fraud Settings](?path=docs/Resources/Guides/Testing/Test-Fraud.md)
- [Supported Card Types](?path=docs/Resources/Master-Data/Card-Type.md)

---
