---
tags: [Device Management, Decision Table, Getting Started, Device, Terminal, Point-of-Sale]
---

# POS Decision Table: Cloud BIN Integration Guide

Commerce Hub Cloud BIN Service will decrypt [encrypted card data](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md) and provide clear *(unencrypted)* response back to the point-of-sale *(POS)*, based on the merchant configuration. This data may be returned in the `cardDetails` object as `primaryCardData` and `additionalCardData`. This information can be used by a POS application to take required actions on accounts being presented for transactions.

The Cloud BIN Service can be setup to receive the following information:

- **PCI data:** Commerce Hub will return the leading digits of the card in the clear
- **Non-PCI data:** Commerce Hub will return the full decrypted card data, for example [gift cards](?path=docs/Resources/Guides/Payment-Sources/Gift-Card.md) and loyalty cards.
- **Specialty cards:** Commerce Hub will return the required digits and positions in the clear for device prompting, for example [Fleet](?path=docs/Resources/Guides/Payment-Sources/Fleet/Fleet-Brand-Req.md).

---

## Step 1: Set up the Cloud BIN Service

In Merchant Configuration and Boarding, the POS Decision Table needs to be set up for the Cloud BIN Service with a range of 6-digit BINs.

---

## Step 2: Configure the POS application

The POS application will need to [integrate with Commerce Hub's APIs](?path=docs/Resources/API-Documents/Use-Our-APIs.md) and be configured to follow the required logic to access the Cloud BIN Service when needed. The developer should work with their device manufacturers to understand what local 8-digit BIN *(or any other BIN handling logic)* capabilities are available. Cloud BIN Service is a supplemental feature and does not replace local BIN handling processes performed by devices and POS Applications.

---

## Step 3: Download the POS Decision Table

The POS will [download the POS Decision Table](?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Download.md) daily to determine if a new table exists.

---

## Step 4: Request for additional information

The POS will utilize the initial 6-digits of the card and all available local BIN options *(local BIN exclusions, [POS Decision Table](?path=docs/Resources/API-Documents/Device-Management/Decision-Table.md), etc.)* to verify proper routing before calling the Cloud BIN Service.

<!-- theme: info -->
> The POS application should use local business logic guided by available local BIN handling capabilities, to determine when to access the Cloud BIN Service.

If all local BIN handling options have been exhausted, then the POS will [request additional information](?path=docs/Resources/API-Documents/Payments_VAS/Cloud-BIN-Lookup.md) from the Cloud BIN Service for the following:

- Transactions where the first 6-digits of the card are found in the POS Decision Table.
- Transactions where the device identifies a BIN not found in the local device routing table or POS Decision Table.

**BIN not found:**

When a transaction with a BIN is not found in local BIN handling rules and not found in the POS Decision Table rules, the POS should not block API calls to the Cloud BIN Service. The POS should notify the business to add the unhandled BIN to the Cloud Bin Service POS Decision Table for proper future handling. The Cloud BIN Service will return appropriate clear data based on defined rules for the unhandled card BIN. For example: *"Unhandled card sent to the Cloud Bin Service. Please contact your account representative to add the unhandled BIN to the Cloud BIN Service POS Decision Table rules."*

---

## Step 5: Perform additional POS processing

Based on the `cardDetails` received, the POS application should follow it's local business logic.

---

## See also

- [Account Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Cloud BIN Download](?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Download.md)
- [POS Decision Tables](?path=docs/Resources/API-Documents/Device-Management/Decision-Table.md)
- [TransArmor Token](?path=docs/Resources/Guides/Payment-Sources/Tokenization/TransAmor.md)

---
