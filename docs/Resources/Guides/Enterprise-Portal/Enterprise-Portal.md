# Enterprise-Portal

## Overview

Merchants can access the enterprise portal through Business Track. Each merchant receives access to Commerce Hub, a real-time web-based back-office application that logs the transactions conducted through the Virtual POS, POS Batch, Gateway Payment Pages or the Commerce Hub API. Searches and refunds can be conducted. Commerce Hub does not require any software installation, but does require User IDs for access.

## Virtual Terminal

A merchant may be required to process an offline transaction or may need to manually process a secondary transactions, e.g. to take orders via phone or process a cancel, refund, caputure, etc.

- Create [Payment URLs](?path=docs/Online-Mobile-Digital/Payment-URL/Payment-URL.md) that allow consumers to make the payment at a later point.
- Batch uploads via [Quick Key](?path=docs/Online-Mobile-Digital/Virtual-Terminal/Quick-Key.md) to enter multiple transactions quickly into the Virtual Terminal.

## Fraud Settings
Merchants have the ability to set and manager the fraud settings inside the enterpirse portal. Commerce Hub implements various fraud controls that allows the merchant to monitor potentially fraudulent transactions including; [postitive and negative filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Filters.md), [velocity controls](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Velocity.md), and [transaction restrictions](?path=docs/Resources/Guides/Fraud/Fraud-Settings-Restrictions.md), that will automatically accept or reject transactions. Unlike [AVS and CVV filters](?path=docs/Resources/Guides/Fraud/Fraud-Settings-AVS-CVV.md), these will block transactions before any authorization attempt is made.
## Reporting

The Commerce Hub reporting API allows users to search the transaction records and to generate standard reports (Activity, Closed Batches, Pending Batches, Declined). The data is returned in CSV format. Merchants can use the reporting data to validate the payouts and the transactions settlement. The data also helps merchants to respond back to any chargeback or transaction related query, fraud detects etc.



## See Also

- Requesting Access
- Navigation
- User Management
- Profile Settings


---