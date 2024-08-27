---
tags: [Testing, Simulator, Sandbox, Test Cards] 
---

# Prompt a simulator response message

<!-- theme: danger -->
> Not all APIs are available in [Commerce Hub's sandbox environment](?path=docs/Resources/API-Documents/Use-Our-APIs.md). We are enhancing Commerce Hub's sandbox support and additional documents related to the simulator will be published soon.

Commerce Hub allows developers who want to integrate with our APIs the ability to simulate responses and to ensure that they are handled accordingly.

The simulation documentation provided is intended to be used in the Commerce Hub sandbox environment, for end-to-end certification testing utilize the test scripts provided by your implementation specialist or account representative.

<!-- theme: info -->
> Commerce Hub's simulator cards can be converted to Track 1 or Track 2 for [*PaymentEMV*](?path=docs/In-Person/Encrypted-Payments/EMV.md) and [*PaymentTrack*](?path=docs/In-Person/Encrypted-Payments/Track.md) using [neaPay's Track 1 and Track 2 generator](https://neapay.com/online-tools/card-track1-track2-generator.html).

<!-- located in the developer dashboard. -->

---

## Simulate an approval response

An approval response can be triggered by entering any `total` in the `amount` object under $5,000 using the test cards below.

| Card Type | Card Number | Expiration Date | Security Code |
| ----- | ----- | ----- | ----- |
| *Visa* | 4012001928706700 | 12/2030 | 777 |
| *MasterCard* | 5500007287297385 | 12/2030 | 777 |
| *Amex* | 341111227713933 | 12/2030 | 7777 |
| *Discover* | 6011114305944707 | 12/2030 | 777 |

---

<!--
## Simulate a decline response

A specific response can be triggered by entering a specific `total` in the `amount` object using the test cards below. The dollar amounts between 5001.00 - 5999.00 can be used to trigger the desired [response code](?path=docs/Resources/Guides/Response-Codes/Response-Code.md) or [error code](?path=docs/Resources/Guides/Response-Codes/Error-Code.md).
-->

<!-- theme: example -->
<!-- > To receive a response of 006 Declined, submit 5006.00 as the total.

| Card Type | Card Number | Expiration Date | Security Code |
| ----- | ---- | ----------- | ------------ |
| *Visa* | 4012001915677112 | 12/2030 | 777 |
| *Mastercard* | 5500005275558172 | 12/2030 | 777 |
| *Amex* | 341111213920088 | 12/2030 | 7777 |
| *Discover* | 6011118233647696 | 12/2030 | 777 |

---

-->

## Simulate a security code response

A specific [security code](?path=docs/Resources/Guides/Fraud/Security-Code.md) response can be triggered by entering a specific `total` in the `amount` object using the test cards below.

| Card Type | Card Number | Expiration Date | Security Code |
| ----- | ----- | ----- | ----- |
| *Visa* | 4012001472472642 | 12/2030 | 777 |
| *Mastercard* | 5500008286090219 | 12/2030 | 777 |
| *Amex* | 341111880552552 | 12/2030 | 7777 |
| *Discover* | 6011111273436666 | 12/2030 | 777 |

### Security code response amounts

The dollar amounts between $5070.00 and $5079.00 can be used to trigger the desired response.

| Amount | Response | Description |
| ----- | ----- | ----- |
| $5070.00 | *MATCHED* | Data matches with issuer system |
| $5071.00 | *NOT_MATCHED* | Data does not match with issuer system |
| $5072.00 | *NOT_PROCESSED* | Security code verification not done |
| $5073.00 | *NOT_PRESENT* | Security code not present in the input |
| $5074.00 | *NOT_CERTIFIED*| Issuer not certified to verify security code |
| $5075.00 | *NOT_CHECKED* | Security code not checked |
| Any Amount | *NONE* | No security code provided |

---

## Simulate an address verification response

A specific [address verification](?path=docs/Resources/Guides/Fraud/Address-Verification.md) response can be triggered by entering a specific `total` in the `amount` object using the test cards below.

<!-- theme: warning -->
> `streetMatch`, `postalCodeMatch` and `cardholderNameResponse` responses cannot be simulated at the same time. The default response of *MATCHED* will return for the fields not tested.

| Card Type | Card Number | Expiration Date | Security Code |
| ----- | ----- | ----- | ----- |
| *Visa* | 4012008565774776 | 12/2030 | 777 |
| *Mastercard* | 5500002389250960 | 12/2030 | 777 |
| *Amex* | 341111565369561 | 12/2030 | 7777 |
| *Discover* | 6011116171399338 | 12/2030 | 777 |

### Address Verification response amounts

The dollar amounts between $5080.00 and $5099.00 can be used to simulate the desired response.

| Amount | `streetMatch` | `postalCodeMatch` |
| ----- | ----- | ----- |
| $5080.00 | *MATCHED* | *MATCHED* |
| $5081.00 | *NOT_MATCHED* | *MATCHED* |
| $5082.00 | *NOT_CHECKED* | *MATCHED* |
| $5083.00 | *NO_INPUT_DATA* | *MATCHED* |
| $5085.00 | *MATCHED* | *MATCHED* |
| $5086.00 | *MATCHED* | *NOT_MATCHED*  |
| $5087.00 | *MATCHED* | *NOT_CHECKED* |
| $5088.00 | *MATCHED* |  *NO_INPUT_DATA* |
| Any other amount | *NONE* | *MATCHED* |

### Cardholder name response amounts

To receive a specific `cardholderNameResponse` response, pass the specific amount from the table below.

<!-- theme: info -->
> Cardholder name response is only valid on American Express *(AMEX)* transactions.

| Amount | Value | Description |
| ----- | ----- | ----- |
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
- [Payment Requests](?path=docs/Resources/API-Documents/Payments/Payments.md)
- [How to Use Postman for Testing](?path=docs/Resources/Guides/Testing/Postman-Testing.md)
- [Error Codes](?path=docs/Resources/Guides/Response-Codes/Error.md)
- [Response Codes](?path=docs/Resources/Guides/Response-Codes/Response-Codes.md)
- [Security Code Verification](?path=docs/Resources/Guides/Fraud/Security-Code.md)

---
