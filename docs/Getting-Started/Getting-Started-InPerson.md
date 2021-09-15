---
tags: [carat, commerce-hub, enterprise, getting-started, in-person, payments, card-not-present, card-present, emv, debit, software, terminal, point-of-sale, pos]
---

# In-Person Payments

Commerce Hub supports in-person or card present payment transactions where the customer physically presents the payment source while making a transaction at any merchant terminal. This type of transcation can include swiping a card with a magnetic strip, inserting or tapping a card with an [EMV chip](?path=docs/Resources/FAQs-Glossary/Glossary.md#emv), or tapping a mobile device with the card loaded to a digital wallet.

---

### RESTful APIs

Commerce Hub allows a merchant to build their own UI and manage customer transactions within their own software or terminal using Commerce Hub's RESTful APIs.

The three types of integration Commerce Hub offers for Card Present payments are: [encrypted PIN Pad](#encrypted-pin-pad), [semi-integrated](#semi-integrated), and [fully-integrated](#fully-integrated). 

---

## Encrypted PIN Pad
 
By leveraging the third-party EMV-enabled payments solution, the customer's payment transactions are encrypted via a multi-layered security approach. The terminal or software processes the transaction with a plug and play, semi-integrated solution and submits the RESTful request to Commerce Hub. This makes the encrypted PIN Pad solution to be the most secure option for businesses leveraging it. 

**Begin integration with Commerce Hub with an [Encrypted PIN Pad](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).**

---

## Semi-Intergated

<!-- theme: danger -->
> We are enhancing Commerce Hub to include semi-integrated device support and the documents related to the features will be released soon.

Semi-integrated solutions run on a combination of Commerce Hub and third-party hardware. Commerce Hub's semi-integration solution allows your existing point-of-sale software to accept EMV based, PCI-compliant transactions. A semi-integration integrates your hardware and software with Commerec Hub's hardware and software, making your point-of-sale EMV compliant quickly and easily.

**Begin integration with Commerce Hub with a [Semi-integrated device](?path=docs/In-Person/Integrations/Semi-Integrated.md).**

---

## Fully-Integrated

<!-- theme: danger -->
> We are enhancing Commerce Hub to include fully-integrated device support and the documents related to the features will be released soon.

Commerce Hub's fully-integrated payment system efficiently manages all the processes by a single integrated system. It has the payment application as a part of the core POS solution. The software handles every aspect of the transaction, from scanning and reading the bar code to processing the payments and managing inventory and replenishment. All card payment activity is handled by the POS terminal from entering the cardholder data to the close of the sale, all in a matter of seconds.

**Begin integration with Commerce Hub with a [Fully-integrated device](?path=docs/In-Person/Integrations/Fully-Integrated.md).**

---
