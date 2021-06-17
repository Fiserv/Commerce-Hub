---
tags: [carat, commerce-hub, enterprise, test-cards]
---

# Test Cards

## Overview

Commerce Hub allows merchants to test various forms of payment. For security purposes, Commerce Hub will enable the developer to perform tests that simulate certain situations, such as different brands of credit cards, card present, card not present and eWallets. Here’s a table with a set of test credit card numbers that can be used for simulations.

<!-- theme: info --> 
> Both [transaction](?path=docs/Resources/Guides/Testing/Test-Response-Codes.md) and [verification](?path=docs/Resources/Guides/Testing/Test-AVSCVV.md) responses can be triggered by entering a specific transaction amount.


## Test Cards

For the transactions where address verification is required, the merchant's API is required to pass the billing information as part of the request. 

Commerce Hub will support testing for the following test-cards:


| Number| Card Brand | Expiration Date| 
| -------- | :--: | :------------: | ------------------ |
| 4111111111111111 | Visa | Any Future Date| 
| 4200000000000000 | Visa | Any Future Date |  
| 5500000000000004 | MasterCard | Any Future Date |  
| 370000000000002 | American Express | Any Future Date | 
| 586824160825533338 | Maestro International | Any Future Date |  



## See Also

- [API Explorer](../api/?type=post&path=/payments/v1/charges)
- [Test Address Security Code Verification]
- [Test Response Codes]

---
