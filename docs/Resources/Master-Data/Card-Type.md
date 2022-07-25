---
tags: [API Reference, Credit Card, Card Brand, Card Scheme, Card Type, Master Data]
---

# Supported Card Types

Commerce Hub supports the following major card brands (schemes).

|Payment Method | BIN | Length | Security Code | CH Value| Region |
|-------|-------|-------|-------|--------------| ----- |
| Visa | 4 | 13, 16 | 3-digit |*VISA* | US, CA |
| Mastercard | 51-55, 2221-2720 | 16 | 3-digit | *MASTERCARD* | US, CA |
| American Express | 34, 37 | 15 | 4-digit| *AMEX* | US |
| Discover | 	6011, 622126–622925, 644, 645, 646, 647, 648, 649, 65 | 16-19 | 3-digit | *DISCOVER* | US |
| Diners Club | 36, 54 | 14-19 | 3-digit | *DINERS* | US |
| Maestro | 6759, 676770, 676774, 5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763 | 12-19 | 3-digit | *MAESTRO* | US |
| JCB | 3528–3589 | 16-19 | 3-digit | *JCB* | US |
| Union Pay | 62 | 16-19 | 3-digit | *UNION_PAY* | US |
| Interac | 001203 | 16 | N/A | *INTERAC* | CA |

---

## See Also
 
- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Payment Card](?path=docs/Resources/Guides/Payment-Sources/Payment-Card.md)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)

---
