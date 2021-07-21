---
tags: [carat, commerce-hub, enterprise, master-data, additional-transaction-data]
---


# Supported Card Types

Our payments solutions enable you to integrate them into a seamless customer experience, and enable you to accept your customers' preferred payment methods.

<!-- 
Do we need to include BIN (first digit only, 4, 5, 6)
Do we need to include security code or security code length?
Will we support union pay? 
 --> 


|Payment Method | BIN | Length | Security Code | Response Value| 
|-------|-------|-------|-------|--------------|
| Visa | 4 | 13, 16 | 3-digit |*VISA* | 
| Mastercard | 51-55, 2221-2720 | 16 | 3-digit | *MASTERCARD* |
| American Express | 34, 37 | 15 | 4-digit| *AMERICAN_EXPRESS* |
| Discover | 	6011, 622126–622925, 644, 645, 646, 647, 648, 649, 65 | 16-19 | 3-digit | *DISCOVER* |
| Diners | 36, 54 | 14-19 | 3-digit | *DINERS* |
| Maestro | 6759, 676770, 676774, 5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763 | 12-19 | 3-digit | *MEASTRO* |
| JCB | 3528–3589 | 16-19 | 3-digit | *JCB* |
| Union Pay | 62 | 16-19 | 3-digit | *UNION_PAY* |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---