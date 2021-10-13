---
tags: [carat, commerce-hub, enterprise, enterprise-portal, business-track, virtual-terminal, reporting, settings]
---

# ClientLine Enterprise Portal

ClientLine  offers merchants the ability to run business task such as:

- Creating Reports
- Managing Reports

Reports
Authorizations/SiteCard Activity Report: New report to identify duplicate site and card activities


Settlement: New report was introduced called Airline Addenda Search.
Reference: New report was introduced called Outlet Search.
Enhancements
Reports
Authorizations/GenericAnalysis: Added From and To time to generic analysis report.
Authorization: Added additional merchandise codes for Buypass transactions.
Authorization: Additional fields have been added to Search report.
Reference/Metadata: Enabled JSON format to download report data.

Overview of CLX, what client can use for etc.


# OPTION 1

Should look like future Getting Started articles (with a header and cards (dev studio team is currently implementing)

CARD 1 - VT with small description and links to VT article (this allows us more flexibility)

---

# OPTION 2

Should look like current Getting Started articles with a header and description

## Virtual Terminal

What it is, who/why the merchant developer would use it. (Intiate Transaction)

See the Help section in the ClientLine Enterpirse Portal for more information on how to use x,y,z.



---

## Quick Key

depending if they put format and explain the fields, we may need article

how to use, formatting, etc

---

## Reporting

how to run, schedule, update blah blah blah

Report types

---

## Account Management

We will have to create most of the documentation as it will redirect to Marketplace, so would need to describe and then link to another doc with the steps.

This involves adding MIDs to CH, Entitlements, features, etc (will neeed to get with the marketplace team to get full info)

How will User Management work, at the BT level, by a merchant admin, in marketplace, in BT??
theorycrafting: user signs up, merch admin will be able to add them to the VT and set permissions?? different roles and levels and restrictions. Similarly who documents that in BT or they make us do it? 

PGW https://support.payeezy.com/hc/en-us/articles/203731249-Real-time-Payment-Manager-RPM-User-Guide#7

---

## Fraud Controls

very complex so depending on what BT teams we made need to make

---

## Hosted Payment Page Setup

I doubt going to make something, if they do probably won't include code, most likely jsut an overview of customzation

link to the how to, and link to the HPP documentation we create

---

# OLD INFO

# Enterprise Portal

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
- User Management
- Profile Settings

---

