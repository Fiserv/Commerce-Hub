---
tags: [Device Management, Decision Table, Getting Started, Device, Terminal, Point of Sale]
---

# POS Decision Table: Cloud BIN Integration Guide

Commerce Hub's Cloud BIN Service will decrypt the [encrypted card data](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md) and provide a response back to the device including the `additionalCardData` *(positions)* and the `primaryCardData`. This information can be used by a POS device to take preemptive actions on accounts being presented for transactions.

- **PCI data:** Commerce Hub will return the first 8-digits of the BIN
- **Non-PCI data:** Commerce Hub will return the full card data
- **Fleet Cards:** Commerce Hub will return the required digits in the clear for device prompting

---

## Step 1: Setup Cloud BIN Service

The POS Decision Table is setup with a range of 6-digit BINs in Merchant Configuration and Boarding.

---

## Step 2: Configure the device

The device will need to integrate with Commerce Hub's APIs and be configured to route cards and store the BIN information. The device should know if it can support 8-digit BINs locally and be configured with the merchant's known card ranges. This data is stored in a BIN Exclusion File along with Special Handling Rules.

---

## Step 3: Download POS Decision Table

The device will [download the POS Decision Table](?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Download.md) and should validate if a new table exists daily.

---

## Step 4: Request additional information

The device will utilize the initial 6-digits of the BIN for routing decisions to the Cloud BIN Service.

<!-- danger -->
> The device should not route BINs included in the Exclusion File, Special Handling or standard branded cards that do not require an 8-digit BIN.

The device will [request additional information](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md#cloud-bin-request) from the Cloud BIN Service for the following:

- Transactions where the first 6-digits of the card are found in the POS Decision Table.
- Transactions where the device identifies a card not found in the POS Decision Table or the device routing table.

---

## Step 5: Prompt for additional data

Based on the `cardDetails` the device should prompt for the required data.

---

## See also

- [Account Information Lookup](?path=docs/Resources/API-Documents/Payments_VAS/Information-Lookup.md)
- [Cloud BIN Download](?path=docs/Resources/API-Documents/Device-Management/DT-Cloud-BIN-Download.md)
- [POS Decision Tables](?path=docs/Resources/API-Documents/Device-Management/Decision-Table.md)
- [TransArmor Token](?path=docs/Resources/Guides/Payment-Sources/Tokenization/TransAmor.md)

---
