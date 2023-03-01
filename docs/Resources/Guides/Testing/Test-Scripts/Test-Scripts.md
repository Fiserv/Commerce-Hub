---
tags: [Testing, Test Integration, Test Cards, Test Errors] 
---

# Test Response Messages

Commerce Hub allows developers who integrate with our API the ability to trigger responses and to ensure that they are handled accordingly. 

<!-- theme: warning -->
> Test documentation provided is intended to be used in the Commerce Hub sandbox environment, for end-to-end certification testing utilize the test scripts located in the developer dashboard.

---

## Approval Response

A approval response can be triggered by entering any `total` in the `amount` object under $5,000 using the test cards below.

| Card Type | Card Number | Expiration Date | Security Code |
| ----- | ---- | ----------- | ------------ |
|*Visa* | 4012001928706700 | 12/2030 | 777 |
|*MasterCard* | 5500007287297385 | 12/2030 | 777 |
|*Amex* | 341111227713933 | 12/2030 | 7777 |
|*Discover* | 6011114305944707 | 12/2030 | 777 |

---

## Specific Response

A specific response can be triggered by entering a specific `total` in the `amount` object using the test cards below. The dollar amounts between 5001.00 - 5999.00 can be used to trigger the desired [response code](?path=docs/Resources/Guides/Response-Codes/Response-Codes.md) or [error code](?path=docs/Resources/Guides/Response-Codes/Error.md).

<!-- theme: example -->
>To receive a response of 006 Declined, submit 5006.00 as the total. 

| Card Type | Card Number | Expiration Date | Security Code |
| ----- | ---- | ----------- | ------------ |
|*Visa* | 4012001915677112 | 12/2030 | 777 |
|*Mastercard* | 5500005275558172 | 12/2030 | 777 |
| *Amex* | 341111213920088 | 12/2030 | 7777 |
| *Discover* | 6011118233647696 | 12/2030 | 777 |

---

## Security Code

A specific [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) response can be triggered by entering a specific `total` in the `amount` object using the test cards below. 

| Card Type | Card Number | Expiration Date | Security Code |
| ----- | ---- | ----------- | ------------ |
|*Visa* | 4012001472472642 | 12/2030 | 777 |
|*Mastercard* | 5500008286090219 | 12/2030 | 777 |
| *Amex* | 341111880552552 | 12/2030 | 7777 |
| *Discover* | 6011111273436666 | 12/2030 | 777 |

### Test Security Code Response

The dollar amounts between 5070.00 - 5079.00 can be used to trigger the desired response.

| Amount | Response | Description |
| ---- | ----------|-----|
| $5070.00 | *MATCHED* | Data matches with issuer system | 
| $5071.00 | *NOT_MATCHED* | Data does not match with issuer system |
| $5072.00 | *NOT_PROCESSED* | Security code verification not done |
| $5073.00 | *NOT_PRESENT* | Security code not present in the input |
| $5074.00 | *NOT_CERTIFIED*| Issuer not certified to verify sercurity code |
| $5075.00 | *NOT_CHECKED* | Security code not checked |
| Any Amount | *NONE* | No security code provided |

---
## Address Verification

A specific [address verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md) response can be triggered by entering a specific `total` in the `amount` object using the test cards below. The dollar amounts between 5080.00 - 5099.00 can be used to trigger the desired response.

<!-- theme: example -->
>Street, Postal Code and Cardholder verification cannot be tested at the same time. The default response of _NONE_ will return for the fields not tested.

| Card Type | Card Number | Expiration Date | Security Code |
| ----- | ---- | ----------- | ------------ |
|*Visa* | 4012008565774776 | 12/2030 | 777 |
|*Mastercard* | 5500002389250960 | 12/2030 | 777 |
| *Amex* | 341111565369561 | 12/2030 | 7777 |
| *Discover* | 6011116171399338 | 12/2030 | 777 |

### Test Street Response

To receive a specific `streetMatch` response, pass the specific amount from the table below.

| Amount | Value | Descrption | 
| ----- | ---- | ------------|
| $5080.00 | *MATCHED* | Data matches with issuer system with some mismatch |
| $5081.00 | *NOT_MATCHED* | Data does not match with issuer system |
| $5082.00 |*NOT_CHECKED* | Street address verification not done |
| $5083.00 | *NO_INPUT_DATA* | Street address not present in the input |
| Any Amount | *NONE* | Street address not available (Default Response) |

### Test Postal Code Response

To receive a specific `postalCodeMatch` response, pass the specific amount from the table below.

| Amount | Value | Descrption | 
| ----- | ---- | ------------|
| $5085.00 | *MATCHED* | Data matches with issuer system with some mismatch |
| $5086.00 | *NOT_MATCHED* | Data does not match with issuer system |
| $5087.00 | *NOT_CHECKED* | Postal code verification not done |
| $5088.00 | *NO_INPUT_DATA* | Postal code not present in the input |
| Any Amount | *NONE* | Postal code not available (Default Response) |

### Test Cardholder Name Response

To receive a specific `cardholderNameResponse` response, pass the specific amount from the table below.

<!-- theme: info -->
> Cardholder name response is only valid on American Express (AMEX) transactions.

| Amount | Value | Description |
| --- | ------- | ------- |
| $5091.00 | *1* | Cardholder name matches |
| $5092.00 | *2* | Cardholder name, billing address, and postal code match |
| $5093.00 | *3* | Cardholder name and billing postal code match |
| $5094.00 | *4* | Cardholder name and billing address match |
| $5095.00 | *5* | Cardholder name incorrect, billing address and postal code match |
| $5096.00 | *6* | Cardholder name incorrect, billing postal code matches |
| $5097.00 | *7* | Cardholder name incorrect, billing address matches |
| $5098.00 | *8* | Cardholder name, billing address, and postal code are all incorrect |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Address Verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md)
- [Charge Request](path?=docs/Resources/API-Documents/Payments/Charges.md)
- [Error Codes](?path=docs/Resources/Guides/Response-Codes/Error.md)
- [Response Codes](?path=docs/Resources/Guides/Response-Codes/Response-Codes.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)

---
