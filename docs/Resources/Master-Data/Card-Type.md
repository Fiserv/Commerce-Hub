---
tags: [API Reference, Credit Card, Card Brand, Card Scheme, Card Type, Master Data]
---

# Supported Card Types

Commerce Hub supports the following major card brands *(schemes)*.

| Payment Method | BIN | Length | Security Code | CH Value| Region |
| ----- | ----- | :-----: | :-----: | ----- | ----- |
| Visa | 4 | 13, 16 | 3-digit |*VISA* | US, CA |
| Mastercard | 51-55, 2221-2720 | 16 | 3-digit | *MASTERCARD* | US, CA |
| American Express | 34, 37 | 15 | 4-digit| *AMEX* | US |
| Discover | 6011, 622126–622925, 644, 645, 646, 647, 648, 649, 65 | 16-19 | 3-digit | *DISCOVER* | US |
| Diners Club | 36, 54 | 14-19 | 3-digit | *DINERS* | US |
| Maestro | 6759, 676770, 676774, 5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763 | 12-19 | 3-digit | *MAESTRO* | US |
| JCB | 3528–3589 | 16-19 | 3-digit | *JCB* | US |
| Union Pay | 62 | 16-19 | 3-digit | *UNION_PAY* | US |
| Interac | 001203 | 16 | N/A | *INTERAC* | CA |

## Fleet Card Types

Commerce Hub supports the following Fleet card brands *(schemes)*.

| Payment Method | BIN Format | Length | CH Value| Region |
| ----- | ----- | :-----: | :-----: | ----- |
| Comdata | 560017 + 10-digit PAN | 16 | *COMDATA* | US |
| Fleet One | 501486 + 13-digit PAN | 19 | *FLEET_ONE* | US |
| Fleetwide | 707685 + 11-digit PAN | 17 | *FLEETWIDE* | US |
| Fuelman | 707649 + 11-digit PAN | 17 | *FUELMAN* | US |
| Mastercard Fleet | 553231–553380, 556083–556099, 556100–556599, 556700–556999 + 10-digit PAN | 16 | *MASTERCARD_FLEET* | US |
| Visa Fleet | 448460–448611, 448613–448615, 448617–448674, 448676–448686, 448688–448699, 461400–461499, 480700–480899 + 10-digit PAN | 16 | *VISA_FLEET* | US |
| Voyager | 7088 + 15-digit PAN | 19 | *VOYAGER* | US |
| Wright Express (WEX) | 690046, 707138 + 13-digit PAN | 19 | *WEX* | US |

---

## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Source Type](?path=docs/Resources/Guides/Payment-Sources/Source-Type.md)
- [Fleet Cards](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet.md)
- [Gift Cards](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md)
- [Private Label Cards](?path=docs/Resources/Guides/Payment-Sources/Private-Label.md)

---
