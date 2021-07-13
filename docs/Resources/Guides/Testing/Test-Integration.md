---
tags: [carat, commerce-hub, enterprise, testing, test-integration, test-cards, test-errors]
---


# Test Integration

Commerce Hub allows developers to integrate with the API to trigger responses and to ensure that they are handled accordingly. 

### Charges API

When using the Charges API with Commerce Hub’s client libraries and SDKs, ensure that:

The card Element is passed correctly to createToken in your submit handler.
In the response handler for createToken, card errors are handled and displayed properly.
Only valid tokens are passed to your server as part of payment form submission.

### Basic test card numbers 

Genuine card information cannot be used in test mode. Instead, use any of the following test card numbers, a valid expiration date in the future, and any random CVC number, to create a successful payment. Each basic test card’s billing country is set to U.S. If you need to create test card payments using cards for other billing countries, use the international test cards.

<!-- theme: info -->
>Any future expiration date can be used for test cards.

| Number | Card Type |	CVC	| Date |
| -------- | :--: |
| 4242424242424242 |	Visa|	Any 3 digits |	Any future date
| 4000056655665556 |	Visa (debit)| Any 3 digits | 	Any future date |
| 5555555555554444 |	Mastercard |	Any 3 digits |	Any future date |
| 2223003122003222 |	Mastercard (2-series) |	Any 3 digits |	Any future date |
| 5200828282828210 |	Mastercard (debit) |	Any 3 digits |	Any future date |
| 5105105105105100 |	Mastercard (prepaid) |	Any 3 digits |	Any future date |
| 378282246310005 |	American Express | 	Any 4 digits |	Any future date |
| 371449635398431 |	American Express |	Any 4 digits |	Any future date |
| 6011111111111117 | Discover |	Any 3 digits |	Any future date |
| 6011000990139424 |	Discover |	Any 3 digits |	Any future date |
| 3056930009020004 |	Diners Club |	Any 3 digits |	Any future date |
| 36227206271667 |	Diners Club |	Any 3 digits |	Any future date |
| 3566002020360505 |	JCB |	Any 3 digits |	Any future date |
| 6200000000000005 |	UnionPay |	Any 3 digits |	Any future date |


Description of what commerce hub offers to allow a developer to test the intergration

Various test methods and a link to the article



## See Also


- [API Explorer]
- [Charge Request]
- [Test Address and Security Code]
- [Test Declines]
- [Test Errors]

