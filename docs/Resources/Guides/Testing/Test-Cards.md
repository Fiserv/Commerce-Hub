---
tags: [carat, commerce-hub, enterprise, testing, test-cards]
---


# Test Cards

Commerce Hub allows merchants to test various forms of payments by providing test card data. Although no money will be processed while using a test account, merchants will most likely want to perform tests that simulate certain situations for different card brands.

A transaction error can also be triggered (for testing purposes) by entering a specific amount or  error code for the transaction.  

Address and security code verification responses can be triggered (for testing purposes) by entering a specific address or security code. 

<!-- theme: info -->
>Any future expiration date can be used for test cards.

| Number | Card Type | 
| -------- | :--: |
| 4111111111111111 | Visa | 
| 4200000000000000 | Visa |
| 5500000000000004 | MasterCard |
| 370000000000002 |American Express |
| 6011000993010970 |Discover |


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


## See Also


- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Charge Request] (../docs/Resources/API-Documents/Payments/Charges.md)
- [Test Address and Security Code]
- [Test Declines]
- [Test Errors]


