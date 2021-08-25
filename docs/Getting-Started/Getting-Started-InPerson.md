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

Describe the 3rd [party PIN Pad encrypts the payment source and send it to their software or terminal which then submits the RESTful request to Commerce Hub. 

**Begin integration with Commerce Hub with an [Encrypted PIN Pad](?path=docs/In-Person/Integrations/Encrypted-PIN-Pad.md).**

---

## Semi-Intergated

<!-- theme: danger -->
> We are enhancing Commerce Hub to include semi-integrated device support and the documents related to the features will be released soon.

Describe the 3rd [party PIN Pad encrypts the payment source and send it to their software or terminal which then submits the RESTful request to Commerce Hub. 

**Begin integration with Commerce Hub with a [Semi-integrated device](?path=docs/In-Person/Integrations/Semi-Integrated.md).**

---

## Fully-Integrated

<!-- theme: danger -->
> We are enhancing Commerce Hub to include fully-integrated device support and the documents related to the features will be released soon.

Describe the 3rd [party PIN Pad encrypts the payment source and send it to their software or terminal which then submits the RESTful request to Commerce Hub. 

**Begin integration with Commerce Hub with a [Fully-integrated device](?path=docs/In-Person/Integrations/Fully-Integrated.md).**


<!-- overview similar to online; integration methods are semi-integrated with a 3rd party terminal that will encrypt the payment source, fully-integration where commerce hub will encrypt the payment source (coming soon).

semi-integrated: where the software obtains the payment information from a 3rd party device (reader i.e. ingenico, etc.), software submits an RESTful API request with the [encrypted block] to Commerce Hub.

fully-integrated: where a EMV terminal (i.e. Verifone) sends the payment data to Commerce Hub to encrypt and process, the response is updated in software.

need to state commerce hub supports the following encrypted payment methods EMV, track data, and manual entry

-->

---
