---
tags: [carat, commerce-hub, enterprise, testing, test-cards]
---


# Test Cards

Commerce Hub allows merchants to test various forms of payments by providing test card data. Although no money will be processed while using a test account, merchants will most likely want to perform tests that simulate certain situations for different card brands.


<!-- theme: info -->
>Any future expiration date can be used for test cards. See [test security code response](?path=docs/Resources/Guides/Testing/Test-Address-Security.md) to determine the 3 or 4-digit (AMEX) security code to pass based on the desired response.

| Number | Card Type | CVV | Expiration Date |
| -------- | :--: |
| 370000000000002 |American Express | Any 3 digits| Any future date|
| 378282246310005 |	American Express | 	Any 4 digits |	Any future date |
| 371449635398431 |	American Express |	Any 4 digits |	Any future date |
| 3056930009020004 |	Diners Club |	Any 3 digits |	Any future date |
| 36227206271667 |	Diners Club |	Any 3 digits |	Any future date |
| 6011000993010970 |Discover |Any 3 digits | Any future date |
| 6011111111111117 | Discover |	Any 3 digits |	Any future date |
| 6011000990139424 |	Discover |	Any 3 digits |	Any future date |
| 3566002020360505 |	JCB |	Any 3 digits |	Any future date |
| 5500000000000004 | MasterCard | Any 3 digits| Any future date|
| 5555555555554444 |	Mastercard |	Any 3 digits |	Any future date |
| 2223003122003222 |	Mastercard (2-series) |	Any 3 digits |	Any future date |
| 5200828282828210 |	Mastercard (debit) |	Any 3 digits |	Any future date |
| 5105105105105100 |	Mastercard (prepaid) |	Any 3 digits |	Any future date |
| 6200000000000005 |	UnionPay |	Any 3 digits |	Any future date |
| 4111111111111111 | Visa | Any 3 digits | Any future date|
| 4200000000000000 | Visa | Any 3 digits | Any future date|
| 4242424242424242 |	Visa|	Any 3 digits |	Any future date
| 4000056655665556 |	Visa (debit)| Any 3 digits | 	Any future date |


## Network E2E Test Cards vs Simulator Test Cards

### Network E2E Test Cards

Commerce Hub provides generic test card numbers that will allow you test against the various networks that are supported using the sandbox. No funds will be charged, refunded or processd while utilizing a test account. 

### Simulator Test Cards

Commerce Hub provides generic test card numbers, but you can also generate your own. Using the Commerce Hub sandbox, you can use the generated test payment cards to simulate real-life payment scenarios and to verify the correct integration of your systems. No funds will be charged, refunded or processd while utilizing a test account. 

### Test Card Requirements

Test card requirements
Generated test cards should meet the following requirements:

- Test card numbers should be between 6-19 digits long.
- All test card numbers in a generated test card range need to have the same number of digits.
- The first six digits of the test card numbers in any generated range need to be valid BIN numbers.
- Test card numbers should comply with standard payment card number constraints. For example, to test a system with Visa you should create a test card range with a valid Visa BIN.
- Although the created test card start and end range numbers are not checked for compliance, if you carry out a test payment the test card is handled like a standard payment card. It undergoes the standard card checks that take place in live environments.
- The billing address details you define for a test card range need to be [Address Verification Service](?path=docs/Resources/Guides/Fraud/Address-Verification.md) compliant, i.e. you always need to include at least the street address. Zip code is optional.
- The billing address check verifies only the numeric characters in the street address and Zip code (if available).


<!-- theme: info -->
<!-- https://docs.adyen.com/development-resources/test-cards/create-test-cards -->

## See Also


- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
- [Test Declines](?path=docs/Resources/Guides/Testing/Test-Declines.md)
- [Test Errors](?path=docs/Resources/Guides/Testing/Test-Errors.md)
- [Test Address and Security Code](?path=docs/Resources/Guides/Testing/Test-Address-Security.md)


